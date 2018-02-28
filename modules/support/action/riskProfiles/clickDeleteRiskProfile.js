import selectByIndex from '../selectByIndex';
import takePause from '../pause';

module.exports = () => {
    selectByIndex(".MenuItem", 0);
    takePause(1000);
}; 
