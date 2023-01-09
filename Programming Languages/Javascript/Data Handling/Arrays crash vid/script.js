"use strict";

// empty array that will store each movie object
let movies = [];

const addMovie = (ev) => {
  ev.preventDefault();

  // create the object from the user form input
  let movie = {
    id: Date.now(),
    title: document.getElementById("title").value,
    year: document.getElementById("year").value,
  };

  movies.push(movie);
  document.forms[0].reset(); // clear form for next entry

  //   display output

  console.warn("added", { movies });
  let pre = document.querySelector("msg pre");
  pre.textContent = "\n" + JSON.stringify(movies, "\t", 2);
};

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("button").addEventListener("click", addMovie);
});
