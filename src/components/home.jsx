import React from 'react';
import Hero from './hero'
import Body from './body'
import Bridge from './bridge'

function Home() {
    return (
        <>
            <Hero/>
            <div className='container'><hr/></div>
            <Body/>
            <div className='container'><hr/></div>
            <Bridge/>
        </>
    );
}

export default Home;
