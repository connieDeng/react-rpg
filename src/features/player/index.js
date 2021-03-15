import React from 'react';
import walkSprite from './girl-sprite.png';
import { connect } from 'react-redux';
import handleMovement from './movement';

function Player (props) {
    return (
        <div style={{
            position: 'absolute',
            top: props.position[1],
            left: props.position[0],
            backgroundImage: `url('${walkSprite}')`,
            backgroundPosition: '0 0',
            width: '35px',
            height: '50px',
            zIndex: 100,
        }}
        ></div>
    )
}

//maps state that is stored
function mapStateToProps(state){
    return{
        ...state.player,            
    }
}

export default connect(mapStateToProps)(handleMovement(Player))