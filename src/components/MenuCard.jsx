import {
  Button,
  Card,
  CardBody,
  Flex,
  GridItem,
  Heading,
  Image,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

const MenuCard = () => {
  return (
    <GridItem colSpan={6}>
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
        _hover={{ border: "1px solid #35B8BE" }}
        transition={"all .5s"}
      >
        <Image
          objectFit="cover"
          maxW={{ base: "100%", sm: "150px" }}
          maxH={{ base: "100%", sm: "150px" }}
          m="5"
          borderRadius="md"
          src="https://assets.website-files.com/5e865e09d8efa3d64d76b59d/5e865e09d8efa3676276b5cd_Burger%2003.png"
          alt="Caffe Latte"
        />

        <Stack>
          <CardBody>
            <Flex justify="space-between" align="center">
              <Text fontSize="lg" fontWeight="bold">
                Burger Dreams
              </Text>
              <Text color="primary.500">$ 9.20 USD</Text>
            </Flex>

            <Text py="3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Text>

            <Stack direction="row" spacing="3" mt="3">
              <NumberInput defaultValue={1} min={1} max={99} w="25%">
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              <Button colorScheme="primary">Add to Cart</Button>
            </Stack>
          </CardBody>
        </Stack>
      </Card>
    </GridItem>
  );
};

export default MenuCard;
