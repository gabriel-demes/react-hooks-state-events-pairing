import video from "../data/video.js";
import VideoInfo from "./VideoInfo"
function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameborder="0"
        allowfullscreen
        title="Thinking in React"
      />
      <VideoInfo />
    </div>
  );
}

export default App;
