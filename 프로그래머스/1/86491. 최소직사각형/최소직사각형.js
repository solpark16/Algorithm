function solution(sizes) {
    let maxW = 0;
    let maxH = 0;
    let arr = sizes.forEach((item) => {
      item.sort((a,b)=>a-b);
      if (item[0] > maxW) maxW = item[0];
      if (item[1] > maxH) maxH = item[1];
    });
    return maxW*maxH;
}