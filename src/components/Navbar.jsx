import {
  Box,
  Center,
  Container,
  Flex,
  IconButton,
  Spacer,
  Text,
} from "@chakra-ui/react";
import React from "react";
import logo from "../assets/logo.svg";
import { Link, NavLink } from "react-router-dom";
import { PiShoppingCart } from "react-icons/pi";
const Navbar = () => {
  return (
    <>
      <Box
        py="3.5"
        bg="primary.500"
        style={{
          backgroundImage:
            "url(https://assets.website-files.com/5e865e09d8efa3310676b585/5e865e09d8efa36d5976b5d3_Banner%20Wave.svg)",
        }}
      >
        <Center>
          <Text fontSize="md" color="whiteAlpha.800">
            We're open and available for takeaway & delivery.{" "}
            <Link to={"/order"} className=" text-white">
              Order Now
            </Link>
          </Text>
        </Center>
      </Box>
      <Box
        py="5"
        position="sticky"
        top="0"
        bg="#ffffff98"
        backdropFilter="blur(10px)"
        zIndex={10}
      >
        <Container maxW="1200px">
          <Flex align="center" justify="space-between">
            <Box>
              <NavLink to={"/"}>
                {" "}
                <img src={logo} alt="logo" className=" h-14" />
              </NavLink>
            </Box>
            <Box>
              <Flex justify="space-between" align="center" gap="8">
                <NavLink to={"/"}>
                  <Text fontSize="md">Home</Text>
                </NavLink>
                <NavLink to={"/order"}>
                  <Text fontSize="md">Order</Text>
                </NavLink>
                <NavLink to={"/company"}>
                  <Text fontSize="md">Company</Text>
                </NavLink>
                <NavLink to={"/faq"}>
                  <Text fontSize="md">FAQ</Text>
                </NavLink>
                <NavLink to={"/contact"}>
                  <Text fontSize="md">Contact</Text>
                </NavLink>
                <IconButton
                  colorScheme="primary"
                  size="lg"
                  aria-label="Search database"
                  icon={<PiShoppingCart className="text-white text-xl" />}
                  style={{
                    backgroundImage:
                      "url(https://assets.website-files.com/5e865e09d8efa3310676b585/5e865e09d8efa3345876b5c4_Button%20Wave.svg)",
                  }}
                />
              </Flex>
            </Box>
          </Flex>
        </Container>
      </Box>
    </>
  );
};

export default Navbar;
