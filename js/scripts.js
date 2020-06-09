// Business Logic



// UI Logic
$(document).ready(function(){
  $("form#sentence").submit(function(event) {
    event.preventDefault ();
    const inputSentence = $("input#sentence1").val();
    
    String strArray[inputSentence] = str.split("")

    // const arr =["z","e","f","o","z"]
    // for (let i=0; i<=arr.length;i++) {
    // if  
    //   arr[i]=== ("a"||"e"||"o"||"u"||"i")
    //   arr[i]== ("--")
    //  //("a"||"e"||"o"||"u"||"i")
    // }
  });
});