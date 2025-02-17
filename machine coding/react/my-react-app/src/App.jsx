import "./App.css";
import StarComponent from "./components/startComponent";
import ToastComponent from "./components/reactToast";
import Pagination from "./components/pagination";
import ReactTabs from "./components/tabForm";

function App() {
  return (
    <div >
      {/* <StarComponent starCount={10} /> */}
      {/* <ToastComponent starCount={10} /> */}
      {/* <Pagination /> */}
      <ReactTabs/>
    </div>
  );
}

export default App;
