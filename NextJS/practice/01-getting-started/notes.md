# Getting Started

<p style="text-align: center; font-size: 20px; font-weight: bold; color: #e68a00"> What is Next.js? And Why would you use It?</p>

![What is Next.js 1](assets/Next.js1.png "What is Next.js")

![What is Next.js 2](assets/Next.js2.png "What is Next.js")

![What is Next.js 3](assets/Next.js3.png "What is Next.js")

- Refer pdf notes

<p style="text-align: center; font-size: 20px; font-weight: bold; color: #e68a00"> Key Feature: Server Side Rendering (Pre-Rendering)</p>

![Key Feature](assets/Next.js4.png "Key Feature")

- Server-side rendering is all about preparing the content of a page on the server instead of on the client.

- If you take a standard React application built with just React, then if you inspect the source code of a loaded React
  page, you will notice that the page is actually pretty empty right from the start. You only have a basic HTML skeleton
  there, and then some entry point, some div with an idea route typically, into which the React app is loaded and
  rendered.

- But all of that rendering, is done by React. And since React is a client side, JavaScript library, all that rendering
  happens on the client, so in the browsers of your users, it's not happening on the server. And as a result, the actual
  HTML code, which is sent from the server to the client, when a user visits your page is pretty empty.

- Now, that is not necessarily a big problem. It depends on what you're building, but it can be a problem. Because for
  example, if your page also, fetches some data from a server that should be displayed like a list of meetups, as we're
  doing it here, then the user might initially see some loading state, a flickering page for a fraction of a second,
  whilst the request is on its way, fetching the data because data fetching only begins once the JavaScript code
  executed on the client. And then we still have to wait for the response of that outgoing request.

- Now, again, that is not necessarily a problem, but of course it might not be the user experience you want to offer.
  Now it can also be a problem if search engine optimization matters to you. Now, this does not matter for all pages.
  If you have a administration dashboard which is only reached by logging in, then search engine optimization does not
  matter there because search engines will never see that dashboard. It's highly user specific.

- But if you have a public facing page with a lot of content that should be found through search engines, then of
  course, search engine optimization does matter. So for example, here, where we got this list of meetups, we see those
  meetups as a user but the search engine crawlers will actually only see that initially empty HTML page which we're
  getting from a server. So, that content is not picked up by search engine crawlers and that can be a problem.

- And that's where a server-side rendering could help us. If that page would be pre-rendered on the server, if that data
  fetching somehow could be done on the server, when the request hits that server and then the finished page would be
  served to our users and to the search engine crawlers, then users would not have that flickering loading state and
  search engines would see our page content. And that's the problem server-side rendering solves.

<p style="text-align: center; font-size: 20px; font-weight: bold; color: #e68a00"> Key Feature: File-based Routing </p>

- Routing means that we give the user the illusion of having multiple pages. When we navigate around and we load
  different pages, then that's the job of a router.

- Typically we use React-Router for that. This router basically watches the URL, and when it changes, it basically
  prevents the browser default of sending a request to some backend server, and instead renders different content on the
  page with React. We change what's visible on the screen based on the URL without sending a extra request to a server
  because we stay in that single page application which we typically build with React.

- React Router is a great package, but it is extra code which you have to write. And then often you end up storing your
  components that act as pages in a separate folder, which kind of replicates your route set up in code. So if you have
  three pages set up as pages and code, you have three page components in that pages component folder.

- Next.js gets rid of that in-code route definition. Instead, with Next.js, you would define pages and routes with files
  and folders. You have a special pages folder in Next.js apps which has to be named pages, and then you are structuring
  that folder, defines the routes and paths your page supports.

- Now that simply allows us to get rid of that extra code, and hence we have to write less code, we have less work, and
  it's a highly understandable concept because it's very close to how we all started with web development.

<p style="text-align: center; font-size: 20px; font-weight: bold; color: #e68a00"> Key Feature: Build Fullstack React Apps </p>

- With Next.js it's very easy to add our own backend API into our react project using NodeJS code. So we can easily add
  such code to our Next react apps when using Next.js. And that allows us to add code for storing data to a database or
  to files, getting data from there, adding authentication

<p style="text-align: center; font-size: 20px; font-weight: bold; color: #e68a00"> Creating a Next.js Project & Setting Up Our IDE </p>

- Create a next js app using
  `npx create-next-app`

<p style="text-align: center; font-size: 20px; font-weight: bold; color: #e68a00"> Analyzing the created Project </p>

- Now one thing you might see here in public folder, is that unlike in a regular React app, you have a index HTML file
  in the public folder. Here in the Next.js app, you don't have that. And the reason for this is that Next.js has this
  built in pre-rendering. And whilst it gives you a single page application, that single page is dynamically pre-rendered
  when a request reaches the server so that you do return an initial page with content.

- the pages folder will be the most important folder because that is where we will set up that file based routing, and
  that is there for the folder, which is important for us to define the different pages that should make up our
  application here.

<p style="text-align: center; font-size: 20px; font-weight: bold; color: #e68a00"> A First Demo: Next.js in Action! </p>

- To run the App use : `npm run dev`

<p style="text-align: center; font-size: 20px; font-weight: bold; color: #e68a00"> About this course & Course Outline </p>

![Course Outline](assets/Next.js5.png "Course Outline")

<p style="text-align: center; font-size: 20px; font-weight: bold; color: #e68a00"> Taking the Course: Your two options </p>

![Course Outline](assets/Next.js6.png "Course Outline")

<p style="text-align: center; font-size: 20px; font-weight: bold; color: #e68a00"> How to get the most out of this course </p>

![Course Outline](assets/Next.js7.png "Course Outline")
