// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const images = {
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png")
};

preloader(images);

const theme = createTheme({
  primary: "#ff4081"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              Digital Privacy Training
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={3} caps textColor="black">
               Agenda
            </Heading>
            <List>
              <Appear><ListItem>Intro - What is security culture? - 5 minutes</ListItem></Appear>
              <Appear><ListItem>Overview - Who's listening and how? - 20 minutes</ListItem></Appear>
              <Appear><ListItem>Assessing risk - 5 minutes</ListItem></Appear>
              <Appear><ListItem>Introductary digital concepts - 15 minutes</ListItem></Appear>
              <Appear><ListItem>Setting up and securing mobile phones - 30 minutes</ListItem></Appear>
              <Appear><ListItem>Safe Browsing, Safe Computing - 30 minutes</ListItem></Appear>
              <Appear><ListItem>Additional Privacy Steps, Question Time - 10 minutes</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <Heading size={2} fit caps textColor="tertiary" lineHeight={1}>
               Intro - Security Culture
            </Heading>
            <List>
              <Appear><ListItem>Laxness of the past few years -- we've gotten use to saying anything online</ListItem></Appear>
              <Appear><ListItem>Security Culture is a state of mind -- becoming conscious about what you share and with whom, and who may be listening</ListItem></Appear>
              <Appear><ListItem>Digital organizing is a luxury -- we need to be able to organize offline too. It's safer, and ultimately more accessable for many</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <Heading size={2} fit caps lineHeight={1} textColor="tertiary">
               Overview - Who's Listening and How
            </Heading>
            <List>
              <Appear><ListItem>Bulk Surveilance vs Targeted Surveilance</ListItem></Appear>
              <Appear><ListItem>National Groups - NSA, FBI, CIA</ListItem></Appear>
              <Appear><ListItem>Snowden Disclosures - Wireless companies, prism</ListItem></Appear>
              <Appear><ListItem>Local law enforcement</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <Heading size={2} fit caps lineHeight={1} textColor="tertiary">
               Assessing Risk
            </Heading>
            <List>
              <Appear><ListItem>Types of activities that raise risk</ListItem></Appear>
              <Appear><ListItem>Topics/issue areas that raise risk</ListItem></Appear>
              <Appear><ListItem>Shifting risk in a Trump administration</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <Heading size={2} fit caps lineHeight={1} textColor="tertiary">
               Introductary Digital Concepts
            </Heading>
            <List>
              <Appear><ListItem>What is encryption?</ListItem></Appear>
              <Appear><ListItem>What is the internet? Devices vs wire</ListItem></Appear>
              <Appear><ListItem>The cloud - someone else's device</ListItem></Appear>
              <Appear><ListItem>Encryption in transmision vs at rest</ListItem></Appear>
              <Appear><ListItem>Weakest link problem</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <Heading size={2} fit caps lineHeight={1} textColor="tertiary">
               Setting up and securing mobile phones
            </Heading>
            <List>
              <Appear><ListItem>Sending Secure Messages - Signal, FB Messenger Secret Convos</ListItem></Appear>
              <Appear><ListItem>Encrypting your phone</ListItem></Appear>
              <Appear><ListItem>Passwords and biometrics</ListItem></Appear>
              <Appear><ListItem>Put it far away at meetings</ListItem></Appear>
            </List>
          </Slide> 
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <Heading size={2} fit caps lineHeight={1} textColor="tertiary">
               Safe Browsing, Safe Computing
            </Heading>
            <List>
              <Appear><ListItem>Password Protect Your Computer</ListItem></Appear>
              <Appear><ListItem>Encrypting Your Computer</ListItem></Appear>
              <Appear><ListItem>Install HTTPS Everywhere</ListItem></Appear>
              <Appear><ListItem>Browse Safely with VPN &amp; TOR</ListItem></Appear>
            </List>
          </Slide> 
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <Heading size={2} fit caps lineHeight={1} textColor="tertiary">
               Additional Steps, Question Time
            </Heading>
            <List>
              <Appear><ListItem>Building Safe Sites/Blogs - Let's Encrypt</ListItem></Appear>
              <Appear><ListItem>Higher security steps - VMs, USB keys of secure OSes</ListItem></Appear>
              <Appear><ListItem>Does your organization need training?</ListItem></Appear>
              <Appear><ListItem>Question Time</ListItem></Appear>
            </List>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
