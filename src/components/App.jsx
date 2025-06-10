import "../styles/App.scss";
import { Route, Routes } from "react-router";
import Landing from "./Pages/Landing";
import CharacterDetail from "./Pages/CharacterDetail";
import Header from "./Layout/Header";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/characterDetail" element={<CharacterDetail />}></Route>
        </Routes>
      </main>
    </>
  );
}
export default App;
