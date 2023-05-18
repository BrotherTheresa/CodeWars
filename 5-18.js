function reverseLetter(str) {
 let reggieStr = str.replace(/[^a-zA-Z]/g, '')
  return reggieStr.split("").reverse().join("")
  
  