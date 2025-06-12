import { useState } from "react";
import { FaPencilAlt } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaShoppingBag } from "react-icons/fa";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const isToggle = () => {
       setIsOpen(!isOpen);
       setIsOpen1(false); 
       setIsOpen2(false);
       setIsOpen3(false);
  };

  const [isOpen1, setIsOpen1] = useState(false);
  const isToggle1 = () => {
    setIsOpen1(!isOpen1);
    setIsOpen(false); 
    setIsOpen2(false);
    setIsOpen3(false);
       
  };

  const [isOpen2, setIsOpen2] = useState(false);
  const isToggle2 = () => {
     setIsOpen2(!isOpen2);
     setIsOpen(false);
     setIsOpen1(false);
     setIsOpen3(false);
  };

  const [isOpen3, setIsOpen3] = useState(false);
  const isToggle3 = () => {
     setIsOpen(!isOpen3);
     setIsOpen(false);
     setIsOpen1(false);
     setIsOpen2(false);
  };

  return (
    <>
      <div className="px-25">
        {/* Kashmiri Apple */}
        <div className="flex items-center gap-4 p-8 font-semibold">
          <FaArrowLeftLong />
          <h1>Kashmiri Apple</h1>
        </div>

        {/* All Content */}
        <div className="items-center px-30 ">

          {/* buttons */}
          <div className="flex items-center ">
            {/* Genral information */}
            <div className="border-1 items-center px-2 rounded-tl-lg bg-white">
              <button className={isOpen ? "bg-white" : ""  }
               onClick={isToggle}>
                <p>Genral information</p>
              </button>
            </div>

            {/* Pricing & tax */}
            <div className="border-1 items-center px-2 ">
              <button className={isOpen1 ? "bg-white" : "" }
               conClick={isToggle1}>
                <p>Pricing & Tax</p>
              </button>
            </div>

            {/* Description & media */}
            <div className="border-1 items-center px-2 ">
              <button className={isOpen2 ? "bg-white" : "" }
              onClick={isToggle2}>
                <p>Description & Media</p>
              </button>
            </div>

            {/* Variants */}
            <div className="border-1 items-center px-2 rounded-tr-lg">
              <button className={isOpen3 ? "bg-white" : "" } 
              onClick={isToggle3}>
                <p>Variants</p>
              </button>
            </div>
          </div>

          {/* toggle Section */}
          <div className="border-1 bg-white px-15 py-10  ">
            {!isOpen && (
              <div className="border-1 rounded-lg ">
                {/* heading */}
                <div className="bg-gray-200 flex border-1 justify-between rounded-tr-lg rounded-tl-lg">
                  <div className="rounded flex items-center gap-2 px-2 py-2 ">
                    <div className=" text-blue-500 text-4xl p-1 bg-white rounded-md">
                      <FaShoppingBag />
                    </div>
                    <div>
                      <h1 className="font-semibold">Kashmiri Apple</h1>
                      <p className="text-gray-500 font-semibold">SKU-KAPL-021  • Goods  • Available Qty - 76kg</p>
                    </div>
                    <div></div>
                  </div>
                  <div className="px-2 mt-5 text-gray-500">
                    <FaPencilAlt />
                  </div>
                </div>

                {/* all Category */}
                <div className=" flex gap-35 ">

                  {/* category*/}
                  <div className="py-2 ">
                    
                    <div className="px-2 mb-3 ">
                      <p className="text-gray-500 ">Category</p>
                      <p className="font-semibold">FRUITS</p>
                    </div>

                    {/* Supplier SKU*/}
                      <div className="px-2 mb-3">
                        <p className="text-gray-500 ">Supplier SKU</p>
                        <p className="font-semibold">KAPL-011</p>
                      </div>

                      {/* reorder */}

                      <div className="px-2 ">
                        <p className="text-gray-500 ">Reorder Level</p>
                        <p className="font-semibold">12 QTY</p>
                      </div>
                  </div>

                  {/* brands */}

                 <div className="py-2">
                    <div className="px-2 mb-3 ">
                      <p className="text-gray-500 ">Brands/Manufacturer</p>
                      <p className="font-semibold">Kashmiri Apple</p>
                    </div>

                    {/* Supplier SKU*/}
                      <div className="px-2 mb-3">
                        <p className="text-gray-500 ">Barcode</p>
                        <p className="font-semibold">UPC - 1234 5678 9090</p>
                        <p className="font-semibold">EAN - 1234 5678 9090</p>
                      </div>

                      {/* reorder */}

                      <div className="px-2 ">
                        <p className="text-gray-500 ">Initial Stock Quantity </p>
                        <p className="font-semibold">448</p>
                      </div>
                 </div>

                 {/* Product Type */}

                 <div className="py-2">
                    <div className="px-2 mb-3 ">
                      <p className="text-gray-500 ">Product Type</p>
                      <p className="font-semibold">Simple</p>
                    </div>

                    {/* Supplier SKU*/}
                      <div className="px-2 mb-3">
                        <p className="text-gray-500 ">Warehouse Location</p>
                        <p className="font-semibold">Noida Sector 62</p>
                      </div>

                      {/* reorder */}

                      <div className="px-2 ">
                        <p className="text-gray-500 ">Track by</p>
                        <p className="font-semibold">Serial No.</p>
                      </div>
                 </div>

                 {/* Supplier */}

                 <div className="py-2">
                    <div className="px-2 mb-3 ">
                      <p className="text-gray-500 ">Supplier</p>
                      <p className="font-semibold">Alok Ranjan</p>
                    </div>

                    {/* Supplier SKU*/}
                      <div className="px-2 mb-3">
                        <p className="text-gray-500 ">Lead Time</p>
                        <p className="font-semibold">16</p>
                      </div>

                      {/* reorder */}

                      <div className="px-2 ">
                        <p className="text-gray-500 ">Status</p>
                        <p className="font-semibold">Returnable</p>
                      </div>
                 </div>
                </div>
              </div>
            )}
            
            {!isOpen2 && (
              <div className="border-1 rounded-lg ">
                {/* heading */}
                <div className="bg-gray-200 flex border-1 justify-between rounded-tr-lg rounded-tl-lg">
                  <div className="rounded flex items-center gap-2 px-2 py-2 ">
                    <div className=" text-blue-500 text-4xl p-1 bg-white rounded-md">
                      <FaShoppingBag />
                    </div>

                    <div>
                      <h1 className="font-semibold">Kashmiri Apple</h1>
                      <p className="text-gray-500 font-semibold">SKU-KAPL-021  • Goods  • Available Qty - 76kg</p>
                    </div>

                    <div></div>
                  </div>
                  <div className="px-2 mt-5 text-gray-500">
                    <FaPencilAlt />
                  </div>
                </div>

                {/* all Category */}
                <div className=" flex gap-35 ">

                  {/* category*/}
                  <div className="py-2 ">
                    
                    {/*Purchase*/}
                    <div className="px-2 mb-3 ">
                      <p className="text-gray-500 ">Purchase Price</p>
                      <p className="font-semibold">FRUITS</p>
                    </div>

                    {/* unit */}
                      <div className="px-2 mb-3">
                        <p className="text-gray-500 ">Unit</p>
                        <p className="font-semibold">KAPL-011</p>
                      </div>

                      {/* Hsn / sac */}

                      <div className="px-2 ">
                        <p className="text-gray-500 ">HSN / SAC</p>
                        <p className="font-semibold">16 days</p>
                      </div>
                  </div>

                  {/* Selling */}

                 <div className="py-2">
                    <div className="px-2 mb-3 ">
                      <p className="text-gray-500 ">Selling Price</p>
                      <p className="font-semibold">Kashmiri Apple</p>
                    </div>

                    {/* Discount */}
                      <div className="px-2 mb-3">
                        <p className="text-gray-500 ">Discount</p>
                        <p className="font-semibold">UPC - 1234 5678 9090</p>
                        <p className="font-semibold">EAN - 1234 5678 9090</p>
                      </div>

                      {/* GST */}

                      <div className="px-2 ">
                        <p className="text-gray-500 ">GST RATE </p>
                        <p className="font-semibold">12 QTY</p>
                      </div>
                 </div>

                 {/* Wholesale Price / Bulk Price */}

                 <div className="py-2">
                    <div className="px-2 mb-3 ">
                      <p className="text-gray-500 ">Wholesale Price / Bulk Price</p>
                      <p className="font-semibold">Simple</p>
                    </div>

                    {/* Period */}
                      <div className="px-2 mb-3">
                        <p className="text-gray-500 ">Discount Period</p>
                        <p className="font-semibold">Noida Sector 62</p>
                      </div>

                 </div>

                 {/* Quantity */}

                 <div className="py-2">
                    <div className="px-2 mb-3 ">
                      <p className="text-gray-500 ">Quantity</p>
                      <p className="font-semibold">Alok Ranjan</p>
                    </div>

                    {/* Tax */}
                      <div className="px-2 mb-3">
                        <p className="text-gray-500 ">Tax Rate</p>
                        <p className="font-semibold">Kg</p>
                      </div>

                 </div>

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
