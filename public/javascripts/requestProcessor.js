function updateTypeUcc() {
    let phone = $.jStorage.get("phone");
    let insurance = $('#insurance').is(':checked');
    let realState = $('#realState').is(':checked');
    let education = $('#education').is(':checked');
    let health = $('#health').is(':checked');
    let goods = $('#goods').is(':checked');
    let ent = $('#ent').is(':checked');
    let tourism = $('#tourism').is(':checked');
    let food = $('#food').is(':checked');
    console.log({insurance, realState, education, health, goods, ent, tourism, food});

    this.makeAjaxCall('/api/uccType', {
        phone,
        insurance,
        realState,
        education,
        health,
        goods,
        ent,
        tourism,
        food
    }, function (data) {
        if (data['success'])
            M.toast({html: 'Updated'});
        else
            M.toast({html: 'User does not exists'})
    })
}


function updateModeOfCommunication() {
    let phone = $.jStorage.get("phone");
    let voice = $('#voice').is(':checked');
    let sms = $('#sms').is(':checked');
    let ADrec = $('#ADrec').is(':checked');
    let ADlive = $('#ADlive').is(':checked');
    let robo = $('#robo').is(':checked');
    console.log({voice, sms, ADrec, ADlive, robo});
    this.makeAjaxCall('/api/uccMode', {
        phone,
        voice, sms, ADrec, ADlive, robo
    }, function (data) {
        if (data['success'])
            M.toast({html: 'Updated'});
        else
            M.toast({html: 'User does not exists'})
    })

}

function updateBand() {
    let phone = $.jStorage.get("phone");
    let t1 = $('#t1').is(':checked');
    let t2 = $('#t2').is(':checked');
    let t3 = $('#t3').is(':checked');
    let t4 = $('#t4').is(':checked');
    let t5 = $('#t5').is(':checked');
    let t6 = $('#t6').is(':checked');
    let t7 = $('#t7').is(':checked');
    let t8 = $('#t8').is(':checked');
    let t9 = $('#t9').is(':checked');
    console.log({t1, t2, t3, t4, t5, t6, t7, t8, t9});
    this.makeAjaxCall('/api/uccTime', {
        phone,
        t1, t2, t3, t4, t5, t6, t7, t8, t9
    }, function (data) {
        if (data['success'])
            M.toast({html: 'Updated'});
        else
            M.toast({html: 'User does not exists'})
    })


}

function updateDay() {
    let phone = $.jStorage.get("phone");
    let mon = $('#mon').is(':checked');
    let tue = $('#tue').is(':checked');
    let wed = $('#wed').is(':checked');
    let thus = $('#thus').is(':checked');
    let fri = $('#fri').is(':checked');
    let sat = $('#sat').is(':checked');
    let sun = $('#sun').is(':checked');
    let nat = $('#nat').is(':checked');
    console.log({mon, tue, wed, thus, fri, sat, sun, nat});
    this.makeAjaxCall('/api/uccDay', {
        phone,
        mon, tue, wed, thus, fri, sat, sun, nat
    }, function (data) {
        if (data['success'])
            M.toast({html: 'Updated'});
        else
            M.toast({html: 'User does not exists'})
    })

}


function makeAjaxCall(url, data, cb) {
    $.ajax({
        url: url,
        type: 'POST',
        data: JSON.stringify(data),
        contentType: "application/json",
        dataType: 'json',
        success: function (data) {
            return cb(data)
        }
    });
}

function getUserSettings() {
    let phone = $.jStorage.get("phone");
    if (!phone)
        return;
    $("#user").text(phone);
    this.makeAjaxCall('/api/setting', {phone}, function (settings) {
        console.log('callback', settings);
        $('#insurance').prop('checked', settings['insurance']);
        $('#realState').prop('checked', settings['realState']);
        $('#education').prop('checked', settings['education']);
        $('#health').prop('checked', settings['health']);
        $('#goods').prop('checked', settings['goods']);
        $('#ent').prop('checked', settings['ent']);
        $('#tourism').prop('checked', settings['tourism']);
        $('#food').prop('checked', settings['food']);
        $('#voice').prop('checked', settings['voice']);
        $('#sms').prop('checked', settings['sms']);
        $('#ADrec').prop('checked', settings['ADrec']);
        $('#ADlive').prop('checked', settings['ADlive']);
        $('#robo').prop('checked', settings['robo']);
        $('#t1').prop('checked', settings['t1']);
        $('#t2').prop('checked', settings['t2']);
        $('#t3').prop('checked', settings['t3']);
        $('#t4').prop('checked', settings['t4']);
        $('#t5').prop('checked', settings['t5']);
        $('#t6').prop('checked', settings['t6']);
        $('#t7').prop('checked', settings['t7']);
        $('#t8').prop('checked', settings['t8']);
        $('#t9').prop('checked', settings['t9']);
        $('#mon').prop('checked', settings['mon']);
        $('#tue').prop('checked', settings['tue']);
        $('#wed').prop('checked', settings['wed']);
        $('#thus').prop('checked', settings['thus']);
        $('#fri').prop('checked', settings['fri']);
        $('#sat').prop('checked', settings['sat']);
        $('#sun').prop('checked', settings['sun']);
        $('#nat').prop('checked', settings['nat']);
    })
}


function login() {
    let phone = $('#loginPhone').val();

    this.makeAjaxCall('/api/login', {
        phone
    }, function (data) {

        if (data['success']) {
            $.jStorage.set("phone", phone);
            window.location.href = '/setting'
        }
        else
            M.toast({html: 'User does not exists'})
    })
}

function register() {
    let registerPhone = $('#registerPhone').val();
    let registerName = $('#registerName').val();
    this.makeAjaxCall('/api/addUser', {
        phone: registerPhone, name: registerName
    }, function (data) {

        if (data['success']) {
            M.toast({html: 'Registered Successfully'});
            setTimeout(() => {
                window.location.href = '/login';
            }, 1000);

        }
        else
            M.toast({html: 'User already exists'})
    })

}

function submitComplaint() {

    let complaintPhone = $('#complaintPhone').val();
    let phone = $.jStorage.get("phone");
    let option = $("input[name='group1']:checked").val();
    this.makeAjaxCall('/api/complaint', {
        phone: phone, UCCcaller: complaintPhone, complaint: option
    }, function (data) {

        if (data['success']) {
            M.toast({html: 'Complaint Registered Successfully'});
            setTimeout(() => {
                window.location.href = '/setting';
            }, 1000);

        }
        else
            M.toast({html: 'User already exists'})
    })
}

function registerEntity() {
    let name = $('#name').val();
    let companyType = $('#companyType').val();
    let gst = $('#gst').val();
    let pan = $('#pan').val();
    let kyc = $('#kyc').val();

    console.log({name, companyType, gst, pan, kyc});


}

function saveHeader() {
    let header = $('#saveHeader').val();
    this.makeAjaxCall('/api/header', {
        header
    }, function (data) {

        M.toast({html: data['message']});
    })

}

function sendDeleteHeader() {
    console.log("ajax call");
    let header = $('#sendDeleteHeader').val();
    this.makeAjaxCall('/api/sendDeleteHeader', {
        header
    }, function (data) {

        M.toast({html: data['message']});
    })

}
