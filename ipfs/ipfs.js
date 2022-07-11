const readMetadataFromIPFS = async (path) => {
  let fileContent = await fetch(path, { method: "GET" });
  const data = await fileContent.json();
  return data;
};

const IPFSHandler = {
  readMetadataFromIPFS,
};

export default IPFSHandler;
