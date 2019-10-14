function sum(number) {
  let stringd = (number + '').split('');
  console.log(stringd);
  let sum = 0;
  for (const num of stringd) {
    sum += Number(num);
  }
  return sum
}
console.log(sum(322345234));
