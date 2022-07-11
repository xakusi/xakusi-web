import React, { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import { useCollection } from "../contracts/hooks/useCollection";

export const MintCard = () => {
  const { mintItem, getAvailableForMint } = useCollection();
  const [availibleForMint, setAvailibleForMint] = useState();
  const mintNewItem = async () => {
    await mintItem();
    console.log("MINTED");
  };

  useEffect(() => {
    const fetchData = async () => {
      const availible = await getAvailableForMint();
      setAvailibleForMint(availible);
    };
    fetchData();
  }, []);
  return (
    <MintCardContainer>
      <MintCardContent>
        <div>{availibleForMint} Left to MINT</div>
        <MintImage src="https://gateway.pinata.cloud/ipfs/QmbL2m5sRQZwmWc9ELSWuS4215tQ6oz8fxcRb1foSxUrvU" />
        <MintButton onClick={mintNewItem}>Mint</MintButton>
        <div>Minting price : 5 FTM</div>
      </MintCardContent>
    </MintCardContainer>
  );
};

const MintCardContainer = tw.div`
    border rounded-lg border-gray-300 py-5 dark:text-white text-black
`;
const MintCardContent = tw.div`
    flex flex-col items-center justify-between gap-3
`;

const MintImage = tw.img`
    px-5 py-4 w-60
`;

const MintButton = tw.button`
    text-white uppercase bg-blue-600 px-5 py-2 rounded-xl font-medium hover:bg-blue-900 hover:font-bold hover:tracking-wider duration-300
`;
