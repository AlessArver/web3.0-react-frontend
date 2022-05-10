import { NavBar, Welcome, Services, Transactions } from "./components";

const App = () => {
  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-r from-indigo-500 to-blue-500">
        <NavBar />
        <Welcome />
        <Services />
        <Transactions />
      </div>
    </div>
  );
};
export default App;
