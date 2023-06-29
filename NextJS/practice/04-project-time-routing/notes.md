# Project Time : Working with File-based Routing

<p style="text-align: center; font-size: 20px; font-weight: bold; color: #e68a00"> Module Intoduction </p>

- Module content
  - Create a complete Next.js project from scratch
  - Add static and dynamic routes
  - Add regular components & connect everything!

---

<p style="text-align: center; font-size: 20px; font-weight: bold; color: #e68a00"> Planning the Project </p>

- Now, this project will only have four routes.

- Routes
  - / : Starting Page (Show Featured Events)
  - /events : Events Page (Show all events)
  - /events/{some-id} : Event Detail Page (Show selected event)
  - /events/[...slug] : Filtered Events page (Show filtered events)

---

<p style="text-align: center; font-size: 20px; font-weight: bold; color: #e68a00"> Setting up the main pages </p>

- If we just have /events/something, so just one segment after /events, then the slug will not kick in. Instead, this
  eventId route will then handle such a request, or such a URL in the end.

---

<p style="text-align: center; font-size: 20px; font-weight: bold; color: #e68a00"> Adding dummy data and static files </p>

- Added dummy-data.js which will be used as data source and added images from splash and copied into public/images
  folder.

- Files and folders stored outside /public are not accessible by Next.js - Visitors cannot load files from there.

---

<p style="text-align: center; font-size: 20px; font-weight: bold; color: #e68a00"> Adding regular react components </p>

- Added Component/event-list.js and Component/event-item.js

---

<p style="text-align: center; font-size: 20px; font-weight: bold; color: #e68a00"> Adding more react components & connecting components </p>

- Added react logic to Component/event-list.js and Component/event-item.js and used event-item.js in pages/index.js

---

<p style="text-align: center; font-size: 20px; font-weight: bold; color: #e68a00"> Styling components in Next.js Projects </p>

- Added styles for components

---

<p style="text-align: center; font-size: 20px; font-weight: bold; color: #e68a00"> Link & Next.js 13</p>

- Up to Next.js 13, you needed to add a nested `<a>` element in your `<Link>` s if you wanted to add custom attributes
  (e.g., className) to the anchor element.

  For example, the following code would be wrong (with Next.js < v13):

  ```js
  <Link href="/" className="some-class">
    Click me
  </Link>
  ```

  Instead, you'd have to write this code:

  ```js
  <Link href="/">
    <a className="some-class">Click me</a>
  </Link>
  ```

  The same solution would be required if you wanted to nest any other elements inside your `<Link>`. You would need to wrap them into an extra (potentially empty) `<a>` element:

  ```js
  <Link href="/">
    <a>
      <span>Extra element</span>
    </a>
  </Link>
  ```

  With Next.js 13 or higher, this is no longer needed, you can instead just write:

  ```js
  <Link href="/" className="some-class">
    Click me
  </Link>
  ```

  and

  ```js
  <Link href="/">
    <span>Extra element</span>
  </Link>
  ```

- The Next.js < 13 behavior will be shown in the next lecture, since that lecture was recorded before the release of
  Next.js 13.

  If you are watching this course with version 13 (check your package.json file to find out), you can ignore my solution
  and simplify as described above (i.e., without the extra `<a>`).

---

<p style="text-align: center; font-size: 20px; font-weight: bold; color: #e68a00"> Adding Buttons & icons</p>

- Added icons and used them in event-item.js. Refer component/icons/

---

<p style="text-align: center; font-size: 20px; font-weight: bold; color: #e68a00"> Adding the "Event Detail" Page(Dynamic Route)</p>

- Refer events/[eventId].js

---

<p style="text-align: center; font-size: 20px; font-weight: bold; color: #e68a00"> Adding a general Layout component </p>

- \_app component hand your page content to Component to then display it whenever you switch the page. That means that
  we of course can wrap this component with some general layout component. We could wrap it with a fragment and add a
  header on top of it.

  ```js
  function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
  }
  ```

  ```js
  function MyApp({ Component, pageProps }) {
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );
  }
  ```

---

<p style="text-align: center; font-size: 20px; font-weight: bold; color: #e68a00"> Adding a Filter form for filtering Events </p>

- Refer events/index.js, events-search.js

---

<p style="text-align: center; font-size: 20px; font-weight: bold; color: #e68a00"> Navigating to the "Filtered Events" Page programmatically </p>

```js
const findEventsHandler = (year, month) => {
  const fullPath = `/events/${year}/${month}`;
  push(fullPath);
};
```

- Refer /events/index.js, events-search.js

---

<p style="text-align: center; font-size: 20px; font-weight: bold; color: #e68a00"> Extracting data on the Catch-All Page </p>

- Refer [...slug].js

---

<p style="text-align: center; font-size: 20px; font-weight: bold; color: #e68a00"> Final Steps </p>

- Refer ErrorAlert and it's usage
