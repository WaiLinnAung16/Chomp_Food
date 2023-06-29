import {
  Button,
  Container,
  Flex,
  Grid,
  GridItem,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

import React from "react";
import heroImg from "../../assets/Hero-img.png";
import trustpilot from "../../assets/trustpilot-logo.svg";
const Hero = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url(https://assets.website-files.com/5e865e09d8efa3310676b585/5e865e09d8efa3306c76b60a_BG%20Shape.svg)",
        backgroundPosition: "100% 0",
        backgroundRepeat: "no-repeat",
        backgroundSize: "auto",
      }}
    >
      <Container maxW="1200px">
        <Grid templateColumns={"repeat(12, 1fr)"} py="100px" gap="10">
          <GridItem colSpan={6}>
            <Flex direction="column" align="start" gap="14">
              <Stack direction={"column"} spacing="5">
                <Text fontSize="6xl" fontWeight="bold" lineHeight="60px">
                  Beautiful food & takeaway,{" "}
                  <span className=" text-primary">delivered</span> to your door.
                </Text>
                <Text fontSize="lg" className=" text-para">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500.
                </Text>
              </Stack>
              <Stack direction="column" spacing="5" align="start">
                <Button
                  colorScheme="primary"
                  size="lg"
                  style={{
                    backgroundImage:
                      "url(https://assets.website-files.com/5e865e09d8efa3310676b585/5e865e09d8efa3345876b5c4_Button%20Wave.svg)",
                  }}
                >
                  Place an Order
                </Button>
                <div>
                  <img src={trustpilot} alt="" />
                  <Text fontSize="md" mt="2.5">
                    <span className=" text-primary">4.8 out of 5 </span>based on
                    2000+ reviews
                  </Text>
                </div>
              </Stack>
            </Flex>
          </GridItem>
          <GridItem colStart={7} colEnd={13}>
            <Image src={heroImg}></Image>
          </GridItem>
        </Grid>
      </Container>
    </div>
  );
};

export default Hero;
