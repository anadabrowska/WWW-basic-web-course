var confirm;

function removeElem(i){
    $("#dialog-confirm")
        .data('param', i)
        .dialog("open");
}

$( function() {
    var dialog, form,

    name = $("#name"),
    surname = $("#surname"),
    town = $("#town"),
    code = $("#code"),
    birth = $("#birth"),
    allFields = $([]).add(name).add(surname).add(town).add(code).add(birth),
    tips = $(".validateTips"),
    id = 1;

    birth.datepicker({ dateFormat: 'dd-mm-yy' });

    confirm = $("#dialog-confirm").dialog({
        autoOpen: false,
        resizable: false,
        height: "auto",
        width: 400,
        modal: true,
        buttons: {
            "Usuń": function() {
                $("#row"+$(this).data('param')).remove();
                $(this).dialog("close");
            },
            "Anuluj": function() {
                $(this).dialog("close");
            }
        }
    });
 
    function updateTips(t) {
      tips
        .text(t)
        .addClass("ui-state-highlight");
      setTimeout(function() {
        tips.removeClass("ui-state-highlight", 1500);
      }, 500);
    }
 
    function checkLength(o, n, min, max) {
        if (o.val().length > max || o.val().length < min) {
            o.addClass("ui-state-error");
            updateTips("Length of " + n + " must be between " +
                        min + " and " + max + ".");
            return false;
        } else {
            return true;
            
        }
    }
 
    function checkRegexp( o, regexp, n ) {
        if (!( regexp.test(o.val()))) {
            o.addClass("ui-state-error");
            updateTips(n);
            return false;
        } else {
            return true;
        }
    }
 
    function addUser() {
        var valid = true;
        allFields.removeClass("ui-state-error");

        valid = valid && checkLength( name, "name", 1, 16 );
        valid = valid && checkLength( surname, "surname", 1, 16 );
        valid = valid && checkLength( town, "town", 1, 50 );
        valid = valid && checkLength( code, "code", 6, 7 );

        valid = valid && checkRegexp( code, /\d{2}-\d{3}/g, "eg. 11-111" );

        if(valid) {
            $("#users tbody").append( "<tr id=\"row"+id+"\">" +
                "<td>" + name.val() + "</td>" +
                "<td>" + surname.val() + "</td>" +
                "<td>" + town.val() + "</td>" +
                "<td>" + code.val() + "</td>" +
                "<td>" + birth.val() + "</td>" +
                "<td><button onclick=\"removeElem("+id+")\">Usuń</button></td>"+
            "</tr>");
            id++;
            dialog.dialog("close");
        }
        return valid;
    }
 
    dialog = $("#dialog-form").dialog({
        autoOpen: false,
        height: 400,
        width: 350,
        modal: true,
        buttons: {
            "Dodaj gościa": addUser,
            "Anuluj": function() {
                dialog.dialog("close");
            }
        },
        "Anuluj": function() {
            form[0].reset();
            allFields.removeClass("ui-state-error");
        }
    });
 
    form = dialog.find("form").on("submit", function(event) {
        event.preventDefault();
        addUser();
    });
 
    $("#create-user").button().on("click", function() {
        dialog.dialog("open");
    });
});