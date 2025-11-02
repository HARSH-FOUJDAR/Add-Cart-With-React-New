import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import Cart from "./components/Cart";
import productList from "./components/data";
import "./App.css";

const App = () => {
  const [ProductId, setProductId] = useState();
  const [createallproduct, setCreateallproduct] = useState([]);

  useEffect(() => {
    if (ProductId) {
      setCreateallproduct((prev) => {
        const alreadyExist = prev.some((p) => p.id === ProductId);
        if (alreadyExist) return prev;

        const filterobject = productList.filter(
          (product) => product.id === ProductId
        );
        return [...prev, ...filterobject];
      });
    }
  }, [ProductId]);

  return (
    <BrowserRouter>
      <Header createallproduct={createallproduct} />
      <Routes>
        <Route path="/" element={<Home setProductId={setProductId} />} />
        <Route
          path="/cart"
          element={
            <Cart
              createallproduct={createallproduct}
              setCreateallproduct={setCreateallproduct}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
