import React from "react";
import {
  Page,
  Navbar,
  Fab,
  FabButton,
  FabButtons,
  List,
  Col,
  Toolbar,
  ListInput,
  Card,
  Link,
  ListItem,
  Toggle,
  BlockTitle,
  Row,
  Button,
  Range,
  Block,
  Icon,
  Menu,
} from "framework7-react";
const ColoredLine = ({ color }) => (
  <hr
    id="hrLine"
    style={{
      display: "flex",
      float: "left",
      color: "black",
      backgroundColor: "rgb(57, 57, 57)",
      height: 1,
      borderRadius: 10,
      width: "90%",
      border: "none",
      // marginTop: "100px",
      // marginBottom: "60px",
      // marginRight: "5.5%",
    }}
  />
);
const ContactPage = () => (
  <Page className="">
    {/* <Card className="center"> */}
    {/* <Toolbar> */}
    <Card className="center" style={{ marginLeft: "30%", marginRight: "30%" }}>
      {/* <Row style={{ height: "10px" }}>
        <p>Check me out on LinkedIn, Github, or send me an email.</p>
      </Row> */}
    </Card>

    {/* </Toolbar> */}
    {/* </Card> */}
    <Card>
      <Row className="center">
        <Menu
          className="center"
          style={{
            display: "flex",
            float: "right",
            // padding: "20px",
            // paddingRight: "0px",
            // paddingLeft: "10px",
            paddingTop: "30px",
          }}
        >
          <Link
            iconAurora="f7:logo_linkedin"
            iconSize="70"
            className="size-50 center"
            style={{ color: "white", marginRight: "50px" }}
          ></Link>

          <Link
            iconAurora="f7:logo_github"
            iconSize="70"
            className="size-50"
            style={{ color: "white", marginRight: "50px" }}
          ></Link>
          <Link
            href="mailto:beaubarrier@gmail.com"
            external
            iconAurora="f7:envelope"
            iconSize="70"
            className="size-50"
            style={{ color: "white", marginRight: "0px" }}
          ></Link>
        </Menu>
      </Row>
      <Block>
        {/* <Row
          className="center"
          style={{ dispay: "inline-block", justifyContent: "space-between" }}
        > */}

        {/* </Row> */}
      </Block>
      <Block>
        <BlockTitle>
          <div className="center">
            <p
              style={{
                paddingTop: "20px",
                paddingBottom: "20px",
                fontSize: "14px",
              }}
            >
              Check me out on LinkedIn and Github<br></br>Or send me a message.
              I'd love to hear from you{" "}
            </p>
          </div>
          <div>
            <ColoredLine className="center" />
          </div>
        </BlockTitle>

        <List form formStoreData id="demo-form">
          <ListInput
            label="Name"
            name="name"
            type="text"
            clearButton
            placeholder="Your name"
          />
          <ListInput
            label="Title"
            name="title"
            type="text"
            clearButton
            placeholder="Your title"
          />
          <ListInput
            label="E-mail"
            name="email"
            type="email"
            clearButton
            placeholder="Your e-mail"
          />
          <ListInput
            label="URL"
            name="url"
            type="url"
            clearButton
            placeholder="Your website"
          />
          <ListInput
            label="Phone"
            name="phone"
            type="tel"
            clearButton
            placeholder="Your phone number"
          />

          <ListInput
            label="Message"
            type="textarea"
            name="bio"
            resizable
            placeholder="Your message"
          />
        </List>
      </Block>
    </Card>
  </Page>
);

export default ContactPage;
