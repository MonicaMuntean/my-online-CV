$(document).ready(onHtmlLoaded);
//stiu ca e codul simplut, si nu face dacat o validare pe baza !="", 
//dar nu cred ca mai apuc sa-l fac mai complex pentru ca mi s-au imbolnavit copiii...
//daca totusi o sa se faca bine repede, pana vineri, atunci mai adaug si alte filtre
//bine, ca practic nici asa nu se va ridica la nivelul de junior, dar macar cat de cat, ca sa arat ca am ramas cu ceva de la curs
function onHtmlLoaded() {
    
    var formContent = document.getElementById("contactForm");
    formContent.addEventListener("submit", function(e){
         e.preventDefault();
           if($('.inputs').val() !== "" ){
                 let contacterId = $("#name").val();
                 $("#contacterID").html(contacterId); 
             
                 $("#message").removeClass("hiddenObj");
    
                 setTimeout(() => {
                 $("#message").addClass("hiddenObj");
                 }, 5000);
            }
    });
         
}