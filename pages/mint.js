import Head from "next/head";
import tw from "tailwind-styled-components";
import { MintCard } from "../components/MintCard";

export default function Mint() {
  return (
    <div>
      <Head>
        <title>Xakusi | Mint</title>
        <meta name="description" content="Get your first Xakusi NFT" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MintContainer>
        <MintCard />
      </MintContainer>
    </div>
  );
}

const MintContainer = tw.div`
    grid h-screen place-items-center
`;
