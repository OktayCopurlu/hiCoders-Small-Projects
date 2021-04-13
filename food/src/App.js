import "./App.css";
import TopNavbar from "./components/navbar";
import product from "./components/product.json";


function App() {
  return (
    <div className="App">
      <TopNavbar product={product} />
    </div>
  );
}

export default App;
