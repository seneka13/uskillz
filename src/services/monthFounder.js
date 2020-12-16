const monthArr = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];

export const monthFounder = (monthNumber) => {
  return monthArr[monthNumber - 1];
};

export const filterArrByMonth = (arr) => {
  let newArr = [];

  arr.forEach((item) => {
    let newObj = {};
    newObj.id = item.id;
    newObj.data = [];
    for (let key in item.data) {
      newObj.data.push({ x: monthFounder(item.data[key].x), y: item.data[key].y });
    }
    newArr.push(newObj);
  });
  return newArr;
};
