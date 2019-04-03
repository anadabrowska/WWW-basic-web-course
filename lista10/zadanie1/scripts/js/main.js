var months = [
    {val: 0,  text: "January"},
    {val: 1,  text: "February"},
    {val: 2,  text: "March"},
    {val: 3,  text: "April"},
    {val: 4,  text: "May"},
    {val: 5,  text: "June"},
    {val: 6,  text: "July"},
    {val: 7,  text: "August"},
    {val: 8,  text: "September"},
    {val: 9,  text: "October"},
    {val: 10, text: "November"},
    {val: 11, text: "December"}
];

function submitted(e) {
    $.post(
        "scripts/php/login.php", 
        $("form").serialize()
    ).done(function(data) {
        let jsonData = JSON.parse(data);
        
        if(jsonData.success) {
            alert("You have been registered!");
        } else {
            $("i").each(function() {
                $(this).text("");
            });
            $.each(jsonData.errors, function(key, value){
                $("#"+key+"-err").text(value);
            });
        }
    });

    e.preventDefault();
}

$("document").ready(function() {
    $(months).each(function() {
        $("#month").append($("<option>").attr('value', this.val).text(this.text));
    });

    $("form").on("submit", submitted);
});