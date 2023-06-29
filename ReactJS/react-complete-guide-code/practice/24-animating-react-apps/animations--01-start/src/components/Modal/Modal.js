import React from "react";
// import Transition from "react-transition-group/Transition";
import CSSTransition from "react-transition-group/CSSTransition";

import "./Modal.css";

// const modal = (props) => {
//   const cssClasses = [
//     "Modal",
//     props.show === "entering"
//       ? "ModalOpen"
//       : props.show === "exiting"
//       ? "ModalClosed"
//       : null,
//   ];

//   return (
//     <div className={cssClasses.join(" ")}>
//       <h1>A Modal</h1>
//       <button className="Button" onClick={props.closed}>
//         Dismiss
//       </button>
//     </div>
//   );
// };

// ***************************************************** Wrapping the Transition component
// ***************************************************** Animating Timings

// const animaionTiming = {
//   enter: 400,
//   exit: 1000,
// };

// const modal = (props) => {
//   return (
//     <Transition
//       in={props.show}
//       timeout={animaionTiming}
//       mountOnEnter
//       unmountOnExit
//     >
//       {(state) => {
//         const cssClasses = [
//           "Modal",
//           state === "entering"
//             ? "ModalOpen"
//             : state === "exiting"
//             ? "ModalClosed"
//             : null,
//         ];

//         return (
//           <div className={cssClasses.join(" ")}>
//             <h1>A Modal</h1>
//             <button className="Button" onClick={props.closed}>
//               Dismiss
//             </button>
//           </div>
//         );
//       }}
//     </Transition>
//   );
// };

// ***************************************************** The CSSTransition Component
// const animaionTiming = {
//   enter: 400,
//   exit: 1000,
// };

// const modal = (props) => {
//   return (
//     <CSSTransition
//       in={props.show}
//       timeout={animaionTiming}
//       mountOnEnter
//       unmountOnExit
//       classNames="fade-slide"
//     >
//       <div className="Modal">
//         <h1>A Modal</h1>
//         <button className="Button" onClick={props.closed}>
//           Dismiss
//         </button>
//       </div>
//     </CSSTransition>
//   );
// };

// ***************************************************** Customizing CSS Classnames
const animaionTiming = {
  enter: 400,
  exit: 1000,
};

const modal = (props) => {
  return (
    <CSSTransition
      in={props.show}
      timeout={animaionTiming}
      mountOnEnter
      unmountOnExit
      classNames={{
        enter: "",
        enterActive: "ModalOpen",
        exit: "",
        exitActive: "ModalClosed",
      }}
    >
      <div className="Modal">
        <h1>A Modal</h1>
        <button className="Button" onClick={props.closed}>
          Dismiss
        </button>
      </div>
    </CSSTransition>
  );
};
export default modal;
