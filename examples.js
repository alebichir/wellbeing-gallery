function variablesExample() {
  console.log(true);
  console.info("page loaded");
  console.debug(5 - 2);
  console.warn(10 / 2);
  console.error("hello " + "there");

  var employed = true;
  var age = 31 + 2;
  var name = `Nick's "Matei"`;
  console.info("Am I employed?", employed);
  console.info(typeof employed);
  console.warn("age", age, typeof age);
  console.info("My name  is", name, typeof name);

  age = 35;
  console.warn("age", age, typeof age);

  age = false;
  console.warn("age", age, typeof age);

  var values = ["Emoții", "Amintiri", "Univers cromatic", "Stare de bine"];
  console.debug(values, typeof values);

  var person = {
    employed: true,
    age: 29,
  };
  console.info(person, person.age, typeof person);
}

function updateTitle(title) {
  var jobTitle = document.getElementById("intro-Gallery");
  console.warn(jobTitle, typeof jobTitle);

  console.info(jobTitle.innerHTML);
  jobTitle.innerHTML = title;
  console.info(jobTitle.innerHTML);
}

function jsonWithFunctions() {
  console.log(typeof variablesExample);
  console.log(typeof document);
  console.log(typeof document.getElementById);

  var person = {
    age: 29,
    name: "Nick",
    learn: function () {
      console.info("I am learning JS");
    },
    play: function () {
      console.info("I am playing. My name is ", this.name);
    },
  };
  person.learn();
  person.play();
  var action = "learn"; // play
  person[action]();
}

//variablesExample();

//updateTitle("A gallery for our souls");

//jsonWithFunctions();
