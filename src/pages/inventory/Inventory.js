import React from "react";
import "./inventory-mini.css";
const Inventory = () => {
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
            <th
              className="sorting_asc"
              rowspan="1"
              colspan="1"
              aria-sort="ascending"
              style={{ width: "16.2812px" }}
            ></th>
            <th
              className="sorting"
              rowspan="1"
              colspan="1"
              style={{ width: "169.422px" }}
            >
              Product
            </th>
            <th
              className="sorting"
              rowspan="1"
              colspan="1"
              style={{ width: "63.8438px" }}
            >
              Code
            </th>
            <th
              className="sorting"
              rowspan="1"
              colspan="1"
              style={{ width: "70.4531px" }}
            >
              Category
            </th>
            <th
              className="sorting"
              rowspan="1"
              colspan="1"
              style={{ width: "59.0781px" }}
            >
              Price
            </th>
            <th
              className="sorting"
              rowspan="1"
              colspan="1"
              style={{ width: "94.4688px" }}
            >
              Brand Name
            </th>

            <th
              className="sorting"
              rowspan="1"
              colspan="1"
              style={{ width: "68.6562px" }}
            >
              Quantity
            </th>
            <th
              className="sorting"
              rowspan="1"
              colspan="1"
              style={{ width: "120px" }}
            >
              Action
            </th>
          </tr>
        </thead>
        <tbody className="ligth-body">
          <tr role="row" className="odd">
            <td className="sorting_1"></td>
            <td>
              <div className="d-flex align-items-center">
                <img
                  src="https://templates.iqonic.design/posdash/laravel/public/images/table/product/01.jpg"
                  className="img-fluid rounded avatar-50 mr-3" alt=""
                />
                <div>
                  Organic Cream
                  <p className="mb-0">
                    <small>This is test Product</small>
                  </p>
                </div>
              </div>
            </td>
            <td>CREM01</td>
            <td>Beauty</td>
            <td>$25.00</td>
            <td>Lakme</td>

            <td>10.0</td>
            <td>
              <div className="d-flex align-items-center list-action">
                <button className="badge badge-info mr-2 btn">
                  <i className="ri-eye-line mr-0"></i>
                </button>
                <button className="badge bg-success mr-2 btn">
                  <i className="ri-pencil-line mr-0"></i>
                </button>
                <button className="badge bg-warning mr-2 btn">
                  <i className="ri-delete-bin-line mr-0"></i>
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Inventory;
