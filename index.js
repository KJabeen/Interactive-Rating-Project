



var rateContainer = document.querySelector(".container1");

var thankContainer = document.querySelector(".container2");

var submit = document.querySelector(".submitted");

const rate = document.querySelectorAll(".rating");

const rating = document.getElementById("rating");

submit.addEventListener("click", function() {
    thankContainer.classList.remove("hidden");
    rateContainer.classList.add("hide");
});

    // =====using forEach loop======
    
rate.forEach(rate => {
    rate.addEventListener("click", () => {
        rate.style.backgroundColor = " hsl(216, 12%, 54%)";
        var rateButton = rate.innerHTML;
        rating.innerHTML = rateButton;
    });
    
});

            // =====with for loop======
            
        // var numberOfRating = document.querySelectorAll(".rating").length;

//         for (let i = 0; i < numberOfRating; i++) {

//         const rate = document.querySelectorAll(".rating")[i];
//         rate.addEventListener("click" , function () {

//         var rateButton = this.innerHTML;
//         rate.style.backgroundColor = " hsl(216, 12%, 54%)";
//             rating.innerHTML = rateButton;
       
//     });      
// };



        // submit.addEventListener("click", function () {
        //     var rateContainer = document.querySelector(".container1");
        //     rateContainer.style.display= 'none'
        // });
        
            

            
           

            // var selectRate= "You selected " + rateButton + " out of 5";
            //  location.href= "thank.html";
            
            
          
             


