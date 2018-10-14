function load(p){
    $('#content').remove('*');
    $.get(p + '.html', function(data){
        $('#content').html(data);
    });
}