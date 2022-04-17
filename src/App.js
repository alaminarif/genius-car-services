import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./pages/Shared/Header/Header";
import About from "./pages/About/About";
import Home from "./pages/Home/Home/Home";
import Footer from "./pages/Shared/Footer/Footer";
import ServicesDetail from "./pages/Home/ServicesDetail/ServicesDetail";
import NotFount from "./pages/Shared/NotFount/NotFount";
import Login from "./pages/Login/Login/Login";
import Register from "./pages/Login/Register/Register";
import RequireAuth from "./pages/Login/RequireAuth/RequireAuth";
import Checkout from "./pages/Checkout/Checkout/Checkout";

function App() {
  // const auth = getAuth(app);
  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/service/:serviceId" element={<ServicesDetail></ServicesDetail>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route
          path="/checkout"
          element={
            <RequireAuth>
              <Checkout></Checkout>
            </RequireAuth>
          }
        ></Route>
        <Route path="*" element={<NotFount></NotFount>}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
