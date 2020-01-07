export const APP_STATE = "appState";

export const CATEGORY_ICONS: {
  name: string;
  tags: string[];
}[] = [
  {
    name: "credit_card",
    tags: ["credit", "debit", "card", "payments", "money"]
  },
  {
    name: "account_balance",
    tags: [
      "bank",
      "account",
      "savings",
      "investment",
      "deposit",
      "recurring",
      "fixed"
    ]
  },
  {
    name: "local_dining",
    tags: ["restaurant", "swiggy", "zomato", "food", "dinner", "lunch"]
  },
  {
    name: "receipt",
    tags: ["tax", "income", "property", "bill", "receipt"]
  },
  {
    name: "child_friendly",
    tags: ["kids", "baby", "son", "daughter"]
  },
  {
    name: "pets",
    tags: ["pets", "dogs", "cats"]
  },
  {
    name: "commute",
    tags: ["travel"]
  },
  {
    name: "local_cafe",
    tags: ["kids", "baby", "son", "daughter"]
  },
  {
    name: "power",
    tags: ["kids", "baby", "son", "daughter"]
  },
  {
    name: "local_drink",
    tags: ["kids", "baby", "son", "daughter"]
  }
];
export const EXPENSE_CATEGORIES: {
  label: string;
  value: string;
  icon: string;
  color?: string;
}[] = [
  {
    label: "Dine Out",
    value: "dine_out",
    icon: "local_dining",
    color: "#4099ff"
  },
  {
    label: "Taxes",
    value: "taxes",
    icon: "receipt",
    color: "#4099ff"
  },
  {
    label: "Kids",
    value: "kids",
    icon: "child_friendly",
    color: "#4099ff"
  },
  {
    label: "Pets",
    value: "pets",
    icon: "pets",
    color: "#4099ff"
  },
  {
    label: "Travel",
    value: "travel",
    icon: "commute",
    color: "#4099ff"
  },
  {
    label: "Electricity",
    value: "electricity",
    icon: "power",
    color: "#4099ff"
  },
  {
    label: "Milk",
    value: "milk",
    icon: "local_cafe",
    color: "#4099ff"
  },
  {
    label: "Water",
    value: "water",
    icon: "local_drink",
    color: "#4099ff"
  },
  {
    label: "Fruits & Vegetables",
    value: "fruits_and_vegetables",
    icon: "shopping_basket",
    color: "#4099ff"
  },
  {
    label: "Groceries",
    value: "groceries",
    icon: "store",
    color: "#4099ff"
  },
  {
    label: "Transportation & Auto",
    value: "transportation_and_auto",
    icon: "motorcycle",
    color: "#4099ff"
  },
  {
    label: "Entertainment",
    value: "entertainment",
    icon: "local_movies",
    color: "#4099ff"
  },
  {
    label: "Medical",
    value: "medical",
    icon: "local_hospital",
    color: "#4099ff"
  },
  {
    label: "Gym",
    value: "gym",
    icon: "fitness_center",
    color: "#4099ff"
  },
  {
    label: "Snacks",
    value: "snacks",
    icon: "fastfood",
    color: "#4099ff"
  },
  {
    label: "Shopping",
    value: "shopping",
    icon: "local_grocery_store",
    color: "#4099ff"
  },
  {
    label: "Gifts & Donations",
    value: "gifts_and_donations",
    icon: "local_florist",
    color: "#4099ff"
  },
  {
    label: "LPG Gas",
    value: "lpg_gas",
    icon: "whatshot",
    color: "#4099ff"
  },
  {
    label: "Meats & Fishes",
    value: "meats_and_fishes",
    icon: "kitchen",
    color: "#4099ff"
  },
  {
    label: "Investments",
    value: "investments",
    icon: "people",
    color: "#4099ff"
  },
  {
    label: "Internet",
    value: "internet",
    icon: "public",
    color: "#4099ff"
  },
  {
    label: "Mobile",
    value: "mobile",
    icon: "phone_iphone",
    color: "#4099ff"
  },
  {
    label: "Services & Maintenance",
    value: "services_and_maintenance",
    icon: "ac_unit",
    color: "#4099ff"
  },
  {
    label: "Spa & Parlour",
    value: "spa_and_parlour",
    icon: "spa",
    color: "#4099ff"
  },
  {
    label: "Misc",
    value: "misc",
    icon: "style",
    color: "#4099ff"
  }
];
