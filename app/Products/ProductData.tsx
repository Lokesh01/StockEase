"use client";

import { nanoid } from "nanoid";
import { Product } from "./columns";
import {
  MdInventory,
  MdBuild,
  MdPhoneIphone,
  MdLaptop,
  MdKitchen,
  MdHome,
  MdChair,
  MdLightbulbCircle,
  MdOutlineDoorSliding,
} from "react-icons/md";
import { FaBed, FaHeadphones, FaTv } from "react-icons/fa";
import { IoTabletPortrait } from "react-icons/io5";
import { GiSofa } from "react-icons/gi";

export const products: Product[] = [
  {
    id: nanoid(),
    name: "Screwdriver",
    supplier: "ToolSupplier Inc.",
    sku: "SD123",
    category: "Others",
    status: "Draft",
    quantityInStock: 50,
    price: 12.99,
    icon: <MdBuild />,
    createdAt: new Date("2023-01-15"),
  },
  {
    id: nanoid(),
    name: "Hammer",
    supplier: "ToolSupplier Inc.",
    sku: "HM456",
    category: "Others",
    status: "Published",
    quantityInStock: 30,
    price: 15.5,
    icon: <MdInventory />,
    createdAt: new Date("2023-02-10"),
  },
  {
    id: nanoid(),
    name: "Smartphone",
    supplier: "TechWorld",
    sku: "SP789",
    category: "Electronics",
    status: "Published",
    quantityInStock: 100,
    price: 499.99,
    icon: <MdPhoneIphone />,
    createdAt: new Date("2023-03-05"),
  },
  {
    id: nanoid(),
    name: "Laptop",
    supplier: "TechWorld",
    sku: "LT101",
    category: "Electronics",
    status: "Inactive",
    quantityInStock: 25,
    price: 899.99,
    icon: <MdLaptop />,
    createdAt: new Date("2023-04-20"),
  },
  {
    id: nanoid(),
    name: "Microwave Oven",
    supplier: "HomeGoods Co.",
    sku: "MO202",
    category: "Furniture",
    status: "Draft",
    quantityInStock: 15,
    price: 120.0,
    icon: <MdKitchen />,
    createdAt: new Date("2023-05-18"),
  },
  {
    id: nanoid(),
    name: "Washing Machine",
    supplier: "HomeGoods Co.",
    sku: "WM303",
    category: "Home Decor",
    status: "Published",
    quantityInStock: 10,
    price: 450.0,
    icon: <MdHome />,
    createdAt: new Date("2023-06-22"),
  },
  {
    id: nanoid(),
    name: "Refrigerator",
    supplier: "HomeGoods Co.",
    sku: "RF404",
    category: "Home Appliances",
    status: "Inactive",
    quantityInStock: 8,
    price: 799.99,
    icon: <MdKitchen />,
    createdAt: new Date("2023-07-10"),
  },
  {
    id: nanoid(),
    name: "Tablet",
    supplier: "TechWorld",
    sku: "TB505",
    category: "Electronics",
    status: "Draft",
    quantityInStock: 60,
    price: 199.99,
    icon: <MdLaptop />,
    createdAt: new Date("2023-08-15"),
  },
  {
    id: nanoid(),
    name: "Headphones",
    supplier: "AudioTech",
    sku: "HP601",
    category: "Electronics",
    status: "Published",
    quantityInStock: 40,
    price: 79.99,
    icon: <FaHeadphones />,
    createdAt: new Date("2023-09-01"),
  },
  {
    id: nanoid(),
    name: "Office Chair",
    supplier: "FurnitureGalore",
    sku: "OC702",
    category: "Furniture",
    status: "Inactive",
    quantityInStock: 20,
    price: 149.99,
    icon: <MdChair />,
    createdAt: new Date("2023-10-12"),
  },
  {
    id: nanoid(),
    name: "Desk Lamp",
    supplier: "HomeGoods Co.",
    sku: "DL803",
    category: "Electronics",
    status: "Draft",
    quantityInStock: 30,
    price: 34.99,
    icon: <MdLightbulbCircle />,
    createdAt: new Date("2023-11-05"),
  },
  {
    id: nanoid(),
    name: "Gaming Mouse",
    supplier: "TechWorld",
    sku: "GM904",
    category: "Electronics",
    status: "Published",
    quantityInStock: 55,
    price: 59.99,
    icon: <MdHome />,
    createdAt: new Date("2023-12-01"),
  },
  {
    id: nanoid(),
    name: "Electric Kettle",
    supplier: "HomeGoods Co.",
    sku: "EK105",
    category: "Home Appliances",
    status: "Draft",
    quantityInStock: 25,
    price: 39.99,
    icon: <MdKitchen />,
    createdAt: new Date("2024-01-08"),
  },
  {
    id: nanoid(),
    name: "Outdoor Grill",
    supplier: "HomeDepot",
    sku: "OG206",
    category: "Furniture",
    status: "Published",
    quantityInStock: 15,
    price: 249.99,
    icon: <MdOutlineDoorSliding />,
    createdAt: new Date("2024-02-14"),
  },
  {
    id: nanoid(),
    name: "Cordless Drill",
    supplier: "ToolSupplier Inc.",
    sku: "CD307",
    category: "Others",
    status: "Inactive",
    quantityInStock: 35,
    price: 99.99,
    icon: <MdBuild />,
    createdAt: new Date("2024-03-22"),
  },
  {
    id: nanoid(),
    name: "Smart TV",
    supplier: "TechWorld",
    sku: "ST408",
    category: "Electronics",
    status: "Draft",
    quantityInStock: 22,
    price: 599.99,
    icon: <FaTv />,
    createdAt: new Date("2024-04-30"),
  },
  {
    id: nanoid(),
    name: "Dining Table",
    supplier: "FurnitureGalore",
    sku: "DT509",
    category: "Furniture",
    status: "Published",
    quantityInStock: 8,
    price: 399.99,
    icon: <IoTabletPortrait />,
    createdAt: new Date("2024-05-18"),
  },
  {
    id: nanoid(),
    name: "Wireless Earbuds",
    supplier: "AudioTech",
    sku: "WE610",
    category: "Electronics",
    status: "Inactive",
    quantityInStock: 45,
    price: 99.99,
    icon: <FaHeadphones />,
    createdAt: new Date("2024-06-25"),
  },
  {
    id: nanoid(),
    name: "Wall Decor",
    supplier: "HomeGoods Co.",
    sku: "WD711",
    category: "Home Decor",
    status: "Draft",
    quantityInStock: 18,
    price: 29.99,
    icon: <GiSofa />,
    createdAt: new Date("2024-07-03"),
  },
  {
    id: nanoid(),
    name: "Outdoor Furniture Set",
    supplier: "FurnitureGalore",
    sku: "OF812",
    category: "Furniture",
    status: "Published",
    quantityInStock: 12,
    price: 799.99,
    icon: <FaBed />,
    createdAt: new Date("2024-08-11"),
  },
];
