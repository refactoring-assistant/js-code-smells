function processData(data) {
  for (let i = 0; i < data.length; i++) {
    if (data[i] === null) {
      data.splice(i, 1);
      i--;
    }
    else {
      data[i] = data[i].trim();
      if (data[i].length > 1) {
        data[i] = data[i].substring(0, 1).toUpperCase() + data[i].substring(1).toLowerCase();
      }
    }
  }
  for (let i = 0; i < data.length; i++) {
    for (let j = i+1; j < data.length; j++) {
      if (data[i] === data[j]) {
        data.splice(j, 1);
        j--;
      }
    }
  }
  return data;
}