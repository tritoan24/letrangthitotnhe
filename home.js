

// Lấy các phần tử cần điều chỉnh
var elements = [
    document.getElementById('e'),
    document.getElementById('txt1'),
    document.getElementById('txt2'),
    document.getElementById('txt3'),
    document.getElementById('txtRain'),
    document.getElementById('grassRain'),
    document.getElementById('txt4'),
    document.getElementById('txt5'),
    document.getElementById('main'),
];

// Lấy phần tử .grass-rain để thêm hình ảnh hoa vào
var grassRain = document.getElementById('grassRain');

// Mảng chứa các đường dẫn đến hình ảnh hoa
var flowerImages = [
    './tainguyen/clover.png',
    './tainguyen/clover3.png',
    './tainguyen/anh.jpg',
];

// Hàm thêm hình ảnh hoa vào .grass-rain với vị trí ngẫu nhiên
function createFlowers() {
    for (var i = 0; i < 75; i++) { // Tạo 10 hình ảnh hoa
        var flower = document.createElement('img');
        flower.src = flowerImages[Math.floor(Math.random() * flowerImages.length)]; // Chọn ngẫu nhiên một hình ảnh hoa
        flower.classList.add('grass'); // Thêm lớp .grass cho hình ảnh
        flower.style.left = Math.random() * 100 + '%'; // Đặt vị trí ngẫu nhiên theo chiều ngang
        flower.style.animationDuration = (Math.random() * 8 + 2) + 's'; // Đặt thời gian rơi ngẫu nhiên
        grassRain.appendChild(flower); // Thêm hình ảnh hoa vào .grass-rain
    }
}
// Ẩn tất cả các phần tử ban đầu
elements.forEach(function(element) {
    element.style.display = 'none';
});

// Hiển thị lần lượt từng phần tử sau mỗi 2.5 giây, với grassRain hiển thị trong 5 giây
var delay = 2000;

function showElement(index) {
    if (index >= elements.length) return;

    var element = elements[index];
    var currentDelay = (element.id === 'grassRain') ? 6000 : delay;

    // Ẩn tất cả các phần tử trước khi hiển thị phần tử tiếp theo
    elements.forEach(function(e) {
        e.style.display = 'none';
    });

    // Hiển thị phần tử hiện tại
    element.style.display = 'block';

    // Nếu là phần tử grassRain, tạo hiệu ứng hoa
    if (element.id === 'grassRain') {
        createFlowers();
    }

    setTimeout(function() {
        showElement(index + 1);
    }, currentDelay);
}

// Bắt đầu hiển thị từ phần tử đầu tiên
showElement(0);


// JavaScript để di chuyển nút
var button = document.getElementById('Button');
var hoverCount = 0;
function moveButton() {
    if (!window.matchMedia('(max-width: 768px)').matches) {
        button.addEventListener('mouseenter', function() {
            if (hoverCount < 5) {
                var containerRect = document.querySelector('.container').getBoundingClientRect();
                var buttonRect = button.getBoundingClientRect();

                // Tăng khoảng cách di chuyển ngẫu nhiên
                var moveDistance = 200; // Khoảng cách di chuyển tối thiểu

                var maxX = containerRect.width - buttonRect.width - moveDistance;
                var maxY = containerRect.height - buttonRect.height - moveDistance;

                // Đảm bảo nút di chuyển xa hơn một chút
                var randomX = Math.floor(Math.random() * (maxX - moveDistance)) + moveDistance;
                var randomY = Math.floor(Math.random() * (maxY - moveDistance)) + moveDistance;

                button.style.left = randomX + 'px';
                button.style.top = randomY + 'px';

                hoverCount++;
            }
        });
    }
}

// Gọi hàm di chuyển nút khi trang web được tải và khi thay đổi kích thước cửa sổ
moveButton();
window.addEventListener('resize', moveButton);



button.addEventListener('click', function() {
    var video = document.getElementById('video');
    video.style.display = 'block';
    video.play();
    // Khi ấn vào nút, ẩn nút và hiển thị nút "Thoát"
    button.style.display = 'none';

    var exit = document.createElement('button');
    exit.innerHTML = 'Khấn Online';
    exit.style.position = 'absolute';
    exit.style.top = '10px';
    exit.style.zIndex = '1000';
    exit.style.padding = '10px 40px';
    exit.style.border = 'none';
    exit.style.backgroundColor = '#f00';
    exit.style.color = '#fff';
    exit.style.cursor = 'pointer';

    document.body.appendChild(exit);
    exit.addEventListener('click', function() {
        //chuyển trang sang khanonline.html
      document.location.href = 'khanonline.html';
    });
   
});
