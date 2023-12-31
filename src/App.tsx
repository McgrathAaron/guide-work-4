import Navbar from "@/scenes/navbar";
import Home from '@/scenes/home';
import { useState, useEffect } from "react"; 
import { SelectedPage } from "@/shared/types";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
    );/*Typescript knows this is a string the <string> is more explicit*/
  const [ isTopOfPage, setIsTopOfPage] = useState(true);

  useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY === 0) {
          setIsTopOfPage(true);
          setSelectedPage(SelectedPage.Home);
        }
        if (window.scrollY !== 0) setIsTopOfPage(false);
      }
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return <div className="app bg-gray-20 sticky">
    <Navbar
    isTopOfPage={isTopOfPage}
    selectedPage={selectedPage}
    setSelectedPage={setSelectedPage}
    />
    <Home setSelectedPage={setSelectedPage} />
  </div>;
}

export default App;