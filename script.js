// List of random names
const randomNames = ["Zara", "Nithin", "Leo", "Maya", "Alex", "Tara", "Max", "Finn"];

// List of random story templates
const storyTemplates = [
  "{name} discovered a talking pineapple while riding a unicycle through a spaghetti tornado.",
  "While skydiving, {name} accidentally landed on a giant marshmallow and became a candy celebrity.",
  "One day, {name} turned into a banana and joined a fruit circus.",
  "{name} built a rocket from soda cans and flew to Planet Jellybean.",
  "In the middle of math class, {name} was teleported to a kingdom ruled by cats in suits.",
  "{name} found a magical spoon that turned everything it touched into cheese."
];

// Button: Add random name to input
document.getElementById("randomNameBtn").addEventListener("click", () => {
  const randomName = randomNames[Math.floor(Math.random() * randomNames.length)];
  document.getElementById("nameInput").value = randomName;
});

// Button: Generate story
document.getElementById("generateStory").addEventListener("click", () => {
  const name = document.getElementById("nameInput").value.trim();

  if (name === "") {
    alert("Please enter a name or click 'Add Random Name'");
    return;
  }

  const storyTemplate = storyTemplates[Math.floor(Math.random() * storyTemplates.length)];
  const finalStory = storyTemplate.replace("{name}", name);

  document.getElementById("storyOutput").textContent = finalStory;
});
