function inverse(str){
   //var a = str.split(""); //detache caractere separe par ""
   return str.split("").reverse().join(""); // retourne caractere separe par "", renverse et join ces caracteres.
 }
console.log (inverse("Patrick"));
