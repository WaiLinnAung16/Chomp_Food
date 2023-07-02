import { Flex, GridItem, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";

const HowItCard = ({ img, title, para }) => {
  console.log(img);
  return (
    <>
      <GridItem colSpan={4}>
        <Flex direction="column" align="center" gap="10">
          <Image src={img} height={250}></Image>
          <Stack textAlign="center" spacing="5">
            <Text fontSize="xl" fontWeight="extrabold">
              {title}
            </Text>
            <Text fontSize="lg">{para}</Text>
          </Stack>
        </Flex>
      </GridItem>
    </>
  );
};

export default HowItCard;
