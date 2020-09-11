$(document).ready(function() {

    $('#w-btn-submit').click(async function() {
        let lock = false;
        const burgerDesc = $('#order').val();
        console.log(burgerDesc);

        if($('#order').val() === '') {
            $('#order-lbl').text('Order Is Required');
            $('#order-lbl').css('color', 'red');
            lock = false;
        } else {
            $('#order-lbl').text('Order');
            $('#order-lbl').css('color', 'darkgrey');
            lock = true;
        }

        if(lock) {
            await $.ajax('/api/burger',{
                type: 'POST',
                data: {
                    BurgerDesc : burgerDesc,
                    Eaten : 'false'
                }
            });
            location.reload();
        }
    });

    $('i[burgerid]').click(async function() {
        let burgerID = $(this).attr('burgerid');
        await $.ajax(`/api/burger/${burgerID}`,{
            type: 'PUT',
            data: { Eaten : 'true' }
        });
        location.reload();
    });

    $('#w-btn-clear').click(async function() {
        await $.ajax('/api/burger/drop',{
            type: 'DELETE'
        });
        location.reload();
    });

});