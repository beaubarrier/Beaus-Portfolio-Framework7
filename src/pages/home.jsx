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
                    <p id="welcomeP" className="">
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
                        valueTextColor="#FF5500"
                        borderColor="#FF5500"
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
                        valueTextColor="#A73C42"
                        borderColor="#A73C42"
                      />
                      <Gauge
                        type="circle"
                        value={0.5}
                        size={100}
                        valueText="React"
                        valueFontSize="20"
                        valueTextColor="#1481BA"
                        borderColor="#1481BA"
                      />
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
                        valueTextColor="#A99E00"
                        borderColor="#DFD000"
                      />
                      <br></br>
                    </Block>
                    <Block>
                      {" "}
                      <p className="center">
                        After I completed U.C. Davis's full stack web
                        certification course, I have been tirelessly working on
                        my skills as a developer. With every new project I
                        exponentialy expand my skills. I love web development,
                        and it loves me back.
                      </p>
                    </Block>
                  </Col>
                </Row>
                <ColoredLine />
                <Row id="resumeSec">
                  {/* <Col width="20"> </Col>
                  <Col id="resumeSec" width="60"> */}

                  <Button className="resBtn" small>
                    View Resume
                  </Button>
                  <Button className="resBtn" small>
                    Download Resume
                  </Button>

                  {/* </Col>
                  <Col width="20"> </Col> */}
                </Row>
              </CardContent>
            </Card>
          </Block>
          <Block>
            <p className="center" style={{ fontSize: "9pt" }}>
              Created with Framework7+React by Beau Barrier in 2021.
            </p>{" "}
          </Block>
          <br></br> <br></br>
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
