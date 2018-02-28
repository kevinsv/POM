module.exports = () => {
    browser.pause(5000);
    browser.element(".highcharts-series.highcharts-tracker").isVisible;
};
