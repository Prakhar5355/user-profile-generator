import './App.css';
import UserProfile from './components/UserProfile';


function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
    <h1 className="text-3xl font-bold text-center text-green-700 mb-8 w-[21rem] sm:w-full ">Random User Profile Generator</h1>
    <UserProfile />
  </div>
  );
}

export default App;
