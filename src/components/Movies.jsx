
function Movies() {
  const movies = [
    {
      id: 1,
      title: "Avatar",
      year: 2009,
      genre: "Science Fiction"
    },
    {
      id: 2,
      title: "Titanic",
      year: 1997,
      genre: "Romance"
    },
    {
      id: 3,
      title: "The Lion King",
      year: 1994,
      genre: "Animation"
    },
    {
      id: 4,
      title: "Black Panther",
      year: 2018,
      genre: "Action"
    }
  ];

  return (
    <div>
      <h1>My Movie List</h1>

      {movies.map((movie) => (
        <div key={movie.id}>
          <h2>{movie.title}</h2>
          <p>Year: {movie.year}</p>
          <p>Genre: {movie.genre}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Movies;
