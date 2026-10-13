import {Routes, Route} from "react-router-dom";
import './App.css';
import LobbyScreen from "./screens/Lobby";
import RoomPage from "./screens/Room";
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<LobbyScreen />} />
      <Route path="/room/:roomId" element={<RoomPage />} />
    </Routes>
    </div>
  );
}

export default App;

