import "./App.css";
import app from "./firebase.init";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const auth = getAuth(app);
console.log("");

function App() {
  const provider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="App">
      <button onClick={handleGoogleSignIn}>Google Sign in</button>
    </div>
  );
}

export default App;
