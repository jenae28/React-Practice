
function Countries() {
  const countries = [
    "United States",
    "Canada",
    "Mexico",
    "Brazil",
    "Japan",
    "France"
  ];

  return (
    <div>
      <h1>Countries Around the World</h1>

      <ul>
        {countries.map((country) => (
          <li key={country}>{country}</li>
        ))}
      </ul>
    </div>
  );
}

export default Countries;
