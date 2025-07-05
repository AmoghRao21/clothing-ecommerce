import { video } from "framer-motion/client";
import animeTee from "../assets/T-shirt1.png";
import streetHoodie from "../assets/T-shirt3.png";
import aestheticTee from "../assets/T-shirt5.png";

const products = [
  {
    id: "anime-inferno-tee",
    title: "Anime Inferno Tee",
    category: "Anime",
    price: 1299,
    image: animeTee,
    videoUrl: "https://www.youtube.com/embed/KHpnKG2pDLs?si=SblHw6xLxKKA880a", // Example video URL
  },
  {
    id: "street-pulse-hoodie",
    title: "Street Pulse Hoodie",
    category: "Streetwear",
    price: 1599,
    image: streetHoodie,
  },
  {
    id: "visual-flame-tee",
    title: "Visual Flame Tee",
    category: "Aesthetic",
    price: 1199,
    image: aestheticTee,
  },
];

export default products;
