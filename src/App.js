import "./styles/main.css"
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import About from "./components/about/About";
import Electricity from "./components/electricity/Electricity";
import Cases from "./components/cases/Cases";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <About />
      <Electricity />
      <Cases />
      <Footer />
    </div>
  );
}

export default App;
