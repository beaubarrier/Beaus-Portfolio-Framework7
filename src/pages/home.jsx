import React from "react";
import { getDevice } from "framework7";
import {
  Page,
  PageContent,
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
import bioPic from "../assets/bioPic.png";

const device = getDevice();
const desktopHome = () => {
  if (device.desktop) {
    return (
      <Page className="home">
        <PageContent>
          <Block>
            <BlockTitle>Welcome!</BlockTitle>
            <Row>
              <Col>
                Welcome Paragraph. Blahblah blah blahblah balh blah blah.
                Blahblah blah blahblah balh blah blah. Blahblah blah blahblah
                balh blah blah. Blahblah blah blahblah balh blah blah. Blahblah
                blah blahblah balh blah blah. Blahblah blah blahblah balh blah
                blah. Blahblah blah blahblah balh blah blah. Blahblah blah
                blahblah balh blah blah. Blahblah blah blahblah balh blah blah.
                Blahblah blah blahblah balh blah blah. Blahblah blah blahblah
                balh blah blah. Blahblah blah blahblah balh blah blah. Blahblah
                blah blahblah balh blah blah. Blahblah blah blahblah balh blah
                blah.
              </Col>
              <Col>
                <img
                  src={bioPic}
                  id="bioPic"
                  alt="Picture of me and my daughter."
                />
              </Col>
            </Row>
          </Block>

          <Block>
            <BlockTitle>My Story</BlockTitle>
            <Row>
              Blahblah blah blahblah balh blah blah. Blahblah blah blahblah balh
              blah blah. Blahblah blah blahblah balh blah blah. Blahblah blah
              blahblah balh blah blah. Blahblah blah blahblah balh blah blah.
              Blahblah blah blahblah balh blah blah. Blahblah blah blahblah balh
              blah blah.
            </Row>
          </Block>

          <Block>
            <Row>
              <Button small>Download Resume</Button>
            </Row>
          </Block>
        </PageContent>
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
