import {
  Button,
  Center,
  Grid,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import React from "react";
import MenuCard from "./MenuCard";

const Menu = () => {
  return (
    <Center mt="10">
      <Tabs variant="unstyled">
        <Center>
          <TabList gap="10">
            <Tab
              _selected={{
                bg: "primary.500",
                color: "white",
                borderRadius: "5px",
                backgroundImage:
                  "url(https://assets.website-files.com/5e865e09d8efa3310676b585/5e865e09d8efa3345876b5c4_Button%20Wave.svg)",
              }}
              style={{
                width: "150px",
                border: "1px solid #54628550",
                borderRadius: "5px",
              }}
            >
              Burgers
            </Tab>
            <Tab
              _selected={{
                bg: "primary.500",
                color: "white",
                borderRadius: "5px",
                backgroundImage:
                  "url(https://assets.website-files.com/5e865e09d8efa3310676b585/5e865e09d8efa3345876b5c4_Button%20Wave.svg)",
              }}
              style={{
                width: "150px",
                border: "1px solid #54628550",
                borderRadius: "5px",
              }}
            >
              Sides
            </Tab>
            <Tab
              _selected={{
                bg: "primary.500",
                color: "white",
                borderRadius: "5px",
                backgroundImage:
                  "url(https://assets.website-files.com/5e865e09d8efa3310676b585/5e865e09d8efa3345876b5c4_Button%20Wave.svg)",
              }}
              style={{
                width: "150px",
                border: "1px solid #54628550",
                borderRadius: "5px",
              }}
            >
              Drinks
            </Tab>
          </TabList>
        </Center>
        <TabPanels>
          <TabPanel>
            <Grid templateColumns="repeat(12, 1fr)" gap="5">
              <MenuCard />
              <MenuCard />
              <MenuCard />
              <MenuCard />
            </Grid>
          </TabPanel>
          <TabPanel>
            <Grid templateColumns="repeat(12, 1fr)" gap="5">
              <MenuCard />
              <MenuCard />
              <MenuCard />
            </Grid>
          </TabPanel>
          <TabPanel>
            <Grid templateColumns="repeat(12, 1fr)" gap="5">
              <MenuCard />
              <MenuCard />
            </Grid>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Center>
  );
};

export default Menu;
