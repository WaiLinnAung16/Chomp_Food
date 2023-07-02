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
import productImg from "../../assets/products.png";
import yum from "../../assets/YumYum.png";
const Products = () => {
  return (
    <div
      className=" my-20 h-[800px] flex justify-center items-center"
      style={{
        backgroundImage:
          "url(https://assets.website-files.com/5e865e09d8efa3310676b585/5e865e09d8efa3b4c076b5ee_BG%20Shape%20Content.svg)",
        backgroundPosition: "50% 50%",
        backgroundSize: "96% 90%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container maxW="1200px">
        <Grid templateColumns={"repeat(12,1fr)"} alignItems="center" gap="10">
          <GridItem
            colSpan={6}
            style={{
              backgroundImage: `url(${yum})`,
              backgroundPosition: "50% 50%",
              backgroundSize: "80%",
              backgroundRepeat: "no-repeat",
            }}
          >
            <Flex direction="column" gap="14" align="start">
              <Stack spacing="5" direction="column">
                <Text
                  fontSize="5xl"
                  fontWeight="bold"
                  lineHeight="55px"
                  color="primary.500"
                >
                  The home of fresh products
                </Text>
                <Text>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500.
                </Text>
              </Stack>
              <Button
                colorScheme="primary"
                size="lg"
                style={{
                  backgroundImage:
                    "url(https://assets.website-files.com/5e865e09d8efa3310676b585/5e865e09d8efa3345876b5c4_Button%20Wave.svg)",
                }}
              >
                Learn about us
              </Button>
            </Flex>
          </GridItem>
          <GridItem colSpan={6}>
            <Image src={productImg} height={500}></Image>
          </GridItem>
        </Grid>
      </Container>
    </div>
  );
};

export default Products;
