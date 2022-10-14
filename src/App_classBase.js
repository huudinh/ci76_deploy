function App() {
  class Person{
    constructor(name){
      this.name = name;
    }

    sayHello() {
      console.log(`Hello, my name is ${this.name}`);
    }
  }

  class Student extends Person {
    constructor(name, grade) {
      super(name);
      this.grade = grade;
    }

    sayHello(){
      super.sayHello();
      console.log('I am grade ' + this.grade);
    }

  }

  const personA = new Person('Alice');
  const personB = new Person('Bob');

  const studentA = new Student('Alice', 10);

  // personA.sayHello();
  // personB.sayHello();

  studentA.sayHello();


  return (
    <div>
      Hello world
    </div>
  );
}

export default App;
