import { createContext, useEffect, useState } from "react";
import { locationRequest, locationTransform } from "./location.services";

export const LocationContext = createContext(); // create global context

export const LocationContextProvider = ({ children }) => {
  const [location, setLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [keyword, setKeyword] = useState("San Francisco");

  const onSearch = (searchKeyword) => {
    if (!searchKeyword || searchKeyword === keyword) {
      // If the searchKeyword is the same as the current one, do nothing
      return;
    }
    setIsLoading(true);
    setKeyword(searchKeyword); // This will trigger useEffect
  };

  useEffect(() => {
    if (!keyword.length) {
      return;
    }

    setIsLoading(true);
    locationRequest(keyword.toLowerCase())
      .then(locationTransform)
      .then((result) => {
        setIsLoading(false);
        setLocation(result);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  }, [keyword]); // This effect only runs when `keyword` changes

  return (
    <LocationContext.Provider
      value={{
        location,
        error,
        isLoading,
        search: onSearch,
        keyword,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};
