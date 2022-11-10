import Button from "../Button/Button";

const Main = () => {
    return (
      <main>
        <h1>Page name</h1>
        <Button text="Click me" type="button" />
        {/* 
        const props = {
          text: "Click me",
          type: "button"
        }
        Button(props)
        */}
        <Button text="Eat me" type="submit" />
        <p>page content</p>
      </main>
    )
  }

  export default Main;