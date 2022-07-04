import logo from "./logo.svg";
import "./App.css";
import stocks from "./stocks_up.jpeg";

function App() {
  return (
    <div>
      <div className="h-40"></div>
      <form class="mx-auto w-full max-w-xs bg-white border-4 border-blue-100 px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            Name
          </label>
          <input
            class="shadow appearance-none border-2 w-full py-2 px-3 text-gray-700 focus:outline-blue-200 focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Name"
          />
        </div>
        <div class="mb-6">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="password"
          >
            Email
          </label>
          <input
            class="shadow appearance-none border-2 w-full py-2 px-3 text-gray-700 mb-3 focus:outline-blue-200 focus:shadow-outline"
            id="email"
            type="email"
            placeholder="name@example.com"
          />
          <p class="text-red-500 text-xs italic">Placeholder</p>
        </div>
        <div class="flex items-center justify-between">
          <button
            class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
            type="button"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
