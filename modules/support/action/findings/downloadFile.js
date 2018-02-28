import clickName from '../clickName';
import clickButton from '../clickButton';
import takePause from '../pause';
import selectByIndex from '../selectByIndex';

module.exports = () => {

    //clickSpan("TestFinding2250");
    clickName("findings");
    selectByIndex(".DataCard.titleCard", 1);


    clickName("resource_download");
    clickName("resource_file");
    takePause(7000);
    clickButton("Edit");
    clickButton("Accept Mitigation Plan");
    takePause(3000);
    clickName("findings");
    selectByIndex(".DataCard.titleCard", 0);

};

