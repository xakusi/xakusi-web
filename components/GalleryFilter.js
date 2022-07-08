import React, { useState, useEffect } from "react";
import tw from "tailwind-styled-components";
import { BsSearch, BsEmojiNeutral, BsEye, BSMouthm } from "react-icons/bs";
import { GiOutbackHat, GiSharpLips } from "react-icons/gi";
import { BiLandscape } from "react-icons/bi";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import useSanity from "../hooks/useSanity";

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

export const GalleryFilter = () => {
  const [serialInput, setSerialInput] = useState("");
  const [filtersSelected, setFiltersSelected] = useState([]);
  const [propertiesList, setProperties] = useState([]);
  const { getPropertiesData } = useSanity();

  const onFilterSelection = (section, value) => {
    let sectionInserted = filtersSelected.find((f) => f.section === section);

    if (sectionInserted) {
      let isSelected = sectionInserted.values.find((f) => f === value);
      if (isSelected) {
        let removedFilter = sectionInserted.values.filter((f) => f !== value);
        let removedSection = filtersSelected.filter(
          (f) => f.section !== section
        );
        setFiltersSelected([
          ...removedSection,
          { section: section, values: removedFilter },
        ]);
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

  return (
    <FilterContainer>
      <div className="hidden lg:block relative z-10 flex items-end justify-between h-10 pb-2 border-b border-opacity-10 border-black dark:border-gray-300">
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
        type="text"
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
