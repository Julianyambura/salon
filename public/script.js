// /**
//  * Retrieves destination data from a database.
//  *
//  * @param {string} destination - The destination to retrieve data for.This is a JSDoc tag that indicates a parameter of a function. It's used to document the function's parameters.the string specifies the type of the destination parameter. In this case, it's a string. This means that the destination parameter is expected to be a string value.
//  * @returns {object} An object containing destination data. This is another JSDoc tag that indicates the return value of a function. It's used to document what the function returns.the object specifies the type of the return value. In this case, it's an object. This means that the function returns an object value.
//  */
// //
// function getDestinationData(destination) {
//   // Simulate fetching data from a database
//   // Replace the followspecific data here
//   };

//   // For demonstration purposes, return static data
//   if (destination === "Paris") {
//     destinationData.touristAttractions = ["Eiffel Tower", "Louvre Museum"];
//     destinationData.lodgings = ["Hotel Le Bristol", "Hotel Plaza Athenee"];
//     destinationData.vehicles = ["Metro", "Bus"];
//     destinationData.weather = "Sunny";
//   }

//   return destinationData;
// }

// // Example on how we can use it
// const parisData = getDestinationData("Paris");
// console.log(parisDating object with real database call logic
//   const defaultDestinationData = {
//     touristAttractions: [],
//     lodgings: [],
//     vehicles: [],
//     weather: "",
//   };

//   // Here, you would use the 'destination' parameter to query your database.
//   // For now, this function returns a static object for demonstration purposes.
//   // In a real-world scenario, you'd want to handle database errors and edge cases.
//   const destinationData = {
//     ...defaultDestinationData,
// Add destination-a);
("use strict");

/**
 * navbar toggle
//  */
// const itinerary = {
//   name: "My Dream Vacation",
//   destinations: [
//     {
//       name: "Paris",
//       activities: ["Visit Eiffel Tower", "Explore Louvre Museum"],
//       accommodations: ["Hotel de Crillon"],
//     },
//     // ... more destinations
//   ],
// };
// const overlay = document.querySelector("[data-overlay]");
// const navOpenBtn = document.querySelector("[data-nav-open-btn]");
// const navbar = document.querySelector("[data-navbar]");
// const navCloseBtn = document.querySelector("[data-nav-close-btn]");
// const navLinks = document.querySelectorAll("[data-nav-link]");
// const navLinksContainer = document.querySelector("[data-nav-links-container]");

// const navElemArr = [navOpenBtn, navCloseBtn, overlay];

// const navToggleEvent = function (elem) {
//   for (let i = 0; i < elem.length; i++) {
//     elem[i].addEventListener("click", function () {
//       navbar.classList.toggle("active");
//       overlay.classList.toggle("active");
//     });
//   }
// };

// navToggleEvent(navElemArr);
// navToggleEvent(navLinks);

// /**
//  * header sticky & go to top
//  */

// const header = document.querySelector("[data-header]");
// const goTopBtn = document.querySelector("[data-go-top]");

// window.addEventListener("scroll", function () {
//   if (window.scrollY >= 200) {
//     header.classList.add("active");
//     goTopBtn.classList.add("active");
//   } else {
//     header.classList.remove("active");
//     goTopBtn.classList.remove("active");
//   }
// });
element.addEventListener("click", myFunction);

function myFunction() {
  document.getElementById("demo").innerHTML = "Hello World";
}
