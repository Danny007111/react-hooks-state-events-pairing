import video from "../data/video.js";
import Frame from "./Frame.js";

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <Frame videoSrc={video.src}/>
    </div>
    
  );
}

export default App;
