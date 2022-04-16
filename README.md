# zoo_builder


## Instructions


### Step 1:

* In the unsolved folder, create a package.json file and install inquirer jest.

* Create the following files and folders...
  * index.js
  * empty dist folder
  * test folder
    * Tiger.test.js
  * src folder
    * generatehtml.js
  * lib folder 
    * questions.js file
    * Classes folder
      * Animal.js
      * Elephant.js
      * Sloth.js
      * Tiger.js
      * minxin.js
  
* In Animal.js, create and export an Animal class that...
  * takes in a name and age
  * sets a value of isHungry to true
  * has two methods
    * getName(), which returns the name value
    * getAge(), which returns the age value

* In Elephant.js, create a class that extends animal, it should...
  * take a boolean value as to whether or not the elephant has tusks
  * sets the value of sound to 'Trumpets'
  * sets the value of food to an array with the values of 'leaves' and 'grass'
  * has one method named hasTusks() that returns whether or not the elephant has tusks

* In Tiger.js, create a class that extends animal, it should...
  * take a string value stating where the the tiger was rescued from
  * sets the value of sound to 'Roar'
  * sets the value of food to an array with the values of 'meat'
  * has one method named from() that returns where the the tiger was rescued from

* In Sloth.js, create a class that extends animal, it should...
  * take a boolean value as to whether or not the sloth has algae on it's fur
  * sets the value of sound to 'Burps'
  * sets the value of food to an array with the values of 'leaves' and 'melons'
  * has one method named isGreen() that returns whether or not the sloth has algae

* When finished, return to the main room for review


