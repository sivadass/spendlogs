import { EXPENSE_CATEGORIES } from "../constants/common";

export const getCategory = (category: string) =>
  EXPENSE_CATEGORIES.find((item: any) => item.value === category);

export const getCategoryOptions = (categories: any) => {
  return categories.map((category: any) => ({
    label: category.name,
    value: category._id
  }));
};

export const formatAmount = (price: number) => {
  const priceString = price.toString();
  let lastThree = priceString.substring(priceString.length - 3);
  const otherNumbers = priceString.substring(0, priceString.length - 3);
  if (otherNumbers !== "") {
    lastThree = "," + lastThree;
  }
  const result =
    "₹ " + otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
  return result;
};
