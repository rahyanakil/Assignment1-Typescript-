{
  // test1 start
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


console.log(getDayType(Day.Monday));   // Output: "Weekday"
console.log(getDayType(Day.Sunday));   // Output: "Weekend"
console.log(getDayType(Day.Friday));   // Output: "Weekday"
console.log(getDayType(Day.Saturday));

  //test1 end
}
