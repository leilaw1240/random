  $('#loginform').validate({
        onfocusout: false,
        onkeyup: false,
        errorClass: 'errorMessage',
        errorLabelContainer: '#load_modal_content',
        wrapper: 'p',
        highlight: function (element, errorClass, validClass) {
            setInterval(function(){  $('.close').trigger("click");  }, 4000);
            $('#commonModel').modal({show: true});//.delay(3000).modal({show: false});
        },
        unhighlight: function (element, errorClass, validClass) {
            $('#commonModel').modal({show: false});
        },
        rules: {
            username: {
                required: true,
                //  checkUsername: true,
            },
            password: {
                required: true,
                NoSpace: true,
            },
        },
        messages: {
            username: {
                required: "Please enter username",
            },
            password: {
                required: "Please enter password",
                Nospace: "Password should not contain spaces",
            },
        },
        submitHandler: function (form) {
             form.submit();
        }

    });  

    $('#userRegistration').validate({
//        ignore: "",
        onfocusout: false,
        onkeyup: false,
        errorClass: 'errorMessage',
        errorLabelContainer: '#load_modal_content',
        wrapper: 'p',
        highlight: function (element, errorClass, validClass) {
            var modelInterval = setInterval(function(){  $('.close').trigger("click");  }, 4000);
            $('#commonModel').modal({show: true});
            $('#commonModel').on('hidden.bs.modal', function () {
                clearInterval(modelInterval);
//                element.focus();
            })
        },
        unhighlight: function (element, errorClass, validClass) {
            $('#commonModel').modal({show: false});
        },
        rules: {
            username: {
                required: true,
                minlength: 4,
                maxlength: 12,
                checkUsername: true,
//                remote: {
//                    url: base_url + "checkUsernameDuplicate",
//                    type: "POST",
//                }
            },
            emailid: {
                required: true,
                email: true,
//                remote: {
//                    url: base_url + "checkEmailDuplicate",
//                    type: "POST",
//                }
            },
            regcaptcha: {
                required: true,
                minlength: 4,
                maxlength: 4,
//                remote: {
//                    url: base_url + "checkRegistrationcaptcha",
//                    type: "POST",
//                }
            },
            password: {
                required: true,
                minlength: 6,
                maxlength: 21,
                NoSpace: true,
                checkUserPassword: function (element) {
                    return $('#username').val() != '' ? true : false;
                },
            },
            confirm_password: {
                required: true,
                equalTo: "#password"

            },
            pnt: {
                required: {
                    depends: function (element) {
                        return ($('#termsandservice').is(':checked') && $('#privacypolicy').is(':checked')) ? false : true;
                    }
                }
            }
        },
        messages: {
            username: {
                required: "Please enter username",
                remote: "Username already exists",
                minlength: "Username should be 4-12 characters",
                maxlength: "Username should be 4-12 characters",
            },
            emailid: {
                required: "Please enter email",
                email: "Enter a valid email",
                remote: "Email already exists"
            },
            password: {
                required: "Please enter password",
                minlength: "Password should be 6-20 characters",
                maxlength: "Password should be 6-20 characters",
                NoSpace: "Password should not contain spaces"
            },
            confirm_password: {
                required: "Please enter confirm password",
                equalTo: "Password is not matching",
            },
            referral_code: {
                NoSpace: "Referral Code should not contain spaces",
                checkUsername: "Please enter valid Referral Code",
                minlength: "Please enter valid Referral Code",
                remote: "Invalid Referral Code"
            },
//            termsandservice:{ required : "In order to use our services, you must agree to Terms of Service & Privacy Policy" },
//            privacypolicy:{ required : "In order to use our services, you must agree to Terms of Service & Privacy Policy" },
            pnt: {required: "Please Agree Terms of Service & Privacy Policy"},
            regcaptcha: {
                required: "Please enter captcha",
                remote: "Captcha code does not match",
                minlength: "Please enter captcha",
                maxlength: "Please enter captcha",
            }
        }

    });

    $('#forgotForm').validate({
        onfocusout: false,
        onkeyup: false,
        errorClass: 'errorMessage',
        errorLabelContainer: '#load_modal_content',
        wrapper: 'p',
        highlight: function (element, errorClass, validClass) {
            $('#commonModel').modal({show: true});
        },
        unhighlight: function (element, errorClass, validClass) {
            $('#commonModel').modal({show: false});
        },
        rules: {
            emailid: {
                required: true,
                email: true,
            },
            regcaptcha: {
                required: true,
                minlength: 4,
                maxlength: 4,
            },
        },
        messages: {
            emailid: {
                required: "Please enter email",
                email: "Enter a valid email",
                remote: "Email already exists"
            },
            regcaptcha: {
                required: "Please enter captcha",
                remote: "Captcha code does not match",
                minlength: "Please enter captcha",
                maxlength: "Please enter captcha",
            }
        }

    });