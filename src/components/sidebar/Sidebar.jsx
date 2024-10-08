
import { Menu } from 'antd';
import Sider from 'antd/es/layout/Sider';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import StoreIcon from '@mui/icons-material/Store';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

const Sidebar = (props) => {
  const { collapsed, setCollapsed } = props;

  const menuItems = [
    { key: '1', icon: <DashboardIcon />, label: 'Dashboard', link: '/' },
    { key: '2', icon: <PersonOutlineIcon />, label: 'Order Management', link: '/users' },
    {
      key: '3', 
      icon: <StoreIcon />, 
      label: 'Manage Inventory', 
      children: [
        { key: '3-1', label: 'Units',link:"/unit" },
        { key: '3-2', label: 'Accessory List',link:"/accessory" },
        { key: '3-3', label: 'Accessories Orders',link:"/accOrderlist" },
      ]
    },
    {
      key: '4', 
      icon: <CreditCardIcon />, 
      label: 'User Management', 
      children: [
        { key: '4-1', label: 'Admin',link:"/admin" },
        { key: '4-2', label: 'Buyer',link:"/buyer" },
        { key: '4-3', label: 'Merchandiser',link:"/merchandiser" },
        { key: '4-4', label: 'Commercial',link:"/commercial" },
        { key: '4-5', label: 'Accountant',link:"/accountant" },
        { key: '4-6', label: 'Production',link:"/production" },
      ]
    },
    {
      key: '5', 
      icon: <LocalShippingIcon />, 
      label: 'Accounts & Bank', 
      children: [
        { key: '5-1', label: 'Bank Account',link:"/bankAcc" },
        { key: '5-2', label: 'Cash In Hand',link:"/cash" },
        { key: '5-3', label: 'Cheques',link:"/cheques" },
      ]
    },
    { key: '6', icon: <InsertChartIcon />, label: 'Party List' },

    { key: '7',
       icon: <NotificationsNoneIcon />,
        label: 'HRM Management',
        children: [
          { key: '7-1', label: 'Designation', link:"/designation" },
          { key: '7-2', label: 'Employee',link:"/employee" },
          { key: '7-3', label: 'Salaries',link:"/salarylist" },
        ]
      },
    { key: '8', icon: <SettingsSystemDaydreamOutlinedIcon />, label: 'Party Due List' },
    { key: '9', icon: <PsychologyOutlinedIcon />, label: 'Loss Profit',
      children: [
        { key: '9-1', label: 'lossprofit', link:"/lossprofit" },
        { key: '9-2', label: 'expense-list',link:"/expList" },
        { key: '9-3', label: 'lossprofit',link:"/hhhhhh" },
      ]
     },
    { key: '10', icon: <SettingsApplicationsIcon />, label: 'Reports' },
    { key: '11', icon: <AccountCircleOutlinedIcon />, label: 'Roles and Permission' },
    { key: '12', icon: <ExitToAppIcon />, label: 'Logout' },
  ];

  
  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div style={{padding:"5px"}}>
 <img src="https://erpsoftware.acnoo.com/assets/images/logo/backend_logo.svg" alt="Logo"/>

      </div>
    
    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
      {menuItems.map((item) => (
        item.children ? (
          <Menu.SubMenu key={item.key} icon={item.icon} title={item.label}>
            {item.children.map((child) => (
              <Menu.Item key={child.key}>
                {child.link ? <Link style={{textDecoration:"none"}} to={child.link}>{child.label}</Link> : child.label}
              </Menu.Item>
            ))}
          </Menu.SubMenu>
        ) : (
          <Menu.Item key={item.key} icon={item.icon}>
            {item.link ? <Link to={item.link}>{item.label}</Link> : item.label}
          </Menu.Item>
        )
      ))}
    </Menu>
   
  </Sider>
  );
};

export default Sidebar;
