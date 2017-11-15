(function(global){
    function remChange(){
        document.documentElement.style.fontSize=100*document.documentElement.clientWidth/750+'px';
    }
    remChange();
    global.addEventListener('resize',remChange,false);
})(window);

$(function () {
    //首页提交按钮
    $('#submitBtn').on('click',function (e) {
        /*do something*/
        e.preventDefault();
        $('.model').fadeIn(); //显示弹窗
        showMask(); //显示遮罩层
    });
    //弹窗确定按钮
    $('#tcBtn').on('click',function (e) {
        e.preventDefault();
        $(this).parent().fadeOut();
        hideMask();
    });
    //显示遮罩层    
    function showMask(){
        $("#mask").css("height",$(document).height());
        $("#mask").css("width",$(document).width());
        $("#mask").show();
    }
    //隐藏遮罩层  
    function hideMask(){
        $("#mask").hide();
    }
});
