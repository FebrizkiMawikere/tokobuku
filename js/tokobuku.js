$(document).ready(function(){

});

$(".modal-edit").click(function(){
    var id = $(this).attr('data-id');
    $.get('kategori/edit?id='+id,function(data){
        //success
        $("[name='kategori']").val(data.kategori);
        $("#editForm").modal("show");
    });
});
$("#edit").click(function(){
    var id = $(this).attr('data-id');
    $.ajax({
        type:'post',
        url:'kategori/update?id='+id,
        data:{
            '_token':$('input[name=_token]').val(),
            'id':$('input[name=id]').val(),
            'kategori':$('input[name=kategori]').val(),
        },
        success:function(data){
        }
    });
});