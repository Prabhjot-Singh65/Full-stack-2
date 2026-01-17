import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  updateQty,
} from "../store/cartSlice";

export default function Cart() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const total = items.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div>
      <h2>Cart</h2>

      {items.map((item) => (
        <div key={item.id}>
          {item.name} - ₹{item.price}
          <input
            type="number"
            min="1"
            value={item.qty}
            onChange={(e) =>
              dispatch(
                updateQty({
                  id: item.id,
                  qty: Number(e.target.value),
                })
              )
            }
          />
          <button
            onClick={() =>
              dispatch(removeFromCart(item.id))
            }
          >
            Remove
          </button>
        </div>
      ))}

      <h3>Total: ₹{total}</h3>
    </div>
  );
}
