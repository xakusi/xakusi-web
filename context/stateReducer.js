export const initialState = {
  storedMintedItems: [],
  filtersSelected: [],
};

export const actionTypes = {
  SET_MINTED_ITEMS: "SET_MINTED_ITEMS",
  SET_FILTERS_SELECTED: "SET_FILTERS_SELECTED",
};

const stateReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_MINTED_ITEMS:
      return {
        ...state,
        storedMintedItems: action.items,
      };

    default:
      return state;
  }
};

export default stateReducer;
