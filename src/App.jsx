import { useState } from "react";
import { FaPencilAlt } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaShoppingBag } from "react-icons/fa";
import fruits from "./image/fruits.jpg";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(true);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  const isToggle = () => {
    setIsOpen(!isOpen);
    setIsOpen1(false); // Close other sections
    setIsOpen2(false);
    setIsOpen3(false);
  };

  const isToggle1 = () => {
    setIsOpen1(!isOpen1);
    setIsOpen(false); // Close other sections
    setIsOpen2(false);
    setIsOpen3(false);
  };

  const isToggle2 = () => {
    setIsOpen2(!isOpen2);
    setIsOpen(false);
    setIsOpen1(false);
    setIsOpen3(false);
  };

  const isToggle3 = () => {
    setIsOpen3(!isOpen3);
    setIsOpen(false);
    setIsOpen1(false);
    setIsOpen2(false);
  };

  return (
    <>
      <div className="px-25 bg-gray-100 h-[840px]">
        {/* Kashmiri Apple */}
        <div className="flex items-center gap-4 p-8 font-semibold">
          <FaArrowLeftLong />
          <h1>Kashmiri Apple</h1>
        </div>

        {/* All Content */}
        <div className="items-center px-30">
          {/* Buttons */}
          <div className="flex items-center">
            {/* General Information */}
            <div className={isOpen ? `bg-white text-gray-500 border-1 border-b-0  border-gray-200 items-center px-2 rounded-tl-lg no-border-bottom` : `bg-gray-100 text-gray-500 border-1 border-gray-200 items-center px-2 rounded-tl-lg`}>
              <button onClick={isToggle}>
                <p>General Information</p>
              </button>
            </div>

            {/* Pricing & Tax */}
            <div className={isOpen1 ? `bg-white text-gray-500 border-1 border-b-0 border-gray-200 items-center px-2` : `bg-gray-100 text-gray-500 border-1 border-gray-200 items-center px-2`}>
              <button onClick={isToggle1}>
                <p>Pricing & Tax</p>
              </button>
            </div>

            {/* Description & Media */}
            <div className={isOpen2 ? `bg-white text-gray-500 border-1 border-b-0 border-gray-200 items-center px-2` : `bg-gray-100 text-gray-500 border-1 border-gray-200 items-center px-2`}>
              <button onClick={isToggle2}>
                <p>Description & Media</p>
              </button>
            </div>

            {/* Variants */}
            <div className={isOpen3 ? `bg-white text-gray-500 border-b-0 border-1 border-gray-200 items-center px-2 rounded-tr-lg` : `bg-gray-100 text-gray-500 border-1 border-gray-200 items-center px-2 rounded-tr-lg`}>
              <button onClick={isToggle3}>
                <p>Variants</p>
              </button>
            </div>
          </div>

          {/* Toggle Sections */}
          <div className="border-1 border-gray-100 rounded-tr-lg border-t-0 rounded-b-lg bg-white px-15 py-10">
            {isOpen && (
              <div className="border-1 border-gray-200 rounded-lg">
                {/* Heading */}
                <div className="bg-gray-200 flex border-1 border-gray-100 justify-between rounded-tr-lg rounded-tl-lg">
                  <div className="rounded flex items-center gap-2 px-2 py-2">
                    <div className="text-blue-500 text-4xl p-1 bg-white rounded-md">
                      <FaShoppingBag />
                    </div>
                    <div>
                      <h1 className="font-semibold">Kashmiri Apple</h1>
                      <p className="text-gray-500 font-semibold">
                        SKU-KAPL-021 • Goods • Available Qty - 76kg
                      </p>
                    </div>
                  </div>
                  <div className="px-2 mt-5 text-gray-500">
                    <FaPencilAlt />
                  </div>
                </div>

                {/* All Categories */}
                <div className="flex gap-35">
                  {/* Category */}
                  <div className="py-2">
                    <div className="px-2 mb-3">
                      <p className="text-gray-500">Category</p>
                      <p className="font-semibold">FRUITS</p>
                    </div>
                    <div className="px-2 mb-3">
                      <p className="text-gray-500">Supplier SKU</p>
                      <p className="font-semibold">KAPL-011</p>
                    </div>
                    <div className="px-2">
                      <p className="text-gray-500">Reorder Level</p>
                      <p className="font-semibold">12 QTY</p>
                    </div>
                  </div>

                  {/* Brands */}
                  <div className="py-2">
                    <div className="px-2 mb-3">
                      <p className="text-gray-500">Brands/Manufacturer</p>
                      <p className="font-semibold">Kashmiri Apple</p>
                    </div>
                    <div className="px-2 mb-3">
                      <p className="text-gray-500">Barcode</p>
                      <p className="font-semibold">UPC - 1234 5678 9090</p>
                      <p className="font-semibold">EAN - 1234 5678 9090</p>
                    </div>
                    <div className="px-2">
                      <p className="text-gray-500">Initial Stock Quantity</p>
                      <p className="font-semibold">448</p>
                    </div>
                  </div>

                  {/* Product Type */}
                  <div className="py-2">
                    <div className="px-2 mb-3">
                      <p className="text-gray-500">Product Type</p>
                      <p className="font-semibold">Simple</p>
                    </div>
                    <div className="px-2 mb-3">
                      <p className="text-gray-500">Warehouse Location</p>
                      <p className="font-semibold">Noida Sector 62</p>
                    </div>
                    <div className="px-2">
                      <p className="text-gray-500">Track by</p>
                      <p className="font-semibold">Serial No.</p>
                    </div>
                  </div>

                  {/* Supplier */}
                  <div className="py-2">
                    <div className="px-2 mb-3">
                      <p className="text-gray-500">Supplier</p>
                      <p className="font-semibold">Alok Ranjan</p>
                    </div>
                    <div className="px-2 mb-3">
                      <p className="text-gray-500">Lead Time</p>
                      <p className="font-semibold">16</p>
                    </div>
                    <div className="px-2">
                      <p className="text-gray-500">Status</p>
                      <p className="font-semibold">Returnable</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {isOpen1 && (
              <div className="border-1 border-gray-100 rounded-lg">
                {/* Heading */}
                <div className="bg-gray-200 flex border-1 border-gray-100 justify-between rounded-tr-lg rounded-tl-lg">
                  <div className="rounded flex items-center gap-2 px-2 py-2">
                    <div className="text-blue-500 text-4xl p-1 bg-white rounded-md">
                      <FaShoppingBag />
                    </div>
                    <div>
                      <h1 className="font-semibold">Kashmiri Apple</h1>
                      <p className="text-gray-500 font-semibold">
                        SKU-KAPL-021 • Goods • Available Qty - 76kg
                      </p>
                    </div>
                  </div>
                  <div className="px-2 mt-5 text-gray-500">
                    <FaPencilAlt />
                  </div>
                </div>

                {/* All Categories */}
                <div className="flex gap-35">
                  {/* Category */}
                  <div className="py-2">
                    <div className="px-2 mb-3">
                      <p className="text-gray-500">Purchase Price</p>
                      <p className="font-semibold">FRUITS</p>
                    </div>
                    <div className="px-2 mb-3">
                      <p className="text-gray-500">Unit</p>
                      <p className="font-semibold">KAPL-011</p>
                    </div>
                    <div className="px-2">
                      <p className="text-gray-500">HSN / SAC</p>
                      <p className="font-semibold">16 days</p>
                    </div>
                  </div>

                  {/* Brands */}
                  <div className="py-2">
                    <div className="px-2 mb-3">
                      <p className="text-gray-500">Selling price</p>
                      <p className="font-semibold">Kashmiri Apple</p>
                    </div>
                    <div className="px-2 mb-3">
                      <p className="text-gray-500">Discount</p>
                      <p className="font-semibold">UPC - 1234 5678 9090</p>
                      <p className="font-semibold">EAN - 1234 5678 9090</p>
                    </div>
                    <div className="px-2">
                      <p className="text-gray-500">GST Rate</p>
                      <p className="font-semibold">12 QTY</p>
                    </div>
                  </div>

                  {/* Product Type */}
                  <div className="py-2">
                    <div className="px-2 mb-3">
                      <p className="text-gray-500">
                        Wholesale Price / Bulk Price
                      </p>
                      <p className="font-semibold">Simple</p>
                    </div>
                    <div className="px-2 mb-3">
                      <p className="text-gray-500">Discount Period</p>
                      <p className="font-semibold">Noida Sector 62</p>
                    </div>
                  </div>

                  {/* Supplier */}
                  <div className="py-2">
                    <div className="px-2 mb-3">
                      <p className="text-gray-500">Quantity</p>
                      <p className="font-semibold">Alok Ranjan</p>
                    </div>
                    <div className="px-2 mb-3">
                      <p className="text-gray-500">Tax Rate</p>
                      <p className="font-semibold">KG</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {isOpen2 && (
              <div className="border-1 border-gray-100 rounded-lg">
                {/* Description & Media Content (Example) */}
                <div className="bg-gray-200 flex  border-gray-100 justify-between rounded-tr-lg rounded-tl-lg">
                  <div className="rounded flex items-center gap-2 px-2 py-2">
                    <div className="text-blue-500 text-4xl p-1 bg-white rounded-md">
                      <FaShoppingBag />
                    </div>
                    <div>
                      <h1 className="font-semibold">Kashmiri Apple</h1>
                      <p className="text-gray-500 font-semibold">
                        SKU-KAPL-021 • Goods • Available Qty - 76kg
                      </p>
                    </div>
                  </div>
                  <div className="px-2 mt-5 text-gray-500">
                    <FaPencilAlt />
                  </div>
                </div>
                <div>
                  <div className=" gap-35">
                    <div className="py-2 px-2.5 flex gap-5">
                      <img src={fruits} alt="fruits"></img>
                      <div>
                        <div className="flex gap-30">
                          <div className="">
                            <p className="text-gray-500">SEO META TITLE</p>
                            <p className="font-semibold">Raseele Aam</p>
                          </div>
                          <div>
                            <p className="text-gray-500">
                              SEO META Description
                            </p>
                            <p className="font-semibold">
                              Ratnagiri Ke Raseele Aam
                            </p>
                          </div>
                        </div>

                        <div className="py-5">
                          <p className="text-gray-500">Keywords</p>
                          <p className="font-semibold">
                            Mango, Fruits, Kashmiri aam, Ratnagiri aam, langra
                            aam, keshri aam
                          </p>
                        </div>

                        <div>
                          <p className="text-gray-500">Description</p>
                          <p className="font-semibold">
                            Mangoes, Often referred to as the"king of fruits,"
                            are not only delicious but also packed with
                            nutrients. they are rich in vitamins A and C, which
                            are essential for maintaining healthy skin and
                            boosting the immune system. Additionally, mangoes
                            contain antioxidants that help combat free radicals
                            in the body. Their sweet, juicy smoothies, salads,
                            ans desserts.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {isOpen3 && (
              <div className=" rounded-lg ">
                {/* Variants Content (Example) */}
                <div className="bg-gray-200 flex justify-between rounded-tr-lg rounded-tl-lg">
                  <div className="rounded flex items-center gap-2 px-2 py-2">
                    <div className="text-blue-500 text-4xl p-1 bg-white rounded-md">
                      <FaShoppingBag />
                    </div>
                    <div>
                      <h1 className="font-semibold">Kashmiri Apple</h1>
                      <p className="text-gray-500 font-semibold">
                        SKU-KAPL-021 • Goods • Available Qty - 76kg
                      </p>
                    </div>
                  </div>
                  <div className="px-2 mt-5 text-gray-500">
                    <FaPencilAlt />
                  </div>
                </div>

                <div className="px-2.5 bg-gray-200 mt-5 flex gap-60">
                  <p className="text-gray-500">Color</p>
                  <p className="text-gray-500">Quantity</p>
                </div>
                <div className="flex gap-63 px-2 py-2 rounded-l border-1 border-gray-100"> 
                  <p> Red </p>
                  <p> 00 </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
