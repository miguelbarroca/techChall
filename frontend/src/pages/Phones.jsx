import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

function phones() {
  const [phones, setPhones] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const getPhones = async () => {
    try {
      const response = await axios.get("http://localhost:5005/api/phones");
      setPhones(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log("Error fetching phones:", error);
    }
  };

  useEffect(() => {
    getPhones();
  }, []);
  return isLoading ? (
    <Box sx={{ display: "flex" }}>
      <CircularProgress />
    </Box>
  ) : (
    <>
      <div
        style={{ display: "flex", justifyContent: "center", color: "black" }}
      >
        <h1>List of all the phones:</h1>
      </div>

      {phones.map((phone) => {
        return (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <ul style={{ listStyle: "none" }}>
              <li>Name: {phone.name}</li>
              <img style={{ width: "200px" }} src={phone.imageFileName} />
              <li>
                <Link to={`/phones/details/${phone.id}`}>
                  <button type="button">Details</button>
                </Link>
              </li>
            </ul>
          </div>
        );
      })}
    </>
  );
}

export default phones;
