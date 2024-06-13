import React from "react";

const products = [
  {
    id: 1,
    name: "Smartphone",
    price: 699.99,
    category: "Electronics",
    description:
      "Latest model with high-resolution camera and long battery life",
    inStock: true,
  },
  {
    id: 2,
    name: "Laptop",
    price: 1299.99,
    category: "Computers",
    description: "Powerful laptop with Intel i7 processor and 16GB RAM",
    inStock: true,
  },
  {
    id: 3,
    name: "Wireless Headphones",
    price: 199.99,
    category: "Accessories",
    description: "Noise-cancelling headphones with Bluetooth connectivity",
    inStock: false,
  },
  {
    id: 4,
    name: "Smartwatch",
    price: 249.99,
    category: "Wearables",
    description: "Water-resistant smartwatch with health tracking features",
    inStock: true,
  },
  {
    id: 5,
    name: "Tablet",
    price: 399.99,
    category: "Electronics",
    description:
      "High-resolution tablet perfect for media consumption and productivity",
    inStock: false,
  },
  {
    id: 6,
    name: "Gaming Console",
    price: 499.99,
    category: "Gaming",
    description:
      "Next-gen gaming console with 4K support and extensive game library",
    inStock: true,
  },
  {
    id: 7,
    name: "Bluetooth Speaker",
    price: 89.99,
    category: "Accessories",
    description:
      "Portable Bluetooth speaker with powerful sound and long battery life",
    inStock: true,
  },
];

const ListProductsComponent = () => (
  <>
    {products.map((product: any) => (
      <div key={product.id} className="flex p-4 mt-5 bg-green rounded shadow">
        <div className="ml-4">
          <h2 className="mb-2 text-xl font-bold">{product.name}</h2>
          <p className="text-gray-600">{product.price}</p>
        </div>
      </div>
    ))}
  </>
);

export default ListProductsComponent;
