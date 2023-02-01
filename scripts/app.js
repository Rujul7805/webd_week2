"use strict";

(function () {

   function DisplayHomePage() {
       let AboutUsButton = document.getElementById("AboutUsBtn");
       AboutUsButton.addEventListener("click",function (){
           location.href = "about.html"
       });


   }
   function DisplayProductsPage() {
       let ProductButton = document.getElementById("ProductBtn");
       ProductButton.addEventListener("click",function (){
           location.href = "products.html"
       });
   }

   function DisplayServicePage() {
       let ServiceButton = document.getElementById("ServiceBtn");
       ServiceButton.addEventListener("click",function (){
           location.href = "Service.html"
       });
   }


   function DisplayAboutUsPage() {
       let AboutUsButton = document.getElementById("AboutUsBtn");
       AboutUsButton.addEventListener("click",function (){
           location.href = "about.html"
       });
   }

   function DisplayContactPage() {
       let AboutUsButton = document.getElementById("AboutUsBtn");
       AboutUsButton.addEventListener("click",function (){
           location.href = "about.html"
       });
   }

   function Start() {
       console.log("App Started!")
       switch (document.title) {
           case "Home":
               DisplayHomePage();
               break;
           case  "Our Products":
               DisplayProductsPage();
               break;
           case "About Us":
               DisplayAboutUsPage();
               break;
           case "Our Services":
               DisplayServicePage();
               break;
           case "Contact Us":
               DisplayContactPage();
               break;
       }

   }



}) ();