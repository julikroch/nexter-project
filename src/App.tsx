import Features from "./components/Features";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Realtors from "./components/Realtors";
import Story from "./components/Story";
import Homes from "./components/Homes";

function App() {
  return (
    <div className="container">
      <Sidebar />
      <Header />
      <Realtors />
      <Features />
      <Story />
      <Homes />
      <Gallery />
      <Footer />
    </div>
  )
}
export default App;
