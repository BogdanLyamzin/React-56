const title = "Page title";
const lifeSense = 42;

const nullVariable = null;
const booleanVariable = true;
const undefinedVariable = undefined;

const user = {
  name: "Алекс Гийом Василь",
  age: 19,
}

const users = ["Амфитрион", "Автолик", "Аякс"]

function App() {
  const element = <p>Text paragraph</p>;
  {/* const element = createElement(tag, {props}) */ }
  // console.log(element);
  return (
    <>
      <div className="App">
        <h1>{title}</h1>
        <p>
          У чому сенс життя? 
        </p>
        <p>{lifeSense}</p>
        {nullVariable}
        {booleanVariable}
        {undefinedVariable}
        {/* {user} */}
        <p>{user.age >= 18 ? "Welcome to club!" : "Buy new passport"}</p>
        <div>{users}</div>
        <label htmlFor="book-title">Book title</label>
        <input id="book-title" autoComplete required placeholder="Book title" />
        {/* createElement(tag, {props}) */}
      </div>
      <footer></footer>
    </>
  );
}

export default App;
