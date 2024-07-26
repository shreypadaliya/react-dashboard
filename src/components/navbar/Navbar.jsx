import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
// import { DarkModeContext } from "../../context/darkModeContext";
// import { useContext } from "react";

const Navbar = () => {
//   const { dispatch } = useContext(DarkModeContext);

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon />
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon className="icon" />
            English
          </div>
          <div className="item">
            <DarkModeOutlinedIcon
              className="icon"
            //   onClick={() => dispatch({ type: "TOGGLE" })}
            />
          </div>
          <div className="item">
            <FullscreenExitOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <NotificationsNoneOutlinedIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className="icon" />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <ListOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <img
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

// import React from 'react';
// import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
// import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
// import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
// import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
// import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
// import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
// import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
// // import { DarkModeContext } from "../../context/darkModeContext";
// // import { useContext } from "react";

// const Navbar = () => {
// //   const { dispatch } = useContext(DarkModeContext);

//   return (
//     <div style={{ height: '50px', borderBottom: '0.5px solid rgb(231, 228, 228)', display: 'flex', alignItems: 'center', fontSize: '14px', color: '#555' }}>
//       <div style={{ width: '100%', padding: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//         <div style={{ display: 'flex', alignItems: 'center', border: '0.5px solid lightgray', padding: '3px' }}>
//           <input type="text" placeholder="Search..." style={{ border: 'none', outline: 'none', background: 'transparent', fontSize: '12px' }} />
//           <SearchOutlinedIcon />
//         </div>
//         <div style={{ display: 'flex', alignItems: 'center' }}>
//           <div style={{ display: 'flex', alignItems: 'center', marginRight: '20px', position: 'relative' }}>
//             <LanguageOutlinedIcon style={{ fontSize: '20px' }} />
//             <span style={{ marginLeft: '5px' }}>English</span>
//           </div>
//           <div style={{ display: 'flex', alignItems: 'center', marginRight: '20px', position: 'relative' }}>
//             <DarkModeOutlinedIcon
//               style={{ fontSize: '20px' }}
//               // onClick={() => dispatch({ type: "TOGGLE" })}
//             />
//           </div>
//           <div style={{ display: 'flex', alignItems: 'center', marginRight: '20px', position: 'relative' }}>
//             <FullscreenExitOutlinedIcon style={{ fontSize: '20px' }} />
//           </div>
//           <div style={{ display: 'flex', alignItems: 'center', marginRight: '20px', position: 'relative' }}>
//             <NotificationsNoneOutlinedIcon style={{ fontSize: '20px' }} />
//             <div style={{ width: '15px', height: '15px', backgroundColor: 'red', borderRadius: '50%', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', fontWeight: 'bold', position: 'absolute', top: '-5px', right: '-5px' }}>1</div>
//           </div>
//           <div style={{ display: 'flex', alignItems: 'center', marginRight: '20px', position: 'relative' }}>
//             <ChatBubbleOutlineOutlinedIcon style={{ fontSize: '20px' }} />
//             <div style={{ width: '15px', height: '15px', backgroundColor: 'red', borderRadius: '50%', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', fontWeight: 'bold', position: 'absolute', top: '-5px', right: '-5px' }}>2</div>
//           </div>
//           <div style={{ display: 'flex', alignItems: 'center', marginRight: '20px', position: 'relative' }}>
//             <ListOutlinedIcon style={{ fontSize: '20px' }} />
//           </div>
//           <div style={{ display: 'flex', alignItems: 'center', marginRight: '20px', position: 'relative' }}>
//             <img
//               src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
//               alt=""
//               style={{ width: '30px', height: '30px', borderRadius: '50%' }}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
