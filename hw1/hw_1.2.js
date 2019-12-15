let name = prompt("What's your name?");

if( name == ""){
    alert("You inputed invalid info");
   
}
else {
    alert("Hello " + name);  

}
let birthyear = prompt (" Please enter your birthday year") ; 
const birth = Number(birthyear);
if ( birth == "" ||birth > 2019 ){
    alert("You inputed invalid info");
}
else {
    alert(`Your age is  ${ 2019- birth} years`) ;
}