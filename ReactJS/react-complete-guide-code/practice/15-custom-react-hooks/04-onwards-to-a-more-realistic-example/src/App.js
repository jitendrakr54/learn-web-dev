import React, { useEffect, useState } from "react";

import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";
import useHttp from "./hooks/use-http";

/* 
function App() {
  console.log("App Running");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async (taskText) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://react-test-468bb-default-rtdb.firebaseio.com/tasks.json"
      );

      if (!response.ok) {
        throw new Error("Request failed!");
      }

      const data = await response.json();

      const loadedTasks = [];

      for (const taskKey in data) {
        loadedTasks.push({ id: taskKey, text: data[taskKey].text });
      }

      setTasks(loadedTasks);
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}
*/

// By using custom hooks - useHttp
/* 
function App() {
  console.log("App Running 1");
  const [tasks, setTasks] = useState([]);

  const transformTasks = (taskObj) => {
    const loadedTasks = [];

    for (const taskKey in taskObj) {
      loadedTasks.push({ id: taskKey, text: taskObj[taskKey].text });
    }
    setTasks(loadedTasks);
  };

  console.log("App Running 2");
  const {
    isLoading,
    error,
    sendRequest: fetchTasks, // alias
  } = useHttp(
    {
      url: "https://react-test-468bb-default-rtdb.firebaseio.com/tasks.json",
    },
    transformTasks
  );

  // console.log("App Running 3");
  // useEffect(() => {
  //   console.log("App Running 4");
  //   fetchTasks();
  // }, []);

  console.log("App Running 3");
  useEffect(() => {
    console.log("App Running 4");
    fetchTasks();
  }, [fetchTasks]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  console.log("App Running 5");
  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}
 */
// ************************ Using useCallback to avoid re-creation of transforTasks
// function App() {
//   const [tasks, setTasks] = useState([]);

//   const transformTasks = useCallback((taskObj) => {
//     const loadedTasks = [];

//     for (const taskKey in taskObj) {
//       loadedTasks.push({ id: taskKey, text: taskObj[taskKey].text });
//     }
//     setTasks(loadedTasks);
//   }, []);

//   const {
//     isLoading,
//     error,
//     sendRequest: fetchTasks, // alias
//   } = useHttp(
//     {
//       url: "https://react-test-468bb-default-rtdb.firebaseio.com/tasks.json",
//     },
//     transformTasks
//   );

//   useEffect(() => {
//     fetchTasks();
//   }, [fetchTasks]);

//   const taskAddHandler = (task) => {
//     setTasks((prevTasks) => prevTasks.concat(task));
//   };

//   return (
//     <React.Fragment>
//       <NewTask onAddTask={taskAddHandler} />
//       <Tasks
//         items={tasks}
//         loading={isLoading}
//         error={error}
//         onFetch={fetchTasks}
//       />
//     </React.Fragment>
//   );
// }

// Another approach
function App() {
  const [tasks, setTasks] = useState([]);

  const {
    isLoading,
    error,
    sendRequest: fetchTasks, // alias
  } = useHttp();

  useEffect(() => {
    const transformTasks = (taskObj) => {
      const loadedTasks = [];

      for (const taskKey in taskObj) {
        console.log(taskKey);
        loadedTasks.push({ id: taskKey, text: taskObj[taskKey].text });
      }
      setTasks(loadedTasks);
    };

    fetchTasks(
      {
        url: "https://react-test-51d80-default-rtdb.firebaseio.com/tasks.json", //firebase - jitgupt93
      },
      transformTasks
    );
  }, [fetchTasks]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
