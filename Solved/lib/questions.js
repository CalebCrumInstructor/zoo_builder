module.exports = {
  mainMenuQuestions: [
    {
      type: 'list',
      name: 'menuChoice',
      message: 'What would you like to do?',
      choices: [
        'Add Animal to Zoo',
        'Interact With Animals',
        'Create Web Page with my Animals',
        'exit'
      ]
    }
  ],

  addAnimalQuestions: {
    firstPrompt: [
      {
        type: 'list',
        name: 'animalType',
        message: 'What type of animal will you add?',
        choices: [
          'Elephant',
          'Tiger',
          'Sloth',
        ]
      },
      {
        type: 'input',
        name: 'animalName',
        message: 'What is your animals name?',
        validate: function(answer) {
          if (answer.length > 0) return true;
          return "Please Enter a value."
        }
      },
      {
        type: 'input',
        name: 'animalAge',
        message: 'How old is your animal?',
        validate: function(answer) {
          if (answer.length > 0) return true;
          return "Please Enter a value."
        }
      }
    ],
    elephantPrompt: [
      {
        type: 'confirm',
        name: 'tusksPresent',
        message: 'Does your elephant have tusks?',
      }
    ],
    tigerPrompt: [
      {
        type: 'input',
        name: 'rescuedFrom',
        message: 'Where was your tiger rescued from?',
        validate: function(answer) {
          if (answer.length > 0) return true;
          return "Please Enter a value."
        }
      }
    ],
    slothPrompt: [
      {
        type: 'confirm',
        name: 'hasAlgae',
        message: "Does your sloth have algae on it's coat?",
      }
    ]
  },

  interactWithAnimalsQuestions: [
    {
      type: 'list',
      name: 'animalType',
      message: 'What kind of animal would you like to interact with?',
      choices: [
        'Elephant',
        'Tiger',
        'Sloth',
      ]  
    }
  ],
}