import React, { useState } from "react";
import axios from "axios";
import database from "./firebase";

function Search() {
  const [query, setQuery] = useState([]);
  const [result, setResult] = useState([]);

  const Push = () => {
    database
      .ref("queries")
      .set({
        query: query,
      })
      .catch(alert);
  };

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
    <div>
      <form onSubmit={handleSubmit} className="flex items-center justify-center gap-3 p-10">
        <input
          className="border-2 rounded-md p-2"
          type="text"
          placeholder="Search for any book"
          onChange={handleChange}
          value={query}
        />
        <button
          className="text-white bg-purple-700  font-medium rounded-md text-sm px-5 py-2.5 mr-2 focus:outline-none"
          type="submit"
          onClick={Push}
        >
          Search
        </button>
      </form>
      <div className="grid gap-5 grid-cols-4 p-10">
        {result.map((item) => (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={item.volumeInfo.previewLink}
          >
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
    </div>
  );
}

export default Search;
