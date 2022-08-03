const createPerson = (name, age) => {
  return {name: name, age: age};
};

const getName = object => {
  return object.name;
};

function getProperty(property, object) {
  return object[property];
}

const hasProperty = (property, object) => {
  return object.hasOwnProperty(property);
};

const isOver65 = person => {
  return person.age > 65;
};

const getAges = people => {
  return people.map(person => person.age);
};

const findByName = (name, people) => {
  return people.find(person => person.name === name);
};

const findHondas = cars => {
  return cars.filter(brand => brand.manufacturer === "Honda");
};

const averageAge = people => {
  return people.reduce((previous, current) => previous + current.age, 0) /people.length;
};

const createTalkingPerson = (name, age) => {
  return {
    name: name,
    age: age,
    introduce(otherName) {
      return `Hi ${otherName}, my name is ${this.name} and I am ${this.age}!`
    }
  };
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
