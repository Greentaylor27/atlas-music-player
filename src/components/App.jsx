import Footer from "./Footer";
import MusicPlayer from "./MusicPlayer";
import PlayListItem from "./PlayListItem";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 p-8 flex justify-around">
        <MusicPlayer />
        <PlayListItem />
      </main>
      <Footer />
    </div>
  );
}

export default App;
