import React from "react";
import tw from "tailwind-styled-components";
import { GalleryItem } from "./GalleryItem";

export const GalleryItems = () => {
  return (
    <GalleryItemsContainer>
      <GalleryGrid>
        <GalleryItem
          serial={5768}
          img="https://gateway.pinata.cloud/ipfs/QmbL2m5sRQZwmWc9ELSWuS4215tQ6oz8fxcRb1foSxUrvU"
        />
        <GalleryItem
          serial={5768}
          img="https://gateway.pinata.cloud/ipfs/QmbL2m5sRQZwmWc9ELSWuS4215tQ6oz8fxcRb1foSxUrvU"
        />
        <GalleryItem
          serial={5768}
          img="https://gateway.pinata.cloud/ipfs/QmbL2m5sRQZwmWc9ELSWuS4215tQ6oz8fxcRb1foSxUrvU"
        />
        <GalleryItem
          serial={5768}
          img="https://gateway.pinata.cloud/ipfs/QmbL2m5sRQZwmWc9ELSWuS4215tQ6oz8fxcRb1foSxUrvU"
        />
        <GalleryItem
          serial={5768}
          img="https://gateway.pinata.cloud/ipfs/QmbL2m5sRQZwmWc9ELSWuS4215tQ6oz8fxcRb1foSxUrvU"
        />
        <GalleryItem
          serial={5768}
          img="https://gateway.pinata.cloud/ipfs/QmbL2m5sRQZwmWc9ELSWuS4215tQ6oz8fxcRb1foSxUrvU"
        />
        <GalleryItem
          serial={5768}
          img="https://gateway.pinata.cloud/ipfs/QmbL2m5sRQZwmWc9ELSWuS4215tQ6oz8fxcRb1foSxUrvU"
        />
        <GalleryItem
          serial={5768}
          img="https://gateway.pinata.cloud/ipfs/QmbL2m5sRQZwmWc9ELSWuS4215tQ6oz8fxcRb1foSxUrvU"
        />
        <GalleryItem
          serial={5768}
          img="https://gateway.pinata.cloud/ipfs/QmbL2m5sRQZwmWc9ELSWuS4215tQ6oz8fxcRb1foSxUrvU"
        />
        <GalleryItem
          serial={5768}
          img="https://gateway.pinata.cloud/ipfs/QmbL2m5sRQZwmWc9ELSWuS4215tQ6oz8fxcRb1foSxUrvU"
        />
        <GalleryItem
          serial={5768}
          img="https://gateway.pinata.cloud/ipfs/QmbL2m5sRQZwmWc9ELSWuS4215tQ6oz8fxcRb1foSxUrvU"
        />
        <GalleryItem
          serial={5768}
          img="https://gateway.pinata.cloud/ipfs/QmbL2m5sRQZwmWc9ELSWuS4215tQ6oz8fxcRb1foSxUrvU"
        />
        <GalleryItem
          serial={5768}
          img="https://gateway.pinata.cloud/ipfs/QmbL2m5sRQZwmWc9ELSWuS4215tQ6oz8fxcRb1foSxUrvU"
        />
        <GalleryItem
          serial={5768}
          img="https://gateway.pinata.cloud/ipfs/QmbL2m5sRQZwmWc9ELSWuS4215tQ6oz8fxcRb1foSxUrvU"
        />{" "}
        <GalleryItem
          serial={5768}
          img="https://gateway.pinata.cloud/ipfs/QmbL2m5sRQZwmWc9ELSWuS4215tQ6oz8fxcRb1foSxUrvU"
        />
      </GalleryGrid>
    </GalleryItemsContainer>
  );
};

const GalleryItemsContainer = tw.div`
lg:w-3/4 lg:px-8 w-full  lg:pt-32 pt-28 text-white
`;

const GalleryGrid = tw.div`
grid lg:grid-cols-4 2xl:grid-cols-5 grid-cols-2
 lg:gap-x-6 gap-x-4 lg:gap-y-2 gap-y-1  lg:col-span-3
 `;
