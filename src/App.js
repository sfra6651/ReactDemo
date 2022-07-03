import logo from "./logo.svg";
import "./App.css";
import stocks from "./stocks_up.jpeg";

function App() {
  return (
    <div className="App h-screen flex flex-col justify-center items-center">
      <form autoComplete="Off">
        <div class="mb-6 object-center">
          <input
            type="name"
            id="name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg px-5 py-2 hover:bg-gray-100"
            placeholder="Name"
            required
          />
        </div>
        <div class="mb-6">
          <input
            type="email"
            id="email"
            class="p3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg px-5 py-2 hover:bg-gray-100"
            placeholder="Email"
            required
          />
        </div>
        <button
          type="submit"
          class=" w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
