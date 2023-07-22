import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import Main_Page from "./Elements/Main Page/Page/MainPage";
import ReziseProvider from "./Context/Mobile";

const Router =
  process.env.NODE_ENV === "development" ? BrowserRouter : HashRouter;

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
              path="/"
            ></Route>
          </Routes>
        </Router>
      </ReziseProvider>
    </div>
  );
}
