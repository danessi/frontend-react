import { useState, useEffect } from 'react';
import axios from 'axios';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(null);

  // Usamos useEffect para hacer la llamada a la API al cargar el componente
  useEffect(() => {
    axios
      .get('http://localhost:8000/api/test') // Aquí va la URL de tu backend
      .then((response) => {
        setData(response.data); // Asignamos los datos obtenidos a la variable de estado
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      {/* Aquí mostramos los datos que obtenemos de la API */}
      <div className="api-response">
        {data ? (
          <pre>{JSON.stringify(data, null, 2)}</pre>
        ) : (
          <p>Loading data from API...</p>
        )}
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more!
      </p>
    </>
  );
}

export default App;
