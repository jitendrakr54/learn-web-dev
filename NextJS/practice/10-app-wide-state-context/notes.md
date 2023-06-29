# Project Time: API Routes

<p style="text-align: center; font-size: 20px; font-weight: bold; color: #e68a00"> Module Introduction </p>

- Module Content
  - How to use React context in NextJS Apps

---

<p style="text-align: center; font-size: 20px; font-weight: bold; color: #e68a00"> Our target state & starting project </p>

- Use event project from previous section

---

<p style="text-align: center; font-size: 20px; font-weight: bold; color: #e68a00"> Creating a new React Context </p>

- Refer notification-context.js, \_app.js

  ```js
  import { createContext, useState } from "react";

  const NotificationContext = createContext({
    notification: null, // {title, message, status}
    showNotification: function () {},
    hideNotication: function () {},
  });

  export default NotificationContext;

  export function NotificationContextProvider(props) {
    return (
      <NotificationContext.Provider>
        {props.children}
      </NotificationContext.Provider>
    );
  }
  ```

---

<p style="text-align: center; font-size: 20px; font-weight: bold; color: #e68a00"> Adding context state</p>

- Refer notification-context.js

---

<p style="text-align: center; font-size: 20px; font-weight: bold; color: #e68a00"> Using context data in components </p>

- Refer Layout.js

---

<p style="text-align: center; font-size: 20px; font-weight: bold; color: #e68a00"> Example: Triggering & Showing Notifications </p>s

- Refer newsletter-registration.js

---

<p style="text-align: center; font-size: 20px; font-weight: bold; color: #e68a00"> Example: Removing Notifications(Automatically) </p>s

- Added useEffect. Refer newsletter-context.js

---

<p style="text-align: center; font-size: 20px; font-weight: bold; color: #e68a00"> Challenge: Add notification for comment and add spinner for loaidng comments</p>s

- Refer comments.js
