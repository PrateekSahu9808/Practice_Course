
import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice";

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://reduxdatabase-a29ce-default-rtdb.firebaseio.com/cart.json"
      );

      // Check if the response is OK
      if (!response.ok) {
        throw new Error("Failed to fetch cart data");
      }

      // Parse the JSON only once
      const data = await response.json();
      console.log("🚀 ~ fetchData ~ data:", data);
      return data;
    };

    try {
      const carData = await fetchData();
      dispatch(cartActions.replaceCart(carData));
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!!",
          message: "Fetching  cart data failed",
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "sending....",
        message: "Please wait... Sending Cart Data",
      })
    );
    const sendRequest = async (dispatch) => {
      const response = await fetch(
        "https://reduxdatabase-a29ce-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({
            items: cart.items,
            totalQuantity: cart.totalQuantity,
          }),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to save cart data");
      }
    };
    try {
      await sendRequest();
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!!",
          message: "Sent Cart data successfully",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!!",
          message: "Sending cart data failed",
        })
      );
    }
  };
};
