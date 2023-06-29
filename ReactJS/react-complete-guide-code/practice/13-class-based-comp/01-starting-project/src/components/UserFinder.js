import React, { Fragment, useState, useEffect, Component } from "react";
import classes from "./UserFinder.module.css";
import UsersContext from "../store/users-context";
import Users from "./Users";
import ErrorBoundry from "./ErrorBoundry";

const DUMMY_USERS = [
  { id: "u1", name: "Max" },
  { id: "u2", name: "Manuel" },
  { id: "u3", name: "Julie" },
];

// const UserFinder = () => {
//   const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
//   const [searchTerm, setSearchTerm] = useState("");

//   useEffect(() => {
//     setFilteredUsers(
//       DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
//     );
//   }, [searchTerm]);

//   const searchChangeHandler = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   console.log(filteredUsers);

//   return (
//     <div className={classes.finder}>
//       <input type="search" onChange={searchChangeHandler} />
//       <Users users={filteredUsers} />
//     </div>
//   );
// };

// Life cycle method in action
// class UserFinder extends Component {
//   constructor() {
//     super();
//     this.state = {
//       filteredUsers: [],
//       searchTerm: "",
//     };
//   }

//   componentDidMount() {
//     // Send http request
//     this.setState({ filteredUsers: DUMMY_USERS });
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.searchTerm !== this.state.searchTerm) {
//       this.setState({
//         filteredUsers: DUMMY_USERS.filter((user) =>
//           user.name.includes(this.state.searchTerm)
//         ),
//       });
//     }
//   }

//   searchChangeHandler(event) {
//     this.setState({ searchTerm: event.target.value });
//   }

//   render() {
//     return (
//       <Fragment>
//         <div className={classes.finder}>
//           <input type="search" onChange={this.searchChangeHandler.bind(this)} />
//         </div>
//         <Users users={this.state.filteredUsers} />
//       </Fragment>
//     );
//   }
// }

// Using context in class-based component
class UserFinder extends Component {
  static contextType = UsersContext;
  constructor() {
    super();
    this.state = {
      filteredUsers: [],
      searchTerm: "",
    };
  }

  componentDidMount() {
    // Send http request
    this.setState({ filteredUsers: DUMMY_USERS });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.setState({
        filteredUsers: this.context.users.filter((user) =>
          user.name.includes(this.state.searchTerm)
        ),
      });
    }
  }

  searchChangeHandler(event) {
    this.setState({ searchTerm: event.target.value });
  }

  render() {
    return (
      <Fragment>
        <div className={classes.finder}>
          <input type="search" onChange={this.searchChangeHandler.bind(this)} />
        </div>
        <ErrorBoundry>
          <Users users={this.state.filteredUsers} />
        </ErrorBoundry>
      </Fragment>
    );
  }
}

export default UserFinder;
