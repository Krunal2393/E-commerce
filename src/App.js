import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

import Navbar from "./Components/Navbar";


import Homepage from "./pages/Homepage/Homepage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Homepage/>
      

    </div>
  );
}

export default App;
