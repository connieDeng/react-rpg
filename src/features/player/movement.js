import store from '../../config/store';
import { SPRITE_SIZE } from './../../config/constants';

export default function handleMovement(player){
    function getNewPosition(direction){
        const oldPos = store.getState().player.position
        console.log(direction);

        switch(direction){
            case 'WEST':
                return [ oldPos[0]-SPRITE_SIZE.WIDTH, oldPos[1] ]
                break;
            case 'EAST':
                return [ oldPos[0]+SPRITE_SIZE.WIDTH, oldPos[1] ]
                break;
            case 'NORTH':
                return [ oldPos[0], oldPos[1]-SPRITE_SIZE.HEIGHT ]
                break;
            case 'SOUTH':
                return [ oldPos[0], oldPos[1]+SPRITE_SIZE.HEIGHT ]
                break;
            default:
                return console.log('troubleshoot')
        }
    }

    function dispatchMove(direction){
        store.dispatch({
            type: 'MOVE_PLAYER',
            payload: {
                position: getNewPosition(direction)
            }
        })
    }

    function handleKeyDown(e){
        e.preventDefault()
        
        switch(e.keyCode){
            case 37:
                dispatchMove('WEST')
                break;
            case 38:
                return dispatchMove('NORTH')
                break;
            case 39:
                return dispatchMove('EAST')
                break;
            case 40:
                return dispatchMove('SOUTH')
                break;
            default:
                console.log(e.keyCode)
        }
    }
    
    window.addEventListener('keydown', (e) =>{
        handleKeyDown(e)
    })
    
    return player
}