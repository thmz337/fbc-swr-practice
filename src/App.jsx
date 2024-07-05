import useSWR from "swr";
import "./App.css";

const fetcher = (url, headers) =>
  fetch(url, { headers })
    .then((res) => res.json())
    .then((json) => json.description);

function App() {
  const url = "https://httpstat.us/200?sleep=2000";
  const headers = { Accept: "application/json" };

  const { data, error, isLoading } = useSWR([url, headers], ([url, headers]) =>
    fetcher(url, headers)
  );

  if (error) return <div>Failed to load.</div>;
  if (isLoading) return <div>Loading...</div>;

  return <>{data && <p>Status : {data}</p>}</>;
}

export default App;
