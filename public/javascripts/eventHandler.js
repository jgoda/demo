$(document).ready(function () {

    $('.collapsible').collapsible();

    $('.modal').modal();

    $('.datepicker').datepicker();
    $('.timepicker').timepicker();

    $('#allUccCategory').change(function () {
        let allChecked = $(this).is(':checked');
        $('#insurance').prop('checked', allChecked);
        $('#realState').prop('checked', allChecked);
        $('#education').prop('checked', allChecked);
        $('#health').prop('checked', allChecked);
        $('#goods').prop('checked', allChecked);
        $('#ent').prop('checked', allChecked);
        $('#tourism').prop('checked', allChecked);
        $('#food').prop('checked', allChecked);
    });

    $('#allModeCommunication').change(function () {
        let allChecked = $(this).is(':checked');
        $('#voice').prop('checked', allChecked);
        $('#sms').prop('checked', allChecked);
        $('#ADrec').prop('checked', allChecked);
        $('#ADlive').prop('checked', allChecked);
        $('#robo').prop('checked', allChecked);
    });

    $('#allBand').change(function () {
        let allChecked = $(this).is(':checked');
        $('#t1').prop('checked', allChecked);
        $('#t2').prop('checked', allChecked);
        $('#t3').prop('checked', allChecked);
        $('#t4').prop('checked', allChecked);
        $('#t5').prop('checked', allChecked);
        $('#t6').prop('checked', allChecked);
        $('#t7').prop('checked', allChecked);
        $('#t8').prop('checked', allChecked);
        $('#t9').prop('checked', allChecked);
    });

    $('#allDay').change(function () {
        let allChecked = $(this).is(':checked');
        $('#mon').prop('checked', allChecked);
        $('#tue').prop('checked', allChecked);
        $('#wed').prop('checked', allChecked);
        $('#thus').prop('checked', allChecked);
        $('#fri').prop('checked', allChecked);
        $('#sat').prop('checked', allChecked);
        $('#sun').prop('checked', allChecked);
        $('#nat').prop('checked', allChecked);
    });


});
