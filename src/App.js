import Header from "./components/header/Header";
import Main from "./components/main/Main";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import "./styles/main.css"

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <About />
      <Footer />
    </div>
  );
}

export default App;
