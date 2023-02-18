"use strict";

(function () {


    function DisplayLoginPage() {
        // Obtain a reference to the messageArea using jQuery and initially hide it
        var messageArea = $('#messageArea');
        messageArea.hide();

        // Add click event handler to the login button
        $('#loginButton').on('click', function() {
            // Set initial success flag to false
            var success = false;

            // Instantiate a new user
            var user = new Core.User();

            // Make an Ajax call to the users.json data
            $.get('/data/users.json', function(users) {
                // Check if the username and password match
                users.forEach(function(userData) {
                    if (userData.username === $('#username').val() && userData.password === $('#password').val()) {
                        success = true;
                        user.displayName = userData.displayName;
                        user.emailAddress = userData.emailAddress;
                        user.username = userData.username;
                    }
                });

                // If login was successful, store the user in sessionStorage and redirect to contact-list.html
                if (success) {
                    sessionStorage.setItem('user', user.serialize());
                    messageArea.removeAttr('class');
                    messageArea.hide();
                    window.location.replace('contact-list.html');
                } else {
                    // If login failed, show an error message in the messageArea and focus on the username field
                    $('#username').focus().select();
                    messageArea.attr('class', 'alert alert-danger');
                    messageArea.text('Login failed. Please check your username and password.');
                    messageArea.show();
                }
            });
        });

        // Add click event handler to the cancel button
        $('#cancelButton').on('click', function() {
            // Reset the login form and return to index.html
            $('#loginForm')[0].reset();
            window.location.replace('index.html');
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