import React from "react";
import { Outlet } from "react-router";
import styled from "styled-components";

const RootLayout = () => {
  return (
    <Div>
      <div>
        <Outlet />
      </div>
    </Div>
  );
};


const Div = styled.div`
  
`;




export default RootLayout;
