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
  },
  {
    name: "shopping_basket",
    tags: ["fruits", "vegetables", "shopping", "grocery"]
  },
  {
    name: "store",
    tags: ["grocery", "market", "shop", "vendor"]
  },
  {
    name: "motorcycle",
    tags: ["bike", "scooter", "automobiles", "transportation"]
  },
  {
    name: "local_movies",
    tags: ["movies", "cinema", "entertainment", "drama"]
  },
  {
    name: "local_hospital",
    tags: ["hospital", "clinic", "medical", "medicines"]
  },
  {
    name: "fitness_center",
    tags: ["gym", "exercise", "fitness", "workout"]
  },
  {
    name: "fastfood",
    tags: ["snacks", "tea", "coffee", "beverages"]
  },
  {
    name: "local_grocery_store",
    tags: ["grocery", "shopping"]
  },
  {
    name: "local_florist",
    tags: ["gifts", "donation"]
  },
  {
    name: "whatshot",
    tags: ["fuel", "lpg", "gasoline", "stove"]
  },
  {
    name: "kitchen",
    tags: ["fishes", "meats", "curry", "kitchen"]
  },
  {
    name: "people",
    tags: ["investment", "people", "family"]
  },
  {
    name: "public",
    tags: ["internet", "data", "connection", "globe"]
  },
  {
    name: "ac_unit",
    tags: ["ac", "service", "maintenance", "fridge"]
  },
  {
    name: "spa",
    tags: ["spa", "parlour", "massage"]
  },
  {
    name: "style",
    tags: ["others", "misc", "uncategorized"]
  },
  {
    name: "security",
    tags: ["protection", "safety", "security", "shield"]
  },
  {
    name: "toys",
    tags: ["toys", "kids", "children", "baby"]
  },
  {
    name: "atm",
    tags: ["atm", "cash", "withdraw", "money", "amount"]
  },
  {
    name: "flight",
    tags: ["flight", "airways", "travel"]
  },
  {
    name: "local_taxi",
    tags: ["car", "polo", "sedan", "hatchback", "suv"]
  },
  {
    name: "hotel",
    tags: ["oyo", "hotel", "pg", "hostel", "paying", "guest", "rent", "tolet"]
  },
  {
    name: "local_bar",
    tags: ["juice", "drinks", "beer", "brandy", "wine", "whisky"]
  },
  {
    name: "local_gas_station",
    tags: ["petrol", "diesel", "gas", "lpg", "fuel"]
  },
  {
    name: "ev_station",
    tags: ["fuel", "diesel", "gas", "lpg", "petrol", "electric", "charging"]
  },
  {
    name: "directions_bus",
    tags: ["bus", "travel", "pass", "transport", "commute"]
  },
  {
    name: "train",
    tags: ["train", "travel", "pass", "transport", "commute"]
  },
  {
    name: "local_shipping",
    tags: ["van", "moving", "packers", "courier", "movers"]
  },
  {
    name: "school",
    tags: [
      "school",
      "college",
      "fees",
      "education",
      "study",
      "course",
      "learning",
      "books"
    ]
  },
  {
    name: "sports_esports",
    tags: ["sports", "gaming", "game", "kids", "children"]
  },
  {
    name: "star",
    tags: ["uncategorized", "important", "gift"]
  },
  {
    name: "smoking_rooms",
    tags: ["smoking", "cigarette", "cigar"]
  },
  {
    name: "local_play",
    tags: ["event", "drama", "ticket", "booking", "cinema"]
  }
];
export const LANGUAGES = [
  {
    label: "English US",
    value: "en-US"
  },
  {
    label: "English UK",
    value: "en-GB"
  },
  {
    label: "English CA",
    value: "en-CA"
  },
  {
    label: "English IN",
    value: "en-IN"
  },
  {
    label: "Russian",
    value: "ru-RU"
  },
  {
    label: "French",
    value: "fr-FR"
  },
  {
    label: "Spanish ES",
    value: "es-ES"
  },
  {
    label: "Spanish MX",
    value: "es-MX"
  },
  {
    label: "German",
    value: "de-DE"
  },
  {
    label: "Portuguese",
    value: "pt-BR"
  },
  {
    label: "Italian",
    value: "it-IT"
  },
  {
    label: "Japanese",
    value: "ja-JP"
  },
  {
    label: "Chinese",
    value: "zh-CN"
  }
];

// Getting 30 Most used currencies from the link below:
// https://fastspring.com/blog/how-to-format-30-currencies-from-countries-all-over-the-world/
export const CURRENCIES = [
  {
    label: "$ USD - United States",
    value: "USD"
  },
  {
    label: "€ EUR - European Union",
    value: "EUR"
  },
  {
    label: "￥ JPY - Japan",
    value: "JPY"
  },
  {
    label: "₹ INR - India",
    value: "INR"
  },
  {
    label: "￥ CNY - China",
    value: "CNY"
  },
  {
    label: "$ CAD - Canada",
    value: "CAD"
  },
  {
    label: "$ AUD - Australia",
    value: "AUD"
  },
  {
    label: "$ ARS - Argentina",
    value: "ARS"
  },
  {
    label: "R$ BRS - Brazilian",
    value: "BRS"
  },
  {
    label: "$ COP - Columbia",
    value: "COP"
  },
  {
    label: "Kč CZK - Czech Republic",
    value: "CZK"
  },
  {
    label: "kr. DKK - Denmark",
    value: "DKK"
  },
  {
    label: "HK$ HKD - HongKong",
    value: "HKD"
  },
  {
    label: "Ft HUF - Hungary",
    value: "HUF"
  },
  {
    label: "₪ ILS - Israel",
    value: "ILS"
  },
  {
    label: "₩ KRW- Republic of Korea",
    value: "KRW"
  },
  {
    label: "RM MYR- Malaysia",
    value: "MYR"
  },
  {
    label: "$ MXN - Mexico",
    value: "MXN"
  },
  {
    label: ".د.م. MAD - Morocco",
    value: "MAD"
  },
  {
    label: "$ NZD - New Zealand",
    value: "NZD"
  },
  {
    label: "kr NOK - Norway",
    value: "NOK"
  },
  {
    label: "₱ PHP - Philippines",
    value: "PHP"
  },
  {
    label: "zł PLN - Poland",
    value: "PLN"
  },
  {
    label: "p. RUB - Russian Federation",
    value: "RUB"
  },
  {
    label: " ﷼ SAR - Saudi Arabia",
    value: "SAR"
  },
  {
    label: "$ SGD - Singapore",
    value: "SGD"
  },
  {
    label: "$ ZAR - South Africa",
    value: "ZAR"
  },
  {
    label: "kr SEK - Sweden",
    value: "SEK"
  },
  {
    label: "fr. CHF - Switzerland",
    value: "CHF"
  },
  {
    label: "元 TWD - Taiwan",
    value: "TWD"
  },
  {
    label: "฿ THB - Thailand",
    value: "THB"
  },
  {
    label: "₺ TRY - Turkey",
    value: "TRY"
  },
  {
    label: "£ GBP - UK/Great Britain",
    value: "GBP"
  },
  {
    label: "₫ VND - Vietnam",
    value: "VND"
  }
];
