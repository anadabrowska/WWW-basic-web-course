jQuery.fn.extend({
    myAutocomplete: function(path) {
        return this.each(function() {
            let obj = $(this);
            let input = $("<input type=\"text\" style=\"width: 100%;\"></input>");
            let container = $("<div class=\"plugin-container hidden\"></div>");

            $(obj).append(input).append(container);

            $(document).on('click', function(e) {
                if(!$(e.target).hasClass("plugin-autocomplete-item")){
                    $(container).css("display", 'none');
                }
            });
            
            $(obj).first().keyup(function(e) {
                let inputText = $(input).val();
                if(inputText.length <= 0) {
                    $(container).css("display", "none");
                    return;
                }
                $.ajax({
                    url: path,
                    method: 'POST',
                    data: {query: inputText},
                    success: function(response) {
                        $(container).empty();
                        let data = JSON.parse(response);
                        let show = data.length > 0;
                        $.each(data, function(index, value) {
                            let item = $("<div class=\"plugin-autocomplete-item\">" + value + "</div>");
                            $(item).click(function(){
                                $(obj).find("input").val($(item).text());
                                $(container).css("display", "none");
                            });
                            $(container).append(item);
                        });
        
                        if(show) $(container).css("display", "block");
                        else     $(container).css("display", "none");
                    }
                });
            });
        });
    }
});