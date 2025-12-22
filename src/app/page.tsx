import Image from "next/image";
import { Header } from "./about/components/Header";
import { Feature } from "./about/components/Feature";

export default function Home() {
  return (
    <div>
      <Header />
      <Feature/>
    </div>
  );
}
