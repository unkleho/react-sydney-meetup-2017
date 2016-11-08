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
  iLoveLamp: require("../assets/i-love-lamp.gif"),
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
  					<Heading size={1} lineHeight={1} textColor="black">A Modern Museum Web Stack</Heading>
  					<Heading size={4} textColor="white" textFont="primary">Museum of Applied Arts and Sciences</Heading>
  					<p>
  						Rowan Stenhouse <a>@shroganjo</a><br/>
  						Kaho Cheung <a>@unkleho</a>
  					</p>
  				</Slide>

  				<Slide transition={["slide"]} bgColor="black">
						<Heading size={1} fit lineHeight={1} textColor="primary">The Full Stack</Heading>
						<Appear><Heading textColor="white">Infrastructure</Heading></Appear>
						<Appear><Heading textColor="white">Backend</Heading></Appear>
						<Appear><Heading textColor="white">Frontend</Heading></Appear>
  				</Slide>

  				<Slide transition={["slide"]} bgColor="black">
  					<Heading size={1} fit lineHeight={1} textColor="primary">Infrastructure</Heading>
  					<Text textColor="white">The often overlooked but vital part of your app AKA the ugly stuff</Text>
  				</Slide>

  				<Slide transition={["slide"]} bgColor="white">
            <Heading size={2} textColor="black" textFont="primary">Traditional approach</Heading>
  					<List>
  						<Appear><ListItem>Pre-configured VPS</ListItem></Appear>
  						<Appear><ListItem>Provided by the IT department</ListItem></Appear>
  						<Appear><ListItem>LAMP</ListItem></Appear>
  						<Appear><ListItem>Name the box</ListItem></Appear>
  					</List>
  				</Slide>

          <Slide transition={["zoom"]} bgColor="white">
           <Image src={images.iLoveLamp.replace("/", "")} height="480px" />
          </Slide>

  				<Slide transition={["slide"]} bgColor="white">
  					<Heading size={2} textColor="black" textFont="primary">Benefits</Heading>
  					<List>
  						<Appear><ListItem>Easy to manage</ListItem></Appear>
  						<Appear><ListItem>Community support</ListItem></Appear>
  						<Appear><ListItem>Proven track record</ListItem></Appear>
  					</List>
  				</Slide>

  				<Slide transition={["slide"]} bgColor="white">
  					<Heading size={2} textColor="black" textFont="primary">Disadvantages</Heading>
  					<List>
  						<Appear><ListItem>Fails under high load</ListItem></Appear>
  						<Appear><ListItem>Resource intensive</ListItem></Appear>
  						<Appear><ListItem>Tightly coupled</ListItem></Appear>
  					</List>
  				</Slide>

  				<Slide transition={["slide"]} bgColor="black">
  					<Heading size={2} textColor="white" textFont="primary">Research</Heading>
  					<Text textColor="white" lineHeight={1.5}>What did we want to achieve?</Text>
  				</Slide>

  				<Slide transition={["slide"]} bgColor="white">
  					<Heading size={2} textColor="black" textFont="primary">Performance</Heading>
  					<List>
  						<Appear><ListItem>Handle high loads</ListItem></Appear>
  						<Appear><ListItem>Faster response times</ListItem></Appear>
  						<Appear><ListItem>Is a key user experience</ListItem></Appear>
  					</List>
  				</Slide>

  				<Slide transition={["slide"]} bgColor="white">
  					<Heading size={2} textColor="black" textFont="primary">Stability</Heading>
  					<List>
  						<Appear><ListItem>Better uptime</ListItem></Appear>
  						<Appear><ListItem>Fault tolerant</ListItem></Appear>
  					</List>
  				</Slide>

  				<Slide transition={["slide"]} bgColor="white">
  					<Heading size={2} textColor="black" textFont="primary">Security</Heading>
  					<List>
  						<Appear><ListItem>Ensure applications are easy to update</ListItem></Appear>
  						<Appear><ListItem>&ldquo;HTTPS Everywhere&rdquo;</ListItem></Appear>
  						<Appear><ListItem>Treat the infrastructure like the app</ListItem></Appear>
  					</List>
  				</Slide>

  				<Slide transition={["slide"]} bgColor="white">
  					<Heading size={2} textColor="black" textFont="primary">Infrastructure as code</Heading>
  					<List>
  						<Appear><ListItem>Infrastructure code is stored in a repo</ListItem></Appear>
  						<Appear><ListItem>Easier to maintain upgrade</ListItem></Appear>
  						<Appear><ListItem>More approachable for developers</ListItem></Appear>
  						<Appear><ListItem>Options: Docker, Chef, Ansible, Puppet</ListItem></Appear>
  					</List>
  				</Slide>

  				<Slide transition={["slide"]} bgColor="white">
  					<Heading size={2} textColor="black" textFont="primary">Chef</Heading>
  					<p><a href="https://www.chef.io/">https://www.chef.io/</a></p>
  					<List>
  						<Appear><ListItem>Ruby based</ListItem></Appear>
  						<Appear><ListItem>Encrypt sensitive config</ListItem></Appear>
  						<Appear><ListItem>The code has to be tested</ListItem></Appear>
  					</List>
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
            <Heading size={2} textColor="black" textFont="primary">So what&rsquo;s the point?</Heading>
            <List>
              <Appear><ListItem>Power outage in June</ListItem></Appear>
              <Appear><ListItem>Migrated the entire site to Amazon Web Services (images, database, code)</ListItem></Appear>
              <Appear><ListItem>Done with no downtime in a day</ListItem></Appear>
            </List>
          </Slide>

          <Slide transition={["slide"]} bgColor="white">
  					<Heading size={2} textColor="black" textFont="primary">Redbot</Heading>
  					<p><a href="https://redbot.org/">https://redbot.org/</a></p>
            <List>
              <Appear><ListItem>Tests server header responses</ListItem></Appear>
  						<Appear><ListItem>Caching, server settings</ListItem></Appear>
  					</List>
  				</Slide>

  				<Slide transition={["slide"]} bgColor="white">
  					<Heading size={2} textColor="black" textFont="primary">Qualys SSL Labs</Heading>
  					<p><a href="https://www.ssllabs.com/ssltest/">https://www.ssllabs.com/ssltest/</a></p>
            <List>
              <Appear><ListItem>Testing SSL configuration</ListItem></Appear>
  						<Appear><ListItem>Vulnerabilities to SSL exploits</ListItem></Appear>
  					</List>
  				</Slide>

  				<Slide transition={["slide"]} bgColor="white">
  					<Heading size={2} textColor="black" textFont="primary">Pingdom Tools</Heading>
  					<p><a href="http://tools.pingdom.com/fpt/">http://tools.pingdom.com/fpt/</a></p>
            <List>
              <Appear><ListItem>Asset waterfall</ListItem></Appear>
  						<Appear><ListItem>Testing asset compression</ListItem></Appear>
  						<Appear><ListItem>Response times</ListItem></Appear>
  					</List>
  				</Slide>

  				<Slide transition={["slide"]} bgColor="white">
  					<Heading size={2} textColor="black" textFont="primary">Local development environments</Heading>
            <List>
              <Appear><ListItem>Testing production environments locally</ListItem></Appear>
  						<Appear><ListItem>Avoids the works on mine scenario</ListItem></Appear>
  					</List>
  				</Slide>

  				<Slide transition={["slide"]} bgColor="white">
  					<Heading size={2} textColor="black" textFont="primary">Vagrant</Heading>
            <List>
              <Appear><ListItem>Consistent development environments</ListItem></Appear>
  						<Appear><ListItem>Managed via a repo</ListItem></Appear>
  						<Appear><ListItem>Multiple sites can be run on the same host</ListItem></Appear>
  					</List>

            <Appear><CodePane textSize="1em" lang="bash">vagrant up</CodePane></Appear>
  				</Slide>

  				<Slide transition={["slide"]} bgColor="white">

  				    <Heading size={2} textColor="black" textFont="primary">Performance improvements</Heading>
            <List>
              <Appear><ListItem>Apache Bench</ListItem></Appear>
  						<Appear><ListItem>1000 request / 100 requests concurrency</ListItem></Appear>
  						<Appear><ListItem>Comparing old, development and new environments</ListItem></Appear>
            </List>

  				</Slide>

          <Slide transition={["zoom"]} bgColor="white">
           <Image src={images.timePerRequest.replace("/", "")} height="661px" />

  				</Slide>

          <Slide transition={["zoom"]} bgColor="white">
           <Image src={images.requestsPerSecond.replace("/", "")} height="674px" />				    

  				</Slide>

          <Slide transition={["zoom"]} bgColor="white">
            <Image src={images.dailySessions.replace("/", "")} height="200px" />
          </Slide>

          <Slide transition={["zoom"]} bgColor="white">
            <Image src={images.highPerformance.replace("/", "")} height="400px" />
          </Slide>

  				<Slide transition={["slide"]} bgColor="white">
  					<Heading size={2} textColor="black" textFont="primary">Deployment</Heading>
            <List>
              <Appear><ListItem>Automated</ListItem></Appear>
  						<Appear><ListItem>Consistent &amp; repeatable</ListItem></Appear>
  						<Appear><ListItem>Rollback</ListItem></Appear>
  					</List>
  				</Slide>

  				<Slide transition={["slide"]} bgColor="white">
  					<Heading size={2} textColor="black" textFont="primary">Capistrano</Heading>
  					<p><a href="http://capistranorb.com/">http://capistranorb.com/</a></p>
            <List>
              <Appear><ListItem>Easily scriptable</ListItem></Appear>
  						<Appear><ListItem>Composer package management</ListItem></Appear>
  						<Appear><ListItem>Cache flushing</ListItem></Appear>
  						<Appear><ListItem>Deployment notifications</ListItem></Appear>
  					</List>
  					<Appear><CodePane textSize="1em">cap production deploy</CodePane></Appear>
  				</Slide>

  				<Slide transition={["slide"]} bgColor="white">
  					<Heading size={2} textColor="black" textFont="primary">New Relic</Heading>
  					<p><a href="http://newrelic.com/">http://newrelic.com/</a></p>
            <List>
              <Appear><ListItem>Error reporting on back/front end</ListItem></Appear>
  						<Appear><ListItem>Real time application monitoring</ListItem></Appear>
  						<Appear><ListItem>Deployment tracking</ListItem></Appear>
  					</List>
  				</Slide>

  				<Slide transition={["slide"]} bgColor="black">
  					<Heading size={1} fit lineHeight={1} textColor="primary">Backend</Heading>
  					<Text textColor="white">12 Factor App (almost)</Text>
  				</Slide>

  				<Slide transition={["slide"]} bgColor="white">
  					<Heading size={2} textColor="black" textFont="primary"><Appear><span>Bedrock</span></Appear> Wordpress <Appear><span>Boilerplate</span></Appear></Heading>
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
