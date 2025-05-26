import Footer from "./Footer";
import MusicPlayer from "./MusicPlayer";

function App() {
  return (
    <div className="flex flex-col min-h-screen w-full h-full bg-fist1-700">
      <main className="flex-1 p-8 flex">
        <MusicPlayer />
      </main>
      <Footer />
    </div>
  );
}

export default App;
