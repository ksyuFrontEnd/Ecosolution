import "./styles/main.css"
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import About from "./components/about/About";
import Electricity from "./components/electricity/Electricity";
import Cases from "./components/cases/Cases";
import Faq from "./components/faq/Faq";
import ContactUs from "./components/contact-us/ContactUs";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <About />
      <Electricity />
      <Cases />
      <Faq />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
