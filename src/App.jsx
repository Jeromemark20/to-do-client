import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import dotenv from 'dotemv';
dotenv.config();

function App() {
  const navigate = useNavigate();

  const [username, setUsername] = useState(' ');
  const [password, setPassword] = useState(' ');

  const [showError, setShowError] = useState(false);

  const handleLogin = async () => {
    await axios.post('http://localhost:3000/get-titles', { username, password })
      .then((response) => {
        if (response.data.exist) {
          setShowError(false);
          navigate('/todo');
        }
        else {
          setShowError(true);
        }
      });
  }

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-opacity-50">
        <div className="w-xl h-[500px] bg-teal-400 flex flex-col justify-center p-5 gap-5">
          <h1 className="text-5xl mx-10 py-10">LOGIN</h1>

          {
            showError &&
            <div className="bg-red-200 text-red-500 p-3 rounded-lg font-medium">
              Invalid username or password
            </div>
          }
          <div className="flex flex-col">
            <label htmlFor="username">Username: {username} </label>
            <input type="text" className="outline" onChange={(e) => setUsername(e.target.value)} />
          </div>

          <div className="flex flex-col">
            <label htmlFor="password">Password: {password} </label>
            <input type="password" className="outline" onChange={(e) => setPassword(e.target.value)} />
          </div>

          <button type="button" onClick={handleLogin} className="bg-teal-200 text-pink py-3 font-medium text-xl">LOGIN</button>
        </div>
      </div>
    </>
  )
}
export default App
