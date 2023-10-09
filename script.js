$(document).ready(function () {
  const form = $("#myform").validate({
    rules: {
      email: {
        required: true,
        email: true,
        maxlength: 50,
        pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
      },
    },
    messages: {
      email: {
        required: "Please enter your email address",
        email: "Please enter a valid email address",
        maxlength: "50 is the maximum allowed characters",
        pattern: "Please enter a valid email address",
      },
    },

    errorPlacement: function (error, element) {
      $(".empty").empty();
      error.appendTo(".empty");
    },
  });

  $("#myform").on("submit", function (event) {
    const emailField = $("#email").val();
    if (!form.element("#email") || emailField.trim() === "") {
      event.preventDefault();
    }
  });
});
