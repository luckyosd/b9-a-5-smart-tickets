const allbtn = document.getElementsByClassName("add-btn");
for (const btn of allbtn) {
    btn.addEventListener("click", function(event) {
        document.querySelector('.add-btn')
        btn.style.backgroundColor = 'lime';
        btn.classList.add("rounded-xl");



        console.log(event.target)


        const selectedContainer = document.getElementById("selected-container");
        event.target.setAttribute("disabled", false);

        const div = document.createElement("div");
        div.classList.add("flex");
        div.classList.add("justify-around");
        const p1 = document.createElement("p");
        const p2 = document.createElement("p");
        const p3 = document.createElement("p");
        p1.innerText = "A1";
        p2.innerText = "Economy";
        p3.innerText = "550";
        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);
        selectedContainer.appendChild(div);
        updateTotalCost(550);
        updateGrandTotal(550);
        updateLeftPlayer();
    })
}

function updateTotalCost(target) {
    const previousTotal = document.getElementById("total-cost").innerText;
    const convertedTotal = parseInt(previousTotal);
    const convertedPrice = parseInt(target);
    const sum = convertedTotal + convertedPrice;
    document.getElementById("total-cost").innerText = sum;
}

function updateGrandTotal(target) {
    const previousTotal = document.getElementById("Grand-Total").innerText;
    const convertedTotal = parseInt(previousTotal);
    const convertedPrice = parseInt(target);
    const sum = convertedTotal + convertedPrice;
    document.getElementById("Grand-Total").innerText = sum;
}






function updateLeftPlayer() {
    const defaultLeft = document.getElementById("left").innerText;
    const convertDefaultLeft = parseInt(defaultLeft);
    document.getElementById("left").innerText = convertDefaultLeft - 1;
}