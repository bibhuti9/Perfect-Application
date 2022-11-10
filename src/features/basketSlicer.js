import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { u_id } from "../../config";
import { flashMessage } from "../api/common_function";
import {
  addToCart,
  deleteAddToCart,
  fetchAddToCart,
  updateAddToCart,
} from "../api/fetch_api";

export const fetchUsers = createAsyncThunk(
  "basket/fetchUsers",
  async (sendData, { getState, dispatch }) => {
    const state = getState();
    if (sendData.count == 0) {
      await deleteAddToCart(sendData._id);
      flashMessage("Product Deleted", "");
      const result = await fetchAddToCart(u_id).then((result) => result);
      console.log(result);
      state.basket.itemBasket = result;
      return [...state.basket.itemBasket];
    }
    const index = state.basket.itemBasket.findIndex(
      (values) => values.p_id === sendData.p_id
    );
    if (index == -1) {
      console.log("add");
      await addToCart(sendData).then((result) => result);
      flashMessage("Product Added", "Check Out Now");
      const result = await fetchAddToCart(u_id).then((result) => result);
      state.basket.itemBasket = result;
      return [...state.basket.itemBasket];
    } else {
      console.log("update");
      flashMessage("Cart Updated", "Check Out Now");

      await updateAddToCart({
        _id: state.basket.itemBasket[index]._id,
        count: sendData.count,
      }).then(() => {});
      state.basket.itemBasket[index].count = sendData.count;
      return [...state.basket.itemBasket];
    }
    return state.basket.itemBasket;
  }
);

const initialState = {
  itemBasket: [],
  userCurrentLocation: {
    latitude: "",
    longitude: "",
  },
  totalAmount: 0,
  userAdress: {
    adress: "",
    city: "",
    pinCode: "",
    phoneNumber: "",
    state: "",
  },
  loading: false,
};

export const backetSlicer = createSlice({
  name: "basket",
  initialState,
  reducers: {
    setUserCurrentLocation: (state, actions) => {
      state.userCurrentLocation = actions.payload;
    },
    setAddToCart: (state, action) => {
      return state;
    },
    setAllCart: (state, action) => {
      state.itemBasket = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.itemBasket = action.payload;
      state.loading = false;
      return state;
      state.loading = false;
    });
    builder.addCase(fetchUsers.rejected, (state) => {
      state.loading = false;
    });
  },
});

// Action creators are generated for each case reducer function
export const { setUserCurrentLocation, setAllCart, setAddToCart } =
  backetSlicer.actions;
export const selectTotalPrice = (state) =>
  state.basket.itemBasket.reduce(
    (total, item) => (total += item.menus.mprice * item.count),
    0
  );
export const selectUserCurrentLocation = (state) =>
  state.basket.userCurrentLocation;
export const selectAllCart = (state) => state.basket.itemBasket;
export const selectSingleAddToCart = (state, _id) =>
  state.basket.itemBasket.filter((values) => values.p_id === _id);
export const selectLoader = (state) => state.basket.loading;
export default backetSlicer.reducer;
