import { LoginPage } from "./Pages/LoginPage/Login";
import { SignUP_Page } from "./Pages/Sign_Up";
import { Routes ,Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
     <Route index element={<LoginPage />} />
     <Route path="SignUP_Page" element={<SignUP_Page />} />

     </Routes>
    </div>
  );
}

export default App;
