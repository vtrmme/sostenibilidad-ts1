function App() {
  let items = ["Adrian", "Enrique", "Jose", "Joaquin", "Miguel"];
  return (
    <>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
}
export default App;