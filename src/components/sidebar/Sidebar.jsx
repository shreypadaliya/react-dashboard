import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
// import { DarkModeContext } from "../../context/darkModeContext";
// import { useContext } from "react";

const Sidebar = () => {
//   const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">lamadmin</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Products</span>
            </li>
          </Link>
          <li>
            <CreditCardIcon className="icon" />
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingIcon className="icon" />
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <InsertChartIcon className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNoneIcon className="icon" />
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <SettingsSystemDaydreamOutlinedIcon className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
        //   onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
        //   onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;


// import React from 'react';
// import DashboardIcon from "@mui/icons-material/Dashboard";
// import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
// import LocalShippingIcon from "@mui/icons-material/LocalShipping";
// import CreditCardIcon from "@mui/icons-material/CreditCard";
// import StoreIcon from "@mui/icons-material/Store";
// import InsertChartIcon from "@mui/icons-material/InsertChart";
// import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
// import ExitToAppIcon from "@mui/icons-material/ExitToApp";
// import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
// import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
// import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
// import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
// import { Link } from "react-router-dom";
// // import { DarkModeContext } from "../../context/darkModeContext";
// // import { useContext } from "react";

// const Sidebar = () => {
// //   const { dispatch } = useContext(DarkModeContext);
//   return (
//     <div style={{ flex: 1, borderRight: '0.5px solid rgb(230, 227, 227)', minHeight: '100vh', backgroundColor: 'white' }}>
//       <div style={{ height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//         <Link to="/" style={{ textDecoration: "none" }}>
//           <span style={{ fontSize: '20px', fontWeight: 'bold', color: '#6439ff' }}>lamadmin</span>
//         </Link>
//       </div>
//       <hr style={{ height: 0, border: '0.5px solid rgb(230, 227, 227)' }} />
//       <div style={{ paddingLeft: '10px' }}>
//         <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
//           <p style={{ fontSize: '10px', fontWeight: 'bold', color: '#999', marginTop: '15px', marginBottom: '5px' }}>MAIN</p>
//           <li style={{ display: 'flex', alignItems: 'center', padding: '5px', cursor: 'pointer' }}>
//             <DashboardIcon style={{ fontSize: '18px', color: '#7451f8' }} />
//             <span style={{ fontSize: '13px', fontWeight: 600, color: '#888', marginLeft: '10px' }}>Dashboard</span>
//           </li>
//           <p style={{ fontSize: '10px', fontWeight: 'bold', color: '#999', marginTop: '15px', marginBottom: '5px' }}>LISTS</p>
//           <Link to="/users" style={{ textDecoration: "none" }}>
//             <li style={{ display: 'flex', alignItems: 'center', padding: '5px', cursor: 'pointer' }}>
//               <PersonOutlineIcon style={{ fontSize: '18px', color: '#7451f8' }} />
//               <span style={{ fontSize: '13px', fontWeight: 600, color: '#888', marginLeft: '10px' }}>Users</span>
//             </li>
//           </Link>
//           <Link to="/products" style={{ textDecoration: "none" }}>
//             <li style={{ display: 'flex', alignItems: 'center', padding: '5px', cursor: 'pointer' }}>
//               <StoreIcon style={{ fontSize: '18px', color: '#7451f8' }} />
//               <span style={{ fontSize: '13px', fontWeight: 600, color: '#888', marginLeft: '10px' }}>Products</span>
//             </li>
//           </Link>
//           <li style={{ display: 'flex', alignItems: 'center', padding: '5px', cursor: 'pointer' }}>
//             <CreditCardIcon style={{ fontSize: '18px', color: '#7451f8' }} />
//             <span style={{ fontSize: '13px', fontWeight: 600, color: '#888', marginLeft: '10px' }}>Orders</span>
//           </li>
//           <li style={{ display: 'flex', alignItems: 'center', padding: '5px', cursor: 'pointer' }}>
//             <LocalShippingIcon style={{ fontSize: '18px', color: '#7451f8' }} />
//             <span style={{ fontSize: '13px', fontWeight: 600, color: '#888', marginLeft: '10px' }}>Delivery</span>
//           </li>
//           <p style={{ fontSize: '10px', fontWeight: 'bold', color: '#999', marginTop: '15px', marginBottom: '5px' }}>USEFUL</p>
//           <li style={{ display: 'flex', alignItems: 'center', padding: '5px', cursor: 'pointer' }}>
//             <InsertChartIcon style={{ fontSize: '18px', color: '#7451f8' }} />
//             <span style={{ fontSize: '13px', fontWeight: 600, color: '#888', marginLeft: '10px' }}>Stats</span>
//           </li>
//           <li style={{ display: 'flex', alignItems: 'center', padding: '5px', cursor: 'pointer' }}>
//             <NotificationsNoneIcon style={{ fontSize: '18px', color: '#7451f8' }} />
//             <span style={{ fontSize: '13px', fontWeight: 600, color: '#888', marginLeft: '10px' }}>Notifications</span>
//           </li>
//           <p style={{ fontSize: '10px', fontWeight: 'bold', color: '#999', marginTop: '15px', marginBottom: '5px' }}>SERVICE</p>
//           <li style={{ display: 'flex', alignItems: 'center', padding: '5px', cursor: 'pointer' }}>
//             <SettingsSystemDaydreamOutlinedIcon style={{ fontSize: '18px', color: '#7451f8' }} />
//             <span style={{ fontSize: '13px', fontWeight: 600, color: '#888', marginLeft: '10px' }}>System Health</span>
//           </li>
//           <li style={{ display: 'flex', alignItems: 'center', padding: '5px', cursor: 'pointer' }}>
//             <PsychologyOutlinedIcon style={{ fontSize: '18px', color: '#7451f8' }} />
//             <span style={{ fontSize: '13px', fontWeight: 600, color: '#888', marginLeft: '10px' }}>Logs</span>
//           </li>
//           <li style={{ display: 'flex', alignItems: 'center', padding: '5px', cursor: 'pointer' }}>
//             <SettingsApplicationsIcon style={{ fontSize: '18px', color: '#7451f8' }} />
//             <span style={{ fontSize: '13px', fontWeight: 600, color: '#888', marginLeft: '10px' }}>Settings</span>
//           </li>
//           <p style={{ fontSize: '10px', fontWeight: 'bold', color: '#999', marginTop: '15px', marginBottom: '5px' }}>USER</p>
//           <li style={{ display: 'flex', alignItems: 'center', padding: '5px', cursor: 'pointer' }}>
//             <AccountCircleOutlinedIcon style={{ fontSize: '18px', color: '#7451f8' }} />
//             <span style={{ fontSize: '13px', fontWeight: 600, color: '#888', marginLeft: '10px' }}>Profile</span>
//           </li>
//           <li style={{ display: 'flex', alignItems: 'center', padding: '5px', cursor: 'pointer' }}>
//             <ExitToAppIcon style={{ fontSize: '18px', color: '#7451f8' }} />
//             <span style={{ fontSize: '13px', fontWeight: 600, color: '#888', marginLeft: '10px' }}>Logout</span>
//           </li>
//         </ul>
//       </div>
//       <div style={{ display: 'flex', alignItems: 'center', margin: '10px' }}>
//         <div
//           style={{ width: '20px', height: '20px', borderRadius: '5px', border: '1px solid #7451f8', cursor: 'pointer', margin: '5px', backgroundColor: 'whitesmoke' }}
//           // onClick={() => dispatch({ type: "LIGHT" })}
//         ></div>
//         <div
//           style={{ width: '20px', height: '20px', borderRadius: '5px', border: '1px solid #7451f8', cursor: 'pointer', margin: '5px', backgroundColor: '#333' }}
//           // onClick={() => dispatch({ type: "DARK" })}
//         ></div>
//         <div
//           style={{ width: '20px', height: '20px', borderRadius: '5px', border: '1px solid #7451f8', cursor: 'pointer', margin: '5px', backgroundColor: 'darkblue' }}
//           // onClick={() => dispatch({ type: "DARK" })}
//         ></div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;
