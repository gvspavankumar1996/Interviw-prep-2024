import "./App.css";
import StarComponent from "./components/startComponent";
import ToastComponent from "./components/reactToast";
import Pagination from "./components/pagination";

function App() {
  return (
    <div>
      {/* <StarComponent starCount={10} /> */}
      {/* <ToastComponent starCount={10} /> */}
      <Pagination />
    </div>
  );
}

export default App;
