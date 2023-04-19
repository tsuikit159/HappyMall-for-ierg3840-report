import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "../Components/Navbar/index";
import { LandingSection } from "../Components/landing/index";
import Products from "../Components/products/index";
import { Features } from "@/Components/features/index";
import data from "../products.json"
import { Footer } from "@/Components/footer/index";
const inter = Inter({ subsets: ["latin"] });
 

export default function Home() {
  return (
    <>
     <Navbar />
      <Head>
        <title>Happy Mall</title>
        <meta name="description" content="Ierg3820-project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="${Logo.src}" />
        <link rel="icon" href="/happymall.ico" />
      </Head>
      <LandingSection />
      <Products />
      <Features />
    <Footer /> 
    </>
    
  );
}
