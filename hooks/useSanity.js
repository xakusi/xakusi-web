import { useEffect, useState } from "react";
import { client } from "../lib/sanity";

export default function useSanity() {
  const getPropertiesData = async () => {
    const query = `
        *[_type=="trait"]{
            name,
            values
          }
          `;

    const result = await client.fetch(query);
    return result;
  };

  const getRandomItemToMint = async () => {
    const query = `{
      "items": *[_type == "nftItem"],
       "total": count(*[_type == "nftItem"]) 
  
  }`;

    const result = await client.fetch(query);
    return result;
  };

  const deleteMintedItem = async (_id) => {
    await client.delete(_id);
  };

  return { getPropertiesData, getRandomItemToMint, deleteMintedItem };
}
