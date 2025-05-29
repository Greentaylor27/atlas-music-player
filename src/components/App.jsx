import Footer from "./Footer";
import MusicPlayer from "./MusicPlayer";

function App() {
  return (
    <div className="flex flex-col min-h-screen min-w-screen w-full h-full sm:bg-fist1-700">
      <main className="flex-1 p-8 flex w-7xl mx-auto">
        <MusicPlayer />
      </main>
      <Footer />
    </div>
  );
}

export default App;
