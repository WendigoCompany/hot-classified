import {
  BrowserRouter,
  HashRouter,
  Route,
  Routes,
  useParams,
} from "react-router-dom";
import Main_Page from "./Elements/Main Page/Page/MainPage";
import ReziseProvider from "./Context/Mobile";
import Profile from "./Elements/Profile/Page/Profile";

const Router =
  process.env.NODE_ENV === "development" ? BrowserRouter : HashRouter;

export const github_url =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000/"
    : "https://wendigocompany.github.io/hot-classified/";

export default function App() {
  return (
    <div>
      <ReziseProvider>
        <Router>
          <Routes>
            <Route
              strict
              exact
              element={<Main_Page></Main_Page>}
              path="/:page&:filter"
            ></Route>
            <Route
              strict
              exact
              element={<Main_Page></Main_Page>}
              path="/"
            ></Route>

            <Route
              strict
              exact
              element={<Profile></Profile>}
              path="/profile:id"
            ></Route>
            <Route
              strict
              exact
              element={<Profile></Profile>}
              path="/profile"
            ></Route>
          </Routes>
        </Router>
      </ReziseProvider>
    </div>
  );
}
