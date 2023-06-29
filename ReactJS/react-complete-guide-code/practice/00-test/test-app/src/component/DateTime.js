import { useState, useEffect } from "react";

const DateTime = () => {
  const [date, setDate] = useState("00 : 00 : 00");

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      // const dateToShow = `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`;
      const dateToShow = date.toLocaleString();
      setDate(dateToShow);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <p>{date}</p>;
};
export default DateTime;
