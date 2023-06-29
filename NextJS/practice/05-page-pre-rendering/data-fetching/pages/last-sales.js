import { useEffect, useState } from "react";

const LastSales = (props) => {
  const [sales, setSales] = useState(props.sales);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://Next.js-project-54eac-default-rtdb.firebaseio.com/sales.json"
    )
      .then((response) => response.json())
      .then((data) => {
        const transformedSales = [];
        for (const key in data) {
          transformedSales.push({
            id: key,
            username: data[key].username,
            volume: data[key].volume,
          });
        }
        setSales(transformedSales);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!sales) {
    return <p>No data yet</p>;
  }

  return (
    <ul>
      {sales.map((sale) => (
        <li key={sale.id}>
          {sale.username} - ${sale.volume}
        </li>
      ))}
    </ul>
  );
};

export default LastSales;

// ****************************************** Combining pre-fetching with client-side fetching

export async function getStaticProps() {
  return fetch(
    "https://Next.js-project-54eac-default-rtdb.firebaseio.com/sales.json"
  )
    .then((response) => response.json())
    .then((data) => {
      const transformedSales = [];
      for (const key in data) {
        transformedSales.push({
          id: key,
          username: data[key].username,
          volume: data[key].volume,
        });
      }

      return { props: { sales: transformedSales }, revalidate: 10 };
    });
}

// ********************************************* Using swr hook : not working, need to fix
/* 
import { useEffect, useState } from "react";
import useSWR from "swr";

const url =
  "https://Next.js-project-54eac-default-rtdb.firebaseio.com/sales.json";

const LastSales = () => {
  const [sales, setSales] = useState();

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    "https://Next.js-project-54eac-default-rtdb.firebaseio.com/sales.json",
    fetcher
  );

  useEffect(() => {
    const transformedSales = [];
    for (const key in data) {
      transformedSales.push({
        id: key,
        username: data[key].username,
        volume: data[key].volume,
      });
    }
    setSales(transformedSales);
  }, [data]);

  if (!error) {
    return <p>Failed to load.</p>;
  }

  if (!data || !sales) {
    return <p>Loading...</p>;
  }

  return (
    <ul>
      {sales.map((sale) => (
        <li key={sale.id}>
          {sale.username} - ${sale.volume}
        </li>
      ))}
    </ul>
  );
};

export default LastSales;
*/
