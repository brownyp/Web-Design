import { genreType } from "./products.model";

export const productsS: any[] = [
  {
    id: 1,
    key: "deadpool",
    name: "Brain books",
    description: "DO NOT contact me with unsolicited services or offers",
    genres: [genreType.book],
    rate: "8.6",
    length: "1.48",
    img: "book1.jpg",
    price: 80
  },
  {
    id: 2,
    key: "we-are-the-millers",
    name: "5 Books on History of France",
    description: "5 Books on History of France, and Homer's Odyssey and Iliad. In acceptable to very good shape.",
    genres: [genreType.book],
    rate: "7.0",
    length: "1.50",
    img: "book2.jpg",
    price: 80

  },
  {
    id: 3,
    key: "straight-outta-compton",
    name: "Arm chair",
    description: "Good condition, Two pieces available. Price is for each chair. Minor W & T.",
    genres: [genreType.chair,genreType.furniture],
    rate: "8.0",
    length: "2.27",
    img: "chair1.jpg",
    price: 80
  },
  {
    id: 4,
    key: "gridiron-gang",
    name: "Computer Chair",
    description: "A like-new, rarely used computer task mesh chair. Armrest and height adjustable. Over 200 when new. In person and cash only. Please respond by email if any questions. Thanks.",
    genres: [genreType.chair,genreType.furniture],
    rate: "6.9",
    length: "2.05",
    img: "chair2.jpg",
    price: 80
  },
  {
    id: 5,
    key: "american-gangster",
    name: "Mac Book Pro for sale   ",
    description: "New seal Mac Book Pro MLL42LL/A For Sale Cash only no Shipping",
    genres: [genreType.macbook,genreType.computer],
    rate: "7.8",
    length: "2.37",
    img: "computer1.jpg",
    price: 1000
  },
  {
    id: 6,
    key: "gangster-squad",
    name: "Mac Book Pro 15 inch   ",
    description: "Fully functional no problems at all. Good condition. Must pick up, cash only.",
    genres: [genreType.macbook,genreType.computer],
    rate: "6.8",
    length: "1.53",
    img: "computer2.jpg",
    price: 1100
  },
  {
    id: 7,
    key: "now-you-see-me",
    name: "Apple Mac    ",
    description: "Comes with Functioning Charger and battery ",
    genres: [genreType.mac],
    rate: "7.3",
    length: "1.55",
    img: "computer3.jpg",
    price: 1200
  },
  {
    id: 8,
    key: "jurassic-world",
    name: "AOC LCD monitor   ",
    description: "This was my extra screen. The item is DVI-d and D sub compatible (non hdmi. So will need to buy an adaptor if you want to use it with hdmi) Works perfectly fine no dead pixels.",
    genres: [genreType.monitor],
    rate: "7.1",
    length: "2.04",
    img: "computer4.jpg",
    price: 1300
  },
  {
    id: 9,
    key: "mission-impossible-rogue-nation",
    name: "Lenovo - Yoga 3 Pro    ",
    description: "13.3\" 10-point Lenovo - Yoga 3 Pro 2-in-1 13.3\" Touch-Screen Laptop - Intel Core M . Come check it out in Queens. Running newest microsoft windows 10 on it. Like new condition. Hardly used.",
    genres: [genreType.laptop,genreType.lenovo],
    rate: "7.5",
    length: "2.11",
    img: "computer5.jpg",
    price: 1250
  },
  {
    id: 10,
    key: "the-man-from-uncle",
    name: "Brother HL-2240 Laser Printer   ",
    description: "Brother HL-2240 Laser Printer USED for sale. Item works perfectly and includes USB cable and power cord. Includes only what is shown. Available for pick up from location. CASH ONLY. Please contact me with any questions.",
    genres: [genreType.laser],
    rate: "7.3",
    length: "1.56",
    img: "computer6.jpg",
    price: 120
  },
  {
    id: 11,
    key: "spectre",
    name: "HP Spectre x360   ",
    description: " Comes with all original materials excluding the box. Never has the laptop been dropped/scratched/dented. In pristine condition, battery life is superb. I will clean the software and hardware before selling.",
    genres: [genreType.HP],
    rate: "6.9",
    length: "2.28",
    img: "computer7.jpg",
    price: 1340
  },
  {
    id: 12,
    key: "legend",
    name: "HP COMPUTER   ",
    description: "I purchased it on Amazon for my Real Estate work but don't need it any longer.",
    genres: [genreType.HP, genreType.computer],
    rate: "7.0",
    length: "2.28",
    img: "computer8.jpg",
    price: 100
  },
  {
    id: 13,
    key: "southpaw",
    name: "NETGEAR WIRELESS ROUTER    ",
    description: "SELLING MY NETGEAR WIRELESS ROUTER WITH SOME EXTRA WIRES TO GO WITH IT. IT WORKS AS IT SHOULD PAID OVER $50 FOR IT",
    genres: [genreType.router],
    rate: "7.5",
    length: "2.04",
    img: "computer9.jpg",
    price: 50
  },
  {
    id: 14,
    key: "bridge-of-spies",
    name: "Apple MacBook Pro Laptop   ",
    description: "90 Day Warranty - FULLY FUNCTIONAL - GRADE A- (Excellent) Cosmetic Condition: minor surface scratches/blemishes/scuffs may exist on the outer casing. Reformatted & Optimized by Certified Technicians. Refurbished - Cleaned & Sanitized.",
    genres: [genreType.macbook, genreType.laptop],
    rate: "7.7",
    length: "2.22",
    img: "computer10.jpg",
    price: 1230
  },
  {
    id: 15,
    key: "ant-man",
    name: "HP LAPTOP COMPUTER   ",
    description: "I have an HP Laptop computer for sale. It has some issues so I am selling it for parts or if you are able to fix it then this would work for you. The screen is in very good condition and other components as well.",
    genres: [genreType.HP, genreType.laptop],
    rate: "7.4",
    length: "1.57",
    img: "computer11.jpg",
    price: 60
  },
  {
    id: 16,
    key: "fast-and-furious-7",
    name: "Apple MacBook Air Laptop   ",
    description: "90 Day Warranty - FULLY FUNCTIONAL - Refurbished by Certified Technicians (Reformatted, Optimized, Cleaned & Sanitized). This has a small indentation in the bottom right corner of the LCD (see pictures).",
    genres: [genreType.air, genreType.macbook, genreType.laptop],
    rate: "7.3",
    length: "2.17",
    img: "computer12.jpg",
    price: 550
  },
  {
    id: 17,
    key: "tracers",
    name: "IphoneX 64 gb    ",
    description: "iphone 64gb unlocked for sale Got three left all sealed from apple comes with receipt . ",
    genres: [genreType.Iphone],
    rate: "5.6",
    length: "1.34",
    img: "phone1.jpg",
    price: 900
  },
  {
    id: 18,
    key: "running-scared",
    name: "iphone 6 128gb   ",
    description: "Unlocked Apple iPhone 7 Plus 256GB Matte Black . Paid for in full. No icloud lock. No blacklist. Clean IMEI. For sale or trade for Note 8 or Iphone 8 Plus or iphone X",
    genres: [genreType.Iphone],
    rate: "7.4",
    length: "2.02",
    img: "phone2.jpg",
    price: 200
  },
  {
    id: 19,
    key: "the-hangover",
    name: "iPhone 5 - 64GB   ",
    description: "This is a used iPhone 5 64GB. It used to be on AT&T and then I had it unlocked by AT&T so I could use it with wireless carrier sim cards around the world when I travelled. ",
    genres: [genreType.Iphone],
    rate: "7.8",
    length: "1.40",
    img: "phone3.jpg",
    price: 135
  },
  {
    id: 20,
    key: "project-x",
    name: "SIGMA LENS FOR NIKON   ",
    description: "SIGMA LENS 17-70MM lens for sale F 2.8-4 Macro HSM perfect condition. ",
    genres: [genreType.lens],
    rate: "6.7",
    length: "1.28",
    img: "photo1.jpg",
    price: 350
  },
  {
    id: 21,
    key: "the-dark-knight",
    name: "Nikon Camera Lens    ",
    description: "Selling a Nikon Nikkor 18-55mm F/3.5-5.6 G Aspherical AF-S DX VR camera lens for $160. ",
    genres: [genreType.lens],
    rate: "9.0",
    length: "2.32",
    img: "watch1.jpg",
    price: 160
  },
  {
    id: 22,
    key: "the-tournament",
    name: "Camera Lens   ",
    description: "Canon EF 35-80mm 1:4-5.6 Lens for DSLR & SLR Cameras. Can be used Auto Focus / Manual Focus 0.4m/1.3ft Filter diameter 52mm.",
    genres: [genreType.lens],
    rate: "6.1",
    length: "1.35",
    img: "photo3.jpg",
    price: 450
  },
  {
    id: 23,
    key: "the-matrix",
    name: "Dog Bolster Sofa   ",
    description: "Kirkland Signature large luxury plush sofa / couch bolster pillow pet bed with removable zippered cover.",
    genres: [genreType.sofa,genreType.furniture],
    rate: "8.7",
    length: "2.16",
    img: "sofa1.jpg",
    price: 300
  },
  {
    id: 24,
    key: "bad-boys",
    name: "coffee table    ",
    description: "Hi guys, I am selling this coffee table for $35. it s like new condition. no place for it in my new apartment.",
    genres: [genreType.table,genreType.furniture],
    rate: "6.8",
    length: "1.59",
    img: "table1.jpg",
    price: 200
  },
  {
    id: 25,
    key: "spider-man",
    name: "Vintage edition table   ",
    description: "George Nelson Original vintage edition Table for $1200",
    genres: [genreType.table,genreType.furniture],
    rate: "7.9",
    length: "1.48",
    img: "table2.jpg",
    tagline: "Second-hand Market  ",
    price: 1200
  }
];
