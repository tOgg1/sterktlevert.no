import Head from 'next/head'
import { useRef, useState } from 'react'
import styled from 'styled-components'
import { getRandomVideo } from '../util/videos'

const Wrapper = styled.div``

const VideoWrapper = styled.div`
  width: 100%;
  height: 100%;
`

const VideoPlayer = styled.video`
  width: 100%;
  height: 100%;
`

export default function Home() {
  const [video, setVideo] = useState(getRandomVideo())
  const videoRef = useRef<HTMLVideoElement>(null)

  function play() {
    if (!videoRef.current) return

    videoRef.current.play()
  }

  return (
    <Wrapper>
      <Head>
        <title>Sterkt levert</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <VideoWrapper onClick={play}>
        <VideoPlayer loop ref={videoRef}>
          <source src={video} />
        </VideoPlayer>
      </VideoWrapper>
    </Wrapper>
  )
}
