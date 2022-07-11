import React, { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import { useCollection } from "../contracts/hooks/useCollection";
import { GalleryInfo } from "./GalleryInfo";
import { GalleryItem } from "./GalleryItem";

export const GalleryItems = ({
  mintedItems,
  filtersSelected,
  setOpenSidebar,
}) => {
  return (
    <GalleryItemsContainer>
      <GalleryInfo
        setOpenSidebar={setOpenSidebar}
        selectedFilters={filtersSelected}
      />
      <GalleryGrid>
        {mintedItems?.map((item) => {
          return (
            <GalleryItem
              key={item.tokenId}
              serial={item.tokenId}
              img={item.image}
            />
          );
        })}
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
