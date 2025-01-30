import React from "react";

function Map() {

//     // Map question done
//   const number1 = [2, 4, 6, 8];
//   const triplednNumber = number1.map(num => num * 3);

//   const words1 = ["hello", "world", "divyansh"];
//   const uppercaseWords = words1.map((word) => word.toUpperCase());

//   const number2 = [1, 2, 3, 4];
//   const squaredNumbers = number2.map((num) => num * num);

//   const names = ["hello", "rishi", "jansi"];
//   const perfixedName = names.map((name) => `mr ${name}`);

//   const students1 = [
//     { name: "divyansh", marks: 80 },
//     { name: "rishi", marks: 90 },
//     { name: "jansi", marks: 75 },
//   ];
//   const increasedMarsk = students1.map((student) => student.marks + 5);

//   const numbers3 = [1, 2, 3, 4];
//   const stringNumbers = numbers3.map((num) => num.toString());

//   const numbers4 = [1, 2, 3, 4];
//   const booleanNumbers = numbers4.map((num) => num % 2 === 0);

//   const words2 = [
//     "hello",
//     "world",
//     "divyansh",
//     "rishi",
//     "jansi",
//   ];
//   const captilizedWords = words2.map(word => word.charAt(0).toUpperCase()+ word.slice(1));

//   const celsiuTemps = [0,10,15,20,25];
//   const fahrenheitTemps = celsiuTemps.map(temp => (temp * 9/5) + 32);

  // Filter question done
  const number5 = [5, 10, 15, 20, 25];
  const filteredNumbers = number5.filter(num => num > 10);
  
  const words3 = ["hello", "world", "divyansh", "rishi"];
  const longWords = words3.filter(word => word.length > 4);
  
  const products2 = [
    { name: "divyansh", price: 100 },
    { name: "rishi", price: 200 },
    { name: "jansi", price: 150 },
    { name: "prasanna", price: 50 },
  ];
  
  const cheapPorts = products2.filter(product => product.price <= 50); // Fixed condition
  
  const emails = [
    "divyansh@gmail.com",
    "rishi@gmail.com",
    "jansi@gmail.com",
  ];
  
  const validEmails = emails.filter(email => email.includes("@gmail.com"));
  
  const number7 = [2, 3, 4, 5, 6, 7, 8];
  
  const isPrime = num => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };
  
  const primeNumbers = number7.filter(isPrime);
  
  const students2 = [
    { name: "divyansh", age: 20, marks: 80 }, // Added 'marks' property
    { name: "rishi", age: 25, marks: 90 },
    { name: "jansi", age: 18, marks: 70 },
    { name: "prasanna", age: 22, marks: 85 },
  ];
  
  const highScoringStudents = students2.filter(student => student.marks > 75); // Fixed property name
  
  const mixedArray = [1, "hello", true, "world", 42, "Divyansh"];
  const stringOnly = mixedArray.filter(item => typeof item === "string");
  
  const tasks = [
    { name: "divyansh", age: 20, completed: true }, // Added 'completed' property
    { name: "rishi", age: 25, completed: false },
  ];
  
  const completedTasks = tasks.filter(task => task.completed); // Now it works
  
    return (
      <>
        <p>{JSON.stringify(filteredNumbers)}</p>
        <p>{JSON.stringify(longWords)}</p>
        <p>{JSON.stringify(cheapPorts)}</p>
        <p>{JSON.stringify(validEmails)}</p>
        <p>{JSON.stringify(primeNumbers)}</p>
        <p>{JSON.stringify(highScoringStudents)}</p>
        <p>{JSON.stringify(stringOnly)}</p>
        <p>{JSON.stringify(completedTasks)}</p>
      </>
    );
  }

  

export default Map;
