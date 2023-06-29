# Pages & File-based Routing

<p style="text-align: center; font-size: 20px; font-weight: bold; color: #e68a00"> Module Content </p>

- Understanding File-based Routing
  Static & Dynamic Routes
  Navigating Between Pages

---

<p style="text-align: center; font-size: 20px; font-weight: bold; color: #e68a00"> Our initial Setup </p>

- Download attached project and run `npm install` to download all dependencies.

---

<p style="text-align: center; font-size: 20px; font-weight: bold; color: #e68a00"> What is "File-based Routing"? And Why 
Is It Helpful? </p>

![Routing 1](assets/Next.js1.png "Routing")

![Routing 1](assets/Next.js2.png "Routing")

![Routing 1](assets/Next.js3.png "Routing")

---

<p style="text-align: center; font-size: 20px; font-weight: bold; color: #e68a00"> Adding a first Page </p>

- Create index.js inside pages folder

```js
function HomePage() {
  return (
    <div>
      <h1>The Home Page</h1>
    </div>
  );
}

export default HomePage;
```

---

<p style="text-align: center; font-size: 20px; font-weight: bold; color: #e68a00"> Adding a Named / Static Route File </p>

- Create about.js inside pages folder

```js
function AboutPage() {
  return (
    <div>
      <h1>The About Page</h1>
    </div>
  );
}

export default AboutPage;
```

---

<p style="text-align: center; font-size: 20px; font-weight: bold; color: #e68a00"> Working with Nested Paths & Routes </p>

- At some point you might want to structure your pages in a different way, or you need some deeply nested path
  consisting of multiple segments. In such cases, you can add folders to the pages folder.

- Create a folder 'portfolio' and add index.js, list.js. Now when you visit URL /portfolio then index.js inside
  portfolio is rendered. If you visit /portfolio/list then list.js is rendered. This would not be possible without
  nested folder.

---

<p style="text-align: center; font-size: 20px; font-weight: bold; color: #e68a00"> Adding dynamic paths & routes </p>

- Let's say here in this very simple dummy application we are working on in our portfolio folder, we don't just want to
  have the route path forward slash portfolio and the list path, but we also have different portfolio items different
  portfolio projects let's say, and those projects might have different ideas or `slugs`, and we want to load the
  different data in the same kind of component for those different slugs or IDs. That's exactly where we would create
  such a dynamic route component.

- To create dynamic route, we create a file as `[projectId].js` where projectId can be any id

---

<p style="text-align: center; font-size: 20px; font-weight: bold; color: #e68a00"> Extracting Dynamic path segment data (Dynamic Routes) </p>

- To extract dynamic path segment, Next.js provides `useRouter()` hook.

  ```js
  import { useRouter } from "next/router";

  const router = useRouter();

  console.log(router.pathname);
  console.log(router.query);
  ```

- To work with class component, Next.js provides Higher Order Component `withRouter`

---

<p style="text-align: center; font-size: 20px; font-weight: bold; color: #e68a00"> Building Nested dynamic routes & paths </p>

- We can create nested dynamic routes as well. For that we need to create folder `/clients/[id]/[clientprojectid].js`

---

<p style="text-align: center; font-size: 20px; font-weight: bold; color: #e68a00"> Adding Catch-All Routes </p>

- For example, we want a support /blog/the-id-of-a-post but maybe we also want to support /blog/2020/12/
  the-idea-of-a-post. To only search for this post if it was released in December 2020. Or we just want to load blog/
  2020/12 to load all blog posts for that specific month in that year. So, we have different URL formats which we want
  to support, and maybe we want to support them all with the same component, so no matter what the path is and how many segments it has we always want to load the same component. And that's what we can do with such a catch all route.

- To work with catch all routes, we create a file as [...slug].js

- Anything after blog is caught by this page component and is made available as an array through that slug property on
  that query object in the router object. And now we could be using these values to send a request to our database, to
  filter for blog posts where the year is 2020 and the month is 12.

- Now if we visit page as /blog/2020/12/ then we get as

  ```js
  slug: ["2020", "12"];
  ```

---

<p style="text-align: center; font-size: 20px; font-weight: bold; color: #e68a00"> Navigating with "Link" Component </p>

- Now, up to this point, we have all those different pages and components, but we can only navigate between them
  by manually changing the URL. And that's of course not very realistic. In reality, we typically wanna navigate through
  links or programmatically when some action completed

- The disadvantage here is that with such a standard link (anchor tag), we in the end send a brand new HTTP request to
  load this new page, which means that any application state we might have when our running React app would be lost.
  If we have some App-wide state, which is stored with React context or Redux, it would be lost since we send a brand
  new request and we get a brand new HTML page.

- And that's not really the idea of building a React app no matter if you're using Next.js or not, you wanna stay
  in that app and you want to manage App-wide state.

  ```js
  import Link from "next/link";

  <ul>
    <li>
      <Link href="/portfolio">Portfolio</Link>
    </li>
    <li>
      <Link href="/clients">Clients</Link>
    </li>
  </ul>;
  ```

---

<p style="text-align: center; font-size: 20px; font-weight: bold; color: #e68a00"> Navigating to Dynamic Routes </p>

- Added links for all clients.

  ```js
  function ClientsPage() {
    const clients = [
      { id: "max", name: "Maximilian" },
      { id: "manu", name: "Manuel" },
    ];

    return (
      <div>
        <h1>The Clients Page</h1>
        <ul>
          {clients.map((client) => (
            <li key={client.id}>
              <Link href={`/clients/${client.id}`}>{client.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  ```

---

<p style="text-align: center; font-size: 20px; font-weight: bold; color: #e68a00"> A different way of setting link hrefs </p>

- Now for longer paths, constructing a link destination like this. so by building a string like this can be cumbersome
  or annoying. That's why Next.js also gives you an alternative way an alternative value you can provide for the REFPROP
  on the link. Instead of providing a string which is the path you want to go to, you can provide an object.

  ```js
  <Link href={{ pathname: "/clients/[id]", query: { id: client.id } }}>
    {client.name}
  </Link>
  ```

---

<p style="text-align: center; font-size: 20px; font-weight: bold; color: #e68a00"> Navigating Programmatically </p>

- Sometimes you need to navigate programmatically because of form was submitted. and fo this we can use router.push()

  ```js
  router.push("clients/max/projecta");
  ```

- If we use a router.replace() instead of push then we replaced the current page with that one which means we can't go
  back after the navigation. router.replace("clients/max/projecta");

  ```js
  router.replace("clients/max/projecta");
  ```

- Using object

  ```js
  router.push({
    pathname: "/clients/[id]/[clientprojectid]",
    query: { id: "max", clientprojectid: "projecta" },
  });
  ```

---

<p style="text-align: center; font-size: 20px; font-weight: bold; color: #e68a00"> Adding a Custom 404 Page </p>

- Now, of course you might want to ship your own 404 page with your own content and style. And Next.js makes that easy.
  You just need to add a special file in your pages folder. So on the root level of your pages folder whichis `404.js`

  ```js
  function NotFoundPage() {
    return (
      <div>
        <h1>Page not found!</h1>
      </div>
    );
  }
  export default NotFoundPage;
  ```

---

<p style="text-align: center; font-size: 20px; font-weight: bold; color: #e68a00"> Summary </p>

![Routing 4](assets/Next.js4.png "Routing")
