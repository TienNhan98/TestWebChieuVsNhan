import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/image/LogoMovie.jpg";
import { useSelector } from "react-redux";
import logoMember from "../../assets/image/LogoMember.png";
import { Button, Dropdown, Menu } from "antd";

//   const handleMenuClick = (e) => {
//     if (e.key === "logout") {
//       console.log("Logging out...");
//       // Add your logout logic here
//     }
//   };

//   const menu = (
//     <Menu onClick={handleMenuClick}>
//       <Menu.Item key="logout">Đăng xuất</Menu.Item>
//     </Menu>
//   );

//   return (
//     <Dropdown overlay={menu} placement="bottomRight">
//       <Button>
//         <div className="flex items-center">
//           <img
//             className="rounded rounded-circle border-2 border-red-800 bg-black"
//             src={logoMember}
//             width={50}
//             alt=""
//           />
//           <strong className="text-2xl ml-2">Nguyễn Tiến Nhân</strong>
//         </div>
//       </Button>
//     </Dropdown>
//   );
// };

export default function Header() {
  let user = useSelector((state) => state.userSlice.dataLogin);
  // let handleLogout = () => {
  //   localStorage.removeItem("USER_LOGIN");
  //   window.location.href = "/login";
  // };
  let renderMenu = () => {
    const handleMenuClick = (e) => {
      if (e.key === "logout") {
        // console.log("Logging out...");
        localStorage.removeItem("USER_LOGIN");
        window.location.href = "/login";
        // Add your logout logic here
      }
    };
    const menu = (
      <Menu onClick={handleMenuClick}>
        <Menu.Item key="logout">Đăng xuất</Menu.Item>
      </Menu>
    );
    if (user) {
      return (
        <>
          <Dropdown overlay={menu} placement="bottomRight">
            <Button className="h-50">
              <div className="flex items-center">
                <img
                  width={50}
                  className="rounded rounded-circle border-2 border-red-800 bg-black"
                  src={logoMember}
                  alt=""
                />
                <strong className="text-2xl ml-2">{user.hoTen}</strong>
              </div>
            </Button>
          </Dropdown>
        </>
      );
    } else {
      return (
        <NavLink
          to="/login"
          style={{ fontWeight: "bold", fontFamily: "serif", fontSize: 18 }}
          className=" rounded bg-pink-200 text-black border-black border-2 py-3 px-4 no-underline"
        >
          Đăng Nhập
        </NavLink>
      );
    }
  };
  return (
    <div className="bg-blue-200 bg-opacity-90">
      <div className="container h-50 justify-between flex items-center">
        <NavLink to="/">
          <img
            className="rounded rounded-circle"
            src={logo}
            width={150}
            alt="LogoMovie"
          />
        </NavLink>
        <div>{renderMenu()}</div>
      </div>
    </div>
  );
}
