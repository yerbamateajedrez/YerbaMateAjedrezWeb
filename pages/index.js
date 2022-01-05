import Head from "next/head";
import Image from "next/image";
import Section from "components/Section";
import Slider from "components/Slider";
import Text from "components/Text";

export default function Home() {
  return (
    <>
      <Head>
        <title>Yerba mate</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Slider />
      <Text />
    </>
  );
}
