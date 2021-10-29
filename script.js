const td = document.querySelectorAll("td");
const arr = [];
td.forEach((value, index) => {
  value.onclick = () => {
    colors();
    value.style.backgroundColor = "red";
    arr.push(index);
  };
});
function colors() {
  arr.forEach((number) => {
    td[number].style.backgroundColor = random();
  });
}
function random() {
  const string = "#" + (((1 << 24) * Math.random()) | 0).toString(16);
  return string;
}

function start() {
  document.title = "randomColors";
}
start();
