import clickNameByIndex from '../clickNameByIndex';
import setTextToTheField from '../setTextToTheField';
import clickButton from '../clickButton';

module.exports = () => {

    clickNameByIndex("expand_list", 1);
    clickButton("plus");
    //clickName("test_action");
    clickButton("test_action");
    setTextToTheField("Boolean question", "questionText");
    //clickName("close");
    //clickNameByIndex("test_action", 1);
    clickButton("plus");
    clickButton("test_action");
};
