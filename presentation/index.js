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

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");
require("../css/fonts.css");
require("../css/styles.css");

const images = {
  collectionStack: require("../assets/collection-stack.gif"),
  requestsPerSecond: require("../assets/requests-per-second.png"),
  timePerRequest: require("../assets/time-per-request.png"),
  dailySessions: require("../assets/daily-sessions-graph.png"),
  highPerformance: require("../assets/high-performance.jpg"),
  memberships: require("../assets/memberships.png"),
  books: require("../assets/books.png"),
  electronics: require("../assets/electronics.png"),
  donation: require("../assets/donation.png"),
  report: require("../assets/woo-report.png"),
  star: require("../assets/name-a-star.png"),
  whatson: require("../assets/whatson.png"),
  sdWhatson: require("../assets/sd-whatson.png"),
  sfWhatson: require("../assets/sf-whatson.png"),
  digitalLabels: require("../assets/digital-labels.png"),
  dl1: require("../assets/dl1.png"),
  dl2: require("../assets/dl2.png"),
  dl3: require("../assets/dl3.png"),
  dlcms: require("../assets/dlcms.png"),
  quark: require("../assets/quark.jpg"),
};

preloader(images);

const theme = createTheme({
  primary: "#e30066",
  secondary: "black",
  tertiary: "black",
  quartenary: "black"
}, {
  primary: "Circular-Medium",
  secondary: "Circular-Medium",
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["slide"]} transitionDuration={500} bgColor="white">

          <Slide bgColor="primary">
  					<Heading size={1} lineHeight={1} textColor="black">React and GraphQL at the Powerhouse Museum</Heading>
  					{/* <Heading size={4} textColor="white" textFont="primary">Powerhouse Museum</Heading> */}
  					<p>
  						Kaho Cheung <a>@unkleho</a>
  					</p>
  				</Slide>

          <Slide transition={["slide"]} bgColor="white">
            <Heading size={2} textColor="black" textFont="primary">Quick Intro</Heading>
  					<List>
  						<Appear><ListItem>Senior Digital Developer at MAAS (PHM)</ListItem></Appear>
  						<Appear><ListItem>Design, frontend and backend stuff</ListItem></Appear>
              <Appear><ListItem>Studied Industrial Design years ago</ListItem></Appear>
              <Appear><ListItem>Using React for 1.5 years</ListItem></Appear>
  					</List>
  				</Slide>

  				<Slide transition={["slide"]} bgColor="black">
            <Heading size={3} textColor="white">1. Museum Collection Project</Heading>
						<Appear><Heading size={3} textColor="white">2. Public GraphQL API</Heading></Appear>
						<Appear><Heading size={3} textColor="white">3. Universal React Stack</Heading></Appear>
						<Appear><Heading size={3} textColor="white">4. Quick Demo</Heading></Appear>
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
  						<Appear><ListItem>Replace ageing PHP/MS SQL stack</ListItem></Appear>
  						<Appear><ListItem>Adopt microservice architecture</ListItem></Appear>
  						<Appear><ListItem>Collection website (and other apps) to get data from central API service</ListItem></Appear>
  					</List>
  				</Slide>

          <Slide transition={["zoom"]} bgColor="white">
            <Image src={images.collectionStack.replace("/", "")} height="500px" />
          </Slide>

          <Slide transition={["slide"]} bgColor="black">
  					<Heading size={1} fit lineHeight={1} textColor="primary">GraphQL API</Heading>
  					<Text textColor="white">Do your best, forget the REST</Text>
  				</Slide>

          {/* WHY NOT REST? Ask crowd about GraphQL */}

  				<Slide transition={["slide"]} bgColor="black">
  					<Heading size={2} textColor="primary" textFont="primary">Tech</Heading>
  					<List>
              <Appear><ListItem textColor="white">AWS</ListItem></Appear>
              <Appear><ListItem textColor="white">Docker</ListItem></Appear>
  						<Appear><ListItem textColor="white">NodeJS</ListItem></Appear>
  						<Appear><ListItem textColor="white">MongoDB</ListItem></Appear>
  					</List>
  				</Slide>

          <Slide transition={["slide"]} bgColor="black">
  					<Heading size={2} textColor="primary" textFont="primary">Libraries</Heading>
  					<List>
              <Appear><ListItem textColor="white">Express & Express GraphQL</ListItem></Appear>
              <Appear><ListItem textColor="white">Mongoose</ListItem></Appear>
  						<Appear><ListItem textColor="white">Keystone JS</ListItem></Appear>
              <Appear><ListItem textColor="white">PM2</ListItem></Appear>
              <Appear><ListItem textColor="primary">GraphQL Compose</ListItem></Appear>
  					</List>
  				</Slide>

          <Slide transition={["slide"]} bgColor="black">
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

          {/* GraphQL Compose + Keystone JS = Headless GraphQL CMS */}

          <Slide transition={["slide"]} bgColor="black">
  					<Heading size={4} fit textColor="primary" textFont="primary">
              <Appear><span>GraphQL Compose </span></Appear> +
              <Appear><span> Keystone JS</span></Appear> =
              <Appear><span> Headless GraphQL CMS</span></Appear>
            </Heading>
  				</Slide>

  				<Slide transition={["slide"]} bgColor="white">
  					<Heading size={2} textColor="black" textFont="primary">Kitchen CI</Heading>
  					<p><a href="https://kitchen.io">https://kitchen.io</a></p>
  					<List>
  						<Appear><ListItem>Build/test/teardown of infrastructure</ListItem></Appear>
  						<Appear><ListItem>Continuous integration</ListItem></Appear>
  					</List>

  					<Appear><CodePane textSize="1em" lang="bash">kitchen test maas-production</CodePane></Appear>
  				</Slide>

  				<Slide transition={["slide"]} bgColor="white">
  					<Heading size={2} textColor="black" textFont="primary">Bedrock</Heading>
  					<p class="fragment"><a href="https://roots.io/bedrock/">https://roots.io/bedrock</a></p>
            <List>
              <Appear><ListItem>Modern development tools</ListItem></Appear>
  						<Appear><ListItem>Easier configuration</ListItem></Appear>
  						<Appear><ListItem>Improved folder structure</ListItem></Appear>
  					</List>
  				</Slide>

					<Slide transition={["slide"]} bgColor="white">
						<Heading size={2} textColor="black" textFont="primary">Composer</Heading>
						<p><a href="https://getcomposer.org/">https://getcomposer.org</a></p>
						<Appear><Text lineHeight={1.5} margin="1em">PHP Dependency Management</Text></Appear>
						<Appear><Text lineHeight={1.5} margin="1em">Ensures team is using the same version</Text></Appear>
						<Appear><Text lineHeight={1.5} margin="1em">Easy to rollback Wordpress or plugin update</Text></Appear>
						<Appear><Text lineHeight={1.5} margin="1em">Required for deployments</Text></Appear>
					</Slide>

					<Slide transition={["slide"]} bgColor="white">
						<p>composer.json</p>
            <CodePane lang="jsx"
              source={require("raw!../assets/deck.example")}
              margin="20px auto" />
            <Appear><CodePane textSize="1em">composer update</CodePane></Appear>
					</Slide>

  				<Slide transition={["slide"]} bgColor="white">
  					<Heading size={2} textColor="black" textFont="primary">Dotenv</Heading>
  					<p class="fragment"><a href="https://github.com/bkeepers/dotenv">https://github.com/bkeepers/dotenv</a></p>
  					<p class="fragment">Stores configuration in the environment</p>
  				</Slide>

          {/*
            Kaho Starts Here:
          */}

          <Slide transition={["slide"]} bgColor="white">
            <Heading size={2} textColor="black" textFont="primary">Woocommerce</Heading>
            <Appear><Text lineHeight={1.5} margin="1em">Free open source Wordpress Plugin</Text></Appear>
            <Appear><Text lineHeight={1.5} margin="1em">Make money from extensions</Text></Appear>
            <Appear><Text lineHeight={1.5} margin="1em">Now owned by Automattic, who run Wordpress.com</Text></Appear>
          </Slide>

          <Slide transition={["zoom"]}>
            <Image src={images.memberships.replace("/", "")} height="900px" margin="-140px 0 0 -60px" />
          </Slide>

          <Slide transition={["zoom"]}>
            <Image src={images.books.replace("/", "")} height="900px" margin="-140px 0 0 -60px" />
          </Slide>

          <Slide transition={["zoom"]}>
            <Image src={images.electronics.replace("/", "")} height="900px" margin="-140px 0 0 -60px "/>
          </Slide>

          <Slide transition={["zoom"]}>
            <Image src={images.donation.replace("/", "")} height="900px" margin="-140px 0 0 -60px" />
          </Slide>

          <Slide transition={["zoom"]} notes="Big up lachlan!">
            <Image src={images.star.replace("/", "")} height="900px" margin="-140px 0 0 -60px" />
          </Slide>

          <Slide transition={["zoom"]}>
            <Image src={images.report.replace("/", "")} height="900px" margin="-140px 0 0 -60px" />
          </Slide>

          <Slide transition={["zoom"]}>
            <Image src={images.quark.replace("/", "")} />
          </Slide>

  				<Slide transition={["slide"]} bgColor="white" notes="We've also created our own custom plugins">
            <Heading size={1} fit lineHeight={1} textColor="black">MAAS Wordpress Plugins</Heading>
            <Appear><Text lineHeight={1.5} margin="1em">Salesforce Integration</Text></Appear>
            <Appear><Text lineHeight={1.5} margin="1em">Indesign Exporter</Text></Appear>
            <Appear><Text lineHeight={1.5} margin="1em">Whats On Events</Text></Appear>
            <Appear><Text lineHeight={1.5} margin="1em">Festival Event Submission Platform</Text></Appear>
  				</Slide>

          <Slide transition={["slide"]} bgColor="white" notes="Lachlan! No data migration. No more Word docs with multiple versions. Just one event to edit.">
            <Text lineHeight={1.5} textColor="black">Festival Workflow</Text>
            <Appear><Text lineHeight={1.5} padding="0.5em" textColor="white" bgColor="primary">Applicants submit in Wordpress</Text></Appear>
            <Appear><Text lineHeight={1.5} padding="0.5em" textColor="white" bgColor="primary">Editorial edit copy in Wordpress</Text></Appear>
            <Appear><Text lineHeight={1.5} padding="0.5em" bgColor="black" textColor="primary">Wordpress events = Source of truth</Text></Appear>
              <Text lineHeight={1.5} padding="0.5em" textColor="white" bgColor="primary">
                <Appear><Text bgColor="white" padding="0.5em">Direct data for SD and SF</Text></Appear>
                <Appear><Text bgColor="white" padding="0.5em">Indesign Exporter for print booklet</Text></Appear>
                <Appear><Text bgColor="white" padding="0.5em">Data for <Link>maas.museum/whats-on</Link></Text></Appear>
              </Text>
        	</Slide>

  				<Slide transition={["slide"]} bgColor="black">
  					<Heading size={1} fit lineHeight={1} textColor="primary">Frontend</Heading>
            <Text lineHeight={1.5} textColor="white">The pretty stuff</Text>
  				</Slide>

					<Slide transition={["slide"]} bgColor="white">
						<Heading size={2} textColor="black" textFont="primary">What is frontend?</Heading>
            <Appear><Text lineHeight={1.5} margin="1em">HTML</Text></Appear>
            <Appear><Text lineHeight={1.5} margin="1em">CSS</Text></Appear>
            <Appear><Text lineHeight={1.5} margin="1em">Javascript</Text></Appear>
					</Slide>

          <Slide transition={["slide"]} bgColor="white">
						<Heading size={2} textColor="black" textFont="primary">Frontend tools</Heading>
            <Appear><Text lineHeight={1.5} margin="1em">Live Code Updates</Text></Appear>
            <Appear><Text lineHeight={1.5} margin="1em">Helps with design</Text></Appear>
					</Slide>

					<Slide transition={["slide"]} bgColor="white" notes="Combined from CSS, JS and Design. No page refresh.">
						<Heading size={2} lineHeight={1.3} textColor="black" textFont="primary">Single Page Application</Heading>
            <Appear><Text lineHeight={1.5} margin="1em">eg. Gmail, Facebook.</Text></Appear>
            <Appear><Text lineHeight={1.5} margin="1em">Longer initial loading time, but faster afterwards.</Text></Appear>
            <Appear><Text lineHeight={1.5} margin="1em">What's On pages on MAAS, SD and SF</Text></Appear>
					</Slide>

          <Slide transition={["zoom"]}>
            <Image src={images.whatson.replace("/", "")} height="900px" margin="-140px 0 0 -60px" />
          </Slide>

          <Slide transition={["zoom"]}>
            <Image src={images.sfWhatson.replace("/", "")} height="900px" margin="-140px 0 0 -60px" />
          </Slide>

          <Slide transition={["zoom"]} notes="Open up in browser. Code shared across three websites.">
            <Image src={images.sdWhatson.replace("/", "")} height="900px" margin="-140px 0 0 -60px" />
          </Slide>

          <Slide bgColor="white">
            <Heading size={1} lineHeight={1.3} textColor="black" textFont="primary">Digital Labels</Heading>
          </Slide>

          <Slide transition={["zoom"]}>
            <Image src={images.dl1.replace("/", "")} height="900px" margin="-140px 0 0 -340px" />
          </Slide>

          <Slide transition={["zoom"]}>
            <Image src={images.dl2.replace("/", "")} height="900px" margin="-140px 0 0 -340px" />
          </Slide>

          <Slide transition={["zoom"]}>
            <Image src={images.dl3.replace("/", "")} height="900px" margin="-140px 0 0 -340px" />
          </Slide>

          <Slide transition={["zoom"]}>
            <Image src={images.dlcms.replace("/", "")} height="900px" margin="-140px 0 0 -340px" />
          </Slide>

          <Slide transition={["zoom"]} bgColor="white" notes="Lachlan!" notes="Web application. We could do a whole talk on this">
            <Heading size={2} lineHeight={1.3} textColor="black" textFont="primary">Digital Labels</Heading>
            <Appear><Text lineHeight={1.5} margin="1em">Single Page App</Text></Appear>
            <Appear><Text lineHeight={1.5} margin="1em">And Server Side App</Text></Appear>
            <Appear><Text lineHeight={1.5} margin="1em">Best of both worlds</Text></Appear>
            <Appear><Text lineHeight={1.5} margin="1em">Data from EMu and new database via <Link href="#">api.maas.museum</Link></Text></Appear>
            <Appear><Text lineHeight={1.5} margin="1em">Different stack to MAAS, SD and SF</Text></Appear>
            <Appear><Text lineHeight={1.5} margin="1em">Tech research for new Collection website</Text></Appear>
          </Slide>

          <Slide transition={["zoom", "spin"]} bgColor="black">
            <Heading size={2} lineHeight={1.3} textColor="primary" textFont="primary">Stacks On</Heading>
            <Appear><Heading textColor="white">Infrastructure</Heading></Appear>
						<Appear><Heading textColor="white">Backend</Heading></Appear>
						<Appear><Heading textColor="white">Frontend...</Heading></Appear>
          </Slide>

          <Slide transition={["slide"]} bgColor="black">
            <Heading size={2} lineHeight={1.3} textColor="primary" textFont="primary">The End</Heading>
          </Slide>

        </Deck>
      </Spectacle>
    );
  }
}
