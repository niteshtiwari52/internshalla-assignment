import React, { useState } from "react";
import { useDispatch } from "react-redux";
// redux
import { useSelector } from "react-redux";

// Actions
import {
  demoAction,
  restDemoData,
} from "../../redux/reducers/demo/demo.action";
const Trail = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const data = useSelector((globalState) => globalState.demo.categories);

  const fetchDemoData = async () => {
    await setLoading(true);

    await dispatch(demoAction());
    await setLoading(false);
  };
  const resetDemoDataFun = () => {
    dispatch(restDemoData());
  };
  return (
    <>
      <h1 className="text-center">Demo Page</h1>
      <div className="w-1/2 mx-auto">
        <p>
          This is demo <b>Click</b> on the button and check console.{" "}
        </p>
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={fetchDemoData}
        >
          {loading ? "Loading..." : "Fetch Data"}
        </button>
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={resetDemoDataFun}
        >
          Delete data
        </button>
      </div>
      {/* Table Data  */}

      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            {data ? (
              <tr>
                <th scope="col" className="px-6 py-3">
                  S.No
                </th>
                <th scope="col" className="px-6 py-3">
                  Category
                </th>
                <th scope="col" className="px-6 py-3">
                  Description
                </th>
              </tr>
            ) : (
              ""
            )}
          </thead>
          <tbody>
            {data
              ? data.map((item, index) => (
                  <tr
                    key={index + 1}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  >
                    <td className="px-6 py-4">{item.idCategory}</td>
                    <td className="px-6 py-4"> {item.strCategory} </td>
                    <td className="px-6 py-4">
                      {" "}
                      {item.strCategoryDescription}{" "}
                    </td>
                  </tr>
                ))
              : ""}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Trail;
