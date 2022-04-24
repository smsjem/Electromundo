/*$(document).ready(function(){
    $(`.category-list .category-item[category="all"]`).addClass("ct-item-active");
    $(`.category-item`).click(function(){

        var catProduct = $(this).attr("category");
        console.log(catProduct);
        

        $(`.category-item`).removeClass("ct-item-active");
        $(this).addClass("ct-item-active");
        
        $(`.product-item`).hide();

        $(`.product-item[category="`+catProduct+`"]`).show();
    })
    $(`.category-item[category="all"]`).click(function(){
        $(`product-item`).show;
    })
})

*/

$(document).ready(function(){
    $(`.category-list .category-item[category="all"]`).addClass("ct-item-active");
    $(`.category-item`).click(function(){
        var catProduct = $(this).attr("category");
        console.log(catProduct);

        $(`.category-item`).removeClass("ct-item-active");
        $(this).addClass("ct-item-active");
        
        $(`.product-item`).css("transform", "scale(0)");
        function hideProducts(){
            $(`.product-item`).hide();
        } setTimeout(hideProducts,300);
        
        function showProduct(){
            $(`.product-item[category="`+catProduct+`"]`).show();
            $(`.product-item[category="`+catProduct+`"]`).css("transform", "scale(1)");
        } setTimeout(showProduct,300);
       
    })
    $(`.category-item[category="all"]`).click(function(){
        function ShowAll(){
            $(`.product-item`).show();
            $(`.product-item`).css("transform", "scale(1)");
        } setTimeout(ShowAll,300);
    });
});