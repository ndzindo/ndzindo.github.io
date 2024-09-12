jQuery(document).ready(function($) {
  "use strict";

  // Email validation regex
  var emailExp = /^[^\s()<>@,;:\/]+@\w[\w\.-]+\.[a-z]{2,}$/i;

  // Contact form submission handler
  $('form.contactForm').submit(function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    var f = $(this).find('.form-group'),
        ferror = false;

    // Validate inputs
    f.children('input').each(function() {
      var i = $(this); // Current input
      var rule = i.attr('data-rule');

      if (rule !== undefined) {
        var ierror = false; // error flag for current input
        var pos = rule.indexOf(':', 0);
        var exp = rule.substr(pos + 1, rule.length);
        rule = rule.substr(0, pos);

        switch (rule) {
          case 'required':
            if (i.val() === '') {
              ferror = ierror = true;
            }
            break;

          case 'minlen':
            if (i.val().length < parseInt(exp)) {
              ferror = ierror = true;
            }
            break;

          case 'email':
            if (!emailExp.test(i.val())) {
              ferror = ierror = true;
            }
            break;
        }

        i.next('.validation').html((ierror ? (i.attr('data-msg') !== undefined ? i.attr('data-msg') : 'wrong Input') : '')).show('blind');
      }
    });

    f.children('textarea').each(function() {
      var i = $(this); // Current textarea
      var rule = i.attr('data-rule');

      if (rule !== undefined) {
        var ierror = false;
        var exp = rule.substr(rule.indexOf(':', 0) + 1, rule.length);
        rule = rule.substr(0, rule.indexOf(':', 0));

        switch (rule) {
          case 'required':
            if (i.val() === '') {
              ferror = ierror = true;
            }
            break;

          case 'minlen':
            if (i.val().length < parseInt(exp)) {
              ferror = ierror = true;
            }
            break;
        }

        i.next('.validation').html((ierror ? (i.attr('data-msg') !== undefined ? i.attr('data-msg') : 'wrong Input') : '')).show('blind');
      }
    });

    if (ferror) return false; // Stop submission if there are validation errors

    // Prepare data from the form
    var formData = {
      name: $("#name").val(),
      email: $("#email").val(),
      subject: $("#subject").val(),
      message: $("textarea[name='message']").val()
    };

    // Send email using EmailJS
    emailjs.send("service_f3uo5w7", "template_xveu3gj", formData)
      .then(function(response) {
        // Show success message
        $("#sendmessage").addClass("show");
        $("#errormessage").removeClass("show");
        $('.contactForm').find("input, textarea").val(""); // Clear form
      }, function(error) {
        // Show error message
        $("#sendmessage").removeClass("show");
        $("#errormessage").addClass("show");
        $('#errormessage').html("Error sending message. Please try again.");
      });

    return false;
  });
});
