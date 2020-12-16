export const randomArr = async (arr) => {
  const filterArr = arr.filter((item) => item.name != null);
  let finalArr = new Set();
  for (let i = 0; i < 6; i++) {
    finalArr.add(filterArr[Math.floor(Math.random() * 50)]);
  }
  return Array.from(finalArr);
};

export const filterSelected = (arr) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    const even = newArr.some((element) => element.id === arr[i].id);
    if (!even) newArr.push(arr[i]);
  }

  return newArr;
};

export const filterArr = (arr) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    const even = newArr.some((element) => element.company_name === arr[i].company_name);
    if (!even) newArr.push(arr[i]);
  }

  return newArr;
};
