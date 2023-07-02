import {
  Center,
  Container,
  Flex,
  Grid,
  GridItem,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import step1 from "../../assets/Step1.png";
import step2 from "../../assets/Step2.png";
import step3 from "../../assets/Step3.png";
import HowItCard from "../HowItCard";
const HowItWork = () => {
  const facts = [
    {
      id: 0,
      title: "Adapt your menu items",
      para: "Easily adapt your menu using the webflow CMS and allow customers to browse your items.",
      img: step1,
    },
    {
      id: 1,
      title: "Accept online orders & takeout",
      para: "Let your customers order and pay via the powerful ecommerce system, or simple let them call your store.",
      img: step2,
    },
    {
      id: 3,
      title: "Manage delivery or takeout",
      para: "Manage your own logistics and take orders simply through the ecommerce system.",
      img: step3,
    },
  ];
  return (
    <Container maxW="1200px" py="20">
      <Center>
        <Text color="primary.500" fontSize="5xl" fontWeight="bold">
          How its works.
        </Text>
      </Center>
      <Grid templateColumns={"repeat(12,1fr)"} gap="16" my="16">
        {facts.map((card) => {
          return (
            <>
              <HowItCard
                key={card.id}
                title={card.title}
                para={card.para}
                img={card.img}
              />
            </>
          );
        })}
      </Grid>
    </Container>
  );
};

export default HowItWork;
