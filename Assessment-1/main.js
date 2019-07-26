var customName = document.getElementById("customname");
var randomize = document.querySelector(".randomize");
var story = document.querySelector(".story");

function randomValueFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}

var storyText =
  "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

var insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];

var insertY = ["the soup kitchen", "Disneyland", "the White House"];

var insertZ = [
  "spontanseously combusted",
  "melted into a puddle on the sidewalk",
  "tured into a slug and crawled away"
];

randomize.addEventListener("click", result);

function result() {
  let newStory = storyText;

  let xItem = randomValueFromArray(insertX),
    yItem = randomValueFromArray(insertY),
    zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(":insertx:", xItem);
  newStory = newStory.replace(":insertx:", xItem);
  newStory = newStory.replace(":inserty:", yItem);
  newStory = newStory.replace(":insertz:", zItem);

  if (customName.vaule !== "") {
    var name = customName.value;
    newStory.replace("Bob", name);
  }

  if (document.getElementById("uk").checked) {
    var weight = Math.round(300);
    var temperature = Math.round(94);
    newStory = newStory.replace("94 fahrenheit", temperature);
    newStroy = newStory.replace("300 pounds", weight);
  }

  story.textContent = newStory;
  story.style.visibility = "visible";
}
