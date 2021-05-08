const Rooms = ({ currentRoom, setShowListMenu, setCurrentRoom }) => {
    const handleRoomChange = (room) => { //updates the current room to the one selected 
      setCurrentRoom(room);
      setShowListMenu(false);
    };
    return (
      <div className="rooms">
        <h2>Infinity Guantlet Chat Rooms</h2>
        <ul>
          <li
            onClick={() => {
              handleRoomChange("Avengers Assemble!");
            }}
            className={currentRoom === "Avengers Assemble!" ? "active" : ""}
          >
          Avengers Assemble!
          </li>
          
          <li
            onClick={() => {
              handleRoomChange("Space Stone");
            }}
            className={currentRoom === "Space Stone" ? "active" : ""}
          >
          Space Stone
          </li>
          
          <li
            onClick={() => {
              handleRoomChange("Reality Stone");
            }}
            className={currentRoom === "Reality Stone" ? "active" : ""}
          >
          Reality Stone
          </li>
          
          <li
            onClick={() => {
              handleRoomChange("Power Stone");
            }}
            className={currentRoom === "Power Stone" ? "active" : ""}
          >
          Power Stone
          </li>
         
          <li
            onClick={() => {
              handleRoomChange("Mind Stone");
            }}
            className={currentRoom === "Mind Stone" ? "active" : ""}
          >
            Mind Stone
          </li>

          <li
            onClick={() => {
              handleRoomChange("Soul Stone");
            }}
            className={currentRoom === "Soul Stone" ? "active" : ""}
          >
            Soul Stone
          </li>

          <li
            onClick={() => {
              handleRoomChange("Time Stone");
            }}
            className={currentRoom === "Time Stone" ? "active" : ""}
          >
            Time Stone
          </li>
        </ul>
      </div>
    );
  };
  
  export default Rooms;