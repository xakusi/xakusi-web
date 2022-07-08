export const traitsSChema = {
  name: "trait",
  title: "NFT Properties",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "values",
      title: "Values",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
};
