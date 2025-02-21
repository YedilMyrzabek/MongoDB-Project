export const registerFormControls = [
  {
    name: "userName",
    label: "User Name",
    placeholder: "Enter your user name",
    componentType: "input",
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

export const loginFormControls = [
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

export const addProductFormElements = [
  {
    label: "Title",
    name: "title",
    componentType: "input",
    type: "text",
    placeholder: "Enter product title",
  },
  {
    label: "Description",
    name: "description",
    componentType: "textarea",
    placeholder: "Enter product description",
  },
  {
    label: "Category",
    name: "category",
    componentType: "select",
    options: [
      { id: "men", label: "Phone" },
      { id: "women", label: "Watch" },
      { id: "kids", label: "Laptop" },
      { id: "accessories", label: "Headphone" },
      { id: "footwear", label: "Television" },
    ],
  },
  {
    label: "Brand",
    name: "brand",
    componentType: "select",
    options: [
      { id: "nike", label: "Apple" },
      { id: "adidas", label: "Samsung" },
      { id: "puma", label: "Xiaomi " },
      { id: "levi", label: "SONY" },
      { id: "zara", label: "Huawei" },
      { id: "h&m", label: "Google" },
    ],
  },
  {
    label: "Price",
    name: "price",
    componentType: "input",
    type: "number",
    placeholder: "Enter product price",
  },
  {
    label: "Sale Price",
    name: "salePrice",
    componentType: "input",
    type: "number",
    placeholder: "Enter sale price (optional)",
  },
  {
    label: "Total Stock",
    name: "totalStock",
    componentType: "input",
    type: "number",
    placeholder: "Enter total stock",
  },
];

export const shoppingViewHeaderMenuItems = [
  {
    id: "home",
    label: "Home",
    path: "/shop/home",
  },
  {
    id: "products",
    label: "Products",
    path: "/shop/listing",
  },
  {
    id: "men",
    label: "Phone",
    path: "/shop/listing",
  },
  {
    id: "women",
    label: "Watch",
    path: "/shop/listing",
  },
  {
    id: "kids",
    label: "Laptop",
    path: "/shop/listing",
  },
  {
    id: "footwear",
    label: "Television",
    path: "/shop/listing",
  },
  {
    id: "accessories",
    label: "Headphone",
    path: "/shop/listing",
  },
  {
    id: "search",
    label: "Search",
    path: "/shop/search",
  },
];

export const categoryOptionsMap = {
  men: "Phone",
  women: "Watch",
  kids: "Laptop",
  accessories: "Headphone",
  footwear: "Television",
};

export const brandOptionsMap = {
  nike: "Apple",
  adidas: "Samsung",
  puma: "Xiaomi",
  levi: "SONY",
  zara: "Huawei",
  "h&m": "Google",
};

export const filterOptions = {
  category: [
    { id: "men", label: "Phone" },
    { id: "women", label: "Watch" },
    { id: "kids", label: "Laptop" },
    { id: "accessories", label: "Headphone" },
    { id: "footwear", label: "Television" },
  ],
  brand: [
    { id: "nike", label: "Apple" },
    { id: "adidas", label: "Samsung" },
    { id: "puma", label: "Xiaomi" },
    { id: "levi", label: "SONY" },
    { id: "zara", label: "Huawei" },
    { id: "h&m", label: "Google" },
  ],
};

export const sortOptions = [
  { id: "price-lowtohigh", label: "Price: Low to High" },
  { id: "price-hightolow", label: "Price: High to Low" },
  { id: "title-atoz", label: "Title: A to Z" },
  { id: "title-ztoa", label: "Title: Z to A" },
];

export const addressFormControls = [
  {
    label: "Address",
    name: "address",
    componentType: "input",
    type: "text",
    placeholder: "Enter your address",
  },
  {
    label: "City",
    name: "city",
    componentType: "input",
    type: "text",
    placeholder: "Enter your city",
  },
  {
    label: "Pincode",
    name: "pincode",
    componentType: "input",
    type: "text",
    placeholder: "Enter your pincode",
  },
  {
    label: "Phone",
    name: "phone",
    componentType: "input",
    type: "text",
    placeholder: "Enter your phone number",
  },
  {
    label: "Notes",
    name: "notes",
    componentType: "textarea",
    placeholder: "Enter any additional notes",
  },
];
