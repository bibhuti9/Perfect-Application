import { BACKEND_URI, u_id } from "../../config";
import uuid from "react-native-uuid";
import { useDispatch } from "react-redux";
import axios from "react-native-axios";
export function fetchMenus(stringFyObject) {
  return fetch(
    `${BACKEND_URI}/restuarent/fetchAllMenusByCategoryIdOrProductId`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(stringFyObject),
    }
  )
    .then((response) => response.json())
    .then((responseData) => {
      return responseData.Data;
    });
}

export async function deleteAddToCart(_id) {
  return axios
    .post(`${BACKEND_URI}/restuarent/deleteAddToCart`, { _id: _id })
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
}

export async function addToCart(addData) {
  return axios
    .post(`${BACKEND_URI}/restuarent/createAddToCart`, addData)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
}

export function fetchAddToCart(u_id) {
  return fetch(`${BACKEND_URI}/restuarent/fetchDetailAddToCartByUserId`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ u_id }),
  })
    .then((response) => response.json())
    .then((responseData) => {
      return responseData.Data;
    });
}
export function updateAddToCart(stringFyObject) {
  return fetch(`${BACKEND_URI}/restuarent/updateAddToCart`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(stringFyObject),
  })
    .then((response) => response.json())
    .then((responseData) => {
      return responseData.Data;
    });
}

export function createOrder(item, address, userCurrentLocation) {
  userCurrentLocation.latitude = 21.167853;
  userCurrentLocation.longitude = 72.830277;

  return fetch(`${BACKEND_URI}/restuarent/createOrder`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      item: item,
      u_id: u_id,
      address: "259,hariom nagar bamroliroad pandesara surat",
      userCurrentLocation,
      paymentType: "Cash",
      orderStatus: [{ currentStatus: "Order Confirmed", date: "23 Nov 2022" }],
    }),
  })
    .then((response) => response.json())
    .then((responseData) => {
      return responseData;
    });
}

export const fetchOrders = ({ u_id }) => {
  return fetch(`${BACKEND_URI}/restuarent/fetchOrder`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ u_id }),
  })
    .then((response) => response.json())
    .then((responseData) => {
      return responseData;
    });
};

export const updateOrderStatus = (orderStatus, _id, exceptedData) => {
  const updatedObject = {
    _id: "636631392866500d4e97e34b",
    orderStatus: "Shipped",
    exceptedData: "25 Nov 2022",
  };
  return fetch(`${BACKEND_URI}/restuarent/updateOrderStatus`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedObject),
  })
    .then((response) => response.json())
    .then((responseData) => {
      return responseData;
    });
};
