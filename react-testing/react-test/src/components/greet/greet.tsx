import { Greetprops } from "./greet.types";

export const Greet = (props: Greetprops) => {
  return <div>Hello {props.name ? props.name : "Guest"}</div>;
};
