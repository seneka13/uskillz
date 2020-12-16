export const sliderUnderline = (navList, callback) => {
  let nav = navList.querySelectorAll("#nav");
  let menuWidth = navList.offsetWidth;
  if (nav.length > 0) {
    let marginLeft = [];
    nav.forEach((el, index) => {
      let width = getPercentage(el.offsetWidth, menuWidth);
      let tempMarginLeft = 0;
      if (index !== 0) {
        tempMarginLeft = getArraySum(marginLeft);
      }
      callback(el, width, tempMarginLeft);
      marginLeft.push(width);
    });
  }
};

const getPercentage = (min, max) => (min / max) * 100;
const getArraySum = (arr) => arr.reduce((sum, current) => sum + current, 0);
