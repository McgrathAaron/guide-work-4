import { useState, useEffect } from 'react';
import axios from 'axios'; // Library to help me fetch api's

function JokeComponent() {
  const [joke, setJoke] = useState<string | null>(null);
  const [isJokeVisible, setIsJokeVisible] = useState(false);

  const fetchJoke = () => {
    axios
      .get('https://geek-jokes.sameerkumar.website/api?format=json') // this will fetch a random joke from the api
      .then((response) => {
        setJoke(response.data.joke);
        setIsJokeVisible(true);
      })
      .catch((error) => {
        console.error('Error fetching joke:', error);
      });
  };

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'j' || event.key === 'J') {
        fetchJoke();
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  useEffect(() => {

    if (isJokeVisible) {
      const timer = setTimeout(() => {
        setIsJokeVisible(false);
      }, 7000); // This will hide the joke for 7 seconds

      return () => clearTimeout(timer);
    }
  }, [isJokeVisible]);

  return (
    <div>
      {isJokeVisible && (
        <div className="z-50 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <p className="text-primary-500">{joke}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default JokeComponent;
