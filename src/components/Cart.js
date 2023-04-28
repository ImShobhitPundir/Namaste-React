import { useSelector } from "react-redux";
import { IMAGE_CDN } from "../utils/constants";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="px-32 py-5">
      <h1 className="font-bold text-xl mb-8">My Cart</h1>
      {cartItems?.length > 0 ? (
        <>
          <button
            className="bg-red-600 text-white p-2 rounded-md hover:bg-red-800"
            onClick={() => handleClearCart()}
          >
            Clear Cart
          </button>
          <table>
            <tr key="0" className="font-bold">
              <td className="px-7">Image</td>
              <td className="px-7">Title</td>
              <td className="px-7">Price</td>
            </tr>
            {cartItems.map((item, index) => (
              <tr key={index} className="border-solid border-t border-gray-400">
                <td className="py-5 text-center px-7">
                  <img
                    src={IMAGE_CDN + item.imageId}
                    className="w-[80px]  rounded-sm object-cover"
                  />
                </td>
                <td className="py-2 px-7">
                  <p className="font-semibold">{item.name}</p>
                </td>
                <td className="px-7">
                  <p>Rs. {item.price / 100}</p>
                </td>
              </tr>
            ))}
          </table>
        </>
      ) : (
        <p>Your Cart is Empty.</p>
      )}
    </div>
  );
};

export default Cart;
