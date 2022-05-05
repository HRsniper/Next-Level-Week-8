import { Widget } from "./components/Widget";
import { api } from "./utils/axiosInstance";

export function App() {
  api.get("/").then((res) => {
    console.log(res.data);
  });

  return <Widget />;
}
