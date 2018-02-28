import checkResult from '../../check/checkTextByIndex';

module.exports = () => {
    checkResult(".ThemeBold", 0, "Aetna Inc.");
    checkResult(".ThemeBold", 1, "Assessment");
    checkResult(".ThemeBold", 3, "SIG 2016 A. Risk Management");
};
