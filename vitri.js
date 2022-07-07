var locationcc = confirm("Bạn đồng ý cho phép trình duyệt truy xuất vị trí");

if (locationcc) {
    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            alert("Geolocation is not supported by this browser");
        }
    }
    getLocation();
}

function showPosition(position) {
    alert ("Kinh độ: " + position.coords.latitude + "\n" + 
    "Vĩ độ: " + position.coords.longitude);
}