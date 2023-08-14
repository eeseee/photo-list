import { useState, useEffect } from "react";
import axios from "axios";

import PhotoList from './components/PhotoList';
import Photo from './components/Photo';

import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";

function App() {
  const [photoList, setPhotoList] = useState<Photo[]>(() => {
    const saved = localStorage.getItem('photos');
    if (saved === null) {
      console.log('not cached');
      return [];
    } else {
      console.log('cached');
      return JSON.parse(saved);
    }
  });
  const [loading, setLoading] = useState(localStorage.getItem('photos') === null);

  useEffect(() => {
    if (loading) {
      axios.get('https://jsonplaceholder.typicode.com/album/1/photos').then((response) => {
        setPhotoList(response.data);
        setLoading(false);
        localStorage.setItem('photos', JSON.stringify(response.data));
      }).catch((reason) => console.log(reason));
    }
  }, [loading]);

  function randomize(a: Array<Photo>, currentIndex: number): Array<Photo> {
      if (currentIndex === 0) {
        return a;
      } else {
        let randomIndex = Math.floor(Math.random()*currentIndex);
        [a[currentIndex], a[randomIndex]] = [a[randomIndex], a[currentIndex]];
        currentIndex--;
        return randomize(a, currentIndex);
      }
  }

  return (
    <Container>
      <Stack spacing={1} alignItems={'center'}>
        <h1>Photo List</h1>
        {loading ? (
          <CircularProgress/>
        ) : (
          <PhotoList {...photoList}/>
        )}
        <Button 
          variant="contained" 
          size="large"
          onClick={() => {
            let randomizedArray: Array<Photo> = randomize(photoList.slice(), photoList.length-1);
            setPhotoList(randomizedArray);
            localStorage.setItem('photos', JSON.stringify(randomizedArray));
          }}
        >
          Randomize
        </Button>
      </Stack>
    </Container>
  )
}

export default App
