import React from "react";
import {
  Page,
  PageContent,
  Card,
  CardHeader,
  CardFooter,
  CardContent,
  Link,
  Fab,
  Icon,
  Row,
  Navbar,
  List,
  ListItem,
  Block,
  Button,
  useStore,
} from "framework7-react";
import store from "../js/store";

const ProjectsPage = () => {
  // const products = useStore("products");

  // const addProduct = () => {
  //   store.dispatch("addProduct", {
  //     id: "4",
  //     title: "Apple iPhone 12",
  //     description:
  //       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi tempora similique reiciendis, error nesciunt vero, blanditiis pariatur dolor, minima sed sapiente rerum, dolorem corrupti hic modi praesentium unde saepe perspiciatis.",
  //   });
  // };

  return (
    <Page name="projects">
      <PageContent>
        <Block>
          <h2 className="center">My Work</h2>
        </Block>
        <Block classname="">
          {/* <Card expandable closeByBackdropClick backdrop className="projCards">
            <CardHeader
              className="no-border header-pic"
              valign="bottom"
              style={{
                backgroundImage: "url(./assets/bioPic.png)",
              }}
            >
              sss
            </CardHeader>

            <CardContent>
              <p>PokeType Calculator</p>
              <p>fsdfsd</p>
            </CardContent>
            <CardFooter>sdfsd</CardFooter>
          </Card> */}

          <Card style={{ paddingTop: "3%", paddingBottom: "3%" }}>
            <Card
              expandable
              className="projCard"
              backdrop="false"
              closeByBackdropClick="false"
            >
              <CardContent padding={false}>
                <div
                  className=""
                  style={{
                    height: "300px",
                    backgroundImage: "url(./assets/tcbgTEST.png)",
                    width: "100%",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <CardHeader textColor="white" className="display-block">
                    PokeType Calculator <br />
                    <small style={{ opacity: 0.7 }}>
                      A tool for Video Game Championship battles
                    </small>
                  </CardHeader>
                  <Link
                    cardClose
                    color="white"
                    className="card-opened-fade-in card-close"
                    style={{ position: "absolute", right: "15px", top: "15px" }}
                    iconF7="xmark_circle_fill"
                  />
                  <Fab cardClose position="right-top">
                    <Link
                      fab
                      cardClose
                      color="white"
                      className="card-opened-fade-in"
                      // style={{
                      //   position: "absolute",
                      //   right: "15px",
                      //   top: "15px",
                      // }}
                      iconF7="xmark_circle_fill"
                    />
                  </Fab>
                </div>
                <div className="card-content-padding ">
                  <p>
                    Framework7 - is a free and open source HTML mobile framework
                    to develop hybrid mobile apps or web apps with iOS or
                    Android (Material) native look and feel. It is also an
                    indispensable prototyping apps tool to show working app
                    prototype as soon as possible in case you need to.
                    Framework7 is created by Vladimir Kharlampidi (iDangero.us).
                    Framework7 - is a free and open source HTML mobile framework
                    to develop hybrid mobile apps or web apps with iOS or
                    Android (Material) native look and feel. It is also an
                    indispensable prototyping apps tool to show working app
                    prototype as soon as possible in case you need to.
                    Framework7 is created by Vladimir Kharlampidi (iDangero.us).
                    Framework7 - is a free and open source HTML mobile framework
                    to develop hybrid mobile apps or web apps with iOS or
                    Android (Material) native look and feel. It is also an
                    indispensable prototyping apps tool to show working app
                    prototype as soon as possible in case you need to.
                    Framework7 is created by Vladimir Kharlampidi (iDangero.us).
                    Framework7 - is a free and open source HTML mobile framework
                    to develop hybrid mobile apps or web apps with iOS or
                    Android (Material) native look and feel. It is also an
                    indispensable prototyping apps tool to show working app
                    prototype as soon as possible in case you need to.
                    Framework7 is created by Vladimir Kharlampidi (iDangero.us).
                    Framework7 - is a free and open source HTML mobile framework
                    to develop hybrid mobile apps or web apps with iOS or
                    Android (Material) native look and feel. It is also an
                    indispensable prototyping apps tool to show working app
                    prototype as soon as possible in case you need to.
                    Framework7 is created by Vladimir Kharlampidi (iDangero.us).
                  </p>
                  <Link src="https://github.com">TEST LINK</Link>
                </div>
                <CardFooter>
                  {" "}
                  <Link src="https://github.com">TEST LINK</Link>
                </CardFooter>
                <Block></Block>
              </CardContent>
            </Card>
          </Card>
        </Block>
      </PageContent>
    </Page>
  );
};

export default ProjectsPage;
