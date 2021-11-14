import Features from "./components/Features";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Realtors from "./components/Realtors";

function App() {
  return (
    <div className="container">
      <Header />
      <Sidebar />
      <Features />
      <Gallery />
      <Realtors />
      <Footer />
    </div>
  )
}
export default App;
