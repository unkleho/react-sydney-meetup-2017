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
  city: require("../assets/city.jpg"),
  kat: require("../assets/kat.png"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png")
};

preloader(images);

const theme = createTheme({
  primary: "#e30066"
}, {
  primary: "Circular-Medium"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["slide"]} transitionDuration={500}>

          <Slide bgColor="primary">
  					<Heading size={1} lineHeight={1} textColor="black">A Modern Museum Web Stack</Heading>
  					<p><small>Museum of Applied Arts and Sciences</small></p>
  					<p>
  						Rowan Stenhouse <a>@shroganjo</a><br/>
  						Kaho Cheung <a>@unkleho</a>
  					</p>
  				</Slide>

  				<Slide transition={["slide"]} bgColor="primary">
  					<Heading size={2} fit textColor="white" textFont="primary">Available at:</Heading>
  					<p><a>ma.as/mwa2015</a></p>
  				</Slide>

  				<Slide transition={["slide"]} bgColor="primary">
						<Heading size={1} fit lineHeight={1} textColor="black">The Full Stack</Heading>
						<h3 class="fragment">Infrastructure</h3>
						<h3 class="fragment">Backend</h3>
						<h3 class="fragment">Frontend</h3>
  				</Slide>

  				<Slide transition={["slide"]} bgColor="primary">
  					<Heading size={1} fit lineHeight={1} textColor="black">Infrastructure</Heading>
  					<p class="fragment">The often overlooked but vital part of your app</p>
  				</Slide>

  				<Slide transition={["slide"]} bgColor="primary">
            <Heading size={2} fit textColor="white" textFont="primary">Traditional approach</Heading>
  					<List>
  						<Appear><ListItem>Pre-configured VPS</ListItem></Appear>
  						<Appear><ListItem>Provided by the IT department</ListItem></Appear>
  						<Appear><ListItem>LAMP</ListItem></Appear>
  						<Appear><ListItem>Name the box</ListItem></Appear>
  					</List>
  				</Slide>

  				<Slide transition={["slide"]} bgColor="primary">
  					<Heading size={2} fit textColor="white" textFont="primary">Benefits</Heading>
  					<List>
  						<Appear><ListItem>Easy to manage</ListItem></Appear>
  						<Appear><ListItem>Community support</ListItem></Appear>
  						<Appear><ListItem>Proven track record</ListItem></Appear>
  					</List>
  				</Slide>

  				<Slide transition={["slide"]} bgColor="primary">
  					<Heading size={2} fit textColor="white" textFont="primary">Disadvantages</Heading>
  					<List>
  						<Appear><ListItem>Fails under high load</ListItem></Appear>
  						<Appear><ListItem>Resource intensive</ListItem></Appear>
  						<Appear><ListItem>Tightly coupled</ListItem></Appear>
  					</List>
  				</Slide>

  				<Slide transition={["slide"]} bgColor="primary">
  					<Heading size={2} fit textColor="white" textFont="primary">Research</Heading>
  					<p>What did we want to achieve?</p>
  				</Slide>

  				<Slide transition={["slide"]} bgColor="primary">
  					<Heading size={2} fit textColor="white" textFont="primary">Performance</Heading>
  					<List>
  						<Appear><ListItem>Handle high loads</ListItem></Appear>
  						<Appear><ListItem>Faster response times</ListItem></Appear>
  						<Appear><ListItem>Is a key user experience</ListItem></Appear>
  					</List>
  				</Slide>

  				<Slide transition={["slide"]} bgColor="primary">
  					<Heading size={2} fit textColor="white" textFont="primary">Stability</Heading>
  					<List>
  						<Appear><ListItem>Better uptime</ListItem></Appear>
  						<Appear><ListItem>Fault tolerant</ListItem></Appear>
  					</List>
  				</Slide>

  				<Slide transition={["slide"]} bgColor="primary">
  					<Heading size={2} fit textColor="white" textFont="primary">Security</Heading>
  					<List>
  						<Appear><ListItem>Ensure applications are easy to update</ListItem></Appear>
  						<Appear><ListItem>&ldquo;HTTPS Everywhere&rdquo;</ListItem></Appear>
  						<Appear><ListItem>Treat the infrastructure like the app</ListItem></Appear>
  					</List>
  				</Slide>

  				<Slide transition={["slide"]} bgColor="primary">
  					<Heading size={2} fit textColor="white" textFont="primary">Infrastructure as code</Heading>
  					<List>
  						<Appear><ListItem>Infrastructure code is stored in a repo</ListItem></Appear>
  						<Appear><ListItem>Easier to maintain upgrade</ListItem></Appear>
  						<Appear><ListItem>More approachable for developers</ListItem></Appear>
  						<Appear><ListItem>Options: Docker, Chef, Ansible, Puppet</ListItem></Appear>
  					</List>
  				</Slide>

  				<Slide transition={["slide"]} bgColor="primary">
  					<Heading size={2} fit textColor="white" textFont="primary">Chef</Heading>
  					<p><a href="https://www.chef.io/">https://www.chef.io/</a></p>
  					<List>
  						<Appear><ListItem>Ruby based</ListItem></Appear>
  						<Appear><ListItem>Encrypt sensitive config</ListItem></Appear>
  						<Appear><ListItem>The code has to be tested</ListItem></Appear>
  					</List>
  				</Slide>

  				<Slide transition={["slide"]} bgColor="primary">
  					<Heading size={2} fit textColor="white" textFont="primary">Kitchen CI</Heading>
  					<p><a href="https://kitchen.io">https://kitchen.io</a></p>
  					<List>
  						<Appear><ListItem>Build/test/teardown of infrastructure</ListItem></Appear>
  						<Appear><ListItem>Continuous integration</ListItem></Appear>
  					</List>
  					<pre class="fragment"><code data-trim>kitchen test default-debian-77</code></pre>
  				</Slide>

          <Slide transition={["slide"]} bgColor="primary">
  					<Heading size={2} fit textColor="white" textFont="primary">Redbot</Heading>
  					<p><a href="https://redbot.org/">https://redbot.org/</a></p>
  					<ul>
  						<li class="fragment">Tests server header responses</li>
  						<li class="fragment">Caching, server settings</li>
  					</ul>
  				</Slide>

  				<Slide transition={["slide"]} bgColor="primary">
  					<Heading size={2} fit textColor="white" textFont="primary">Qualys SSL Labs</Heading>
  					<p><a href="https://www.ssllabs.com/ssltest/">https://www.ssllabs.com/ssltest/</a></p>
  					<ul>
  						<li class="fragment">Testing SSL configuration</li>
  						<li class="fragment">Vulnerabilities to SSL exploits</li>
  					</ul>
  				</Slide>

  				<Slide transition={["slide"]} bgColor="primary">
  					<Heading size={2} fit textColor="white" textFont="primary">Pingdom Tools</Heading>
  					<p><a href="http://tools.pingdom.com/fpt/">http://tools.pingdom.com/fpt/</a></p>
  					<ul>
  						<li class="fragment">Asset waterfall</li>
  						<li class="fragment">Testing asset compression</li>
  						<li class="fragment">Response times</li>
  					</ul>
  				</Slide>

  				<Slide transition={["slide"]} bgColor="primary">
  					<Heading size={2} fit textColor="white" textFont="primary">Local development environments</Heading>
  					<ul>
  						<li class="fragment">Testing production environments locally</li>
  						<li class="fragment">Avoids the works on mine scenario</li>
  					</ul>
  				</Slide>

  				<Slide transition={["slide"]} bgColor="primary">
  					<Heading size={2} fit textColor="white" textFont="primary">Vagrant</Heading>
  					<p></p>
  					<ul>
  						<li class="fragment">Consistent development environments</li>
  						<li class="fragment">Managed via a repo</li>
  						<li class="fragment">Multiple sites can be run on the same host</li>
  					</ul>
  					<pre class="fragment"><code data-trim>vagrant up</code></pre>
  				</Slide>

  				<Slide transition={["slide"]} bgColor="primary">

  				    <Heading size={2} fit textColor="white" textFont="primary">Performance improvements</Heading>
  					<ul>
  						<li class="fragment">Apache Bench</li>
  						<li class="fragment">1000 request / 100 requests concurrency</li>
  						<li class="fragment">Comparing old, development and new environments</li>
              </ul>

  				</Slide>

  				<Slide transition={["slide"]} bgColor="primary">

  				    <Heading size={2} fit textColor="white" textFont="primary">Total time to complete 1000 requests</Heading>
  				    <div id="bar-chart" class="fragment"></div>

  				</Slide>

  				<Slide transition={["slide"]} bgColor="primary">

  				    <Heading size={2} fit textColor="white" textFont="primary">Requests per second</Heading>
  				    <div id="bar-chart2" class="fragment"></div>

  				</Slide>

  				<Slide transition={["slide"]} bgColor="primary">
  					<Heading size={2} fit textColor="white" textFont="primary">Deployment</Heading>
  					<ul>
  						<li class="fragment">Automated</li>
  						<li class="fragment">Consistent &amp; repeatable</li>
  						<li class="fragment">Rollback</li>
  					</ul>
  				</Slide>

  				<Slide transition={["slide"]} bgColor="primary">
  					<Heading size={2} fit textColor="white" textFont="primary">Capistrano</Heading>
  					<p><a href="http://capistranorb.com/">http://capistranorb.com/</a></p>
  					<ul>
  						<li class="fragment">Easily scriptable</li>
  						<li class="fragment">Composer package management</li>
  						<li class="fragment">Cache flushing</li>
  						<li class="fragment">Deployment notifications</li>
  					</ul>
  					<pre class="fragment"><code data-trim>cap production deploy</code></pre>
  				</Slide>

  				<Slide transition={["slide"]} bgColor="primary">
  					<Heading size={2} fit textColor="white" textFont="primary">New Relic</Heading>
  					<p><a href="http://newrelic.com/">http://newrelic.com/</a></p>
  					<ul>
  						<li class="fragment">Error reporting on back/front end</li>
  						<li class="fragment">Real time application monitoring</li>
  						<li class="fragment">Deployment tracking</li>
  					</ul>
  				</Slide>

  				<Slide transition={["slide"]} bgColor="primary">
  					<Heading size={1} fit lineHeight={1} textColor="black">Backend</Heading>
  					<p>12 Factor App (almost)</p>
  				</Slide>

  				<Slide transition={["slide"]} bgColor="primary">
  					<h3><span class="fragment">Bedrock</span> Wordpress <span class="fragment">Boilerplate</span></h3>
  				</Slide>

  				<Slide transition={["slide"]} bgColor="primary">
  					<Heading size={2} fit textColor="white" textFont="primary">Bedrock</Heading>
  					<p class="fragment"><a href="https://roots.io/bedrock/">https://roots.io/bedrock</a></p>
  					<ul>
  						<li class="fragment">Modern development tools</li>
  						<li class="fragment">Easier configuration</li>
  						<li class="fragment">Improved folder structure</li>
  					</ul>
  				</Slide>

  				<Slide transition={["slide"]} bgColor="primary">
  					<Slide transition={["slide"]} bgColor="primary">
  						<h3>Composer</h3>
  						<p class="fragment"><a href="https://getcomposer.org/">https://getcomposer.org</a></p>
  						<ul>
  							<li class="fragment">PHP Dependency Management</li>
  							<li class="fragment">Ensures team is using the same version</li>
  							<li class="fragment">Easy to rollback Wordpress or plugin update</li>
  							<li class="fragment">Required for deployments</li>
  						</ul>
  					</Slide>

  					<Slide transition={["slide"]} bgColor="primary">
  						<p>composer.json</p>
  						{/*<pre><code data-trim contenteditable>{
    "name": "MAAS Website",
    "type": "project",
    "description": "Museum of Applied Arts and Sciences",
    "homepage": "http://maas.museum",
    "require": {
      "php": ">=5.3.2",
      "wordpress/wordpress": "4.2.2",
      "fancyguy/webroot-installer": "1.1.0",
      "composer/installers": "v1.0.12",
      "vlucas/phpdotenv": "~1.0.6",
      "wpackagist-plugin/advanced-custom-fields": "4.4.2",
      "wpackagist-plugin/types": "1.7.7",
      "wpackagist-plugin/better-wp-security": "4.8"
    }
  }</code></pre>*/}
  						<pre class="fragment"><code>composer update</code></pre>
  					</Slide>

  				</Slide>

  				<Slide transition={["slide"]} bgColor="primary">
  					<h3>Dotenv</h3>
  					<p class="fragment"><a href="https://github.com/bkeepers/dotenv">https://github.com/bkeepers/dotenv</a></p>
  					<p class="fragment">Stores configuration in the environment</p>
  				</Slide>

  				<Slide transition={["slide"]} bgColor="primary">
  					<Slide transition={["slide"]} bgColor="primary">
  						<h3>Typical Wordpress Folder Structure</h3>
  								<ul>
  									<li class="fragment">wp-admin/</li>
  									<li class="fragment">wp-config.php</li>
  									<li class="fragment">wp-content/
  										<ul>
  											<li class="fragment">languages/</li>
  											<li class="fragment">plugins/</li>
  											<li class="fragment">themes/</li>
  											<li class="fragment">uploads/</li>
  										</ul>
  									</li>
  									<li class="fragment">wp-includes/</li>
  								</ul>
  					</Slide>
  					<Slide transition={["slide"]} bgColor="primary">
  						<h3>Bedrock Folder Structure</h3>
  									<ul class="small">
  										<li class="fragment">config/</li>
  										<li class="fragment">scripts/</li>
  										<li class="fragment">web/
  											<ul class="fragment">
  												<li class="fragment">wp/
  													<ul>
  													<li class="c0 c1">wp-admin/</li>
  													<li>wp-content/
  														<ul>
  														<li class="c0 c1">languages/</li>
  														</ul>
  													</li>
  													<li class="c0 c1">wp-includes/</li>
  													</ul>
  												</li>
  												<li class="fragment">app/
  													<ul>
  													<li class="fragment highlight-red">plugins/</li>
  													<li class="fragment highlight-red">themes/</li>
  													<li class="fragment highlight-red">uploads/</li>
  													</ul>
  												</li>
  											</ul>
  										</li>
  										<li class="fragment">.env</li>
  									</ul>
  					</Slide>
  				</Slide>

  				<Slide transition={["slide"]} bgColor="primary">
  					<Heading size={1} fit lineHeight={1} textColor="black">Frontend</Heading>
  					<p>Keeping up with the Joneses</p>
  				</Slide>

  				<Slide transition={["slide"]} bgColor="primary">
  					<Slide transition={["slide"]} bgColor="primary">
  						<Heading size={2} fit textColor="white" textFont="primary">Sage</Heading>
  						<p>Barebones Wordpress starter theme with modern frontend development workflow</p>
  						<p class="fragment"><a href="https://roots.io/sage/">https://roots.io/sage/</a></p>
  					</Slide>
  					<Slide transition={["slide"]} bgColor="primary">
  						<h3>MAAS websites that use Sage</h3>
  						<ul>
  							<li class="fragment">maas.museum</li>
  							<li class="fragment">sydneydesign.com.au</li>
  							<li class="fragment">sydneyscience.com.au</li>
  						</ul>
  					</Slide>
  				</Slide>





















          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              A Modern Museum Web Stack
            </Heading>
            <Heading size={1} fit caps>
              A ReactJS Presentation Library
            </Heading>
            <Heading size={1} fit caps textColor="black">
              Where You Can Write Your Decks In JSX
            </Heading>
            <Link href="https://github.com/FormidableLabs/spectacle">
              <Text bold caps textColor="tertiary">View on Github</Text>
            </Link>
            <Text textSize="1.5em" margin="20px 0px 0px" bold>Hit Your Right Arrow To Begin!</Text>
          </Slide>

          <Slide transition={["slide"]} bgColor="black" notes="You can even put notes on your slide. How awesome is that?">
            <Image src={images.kat.replace("/", "")} margin="0px auto 40px" height="293px"/>
            <Heading size={2} caps fit textColor="primary" textFont="primary">
              Wait what?
            </Heading>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<List><li>talk about that</ListItem></Appear><li>and that</ListItem></Appear></List>">
            <CodePane
              lang="jsx"
              source={require("raw!../assets/deck.example")}
              margin="20px auto"
            />
          </Slide>
          <Slide transition={["slide"]} bgImage={images.city.replace("/", "")} bgDarken={0.75}>
            <Appear fid="1">
              <Heading size={1} caps fit textColor="primary">
                Full Width
              </Heading>
            </Appear>
            <Appear fid="2">
              <Heading size={1} caps fit textColor="tertiary">
                Adjustable Darkness
              </Heading>
            </Appear>
            <Appear fid="3">
              <Heading size={1} caps fit textColor="primary">
                Background Imagery
              </Heading>
            </Appear>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading caps fit>Flexible Layouts</Heading>
            <Layout>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Left
                </Heading>
              </Fill>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Right
                </Heading>
              </Fill>
            </Layout>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <BlockQuote>
              <Quote>Wonderfully formatted quotes</Quote>
              <Cite>Ken Wheeler</Cite>
            </BlockQuote>
          </Slide>
          <Slide transition={["spin", "zoom"]} bgColor="tertiary">
            <Heading caps fit size={1} textColor="primary">
              Inline Markdown
            </Heading>
            <Markdown>
              {`
![Markdown Logo](${images.markdown.replace("/", "")})

You can write inline images, [Markdown Links](http://commonmark.org), paragraph text and most other markdown syntax
* Lists too!
* With ~~strikethrough~~ and _italic_
* And lets not forget **bold**
              `}
            </Markdown>
          </Slide>
          <Slide transition={["slide", "spin"]} bgColor="primary">
            <Heading caps fit size={1} textColor="tertiary">
              Smooth
            </Heading>
            <Heading caps fit size={1} textColor="secondary">
              Combinable Transitions
            </Heading>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <List>
              <Appear><ListItem>Inline style based theme system</ListItem></Appear>
              <Appear><ListItem>Autofit text</ListItem></Appear>
              <Appear><ListItem>Flexbox layout system</ListItem></Appear>
              <Appear><ListItem>React-Router navigation</ListItem></Appear>
              <Appear><ListItem>PDF export</ListItem></Appear>
              <Appear><ListItem>And...</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} caps fit textColor="tertiary">
              Your presentations are interactive
            </Heading>
            <Interactive/>
          </Slide>
          <Slide transition={["spin", "slide"]} bgColor="tertiary">
            <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
              Made with love in Seattle by
            </Heading>
            <Link href="http://www.formidablelabs.com"><Image width="100%" src={images.logo}/></Link>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
