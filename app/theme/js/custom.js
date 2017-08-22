
'use strict';

$(window).on('load', function () {
    $('#show_loader').fadeIn().delay(250).fadeOut();
});

$(document).ready(function () {

    $('#widthdraw_confirm').click(function () {

         $(this).attr('disabled','disabled');
         $('#withdrawConfirmForm').submit();
        
    });

    console.info("Document Ready.....!");
    $('#show_loader').fadeOut();

    $('.decimal_amount').change(function () {
        if ($.isNumeric($(this).val())) {
            $(this).val(round($(this).val()));
        }
    });

    $('.close_error').click(function () {
        $(this).parent().hide();
    });

    $('.game_settings').click(function () {
        console.log('clicked...');
        if ($(this).hasClass('muck')) {
            if ($(this).is(':checked')) {
                $('#muck').attr('value', 1);
            } else {
                $('#muck').attr('value', 2);
            }
        } else if ($(this).hasClass('show_win_cards')) {
            if ($(this).is(':checked')) {
                $('#show_win_cards').attr('value', 1);
            } else {
                $('#show_win_cards').attr('value', 2);
            }
        }

    });

    $('.common_validation').validate({errorClass: 'errorMessage'});

    $('#addcashForm').validate({
        errorClass: 'errorMessage',
        rules: {
            amount: {
                required: true,
                number: true,
            },
        },
        messages: {
            amount: {
                required: 'Please enter Amount',
                number: "Allow only numeric value",
            },
        }
    });

    $('#UpdateUserProfileForm').validate({
        errorClass: 'errorMessage',
        rules: {
            Mobile_number: {
                required: true,
                number: true,
                IndianMobile: true
            },
            Gender: {
                required: true,
            },
            Pincode: {
                required: true,
                number: true,
                minlength: 6,
                maxlength: 6,
                IndianPostalCode: true
            },
            First_name: {
                required: true,
                lettersonly: true,
                ValidName: true,
            },
            Last_name: {
                required: true,
                lettersonly: true,
                ValidName: true,
            },
            Pancard: {
                IndianPanCard: true,
            },
            dobyear: {
                required: true,
            },
            dobmonth: {
                required: true,
            },
            dobday: {
                required: true,
            },
            Address_line1: {
                required: true,
            },
            Address_line2: {
                required: true,
            },
            City_name: {
                required: true,
                lettersonly: true,
            },
            State_id: {
                required: true,
            },
        },
        messages: {
            Mobile_number: {
                required: 'Please enter mobile number',
                number: "Mobile number should be numeric",
                IndianMobile: "Enter a valid mobile number"
            },
            Gender: {
                required: 'Please select gender',
            },
            pincode: {
                required: "Please enter pincode",
                number: 'Enter a valid pincode',
                minlength: "Pincode should be min 6 in length",
                maxlength: "Pincode should be max 6 in length",
                IndianPostalCode: "Enter a valid pin code"
            },
            First_name: {
                required: 'Please enter first name',
                lettersonly: "First name should allow alphabates only",
                ValidName: "Please enter first name"
            },
            Last_name: {
                required: 'Please enter last name',
                lettersonly: "Last name should allow alphabates only",
                ValidName: "Please enter last name"
            },
            pancard: {
                IndianPanCard: "Enter a valid pan card",
            },
            dobyear: {
                required: 'Please select year',
            },
            dobmonth: {
                required: 'Please select month',
            },
            dobday: {
                required: 'Please select day',
            },
            Address_line1: {
                required: 'Please enter Address 1',
            },
            Address_line2: {
                required: 'Please enter Address 2',
            },
            City_name: {
                required: 'Please enter City name',
                lettersonly: "City name should allow alphabates only",
            },
            State_id: {
                required: 'Please select state',
            },
        }

    });

    $('#withdrawOnlineForm').validate({
        errorClass: 'errorMessage',
        rules: {
            'withdraw_options[payee_name]': {
                required: true,
                lettersonly: true,
            },
            'withdraw_options[account_number]': {
                required: true,
                number: true,
            },
            'withdraw_options[ifsc_code]': {
                required: true,
            },
            'withdraw_options[bank_id]': {
                required: true,
            },
        },
        messages: {
            'withdraw_options[payee_name]': {
                required: "Please enter payee name",
                lettersonly: "Payee name should allow alphabates only",
            },
            'withdraw_options[account_number]': {
                required: "Please enter Account number",
                number: "Account number should be numeric",
            },
            'withdraw_options[ifsc_code]': {
                required: "Please enter ifsc code",
            },
            'withdraw_options[bank_id]': {
                required: "Please select Bank",
            },
        }

    });

    $('#withdrawCheckForm').validate({
        errorClass: 'errorMessage',
        rules: {
            'withdraw_options[payee_name]': {
                required: true,
                lettersonly: true,
            },
            'withdraw_options[address_1]': {
                required: true,
            },
            'withdraw_options[address_2]': {
                required: true,
            },
            'withdraw_options[city]': {
                required: true,
                lettersonly: true,
            },
            'withdraw_options[state_id]': {
                required: true,
            },
            'withdraw_options[pincode]': {
                required: true,
                IndianPostalCode: true
            },
        },
        messages: {
            'withdraw_options[payee_name]': {
                required: "Please enter payee name",
                lettersonly: "Payee name should allow alphabates only",
            },
            'withdraw_options[address_1]': {
                required: "Please enter Address 1",
            },
            'withdraw_options[address_2]': {
                required: "Please enter Address 2",
            },
            'withdraw_options[city]': {
                required: "Please enter city name",
                lettersonly: "City name should allow alphabates only",
            },
            'withdraw_options[state_id]': {
                required: "Please select state",
            },
            'withdraw_options[pincode]': {
                required: "Please enter pincode",
                IndianPostalCode: "Enter a valid pin code"
            },
        }

    });
    
//    $('#withdrawConfirmForm').validate({
//            submitHandler: function (form) {
//                console.log('withdrawConfirmForm Submitter successfullly...!');
//                $.ajax({
//                    url: base_url + 'withdraw/RequestWithdraw',
//                    type: 'POST',
//                    dataType: 'json',
//                    data: $('#withdrawConfirmForm').serialize(),
//                    success: function (response) {
//                        $('#widthdraw_confirm').attr('disabled','disabled');
//                        console.info(response);
//                        if (response.error == false) {
//                            $('#widthdraw_confirm').removeAttr('disabled','disabled');
////                            window.location.href = base_url+'user/profile';
//                        }else{
//                            $('#resendMessage').html(response.message).show().fadeOut(3000);
//                        }  
//                    }
//                });
//
//            }
//        });



    $('#show_leader_board').click(function () {
        showLoader();
        var url = Base64.decode(service_base_url) + 'User/getUserDashboard';
        var data = {Uid: Base64.decode(Uid), game_type: $(this).data('game-type')};
        console.log(url);
        console.log(data);
        $.ajax({
            url: url,
            type: 'POST',
            data: data,
            async: false,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'authorization': 'key=' + Base64.decode(service_access_key)
            },
            dataType: 'json',
            success: function (response) {
                console.log(response);
                if (response.error == false) {
                    var html = '<table class="table" id="tab2"> <thead> <tr> <th > Sno </th> <th > Type </th> <th > Rank </th> </tr></thead> <tbody >';
                    var i = 0;
                    $.each(response.data, function (k, v) {
                        i = i + 1;
                        html += '<tr ><td>' + i + '</td> <td>' + k + '</td><td>' + v.myRank + '</td> </tr>';
                    });
                    html += '</tbody> </table>';
                    $('#load_modal_content').html(html);
                    $('#commonModel').modal({show: true});
                }
                hideLoader();
            }
        });

    });

    $('#bonus_code').keyup(function () {
        console.log('key uppped...!');
        $('#bonus_amount').parent().hide();
        $('#bonus_id').val('');
        $('#sub_bonus_id').val('');
        if ($(this).val().length > 0) {
            $('.addCash_button').html('Apply').attr('type', 'button');
        } else {
            $('.addCash_button').html('Proceed').attr('type', 'submit');
        }

    });

    $('#searach_friend').click(function () {
        $('.table_info').removeClass('active');
        $(this).addClass('active');
        $('.table_data_info').hide();
        $('.' + $(this).data('id')).show();
        $('#search_friend_input').val('');
        $('#searach_friend_results').html('<tr> <td colspan="4" class="no_tables">There are no friend with selected attributes</td></tr>');
    });

    $('#search_friend_button').click(function () {
//        console.log($(this).val());
        var url = Base64.decode(service_base_url) + 'User/SearchFriend';
        var data = {Uid: Base64.decode(Uid), Username: $('#search_friend_input').val(), game_type: state};
//        console.log(url);
//        console.log(data);
        CommonAjax(url, data);
//        console.log(RESPONSE);
        if (RESPONSE.error == false) {
            var html = '';
            $.each(RESPONSE.data.users, function (k, v) {
//                console.log(v);
                html += '<tr class="get_friend_detail" data-Uid="' + v.Uid + '" ><td colspan="4">' + v.Username + '</td></tr>';
            });
        } else {
            html += '<tr><td colspan="4">' + RESPONSE.message + '</td></tr>';
        }
        $('#' + $(this).data('id')).html(html);

    });

    $('#Loyalitiy_chips_container').click(function () {
        console.log('Redeem Initiated.......!');
        redeenLoyalty();
    });

    $('#init_fun_redeem').click(function () {
        console.log('Redeem Initiated.......!');
        redeenFunChips();
    });

    $('#InitAffilliateBonusClaim').click(function () {
        InitAffilliateBonusClaim();
    });


    $(document).on("click", ".get_friend_detail", function () {
//        alert($(this).data('uid'));  // jQuery 1.7+
        var url = Base64.decode(service_base_url) + 'User/GetFriendDetails';
        var data = {Uid: Base64.decode(Uid), friend_id: $(this).data('uid'), game_type: state};
        console.log(url);
        console.log(data);
        CommonAjax(url, data);
        console.log(RESPONSE);
        if (RESPONSE.error == false) {
            var tables = RESPONSE.data.userTables;
            var userinfo = RESPONSE.data.userinfo;

            if (tables.length > 0) {
                var html = '<table class="table" id="tab2"> <thead> <tr> <th > Sno </th> <th > Variant </th> <th > Table name </th> <th > Price Type </th><th > Action </th> </tr></thead> <tbody >';
                $.each(tables, function (k, v) {
                    console.log(v);
                    k = k + 1;
                    if (state == 'poker') {
                        var action = 'onclick="poker_window(' + v.game_id + ')"';
                        if (v.game_type == 'omaha') {
                            action = 'onclick="omaha_window(' + v.game_id + ')"';
                        }

                    } else {
                        var action = 'onclick="open_window(' + v.game_id + ')"';
                        if (v.game_type != 'Points') {
                            v.table_name = v.table_name + '_' + v.session_id;
                            var action = 'onclick="open_window(' + v.game_id + ',\'' + v.table_name + '\')"';
                        }
                    }
                    html += '<tr ><td>' + k + '</td><td>' + v.game_type + '</td><td>' + v.table_name + '</td><td>' + v.prize_type + '</td><td><span class="join" ' + action + ' >Join</span></td></tr>';
                });
                html += '</tbody> </table>';
                $('#load_modal_content').html(html);
                $('#commonModel').modal({show: true});
            } else {

            }
        } else {
            $('#load_modal_content').html(RESPONSE.message);
            $('#commonModel').modal({show: true});
        }

    });

    $('.addCash_button').click(function () {
        
        if ($(this).attr('type') == 'button') {
            $(this).prop("disabled", true);
            //Check Bonus Availablity
            var url = base_url + 'user/ApplyUserBonus';
            console.log(url);
            console.log($('#amount').val());
            if ($('#amount').val() != '') {
                $.ajax({
                    url: url,
                    type: 'post',
                    data: $('#addcashForm').serialize(),
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'authorization': 'key=' + Base64.decode(service_access_key)
                    },
                    dataType: 'json',
                    success: function (response) {
                        $('.addCash_button').prop("disabled", false);
                        console.log(response);
                        if (response.error != true) {
                            $('#bonus_amount').val(response.data.bonus_amount).parent().show();
                            $('#bonus_id').val(response.data.bonus_id);
                            $('#sub_bonus_id').val(response.data.sub_bonus_id);
                            $('.addCash_button').html('Proceed').attr('type', 'submit');
                        } else {
                            console.log(response.message);
                            $('#bonus_amount').val('').parent().hide();
                            $('#bonus_id').val('');
                            $('#sub_bonus_id').val('');
                            $('.errorMessage').html(response.message).fadeIn().delay(2000).fadeOut();
                        }
                    }
                });
            } else {
                console.log('alese condirion....!');
                $(this).prop("disabled", false);
                $('.errorMessage').html('Please Enter amount').fadeIn().delay(2000).fadeOut();
            }
        }
    });

    if (state != 'home' && is_android == 0) {
        setTimeout(function () {
            getUserBalance();
        }, 15000);
    }
    $('.customized_alert').hide();
    var html = '';
    $("a").tooltip();
//    $('.close').click(function () {
//        $(this).parent().hide();
//    });
    $('.errorMessage').delay(5000).fadeOut(600);

    $('#userRegistration').validate({
        ignore: "",
//        wrapper:'',
        errorElement: 'em',
        highlight: function (element, errorClass) {
            $(element.form).find("." + element.id + "_error_container").show()
        },
        unhighlight: function (element, errorClass) {
            $(element.form).find("." + element.id + "_error_container").hide();
        },
        errorPlacement: function (error, element) {
            var errorPlace = '.' + element.attr('name') + '_error_message';
            $(errorPlace).html(error)
        },
        rules: {
            username: {
                required: true,
                minlength: 4,
                maxlength: 12,
                checkUsername: true,
                remote: {
                    url: base_url + "home/CheckDuplicateUserName",
                    type: "POST",
                }
            },
            emailid: {
                required: true,
                email: true,
                remote: {
                    url: base_url + "home/CheckDuplicateEmail",
                    type: "POST",
                }
            },
            regcaptcha: {
                required: true,
                minlength: 4,
                maxlength: 4,
                remote: {
                    url: base_url + "home/checkCaptcha",
                    type: "POST",
                }
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
            referral_code: {
                required: false,
                NoSpace: true,
                checkUsername: true,
                minlength: 2,
                remote: {
                    url: Base64.decode(service_base_url) + "checkReferralCode",
                    type: "POST",
                }
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
                remote: "Username already exist",
                minlength: "Username should be 4-12 characters",
                maxlength: "Username should be 4-12 characters",
            },
            emailid: {
                required: "Please enter email",
                email: "Enter a valid email",
                remote: "Email already exist"
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
                minlength: "Captcha should be 4 characters",
                maxlength: "Captcha should be 4 characters",
            }
        },
        submitHandler: function (form) {
            $('#commonModel').modal({keyboard: false})
                    .one('click', '#yes', function (e) {
                        form.submit();
                    });
        }


    });

    $('#loginform').validate({
        errorElement: 'em',
        highlight: function (element, errorClass) {
            $(element.form).find("." + element.id + "_error_container").show()
        },
        unhighlight: function (element, errorClass) {
            $(element.form).find("." + element.id + "_error_container").hide();
        },
        errorPlacement: function (error, element) {
            var errorPlace = '.' + element.attr('name') + '_error_message';
            $(errorPlace).html(error)
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
            password: {
                required: "Please enter password",
                Nospace: "Password should not contain spaces",
            },
            username: {
                required: "Please enter username",
            },
        }
    });

    $('#forgotForm').validate({
        errorElement: 'em',
        highlight: function (element, errorClass) {
            $(element.form).find("." + element.id + "_error_container").show()
        },
        unhighlight: function (element, errorClass) {
            $(element.form).find("." + element.id + "_error_container").hide();
        },
        errorPlacement: function (error, element) {
            var errorPlace = '.' + element.attr('name') + '_error_message';
            $(errorPlace).html(error)
        },
        rules: {
            email: {
                required: true,
                email: true,
            },
            regcaptcha: {
                required: true,
                minlength: 4,
                maxlength: 4,
                remote: {
                    url: base_url + "home/checkCaptcha",
                    type: "POST",
                }
            },
        },
        messages: {
            email: {
                required: "Please enter email",
                email: "Enter a valid email",
            },
            regcaptcha: {
                required: "Please enter captcha",
                remote: "Captcha code does not match",
                minlength: "Captcha should be 4 characters",
                maxlength: "Captcha should be 4 characters",
            },
        }
    });

    $('#resetPassword').validate({
        errorElement: 'em',
        highlight: function (element, errorClass) {
            $(element.form).find("." + element.id + "_error_container").show()
        },
        unhighlight: function (element, errorClass) {
            $(element.form).find("." + element.id + "_error_container").hide();
        },
        errorPlacement: function (error, element) {
            var errorPlace = '.' + element.attr('name') + '_error_message';
            $(errorPlace).html(error)
        },
        rules: {
            otp: {
                required: true,
                number: true,
            },
            Password: {
                required: true,
                NoSpace: true,
                minlength: 4,
                maxlength: 20,
            },
            confPassword: {
                required: true,
                NoSpace: true,
                equalTo: '#password'
            },
        },
        messages: {
            Password: {
                required: "Please enter password",
                Nospace: "Password should not contain spaces",
                minlength: "Password should be 6-20 characters",
                maxlength: "Password should be 6-20 characters",
            },
            confPassword: {
                required: "Please enter confirm password",
                Nospace: "Password should not contain spaces",
                equalTo: "Please the same password"
            },
            otp: {
                required: "Please enter OTP",
                number: "OTP should be numberic"
            },
        }
    });

    $('#reloadCaptch').click(function () {
        reloadcaptcha();
    });

    $('#verifyEmail').click(function () {
        verifyEmail();
    });

    $('#verifyMobile').click(function () {
        verifyMobile();
    });

    $('#UpdateUserProfile').validate({
        invalidHandler: function (form, validator) {
            var errors = validator.numberOfInvalids();
            if (errors) {
                var errors = "";
                if (validator.errorList.length > 0) {
                    for (x = 0; x < validator.errorList.length; x++) {
                        errors += "<p>" + validator.errorList[x].message + "</p>";
                    }
                }
                $('#load_modal_content').html(errors);
                $('#commonModel').modal({show: true});
            }
            validator.focusInvalid();
        },
        errorPlacement: function (error, element) {

        },
        rules: {
            Mobile_number: {
                required: true,
                number: true,
                IndianMobile: true
            },
            Pincode: {
                required: true,
                IndianPostalCode: true
            },
            First_name: {
                lettersonly: true,
                ValidName: true,
            },
            Last_name: {
                lettersonly: true,
                ValidName: true,
            },
            Pancard: {
                IndianPanCard: true,
            },
            Address_line1: {
                required: true,
            },
            Address_line2: {
                required: true,
            },
            City_name: {
                required: true,
            },
            State_id: {
                required: true,
            },
        },
        messages: {
            Mobile_number: {
                required: "Enter a mobile number",
                number: "Mobile number should be numeric",
                IndianMobile: "Enter a valid mobile number"

            },
            Pincode: {
                required: 'Please enter pincode',
                IndianPostalCode: "Enter a valid pin code"
            },
            First_name: {
                lettersonly: "First name should allow alphabates only",
                ValidName: "Please enter first name"
            },
            Last_name: {
                lettersonly: "Last name should allow alphabates only",
                ValidName: "Please enter last name"
            },
            Pancard: {
                IndianPanCard: "Enter a valid pan card",
            },
            Address_line1: {
                required: 'Please enter address 1',
            },
            Address_line2: {
                required: 'Please enter address 2',
            },
            City_name: {
                required: 'Please enter city name',
            },
            State_id: {
                required: 'Please enter state',
            },
        }

    });

//    $('#ScrachCardForm').validate({
//        errorElement: 'errorMessage',
//        rules: {
//            card_number: {
//                required: true,
//            },
//            card_code: {
//                required: true,
//            },
//        },
//        messages: {
//            card_number: {
//                required: 'Please enter card number',
//            },
//            card_code: {
//                required: 'Please enter Scratch Code',
//            },
//        }
//    });

    $('#avatarGallery').click(function () {
        $.ajax({
            url: base_url + 'user/avatarGallery',
            type: 'POST',
            data: {Uid: ''},
            dataType: 'json',
            success: function (response) {
                console.info(response);
                if (response.error == false) {

                    $('#load_modal_content').html(response.data);
                    $('#commonModel').modal({show: true});
                } else {
                    $('#commonModel').modal({show: false});
                }
            }
        });
    });

    $('.select_payment_option').click(function () {
        console.log($(this).data('payment-type'));
        $('.list-group').find('a').removeClass('active');
        $(this).addClass('active');
        $('.netbanking-tab-content').removeClass('active');
        $('.payment_type_content_' + $(this).data('payment-type')).addClass('active');

    });

    $('.do_confirm').click(function () {
        if (confirm($(this).data('message'))) {
            return true;
        } else {
            return false;
        }
    });

    if (action == 'createprivatetable') {
        $('#datetimepicker6').datetimepicker({
            showClear: true,
            format: 'DD-MM-Y HH:mm:00',
            showClose: true,
            minDate: new Date(),
//        defaultDate: new Date()
        });

        $('#datetimepicker7').datetimepicker({
            useCurrent: false, //Important! See issue #1075
            showClear: true,
//        format: 'DD-MM-Y hh:mm A',
            format: 'DD-MM-Y HH:mm:00',
            showClose: true,
        });

        $("#datetimepicker6").on("dp.change", function (e) {
            $('#datetimepicker7').data("DateTimePicker").minDate(e.date);
        });

        $("#datetimepicker7").on("dp.change", function (e) {
            $('#datetimepicker6').data("DateTimePicker").maxDate(e.date);
        });

    }

    $("#smallblind").change(function () {

        var pointval = $(this).val();
        $('#bigblind').val(pointval * 2);
        var minentry = pointval * 2 * 10;
        var html = '';
        var value = '';
        for (i = 1; i <= 5; i++) {
            value = minentry * i;
            html += '<option value="' + value + '">' + value + '</option>';
        }
        $("#minentry").html(html);
        $("#minentry").val(minentry);
        $("#maxentry").val((pointval * 2 * 10) * 5);

    });

    $("#minentry").change(function () {
        var pointsval = $(this).val();
        $("#maxentry").val(pointsval * 5);
    });


    $("#rumpointsvalue").change(function () {

        var pointval = $(this).val();
        $("#minentry").val(pointval * 80);
        $("#maxentry").val((pointval * 10) * 80);

    });

    $('.choose_amount').click(function () {
        console.log($(this).data('amount'));
        console.log($(this).data('config-id'));
        $('#amount').attr('value', $(this).data('amount'));
        $('#config_id').attr('value', $(this).data('config-id'));
    });

    $('.withdraw_type a').click(function () {
        $('.withdraw_type').find('a').removeClass('active');
        $(this).addClass('active');
//        console.log($(this).data('item'));
        $('.netbanking-tab').find('div').removeClass('active');
        $('.withdraw_option_' + $(this).data('item')).addClass('active');
    });

    $('.join_table').click(function () {
        if ($(this).data('ready')) {
            if ($(this).data('game-type') == 'poker') {
                window.location.href = base_url + 'poker?game_type=privatetables'
            } else if ($(this).data('game-type') == 'rummy') {
                window.location.href = base_url + 'rummy?game_type=privatetables'
            }
        } else {
//            alert(Base64.decode($(this).data('message')));
            $('#load_modal_content').html(Base64.decode($(this).data('message')));
            $('#commonModel').modal('show');

        }
    });


});

