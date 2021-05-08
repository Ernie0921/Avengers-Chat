import { useState } from "react";
import Logout from "./Logout";
import Rooms from "./Rooms";

const NavBar = ({ user, currentRoom, setCurrentRoom }) => {
  const [showListMenu, setShowListMenu] = useState(false);

  return (
    <nav>
      <h1>
        {user ? (
            <>
            Chat room: <strong>{currentRoom}</strong>
            </>
            ) : (
                <img src="https://www.pinclipart.com/picdir/middle/565-5655297_marvel-comics-logo-vector-clipart.png" alt="marvel logo" />
                
                )
        }
      </h1>
      {user ? (
        <>
          <button
            className="menu"
            onClick={() => {
              setShowListMenu(!showListMenu);
            }}
          >
            <img
              src="https://www.pinclipart.com/picdir/middle/360-3607914_infinity-gauntlet-clipart.png"
              alt="menu"
              style={{ opacity: showListMenu ? 0 : 1 }}
            />
            <img
              src="https://i.pinimg.com/originals/03/2f/ce/032fce11a0fb8e87c65b3369a6443674.png"
              alt="menu-cross"
              style={{ opacity: showListMenu ? 1 : 0 }}
            />
          </button>
          <ul
            className="list-menu"
            style={{ top: showListMenu && user ? "10vh" : "-100vh" }}
          >
            <li>
              <Logout setShowListMenu={setShowListMenu} />
            </li>
            <li>
              <Rooms
                currentRoom={currentRoom}
                setCurrentRoom={setCurrentRoom}
                setShowListMenu={setShowListMenu}
              />
            </li>
          </ul>
        </>
      ) : null}
    </nav>
  );
};

export default NavBar;