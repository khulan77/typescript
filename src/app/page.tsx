import Image from "next/image";
import { Header } from "./about/components/Header";
import { Feature } from "./about/components/Feature";
import { Footer } from "./about/components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Feature/>
      <Footer />
    </div>
  )
}
