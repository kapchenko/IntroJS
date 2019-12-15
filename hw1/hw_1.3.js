let mark = prompt( "Input any number") ; 
const markNum = Number(mark);
if (mark == "" ){
    alert ( "The invalid information is inputed");
}
else if (markNum < 60){
    alert("You`ve got F ") ;
}
else if ( markNum < 70) {
    alert("Your grade is D ");
}
else if ( markNum < 80) {
    alert("Your grade is C ");
 }
 else if ( markNum < 90) {
    alert("Your grade is B ");
 }
 else if ( markNum  <= 100) {
    alert("Your grade is A ");
 }
