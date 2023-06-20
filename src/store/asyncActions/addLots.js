import axios from "axios";
import { addLots } from "../action";

export const fetchLots = ({ id }) => {
  const token = localStorage.getItem("token");

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return async function (dispatch) {
    await axios
      .get("https://localhost:7114/api/parkings/lots/" + id + "/park", config)
      .then((response) => {
        dispatch(addLots(response.data));
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
