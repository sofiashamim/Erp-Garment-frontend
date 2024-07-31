import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ManageInventory from "./components/ManageInventory/ManageInventory";
import AccessoryList from "./components/ManageInventory/AccessoryList";
import CreateUnitt from "./components/ManageInventory/CreateUnitt";
import CreateInventory from "./components/ManageInventory/CreateAccessory";
import CreateAccessory from "./components/ManageInventory/CreateAccessory";
import CreateAccOrder from "./components/ManageInventory/CreateAccOrder";
import AccorderList from "./components/ManageInventory/AccorderList";
import Admin from "./components/userManagement/Admin";
import AddNewAdmin from "./components/userManagement/AddNewAdmin";
import Buyer from "./components/userManagement/Buyer";
import AddBuyer from "./components/userManagement/AddBuyer";
import Merchandiser from "./components/userManagement/Merchandiser";
import AddMerchandiser from "./components/userManagement/AddMerchandiser";
import CommercialList from "./components/userManagement/CommercialList";
import AddCommercial from "./components/userManagement/AddCommercial";
import Accountant from "./components/userManagement/Accountant";

function App() {

  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
        
            <Route path="/manageInventory" element={<ManageInventory />} />
            <Route path="/accessory" element={<AccessoryList />} />
            <Route path="/createUnit" element={<CreateUnitt />} />
            <Route path="/createAccess" element={<CreateAccessory />} />
            <Route path="/createAccorder" element={<CreateAccOrder />} />
            <Route path="/accOrderlist" element={<AccorderList />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/newAdmin" element={<AddNewAdmin />} />
            <Route path="/buyer" element={<Buyer />} />
            <Route path="/addBuyer" element={<AddBuyer />} />
            <Route path="/merchandiser" element={<Merchandiser />} />
            <Route path="/addMerch" element={<AddMerchandiser />} />
            <Route path="/commercial" element={<CommercialList />} />
            <Route path="/addComm" element={<AddCommercial />} />
            <Route path="/accountant" element={<Accountant />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;