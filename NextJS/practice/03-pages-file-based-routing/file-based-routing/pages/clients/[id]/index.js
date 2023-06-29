import { useRouter } from "next/router";

function ClientsPage() {
  const router = useRouter();

  console.log(router.query);

  const loadProjectHandler = () => {
    // load data...
    // router.push("clients/max/projecta");
    router.push({
      pathname: "/clients/[id]/[clientprojectid]",
      query: { id: "max", clientprojectid: "projecta" },
    });
  };

  return (
    <div>
      <h1>The Projects of a given client</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
}

export default ClientsPage;
