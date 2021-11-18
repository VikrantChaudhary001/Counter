(function () {
    const buttons = document.querySelectorAll(".btn");
    let count = 0;
  
    //Add event listeners and functionailty to each button
    buttons.forEach(function (button) {
      button.addEventListener("click", function () {
        if (button.classList.contains("decrease")) {
          count--;
        } else if (button.classList.contains("increase")) {
          count++;
        }else if(button.classList.contains("reset")){
          count = 0;
        }
  
        //Select the counter text
        const counter = document.querySelector("#value");
        counter.textContent = count;
  
        if (count < 0) {
          counter.style.color = "red";
        } else if (count > 0) {
          counter.style.color = "green";
        }  else {
          counter.style.color = "grey";
        }
      });
    });
  })();