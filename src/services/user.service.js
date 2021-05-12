import axios from "axios";

const API_URL = "http://e-bus-ticket.herokuapp.com/api/";

const getProvincelist = async () => {
  return await axios.get(API_URL + "getlistprovinces");
};

const searchTrip = async (start_point, end_point, start_time) => {
  return await axios.post(API_URL + "searchtrip", {
    start_point,
    end_point,
    start_time,
  });
};

export default {
  getProvincelist,
  searchTrip
};
