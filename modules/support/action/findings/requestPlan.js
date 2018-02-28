import clickButton from '../clickButton';
import takePause from '../pause';
import selectByIndex from '../selectByIndex';

module.exports = () => {

    selectByIndex(".DataCard.titleCard", 0);
    takePause(1000);
    clickButton("Edit");
    clickButton("Send To Queue");
    clickButton("Request Mitigation Plan");
    takePause(1000);
};
