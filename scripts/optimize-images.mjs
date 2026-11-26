/**
 * One-off image optimiser. Run:  node scripts/optimize-images.mjs
 * Resizes oversized JPEG/PNG photos in place (never upscales) and rebuilds
 * public/og-image.jpg (1200x630) from the hero photograph.
 */
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const pub = path.resolve("public");

const rules = [
	{ dir: "images/hero", max: 1400 },
	{ dir: "images/brand", max: 1400 },
	{ dir: "images/categories", max: 1000 },
	{ dir: "images/products", max: 1400 },
];

function* walk(dir) {
	for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
		const full = path.join(dir, entry.name);
		if (entry.isDirectory()) yield* walk(full);
		else yield full;
	}
}

let before = 0;
let after = 0;

for (const { dir, max } of rules) {
	for (const file of walk(path.join(pub, dir))) {
		if (!/\.(jpe?g|png)$/i.test(file)) continue;
		const input = fs.readFileSync(file);
		const isPng = /\.png$/i.test(file);
		const img = sharp(input).rotate().resize({
			width: max,
			height: max,
			fit: "inside",
			withoutEnlargement: true,
		});
		const output = isPng
			? await img.png({ compressionLevel: 9, palette: true }).toBuffer()
			: await img.jpeg({ quality: 78, mozjpeg: true }).toBuffer();

		before += input.length;
		if (output.length < input.length) {
			fs.writeFileSync(file, output);
			after += output.length;
		} else {
			after += input.length;
		}
	}
}

await sharp(path.join(pub, "images/hero/hero-image.jpg"))
	.resize(1200, 630, { fit: "cover", position: "attention" })
	.jpeg({ quality: 82, mozjpeg: true })
	.toFile(path.join(pub, "og-image.jpg"));

const mb = (n) => (n / 1048576).toFixed(1);
console.log(
	`images: ${mb(before)} MB -> ${mb(after)} MB; og-image.jpg rebuilt`,
);