import { fireEvent, render, waitFor } from "@testing-library/react";
import Body from "../Body";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";
import { RESTAURANT_DATA } from "../../mocks/mockData";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(RESTAURANT_DATA),
  });
});

test("Search Result on Home Page", () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );
  const shimmer = body.getByTestId("shimmer");
  expect(shimmer.children.length).toBe(15);
});

test("Restaurant List shoul on Home Page.", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  await waitFor(()=>expect(body.getByTestId('search-btn')));
  const restaurants = body.getByTestId('restaurants');
  expect(restaurants.children.length).toBe(15);
});

test("Search (snacks) string in input box",async ()=>{
    const body = render(
        <StaticRouter>
          <Provider store={store}>
            <Body />
          </Provider>
        </StaticRouter>
      );
      await waitFor(()=>expect(body.getByTestId('search-btn')));

      const input = body.getByTestId("search-input");
      fireEvent.change(input, {
        target:{
            value: "snacks"
        }
      });

      const restaurants = body.getByTestId('restaurants');
      expect(restaurants.children.length).toBe(2);


})
