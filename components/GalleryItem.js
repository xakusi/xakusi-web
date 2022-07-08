import React from "react";
import tw from "tailwind-styled-components";

export const GalleryItem = ({ img, serial }) => {
  return (
    <GalleryItemContiner>
      <ItemImageContainer>
        <ItemImage src={img} />
      </ItemImageContainer>
      <p className="opacity-50 text-black  mt-3 uppercase font-mono tracking-widest text-3xs text-center">
        Kazuki
      </p>
      <h3 className="font-400 text-black  pb-2 -mt-1 text-2xs tracking-wider text-center uppercase">
        No. {serial}
      </h3>
    </GalleryItemContiner>
  );
};

const GalleryItemContiner = tw.div`
    group cursor-pointer relative fade-in text-sm lg:-20 w-full h-full  duration-300 z-[-10]
`;

const ItemImageContainer = tw.div`
 w-full relative fade-in lg:group-hover:scale-105 
group-hover:shadow-me duration-300 rounded-xl 
square aspect-w-1 aspect-h-1 overflow-hidden 
bg-gray-100 shadow-me
`;

const ItemImage = tw.img`
duration-300 object-center object-cover 

`;
