import Link from "next/link";
import { signOut, useSession } from "next-auth/client";
import classes from "./main-navigation.module.css";

function MainNavigation() {
  const [session, loading] = useSession();
  console.log(session, loading);

  function logoutHandler() {
    signOut();
  }

  return (
    <header className={classes.header}>
      <Link href="/" className={classes.logo}>
        Next Auth
      </Link>
      <nav>
        <ul>
          {!session && !loading && (
            <li>
              <Link href="/auth">Login</Link>
            </li>
          )}
          {session && (
            <li>
              <Link href="/profile">Profile</Link>
            </li>
          )}
          {session && (
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
