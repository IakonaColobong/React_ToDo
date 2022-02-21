// import logo from './logo.svg';
import "./App.css";
import Navigation from "./Components/Navigation";
import Bootstrap from "./Components/Bootstrap/Bootstrap";
import Todo from "./Components/Todo/Todo";
import Categories from "./Components/Categories/Categories";
import Login from "./Components/Auth/Login"
import NotFound from "./Components/NotFound";
import { AuthProvider } from "./Components/Contexts/AuthContext";
import Footer from "./Components/Footer";
import ProtectedRoute from "./Components/ProtectedRoute";



import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
      <Navigation />
        <Routes>
        <Route path="/" element={<Login />} />
        <Route path="login" element={<Login />} />
        <Route path="todo" element={<Todo />} />
        <Route path="categories" element={<ProtectedRoute><Categories /></ProtectedRoute>} />
        <Route path="bootstrap" element={<ProtectedRoute><Bootstrap /></ProtectedRoute>} />
        <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router> 
      </AuthProvider>
    </div>
  );
}
export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
