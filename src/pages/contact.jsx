import React from "react";
import {
  Page,
  Navbar,
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
} from "framework7-react";

const SettingsPage = () => (
  <Page name="contact">
    {/* <Card className="center"> */}
    {/* <Toolbar> */}
    <Card className="center" style={{ width: "52%" }}>
      <Toolbar
        labels
        style={{ width: "50%", height: "130px" }}
        className="center"
      >
        <Link
          iconAurora="f7:logo_linkedin"
          iconSize="70"
          className="size-50"
          style={{ color: "white" }}
          text="LinkedIn"
        ></Link>
        <Link
          iconAurora="f7:logo_github"
          iconSize="70"
          className="size-50"
          style={{ color: "white" }}
          text="Github"
        ></Link>
        <Link
          iconAurora="f7:envelope"
          iconSize="70"
          className="size-50"
          style={{ color: "white" }}
          text="Email"
        ></Link>
      </Toolbar>
    </Card>

    {/* </Toolbar> */}
    {/* </Card> */}
    <Card>
      <Block>
        <BlockTitle>Send me a message</BlockTitle>
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

export default SettingsPage;
