export const nftsSchema = {
  name: "nftItem",
  title: "NFTS for mint",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "metadata",
      title: "MetadataURL",
      type: "string",
    },
    {
      name: "itemID",
      title: "ItemID",
      type: "number",
    },
  ],
};
