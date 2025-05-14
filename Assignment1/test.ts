{
  // test1 start
  function formatString(input: string, toUpper?: boolean): string {
    if (toUpper === false) {
      return input.toLowerCase();
    }
    return input.toUpperCase();
  }
  const showString = formatString("Hello", false);

  //test1 end
}
