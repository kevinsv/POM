
import selectByIndex from '../selectByIndex';
import checkResult from '../../check/checkTextByIndex';


module.exports = () => {

    checkResult(".subhead-1", 6, "String2");
    selectByIndex(".//input[@type='radio']", 0);
    selectByIndex(".//input[@type='radio']", 0);

};
