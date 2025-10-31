import React from "react";
import productList from "./data";
import { Toaster, toast } from "react-hot-toast";
import { FiCheckCircle, FiX } from "react-icons/fi";
const Home = ({ setProductId }) => {
  const HandelAddCart = (id) => {
    setProductId(id);
    toast.success("Product added successfully!");

  };

  return (
    <div className="container-fluid py-5" style={{ backgroundColor: "#EAEDED" }}>
      <div className="row justify-content-center gap-4">
        <Toaster
          position="top-center"
          reverseOrder={false}
          gutter={10}
          toastOptions={{
            duration: 4000,
            style: {
              position: "relative",
              width: "430px",
              minHeight: "85px",
              borderRadius: "14px",
              padding: "22px 28px",
              fontWeight: 600,
              fontSize: "17px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "15px",
              boxShadow: "0 6px 18px rgba(0,0,0,0.3)",
              animation: "slideIn 0.4s ease-out",
            },
            success: {
              icon: <FiCheckCircle size={26} color="#FFD814" />,
              style: {
                background: "#232F3E",
                color: "#FFD814",
                border: "1px solid #FFD814",
              },
            },
            error: {
              icon: <FiX size={26} color="#fff" />,
              style: {
                background: "#B12704",
                color: "#fff",
              },
            },
          }}
        />

        {productList?.map((product, index) => (
          <div
            key={index}
            className="col-4 bg-white border rounded-3 shadow-sm p-3"
            style={{
              width: "280px",
              minHeight: "450px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            {/* Product Image */}
            <div className="text-center cursor-pointer">
              <img
                src={product?.img}
                alt={product?.model}
                style={{
                  height: "200px",
                  width: "180px",
                  objectFit: "contain",
                }}
              />
            </div>

            {/* Product Info */}
            <div>
              <p
                className="fw-bold m-0"
                style={{ color: "#0F1111", fontSize: "15px" }}
              >
                {product?.brand} {product?.model}
              </p>
              <p className="text-muted m-0" style={{ fontSize: "13px" }}>
                {product?.space}
              </p>
              <p className="text-muted m-0" style={{ fontSize: "13px" }}>
                {product?.camera}
              </p>

              <p
                className="fw-bold mt-2"
                style={{ color: "#B12704", fontSize: "20px" }}
              >
                ₹{product?.price}
              </p>
              <p className="text-muted" style={{ fontSize: "12px" }}>
                {product?.description?.slice(0, 50)}...
              </p>
            </div>

            {/* Add to Cart Button */}
            {/* id pass kiya */}
            <button
              onClick={() => HandelAddCart(product.id)}
              className="btn w-100 fw-bold"
              style={{
                backgroundColor: "#FFD814",
                borderColor: "#FCD200",
                color: "#111",
                fontSize: "16px",
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
