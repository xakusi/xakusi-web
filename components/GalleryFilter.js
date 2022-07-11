import React, { useState, useEffect } from "react";
import tw from "tailwind-styled-components";
import { BsSearch, BsEmojiNeutral, BsEye, BSMouthm } from "react-icons/bs";
import { GiOutbackHat, GiSharpLips } from "react-icons/gi";
import { BiLandscape } from "react-icons/bi";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import useSanity from "../hooks/useSanity";
import useResponsive from "../hooks/useResponsive";
import { Dialog } from "@headlessui/react";

const getTraitIcon = (trait) => {
  switch (trait) {
    case "Background":
      return <BiLandscape className="w-7 h-7" />;
    case "Type":
      return <BsEmojiNeutral className="w-7 h-7" />;
    case "Eyes":
      return <BsEye className="w-7 h-7" />;
    case "Mouth":
      return <GiSharpLips className="w-7 h-7" />;
  }
};

export const GalleryFilter = ({
  allMintedItems,
  mintedItems,
  setMintedItems,
  openSidebar,
  setOpenSidebar,
  filtersSelected,
  setFiltersSelected,
}) => {
  const [serialInput, setSerialInput] = useState("");
  const [propertiesList, setProperties] = useState([]);
  const { getPropertiesData } = useSanity();
  const { _width } = useResponsive();
  const onFilterSelection = (section, value) => {
    let sectionInserted = filtersSelected.find((f) => f.section === section);

    if (sectionInserted) {
      let isSelected = sectionInserted.values.find((f) => f === value);
      if (isSelected) {
        let removedFilter = sectionInserted.values.filter((f) => f !== value);
        let removedSection = filtersSelected.filter(
          (f) => f.section !== section
        );

        if (removedFilter.length === 0) {
          setFiltersSelected([...removedSection]);
        } else {
          setFiltersSelected([
            ...removedSection,
            { section: section, values: removedFilter },
          ]);
        }
      } else {
        let removedFilter = sectionInserted.values.filter((f) => f !== value);
        let removedSection = filtersSelected.filter(
          (f) => f.section !== section
        );
        setFiltersSelected([
          ...removedSection,
          { section: section, values: removedFilter },
        ]);
        setFiltersSelected([
          ...removedSection,
          { section: section, values: [...sectionInserted.values, value] },
        ]);
      }
    } else {
      setFiltersSelected([
        ...filtersSelected,
        { section: section, values: [value] },
      ]);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const propertiesData = await getPropertiesData();
      let formatted = propertiesData.map((item) => {
        return { ...item, icon: getTraitIcon(item.name) };
      });
      setProperties(formatted);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (filtersSelected.length > 0) {
      let filtered = [];
      allMintedItems?.forEach((item) => {
        const { attributes } = item;
        filtersSelected.forEach((filter) => {
          const { section, values } = filter;
          attributes.forEach((attr) => {
            const { trait_type, value } = attr;
            if (trait_type === section) {
              if (values.includes(value)) {
                filtered.push(item);
              }
            }
          });
        });
      });
      setMintedItems(filtered);
    } else {
      setMintedItems(allMintedItems);
    }
  }, [filtersSelected]);

  useEffect(() => {
    if (serialInput === "") {
      setMintedItems(allMintedItems);
    } else {
      let filtered = [];
      allMintedItems?.forEach((item) => {
        item.tokenId;
        if (item.tokenId === parseInt(serialInput)) {
          filtered.push(item);
        }
      });
      setMintedItems(filtered);
    }
  }, [serialInput]);

  return _width > 1025 ? (
    <FilterContainer>
      <div className="hidden h-14 lg:block relative z-10 flex items-end justify-between h-10 pb-2 border-b border-opacity-10 border-black dark:border-gray-300">
        <h1 className="text-xl uppercase font-extrabold tracking-tight">
          <span className="">Filter</span>
        </h1>
      </div>
      <FilterContent>
        <SearchBySerial
          value={serialInput}
          onChange={(e) => setSerialInput(e.target.value)}
        />
        {propertiesList.map((filterItem) => {
          return (
            <FilterItem
              key={filterItem.name}
              text={filterItem.name}
              icon={filterItem.icon}
              values={filterItem.values}
              filterSelected={onFilterSelection}
            />
          );
        })}
      </FilterContent>
    </FilterContainer>
  ) : (
    <Dialog
      open={openSidebar}
      onClose={() => setOpenSidebar(false)}
      className="fixed inset-0 flex z-100 lg:hidden"
      aria-modal="true"
    >
      <div
        className="fixed inset-0 bg-white bg-opacity-50"
        id="headlessui-dialog-overlay-97"
        aria-hidden="true"
      >
        <Dialog.Panel>
          <div className="ml-auto relative max-w-xs w-full h-screen shadow-xl py-4 pb-12 flex flex-col overflow-y-auto bg-white text-black">
            <div className="px-4 flex items-center justify-between">
              <h2 className="text-sm uppercase font-600 tracking-wide">
                Filters
              </h2>
              <button
                type="button"
                className="-mr-2 w-10 rounded-md flex items-center justify-center opacity-50"
                tabIndex="0"
                onClick={(e) => setOpenSidebar(false)}
              >
                <span className="sr-only">Close menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
            <FilterContent>
              <SearchBySerial
                value={serialInput}
                onChange={(e) => setSerialInput(e.target.value)}
              />
              {propertiesList.map((filterItem) => {
                return (
                  <FilterItem
                    key={filterItem.name}
                    text={filterItem.name}
                    icon={filterItem.icon}
                    values={filterItem.values}
                    filterSelected={onFilterSelection}
                  />
                );
              })}
            </FilterContent>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

const SearchBySerial = (props) => {
  return (
    <label
      htmlFor="searchbyid"
      className="flex  w-full gap-4 py-3 focus:border-red-300 focus-within:border-b-black border-b relative border-opacity-10  items-center border-black"
    >
      <BsSearch className="w-7 h-7" />
      <input
        {...props}
        placeholder="Sort by serial..."
        id="searchbyid"
        type="number"
        className="h-full text-sm w-full z-10 focus:outline-none active:outline-none border-0 border-none bg-transparent text-black"
      />
    </label>
  );
};

const FilterContainer = tw.div`
hidden w-1/4 col-start-1 lg:block sticky top-0 h-screen pt-32 
`;

const FilterContent = tw.div`
overflow-y-scroll pb-28 px-4 lg:px-0 pt-2 scrollbar-hide lg:max-h-[calc(100vh-11.5rem)] 
`;

export const FilterItem = ({ text, icon, values, filterSelected }) => {
  const [showFilter, setShowFilter] = useState(false);

  return (
    <div className="border-b border-opacity-10  py-0 border-black opacity-100">
      <h3 className="flow-root">
        <button
          className="w-full py-3 flex items-center justify-between text-sm hover:opacity-80"
          id="headlessui-disclosure-button-4"
          type="button"
          aria-expanded="false"
          onClick={(e) => setShowFilter(!showFilter)}
        >
          <span className="font-600 flex gap-4 items-center relative text-md uppercase ">
            {icon}
            {text}
          </span>
          <span className="ml-6 flex items-center">
            {showFilter ? (
              <AiOutlineMinus className="w-5 h-5" />
            ) : (
              <AiOutlinePlus className="w-5 h-5" />
            )}
          </span>
        </button>
      </h3>
      {showFilter && (
        <div className="space-y-0">
          {values.map((value) => {
            return (
              <div key={value} className="flex px-2 items-center">
                <input
                  id="filter-Type-0"
                  name="Type[]"
                  type="checkbox"
                  onChange={(e) => filterSelected(text, e.target.value)}
                  className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                  value={value}
                />
                <label
                  htmlFor="filter-Type-0"
                  className="ml-2 uppercase font-mono text-xs pt-2 pb-1.5 opacity-80 w-full cursor-pointer h-full"
                >
                  {value}
                </label>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
