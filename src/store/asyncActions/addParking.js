import axios from "axios";
import { addManyParking } from "../action";

export const fetchParking = () => {
  const token = localStorage.getItem("token");

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return async function (dispatch) {
    await axios
      .get("https://localhost:7114/api/parkings/parks/all", config)
      .then((response) => {
        dispatch(addManyParking(response.data));
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
