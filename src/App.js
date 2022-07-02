import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App min-h-screen bg-slate-500">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(e);
        }}
      >
        <input name="email" type="email" />
        <button>Signup</button>
      </form>
    </div>
  );
}

export default App;
