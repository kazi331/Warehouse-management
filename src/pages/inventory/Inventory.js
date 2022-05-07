import React from "react";
import './inventory.css'

const Inventory = () => {
  return (
    <div>
      <table
      className="data-table table mb-0 tbl-server-info dataTable no-footer"
      id="DataTables_Table_0"
      role="grid"
      aria-describedby="DataTables_Table_0_info"
    >
      <thead className="bg-white text-uppercase">
        <tr className="ligth ligth-data" role="row">
          <th
            className="sorting_asc"
            tabindex="0"
            aria-controls="DataTables_Table_0"
            rowspan="1"
            colspan="1"
            aria-sort="ascending"
            aria-label="activate to sort column descending"
            style={{width: "16.2812px"}}
          ></th>
          <th
            className="sorting"
            tabindex="0"
            aria-controls="DataTables_Table_0"
            rowspan="1"
            colspan="1"
            aria-label="Product: activate to sort column ascending"
            style={{width: "169.422px"}}
          >
            Product
          </th>
          <th
            className="sorting"
            tabindex="0"
            aria-controls="DataTables_Table_0"
            rowspan="1"
            colspan="1"
            aria-label="Code: activate to sort column ascending"
            style={{width: "63.8438px"}}
          >
            Code
          </th>
          <th
            className="sorting"
            tabindex="0"
            aria-controls="DataTables_Table_0"
            rowspan="1"
            colspan="1"
            aria-label="Category: activate to sort column ascending"
            style={{width: "70.4531px"}}
          >
            Category
          </th>
          <th
            className="sorting"
            tabindex="0"
            aria-controls="DataTables_Table_0"
            rowspan="1"
            colspan="1"
            aria-label="Price: activate to sort column ascending"
            style={{width: "59.0781px"}}
          >
            Price
          </th>
          <th
            className="sorting"
            tabindex="0"
            aria-controls="DataTables_Table_0"
            rowspan="1"
            colspan="1"
            aria-label="Brand Name: activate to sort column ascending"
            style={{width: "94.4688px"}}
          >
            Brand Name
          </th>
         
          <th
            className="sorting"
            tabindex="0"
            aria-controls="DataTables_Table_0"
            rowspan="1"
            colspan="1"
            aria-label="Quantity: activate to sort column ascending"
            style={{width: "68.6562px"}}
          >
            Quantity
          </th>
          <th
            className="sorting"
            tabindex="0"
            aria-controls="DataTables_Table_0"
            rowspan="1"
            colspan="1"
            aria-label="Action: activate to sort column ascending"
            style={{width: "120px"}}
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
                className="img-fluid rounded avatar-50 mr-3"
              />
              <div>
                Organic Cream
                <p className="mb-0"><small>This is test Product</small></p>
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
              <a
                className="badge badge-info mr-2"
                data-toggle="tooltip"
                data-placement="top"
                title=""
                data-original-title="View"
                href="/"
                ><i className="ri-eye-line mr-0"></i
              ></a>
              <a
                className="badge bg-success mr-2"
                data-toggle="tooltip"
                data-placement="top"
                title=""
                data-original-title="Edit"
                href="/"
                ><i className="ri-pencil-line mr-0"></i
              ></a>
              <a
                className="badge bg-warning mr-2"
                data-toggle="tooltip"
                data-placement="top"
                title=""
                data-original-title="Delete"
                href="/"
                ><i className="ri-delete-bin-line mr-0"></i
              ></a>
            </div>
          </td>
        </tr>
        <tr role="row" className="even">
          <td className="sorting_1"></td>
          <td>
            <div className="d-flex align-items-center">
              <img
                src="https://templates.iqonic.design/posdash/laravel/public/images/table/product/02.jpg"
                className="img-fluid rounded avatar-50 mr-3"
              />
              <div>
                Rain Umbrella
                <p className="mb-0"><small>This is test Product</small></p>
              </div>
            </div>
          </td>
          <td>UM01</td>
          <td>Grocery</td>
          <td>$30.00</td>
          <td>Sun</td>
          
          <td>15.0</td>
          <td>
            <div className="d-flex align-items-center list-action">
              <a
                className="badge badge-info mr-2"
                data-toggle="tooltip"
                data-placement="top"
                title=""
                data-original-title="View"
                href="/"
                ><i className="ri-eye-line mr-0"></i
              ></a>
              <a
                className="badge bg-success mr-2"
                data-toggle="tooltip"
                data-placement="top"
                title=""
                data-original-title="Edit"
                href="/"
                ><i className="ri-pencil-line mr-0"></i
              ></a>
              <a
                className="badge bg-warning mr-2"
                data-toggle="tooltip"
                data-placement="top"
                title=""
                data-original-title="Delete"
                href="/"
                ><i className="ri-delete-bin-line mr-0"></i
              ></a>
            </div>
          </td>
        </tr>
 
      </tbody>
    </table>
    </div>
  );
};

export default Inventory;
