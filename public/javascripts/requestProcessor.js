const phone = 9013005797;

function updateTypeUcc() {
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
        console.log(data);
    })
}


function updateModeOfCommunication() {

    let voice = $('#voice').is(':checked');
    let sms = $('#sms').is(':checked');
    let ADrec = $('#ADrec').is(':checked');
    let ADlive = $('#ADlive').is(':checked');
    let robo = $('#robo').is(':checked');
    console.log({voice, sms, ADrec, ADlive, robo});
}

function updateBand() {

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

}

function updateDay() {

    let mon = $('#mon').is(':checked');
    let tue = $('#tue').is(':checked');
    let wed = $('#wed').is(':checked');
    let thus = $('#thus').is(':checked');
    let fri = $('#fri').is(':checked');
    let sat = $('#sat').is(':checked');
    let sun = $('#sun').is(':checked');
    let nat = $('#nat').is(':checked');
    console.log({mon, tue, wed, thus, fri, sat, sun, nat});
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