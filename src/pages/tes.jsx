// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

function ShoppingCart() {
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Product A',
      image: 'https://source.unsplash.com/random/200x150',
      description: 'This is Product A description.',
      price: 10,
    },
    {
      id: 2,
      name: 'Product B',
      image: 'https://source.unsplash.com/random/200x150',
      description: 'This is Product B description.',
      price: 15,
    },
    {
      id: 3,
      name: 'Product C',
      image: 'https://source.unsplash.com/random/200x150',
      description: 'This is Product C description.',
      price: 20,
    },
  ]);
  const [newProductName, setNewProductName] = useState('');
  const [newProductDescription, setNewProductDescription] = useState('');
  const [newProductPrice, setNewProductPrice] = useState('');

  const addItemToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const removeItemFromCart = (index) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);
  };

  const removeAllItems = () => {
    setCartItems([]);
  };

  const addNewProduct = () => {
    const newProduct = {
      id: products.length + 1,
      name: newProductName,
      image: 'https://source.unsplash.com/random/200x150',
      description: newProductDescription,
      price: parseInt(newProductPrice),
    };
    setProducts((prevProducts) => [...prevProducts, newProduct]);
    setNewProductName('');
    setNewProductDescription('');
    setNewProductPrice('');
  };

  const removeProduct = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
  };

  const calculateTotalPrice = () => {
    const totalPrice = cartItems.reduce((total, item) => {
      const product = products.find((prod) => prod.name === item);
      return total + product.price;
    }, 0);
    return totalPrice;
  };

  const CartItems = () => (
    <div>
      <h2 className="text-2xl font-bold mb-4">Cart Items:</h2>
      <ul className="list-disc pl-6">
        {cartItems.map((item, index) => (
          <li key={index} className="mb-2">
            {item}
            <button
              className="ml-2 text-red-500 hover:text-red-700"
              onClick={() => removeItemFromCart(index)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <p className="text-lg font-semibold mt-4">
        Total Price: ${calculateTotalPrice()}
      </p>
      <button
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 mt-2"
        onClick={removeAllItems}
      >
        Remove All Items
      </button>
    </div>
  );

  return (
    <div className="bg-gray-100 p-4 flex">
      <div className="grid grid-cols-3 gap-4 flex-grow-0 w-2/3 pr-4">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded shadow">
            <img src={product.image} alt={product.name} className="mb-2" />
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-500">{product.description}</p>
            <p className="text-lg font-semibold">${product.price}</p>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 mt-2"
              onClick={() => removeProduct(product.id)}
            >
              Hapus
            </button>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-2"
              onClick={() => addItemToCart(product.name)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      <div className="flex-grow">
        <CartItems />
        <div className="mt-4">
          <h2 className="text-lg font-semibold">Add New Product:</h2>
          <input
            type="text"
            placeholder="Product Name"
            value={newProductName}
            onChange={(e) => setNewProductName(e.target.value)}
            className="border rounded p-2 mt-2"
          />
          <textarea
            placeholder="Product Description"
            value={newProductDescription}
            onChange={(e) => setNewProductDescription(e.target.value)}
            className="border rounded p-2 mt-2"
          />
          <input
            type="number"
            placeholder="Product Price"
            value={newProductPrice}
            onChange={(e) => setNewProductPrice(e.target.value)}
            className="border rounded p-2 mt-2"
          />
          <button
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mt-2"
            onClick={addNewProduct}
          >
            Add Product
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
