/**
 * VELLORA — Product catalogue.
 *
 * 20 curated product edits across five categories. Each listing may contain
 * colour variations or related styles within the same category. Customers
 * can refer to the pictured option they prefer when making an enquiry.
 *
 * Distribution:
 *   Handbags    — 6
 *   Shoes       — 4
 *   Watches     — 4
 *   Jewellery   — 3
 *   Sunglasses  — 3
 *
 * Images are owner-provided product photographs stored in
 * `public/images/products/...`. Add or remove photographs in the relevant
 * `images` array. No price field exists by design.
 */

export const products = [
	/* ---------- Handbags (6) ---------- */
	{
		id: "HAND-01",
		slug: "hand-01",
		name: "Quilted Noir Handbag Edit",
		category: "handbags",
		shortDescription:
			"An edit of black quilted styles, from structured top-handle bags to chain-strap and compact designs.",
		description:
			"Explore a selection of black quilted bags with varied shapes and finishes. The pictured options include structured top-handle silhouettes, chain-strap styles and a compact clutch-style design. Browse the photographs and message VELLORA with the option you prefer for further details and availability.",
		images: [
			"/images/products/handbags/hand-01/hand-01-01.jpg",
			"/images/products/handbags/hand-01/hand-01-02.jpg",
			"/images/products/handbags/hand-01/hand-01-03.jpg",
		],
		featured: true,
		isNew: false,
	},
	{
		id: "HAND-02",
		slug: "hand-02",
		name: "Mini Top-Handle Handbag Edit",
		category: "handbags",
		shortDescription:
			"A selection of compact top-handle silhouettes, including quilted and light-coloured styles.",
		description:
			"Discover a small edit of compact handbags with distinctive top handles and structured shapes. The pictured selection includes a dark quilted design and a light-toned bag with contrasting details. Contact VELLORA with the image of your preferred style for current details and availability.",
		images: [
			"/images/products/handbags/hand-02/hand-02-01.jpg",
			"/images/products/handbags/hand-02/hand-02-02.jpg",
		],
		featured: false,
		isNew: false,
	},
	{
		id: "HAND-03",
		slug: "hand-03",
		name: "Patterned & Contrast Handbag Edit",
		category: "handbags",
		shortDescription:
			"A mix of patterned compact designs and a structured light-and-dark flap style.",
		description:
			"This edit brings together a patterned brown compact piece and a structured light-coloured bag with dark contrast detailing. Each pictured option has its own silhouette and finish. Browse the images and let VELLORA know which design you would like to enquire about.",
		images: [
			"/images/products/handbags/hand-03/hand-03-01.jpg",
			"/images/products/handbags/hand-03/hand-03-02.jpg",
		],
		featured: false,
		isNew: true,
	},
	{
		id: "HAND-04",
		slug: "hand-04",
		name: "Textured Mini & Top-Handle Bag Edit",
		category: "handbags",
		shortDescription:
			"A statement-led selection of compact bags with textured finishes and decorative hardware.",
		description:
			"Explore a varied selection of compact handbags, including a red textured top-handle design and darker mini bags with distinctive surface details and hardware. The photographs show different styles rather than one single model. Message VELLORA with your preferred image for further information.",
		images: [
			"/images/products/handbags/hand-04/hand-04-01.jpg",
			"/images/products/handbags/hand-04/hand-04-02.jpg",
			"/images/products/handbags/hand-04/hand-04-03.jpg",
		],
		featured: false,
		isNew: false,
	},
	{
		id: "HAND-05",
		slug: "hand-05",
		name: "Structured Carryall & Patterned Bag Edit",
		category: "handbags",
		shortDescription:
			"A varied edit of structured carryalls, a compact matching bag and patterned shoulder styles.",
		description:
			"Discover a selection that moves from a dark structured carryall with a matching compact piece to a green top-handle silhouette and a patterned shoulder bag. Each photograph presents a different option within the handbag collection. Contact VELLORA with the style you prefer for current details and availability.",
		images: [
			"/images/products/handbags/hand-05/hand-05-01.jpg",
			"/images/products/handbags/hand-05/hand-05-02.jpg",
			"/images/products/handbags/hand-05/hand-05-03.jpg",
		],
		featured: false,
		isNew: false,
	},
	{
		id: "HAND-06",
		slug: "hand-06",
		name: "Quilted Shoulder & Evening Bag Edit",
		category: "handbags",
		shortDescription:
			"A selection of quilted shoulder bags and compact evening-inspired silhouettes.",
		description:
			"Explore an edit of quilted bags in understated grey, silver and black looks. The pictured options include shoulder-bag shapes and a compact clutch-style silhouette, with varied chain and surface details. Browse the photographs and contact VELLORA with your preferred option.",
		images: [
			"/images/products/handbags/hand-06/hand-06-01.jpg",
			"/images/products/handbags/hand-06/hand-06-02.jpg",
			"/images/products/handbags/hand-06/hand-06-03.jpg",
		],
		featured: false,
		isNew: false,
	},

	/* ---------- Shoes (4) ---------- */
	{
		id: "SHOE-01",
		slug: "shoe-01",
		name: "Pointed & Open-Toe Footwear Edit",
		category: "shoes",
		shortDescription:
			"A varied selection of open-toe heels, pointed flats and sleek pointed-toe styles.",
		description:
			"Discover a selection of refined footwear silhouettes, including an open-toe heeled sandal, a light pointed-toe flat with contrasting trim and a dark pointed-toe style. Explore the pictured designs and contact VELLORA with the option you prefer for details and availability.",
		images: [
			"/images/products/shoes/shoe-01/shoe-01-01.jpg",
			"/images/products/shoes/shoe-01/shoe-01-02.jpg",
			"/images/products/shoes/shoe-01/shoe-01-03.jpg",
		],
		featured: true,
		isNew: false,
	},
	{
		id: "SHOE-02",
		slug: "shoe-02",
		name: "White Low-Top Sneaker Edit",
		category: "shoes",
		shortDescription:
			"White low-top sneaker styles with contrasting stripe and patterned details.",
		description:
			"This edit features white low-top sneaker designs with different contrasting accents, including green-and-red stripe details and patterned panels. Browse the pictured options and let VELLORA know which style interests you for further details.",
		images: [
			"/images/products/shoes/shoe-02/shoe-02-01.jpg",
			"/images/products/shoes/shoe-02/shoe-02-02.jpg",
			"/images/products/shoes/shoe-02/shoe-02-03.jpg",
		],
		featured: false,
		isNew: false,
	},
	{
		id: "SHOE-03",
		slug: "shoe-03",
		name: "Contrast & Colour-Accent Sneaker Edit",
		category: "shoes",
		shortDescription:
			"A contemporary mix of low-top sneakers in light, black-accented and soft pink looks.",
		description:
			"Explore a selection of low-top sneaker styles, ranging from a light design with dark accents to a soft pink pair and a clean light-toned option. Each photograph shows a distinct look. Message VELLORA with your preferred image for details and availability.",
		images: [
			"/images/products/shoes/shoe-03/shoe-03-01.jpg",
			"/images/products/shoes/shoe-03/shoe-03-02.jpg",
			"/images/products/shoes/shoe-03/shoe-03-03.jpg",
		],
		featured: false,
		isNew: false,
	},
	{
		id: "SHOE-04",
		slug: "shoe-04",
		name: "Statement Ankle Boot Edit",
		category: "shoes",
		shortDescription:
			"A distinctive selection of ankle boots with embellished, patterned and contrast-trim details.",
		description:
			"This footwear edit brings together several ankle-boot looks, including dark boots with decorative star details, a patterned pair and a dark design with contrasting trim. Browse the pictured styles and contact VELLORA with the option you prefer.",
		images: [
			"/images/products/shoes/shoe-04/shoe-04-01.jpg",
			"/images/products/shoes/shoe-04/shoe-04-02.jpg",
			"/images/products/shoes/shoe-04/shoe-04-03.jpg",
		],
		featured: false,
		isNew: true,
	},

	/* ---------- Watches (4) ---------- */
	{
		id: "WATCH-01",
		slug: "watch-01",
		name: "Sport & Chronograph Watch Edit",
		category: "watches",
		shortDescription:
			"A selection of statement wristwatches, including a green-dial steel look and gold-tone chronograph styles.",
		description:
			"Explore a varied watch selection, from a green-dial steel sports-style design to warm gold-tone chronograph-inspired looks. The pictured options have distinct dial and bracelet details. Contact VELLORA with your preferred image for current details and availability.",
		images: [
			"/images/products/watches/watch-01/watch-01-01.jpg",
			"/images/products/watches/watch-01/watch-01-02.jpg",
			"/images/products/watches/watch-01/watch-01-03.jpg",
		],
		featured: true,
		isNew: false,
	},
	{
		id: "WATCH-02",
		slug: "watch-02",
		name: "Classic Bracelet Watch Edit",
		category: "watches",
		shortDescription:
			"Round light-dial bracelet watches shown in gold-tone, silver-tone and two-tone finishes.",
		description:
			"A refined selection of round-dial bracelet watches with light faces and understated styling. The pictured options include gold-tone, silver-tone and mixed-metal finishes. Message VELLORA with the colour and image you prefer for further details.",
		images: [
			"/images/products/watches/watch-02/watch-02-01.png",
			"/images/products/watches/watch-02/watch-02-02.png",
			"/images/products/watches/watch-02/watch-02-03.png",
		],
		featured: false,
		isNew: false,
	},
	{
		id: "WATCH-03",
		slug: "watch-03",
		name: "Petite & Classic Dress Watch Edit",
		category: "watches",
		shortDescription:
			"A selection of compact bracelet-watch styles with light dials and gold-tone or two-tone details.",
		description:
			"Discover a selection of dress-watch looks, including compact light-dial designs with gold-tone details and a larger classic bracelet style with Roman-numeral detailing. Browse the photographs and contact VELLORA with your preferred option.",
		images: [
			"/images/products/watches/watch-03/watch-03-01.jpg",
			"/images/products/watches/watch-03/watch-03-02.jpg",
			"/images/products/watches/watch-03/watch-03-03.jpg",
		],
		featured: false,
		isNew: true,
	},
	{
		id: "WATCH-04",
		slug: "watch-04",
		name: "Colour-Dial Sport Watch Edit",
		category: "watches",
		shortDescription:
			"A sporty bezel-style watch selection with black, blue and orange dial options.",
		description:
			"This sport-watch edit features a bold bezel-style silhouette with contrasting dial and strap colour combinations. The photographs show black, blue and orange looks. Contact VELLORA with your preferred colour option for current details and availability.",
		images: [
			"/images/products/watches/watch-04/watch-04-01.jpg",
			"/images/products/watches/watch-04/watch-04-02.jpg",
			"/images/products/watches/watch-04/watch-04-03.jpg",
		],
		featured: false,
		isNew: false,
	},

	/* ---------- Jewellery (3) ---------- */
	{
		id: "JEW-01",
		slug: "jew-01",
		name: "Gold-Tone Necklace & Earring Edit",
		category: "jewellery",
		shortDescription:
			"A selection of gold-tone necklace, bracelet and earring looks with decorative and pearl-style accents.",
		description:
			"Explore a jewellery selection featuring gold-tone necklace and bracelet designs alongside earring styles with decorative and pearl-style details. The pictured options include coordinated-looking sets as well as individual pieces. Message VELLORA with the item you prefer for further details.",
		images: [
			"/images/products/jewellery/jew-01/jew-01-01.jpg",
			"/images/products/jewellery/jew-01/jew-01-02.jpg",
			"/images/products/jewellery/jew-01/jew-01-03.jpg",
		],
		featured: true,
		isNew: false,
	},
	{
		id: "JEW-02",
		slug: "jew-02",
		name: "Sculptural Letter & Ring Jewellery Edit",
		category: "jewellery",
		shortDescription:
			"A mix of sculptural letter-shaped earrings, a statement ring and necklace-and-earring styling.",
		description:
			"This jewellery edit brings together bold letter-shaped earring designs, a decorative ring and a necklace with matching-style earrings. The pictured pieces vary in shape and finish. Browse the photographs and contact VELLORA with the item you would like to know more about.",
		images: [
			"/images/products/jewellery/jew-02/jew-02-01.jpg",
			"/images/products/jewellery/jew-02/jew-02-02.jpg",
			"/images/products/jewellery/jew-02/jew-02-03.jpg",
		],
		featured: false,
		isNew: false,
	},
	{
		id: "JEW-03",
		slug: "jew-03",
		name: "Pearl & Statement Jewellery Edit",
		category: "jewellery",
		shortDescription:
			"A varied selection of pearl-detail earrings, decorative drop styles and gold-tone bracelets.",
		description:
			"Discover jewellery styles featuring pearl-detail earrings, ornate drop designs and textured gold-tone bracelet pieces. Each photograph presents a different option within the edit. Message VELLORA with your preferred image for further details and availability.",
		images: [
			"/images/products/jewellery/jew-03/jew-03-01.jpg",
			"/images/products/jewellery/jew-03/jew-03-02.jpg",
			"/images/products/jewellery/jew-03/jew-03-03.jpg",
		],
		featured: false,
		isNew: false,
	},

	/* ---------- Sunglasses (3) ---------- */
	{
		id: "SUN-01",
		slug: "sun-01",
		name: "Tinted Aviator & Statement Frame Edit",
		category: "sunglasses",
		shortDescription:
			"A mix of softly tinted aviator-inspired frames, dark shield-like shapes and bold statement lenses.",
		description:
			"Explore a contemporary eyewear selection spanning light-tint aviator-inspired frames, a dark shield-like silhouette and a bold design with patterned-looking lenses. Browse the pictured options and contact VELLORA with the frame you prefer.",
		images: [
			"/images/products/sunglasses/sun-01/sun-01-01.jpg",
			"/images/products/sunglasses/sun-01/sun-01-02.jpg",
			"/images/products/sunglasses/sun-01/sun-01-03.jpg",
		],
		featured: false,
		isNew: false,
	},
	{
		id: "SUN-02",
		slug: "sun-02",
		name: "Everyday & Oversized Frame Edit",
		category: "sunglasses",
		shortDescription:
			"A varied selection of dark rectangular frames, round aviator-inspired styles and oversized brown lenses.",
		description:
			"This eyewear edit brings together versatile frame shapes, including dark rectangular designs, round light-tint aviator-inspired frames and oversized warm-brown lenses. Message VELLORA with the image of your preferred pair for further details.",
		images: [
			"/images/products/sunglasses/sun-02/sun-02-01.jpg",
			"/images/products/sunglasses/sun-02/sun-02-02.jpg",
			"/images/products/sunglasses/sun-02/sun-02-03.jpg",
		],
		featured: false,
		isNew: true,
	},
	{
		id: "SUN-03",
		slug: "sun-03",
		name: "Sculpted & Oversized Sunglasses Edit",
		category: "sunglasses",
		shortDescription:
			"A selection of sculpted statement frames, from rectangular silhouettes to oversized rounded shapes.",
		description:
			"Discover an expressive eyewear selection featuring a softly tinted rectangular frame, an ornate oversized design and a dark rounded silhouette. Explore the pictured options and contact VELLORA with your preferred style for current details and availability.",
		images: [
			"/images/products/sunglasses/sun-03/sun-03-01.jpg",
			"/images/products/sunglasses/sun-03/sun-03-02.jpg",
			"/images/products/sunglasses/sun-03/sun-03-03.jpg",
		],
		featured: false,
		isNew: false,
	},
];
// /**
//  * VELLORA — Product catalogue.
//  *
//  * 20 placeholder products (product names and descriptions remain
//  * development identifiers to be replaced with owner-supplied copy).
//  * Images are genuine supplier photographs.
//  *
//  * Distribution:
//  *   Handbags    — 6
//  *   Shoes       — 4
//  *   Watches     — 4
//  *   Jewellery   — 3
//  *   Sunglasses  — 3
//  *
//  * Image paths point at files in `public/images/products/...`; adding
//  * or removing a photo is a one-line edit in the relevant `images` array.
//  * No price field exists by design.
//  */

// const PLACEHOLDER_DESCRIPTION =
// 	"Placeholder description — to be supplied by the owner.";

// export const products = [
// 	/* ---------- Handbags (6) ---------- */
// 	{
// 		id: "HAND-01",
// 		slug: "hand-01",
// 		name: "HAND-01",
// 		category: "handbags",
// 		shortDescription: PLACEHOLDER_DESCRIPTION,
// 		description: PLACEHOLDER_DESCRIPTION,
// 		images: [
// 			"/images/products/handbags/hand-01/hand-01-01.jpg",
// 			"/images/products/handbags/hand-01/hand-01-02.jpg",
// 			"/images/products/handbags/hand-01/hand-01-03.jpg",
// 		],
// 		featured: true,
// 		isNew: false,
// 	},
// 	{
// 		id: "HAND-02",
// 		slug: "hand-02",
// 		name: "HAND-02",
// 		category: "handbags",
// 		shortDescription: PLACEHOLDER_DESCRIPTION,
// 		description: PLACEHOLDER_DESCRIPTION,
// 		images: [
// 			"/images/products/handbags/hand-02/hand-02-01.jpg",
// 			"/images/products/handbags/hand-02/hand-02-02.jpg",
// 		],
// 		featured: false,
// 		isNew: false,
// 	},
// 	{
// 		id: "HAND-03",
// 		slug: "hand-03",
// 		name: "HAND-03",
// 		category: "handbags",
// 		shortDescription: PLACEHOLDER_DESCRIPTION,
// 		description: PLACEHOLDER_DESCRIPTION,
// 		images: [
// 			"/images/products/handbags/hand-03/hand-03-01.jpg",
// 			"/images/products/handbags/hand-03/hand-03-02.jpg",
// 		],
// 		featured: false,
// 		isNew: true,
// 	},
// 	{
// 		id: "HAND-04",
// 		slug: "hand-04",
// 		name: "HAND-04",
// 		category: "handbags",
// 		shortDescription: PLACEHOLDER_DESCRIPTION,
// 		description: PLACEHOLDER_DESCRIPTION,
// 		images: [
// 			"/images/products/handbags/hand-04/hand-04-01.jpg",
// 			"/images/products/handbags/hand-04/hand-04-02.jpg",
// 			"/images/products/handbags/hand-04/hand-04-03.jpg",
// 		],
// 		featured: false,
// 		isNew: false,
// 	},
// 	{
// 		id: "HAND-05",
// 		slug: "hand-05",
// 		name: "HAND-05",
// 		category: "handbags",
// 		shortDescription: PLACEHOLDER_DESCRIPTION,
// 		description: PLACEHOLDER_DESCRIPTION,
// 		images: [
// 			"/images/products/handbags/hand-05/hand-05-01.jpg",
// 			"/images/products/handbags/hand-05/hand-05-02.jpg",
// 			"/images/products/handbags/hand-05/hand-05-03.jpg",
// 		],
// 		featured: false,
// 		isNew: false,
// 	},
// 	{
// 		id: "HAND-06",
// 		slug: "hand-06",
// 		name: "HAND-06",
// 		category: "handbags",
// 		shortDescription: PLACEHOLDER_DESCRIPTION,
// 		description: PLACEHOLDER_DESCRIPTION,
// 		images: [
// 			"/images/products/handbags/hand-06/hand-06-01.jpg",
// 			"/images/products/handbags/hand-06/hand-06-02.jpg",
// 			"/images/products/handbags/hand-06/hand-06-03.jpg",
// 		],
// 		featured: false,
// 		isNew: false,
// 	},

// 	/* ---------- Shoes (4) ---------- */
// 	{
// 		id: "SHOE-01",
// 		slug: "shoe-01",
// 		name: "SHOE-01",
// 		category: "shoes",
// 		shortDescription: PLACEHOLDER_DESCRIPTION,
// 		description: PLACEHOLDER_DESCRIPTION,
// 		images: [
// 			"/images/products/shoes/shoe-01/shoe-01-01.jpg",
// 			"/images/products/shoes/shoe-01/shoe-01-02.jpg",
// 			"/images/products/shoes/shoe-01/shoe-01-03.jpg",
// 		],
// 		featured: true,
// 		isNew: false,
// 	},
// 	{
// 		id: "SHOE-02",
// 		slug: "shoe-02",
// 		name: "SHOE-02",
// 		category: "shoes",
// 		shortDescription: PLACEHOLDER_DESCRIPTION,
// 		description: PLACEHOLDER_DESCRIPTION,
// 		images: [
// 			"/images/products/shoes/shoe-02/shoe-02-01.jpg",
// 			"/images/products/shoes/shoe-02/shoe-02-02.jpg",
// 			"/images/products/shoes/shoe-02/shoe-02-03.jpg",
// 		],
// 		featured: false,
// 		isNew: false,
// 	},
// 	{
// 		id: "SHOE-03",
// 		slug: "shoe-03",
// 		name: "SHOE-03",
// 		category: "shoes",
// 		shortDescription: PLACEHOLDER_DESCRIPTION,
// 		description: PLACEHOLDER_DESCRIPTION,
// 		images: [
// 			"/images/products/shoes/shoe-03/shoe-03-01.jpg",
// 			"/images/products/shoes/shoe-03/shoe-03-02.jpg",
// 			"/images/products/shoes/shoe-03/shoe-03-03.jpg",
// 		],
// 		featured: false,
// 		isNew: false,
// 	},
// 	{
// 		id: "SHOE-04",
// 		slug: "shoe-04",
// 		name: "SHOE-04",
// 		category: "shoes",
// 		shortDescription: PLACEHOLDER_DESCRIPTION,
// 		description: PLACEHOLDER_DESCRIPTION,
// 		images: [
// 			"/images/products/shoes/shoe-04/shoe-04-01.jpg",
// 			"/images/products/shoes/shoe-04/shoe-04-02.jpg",
// 			"/images/products/shoes/shoe-04/shoe-04-03.jpg",
// 		],
// 		featured: false,
// 		isNew: true,
// 	},

// 	/* ---------- Watches (4) ---------- */
// 	{
// 		id: "WATCH-01",
// 		slug: "watch-01",
// 		name: "WATCH-01",
// 		category: "watches",
// 		shortDescription: PLACEHOLDER_DESCRIPTION,
// 		description: PLACEHOLDER_DESCRIPTION,
// 		images: [
// 			"/images/products/watches/watch-01/watch-01-01.jpg",
// 			"/images/products/watches/watch-01/watch-01-02.jpg",
// 			"/images/products/watches/watch-01/watch-01-03.jpg",
// 		],
// 		featured: true,
// 		isNew: false,
// 	},
// 	{
// 		id: "WATCH-02",
// 		slug: "watch-02",
// 		name: "WATCH-02",
// 		category: "watches",
// 		shortDescription: PLACEHOLDER_DESCRIPTION,
// 		description: PLACEHOLDER_DESCRIPTION,
// 		images: [
// 			"/images/products/watches/watch-02/watch-02-01.png",
// 			"/images/products/watches/watch-02/watch-02-02.png",
// 			"/images/products/watches/watch-02/watch-02-03.png",
// 		],
// 		featured: false,
// 		isNew: false,
// 	},
// 	{
// 		id: "WATCH-03",
// 		slug: "watch-03",
// 		name: "WATCH-03",
// 		category: "watches",
// 		shortDescription: PLACEHOLDER_DESCRIPTION,
// 		description: PLACEHOLDER_DESCRIPTION,
// 		images: [
// 			"/images/products/watches/watch-03/watch-03-01.jpg",
// 			"/images/products/watches/watch-03/watch-03-02.jpg",
// 			"/images/products/watches/watch-03/watch-03-03.jpg",
// 		],
// 		featured: false,
// 		isNew: true,
// 	},
// 	{
// 		id: "WATCH-04",
// 		slug: "watch-04",
// 		name: "WATCH-04",
// 		category: "watches",
// 		shortDescription: PLACEHOLDER_DESCRIPTION,
// 		description: PLACEHOLDER_DESCRIPTION,
// 		images: [
// 			"/images/products/watches/watch-04/watch-04-01.jpg",
// 			"/images/products/watches/watch-04/watch-04-02.jpg",
// 			"/images/products/watches/watch-04/watch-04-03.jpg",
// 		],
// 		featured: false,
// 		isNew: false,
// 	},

// 	/* ---------- Jewellery (3) ---------- */
// 	{
// 		id: "JEW-01",
// 		slug: "jew-01",
// 		name: "JEW-01",
// 		category: "jewellery",
// 		shortDescription: PLACEHOLDER_DESCRIPTION,
// 		description: PLACEHOLDER_DESCRIPTION,
// 		images: [
// 			"/images/products/jewellery/jew-01/jew-01-01.jpg",
// 			"/images/products/jewellery/jew-01/jew-01-02.jpg",
// 			"/images/products/jewellery/jew-01/jew-01-03.jpg",
// 		],
// 		featured: true,
// 		isNew: false,
// 	},
// 	{
// 		id: "JEW-02",
// 		slug: "jew-02",
// 		name: "JEW-02",
// 		category: "jewellery",
// 		shortDescription: PLACEHOLDER_DESCRIPTION,
// 		description: PLACEHOLDER_DESCRIPTION,
// 		images: [
// 			"/images/products/jewellery/jew-02/jew-02-01.jpg",
// 			"/images/products/jewellery/jew-02/jew-02-02.jpg",
// 			"/images/products/jewellery/jew-02/jew-02-03.jpg",
// 		],
// 		featured: false,
// 		isNew: false,
// 	},
// 	{
// 		id: "JEW-03",
// 		slug: "jew-03",
// 		name: "JEW-03",
// 		category: "jewellery",
// 		shortDescription: PLACEHOLDER_DESCRIPTION,
// 		description: PLACEHOLDER_DESCRIPTION,
// 		images: [
// 			"/images/products/jewellery/jew-03/jew-03-01.jpg",
// 			"/images/products/jewellery/jew-03/jew-03-02.jpg",
// 			"/images/products/jewellery/jew-03/jew-03-03.jpg",
// 		],
// 		featured: false,
// 		isNew: false,
// 	},

// 	/* ---------- Sunglasses (3) ---------- */
// 	{
// 		id: "SUN-01",
// 		slug: "sun-01",
// 		name: "SUN-01",
// 		category: "sunglasses",
// 		shortDescription: PLACEHOLDER_DESCRIPTION,
// 		description: PLACEHOLDER_DESCRIPTION,
// 		images: [
// 			"/images/products/sunglasses/sun-01/sun-01-01.jpg",
// 			"/images/products/sunglasses/sun-01/sun-01-02.jpg",
// 			"/images/products/sunglasses/sun-01/sun-01-03.jpg",
// 		],
// 		featured: false,
// 		isNew: false,
// 	},
// 	{
// 		id: "SUN-02",
// 		slug: "sun-02",
// 		name: "SUN-02",
// 		category: "sunglasses",
// 		shortDescription: PLACEHOLDER_DESCRIPTION,
// 		description: PLACEHOLDER_DESCRIPTION,
// 		images: [
// 			"/images/products/sunglasses/sun-02/sun-02-01.jpg",
// 			"/images/products/sunglasses/sun-02/sun-02-02.jpg",
// 			"/images/products/sunglasses/sun-02/sun-02-03.jpg",
// 		],
// 		featured: false,
// 		isNew: true,
// 	},
// 	{
// 		id: "SUN-03",
// 		slug: "sun-03",
// 		name: "SUN-03",
// 		category: "sunglasses",
// 		shortDescription: PLACEHOLDER_DESCRIPTION,
// 		description: PLACEHOLDER_DESCRIPTION,
// 		images: [
// 			"/images/products/sunglasses/sun-03/sun-03-01.jpg",
// 			"/images/products/sunglasses/sun-03/sun-03-02.jpg",
// 			"/images/products/sunglasses/sun-03/sun-03-03.jpg",
// 		],
// 		featured: false,
// 		isNew: false,
// 	},
// ];