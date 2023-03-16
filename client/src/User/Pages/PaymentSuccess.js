import { Box, VStack, Heading, Text, Button } from "@chakra-ui/react";
import React from "react";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";

const PaymentSuccess = () => {
  const seachQuery = useSearchParams()[0];
  const referenceNum = seachQuery.get("razorpay_payment_id");
  const style = {
    color: "white",
    textDecoration: "none",
  };

  return (
    <Box>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
        crossorigin="anonymous"
      ></link>
      <VStack h="100vh" justifyContent={"center"}>
        <Heading textTranform={"uppercase"}>Order Sucessfull</Heading>
        <Text>Thank you for your purchase</Text>
        <Text>Reference No. {referenceNum}</Text>
        <button type="button" class="btn btn-warning">
          <Link style={style} to="/Home">
            Go to Dashboard
          </Link>
        </button>
      </VStack>
    </Box>
  );
};

export default PaymentSuccess;
