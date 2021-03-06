import React from "react";
import { useNavigate } from "react-router-dom";

const SingleInventory = ({ item, deleteItem }) => {
  const { name, price, quantity, category, img, supplier, _id, description } =
    item;
    
  const navigate = useNavigate();
 
  return (
    <tr role="row" className="odd">
      {/* <td className="sorting_1"></td> */}
      <td className="text-left">
        <div className="d-flex align-items-center text-left">
          <img src={img} className="img-fluid rounded avatar-50 mr-3" alt="" />
          <div className="product-left">
            {name.slice(0, 30)}
            <p className="mb-0">
              <small className="d-none d-xl-block">{description.slice(0, 30)}</small>
            </p>
          </div>
        </div>
      </td>
      <td>{_id.slice(-3)}</td>
      <td>{category}</td>
      <td>{price}</td>
      <td>{supplier ? supplier : "Default"}</td>

      <td>{quantity ? quantity : 10}</td>
      <td>
        <div className="d-flex align-items-center list-action">
          {/* <button className="badge px-2 py-1 badge-info mr-2 btn">
            <i className="ri-eye-line mr-0"></i>
          </button> */}
          <button
            onClick={() => navigate(`/update/${_id}`)}
            className="badge px-2 py-1  bg-success mr-2 btn"
          >
            <i className="ri-pencil-line mr-0"></i>
          </button>
          <button className="badge px-2 py-1  bg-warning mr-2 btn">
            <i
              onClick={() => deleteItem(_id)}
              className="ri-delete-bin-line mr-0"
            ></i>
          </button>
        </div>
      </td>
    </tr>
  );
};

export default SingleInventory;
