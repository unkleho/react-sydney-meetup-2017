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
  head: require("../assets/head.jpg"),
  enigma: require("../assets/enigma.jpg"),
  pyrmont: require("../assets/pyrmont.jpg"),
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
            <br/>
  					<Text>
  						Kaho Cheung <a>@unkleho</a>
  					</Text>
  				</Slide>

          <Slide transition={["slide"]} bgColor="white">
            <Heading size={2} textColor="secondary" textFont="primary">Quick Intro</Heading>
  					<List>
  						<Appear><ListItem>Senior Digital Developer at MAAS (PHM)</ListItem></Appear>
  						<Appear><ListItem>Frontend, backend, design stuff</ListItem></Appear>
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

          <Slide transition={["fade"]} bgColor="white" maxWidth="1400px" maxHeight="1000px">
            <Image src={images.enigma.replace("/", "")} width="50%" />
          </Slide>

          <Slide transition={["fade"]} bgColor="white" maxWidth="1400px" maxHeight="1000px">
            <Image src={images.head.replace("/", "")} width="85%" />
          </Slide>

          <Slide transition={["fade"]} bgColor="white" maxWidth="1400px" maxHeight="1000px">
            <Image src={images.pyrmont.replace("/", "")} width="90%" />
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

          <Slide transition={["zoom"]} bgColor="white" maxWidth="1400px" maxHeight="1000px">
            <Image src={images.collectionStack.replace("/", "")} />
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
              <Appear><ListItem textColor="white">Easily builds Queries and Mutations</ListItem></Appear>
              <Appear><ListItem textColor="white">Automatically adds pagination, sorting and filtering.</ListItem></Appear>
  					</List>
  				</Slide>

          <CodeSlide
            transition={[]}
            lang="javascript"
            textSize={codeTextSize}
            code={require("raw!../assets/code/graphqlCompose1.txt")}
            maxWidth="1300px"
            ranges={[
              { loc: [0, 3] },
              { loc: [4, 8], title: 'Create Model' },
              { loc: [9, 10] },
              { loc: [11, 16] },
              { loc: [17, 22] },
              { loc: [23, 24] },
              { loc: [25, 28] },
            ]}
          />

          <CodeSlide
            transition={[]}
            lang="javascript"
            textSize={codeTextSize}
            code={require("raw!../assets/code/graphqlCompose2.txt")}
            maxWidth="1300px"
            maxHeight="900px"
            ranges={[
              { loc: [0, 6], title: 'Add custom field' },
              { loc: [7, 17], title: 'Add relationship' },
            ]}
          />

          {/* GraphQL Compose + Keystone JS = Headless GraphQL CMS */}

          <CodeSlide
            transition={[]}
            lang="javascript"
            textSize={codeTextSize}
            code={require("raw!../assets/code/graphqlCompose3.txt")}
            maxWidth="1300px"
            ranges={[
              { loc: [0, 4], title: 'Keystone JS' },
              { loc: [5, 9] },
              { loc: [10, 11] },
              { loc: [12, 14] },
              { loc: [15, 16], title: 'Re-use Keystone/Mongoose model' },
              { loc: [17, 21] },
            ]}
          />

          <Slide transition={["slide"]} bgColor="secondary">
  					<Heading size={4} textColor="primary" textFont="primary">
              <Appear><div>GraphQL Compose </div></Appear>
              +
              <Appear><div> Keystone JS</div></Appear>
              =
              <Appear><div> Headless GraphQL CMS</div></Appear>
            </Heading>
  				</Slide>

          <Slide transition={["slide"]} bgColor="secondary">
  					<Heading size={3} textColor="primary" textFont="primary">api.maas.museum/graphql</Heading>
            <Appear><Heading size={5} textColor="white" textFont="primary">Docs: api.maas.museum</Heading></Appear>
  				</Slide>

          {/*
            * Collection Website
            * -------------------------------------------------------------- */}

          <Slide transition={["slide"]} bgColor="white">
  					<Heading size={1} fit lineHeight={1} textColor="primary">Collection Website</Heading>
            <Text lineHeight={1.5} textColor="secondary">collection.maas.museum</Text>
  				</Slide>

          <Slide transition={["slide"]} bgColor="secondary">
  					<Heading size={2} textColor="primary" textFont="primary">Tech</Heading>
            <List>
              <Appear><ListItem textColor="white">AWS</ListItem></Appear>
              <Appear><ListItem textColor="white">NodeJS</ListItem></Appear>
              <Appear><ListItem textColor="white">Docker</ListItem></Appear>
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
              <Appear><p>browser(html) => (dom, css, clientJS)</p></Appear>
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
              <Appear><ListItem textColor="white">Search indexing</ListItem></Appear>
              <Appear><ListItem textColor="white">FB/Twitter metadata</ListItem></Appear>
  					</List>
  				</Slide>

          <Slide transition={["slide"]} bgColor="secondary">
  					<Heading size={2} textColor="primary" textFont="primary">Cons</Heading>
            <List>
              <Appear><ListItem textColor="white">Hard to set up</ListItem></Appear>
              <Appear><ListItem textColor="white">ENVs are tricky</ListItem></Appear>
              <Appear><ListItem textColor="white">Some packages aren't Universal</ListItem></Appear>
              <Appear><ListItem textColor="white"><code>typeof window !== 'undefined'</code> sometimes required</ListItem></Appear>
  					</List>
  				</Slide>

          <Slide transition={["slide"]} bgColor="secondary">
  					<Heading size={2} textColor="primary" textFont="primary">JS Libraries</Heading>
            <List>
              <Appear><ListItem textColor="white">Apollo</ListItem></Appear>
              <Appear><ListItem textColor="white">Redux (smart container/dumb component pattern)</ListItem></Appear>
              <Appear><ListItem textColor="white">React Router (v3)</ListItem></Appear>
              <Appear><ListItem textColor="white">Photoswipe</ListItem></Appear>
              <Appear><ListItem textColor="white">React Helmet</ListItem></Appear>
              <Appear><ListItem textColor="white">React Google Analytics Module</ListItem></Appear>
              <Appear><ListItem textColor="white">Searchkit</ListItem></Appear>
  					</List>
  				</Slide>

          <CodeSlide
            transition={[]}
            lang="jsx"
            textSize={codeTextSize}
            code={require("raw!../assets/code/searchkit1.txt")}
            maxWidth="1300px"
            ranges={[
              { loc: [0, 1], title: 'Searchkit' },
              { loc: [3, 4] },
              { loc: [6, 10] },
              { loc: [14, 20] },
              { loc: [20, 25]},
              { loc: [29, 33] },
              { loc: [33, 34] },
            ]}
          />

          <Slide transition={["slide"]} bgColor="secondary">
  					<Heading size={2} textColor="primary" textFont="primary">Styles</Heading>
            <List>
              <Appear><ListItem textColor="white">PostCSS</ListItem></Appear>
              <Appear><ListItem textColor="white">SASS (postcss-scss)</ListItem></Appear>
              <Appear><ListItem textColor="white">Lost Grid Library</ListItem></Appear>
              <Appear><ListItem textColor="white">EMs!</ListItem></Appear>
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

          <Slide transition={["slide"]} bgColor="secondary" maxHeight="900px">
  					<Heading size={4} textColor="primary" textFont="primary">What would we do differently next time?</Heading>
            <List>
              <Appear><ListItem textColor="white">graph.cool / scaphold.io</ListItem></Appear>
              <Appear><ListItem textColor="white">Relay</ListItem></Appear>
              <Appear><ListItem textColor="white">JS Decorators syntax?</ListItem></Appear>
              <Appear><ListItem textColor="white">Code splitting</ListItem></Appear>
              <Appear><ListItem textColor="white">CSS in JS</ListItem></Appear>
              <Appear><ListItem textColor="white">Use css-next syntax</ListItem></Appear>
              <Appear><ListItem textColor="white">Next.js</ListItem></Appear>
  					</List>
  				</Slide>

          <Slide transition={["slide"]} bgColor="secondary" maxHeight="1000px">
  					<Heading size={4} textColor="primary" textFont="primary">Next.js</Heading>
            <List>
              <Appear><ListItem textColor="white">Universal React library</ListItem></Appear>
              <Appear><ListItem textColor="white"><strike>react-router</strike></ListItem></Appear>
              <Appear><ListItem textColor="white"><strike>react-helmet</strike></ListItem></Appear>
              <Appear><ListItem textColor="white"><strike>webpack</strike></ListItem></Appear>
              <Appear><ListItem textColor="white">Automatic code splitting</ListItem></Appear>
              <Appear><ListItem textColor="white">CSS in JS</ListItem></Appear>
              <Appear><ListItem textColor="white">One dependency</ListItem></Appear>
              <Appear><ListItem textColor="white">Recipes for Redux, Apollo, MobX etc</ListItem></Appear>
  					</List>
  				</Slide>

          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={5} textColor="secondary" textFont="primary">Demo</Heading>
  					<Heading size={3} textColor="white" textFont="primary">collection.maas.museum</Heading>
  				</Slide>

          {/* <Slide transition={["slide"]} bgColor="primary" maxWidth="1400px">
  					<Heading size={2} textColor="white" textFont="primary">Work at the Powerhouse!</Heading>
            <Appear>
              <Text size={5} textColor="white" textFont="primary">
                <p>Senior Digital Developer job application ends this Friday<br/>https://ma.as/devjob</p>
              </Text>
            </Appear>
  				</Slide> */}

          <Slide transition={["slide"]} bgColor="primary">
  					<Heading size={5} textColor="white" textFont="primary">Made with Spectacle</Heading>
  				</Slide>

          {/* END */}

        </Deck>
      </Spectacle>
    );
  }
}

export default Presentation;
