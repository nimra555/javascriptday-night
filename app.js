
function dayTime() {
    var inputElement = document.querySelector("input").value;
    console.log(inputElement);

    var spanInput = document.querySelector("span");
    console.log(spanInput);

    var backgroungImg = document.querySelector("#background-img");
    console.log(backgroungImg);

    var heading =  document.querySelector("h1");
    console.log(heading);

    if (inputElement < 12) {
        spanInput.innerHTML = "Good Morning";
        console.log(spanInput);
        backgroungImg.style.backgroundImage = "url('morning1.jpg')";
        backgroungImg.style.backgroundSize = "cover";
        backgroungImg.style.height = "100vh";
        backgroungImg.style.width = "100%";
        backgroungImg.style.backgroundRepeat = "no-repeat";
    }
    else if(inputElement >= 12 && inputElement < 17){
        spanInput.innerHTML = "Good Evening";
        console.log(spanInput);
        backgroungImg.style.backgroundImage = "url('evening1.jpg')";
        backgroungImg.style.backgroundSize = "cover";
        backgroungImg.style.height = "100vh";
        backgroungImg.style.width = "100%";
        backgroungImg.style.backgroundRepeat = "no-repeat";
    }
    else{
        spanInput.innerHTML = "Good Night";
        console.log(spanInput);
        backgroungImg.style.backgroundImage = "url('night.jpg')";
        backgroungImg.style.backgroundSize = "cover";
        backgroungImg.style.height = "100vh";
        backgroungImg.style.width = "100%";
        backgroungImg.style.backgroundRepeat = "no-repeat";
        spanInput.style.color = "white";
        heading.style.color = "white";
    }

    
}

