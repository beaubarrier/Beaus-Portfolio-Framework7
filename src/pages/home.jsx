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
const ColoredLine = ({ color }) => (
  <hr
    id="hrLine"
    style={{
      color: "black",
      backgroundColor: "rgb(57, 57, 57)",
      height: 1,
      borderRadius: 10,
      width: "90%",
      border: "none",
      marginTop: "100px",
      marginBottom: "60px",
      marginRight: "5.5%",
    }}
  />
);
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
                    />
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
                </Row>{" "}
                <ColoredLine />
                <Row>
                  <Col>
                    {/* <BlockTitle>My Skills</BlockTitle> */}
                    <div className="secTitle">
                      <h2>My Skills</h2>
                    </div>
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
                        valueTextColor="#b1297f"
                        borderColor="#b1297f"
                      />
                      <Gauge
                        type="circle"
                        value={0.5}
                        size={100}
                        valueText="React"
                        valueFontSize="20"
                        valueTextColor="#094d92"
                        borderColor="#094d92"
                      />
                      33
                      <Gauge
                        type="circle"
                        value={0.3}
                        size={100}
                        valueText="MySQL"
                        valueFontSize="20"
                        valueTextColor="#16db93"
                        borderColor="#16db93"
                      />
                      <Gauge
                        type="circle"
                        value={0.4}
                        size={100}
                        valueText="NoSQL"
                        valueFontSize="20"
                        valueTextColor="#109493"
                        borderColor="#109493"
                      />
                    </Block>
                  </Col>
                </Row>
                <ColoredLine />
                <Row>
                  <Col width="20"> </Col>
                  <Col id="resumeSec" width="60">
                    <Button className="resBtn" small>
                      View Resume
                    </Button>
                    <Button className="resBtn" small>
                      Download Resume
                    </Button>
                  </Col>
                  <Col width="20"> </Col>
                </Row>
              </CardContent>
            </Card>
          </Block>
          <Block>
            <p>Created by Beau Barrier in 2021.</p>{" "}
          </Block>
          <Block> a</Block>
          <Block> a</Block>
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
