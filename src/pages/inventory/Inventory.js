import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./inventory-mini.css";
import SingleInventory from "./SingleInventory";

const Inventory = () => {
  const [inventory, setInventory] = useState([]);
  useEffect(() => {
    fetch("https://obscure-fortress-33779.herokuapp.com/get-product")
      .then((res) => res.json())
      .then((data) => setInventory(data));
  }, []);

  // spinner
  if (inventory.length === 0) {
    return (
      <div
        style={{ width: "90vw", height: "90vh" }}
        className="d-flex align-items-center justify-content-center"
      >
        <Spinner variant="info" animation="grow" />
      </div>
    );
  }
  // delete item
  const deleteItem = (id) => {
    const proceed = window.confirm("are you sure?");
    if (proceed) {
      const url = `https://obscure-fortress-33779.herokuapp.com/delete/${id}`;
      fetch(url, { method: "delete" })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.acknowledged) {
            const remaining = inventory.filter((single) => single._id !== id);
            setInventory(remaining);
          }
        });
    }
  };

  return (
    <div className="container py-4">
      <Link to="/new" className="btn bg-info text-white my-2 float-right">
        Add New Item
      </Link>
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
            <SingleInventory
              item={single}
              key={single._id}
              deleteItem={() => deleteItem(single._id)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Inventory;
