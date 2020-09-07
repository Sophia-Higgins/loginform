import React, { useEffect, useState } from "react";
import { API_BASE_URL } from "../../constants/apiConstants";
import axios from "axios";

const Application = () => {
  const [message, setMessage] = useState("");

  const payload = {
    username: "Sophia",
  };

  useEffect(() => {
    axios.post(API_BASE_URL + "/greeting", payload).then((response) => {
      setMessage(response.data);
    });
  });

  return (
    <div className="body">
      <br />
      <h1 className="display-1 text-center text-primary">{message}</h1>
    </div>
  );
};

export default Application;
