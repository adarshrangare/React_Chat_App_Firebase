import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import NavBar from "./components/Header";
// import ChatBox from "./components/ChatBox";
import Welcome from "./components/Welcome";

function App() {
  const [user] = useAuthState(auth);
  return (
    <div className="App">
      <NavBar />
      {!user ? <Welcome /> : "<ChatBox />"}
    </div>
  );
}
export default App;