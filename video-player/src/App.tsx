import { useState, useEffect, useRef } from 'react'
import videoSrc from './video.mp4'
import './App.css'

function App() {
  const video = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    console.log('Teste');
  })

  function forward() {
    if (!video.current) return;
    video.current.currentTime += 2;
  }

  function changePLayBackRate(speed: number) {
    if (!video.current) return;
    video.current.playbackRate = speed;
  }

  function mute() {
    if (!video.current) return;
    video.current.muted = !video.current.muted
  }

  async function PictureInPicture() {
    if (!video.current) return;

    if(document.pictureInPictureElement) {
      document.exitPictureInPicture();

    } else {
      await video.current.requestPictureInPicture();
    }
  }

  async function FullScreen() {
    if (!video.current) return;

    if(document.pictureInPictureElement) {
      document.exitFullscreen;

    } else {
      await video.current.requestFullscreen();
    }
  }

  return (
    <div>
      <div className='flex'>
        <button onClick={() => video.current?.play()}>
          Play
        </button>
        <button onClick={() => video.current?.pause()}>
          Pause
        </button>
        <button onClick={forward}>
          + 2s
        </button>
        <button onClick={() => {changePLayBackRate(.5)}}>
          0,5x
        </button>
        <button onClick={() => {changePLayBackRate(1)}}>
          1x
        </button>
        <button onClick={() => {changePLayBackRate(2)}}>
          2x
        </button>
        <button onClick={mute}>
          Mute
        </button>
        <button onClick={PictureInPicture}>
          PP
        </button>
        <button onClick={FullScreen}>
          Full
        </button>
      </div>
      <video 
        controls 
        ref={video} 
        src={videoSrc}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        >
      </video>
    </div>
  )
}

export default App
