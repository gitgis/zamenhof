function clickrecaptcha(){
    $('#captcha').val(1);
    $("#g-recaptcha").attr('tooltip', null);
}

$(function() {

    $('#email').click (function(){
        $("#email-container").attr('tooltip', null);
    });

    $('.close-hitbox').click(function(){
        $("#email-container").attr('tooltip', null);
        $("#g-recaptcha").attr('tooltip', null);
    });
});

function submit_application(event) {
    event.preventDefault();
    event.stopPropagation();

    var err=0;

    if($('#email').val().length==0){
        err=1;
        $('#email-container').attr('tooltip','Please enter email address.');
    } else if(!isEmail($('#email').val())) {
        $('#email-container').attr('tooltip','Please enter valid email address.');
        err=1;
    }

    if($('#captcha').val()==0){
        err=1;
        $('#g-recaptcha').attr('tooltip','Please click the captcha.');
    }

    if(err==1){
        return false;
    }

    var data=$('#partner_application_form').serializeArray();

    fetch("http://204.48.28.216/index.php",
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(data)
        })
        .then(function(res){
            console.log(res);
            if (res.ok) {
                $('.container-1').css('background','#179b09');
            } else {
                $('.container-1').css('background','#d10e0e');
            }

            res.json().then(function (msg) {
                $('.content').css({'color':'#fff','font-size':'150%'});
                $('.content').hide();
                $('.content')
                    .html(msg)
                    .css({'padding':'30px','display':'table-cell','vertical-align':'middle','height':'230px','width':'420px'});
                $('.content').show('slow');
            })

        })
        .catch(function(res){
            console.error(res)
            $('.content').html('Some error occured, please try again later.'.res);
        });

    return true;
}

function isEmail(email) {
    email=email.toLowerCase();
    var n = email.search("gmail");
    if(n>-1){
        return false;
    }
    n = email.search("yahoo");
    if(n>-1){
        return false;
    }
    n = email.search("aol");
    if(n>-1){
        return false;
    }
    n = email.search("hotmail");
    if(n>-1){
        return false;
    }
    n = email.search("msn.com");
    if(n>-1){
        return false;
    }
    n = email.search("rediffmail");
    if(n>-1){
        return false;
    }
    n = email.search("yandex");
    if(n>-1){
        return false;
    }
    n = email.search("outlook");
    if(n>-1){
        return false;
    }
    n = email.search("zoho");
    if(n>-1){
        return false;
    }
    n = email.search("mail.com");
    if(n>-1){
        return false;
    }
    n = email.search("inbox.com");
    if(n>-1){
        return false;
    }
    n = email.search("icloud");
    if(n>-1){
        return false;
    }
    n = email.search("indiatimes");
    if(n>-1){
        return false;
    }

    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    f=regex.test(email);

    return f;
}
