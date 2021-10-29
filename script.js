const td = document.querySelectorAll("td");

td.forEach((value, index) => {
  value.style.backgroundColor = random();
});

function random() {
  const string = "#" + (((1 << 24) * Math.random()) | 0).toString(16);
  return string;
}
function start() {
  document.title = "randomColors";
}
start();
