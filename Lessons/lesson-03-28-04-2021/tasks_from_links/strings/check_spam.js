function checkSpam(string) {
  string = string.toLowerCase();

  if (string.includes("viagra") || string.includes("xxx")) {
    return true;
  } else {
    return false;
  }
}
console.log(checkSpam("ADADcewwceF vsdvXXrrr Viagra"));
