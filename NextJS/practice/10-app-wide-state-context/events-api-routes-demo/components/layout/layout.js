import { Fragment, useContext } from "react";

import MainHeader from "./main-header";
import Notification from "../notification/notification";
import NotificationContext from "../../store/notification-context";

function Layout(props) {
  const notificationCtx = useContext(NotificationContext);
  const activeNotification = notificationCtx.notification;

  return (
    <Fragment>
      {activeNotification && (
        <Notification
          title={activeNotification.title}
          message={activeNotification.message}
          status={activeNotification.status}
        />
      )}
      <MainHeader />
      <main>{props.children}</main>
    </Fragment>
  );
}

export default Layout;
