import React, { createContext, useContext, useState } from 'react';

const SelectionContext = createContext();

export function SelectionProvider({ children }) {
  const [selections, setSelections] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
  const [categoryResults, setCategoryResults] = useState({});

  const addSelection = (category, selection) => {
    setSelections(prev => [...prev, { category, selection }]);
  };

  const getSelections = () => {
    return selections;
  };

  const addCategory = (category) => {
    if (!selectedCategories.includes(category)) {
      setSelectedCategories(prev => [...prev, category]);
    } else {
      setSelectedCategories(prev => prev.filter(c => c !== category));
    }
  };

  const getCurrentCategory = () => {
    return selectedCategories[currentCategoryIndex];
  };

  const moveToNextCategory = () => {
    if (currentCategoryIndex < selectedCategories.length - 1) {
      setCurrentCategoryIndex(prev => prev + 1);
      return true;
    }
    return false;
  };

  const resetCategories = () => {
    setSelectedCategories([]);
    setCurrentCategoryIndex(0);
    setSelections([]);
    setCategoryResults({});
  };

  const setCategoryResult = (category, result) => {
    setCategoryResults(prev => ({
      ...prev,
      [category]: result
    }));
  };

  const getCategoryResults = () => {
    return categoryResults;
  };

  return (
    <SelectionContext.Provider value={{
      addSelection,
      getSelections,
      addCategory,
      selectedCategories,
      getCurrentCategory,
      moveToNextCategory,
      resetCategories,
      currentCategoryIndex,
      setCategoryResult,
      getCategoryResults
    }}>
      {children}
    </SelectionContext.Provider>
  );
}

export function useSelection() {
  return useContext(SelectionContext);
} 