import checkResult from '../../check/checkTextByIndex';
import takePause from '../pause';
import clickName from '../clickName';
import clickSubMenuItem from '../clickSubMenuItem';

module.exports = () => {
    clickName('settings');
    takePause(2000);
    clickSubMenuItem('Recommendations');
    takePause(1000);
    checkResult(".DataCard.titleCard", 0, "Recommendation for TestFinding2250");
};
