import React from 'react';
import Map from '../map';
import Player from '../player';

function World(props) {
    return(
        <div style={{
            position: 'relative',
            width:'800px',
            height: '40px',
            margin: '20px auto'
        }}>
            <Player/>
            <Map/>
        </div>
    )
}

export default World