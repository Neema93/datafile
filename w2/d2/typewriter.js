//add string
const sentence = "hello there from lighthouse labs";
//loop through charecter

for (const char of sentence) {
    setTimeout(() => {
      process.stdout.write(char);
      
  },50);
}
