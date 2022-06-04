//pretend the path to this file is ./types/pets.d.ts
declare namespace Pets {
  type Status = "adopted" | "homeless" | "pending";

  interface Pet {
    name: string;
    age: number;
  }

  interface Cat extends Pet {
    fluffy: boolean;
    grumpy: boolean;
  }

  interface Dog extends Pet {
    big: boolean;
    friendly: boolean;
  }
}

///////////////////////////////////////////////////////////////////////////

//pretend the path to this file is ./App.tsx
function App(): JSX.Element {
  const [cat, setCat] = useState<Pets.Cat | null>(null);
  const [dog, setDog] = useState<Pets.Dog | null>(null);

  //...bunch of code

  //return <div>Pets Stuff</div>
}

//QUESTION: Can we use ES6-modules to import Pets into App.tsx instead of using namespaces?
