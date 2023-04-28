import { render } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";

test("Logo should load on rendering header", () => {
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  const logo = header.getAllByTestId("logo");
  //console.log(header);
  expect(logo[0].src).toBe("http://localhost/dummy.png")
});

test("Cart should 0 on rendering",()=>{
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  )
  const cart = header.getByTestId('cart-value');

  expect(cart.innerHTML).toBe("0");
})
