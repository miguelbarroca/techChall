import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

function PhoneDetails() {
  const [phone, setPhone] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { phoneId } = useParams();

  const getPhone = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5005/api/phones/details/${phoneId}`
      );
      setPhone(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log("Error fetching phone details: ", phone);
    }
  };

  useEffect(() => {
    getPhone();
  }, []);

  return isLoading ? (
    <Box sx={{ display: "flex" }}>
      <CircularProgress />
    </Box>
  ) : (
    <div>
      <div>
        <h1
          style={{ display: "flex", justifyContent: "center", color: "black" }}
        >
          Phone Details:
        </h1>
      </div>
      {phone.map((phone) => {
        return (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <ul
              style={{
                color: "black",
                listStyleType: "none",
              }}
            >
              <img style={{ width: "200px" }} src={`/${phone.imageFileName}`} />
              <li>Name: {phone.name}</li>
              <li>Manufacturer: {phone.manufacturer}</li>
              <li>Description: {phone.description}</li>
              <li>Color: {phone.color}</li>
              <li>Price: {phone.price}</li>
              <li>Screen: {phone.screen}</li>
              <li>Processor: {phone.processor}</li>
              <li>Ram: {phone.ram}GB</li>
              <Link to={"/"}>
                <button type="button">Back</button>
              </Link>
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default PhoneDetails;
