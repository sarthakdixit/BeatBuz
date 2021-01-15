import React, { Fragment, useState, useEffect } from 'react';
import "../style/File.css";

function LyricsFile(props) {

  const [lyric, setLyric] = useState();

  useEffect(() => {
    let isSubscribed = true;
    let i = 0;
    setLyric(props.file.split("\n").map(str => <p key={i++}>{str}</p>));

    return () => (isSubscribed = false);
  }, []);

  return (
    <Fragment>
      {lyric}
    </Fragment>
  )
}

export default LyricsFile
