
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
        { key: '3-1', label: 'Units' },
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
        { key: '4-6', label: 'Production' },
      ]
    },
    {
      key: '5', 
      icon: <LocalShippingIcon />, 
      label: 'Accounts & Bank', 
      children: [
        { key: '5-1', label: 'Commercial' },
        { key: '5-2', label: 'General' },
      ]
    },
    { key: '6', icon: <InsertChartIcon />, label: 'Party List' },
    { key: '7', icon: <NotificationsNoneIcon />, label: 'HRM Management' },
    { key: '8', icon: <SettingsSystemDaydreamOutlinedIcon />, label: 'Party Due List' },
    { key: '9', icon: <PsychologyOutlinedIcon />, label: 'Loss Profit' },
    { key: '10', icon: <SettingsApplicationsIcon />, label: 'Reports' },
    { key: '11', icon: <AccountCircleOutlinedIcon />, label: 'Roles and Permission' },
    { key: '12', icon: <ExitToAppIcon />, label: 'Logout' },
  ];

  
  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
 
    
    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
      {menuItems.map((item) => (
        item.children ? (
          <Menu.SubMenu key={item.key} icon={item.icon} title={item.label}>
            {item.children.map((child) => (
              <Menu.Item key={child.key}>
                {child.link ? <Link to={child.link}>{child.label}</Link> : child.label}
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
