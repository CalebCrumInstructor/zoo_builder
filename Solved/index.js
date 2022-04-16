const fs = require('fs');
const Sloth = require('./lib/Classes/Sloth');
const Elephant = require('./lib/Classes/Elephant');
const Tiger = require('./lib/Classes/Tiger');
const inquirer = require('inquirer');
const { 
  mainMenuQuestions, 
  addAnimalQuestions,
  interactWithAnimalsQuestions, 
} = require('./lib/questions');
const generatehtml = require('./src/generatehtml');

class ZooBuilder {

  constructor() {
    this.allElephants = [];
    this.allTigers = [];
    this.allSloths = [];
  }

  async mainMenu() {    
    const { menuChoice } = await inquirer.prompt(mainMenuQuestions);

    switch (menuChoice) {
      case 'Add Animal to Zoo':
        this.addAnimal();
        break;

      case 'Interact With Animals':
        this.interactWithAnimals();
        break;

      case 'Create Web Page with my Animals':
        this.createHTML();
        break;

      default: 
        return;
    }
  }

  async addAnimal() {
    const { animalType, animalName, animalAge } = await inquirer.prompt(addAnimalQuestions.firstPrompt);

    switch (animalType) {
      case 'Elephant':
        const { tusksPresent } = await inquirer.prompt(addAnimalQuestions.elephantPrompt);

        const elephant = new Elephant(animalName, animalAge, tusksPresent);
        this.allElephants.push(elephant);

        break;

      case 'Tiger':
        const { rescuedFrom } = await inquirer.prompt(addAnimalQuestions.tigerPrompt);

        const tiger = new Tiger(animalName, animalAge, rescuedFrom);
        this.allTigers.push(tiger);

        break;

      case 'Sloth':
        const { hasAlgae } = await inquirer.prompt(addAnimalQuestions.slothPrompt);

        const sloth = new Sloth(animalName, animalAge, hasAlgae);
        this.allSloths.push(sloth);

        break;

      default: 
        return;
    }

    console.log(`\n${animalName} the ${animalType} has been added to your zoo!\n`);

    this.mainMenu();

  }

  async interactWithAnimals () {

    const { animalType } = await inquirer.prompt(interactWithAnimalsQuestions);

    switch (animalType) {
      case 'Elephant':
        if (this.allElephants.length < 1) {
          console.log('\nYou have no elephants.\n');
          break;
        }
        await this.interactWithElephant();
        break;

      case 'Tiger':
        if (this.allTigers.length < 1) {
          console.log('\nYou have no tigers.\n');
          break;
        }
        await this.interactWithTiger();
        break;

      case 'Sloth':
        if (this.allSloths.length < 1) {
          console.log('\nYou have no sloths.\n');
          break;
        }
        await this.interactWithSloth();
        break;

      default: 
        return;
    }

    return this.mainMenu();

  };

  async interactWithElephant() {
    const { animalValue } = await inquirer.prompt([
      {
        type: 'list',
        name: 'animalValue',
        message: 'What animal would you like to interact with?',
        choices: this.allElephants.map((elephant, index) => ({
          name: elephant.getName(),
          value: index
        }))
      },
    ]);

    const selectedAnimal = this.allElephants[animalValue]

    const { action } = await inquirer.prompt([
      {
        type: 'list',
        name: 'action',
        message: 'What would you like to do?',
        choices: [
          {
            name: `Get ${selectedAnimal.name}'s Age`,
            value: 0
          },
          {
            name: `Does ${selectedAnimal.name} have tusks?`,
            value: 1
          },
          {
            name: `I would like to feed ${selectedAnimal.name}.`,
            value: 2
          },
        ]
      },
    ]);

    switch (action) {
      case 0:

        console.log(`\n${selectedAnimal.name} is ${selectedAnimal.age} years old.\n`)

        break;

      case 1:
        if (selectedAnimal.hasTusks()) {
          console.log(`\n${selectedAnimal.name} does have tusks.\n`)
          break;
        }

        console.log(`\n${selectedAnimal.name} does not have tusks.\n`)

      case 2:

        await this.feedAnimal(selectedAnimal);
        
        break;

      default: 
        return;
    }

  }

  async interactWithTiger() {
    const { animalValue } = await inquirer.prompt([
      {
        type: 'list',
        name: 'animalValue',
        message: 'What animal would you like to interact with?',
        choices: this.allTigers.map((tiger, index) => ({
          name: tiger.getName(),
          value: index
        }))
      },
    ]);

    const selectedAnimal = this.allTigers[animalValue]

    const { action } = await inquirer.prompt([
      {
        type: 'list',
        name: 'action',
        message: 'What would you like to do?',
        choices: [
          {
            name: `Get ${selectedAnimal.name}'s Age`,
            value: 0
          },
          {
            name: `Where was ${selectedAnimal.name} rescued from?`,
            value: 1
          },
          {
            name: `I would like to feed ${selectedAnimal.name}.`,
            value: 2
          },
        ]
      },
    ]);

    switch (action) {
      case 0:
        console.log(`\n${selectedAnimal.name} is ${selectedAnimal.age} years old.\n`)
        break;

      case 1:
        console.log(`\n${selectedAnimal.name} was rescued from ${selectedAnimal.from()}.\n`)
        break;

      case 2:
        await this.feedAnimal(selectedAnimal);
        break;

      default: 
        return;
    }

  }

  async interactWithSloth() {
    const { animalValue } = await inquirer.prompt([
      {
        type: 'list',
        name: 'animalValue',
        message: 'What animal would you like to interact with?',
        choices: this.allSloths.map((sloth, index) => ({
          name: sloth.getName(),
          value: index
        }))
      },
    ]);

    const selectedAnimal = this.allSloths[animalValue]

    const { action } = await inquirer.prompt([
      {
        type: 'list',
        name: 'action',
        message: 'What would you like to do?',
        choices: [
          {
            name: `Get ${selectedAnimal.name}'s Age`,
            value: 0
          },
          {
            name: `Is ${selectedAnimal.name} green?`,
            value: 1
          },
          {
            name: `I would like to feed ${selectedAnimal.name}.`,
            value: 2
          },
        ]
      },
    ]);

    switch (action) {
      case 0:
        console.log(`\n${selectedAnimal.name} is ${selectedAnimal.age} years old.\n`)
        break;

      case 1:
        console.log(`\n${selectedAnimal.name} ${selectedAnimal.isGreen() ? 'is' : 'is not'} green.\n`)
        break;

      case 2:
        await this.feedAnimal(selectedAnimal);
        break;

      default: 
        return;
    }

  }

  async feedAnimal(selectedAnimal) {
    const { foodType } = await inquirer.prompt([
      {
        type: 'list',
        name: 'foodType',
        message: `What would you like to feed ${selectedAnimal.name}?`,
        choices: [
          'leaves',
          'grass',
          'meat',
          'melons'
        ]  
      }
    ]);

    const isEaten = selectedAnimal.willEat(foodType);

    if (isEaten) {
      console.log(`\n${selectedAnimal.makeSound()}`);
      console.log(`\n${selectedAnimal.name} has eaten your ${foodType}.\n`);
      return;
    }

    console.log(`\n${selectedAnimal.name} will not eat ${foodType}\n`);
    return;
  }

  async createHTML () {
    const file = await fs.promises.writeFile('./dist/index.html', generatehtml(this.allElephants, this.allTigers, this.allSloths), 'utf-8');
    console.log('\nindex.html has been generated.\n');

    return this.mainMenu();
  }

  init() {
    console.log('Welcome to ZooBuilder!\n');

    this.mainMenu()
  }
};

const zoo1 = new ZooBuilder();

zoo1.init();