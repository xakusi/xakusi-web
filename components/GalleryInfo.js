import React, { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
export const GalleryInfo = ({
  setOpenSidebar,
  selectedFilters,
  openNavbar,
}) => {
  return (
    !openNavbar && (
      <>
        <GalleryInfoContainer>
          <div className="text-xl uppercase font-extrabold tracking-tight">
            Browse Xakusis
          </div>
          <GalleryInfoSummary>
            <MyCollectionButton />
            <RefreshButton />
            <SmallFilterButton setOpenSidebar={setOpenSidebar} />
          </GalleryInfoSummary>
        </GalleryInfoContainer>
        <FiltersInfo selectedFilters={selectedFilters} />
      </>
    )
  );
};

const GalleryInfoContainer = tw.div`
    w-full  text-black dark:text-white h-14 pb-3 lg:pb-4 pt-26 flex justify-between border-b
`;

const GalleryInfoSummary = tw.div`
    flex items-center pb-0
`;

const FiltersInfo = ({ selectedFilters }) => {
  const [filtersCount, setFilersCount] = useState(0);
  const countAllFilters = () => {
    if (selectedFilters.length > 0) {
      let count = 0;
      selectedFilters?.forEach((filter) => {
        count = count + filter.values.length;
      });
      setFilersCount(count);
    } else {
      setFilersCount(0);
    }
  };

  useEffect(() => {
    countAllFilters();
  }, [selectedFilters]);

  return (
    <div className=" z-1 text-black dark:text-white">
      <div className="lg:h-20 h-16 lg:pt-5 overflow-x-auto mx-auto hide-scrollbar flex items-center">
        <h3 className="text-xs flex pr-2 items-center font-semibold uppercase tracking-wide opacity-50">
          Filters
          <span className="h-5 w-5 ml-2 text-4xs font-mono flex items-center justify-center rounded bg-gray-200 text-black">
            {filtersCount}
          </span>
          <span className="sr-only">, active</span>
        </h3>
        <div className="sm:mt-0  sm:ml-2">
          <div className="flex  items-center"></div>
        </div>
      </div>
    </div>
  );
};

const MyCollectionButton = () => {
  return (
    <button
      type="button"
      className="flex relative hover:opacity-60 duration-300 lg:py-2 lg:px-4 lg:rounded  lg:bg-gray-200 mr-4 lg:mr-2"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
        className="w-5 h-5 lg:ml-0 ml-4"
      >
        <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path>
      </svg>
      <span className="hidden lg:block uppercase tracking-wide text-xs font-mono pt-0.5 pl-2">
        My collection
      </span>
    </button>
  );
};

const RefreshButton = () => {
  return (
    <button
      type="button"
      className="flex hover:opacity-60 duration-300 lg:py-2 lg:px-4 lg:rounded mr-4 lg:mr-2 lg:bg-gray-200"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
        className="w-5 h-5"
      >
        <path
          fillRule="evenodd"
          d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
          clipRule="evenodd"
        ></path>
      </svg>
    </button>
  );
};

const SmallFilterButton = ({ setOpenSidebar }) => {
  return (
    <button
      type="button"
      onClick={(e) => setOpenSidebar(true)}
      className="lg:hidden flex hover:opacity-50"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
        className="w-5 h-5"
      >
        <path
          fillRule="evenodd"
          d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
          clipRule="evenodd"
        ></path>
      </svg>
      <span className="hidden  uppercase tracking-wide text-xs font-mono pt-0.5 pl-2">
        Filter
      </span>
    </button>
  );
};
