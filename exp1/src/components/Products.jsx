import { useDispatch, useSelector } from "react-redux";
import {
  addProduct,
  deleteProduct,
} from "../store/productsSlice";
import { addToCart } from "../store/cartSlice";
import { useState } from "react";

export default function Products({ role }) {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleAddProduct = () => {
    dispatch(
      addProduct({
        id: Date.now(),
        name,
        price: Number(price),
      })
    );
    setName("");
    setPrice("");
  };

  return (
    <div>
      <h2>Products</h2>

      {role === "admin" && (
        <>
          <input
            placeholder="Product Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            placeholder="Price"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <button onClick={handleAddProduct}>
            Add Product
          </button>
        </>
      )}

      <ul>
        {products.map((p) => (
          <li key={p.id}>
            {p.name} - ₹{p.price}
            <button onClick={() => dispatch(addToCart(p))}>
              Add to Cart
            </button>
            {role === "admin" && (
              <button
                onClick={() =>
                  dispatch(deleteProduct(p.id))
                }
              >
                Delete
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
