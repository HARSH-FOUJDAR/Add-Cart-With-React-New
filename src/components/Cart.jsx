import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { RiDeleteBin6Fill } from "react-icons/ri";

const Cart = ({ createallproduct, setCreateallproduct }) => {
  // Increment count
  const handleIncrement = (id) => {
    setCreateallproduct((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, count: (item.count || 1) + 1 } : item
      )
    );
  };

  // Decrement count
  const handleDecrement = (id) => {
    setCreateallproduct((prevCart) =>
      prevCart.map((item) =>
        item.id === id && item.count > 1
          ? { ...item, count: item.count - 1 }
          : item
      )
    );
  };

  // ✅ Delete product from cart
  const handleDeleteButton = (id) => {
    const filteredItems = createallproduct.filter((item) => item.id !== id);
    setCreateallproduct(filteredItems);
  };

  return (
    <div className="container-fluid">
      <div className="bg-[#eaeded] min-h-screen py-8">
        {createallproduct.map((data) => (
          <div
            key={data.id}
            className="max-w-6xl mx-auto flex flex-col md:flex-row gap-6"
          >
            <div className="bg-white rounded-2xl shadow-md p-4 mb-4 flex flex-col md:flex-row">
              <img
                src={data.img}
                alt={data.model}
                className="w-40 h-40 object-contain mx-auto md:mx-0"
              />

              <div className="p-4">
                <h2>{data.model}</h2>
                <p>{data.description}</p>

                <p className="fw-bold" style={{ color: "#B12704", fontSize: "20px" }}>
                  ₹{data.price}
                </p>

                <p
                  className="fw-bold m-0 text-2xl"
                  style={{ color: "#0F1111", fontSize: "20px" }}
                >
                  {data.brand} {data.model}
                </p>

                <div>
                  <p className="text-muted m-0" style={{ fontSize: "18px" }}>
                    {data.space}
                  </p>
                  <p className="text-muted m-0" style={{ fontSize: "15px" }}>
                    {data.camera}
                  </p>
                </div>

                {/* ✅ Quantity buttons */}
                <div className="mt-12 gap-2 flex items-center">
                  <button
                    type="button"
                    className="btn btn-outline-primary text-2xl"
                    onClick={() => handleIncrement(data.id)}
                  >
                    <FaPlus />
                  </button>

                  <p className="fs-4">{data.count || 1}</p>

                  <button
                    type="button"
                    className="btn btn-outline-primary text-2xl"
                    onClick={() => handleDecrement(data.id)}
                  >
                    <FaMinus />
                  </button>
                </div>

                {/* ✅ Delete button */}
                <div className="flex ml-60">
                  <p className="relative bottom-38">{data.camera}</p>
                  <button
                    type="button"
                    className="btn btn-danger relative bottom-40 left-5"
                    onClick={() => handleDeleteButton(data.id)}
                  >
                    <RiDeleteBin6Fill />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
