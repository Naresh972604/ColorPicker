var a=false;
$( document ).ready(function() {
    function updateColor(color,options) {
        var hexColor = "transparent";
        if(color) {
            hexColor = color.toHexString();
        }
        if(options == 'headBG')
            $("#bgHead").css("background-color", hexColor);
        else if(options == 'headName')
            $("#userName").css({"color": hexColor});

    }

    $("#headBG").spectrum({

        color:'#dc3545',
        move: function (color) {
            updateColor(color,'headBG');
        },
        hide: function (color) {
            updateColor(color,'headBG');
        }
    });

    
    $("#headName").spectrum({
        color:'white',
        move: function (color) {
            updateColor(color,'headName');
        },
        hide: function (color) {
            updateColor(color,'headName');
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


