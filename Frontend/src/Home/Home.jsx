import React, { useContext, useEffect } from "react";

import { Container } from "react-bootstrap";
import { Slide } from "./Slide";
import { NewsProduct } from "./NewsProduct";
import { HotProduct } from "./HotProduct";
import { AuthContext } from "../API/Auth";

export const Home = () => {
  const currentUser = useContext(AuthContext);

  useEffect(() => {
    
  }, [currentUser]);

  return (
    <div className="">
      <div style={{ display: "block", width: "100%" }}>
        <Slide key='slide' />
      </div>

      <NewsProduct key='newProduct'/>
      <HotProduct key='hotProduct'/>
    </div>
  );
};
