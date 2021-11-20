import React, { useState, useEffect } from "react";
import { getDevice } from "framework7";
import {
  f7,
  f7ready,
  App,
  Panel,
  Views,
  View,
  Popup,
  Page,
  Navbar,
  Toolbar,
  NavRight,
  Link,
  Block,
  BlockTitle,
  LoginScreen,
  LoginScreenTitle,
  List,
  ListItem,
  ListInput,
  ListButton,
  BlockFooter,
  Menu,
  MenuItem,
  Button,
} from "framework7-react";
import nameLogo from "../assets/nameLogoGlass-25.png";
import routes from "../js/routes";
import store from "../js/store";
const device = getDevice();

const MyApp = () => {
  // Login screen demo data
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Framework7 Parameters
  const f7params = {
    name: "beausportfolio", // App name
    theme: "aurora", // Changed to Aurora theme for desktop.-BB

    // App store
    store: store,
    // App routes
    routes: routes,
    // Register service worker (only on production build)
    serviceWorker:
      process.env.NODE_ENV === "production"
        ? {
            path: "/service-worker.js",
          }
        : {},
  };
  const alertLoginData = () => {
    f7.dialog.alert(
      "Username: " + username + "<br>Password: " + password,
      () => {
        f7.loginScreen.close();
      }
    );
  };
  f7ready(() => {
    // Call F7 APIs here
  });
  const iosBtmTabBar = () => {
    if (device.ios) {
      return (
        <Toolbar tabbar labels bottom>
          <Link
            tabLink="#view-home"
            tabLinkActive
            iconIos="f7:house_fill"
            iconAurora="f7:house_fill"
            iconMd="material:home"
            text="Home"
          />
          <Link
            tabLink="#view-projects"
            iconIos="f7:square_list_fill"
            iconAurora="f7:square_list_fill"
            iconMd="material:view_list"
            text="Projects"
          />
          <Link
            tabLink="#view-contact"
            iconIos="f7:gear"
            iconAurora="f7:gear"
            iconMd="material:contact"
            text="Contact"
          />
        </Toolbar>
      );
    }
  };
  const auroTopNav = () => {
    if (device.desktop) {
      return (
        <Navbar large sliding={false}>
          <img id="nameLogo" src={nameLogo} />
          <Menu style={{ marginLeft: "auto" }}>
            <Button small href="#" text="Home" />
            <Button small href="#" text="Projects" />
            <Button small href="#" text="Contact" />
          </Menu>
        </Navbar>
      );
    }
  };
  return (
    <App {...f7params} themeDark>
      {/* Top Navigation for Desktop */}
      {auroTopNav()}

      {/* Left panel with cover effect*/}
      {/* <Panel left cover themeDark>
        <View>
          <Page>
            <Navbar title="Left Panel" />
            <Block>Left panel content goes here</Block>
          </Page>
        </View>
      </Panel> */}

      {/* Right panel with reveal effect*/}
      {/* <Panel right reveal themeDark>
        <View>
          <Page>
            <Navbar title="Right Panel" />
            <Block>Right panel content goes here</Block>
          </Page>
        </View>
      </Panel> */}

      {/* Views/Tabs container */}
      <Views tabs className="safe-areas">
        {/* Tabbar for switching views-tabs */}
        {iosBtmTabBar()}
        {/* <Toolbar tabbar labels bottom>
          <Link
            tabLink="#view-home"
            tabLinkActive
            iconIos="f7:house_fill"
            iconAurora="f7:house_fill"
            iconMd="material:home"
            text="Home"
          />
          <Link
            tabLink="#view-projects"
            iconIos="f7:square_list_fill"
            iconAurora="f7:square_list_fill"
            iconMd="material:view_list"
            text="projects"
          />
          <Link
            tabLink="#view-contact"
            iconIos="f7:gear"
            iconAurora="f7:gear"
            iconMd="material:contact"
            text="contact"
          />
        </Toolbar> */}

        {/* Your main view/tab, should have "view-main" class. It also has "tabActive" prop */}
        <View id="view-home" main tab tabActive url="/" />

        {/* projects View */}
        <View id="view-projects" name="projects" tab url="/projects/" />

        {/* contact View */}
        <View id="view-contact" name="contact" tab url="/contact/" />
      </Views>

      {/* Popup */}
      {/* <Popup id="my-popup">
        <View>
          <Page>
            <Navbar title="Popup">
              <NavRight>
                <Link popupClose>Close</Link>
              </NavRight>
            </Navbar>
            <Block>
              <p>Popup content goes here.</p>
            </Block>
          </Page>
        </View>
      </Popup> */}

      {/* <LoginScreen id="my-login-screen">
        <View>
          <Page loginScreen>
            <LoginScreenTitle>Login</LoginScreenTitle>
            <List form>
              <ListInput
                type="text"
                name="username"
                placeholder="Your username"
                value={username}
                onInput={(e) => setUsername(e.target.value)}
              ></ListInput>
              <ListInput
                type="password"
                name="password"
                placeholder="Your password"
                value={password}
                onInput={(e) => setPassword(e.target.value)}
              ></ListInput>
            </List>
            <List>
              <ListButton title="Sign In" onClick={() => alertLoginData()} />
              <BlockFooter>
                Some text about login information.
                <br />
                Click "Sign In" to close Login Screen
              </BlockFooter>
            </List>
          </Page>
        </View>
      </LoginScreen> */}
    </App>
  );
};
export default MyApp;
