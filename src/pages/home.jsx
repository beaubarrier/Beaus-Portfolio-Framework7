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
  CardContent,
  Block,
  BlockTitle,
  List,
  ListItem,
  Row,
  Col,
  Button,
  Gauge,
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
            <Card>
              <CardContent>
                <Row>
                  <Col>
                    <BlockTitle>The dev we deserve...</BlockTitle>
                    <img
                      src={bioPic}
                      id="bioPic"
                      alt="Picture of my daughter and I at the"
                    />{" "}
                    MERN Stack Web Dev
                    <p id="welcomeP">
                      ... it's what I do. I am a web developer certified in
                      creating websites using the MERN stack.Blahblah blah
                      blahblah balh blah blah. Blahblah blah blahblah balh blah
                      blah. Blahblah blah blahblah balh blah blah. Blahblah blah
                      blahblah balh blah blah. Blahblah blah blahblah balh blah
                      blah. Blahblah blah blahblah balh blah blah. Blahblah blah
                      blahblah balh blah blah. Blahblah blah blahblah balh blah
                      blah. Blahblah blah blahblah balh blah blah. Blahblah blah
                      blahblah balh blah blah. Blahblah blah blahblah balh blah
                      blah. Blahblah blah blahblah balh blah blah. Blahblah blah
                      blahblah balh blah blah. Blahblah blah blahblah balh blah
                      blah.
                    </p>
                  </Col>
                </Row>
              </CardContent>
            </Card>
          </Block>

          <Block>
            <Card>
              <CardContent>
                <Row>
                  <Col>
                    <BlockTitle>My Skills</BlockTitle>
                    <Block id="skillGauge">
                      {" "}
                      <Gauge
                        type="circle"
                        value={0.5}
                        size={100}
                        valueText="JS"
                        valueFontSize="20"
                        valueTextColor="#179100"
                        borderColor="#179100"
                      />
                      <Gauge
                        type="circle"
                        value={0.6}
                        size={100}
                        valueText="CSS"
                        valueFontSize="20"
                        valueTextColor="#9b2bc7"
                        borderColor="#9b2bc7"
                      />
                      <Gauge
                        type="circle"
                        value={0.7}
                        size={100}
                        valueText="HTML"
                        valueFontSize="20"
                        valueTextColor="#8F0018"
                        borderColor="#8F0018"
                      />
                      <Gauge
                        type="circle"
                        value={0.5}
                        size={100}
                        valueText="React"
                        valueFontSize="20"
                        valueTextColor="#f44336"
                        borderColor="#f44336"
                      />
                      <Gauge
                        type="circle"
                        value={0.3}
                        size={100}
                        valueText="MySQL"
                        valueFontSize="20"
                        valueTextColor="#f44336"
                        borderColor="#f44336"
                      />
                      <Gauge
                        type="circle"
                        value={0.4}
                        size={100}
                        valueText="NoSQL"
                        valueFontSize="20"
                        valueTextColor="#f44336"
                        borderColor="#f44336"
                      />
                    </Block>

                    {/* Welcome Paragraph. Blahblah blah blahblah balh blah blah.
                    Blahblah blah blahblah balh blah blah. Blahblah blah
                    blahblah balh blah blah. Blahblah blah blahblah balh blah
                    blah. Blahblah blah blahblah balh blah blah. Blahblah blah
                    blahblah balh blah blah. Blahblah blah blahblah balh blah
                    blah. Blahblah blah blahblah balh blah blah. Blahblah blah
                    blahblah balh blah blah. Blahblah blah blahblah balh blah
                    blah. Blahblah blah blahblah balh blah blah. Blahblah blah
                    blahblah balh blah blah. Blahblah blah blahblah balh blah
                    blah. Blahblah blah blahblah balh blah blah. */}
                  </Col>
                </Row>
              </CardContent>
            </Card>
          </Block>
          <Block>
            <Row>
              <Card>
                <Button small>Download Resume</Button>
              </Card>
            </Row>
          </Block>
          <Block>sdfasdfasdfasdfasdfasdfas</Block>
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
