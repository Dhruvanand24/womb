import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import MyRoutes from './routes/routes.js';



function App() {
  
  return (
    <MyRoutes />
  );
}

export default App;
