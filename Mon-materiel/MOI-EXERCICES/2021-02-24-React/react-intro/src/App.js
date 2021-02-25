import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        <NewsArticle headline="My first headline" />
        <NewsArticle headline="My second headline"/>
        <NewsArticle headline="My thirst headline"/>
        <NewsArticle headline="My fiveth headline"/>
      </header>
    </div>
  );
}

const NewsArticle  = (props)=>{
  return(
    <article>
      <h2>{props.headline}</h2>
      <p>This is my paragraph</p>
      <button>Submit</button>
    </article>
  )
}

export default App;
