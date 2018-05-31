/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

$ (document).ready(function(){
ExternalLinks();
});
function ExternalLinks(){
    $ ('a.new-window').bind ('click', function(e) {
        var location = $ (this).attr('href');
        window.open(location);
        e.preventDefault();
    });
}
