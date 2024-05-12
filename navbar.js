const httpsHost = "https://" + window.location.hostname;
$.get(httpsHost+"/nav.html", function(data){
    $("#nav-placeholder").replaceWith(data);
});
function replaceimage (){
    if (window.location.pathname != '/dev/' && window.location.pathname != '/dev') {
        const img = document.createElement('img');
        img.id = 'menu_img_file';
        img.className = 'img_show'
        img.src = httpsHost+'/media/background.JPG';
        img.style.display = 'block';
        document.querySelector('#blockline_menu').replaceWith(img);
        const imgclasses = document.querySelectorAll('.img_show');
        imgclasses.forEach(imgEl => {
        imgEl.style.display = "block";
        });
    }

}
setTimeout(replaceimage, 500)
