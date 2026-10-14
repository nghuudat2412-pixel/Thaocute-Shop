function upDate(previewPic) {
    console.log("Sự kiện upDate đã kích hoạt!");
    console.log("Source của ảnh: " + previewPic.src);
    console.log("Alt của ảnh: " + previewPic.alt);
    
    let displayDiv = document.getElementById("image");
    displayDiv.innerHTML = previewPic.alt;
    displayDiv.style.backgroundImage = "url('" + previewPic.src + "')";
    displayDiv.style.color = "#ffffff";
    displayDiv.style.textShadow = "2px 2px 4px rgba(0,0,0,0.8)";
}

function unDo() {
    let displayDiv = document.getElementById("image");
    displayDiv.style.backgroundImage = "url('')";
    displayDiv.innerHTML = "Di chuột hoặc tab qua một hình ảnh bên dưới để hiển thị ở đây.";
    displayDiv.style.color = "#495057";
    displayDiv.style.textShadow = "1px 1px 2px rgba(255, 255, 255, 0.8)";
}

function initialize() {
    console.log("Sự kiện onload đã kích hoạt! Bắt đầu gán tabindex...");
    // Lấy tất cả các hình ảnh trong thư viện
    let images = document.querySelectorAll('.gallery img');
    
    // Viết một vòng lặp for để lặp qua từng hình ảnh và thêm tabindex
    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute('tabindex', '0');
        console.log("Đã thêm tabindex cho hình ảnh thứ " + (i + 1));
    }
}
