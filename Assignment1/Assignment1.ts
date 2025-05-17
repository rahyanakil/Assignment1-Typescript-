{
 
  function formatString(input: string, toUpper?: boolean): string {
    if (toUpper === false) {
      return input.toLowerCase();
    }
    return input.toUpperCase();
  }

  const books =[
  {
  title:"Book A",
  rating:4.5,
  },
  {
    title:"Book B",
    rating:3.2
  },
  {title:"Book C",
    rating:5.0
  }
];
function filterByRating (items:{title:string;rating:number
}[]):{title:string;rating:number}[]{
  const filteredBooks =items.filter(item=>item.rating>=4.0)
  return filteredBooks;

}

function concatenateArrays<T>(...arrays: T[][]): T[] {
  return arrays.reduce((acc, curr) => acc.concat(curr), []);
}

class Vehicle{
  private make:string;
  private year:number;

  constructor(make:string,year:number){
  this.make =make;
  this.year =year;
}
public getInfo():string{
  return `Make:${this.make},Year:${this.year}`
}

}
class Car extends Vehicle{
  private model:string;
  constructor(make:string,year:number,model:string){
    super(make,year);
    this.model=model;
  }
  public getModel():string{
    return`Model:${this.model}`;
  }
}

 function processValue(value:string|number):number{
   if (typeof value === "string" ){
    return value.length;
   }
   else if (typeof value ==="number"){
    return value *2
   }
   return 0;
   
 }

interface Product {
  name:string;
  price:number;
}
const products :Product[] =[{name:"pen",price:10},
  {name:"Notebook",price:25},
  {name:"Bag",price:50}
];

function getMostExpensiveProduct (products:Product[]):Product|null{
  if(products.length===0){
    return null
  }
  return products.reduce((maxProduct ,currentProduct)=>{
    return (currentProduct.price>maxProduct.price)?currentProduct:maxProduct
  })
}

enum Day{
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}
function getDayType(day:Day):string{
  if(day ===Day.Saturday || day ===Day.Sunday){
    return "Weekend";
  }
  return "Weekday"
}


async function squareAsync(n:number):Promise<number>{
  if (n<0){
    throw new Error("Negative Number");
  }
  await new Promise(resolve=>setTimeout(resolve,1000));
  return n*n;
}

}
