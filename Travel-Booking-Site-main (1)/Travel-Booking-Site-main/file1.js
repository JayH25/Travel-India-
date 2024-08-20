let formContainer = document.querySelector(".formContainer");
// let login = document.querySelector(".login button"); // login wala button.
let close = document.querySelector(".close");
let body = document.querySelector("body");
let LOGIN = document.querySelector(".LOGIN");
let SIGNUP = document.querySelector(".SIGNUP");
let signUp = document.querySelector(".sign-up");
let Login = document.querySelector(".log-in");
let forgotPass = document.querySelector(".forgotPass");
let forgot = document.querySelector(".forgot");
let signIn = document.querySelector(".sign-in");
let q1 = document.querySelector(".first");
let q2 = document.querySelector(".second");
let q3 = document.querySelector(".third");
let q4 = document.querySelector(".fourth");



let count = 0;
function changeImage(count)
{
  close.addEventListener('click' , () => {
    count=10;
  });
  if(count == 10) return 0;
  setTimeout(() => {
    if(count == 0)  loginImage.src = "./Images/Firefly Travel booking site images 93503 (1).jpg";
    else if(count == 1) loginImage.src = "./Images/Firefly Travel booking site images 19399.jpg";
    else if(count == 2) loginImage.src = "./Images/Firefly Travel booking site images 76388.jpg";
    else if(count == 3) loginImage.src = "./Images/Firefly Travel booking site images 99430.jpg";
    count++;
    if(count == 4)  count=0;
    
    console.log(`count changed from to ${count}`);
    changeImage(count);
  }, 1000);

  
}

signIn.addEventListener('click' , () => {
    formContainer.showModal();
    count=0;
    changeImage(count);
    body.style.filter = "blur(4px)";
    body.style.overflow = "none";
    SIGNUP.style.display = "none";
    LOGIN.style.display = "block";
    forgotPass.style.display = "none";
});

close.addEventListener('click' , () => {
    formContainer.close();
    body.style.filter = "blur(0px)";
    console.log('closed');
})
signUp.addEventListener('click' , () => {
    SIGNUP.style.display = "block";
    console.log("displaying signup");
    LOGIN.style.display = "none";
    console.log("hided login page ...");
})
Login.addEventListener('click' , () => {
    SIGNUP.style.display = "none";
    LOGIN.style.display = "block";
})

forgot.addEventListener('click' , () => {
    forgotPass.style.display = "block";
    SIGNUP.style.display = "none";
    LOGIN.style.display = "none";
    console.log("displaying");
})


                                    // FAQ Section
//Q1
let ans1 = document.createElement("div");
ans1.innerText = "Our website is designed to be intuitive and easy to navigate, ensuring a smooth booking experience for users of all ages and technical abilities.";

let cnt1 = 0;

q1.addEventListener('click' , () => {
    if(cnt1 %2 == 0)
    {
        ans1.classList.add("trans");
        q1.after(ans1);

        
        ans1.classList.add("faqbox");
        ans1.classList.add("seperate");

    }
    else
    {
        ans1.remove();
        // ans1.classList.remove("qStyle");
    }
    cnt1++;
    
});

//Q2

let ans2 = document.createElement("div");
ans2.innerText = "Find the flight search section.Enter your departure city or airport..Search for Flights.Click the Search button to display available flights based on your criteria.Select a FlightReview the list of available flights.Compare prices, flight times, layovers, and airline options.Select the flight that best meets your needs.";

let cnt2 = 0;
q2.addEventListener('click' , () => {
    if(cnt2 %2 == 0)
    {
        ans2.classList.add("trans");
        q2.after(ans2);
        ans2.classList.add("faqbox");
        ans2.classList.add("seperate");
    }
    else
    {
        ans2.remove();
        // ans1.classList.remove("qStyle");
    }
    cnt2++;
    
});
//Q3
let ans3 = document.createElement("div");
ans3.innerText = "To book a train ticket on our website, start by locating the train search section, typically found on the homepage. Review this list carefully, comparing train timings, journey duration, and class availability. Finally, select the train that best fits your schedule and preferences.";

let cnt3 = 0;
q3.addEventListener('click' , () => {
    if(cnt3 %2 == 0)
    {
        ans3.classList.add("trans");
        q3.after(ans3);
        ans3.classList.add("faqbox");
        ans3.classList.add("seperate");
    }
    else
    {
        ans3.remove();
        // ans1.classList.remove("qStyle");
    }
    cnt3++;
    
});
//Q4
let ans4 = document.createElement("div");
ans4.innerText = "Booking bus tickets through our website offers several advantages. We provide a comprehensive list of bus operators and routes, allowing you to compare various options and choose the one that best fits your needs. The platform shows real-time availability of seats, ensuring that the information you see is accurate and up-to-date. ";

let cnt4 = 0;
q4.addEventListener('click' , () => {
    if(cnt4 %2 == 0)
    {
        ans4.classList.add("trans");
    
        q4.after(ans4);
        ans4.classList.add("faqbox");
        ans4.classList.add("seperate");
        ans4.style.marginTop = "-1rem";
    }
    else
    {
        ans4.remove();
    }
    cnt4++;
});

// Select all FAQ items
const faqItems = document.querySelectorAll(".faq-question");

// Add click event listeners to each FAQ item
faqItems.forEach(item => {
    const svgIcon = item.querySelector("svg");
    let isRotated = false;

    item.addEventListener('click', () => {
        if (isRotated) {
            svgIcon.classList.remove('rotate-45');
            svgIcon.classList.add('rotate-0');
        } else {
            svgIcon.classList.remove('rotate-0');
            svgIcon.classList.add('rotate-45');
        }
        isRotated = !isRotated;
    });
});





const imageContainer = document.querySelector('.images');
const imageWidth = document.querySelector('.images div').offsetWidth;
const totalImages = document.querySelectorAll('.images div').length;

// Duplicate the images for seamless scrolling
imageContainer.innerHTML += imageContainer.innerHTML;

// Reset the scroll position
let scrollPosition = 0;

function scrollImages() {
  scrollPosition += imageWidth / 50; // Adjust scrolling speed by changing divisor
  if (scrollPosition >= imageWidth * totalImages) {
    scrollPosition = 0; // Reset scroll position to loop seamlessly
  }
  imageContainer.style.transform = `translateX(-${scrollPosition}px)`;
}

// Start continuous scrolling
let scrollInterval = setInterval(scrollImages, 20); // Adjust interval for smoother or faster scrolling

// Stop auto-scrolling on hover
imageContainer.addEventListener('mouseover', () => {
  clearInterval(scrollInterval);
});

// Restart auto-scrolling when not hovering
imageContainer.addEventListener('mouseout', () => {
  scrollInterval = setInterval(scrollImages, 20);
});



