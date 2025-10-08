import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SplashScreen from "./components/SplashScreen";
import Home from "./pages/Home";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <SplashScreen />}
      <div className={`flex flex-col min-h-screen ${loading ? "overflow-hidden" : ""}`}>
        {!loading && (
          <>
            <Navbar />
            <main className="flex-grow">
              <Home />
            </main>
            <Footer />
          </>
        )}
      </div>
    </>
  );
}

export default App;
