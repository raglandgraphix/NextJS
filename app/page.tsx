import Image from "next/image";
import Head from "next/head";
import type { Metadata } from "next";
import Navigation from "./components/Navigation";
export const metadata: Metadata = {
  title: "Endicott Clay Products",
  description: "Create timeless beauty with Endicott Clay Products. Our extensive selection of brick, pavers, and aggregate offers endless design possibilities for residential and commercial projects.",
};

export default function Home() {
  
  return (
    <div>
      <Navigation logoPath="/assets/logoBlack.png"/>
      
    </div>
   
  );
}
