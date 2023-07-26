
import { useState, useEffect } from 'react';

function App() {
  const [message, setMessage] = useState('');

  // This useEffect hook will run once when the component mounts (is first displayed).
  useEffect(() => {
    // Here, you'll use the fetch function to send a request to the backend.
    // We'll ask the backend for the message by fetching the '/api/message' endpoint.
    fetch('http://localhost:5001/api/message')
      .then((response) => response.json())
      .then((data) => {
        // When the backend responds with data, we'll update the message state with the received message.
        setMessage(data.message);
      })
      .catch((error) => {
        // If there's an error, we can handle it here.
        console.log('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <p>{message}</p>
    </div>
  );
}

export default App;
