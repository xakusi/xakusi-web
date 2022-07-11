import IPFSHandler from "../../ipfs/ipfs";
import { collectionAbi } from "../data/abis";
import { collectionAddress } from "../data/address";
import useSanity from "../../hooks/useSanity";
import useContract from "../hooks/useContract";
import { ethers } from "ethers";

const baseIpfsUrl = "";
export const useCollection = () => {
  const { getContract, getContractWithSigner } = useContract();
  const { getRandomItemToMint, deleteMintedItem } = useSanity();

  const getCollectionContract = async () => {
    return await getContract(collectionAddress, collectionAbi);
  };

  const getCollectionContractWithSigner = async () => {
    return await getContractWithSigner(collectionAddress, collectionAbi);
  };

  const getTotalItems = async () => {
    const collectionContract = await getCollectionContract();

    const numberOfTokens = await collectionContract._tokenIds();
    return numberOfTokens.toNumber();
  };

  const getAvailableForMint = async () => {
    const collectionContract = await getCollectionContract();

    const numberOfTokens = await collectionContract._tokenIds();
    const collectionSize = await collectionContract.collectionSize();
    return (
      parseInt(ethers.utils.formatEther(collectionSize)) -
      numberOfTokens.toNumber()
    );
  };

  const getMintedItemsData = async () => {
    const collectionContract = await getCollectionContract();

    const totalItems = await getTotalItems();

    const baseTokenURI = await collectionContract.baseTokenURI();

    const items = [];
    for (let i = 1; i <= totalItems; i++) {
      let itemCID = await collectionContract.tokenURI(i);
      let itemURI = `${baseTokenURI}${itemCID}`;
      let metadata = await IPFSHandler.readMetadataFromIPFS(itemURI);
      items.push(metadata);
    }

    return items;
  };

  const mintItem = async () => {
    const collectionContract = await getCollectionContractWithSigner();
    const sanityItems = await getRandomItemToMint();
    const { items, total } = sanityItems;

    const rndInt = Math.floor(Math.random() * total) + 1;

    const selectedItem = items[rndInt];

    const { _id, metadata } = selectedItem;

    const itemCID = metadata.split("/")[4];

    const mintTx = await collectionContract.publicMint(itemCID, {
      value: ethers.utils.parseEther("0.15"),
    });

    await mintTx.wait();

    await deleteMintedItem(_id);
  };

  return {
    getMintedItemsData,
    getTotalItems,
    getCollectionContract,
    getAvailableForMint,
    mintItem,
  };
};
