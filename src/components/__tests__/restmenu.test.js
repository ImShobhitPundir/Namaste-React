import { fireEvent, render, waitFor } from "@testing-library/react";
import Header from "../Header";
import RestaurantSingle from "../RestaurantSingle";
import Cart from "../Cart";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";
import { RESTAURANT_MENU_DATA } from "../../mocks/mockData";


global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(RESTAURANT_MENU_DATA),
  });
});

test("Add Button Should add value in cart", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
        <RestaurantSingle />
        <Cart />
      </Provider>
    </StaticRouter>
  );
  await waitFor(() => expect(body.getByTestId("menu")));

  const addtBtn = body.getAllByTestId("add-cart-btn");
  fireEvent.click(addtBtn[0])
  fireEvent.click(addtBtn[0])

  const cart = body.getByTestId('cart-value');
  expect(cart.innerHTML).toBe("2");

  const cartItems = body.getByTestId("cart-items");
  expect(cartItems.children.length).toBe(2);
});
