import { useEffect } from "react";
import "./App.css";
import { Auth } from "./components/Auth";
import { db, auth, storage } from "./config/firebase";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
import { useState } from "react";
import { listAll, ref, uploadBytes } from "firebase/storage";

function App() {
  const [movieList, setMovieList] = useState([]);

  // New Movie States
  const [newMovieTitle, setNewMovieTitle] = useState("");
  const [newReleaseDate, setNewReleaseDate] = useState(0);
  const [isnewMovieOscar, setIsNewMovieOscar] = useState(false);

  // Update title States
  const [updatedTitle, setUpdatedTitle] = useState("");

  // File Upload State
  const [fileUpload, setFileUpload] = useState(null);

  const moviesCollectionRef = collection(db, "movies");

  const getMovieList = async () => {
    // READ THE DATA FROM FIREBASE
    // SET THE MOVIE LIST
    try {
      const data = await getDocs(moviesCollectionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setMovieList(filteredData);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getMovieList();
  }, []);  // eslint-disable-next-line

  const onSubmitMovie = async () => {
    try {
      await addDoc(moviesCollectionRef, {
        title: newMovieTitle,
        releasedDate: newReleaseDate,
        receivedAnOscar: isnewMovieOscar,
        userId: auth?.currentUser?.uid
      });

      // getMovieList();
    } catch (err) {
      console.error(err);
    }
  };
  
  const deleteMovie = async (id) => {
    const movieDoc = doc(db, "movies", id);
    await deleteDoc(movieDoc);
  };

  const updateMovieTitle = async (id) => {
    const movieDoc = doc(db, "movies", id);
    await updateDoc(movieDoc, { title: updatedTitle });
  };

  const uploadFile = async() => {
    if(!fileUpload) return;

    const filesFolderRef = ref(storage, `projectFiles/${fileUpload.name}`);
    try {
      await uploadBytes(filesFolderRef, fileUpload)
    } catch(err) {
      console.error(err);
    }
  }

  const listFiles = async() => {
    const listRef = ref(storage, 'projectFiles/');

    const res = await listAll(listRef)
    console.log(res);
    res.items.forEach((itemRef) => {
      console.log(itemRef);
    })
  }
   
  listFiles();
  return (
    <div className="App">
      <Auth />

      <div>
        <input
          type="text"
          placeholder="Movie Name..."
          onChange={(e) => setNewMovieTitle(e.target.value)}
        />
        <input
          type="number"
          placeholder="Released Date..."
          onChange={(e) => setNewReleaseDate(e.target.value)}
        />
        <input
          name="isOscar"
          type="checkbox"
          placeholder="Received An Oscar..."
          checked={isnewMovieOscar}
          onChange={(e) => setIsNewMovieOscar(e.target.checked)}
        />
        <label htmlFor="isOscar">Received An Oscar</label>
        <button onClick={onSubmitMovie}>Submit Movie</button>
      </div>

      <div>
        {movieList.map((movie) => (
          <div key={movie.id}>
            <h1 style={{ color: movie.receivedAnOscar ? "green" : "red" }}>
              {movie.title.toUpperCase()}
            </h1>
            <p>Release Date: {movie.releasedDate}</p>
            <button onClick={() => deleteMovie(movie.id)}>Delete Movie</button>

            <input
              type="text"
              placeholder="new title..."
              onChange={(e) => setUpdatedTitle(e.target.value)}
            />
            <button onClick={() => updateMovieTitle(movie.id)}>
              Update Title
            </button>
          </div>
        ))}
      </div>

      <div>
        <input type="file" onChange={(e) => setFileUpload(e.target.files[0])} />
        <button onClick={uploadFile}>Upload Image</button>
      </div>
    </div>
  );
}

export default App;
