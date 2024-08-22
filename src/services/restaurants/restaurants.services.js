import { mockImages, mocks } from "./mock";
import camelize from "camelize";

export const restaurantRequest = (location) => {
  return new Promise((resolve, reject) => {
    // Used Promise for asynchronous operation, like fetching data from a server or API.
    const mock = mocks[location];
    if (!mock) {
      reject("No restaurant for this location");
      return;
    }
    resolve(mock);
  });
};

export const restaurantsTransform = ({ results = [] }) => {
  const mappedResults = results.map((restaurant) => {
    restaurant.photos = restaurant.photos.map(() => {
      const randomIndex = Math.floor(Math.random() * mockImages.length);
      return mockImages[randomIndex];
    });

    return {
      ...restaurant,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
      address: restaurant.vicinity,
    };
  });
  return camelize(mappedResults);
};

restaurantRequest()
  .then(restaurantsTransform)
  .then((transformedResponse) => {})
  .catch((err) => {
    console.log(err);
  });
