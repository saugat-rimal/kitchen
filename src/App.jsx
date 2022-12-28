import { Page } from "./pages";
import { Category, Search } from "./container";
import Nav from "./components/Nav";

function App() {
  return (
    <div>
      <Nav />
      <Search />
      <Category />
      <Page />
    </div>
  );
}

export default App;
