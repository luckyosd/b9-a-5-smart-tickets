const allbtn1 = document.getElementsByClassName("add-btn");
let count = 0;
for (const btn of allbtn1) {

    btn.addEventListener("click", function(e) {

        if (count < 4) {
            count = count + 1;

            document.getElementById("card-count").innerText = count
            console.log(e.target.parentNode.childNodes)

        } else {
            alert('less than 5');
        }


             
    })


     
}