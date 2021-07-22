
$( document ).ready(function() {
    $("#headBG").spectrum({
        color:'#dc3545',
        move: function(cl){
            let c=cl.toHexString();
            $("#bgHead").css({"background-color": c});
        },
        change: function(cl){
            let c=cl.toHexString();
            $("#bgHead").css({"background-color": c});
        },
        hide: function(color) {
            $('#bgHead').removeAttr('style');
        }
    });
    $("#headName").spectrum({
        color:'white',
        move: function(cl){
            let c=cl.toHexString();
            $("#userName").css({"color": c});
        },
        change: function(cl){
            let c=cl.toHexString();
            $("#userName").css({"color": c});
        },
        hide: function(color) {
            $('#userName').removeAttr('style');
        }
    });
    $("#headButtonColor").spectrum({
        color:'white',
        move: function(cl){
            let c=cl.toHexString();
            $("#contact").css({"background-color": c});
        },
        change: function(cl){
            let c=cl.toHexString();
            $("#contact").css({"background-color": c});
        },
        hide: function(color) {
            $('#contact').removeAttr('style');
        }

    });
    $("#headMenuTextColor").spectrum({
        color:'white',
        move: function(cl){
            let c=cl.toHexString();
            $(".menuItem").css({"color": c});
        },
        change: function(cl){
            let c=cl.toHexString();
            $(".menuItem").css({"color": c});
        },
        hide: function(color) {
            $('#menuItem').removeAttr('style');
        }
    });
    $("#headDesignationColor").spectrum({
        color:'white',
        move: function(cl){
            let c=cl.toHexString();
            $("#userRole").css({"color": c});
        },
        change: function(cl){
            let c=cl.toHexString();
            $("#userRole").css({"color": c});
        },
        hide: function(color) {
            $('#userRole').removeAttr('style');
        }
    });
    $("#headContactButtonText").spectrum({
        color:'black',
        move: function(cl){
            let c=cl.toHexString();
            $("#contact").css({"color": c});
        },
        change: function(cl){
            let c=cl.toHexString();
            $("#contact").css({"color": c});
        },
        hide: function(color) {
            $('#contact').removeAttr('style');
        }
    });
});


