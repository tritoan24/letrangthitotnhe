var Buttoncaunguyen = document.getElementById('Button');
var dialog = document.getElementById('customDialog');
var closeButton = document.querySelector('.close');

Buttoncaunguyen.addEventListener('click', function() {
    // Hiển thị dialog
    dialog.style.display = 'block';
});

// Đóng dialog khi người dùng nhấn vào nút đóng hoặc ngoài vùng dialog
closeButton.addEventListener('click', function() {
    dialog.style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target == dialog) {
        dialog.style.display = 'none';
    }
});


var chuyentrang = document.getElementById('chuyentrang');
chuyentrang.addEventListener('click', function() {
    document.location.href = 'randomdethivan.html';
});

