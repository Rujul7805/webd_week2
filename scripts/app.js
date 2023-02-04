"use strict";

(function () {


   function DisplayHomePage() {
       console.log("Home Page Called")
       let AboutUsButton = document.getElementById("AboutUsBtn");
       AboutUsButton.addEventListener("click", function () {
           location.href = "about.html"
       });


       $("#AboutUsBtn").on("click", () => {
           location.href = "index.html"
       });
       $("main").append('<p id="MainParagraph" class="mt-3" > This is the main paragraph</p> ');
       $("body").append('<article class="container"><p id="ArticleParagraph" class="mt-3">This is my article paragraph</p></article>');

       $("main").append('<p id="MainParagraph" class="mt-3"> This is my main Paragraph</p>');

   }

       function DisplayProductsPage() {
           console.log("Products Page Called")

       }

       function DisplayServicePage() {
           console.log("Service Page Called")
       }


       function DisplayAboutUsPage() {

       }

       function DisplayContactPage() {
           console.log("Contact Page Called")

           let sendButton = document.getElementById("sendButton");
           let subscribeCheckBox = document.getElementById("subscribeCheckbox");

           sendButton.addEventListener("click", function (event) {
               event.preventDefault();
               if (subscribeCheckBox.checked) {

                   let contact = new Contact(fullName.value, contactNumber.value, emailAddress.value);
                   if (contact.serialize()) {
                       let key = contact.FullName.substring(0, 1) + Date.now();
                       localStorage.setItem(key, contact.serialize());
                   }

               }

           });

           sendButton.addEventListener("click", function (event) {

               if (subscribeCheckBox.checked) {

                   let contact = new Contact(fullName.value, contactNumber.value, emailAddress.value);
                   if (contact.serialize()) {
                       let key = contact.FullName.substring(0, 1) + Date.now();
                       localStorage.setItem(key, contact.serialize());
                   }

               }
           });


       }


       function DisplayContactListPage() {
           console.log("Contact List Page Called")
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
               case "Contact List":
                   DisplayContactListPage();
                   break;
           }

       }

       window.addEventListener("load", Start)



}) ();