import * as React from "react";
import styled from "styled-components";

const AlertContainer = styled.div`
  background-color: green;
  color: #fff;
  padding: 1em;
`;

const Alert: React.FC<{ message: string }> = ({ message }) => {
  return (
    // <div style={{ backgroundColor: "green", color: "white", padding: "1em" }}>
    //   {message}
    // </div>
    <AlertContainer>{message}</AlertContainer>
  );
};

export default Alert;
