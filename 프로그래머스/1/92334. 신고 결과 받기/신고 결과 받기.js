function solution(id_list, report, k) {
  const newReport = [...new Set(report)].map((el) => el.split(" "));
  let reportNum = {};
  newReport.forEach((el) => {
    if (!reportNum[el[1]]) {
      reportNum[el[1]] = 1;
    } else if (reportNum[el[1]]) {
      reportNum[el[1]] += 1;
    }
  });

  const result = id_list.map((el) => {
    email = 0;

    for (let i = 0; i < newReport.length; i++) {
      if (el === newReport[i][0] && reportNum[newReport[i][1]] >= k) {
        email++;
      }
    }
    return email;
  });
  return result;
}