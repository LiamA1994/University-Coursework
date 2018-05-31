/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function() {
    $('.tab-section').hide();
    $('#tabs a').bind('click', function(event) {
        $('#tabs a.current').removeClass('current');
        $('.tab-section:visible').hide();
        $(this.hash).show();
        $(this).addClass('current');
        event.preventDefault;
    })
            .filter(':first').click();
});
