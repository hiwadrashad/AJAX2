// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
function getTemp() {
    $.ajax({
        url: "/home/currenttemp",
        type: 'GET',
        success: function (data) {
            console.log('The temp is: ' + data.degrees);
            alert("The temp is: " + data.degrees);
        },
            error: function(e)
            {
                console.log('Error!');
        }
    });
}

function setTemp() {

    var model = {
        "oldtemp": 50,
        "newtemp": 80
    };

    $.ajax({
        url: "/home/settemp",
        type: 'POST',
        contentType: 'application/json',
        dataType: 'json',
        data: JSON.stringify(model),
        success: function (data) {
            if (data.status == 'ok') {
                alert("The temp is set");
            }
            else 
            {
                alert("Failed to set the temp");
            }
        },
        error: function (e) {
            console.log('Error!');
        }
    });
}