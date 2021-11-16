import "./styles.css";

export default function App() {
 const rooms = [
    { room_type: "Queen", vacant_rooms: 5, price: 100 },
    { room_type: "Double", vacant_rooms: 3, price: 75 },
    { room_type: "Twin", vacant_rooms: 8, price: 60 }
  ];




  return (
    <div className="App">
      {/* <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2> */}
        <ol>
          {rooms.map(room => {
            return (
              <li style={{  }} key={room.room_type}>
                {room.room_type},
                {room.vacant_rooms},
                {room.price}
              </li>
            )
          })}
      </ol> 
    </div>
  );
}
