import Image from "next/image";
import Hero from "./components/Hero";
import Reviews from "./components/Reviews";
import Why from "./components/Why";

export default function Home() {
  return (
    <>
      <Hero />
      <Reviews />
      <Why />
    </>
  );
}
