//******************************************************* Initial
/* 
import { Outlet } from "react-router-dom";
import MainNavigation from "./MainNavigation";

const RootLayout = () => {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
};
export default RootLayout;
*/

// ***************************************************** Reflecting the current navigation state in the UI
import { Outlet, useNavigation } from "react-router-dom";
import MainNavigation from "./MainNavigation";

const RootLayout = () => {
  const navigation = useNavigation();

  return (
    <>
      <MainNavigation />
      <main>
        {navigation.state === "loading" && <p>Loading...</p>}
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
