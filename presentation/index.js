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
   policeCamFixed: require("../assets/7745_91a0b53f8af07e1ec8bb8ab2974926db_b2d48b3bf97d925cb8af35a99644dc81.jpg"),
   policeWatchFreeway: require("../assets/102640-004-FC5414D1.jpg"),
   stopWatchAllOfUs: require("../assets/11826794843_acf78cb0e5_b.jpg"),
   berlinSnowdenMaskProtest: require("../assets/Berlin_2013_PRISM_Demo.jpg"),
   crowdDCProtest: require("../assets/big_crowd_1.jpg"),
   attSpyingEagle: require("../assets/Eff_spying_eagle.jpg"),
   cutDownSurveillancePole: require("../assets/fight-surveillance.png"),
   nypdSurveillanceTower: require("../assets/maxresdefault.jpg"),
   stopLAPDSpyingLogo: require("../assets/STOP_lapd_spying_image.jpg"),
   stopLAPDSpyingFlyer: require("../assets/Stop_LAPD_SPYING_NO_DRONES_FLYER.jpg"),
   signal: require("../assets/signal.jpg"),
   thereIsNoCloud: require("../assets/cloud.png"),
   underseaCable: require("../assets/cable.jpg"),
   networkMap: require("../assets/Network_Map.png"),
   eyesEverywhere: require("../assets/BMbhnf7CcAAuvik.jpg"),
   fingerprintComic: require("../assets/BUzfDbYCMAAohtq.jpg"),
   privateCompanySurveilance: require("../assets/ddn061413ideascartoon9.jpg")
};

preloader(images);

const theme = createTheme({
  primary: "#ff4081"
});

const localLawEnforcementPresenterNodes = `
<p>This is a large topic and I'm introduce a few key concepts, and then provide a place to get more information</p>
<p>First, we have
`
export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
          <Slide transition={["zoom"]} bgColor="primary">
            <Image src={images.stopWatchAllOfUs.replace("/","")} width="600px"/>
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
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={3} lineHeight={1} caps textColor="black">
               Intro
            </Heading>
            <Heading size={3} caps lineHeight={1} textColor="black" margin="40px">
               Security Culture
            </Heading>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <Heading size={2} fit caps textColor="tertiary" lineHeight={1}>
               Laxness
            </Heading>
            <Appear><Text textColor="tertiary" margin="20px">We've gotten use to saying anything online</Text></Appear>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <Heading size={2} fit caps textColor="tertiary" lineHeight={1}>
               Security Culture is a state of mind
            </Heading>
            <Appear><Text textColor="tertiary" margin="20px">Become conscious about what you share and with whom, and who may be listening</Text></Appear>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <Heading size={2} fit caps textColor="tertiary" lineHeight={1}>
               Digital organizing is a luxury
            </Heading>
            <Appear><Text textColor="tertiary" margin="20px">We need to be able to organize offline too. It's safer, and ultimately more accessable for many</Text></Appear>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={3} lineHeight={1} caps textColor="black">
               Overview
            </Heading>
            <Heading size={3} caps lineHeight={1} textColor="black" margin="40px">
               Who's Listening and How
            </Heading>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <Heading size={2} fit caps lineHeight={1} textColor="tertiary">
               Targeted Surveillance vs Bulk Surveillance 
            </Heading>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <Heading size={2} fit caps textColor="tertiary" lineHeight={1}>
               Targeted Surveillance
            </Heading>
            <Appear><Text textColor="tertiary" margin="20px">Targeted surveillance means picking a specific target, 
            and gaining access to their communications, either past, present, or future.</Text></Appear>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <Heading size={2} fit caps textColor="tertiary" lineHeight={1}>
               Bulk Surveillance
            </Heading>
            <Appear><Text textColor="tertiary" margin="20px">
               Bulk surveillance means collecting massive chunks of information without any target or with no specific target
            </Text></Appear>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <Heading size={2} fit caps lineHeight={1} textColor="tertiary">
               National Govt. Groups 
            </Heading>
            <Image src={images.eyesEverywhere.replace("/", "")} />
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <Heading size={1} caps lineHeight={1} textColor="tertiary">
               The NSA
            </Heading>
            <Image width="500px" src={images.attSpyingEagle.replace("/", "")} />
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <Heading size={2} fit caps lineHeight={1} textColor="tertiary">
               National Security Agency Programs
            </Heading>
            <List>
              <Appear><ListItem>PRISM - targeted access to data on 'selectors' for all major tech companies</ListItem></Appear>
              <Appear><ListItem>Upstream Collection - bulk surveillance of data going through major telcos</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <Heading size={2} fit caps lineHeight={1} textColor="tertiary">
               NSA Terms
            </Heading>
            <List>
              <Appear><ListItem>FISA Court - Secret court NSA goes through to get authorizations</ListItem></Appear>
              <Appear><ListItem>Metadata - information outside the content of a message - such as who called whom</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <Heading size={2} fit caps textColor="tertiary" lineHeight={1}>
               Information sharing
            </Heading>
            <Text textColor="tertiary" margin="20px">
               Current rules likely allow other federal agencies (FBI, DEA, CIA, ICE) fairly direct access to NSA data
            </Text>
            <Appear><Link textColor="primary" href="http://www.nytimes.com/2016/02/26/us/politics/obama-administration-set-to-expand-sharing-of-data-that-nsa-intercepts.html">
            NY Times - Obama Administration Set to Expand Sharing of Data That N.S.A. Intercepts
            </Link></Appear>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <Heading size={2} fit caps lineHeight={1} textColor="tertiary">
               The FBI
            </Heading>
            <List>
              <Appear><ListItem>Access to NSA Data</ListItem></Appear>
              <Appear><ListItem>Rule 41 - Wide Net Non-specific Warrants</ListItem></Appear>
              <Appear><ListItem>FBI Hacking</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <Heading size={2} fit caps lineHeight={1} textColor="tertiary">
               Local Law Enforcement
            </Heading>
            <Image src={images.policeWatchFreeway.replace("/", "")} margin="40px"/>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <Heading size={2} fit caps lineHeight={1} textColor="tertiary">
               Collaboration
            </Heading>
            <List>
              <Appear><ListItem>Joint Terrorism Task Force</ListItem></Appear>
              <Appear><ListItem>LAPD - Fusion Center - Norwalk, CA</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <Heading size={2} fit caps lineHeight={1} textColor="tertiary">
               Digital Surveillance
            </Heading>
            <Image src={images.nypdSurveillanceTower.replace("/", "")} width="800px" margin="20px"/>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <Heading size={2} fit caps lineHeight={1} textColor="tertiary">
               Devices
            </Heading>
            <List>
              <Appear><ListItem>Stingray - impersonates cell tower</ListItem></Appear>
              <Appear><ListItem>DRT - "Stringray on steroids" - Records hunderds of calls at a time</ListItem></Appear>
              <Appear><ListItem>LAPD has both</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <Heading size={2} fit caps lineHeight={1} textColor="tertiary">
               Socia Media
            </Heading>
            <List>
              <Appear><ListItem>Monitor activist events</ListItem></Appear>
              <Appear><ListItem>Law enforcement can trigger a shutdown in 'emergencies'</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <Heading size={2} fit caps lineHeight={1} textColor="tertiary">
               More Information
            </Heading>
            <Image src={images.stopLAPDSpyingLogo.replace("/", "")} width="400px" />
            <List>
               <Appear><ListItem>Stop LAPD Spying Coalition</ListItem></Appear>
               <Appear><ListItem><Link textColor="tertiary" href="https://stoplapdspying.org/resources/architecture/">Document - The Architecture Of LAPD Surveillance</Link></ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <Heading size={2} fit caps lineHeight={1} textColor="tertiary">
               Private Companies
            </Heading>
            <Image src={images.privateCompanySurveilance.replace("/", "")} width="700px" margin="40px"/>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <Heading size={3} caps lineHeight={1} textColor="tertiary">
               Internet's Business Model = Collect Personal Data -> Sell Ads
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={3} lineHeight={1} caps textColor="black">
               Assessing Risk
            </Heading>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <Heading size={2} caps lineHeight={1} textColor="tertiary">
               Learning to assess risk is a key component of security culture
            </Heading>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <Heading size={2} fit caps lineHeight={1} textColor="tertiary">
               Concepts in Assessing Risk
            </Heading>
            <List>
              <Appear><ListItem>Types of activities that raise risk</ListItem></Appear>
              <Appear><ListItem>Topics/issue areas that raise risk</ListItem></Appear>
              <Appear><ListItem>Shifting risk in a Trump administration</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={3} caps textColor="black">
               Introducing Digital Concepts
            </Heading>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <Heading size={2} fit caps textColor="tertiary" lineHeight={1}>
               Encryption
            </Heading>
            <Appear><Text textColor="tertiary" margin="20px">Encryption means concealing data so that only the intended person can view it</Text></Appear>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <Heading size={2} fit caps textColor="tertiary" lineHeight={1}>
               Modern encryption is very effective
            </Heading>
            <Appear><Text textColor="tertiary" margin="20px">...but any weakpoint makes the whole thing ineffective</Text></Appear>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <Heading size={2} fit caps textColor="tertiary" lineHeight={1}>
               The Internet
            </Heading>
            <Image src={images.networkMap.replace("/", "")} width="900px" />
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <Heading size={2} fit caps textColor="tertiary" lineHeight={1}>
               There Internet is just devices connected with wires
            </Heading>
            <Appear>
              <Text textColor="tertiary" margin="20px">No, really<br />            
              <Image src={images.underseaCable.replace("/", "")} height="400px"/>
              </Text>
            </Appear>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <Heading size={2} fit caps lineHeight={1} textColor="tertiary">
               The Cloud
            </Heading>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <Image src={images.thereIsNoCloud.replace("/", "")} />
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <Heading size={2} fit caps lineHeight={1} textColor="tertiary">
               Types Of Encryption
            </Heading>
            <List>
              <Appear><ListItem>Encryption at rest - The data that sits on your device is encrypted</ListItem></Appear>
              <Appear><ListItem>Encrpytion in transmission - messages are encrypted when they go over the wire</ListItem></Appear>
              <Appear><ListItem>You Need Both</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={3} caps textColor="black">
               Setting up and securing mobile phones
            </Heading>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <Heading size={2} fit caps lineHeight={1} textColor="tertiary">
               Safe Messaging
            </Heading>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <Heading size={2} caps textColor="tertiary">
               Signal
            </Heading>
            <Image src={images.signal.replace("/", "")} width="400px" margin="20px"/>
            <List>
              <Appear><ListItem>Very Secure</ListItem></Appear>
              <Appear><ListItem>Open Source / Non-profit</ListItem></Appear>
              <Appear><ListItem>Thank You Mr. Snowden!</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <Heading size={2} fit caps lineHeight={1} textColor="tertiary">
               Installing Signal
            </Heading>
            <List>
              <Appear><ListItem>Available on App Store / Google Play -- Free</ListItem></Appear>
              <Appear><ListItem>Need to have numbers in your contacts</ListItem></Appear>
              <Appear><ListItem>Can make calls too!</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <Heading size={2} fit caps lineHeight={1} textColor="tertiary">
               FB Messenger Secret Conversations
            </Heading>
            <List>
              <Appear><ListItem>Good For First Contact</ListItem></Appear>
              <Appear><ListItem>Uses Signal Protocol</ListItem></Appear>
              <Appear><ListItem>Needs Messenger App</ListItem></Appear>
              <Appear><ListItem>WARNING: Collects Metadata</ListItem></Appear>
            </List>
          </Slide> 
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <Heading size={2} fit caps lineHeight={1} textColor="tertiary">
               Encrypting Your Phone
            </Heading>
            <List>
              <Appear><ListItem>iPhone - Congratulations, you're done</ListItem></Appear>
              <Appear><ListItem>
                <Text textColor="primary">Android -</Text> 
                <Link textColor="tertiary" href="http://www.androidcentral.com/how-enable-encryption-android">
                  http://www.androidcentral.com/how-enable-encryption-android
                </Link>
              </ListItem></Appear>
            </List>
          </Slide> 
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <Heading size={2} fit caps lineHeight={1} textColor="tertiary">
               Securing Your Phone
            </Heading>
            <List>
              <Appear><ListItem>Set a strong password</ListItem></Appear>
              <Appear><ListItem>Require immediate entry</ListItem></Appear>
              <Appear><ListItem>Erase after incorrect attempts</ListItem></Appear>
            </List>
          </Slide> 
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <Heading size={2} fit caps lineHeight={1} textColor="tertiary">
               One more thing...
            </Heading>
            <Appear><Text margin="20px" textColor="tertiary">
               <Image src={images.fingerprintComic.replace("/", "")} width="700px" />
               <br />Turn off your fingerprint reader
            </Text>
            </Appear>
          </Slide> 
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <Heading size={2} fit caps lineHeight={1} textColor="tertiary">
               Phone Recording
            </Heading>
            <List>
              <Appear><ListItem>We don't really know what can be recorded</ListItem></Appear>
              <Appear><ListItem>Be Safe - Put your phone away</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={3} caps textColor="black">
               Safe Browsing, Safe Computing
            </Heading>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <Heading size={2} fit caps lineHeight={1} textColor="tertiary">
               Password protect your computer
            </Heading>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <Heading size={2} fit caps lineHeight={1} textColor="tertiary">
               A Note About Passwords
            </Heading>
            <List>
              <Appear><ListItem>Consider using a password manager</ListItem></Appear>
              <Appear><ListItem>Easiest is 1Password.com - it is paid</ListItem></Appear>
              <Appear><ListItem>KeyPassX - free open source, less convenient</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <Heading size={2} fit caps lineHeight={1} textColor="tertiary">
               Encrypt Your Computer
            </Heading>
            <List>
              <Appear><ListItem>Mac - Filevault 2</ListItem></Appear>
              <Appear><ListItem>PC - BitLocker, Best Crypt, Device Encryption</ListItem></Appear>
              <Appear><ListItem>Beware Storing Keys in the cloud!</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <Heading size={2} fit caps lineHeight={1} textColor="tertiary">
               What about email?
            </Heading>
            <List>
              <Appear><ListItem>Email is very insecure</ListItem></Appear>
              <Appear><ListItem>Need special solutions for at rest &amp; transmission</ListItem></Appear>
              <Appear><ListItem>Don't use it. Or talk after</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <Heading size={2} fit caps lineHeight={1} textColor="tertiary">
               Safe browsing
            </Heading>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <Heading size={2} fit caps lineHeight={1} textColor="tertiary">
               HTTPS - Secure Transmission
            </Heading>
            <List>
              <Appear><ListItem>Much internet traffic is already encrypted</ListItem></Appear>
              <Appear><ListItem>Look for the Lock Sign</ListItem></Appear>
              <Appear><ListItem>Install HTTPS Everywhere</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <Heading size={2} fit caps lineHeight={1} textColor="tertiary">
               Hiding your browsing and activity
            </Heading>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <Heading size={2} fit caps lineHeight={1} textColor="tertiary">
               VPN (Virtual Private Network)
            </Heading>
            <List>
              <Appear><ListItem>Hides where all your traffic comes from</ListItem></Appear>
              <Appear><ListItem>Many alternatives</ListItem></Appear>
              <Appear><ListItem>Is paid but fairly cheep</ListItem></Appear>
            </List>
           </Slide>
           <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <Heading size={2} fit caps lineHeight={1} textColor="tertiary">
               Other steps for safety
            </Heading>
            <List>
              <Appear><ListItem>Use DuckDuckGo instead of Google</ListItem></Appear>
              <Appear><ListItem>Use TOR</ListItem></Appear>
            </List>
           </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={3} caps textColor="black">               
              Additional Topics
            </Heading>
            <List>
              <Appear><ListItem>Building Safe Sites/Blogs - Let's Encrypt</ListItem></Appear>
              <Appear><ListItem>Higher security steps - VMs, USB keys of secure OSes</ListItem></Appear>
              <Appear><ListItem>Does your organization need training?</ListItem></Appear>
              <Appear><ListItem>Getting help</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
             <Heading size={3} caps textColor="black">               
                Question Time
            </Heading>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
