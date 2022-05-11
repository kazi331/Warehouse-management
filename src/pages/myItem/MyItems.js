import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import SingleInventory from "../inventory/SingleInventory";

const MyItems = () => {
  const [user, loading, error] = useAuthState(auth);
  console.log(user?.email);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const url = `http://localhost:5000/my-items?email=${user?.email}`;
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  }, [user?.email]);

  const deleteItem = (id) => {
    const proceed = window.confirm("are you sure?");
    if (proceed) {
      const url = `https://obscure-fortress-33779.herokuapp.com/delete/${id}`;
      fetch(url, { method: "delete" })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.acknowledged) {
            const remaining = products.filter((single) => single._id !== id);
            setProducts(remaining);
          }
        });
    }
  };
  console.log(products);
  return (
    <div className="container mx-auto">
      <h2 className="text-center p-4 m-4">My Items</h2>
      <table
        className="data-table table mb-0 tbl-server-info dataTable mb-4"
        id="DataTables_Table_0"
        role="grid"
        aria-describedby="DataTables_Table_0_info"
      >
        <thead className="bg-white text-uppercase">
          <tr className="ligth ligth-data" role="row">
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
        {products.length === 0 ? (
          <p style={{borderTop : '0', margin: '5px auto', textAlign: 'center'}}>No products found !! </p>
        ) : (
          <tbody className="ligth-body">
            {products.map((single) => (
              <SingleInventory
                item={single}
                key={single._id}
                deleteItem={() => deleteItem(single._id)}
              />
            ))}
          </tbody>
        )}
      </table>
    </div>
  );
};

export default MyItems;
