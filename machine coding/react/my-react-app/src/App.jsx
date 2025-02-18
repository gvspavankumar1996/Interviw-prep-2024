import "./App.css";
import StarComponent from "./components/startComponent";
import ToastComponent from "./components/reactToast";
import Pagination from "./components/pagination";
import ReactTabsForm from "./components/tabForm";

function App() {
  return (
    <div >
      {/* <StarComponent starCount={10} /> */}
      {/* <ToastComponent starCount={10} /> */}
      {/* <ReactTabsForm/> */}
      <Pagination />
    </div>
  );
}

export default App;
