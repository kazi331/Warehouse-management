import React, { useEffect, useState } from "react";
import "./inventory-mini.css";
import SingleInventory from "./SingleInventory";
const Inventory = () => {
  const [inventory, setInventory] = useState([]);
  useEffect(() => {
    fetch("https://obscure-fortress-33779.herokuapp.com/get-product")
      .then((res) => res.json())
      .then((data) => setInventory(data));
  }, []);
  // console.log(inventory);
  return (
    <div className="container-fluid py-4">
      <table
        className="data-table table mb-0 tbl-server-info dataTable"
        id="DataTables_Table_0"
        role="grid"
        aria-describedby="DataTables_Table_0_info"
      >
        <thead className="bg-white text-uppercase">
          <tr className="ligth ligth-data" role="row">
            {/* <th
              className="sorting_asc"
              rowSpan="1"
              colSpan="1"
              aria-sort="ascending"
              style={{ width: "16.2812px" }}
            ></th> */}
            <th
              className="sorting text-left"
              rowSpan="1"
              colSpan="1"
              style={{ width: "175.422px" }}
            >
              Product
            </th>
            <th
              className="sorting"
              rowSpan="1"
              colSpan="1"
              style={{ width: "50.8438px" }}
            >
              Code
            </th>
            <th
              className="sorting"
              rowSpan="1"
              colSpan="1"
              style={{ width: "70.4531px" }}
            >
              Category
            </th>
            <th
              className="sorting"
              rowSpan="1"
              colSpan="1"
              style={{ width: "50.0781px" }}
            >
              Price
            </th>
            <th
              className="sorting"
              rowSpan="1"
              colSpan="1"
              style={{ width: "120.4688px" }}
            >
              Supplier
            </th>

            <th
              className="sorting"
              rowSpan="1"
              colSpan="1"
              style={{ width: "60.6562px" }}
            >
              Quantity
            </th>
            <th
              className="sorting"
              rowSpan="1"
              colSpan="1"
              style={{ width: "120px" }}
            >
              Action
            </th>
          </tr>
        </thead>
        <tbody className="ligth-body">
          {inventory.map((single) => (
            <SingleInventory item={single} key={single._id} />
          ))}

          
        </tbody>
      </table>
    </div>
  );
};

export default Inventory;
