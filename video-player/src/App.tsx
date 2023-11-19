import { useState, useEffect, useRef } from 'react'
import useLocalStorage from './useLocalStorage';
import videoSrc from './video.mp4'
import './App.css'

function App() {
  const video = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useLocalStorage("volume", "0")

  // useEffect(() => {
  //   console.log('Teste');
  // })

  useEffect(()=> {
    if (!video.current) return;
    const volumeValue = Number(volume);
    video.current.volume = volumeValue;
    // console.log(volumeValue);
  }, [volume])

  const decreaseVolume = () => {
    const volumeValue = Number(volume);
    let newVolume = volumeValue - .05;

    if (newVolume <= 0) {
      newVolume = 0;
    } 
    setVolume(`${newVolume}`);
  }

  const increaseVolume = () => {
    const volumeValue = Number(volume);
    let newVolume = volumeValue + .05;

    if (newVolume >= 1) {
      newVolume = 1;
    } 
    setVolume(`${newVolume}`)
  }

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
      <div className='flex'>
        <button onClick={() => setVolume("0")}>
          0%
        </button>
        <button onClick={() => setVolume(".25")}>
          25%
        </button>
        <button onClick={decreaseVolume}>
          -
        </button>
        <div className='volume'>
          <p>{(Number(volume) * 100).toFixed(0)}%</p>
        </div>
        <button onClick={increaseVolume}>
          +
        </button>
        <button onClick={() => setVolume(".5")}>
          50%
        </button>
        <button onClick={() => setVolume("1")}>
          100%
        </button>
      </div>
    </div>
  )
}

export default App
