1. What are some differences between interfaces and types in TypeScript?

Answer: Interface and type are used to define the shape of objects.interface is mainly used for object types, especially in OOP-style code.type can represent any type like objects, unions, primitives, etc. Interfaces can be extended using extends.Types can also be extended using intersections (&).Types are more flexible for composing complex types.

Interfaces can be merged and where types can't.Type aliases are more versatile for unions and tuples.

Interface Example:
interface Vehicle {
  name: string;
  age: number;
}

type Car = {
  name: string;
  role: string;
}
type CarVehicle = Car & Vehicle;


2. How does TypeScript help in improving code quality and project maintainability?

Answer: TypeScript helps improve code quality and project maintainability in many practical ways. First, it adds static typing to JavaScript, which means you can catch errors while writing code, not just at runtime. This saves time and reduces bugs. It helps you define the exact shape of your data using interfaces and types, so you know what to expect and what to pass around in your app.

When working in a team, TypeScript makes collaboration easier because everyone can clearly see what each function or variable should be. It improves code readability by making the purpose of variables and functions more obvious. This is super helpful when coming back to your code after weeks or months. TypeScript also gives you smart IntelliSense support in code editors like VS Code, which speeds up development and reduces mistakes.

In large projects, TypeScript provides a strong structure and organization. You can scale your codebase with more confidence. It works really well with modern frameworks like React, Angular, and Node.js. It reduces reliance on tests for catching simple type errors. In short, TypeScript makes your code more predictable, easier to debug, and simpler to maintain in the long run
