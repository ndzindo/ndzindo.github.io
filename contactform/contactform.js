jQuery(document).ready(function($) {
    "use strict";
  
    $('#contactForm').submit(function(event) {
      event.preventDefault(); // Prevent form from submitting the normal way
  
      // Collect form data
      var name = $('#name').val();
      var email = $('#email').val();
      var subject = $('#subject').val();
      var message = $('#message').val();
  
      // Construct the mailto link
      var mailtoLink = 'mailto:dzindonedim@gmail.com'
                      + '?subject=' + encodeURIComponent(subject)
                      + '&body=' + encodeURIComponent(
                        'Name: ' + name + '\n' +
                        'Email: ' + email + '\n' +
                        'Message: ' + message);
  
      // Open the mail client
      window.location.href = mailtoLink;
  
      // Optionally show a confirmation message
      $("#sendmessage").addClass("show").html("Your message has been sent. Thank you!");
      $("#errormessage").removeClass("show");
  
      // Clear form fields
      $('#contactForm').find("input, textarea").val("");
    });
  });
  