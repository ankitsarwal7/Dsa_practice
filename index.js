//  1 => Program Question: Search and Count Students in an Array
// Write a program that includes a list of student names. Implement a function that performs the following tasks:

// Searches for a specific student's name in the array.
// If the name is found, output a message indicating the name was found.
// If the name is not found, output a message saying it was not found.


 
// const StudentName = ['ankit', 'amit', 'sumit', 'rohit']

// function findstudent (allStudent, studentName) {
//      for(let i= 0; i < allStudent.length; i++) {
//         if( allStudent[i] === studentName) {
//             console.log(` found ${studentName}`)
//         }
//         else (!studentName)
//         console.log("name not found ");
        
//      }
 
// }
// findstudent(StudentName, 'alex')



//-------------------------------------------------------------------------------------------


// 2 => Custom Array Class Implementation

 

class myArray {
    constructor() {
        this.lenght = 0,
        this.data = {}
    }


Push(item) {
    this.data[this.lenght] = item;
    this.lenght++;
    return this.lenght;
}

get(index) {
    return this.data[index]
}

pop() {
  const lastItme = this.data[this.lenght - 1]

  delete this.data[this.lenght - 1]

  this.lenght--;

  return lastItme;


 }

 shift(){
    const firstitem = this.data[0]

   for (let i = 0; i < this.data.lenght; i++) {
        this.data[i] = this.data[i+1]
    }
    delete this.data[this.lenght -1]
    this.lenght--
    return firstitem


 }




}


const myNewArray = new myArray();
myNewArray.Push('apple');
myNewArray.Push('banana');
myNewArray.Push('mango');
myNewArray.Push('guavava');
// myNewArray.pop();



console.log(myNewArray);
console.log(myNewArray.shift());
console.log(myNewArray);






// console.log(myNewArray.get(1));

 
 

//---------------------------------------------------------------------------------





