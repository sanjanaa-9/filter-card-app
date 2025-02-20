import React, { useState } from "react";
import productData from "../db/data.json";

const App = () => {
  const [searchPrice, setSearchPrice] = useState("");
  const [searchName, setSearchName] = useState("");
  const [searchCategory, setSearchCategory] = useState("");

  const filteredProducts = productData.data.items.filter((product) => {
    return (
      (searchPrice === "" || product.price.toString().includes(searchPrice)) &&
      (searchName === "" || product.name.toLowerCase().includes(searchName.toLowerCase())) &&
      (searchCategory === "" || product.category.toLowerCase().includes(searchCategory.toLowerCase()))
    );
  });

  return (
    <div className="bg-gray-700 min-h-screen">
      
      <div className="fixed top-0 left-0 w-full bg-gray-600 p-4 mt-1 rounded-2xl z-50">
        <div className="flex justify-between items-center">
          <div className="text-white text-xl font-bold">PRODUCT LIST</div>
          <div className="flex space-x-3">
            <input
              type="text"
              placeholder="Search by Price"
              className="p-2 border rounded"
              onChange={(e) => setSearchPrice(e.target.value)}
            />
            <input
              type="text"
              placeholder="Search by Name"
              className="p-2 border rounded"
              onChange={(e) => setSearchName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Search by Category"
              className="p-2 border rounded "
              onChange={(e) => setSearchCategory(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="p-10 pt-24 bg-gray-700">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">🏷</div>
                  <div>
                    <h3 className="text-lg font-semibold">{product.name}</h3>
                    <p className="text-gray-500 text-sm">{product.category}</p>
                  </div>
                </div>
              </div>
              <p className="text-gray-700 mb-3">{product.description}</p>
              <div className="flex justify-between items-center">
                <p className="text-lg font-bold text-blue-600">₹{product.price}</p>
                <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800">Buy Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;


