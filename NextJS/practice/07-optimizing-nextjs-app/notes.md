# Optimizing Next.js Apps

<p style="text-align: center; font-size: 20px; font-weight: bold; color: #e68a00"> Module Introduction </p>

- Module Content
  - Adding Meta and <head> Tags
  - Re-using components, logic & configuration
  - Optimizing Images

<p style="text-align: center; font-size: 20px; font-weight: bold; color: #e68a00"> Analyzing the need for "head" metadata </p>

- MetaData carries important metadata and information for the browser and for search engines. But in our page if we
  inspect then we see that it's pretty empty. We got no description here. We have no title for this page. And, of
  course, that is something which we definitely do want to have on the application we're building because that enhances
  the user experience to a certain extent, depending on what we set there.

  For example, showing a title which would show up in a tab up there but it's also crucial for search engines because
  search engine crawlers like the Google crawler will have a look at the title and the description set in that metadata.

<p style="text-align: center; font-size: 20px; font-weight: bold; color: #e68a00"> Configuring the "head" content </p>

- you can really add any HTML elements that would normally go into the head section of your page. And that allows you to
  fine tune and configure what should show up in that head section.

  ```js
  const HomePage = ({ featuredEvents }) => {
    return (
      <div>
        <Head>
          <title>Next.js Events</title>
          <meta
            name="description"
            conetnt="Find a lot of great events that allow you to evolve..."
          />
        </Head>
        <EventList items={featuredEvents} />
      </div>
    );
  };
  ```

---

<p style="text-align: center; font-size: 20px; font-weight: bold; color: #e68a00"> Adding dynamic "head" conetnt </p>

```js
<Head>
  <title>{event.title}</title>
  <meta name="description" conetnt={event.description} />
</Head>
```

---

<p style="text-align: center; font-size: 20px; font-weight: bold; color: #e68a00"> Resusing Logic inside a component </p>

- Now, here in the slug page, for example, we definitely want to set our own title, and our own description, but maybe
  we wanna use the same title and description for all the different if cases then.

  ```js
  const pageHeadData = (
    <Head>
      <title>Filtered Events</title>
      <meta
        name="description"
        conetnt={`All events for ${numMonth}/${numYear}.`}
      />
    </Head>
  );
  ```

---

<p style="text-align: center; font-size: 20px; font-weight: bold; color: #e68a00"> Working with "_app.js" File (and Why) </p>

- Besides reusing our Head content inside of a component, we also might have certain Head settings that should be the
  same across all page components. So we don't wanna copy and paste it into every single page component. Now we could
  solve this by outsourcing it into a separate file, into a separate component and then importing that into all the page
  components and using it there, but we can also use another approach. Next, JS has this \_app.js file and it also has
  another file which we'll be able to utilize.

- The \_app.js file is your route app component which in the end is rendered for every page that is being displayed.
  This component here, which is received through props, this actually is the actual page component that should be
  rendered. MyApp, this component here is rendered by Next.js and this component prop will automatically be set by
  Next.js so you don't need to do anything for that. But then you can utilize this \_app.js file such that as we're
  currently doing it, you wrap your page content with our components.

  ```js
  function MyApp({ Component, pageProps }) {
    return (
      <Layout>
        <Head>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          ></meta>
        </Head>
        <Component {...pageProps} />
      </Layout>
    );
  }
  ```

---

<p style="text-align: center; font-size: 20px; font-weight: bold; color: #e68a00"> Merging "head" content </p>

- Now we have to have the `<Head>` element there in appJS and we of course still also have it in our page components.
  In indexJS in the events folder, for example, I also have `<Head>`. And as you see on the rendered page, both is
  applied. The title and description from the page component and the viewport from the \_appJS file. And this is
  important, Next.js automatically merges multiple `<Head>` elements. So if you set a `<Head>` here in \_appJS, and then
  also in the page component, the content of those different `<Head>` sections gets merged. Even if we would have
  multiple `<Head>` sections here inside of a single component, the content would be merged by Next.js.

---

<p style="text-align: center; font-size: 20px; font-weight: bold; color: #e68a00"> The "_document.js" File (And what it does) </p>

- There also is the \_document.JS file, which we can add just like \_app.js \_document.js has to be added in the pages
  folder directly in the pages folder, not in some sub folder, but in the root level of the pages folder.

- But what does document.js do. App.js is your application shell. You can imagine app.js as the root component inside of
  the body section of your HTML document. document.js allows you to customize the entire HTML document. So all the
  elements that make up an HTML document, if you need to do that, you can add to the \_documented JS file. And then you
  need to add a special component in there, a class-based component, as it turns out, which you could name my document,
  and it has to be a class-based component because it must extend some component offered and provided by Next.js.

  ```js
  class MyDocument extends Document {
    render() {
      return (
        <Html>
          <Head />
          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
      );
    }
  }
  ```

- this is the default structure, which you should add. And that's the default structure, which the default document has
  if you don't override it. So if you override it, you wanna recreate that structure. Now what could be reasons for
  overriding that default document? Well if you want to configure that general document, for example if you wanna add
  the Lang attribute on HTML and set this to en.

  ```js
  class MyDocument extends Document {
    render() {
      return (
        <Html lang="en">
          <Head />
          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
      );
    }
  }
  ```

- We could also add other elements here to the body, like for example a div with an idea of overlays like that. If we do
  that and save this, and we reload we see in the body there is this div why might we wanna do that? Well this allows us
  to add HTML content outside of our application component tree. For example for using those elements with react portals
  then we could select this div with a react portal to portal our modals or overlays to this element.

---

<p style="text-align: center; font-size: 20px; font-weight: bold; color: #e68a00"> A Closer look at our images</p>

- If we open Network tab and we see that this image has two megabytes. The introvert and extrovert images are even
  worse, they have five and four megabytes. The reason for this is that these are huge unoptimized images, which are
  fetched in full size and quality. And we are also always using the same image type, jpeg, no matter if our browser
  maybe supports a better type. For example, Chrome would support the webp image type, which is an optimized image
  format.

- Now for development, that's no problem, but this would not be okay for production. These would be way too big images.
  And Next.js calls itself, the react framework for production. And shipping such big images is certainly not production
  ready. Therefore, for it makes a lot of sense that Next.js also helps us with images.

---

<p style="text-align: center; font-size: 20px; font-weight: bold; color: #e68a00"> Optimizing images with the "Next Image" component & Feature</p>

- we can import a component offered by Next.js, the image component from next/image. Now, this is a special component
  which we can use to replace the standard image element. And when we use that special component, Next.js will create
  multiple versions of our image on the fly when requests are coming in, optimize for the operating systems and device
  sizes that are making the request. And then those generated images will be cached for future requests from similar
  devices.

- Now we can see optimized image .next/cache folder

  ```js
  <Image src={`/${image}`} alt={imageAlt} width={400} height={400} />
  ```

---

<p style="text-align: center; font-size: 20px; font-weight: bold; color: #e68a00"> Taking a look at the "Next Image" Documentation </p>
