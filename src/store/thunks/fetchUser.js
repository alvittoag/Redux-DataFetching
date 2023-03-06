import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchUSers = createAsyncThunk("users/fetch", async () => {
  const response = await axios.get("http://localhost:3005/users");

  // Dev ONLY!!!
  await pause(2000);

  return response.data;
});

// Dev ONLY!!!
const pause = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
};

export { fetchUSers };
