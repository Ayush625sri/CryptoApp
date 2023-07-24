import { Alert, AlertIcon } from "@chakra-ui/react";
import React from "react";

const ErrorComponent = (props) => {
  return (
    <Alert
      status="error"
      position={"fixed"}
      bottom={"4"}
      left={"56%"}
      transform={"translateX(-50%)"}
      w={"container.lg"}
    >
      <AlertIcon />
      {props.message}
    </Alert>
  );
};

export default ErrorComponent;
