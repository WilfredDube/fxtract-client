import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { styled } from "@mui/material/styles";

import "./App.css";
import NavBar from "./components/common/NavBar";

const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

function App() {
  return (
    <div className="App">
      <NavBar />
      <Offset />
      <header className="App-header">Something</header>
    </div>
  );
}

export default App;
