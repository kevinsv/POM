import clickName from '../clickName';
import clickButton from '../clickButton';
import takePause from '../pause';
import setToId from '../setTextToId';
import selectByIndex from '../selectByIndex';

module.exports = () => {

    clickName("eng_more");
    selectByIndex(".MenuItem", 1);
    takePause(1000);
    clickButton("Edit");
    setToId("TestRiskProfile(edited)", 'Name');
    clickButton("Save");
    takePause(3000);

}; 
