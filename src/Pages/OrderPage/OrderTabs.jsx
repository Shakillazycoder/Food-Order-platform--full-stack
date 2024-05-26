import { useState } from "react";
import FoodCards from "../../Component/FoodCards";

const OrderTabs = ({ items }) => {
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the index of the first and last item of the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // Get the current items to display
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  // Function to handle page change
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {currentItems.map((item, index) => (
          <FoodCards key={index} item={item}></FoodCards>
        ))}
      </div>
      {/* Pagination */}
      <div className="mt-4 flex justify-center">
        {items.length > itemsPerPage && (
          <ul className="flex list-none">
            {Array.from({ length: Math.ceil(items.length / itemsPerPage) }, (_, i) => (
              <li key={i} className="mx-2 cursor-pointer">
                <button
                  className={`px-3 py-1 ${
                    currentPage === i + 1 ? "bg-gray-800 text-white" : "bg-gray-200"
                  }`}
                  onClick={() => paginate(i + 1)}
                >
                  {i + 1}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default OrderTabs;
