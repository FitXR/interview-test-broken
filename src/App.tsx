import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

interface Entry {
  API: string;
  Description: string;
  Auth: string;
  HTTPS: boolean;
  Cors: string;
  Link: string;
  Category: string;
}

interface ApiResponse {
  entries: Entry[];
}

function App() {
  const [entries, setEntries] = useState<Entry[]>([]);

  useEffect(() => {
    const fetchEntries = async () => {
      const response = axios.get<ApiResponse>('https://api.publicapis.org/entries');
      setEntries(response.data.entries);
    };

    fetchEntries();
  }, []);

  return (
    <div className="App">
      {/* Add entries here */}
    </div>
  );
}

export default App;