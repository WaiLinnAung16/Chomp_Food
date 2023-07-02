import { Box, Container, Stack, Text } from "@chakra-ui/react";
import React from "react";
import Menu from "../Menu";

const OurMenu = () => {
  return (
    <Box
      height="800px"
      style={{
        backgroundImage:
          "url(https://assets.website-files.com/5e865e09d8efa3310676b585/5e865e09d8efa3b4c076b5ee_BG%20Shape%20Content.svg)",
        backgroundPosition: "50% 50%",
        backgroundSize: "96% 90%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container maxW="1200px" py="20">
        <Stack justify="center" align="center">
          <Text color="primary.500" fontSize="5xl" fontWeight="bold">
            Browser our menu
          </Text>

          <Text fontSize="xl" textAlign="center" w="50%" className=" text-para">
            Use our menu to place an order online, or{" "}
            <span className=" underline text-primary">phone</span> our store to
            place a pickup order. Fast and fresh food.
          </Text>
        </Stack>

        <Menu />
      </Container>
    </Box>
  );
};

export default OurMenu;
