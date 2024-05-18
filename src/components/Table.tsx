import { useState } from "react";
import { BiCoin, BiEdit } from "react-icons/bi";
import { BsViewList } from "react-icons/bs";
import { CgRemove } from "react-icons/cg";
import { FcNext, FcPrevious } from "react-icons/fc";
import { Link } from "react-router-dom";

interface User {
  userName: string;
  exchange: string;
  coin: string;
  amount: number;
}

const UserDetails: User[] = [
  {
    userName: "SpongeBob",
    exchange: "Binance",
    coin: "Solana",
    amount: 5933,
  },
  {
    userName: "Patrick",
    exchange: "Coinbase",
    coin: "Bitcoin",
    amount: 1200,
  },
  {
    userName: "Squidward",
    exchange: "Kraken",
    coin: "Ethereum",
    amount: 3245,
  },
  {
    userName: "Oggy",
    exchange: "Binance",
    coin: "Dogecoin",
    amount: 4556,
  },
  {
    userName: "Obaidul Kader",
    exchange: "BD bank",
    coin: "Unnoyon coin",
    amount: 9999,
  },
];

const Table = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const rowsPerPage = 2;

  const totalPages = Math.ceil(UserDetails.length / rowsPerPage);

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  return (
    <div className="relative p-2 overflow-x-auto">
      <table className="w-full h-full text-sm text-left rtl:text-right text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3">
              User Name
            </th>
            <th scope="col" className="px-6 py-3">
              Exchange
            </th>
            <th scope="col" className="px-6 py-3">
              Coin
            </th>
            <th scope="col" className="px-6 py-3">
              Amount
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {UserDetails.map((user, index) => (
            <tr key={index} className="bg-white border-b">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                {user.userName}
              </th>
              <td className="px-6 py-4">{user.exchange}</td>
              <td className="px-6 py-4">{user.coin}</td>
              <td className="px-6 py-4">
                <BiCoin className="inline mr-2" />
                {user.amount}
              </td>
              <td className="flex gap-1 px-6 py-4">
                <Link
                  to={"/edit"}
                  className="font-medium text-blue-600 hover:underline"
                >
                  <BiEdit />
                </Link>
                <button className="font-medium text-red-600 hover:underline">
                  <CgRemove />
                </button>
                <Link
                  to={"/view"}
                  className="font-medium text-gray-600 hover:underline"
                >
                  <BsViewList />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* footer  */}
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400 disabled:opacity-50"
        >
          <FcPrevious />
        </button>
        <span className="text-gray-700">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400 disabled:opacity-50"
        >
          <FcNext />
        </button>
      </div>
    </div>
  );
};

export default Table;
