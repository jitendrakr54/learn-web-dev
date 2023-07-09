# Complete App Example: Build a Full Blog A to Z

---

<p style="text-align: center; font-size: 20px; font-weight: bold; color: #e68a00"> All notes </p>

- Hero Section:
  - And on this HomePage, I wanna do two things. I wanna output two things. The first thing that should be rendered
    is like a Hero section. And that's just how we typically call that. It's this wall -- section where we present our main product or in the case of a blog, maybe ourselves.

---

<p style="text-align: center; font-size: 20px; font-weight: bold; color: #e68a00"> Renderin markdown as JSX </p>

- Install another library which helps in rendering markdown as JSX - `npm install react-markdown`

- To read gray matter from markdown file, use `gray-matter` library
  `npm install gray-matter`

---

<p style="text-align: center; font-size: 20px; font-weight: bold; color: #e68a00"> Adding "head" Data </p>

- Now, one thing is missing here. If we think about deploying this website, there's already something which we learned,
  which we should not forget here. And that is metadata, which we can add to our pages. For example, on our homepage,
  we want to give this page a title and a description and we wanna do that for all our pages. And I will actually start
  with the `_app.js` file. Because there is some metadata which should be added to all pages. Things like setting the
  viewport, hence here, in `_app.js`, I will use the special head component, which we import, import head from next head.

- Refer `_app.js` and all other pages

---

<p style="text-align: center; font-size: 20px; font-weight: bold; color: #e68a00"> Using React portals </p>
- I wanna utilize this underscore documented JS file to actually render this notification which we have here through a 
  portal. The notification we're showing for the contact form is showing up correctly. It's rendered correctly at the 
  bottom of the screen because of the styling it has. But of course it is actually just dumped into this complex HTML 
  structure somewhere nested in our HTML element tree. 
  
  And whilst it looks correctly that's not correct semantically and it can make our page a bit more inaccessible as well.
  That's why we have this feature called React portals which allows us to render a component anywhere in our component 
  tree.

- Refer `_document.js` and notificatios.js
