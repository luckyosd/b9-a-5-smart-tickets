 const allbtn = document.getElementsByClassName("add-btn");
 let count = 0;
 for (const btn of allbtn) {

     btn.addEventListener("click", function(e) {

         if (count < 4) {
             count = count + 1;

             document.getElementById("card-count").innerText = count
             console.log(e.target.parentNode.childNodes)

         } else {
             alert();
         }


     })


 }