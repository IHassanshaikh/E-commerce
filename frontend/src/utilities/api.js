import axios from "axios";

const params = {
  headers: {
    Authorization: "Bearer " +
      "0bed31693a46652ab67614955f7133faca44eedab52c476510e08823797fe9114d3fecc44a091466a5db1efa111588b69037371aa51e4f637c8f4ec4d3851abf4f7007258053677223e9b27aab281a91618926018a0577bee89a42b8f91b60ce9ac4c3d2582bef2c748ac291d837b92f1e3ed658e485d9a67fdab11fc63c52e6"
  }
};

export const FetchData = async (url) => {
  try {
    const response = await axios.get("http://localhost:1337" + url, params);
    console.log('FetchData Response:', response.data);
    return response.data;
  } catch (error) {
    console.error('FetchData Error:', error); // Improved error logging
    throw error;
  }

};
