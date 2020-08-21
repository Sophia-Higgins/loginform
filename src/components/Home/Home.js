import React, { useEffect } from 'react';

function Home() {
  useEffect(() => {document.body.style.backgroundColor = '#198B26'}, []);
  
  return (
    <div className='body bg-primary text-white'>
      <h1 className='display-1'>Welcome!</h1>
      <h1 className='display-1'>Everything is fine</h1>
    </div>
  )
}

export default Home;