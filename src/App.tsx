import { useRoutes } from "react-router-dom";
import { routes } from "./routes/Routes";
import styles from "./App.module.scss";

function App() {
  const elements = useRoutes(routes);
  return elements;
}

export default App;
