import React, { Component } from "react";
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
import CodeSlide from 'spectacle-code-slide';

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");
require("../css/fonts.css");
require("../css/styles.css");

const images = {
  collectionStack: require("../assets/collection-stack.gif"),
  memberships: require("../assets/memberships.png"),
};

preloader(images);

const theme = createTheme({
  primary: "#e30066",
  secondary: "#262626",
  tertiary: "black",
  quartenary: "black"
}, {
  primary: "Circular-Medium",
  secondary: "Circular-Medium",
});

const codeTextSize = 30;

class Presentation extends Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["slide"]} transitionDuration={500} bgColor="white">

          <Slide bgColor="primary">
  					<Heading size={1} lineHeight={1} textColor="white">React & GraphQL</Heading>
  					<Heading size={4} textColor="white" textFont="primary">at the Powerhouse Museum</Heading>
  					<p>
  						Kaho Cheung <a>@unkleho</a>
  					</p>
  				</Slide>

          <Slide transition={["slide"]} bgColor="white">
            <Heading size={2} textColor="secondary" textFont="primary">Quick Intro</Heading>
  					<List>
  						<Appear><ListItem>Senior Digital Developer at MAAS (PHM)</ListItem></Appear>
  						<Appear><ListItem>frontend, backend, design stuff</ListItem></Appear>
              <Appear><ListItem>Studied Industrial Design years ago</ListItem></Appear>
              <Appear><ListItem>Using React for 1.5 years</ListItem></Appear>
  					</List>
  				</Slide>

  				<Slide transition={["slide"]} bgColor="secondary">
            <Heading size={3} textColor="white">1. Museum Collection Project</Heading>
						<Appear><Heading size={3} textColor="white">2. Public GraphQL API</Heading></Appear>
						<Appear><Heading size={3} textColor="white">3. Collection Website</Heading></Appear>
            <Appear><Heading size={3} textColor="white">4. What did we learn?</Heading></Appear>
						<Appear><Heading size={3} textColor="white">5. Quick Demo</Heading></Appear>
  				</Slide>

          <Slide transition={["slide"]} bgColor="white">
            <Heading size={2} fit lineHeight={1} textColor="primary">Museum Collection Project</Heading>
  					<List>
  						<Appear><ListItem>Online catalogue of over 130,000 objects</ListItem></Appear>
  						<Appear><ListItem>~155,000 images (of varying quality)</ListItem></Appear>
              <Appear><ListItem>Collected over 135 years</ListItem></Appear>
              <Appear><ListItem>Australia's largest and most significant collection of science, technological and design ingenuity</ListItem></Appear>
              <Appear><ListItem>Went live in March 2017</ListItem></Appear>
  					</List>
  				</Slide>

          <Slide transition={["slide"]} bgColor="white">
            <Heading size={2} lineHeight={1} textColor="primary">Goals</Heading>
  					<List>
  						<Appear><ListItem>Replace ageing monolithic PHP/MS SQL stack</ListItem></Appear>
  						<Appear><ListItem>Adopt microservice architecture</ListItem></Appear>
  						<Appear><ListItem>Get data from central API service</ListItem></Appear>
  					</List>
  				</Slide>

          {/* <Slide transition={["slide"]} bgColor="white">
            <Heading size={2} lineHeight={1} textColor="primary">Approach</Heading>
  					<List>
  						<Appear><ListItem>Build API</ListItem></Appear>
  						<Appear><ListItem>Use React on smaller project (Digital Labels) Video?</ListItem></Appear>
  						<Appear><ListItem>Fork and build Collection website</ListItem></Appear>
  					</List>
  				</Slide> */}

          <Slide transition={["zoom"]} bgColor="white">
            <Image src={images.collectionStack.replace("/", "")} height="500px" />
          </Slide>

          <Slide transition={["slide"]} bgColor="secondary">
  					<Heading size={1} fit lineHeight={1} textColor="primary">GraphQL API</Heading>
  					{/* <Text textColor="white">Do your best, forget the REST</Text> */}
  				</Slide>

          {/* WHY NOT REST? Ask crowd about GraphQL */}

  				<Slide transition={["slide"]} bgColor="secondary">
  					<Heading size={2} textColor="primary" textFont="primary">Tech</Heading>
  					<List>
              <Appear><ListItem textColor="white">AWS</ListItem></Appear>
              <Appear><ListItem textColor="white">Docker</ListItem></Appear>
  						<Appear><ListItem textColor="white">NodeJS</ListItem></Appear>
  						<Appear><ListItem textColor="white">MongoDB</ListItem></Appear>
  					</List>
  				</Slide>

          <Slide transition={["slide"]} bgColor="secondary">
  					<Heading size={2} textColor="primary" textFont="primary">Libraries</Heading>
  					<List>
              <Appear><ListItem textColor="white">Express & Express GraphQL</ListItem></Appear>
              <Appear><ListItem textColor="white">Mongoose</ListItem></Appear>
  						<Appear><ListItem textColor="white">Keystone JS</ListItem></Appear>
              <Appear><ListItem textColor="white">PM2</ListItem></Appear>
              <Appear><ListItem textColor="white">GraphQL Compose</ListItem></Appear>
  					</List>
  				</Slide>

          <Slide transition={["slide"]} bgColor="secondary">
  					<Heading size={2} textColor="primary" textFont="primary">GraphQL Compose</Heading>
            <p><a href="https://github.com/nodkz/graphql-compose/">github.com/nodkz/graphql-compose</a></p>
  					<List>
              <Appear><ListItem textColor="white">Powerful tool to construct GraphQL schema</ListItem></Appear>
              <Appear><ListItem textColor="white">Plugin based architecture</ListItem></Appear>
              <Appear><ListItem textColor="white">graphql-compose-mongoose builds types from Mongoose models</ListItem></Appear>
              <Appear><ListItem textColor="white">Resulting schema automatically adds pagination, sorting and filtering.</ListItem></Appear>
              <Appear><ListItem textColor="white">Mutations easy to do</ListItem></Appear>
  					</List>
  				</Slide>

          {/* <Slide transition={["slide"]} bgColor="secondary"> */}
            <CodeSlide
              transition={[]}
              lang="javascript"
              textSize={codeTextSize}
              code={require("raw!../assets/deck.example")}
              // margin="20px auto"
              maxWidth="1300px"
              ranges={[
                { loc: [0, 4], title: 'Create Model' },
                { loc: [5, 6] },
                { loc: [7, 11] },
                { loc: [12, 17], title: 'Add mutations' },
                { loc: [18, 19] },
                { loc: [20, 23] },
              ]}
            />
					{/* </Slide> */}

          {/* GraphQL Compose + Keystone JS = Headless GraphQL CMS */}

          <Slide transition={["slide"]} bgColor="secondary">
  					<Heading size={4} textColor="primary" textFont="primary">
              <Appear><div>GraphQL Compose </div></Appear>
              +
              <Appear><div> Keystone JS</div></Appear>
              =
              <Appear><div> Headless GraphQL CMS</div></Appear>
            </Heading>
  				</Slide>

          {/* Collection Website */}

          <Slide transition={["slide"]} bgColor="white">
  					<Heading size={1} fit lineHeight={1} textColor="primary">Collection Website</Heading>
            <Text lineHeight={1.5} textColor="secondary">https://collection.maas.museum</Text>
  				</Slide>

          <Slide transition={["slide"]} bgColor="secondary">
  					<Heading size={2} textColor="primary" textFont="primary">Tech</Heading>
            <List>
              <Appear><ListItem textColor="white">AWS</ListItem></Appear>
              <Appear><ListItem textColor="white">NodeJS</ListItem></Appear>
  						<Appear><ListItem textColor="white">PM2</ListItem></Appear>
              <Appear><ListItem textColor="white">Data from api.maas.museum</ListItem></Appear>
              <Appear><ListItem textColor="white">Code based on kriasoft/react-starter-kit</ListItem></Appear>
  					</List>
  				</Slide>

          <Slide transition={["slide"]} bgColor="secondary">
  					<Heading size={2} textColor="primary" textFont="primary">Universal React</Heading>
            <List>
              <Appear><ListItem textColor="white">Same JS code runs on server and browser</ListItem></Appear>
              <Appear><ListItem textColor="white">Server Side + Single Page App</ListItem></Appear>
              <Appear><ListItem textColor="white">Made possible by Webpack</ListItem></Appear>
  					</List>
  				</Slide>

          <Slide transition={["slide"]} bgColor="secondary">
            <Heading size={4} textColor="white" textFont="primary">
              <Appear><div>server.js</div></Appear>
              <Text textColor="primary">+</Text>
              <Appear><div>client.js</div></Appear>
              <Text textColor="primary">+</Text>
              <Appear><div>Components, routes, store, actions etc</div></Appear>
              <Text textColor="primary">+</Text>
              <Appear><div>External packages</div></Appear>
              <Text textColor="primary">=</Text>
              <div><Appear><span>server.min.js</span></Appear>
 <Appear><span> | client.min.js</span></Appear></div>
            </Heading>
  				</Slide>

          <Slide transition={["slide"]} bgColor="secondary">
            <Heading size={4} textColor="primary" textFont="primary">Universal React Process</Heading>
            <Heading size={5} textColor="white" textFont="primary">
              <Appear><p>server(url) => html</p></Appear>
              <Text textColor="primary">▼</Text>
              <Appear><p>browser(html) => (dom, clientJS, css)</p></Appear>
              <Text textColor="primary">▼</Text>
              <Appear><p>clientJS(newUrl) => newDom</p></Appear>
            </Heading>
  				</Slide>

          <Slide transition={["slide"]} bgColor="secondary">
  					<Heading size={2} textColor="primary" textFont="primary">Pros</Heading>
            <List>
              <Appear><ListItem textColor="white">One language</ListItem></Appear>
              <Appear><ListItem textColor="white">Less code</ListItem></Appear>
              <Appear><ListItem textColor="white">Less load on server</ListItem></Appear>
              <Appear><ListItem textColor="white">Search indexing, social sharing.</ListItem></Appear>
  					</List>
  				</Slide>

          <Slide transition={["slide"]} bgColor="secondary">
  					<Heading size={2} textColor="primary" textFont="primary">Cons</Heading>
            <List>
              <Appear><ListItem textColor="white">Hard to set up</ListItem></Appear>
              <Appear><ListItem textColor="white">ENVs are tricky</ListItem></Appear>
              <Appear><ListItem textColor="white">Some packages aren't Universal</ListItem></Appear>
              <Appear><ListItem textColor="white">Need to check typeof window !== 'undefined' sometimes</ListItem></Appear>
  					</List>
  				</Slide>

          <Slide transition={["slide"]} bgColor="secondary">
  					<Heading size={2} textColor="primary" textFont="primary">Other JS Libraries</Heading>
            <List>
              <Appear><ListItem textColor="white">Apollo</ListItem></Appear>
              <Appear><ListItem textColor="white">Redux</ListItem></Appear>
              <Appear><ListItem textColor="white">React Router (v3)</ListItem></Appear>
              <Appear><ListItem textColor="white">Searchkit</ListItem></Appear>
              <Appear><ListItem textColor="white">Photoswipe</ListItem></Appear>
              <Appear><ListItem textColor="white">React Helmet</ListItem></Appear>
              <Appear><ListItem textColor="white">React Google Analytics Module</ListItem></Appear>
  					</List>
  				</Slide>

          <Slide transition={["slide"]} bgColor="secondary">
  					<Heading size={2} textColor="primary" textFont="primary">Styles</Heading>
            <List>
              <Appear><ListItem textColor="white">PostCSS</ListItem></Appear>
              <Appear><ListItem textColor="white">postcss-scss</ListItem></Appear>
              <Appear><ListItem textColor="white">Lost Grid Library</ListItem></Appear>
  					</List>
  				</Slide>

          {/* Lost code? */}

          <Slide transition={["slide"]} bgColor="secondary">
  					<Heading size={2} textColor="primary" textFont="primary">Custom Packages</Heading>
            <Text size={4} textColor="white" textFont="primary"><p>Shared between API and JS apps</p></Text>
            <List>
              <Appear><ListItem textColor="white">maas-js-utils (general utilities)</ListItem></Appear>
              <Appear><ListItem textColor="white">maas-style-guide (scss, colours, font sizes, spacing, logos)</ListItem></Appear>
              <Appear><ListItem textColor="white">maas-react-components (menu, image, map, tiles, header, footer)</ListItem></Appear>
  					</List>
  				</Slide>

          <Slide transition={["slide"]} bgColor="secondary">
  					<Heading size={4} textColor="primary" textFont="primary">What would we do differently?</Heading>
            <List>
              <Appear><ListItem textColor="white">Next.js</ListItem></Appear>
              <Appear><ListItem textColor="white">graph.cool</ListItem></Appear>
              <Appear><ListItem textColor="white">JS Decorators?</ListItem></Appear>
              <Appear><ListItem textColor="white">Handle .env better</ListItem></Appear>
              <Appear><ListItem textColor="white">Code splitting</ListItem></Appear>
              <Appear><ListItem textColor="white">CSS in JS</ListItem></Appear>
              <Appear><ListItem textColor="white">Use css-next syntax</ListItem></Appear>
  					</List>
  				</Slide>

          <Slide transition={["slide"]} bgColor="primary">
  					<Heading size={2} textColor="white" textFont="primary">collection.maas.museum</Heading>
  				</Slide>

          <Slide transition={["slide"]} bgColor="primary">
  					<Heading size={2} textColor="white" textFont="primary">Job</Heading>
  				</Slide>

          {/* END */}

        </Deck>
      </Spectacle>
    );
  }
}

export default Presentation;
