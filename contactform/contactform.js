jQuery(document).ready(function($) {
    "use strict";
  
    $('form.contactForm').submit(function(event) {
      event.preventDefault(); 
  
      
      var name = $('#name').val();
      var email = $('#email').val();
      var subject = $('#subject').val();
      var message = $('#message').val();
  
      // Construct the mailto link
      var mailtoLink = 'mailto:dzindonedim@gmail.com'
                      + '?subject=' + encodeURIComponent(subject)
                      + '&body=' + encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\n\n' + message);
  
      // Open the mail client
      window.location.href = mailtoLink;
  
      // Optionally, show a confirmation message
      $("#sendmessage").addClass("show").html("Your message has been sent. Thank you!");
      $("#errormessage").removeClass("show");
      
      // Clear the form
      $('form.contactForm').find("input, textarea").val("");
    });
  });
  