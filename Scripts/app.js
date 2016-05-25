/* Main JavaScript file */
// global scope


//IIFE - Immediately Invoked Functiona Expression
(function(){
    "use strict";
    var firstPTag = document.getElementById("firstParagraph");
    
    // event listener
    firstPTag.addEventListener("click", firstParagraphClicked);
    
    //event listener hover
    firstPTag.addEventListener("mouseover", firstParagraphIsHovered);
    
    var firstParagraphIsClicked =false;
    var firstParagraphIsHovered=false;
    
    //Code codes in here   
    console.log("App Started...")
    
    var myFirstParagraph = "This is my first paragraph. I'm writing this for demonstration purposes. " +
    "This is the third sentence of my first paragraph.";
   
   // declare named function
    function writeToFirstParagraph() {
         // for debugging only
        console.log("Execting writeToFirstParagraph");
       
        // Create a reference to a p element with an id of "firstParagarph"
        firstPTag.textContent = myFirstParagraph;
          
    }
    // event handler for firstParagraphIsClicked
    function firstParagraphClicked(){
        if(firstParagraphIsClicked){
            firstPTag.style.color="black";
            firstParagraphIsClicked = false;
        }else {
            firstPTag.style.color="red";
            firstParagraphIsClicked = true;
        }
    }
        
  // event handler for firstParagraph hover
    function firstParagraphHovered(){
        if(firstParagraphIsHovered){
            firstPTag.style.color="black";
            firstParagraphIsHovered = false;
        }else {
            firstPTag.style.color="green";
            firstParagraphIsHovered = true;
        }
        
    }
    /*
    // declare a variable that points to anonymous function
    var writeToFirstParagraph=function() {
        // for debugging only
        console.log("Execting writeToFirstParagraph");
       
        // Create a reference to a p element with an id of "firstParagarph"
        var firstPTag = document.getElementById("firstParagraph");
        
        firstPTag.textContent = "It's alive!!!";
        
       
        
    }
    */
    // as known as ; nickname
    //var alias=writeToFirstParagraph;
    
    // execute function
    writeToFirstParagraph();
    
    //console.log(firstPTag);
    
})();