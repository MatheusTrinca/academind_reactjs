import './App.css';
import ImageSlider from './components/ImageSlider';
import { ImagesData } from './components/ImagesData';
import { useEffect, useState } from 'react';

function App() {
  const [slides, setSlides] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setSlides(ImagesData);
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="App">
      <ImageSlider slides={slides} loading={loading} />
    </div>
  );
}

export default App;
