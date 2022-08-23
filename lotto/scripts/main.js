function getRandomNumber(from, to) {
    return parseInt(String(Math.random() * (to - from) + from));
  }
  
  function buildArrayWithRandomNumbers() {
    //  const letters = ['a', 'b'];
    const randomNumbers = Array.from({ length: 6 });
    //  console.log(randomNumbers);
  
    for (let i = 0; i < randomNumbers.length; i++) {
      // const element = randomNumbers[i];
      // console.log(i, element);
      randomNumbers[i] = getRandomNumber(1, 49);
    }
  
    randomNumbers.sort(function (a, b) {
      // console.log(`a=${a} b=${b}`);
      return a - b;
      // if (a > b) {
      //   return 1; // a=45 b=4 |||| 41
      // } else if (a < b) {
      //   return -1; // a=3 b=18 |||| -15
      // } else {
      //   return 0; // a=10 b=10 |||| 0
      // }
    });
  
    //  console.log(randomNumbers);
    return randomNumbers;
  }
  
  /**
   * template(13) => '<div class="circle">13</div>'
   */
  function template(content) {
    //   return '<div class="circle">' + content + '</div>';
    return `<div class="circle">${content}</div>`;
  }
  
  function render(numbers) {
    const page = document.querySelector("#page");
    numbers.forEach(function (number) {
      // page.innerHTML = page.innerHTML + template(number);
      page.innerHTML += template(number);
    });
  }
  
  function main() {
    const numbers = buildArrayWithRandomNumbers();
    render(numbers);
  }
  
  window.addEventListener("DOMContentLoaded", main);