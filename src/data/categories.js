/**
 * The five fixed VELLORA categories.
 * `image` points at files in `public/images/categories/`. Set to `null`
 * to render the text-only placeholder tile.
 */
export const categories = [
	{
		key: "handbags",
		label: "Handbags",
		blurb: "Structured silhouettes and everyday essentials.",
		image: "/images/categories/handbags.jpg",
	},
	{
		key: "shoes",
		label: "Shoes",
		blurb: "Considered footwear, quietly refined.",
		image: "/images/categories/shoes.jpg",
	},
	{
		key: "watches",
		label: "Watches",
		blurb: "Timepieces chosen for craft and clarity.",
		image: "/images/categories/watches.jpg",
	},
	{
		key: "jewellery",
		label: "Jewellery",
		blurb: "Fine details, worn close.",
		image: "/images/categories/jewellery.jpg",
	},
	{
		key: "sunglasses",
		label: "Sunglasses",
		blurb: "Frames with an editorial line.",
		image: "/images/categories/sunglasses.jpg",
	},
];

export const categoryKeys = categories.map((c) => c.key);