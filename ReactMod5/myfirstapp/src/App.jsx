function App(props) {
  const currDate = new Date();

  return (
    <div>
      <h1>Andrea Nardinocchi</h1>
      <h2>
        Today is {currDate.toLocaleDateString()} and the time now is{" "}
        {currDate.toLocaleTimeString()}.
      </h2>
    </div>
  );
}

export default App;
