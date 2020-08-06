import React, {useState, useEffect, useRef} from 'react';

const UseAudio = (url) => {
  const [duration, setDuration] = useState(0);
  const [curTime, setCurTime] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [clickedTime, setClickedTime] = useState(0);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;

    const setAudioData = () => {
      setDuration(audio.duration);
      setCurTime(audio.currentTime);
    }
    const setAudioTime = () => setCurTime(audio.currentTime);

    audio.addEventListener("loadeddata", setAudioData);
    audio.addEventListener("timeupdate", setAudioTime);
    audio.addEventListener('ended', () => {setPlaying(false)});

    if(playing) {
      setTimeout(() => {
        audio.play();
      }, 0);
    }else {
      audio.pause();
    }

    if (clickedTime && clickedTime !== curTime) {
      audio.currentTime = clickedTime;
      setClickedTime(null);
    }

    return () => {
      audio.removeEventListener("loadeddata", setAudioData);
      audio.removeEventListener("timeupdate", setAudioTime);
      audio.addEventListener('ended', () => {setPlaying(false)});
    }
  })
  return [
    <audio
      id="audio"
      src={url}
      ref={audioRef}
    >
      <track default kind="captions" />
      Your browser does not support the <code>audio</code> element.
    </audio>,
    {
      curTime,
      duration,
      playing,
      setPlaying,
      setClickedTime
    }
  ]
}

export default UseAudio;