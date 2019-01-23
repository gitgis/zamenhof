function clickrecaptcha_contact(aa) {
    document.querySelector('.g-recaptcha').removeAttribute('tooltip');
}

function doModal(title, message) {


    var html =  '<div class="modal hide fade in">';

    html += '<div class="modal-dialog" role="document">';
    html += '<div class="modal-content">';

    html += '<div class="modal-header">';
    html += '<h5 class="modal-title">'+title+'</h5>';
    html += '<a class="close" data-dismiss="modal">×</a>';
    html += '</div>';
    
    html += '<div class="modal-body">';
    html += '<p>';
    html += message;
    html += '</div>';
    
    html += '<div class="modal-footer">';
    html += '<button class="btn btn-primary" data-dismiss="modal">Close</button>'; // close button
    html += '</div>';  // footer
    html += '</div>';  // modalWindow
    
    const div = document.createElement('div');
    div.innerHTML = html;
    
    document.body.appendChild(div);
    
    $(div.children[0]).modal().on('hidden.bs.modal', function (e) {
        document.body.removeChild(div);
    });
}

function submit_contact(event) {
    event.preventDefault();
    event.stopPropagation();
    
    var form = event.target;
    var data = new FormData(form);

    console.log('submit_contact', form.elements, data);
    
    var fields = ['first_name', 'last_name', 'email', 'website', 'volume', 'g-recaptcha-response'];
    fields.forEach(function (fieldName) {
        var element = form.querySelector('[name="'+fieldName+'"]');
        element.addEventListener('focus', function () {
            element.parentElement.removeAttribute('tooltip');
        });
    });
    
    var err=0;

    if(data.get('first_name').length==0){
        err=1;
        form.querySelector('[name="first_name"]').parentElement.setAttribute('tooltip','Please enter first name.');
    }

    if(data.get('last_name').length==0){
        err=1;
        form.querySelector('[name="last_name"]').parentElement.setAttribute('tooltip','Please enter last name.');
    }

    if(data.get('email').length==0){
        err=1;
        form.querySelector('[name="email"]').parentElement.setAttribute('tooltip','Please enter email address.');
    } else if(!isEmail(data.get('email'))) {
        form.querySelector('[name="email"]').parentElement.setAttribute('tooltip','Please enter valid email address.');
        err=1;
    }

    if(data.get('website').length==0){
        err=1;
        form.querySelector('[name="website"]').parentElement.setAttribute('tooltip','Please enter website.');
    }

    if(data.get('volume').length==0){
        err=1;
        form.querySelector('[name="volume"]').parentElement.setAttribute('tooltip','Please enter volume.');
    }

    if(!data.get('g-recaptcha-response')){
        err=1;
        form.querySelector('.g-recaptcha').setAttribute('tooltip','Please click the captcha.');
    }

    if(err==1){
        return false;
    }

    fetch(form.getAttribute('action'),
        {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Accept": "application/json",
            },
            method: "POST",
            body: data
        })
        .then(function(res){
            console.log(res);
            if (res.ok) {
                form.style.backgroundColor = '#179b09';
            } else {
                form.style.backgroundColor = '#d10e0e';
            }

            res.json().then(function (msg) {
                console.log(msg);
                doModal('Contact', msg);
            })

        })
        .catch(function(res){
            console.error(res);
            doModal('Contact', 'Some error occurred, please try again later.');
        });

    return true;
}
