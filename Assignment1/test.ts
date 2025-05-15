{
  // test1 start


async function squareAsync(n:number):Promise<number>{
  if (n<0){
    throw new Error("Negative Number");
  }
  await new Promise(resolve=>setTimeout(resolve,1000));
  return n*n;
}

       // Output after 1s: 16
squareAsync(-3).catch(console.error);  


  //test1 end
}
