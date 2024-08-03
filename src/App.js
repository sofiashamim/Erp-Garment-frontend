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
import { useState } from "react";
import { Content, Header } from "antd/es/layout/layout";
import { Layout } from "antd";
import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/navbar/Navbar";
import UnitList from "./components/ManageInventory/UnitList";
import Designations from "./components/HRMmanagement/Designations";
import Employees from "./components/HRMmanagement/Employees";
import AddEmployee from "./components/HRMmanagement/AddEmployee";

import PayS from "./components/HRMmanagement/PayS";
import SalaryList from "./components/HRMmanagement/SalaryList";
import AddAccountant from "./components/userManagement/AddAccountant";




function App() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div >
      <BrowserRouter>
      <Layout>
      <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      <Layout>
        <Header style={{backgroundColor:"white"}}>
     
        <Navbar  collapsed={collapsed} setCollapsed={setCollapsed} />
          
        </Header>
      <Content>

        <Routes>
          <Route path="/">
            <Route index element={<Home collapsed={collapsed} setCollapsed={setCollapsed} />} />
            <Route path="login" element={<Login />} />
        
            <Route path="/manageInventory" element={<ManageInventory />} />
            <Route path="/accessory" element={<AccessoryList />} />
            <Route path="/createUnit" element={<CreateUnitt />} />
            <Route path="/unit" element={<UnitList />} />
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
            <Route path="/addacc" element={<AddAccountant />} />
            <Route path="/designation" element={<Designations />} />
            <Route path="/pays" element={<PayS />} />
            <Route path="/employee" element={<Employees />} />
            <Route path="/addemp" element={<AddEmployee />} />
            <Route path="/salarylist" element={<SalaryList />} />
            
           
          </Route>
        </Routes>
        </Content>
        </Layout>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
