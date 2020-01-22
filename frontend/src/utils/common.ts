export const getCategoryOptions = (categories: any) => {
  return categories.map((category: any) => ({
    label: category.name,
    value: category._id
  }));
};

export const formatAmount = (
  price: number,
  compact: boolean = false
): string => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
    ...(compact &&
      Math.floor(price).toString().length >= 6 && {
        // @ts-ignore
        notation: "compact",
        compactDisplay: "short"
      })
  }).format(price);
};

export const transformImageURL = (url: string) => {
  const extension = url.split(".").pop();
  if (extension === "pdf") {
    return url.substr(0, url.lastIndexOf(".")) + ".jpg";
  }
  return url;
};
