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

  return { getPropertiesData };
}
