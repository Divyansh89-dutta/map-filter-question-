import React from 'react'

function PeopleList() {
    const people = [
        { name: "Alice", age: 17 },
        { name: "Bob", age: 20 },
        { name: "Charlie", age: 15 },
      ];
      // fliter people who are 18 or older
      const adults = people.filter(person => person.age >= 18);
  return (
    <div>
        <h1>Age</h1>
        <ul>
            {adults.map((adults, index) =>(
                <li key={index}>
                    {adults.name}: {adults.age} years old
                </li>
            ))}
        </ul>
    </div>
  )
}

export default PeopleList