import React, { useState } from "react";
import axios from "axios";
import database from "./firebase";

function Search() {


  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);

  const Push = () =>{
    database.ref("queries").set({
      query : query,
    }).catch(alert);
  }

  function handleChange(e) {
    const query = e.target.value;
    setQuery(query);
  }

  function handleSubmit(e) {
    e.preventDefault();

    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=40`
      )
      .then((response) => {
        console.log(response.data.items[0]);
        setResult(response.data.items);
      })
      .catch((err) => {
        console.log(err);
      });

  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for any book"
          onChange={handleChange}
          value={query}
        />
        {/* <button type="submit">Search</button> */}
        <button type="submit" onClick={Push}>Search</button>

      </form>
      {result.map((item) => (
        <a target="_blank" rel="noopener noreferrer" href={item.volumeInfo.previewLink}>
          <img
            src={
              item.volumeInfo.imageLinks === undefined
                ? ""
                : `${item.volumeInfo.imageLinks.thumbnail}`
            }
            key={item.id}
            alt={item.volumeInfo.title}
          />
        </a>
      ))}

    </div>
  );
}

export default Search;
