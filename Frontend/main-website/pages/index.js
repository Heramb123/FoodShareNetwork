import Head from 'next/head'
import { useRef } from 'react';

export default function Home() {
  const iframeRef = useRef(null);

  return (
    <div>
      <Head>
        <title>Food Share Network</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}>
        <iframe
          ref={iframeRef}
          src="temporary/index.html"
          style={
            { width: '100%', height: '100%', border: 'none' }
          }
        />
      </div>
    </div>
  )
}
