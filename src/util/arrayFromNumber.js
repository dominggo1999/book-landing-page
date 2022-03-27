export const arrayFromNumber = (num) => {
  let newArray = Array.from(Array(num + 1).keys());
  newArray = newArray.slice(newArray.indexOf(1));
  return newArray;
};
