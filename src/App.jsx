import "./components/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Login";

function App() {
  return (
    <>
      <header className="bg-primary text-white text-start p-3">
        CypressTest App
      </header>
      <Login />
    </>
  );
}

export default App;
