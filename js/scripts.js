// Business Logic



// UI Logic
$(document).ready(function(){
  $("form#sentence").submit(function(event) {
    event.preventDefault ();
    const inputSentence = $("input#sentence1").val();

    for (let i=0; i<inputSentence.length; i++) {
      let charArray = inputSentence.split("a").join("--").split("e").join("--").split("i").join("--").split("o").join("--").split("u").join("--")
      
      $("p#output").append(
        charArray
      )
      break;
    }
    //for (let i=0; i<charArray.length; i++) {
      //if  (charArray[i] === ("a"||"e"||"o"||"u"||"i"))
        
        //charArray[i]== ("--")
      
      //let 
    
  });
});