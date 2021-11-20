import React from "react";
import { getDevice } from "framework7";
import {
  Page,
  Navbar,
  NavLeft,
  NavTitle,
  NavTitleLarge,
  NavRight,
  Link,
  Toolbar,
  Card,
  Block,
  BlockTitle,
  List,
  ListItem,
  Row,
  Col,
  Button,
  Menu,
  MenuItem,
} from "framework7-react";
const device = getDevice();
const desktopHome = () => {
  if (device.desktop) {
    return (
      <Page className="home">
        <Block>
          <BlockTitle>Welcome!</BlockTitle>
          <Card>Thanks for visiting my portfolio!</Card>
        </Block>
      </Page>
    );
  }
};
const iosHome = () => {
  if (device.ios) {
    return (
      <Block>
        <Card>IOS</Card>
      </Block>
    );
  }
};

const HomePage = () => (
  <Page className="home">
    {iosHome()} {desktopHome()}
  </Page>
);

export default HomePage;
