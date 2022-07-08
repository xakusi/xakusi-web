import React from "react";
import tw from "tailwind-styled-components";

export const MintCard = () => {
  return (
    <MintCardContainer>
      <MintCardContent>
        <MintImage src="https://gateway.pinata.cloud/ipfs/QmbL2m5sRQZwmWc9ELSWuS4215tQ6oz8fxcRb1foSxUrvU" />
        <MintButton>Mint</MintButton>
        <div>Minting price : 5 FTM</div>
      </MintCardContent>
    </MintCardContainer>
  );
};

const MintCardContainer = tw.div`
    border rounded-lg border-gray-300 py-5 text-white
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
