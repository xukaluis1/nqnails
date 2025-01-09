    // Hiện/ẩn thông tin cho từng mục
    function toggleInfo(event, infoText) {
        event.stopPropagation();
        const infoDiv = event.target.closest('.link').nextElementSibling;
        infoDiv.style.display = infoDiv.style.display === 'block' ? 'none' : 'block';
        infoDiv.textContent = infoText;
    }

    // Hiện div chia sẻ và cập nhật link
    function showShare(event) {
        event.stopPropagation();
        const shareDiv = document.querySelector('.share');
        shareDiv.style.display = 'flex';

        const link = event.currentTarget.getAttribute('data-link');
        const linkInput = document.getElementById('profileLink');
        linkInput.value = link;

        setRandomCoverImage();
    }

    // Ẩn div chia sẻ
    function hideShare() {
        const shareDiv = document.querySelector('.share');
        shareDiv.style.display = 'none';
    }

    // Sao chép link vào clipboard
    function copyLink() {
        const linkInput = document.getElementById('profileLink');
        linkInput.select();
        document.execCommand('copy');

        const message = document.getElementById('message');
        message.style.display = 'block';
        setTimeout(() => {
            message.style.display = 'none';
        }, 2000);
    }

    // Xác nhận cuộc gọi
    function confirmCall(phoneNumber) {
        if (confirm(`Are you sure you want to call ${phoneNumber}?`)) {
            window.location.href = `tel:${phoneNumber}`;
        }
    }

    // Hàm khởi tạo cho menu
    document.addEventListener("DOMContentLoaded", function() {
        const menu = document.querySelector('.menu');
        const menuBtn = document.querySelector('.menu-btn');

        if (menuBtn) {
            menuBtn.addEventListener('click', () => {
                menu.classList.toggle('menu-open');
            });
        }

        // Bắt sự kiện cho từng mục FAQ
        document.querySelectorAll(".faq").forEach(faq => {
            faq.addEventListener("click", () => {
                faq.classList.toggle("active");
            });
        });
    });

    // Animation cho các phần tử di chuyển
    document.querySelectorAll(".overmove").forEach(infi => {
        const infipar = infi.querySelector(".overmove div");
        Array.from(infipar.children).forEach(item => {
            infipar.appendChild(item.cloneNode(true));
        });
        infipar.style.animation = "move 20s linear infinite";
    });

    const coverImages = [
        'nails2.webp',
        'nails1.jpg',
        'bea-blos.gif',
        'blossom.png' // bạn có thể thêm nhiều hình ảnh hơn
    ];

    // Hàm chọn hình ảnh ngẫu nhiên
    function setRandomCoverImage() {
        const randomIndex = Math.floor(Math.random() * coverImages.length);
        document.getElementById('coverImage').src = coverImages[randomIndex];
    }


// document.addEventListener("DOMContentLoaded", function() {
//     const linksData = [
//         {
//             icon: "fa-snapchat-ghost",
//             name: "Snapchat",
//             url: "https://www.snapchat.com/add/your_snapchat_username"
//         },
//         {
//             icon: "fa-whatsapp",
//             name: "WhatsApp",
//             url: "https://wa.me/your_whatsapp_number"
//         }
//     ];
//
//     const linksContainer = document.querySelector('.links');
//
//     linksData.forEach(link => {
//         const linkDiv = document.createElement('div');
//         linkDiv.classList.add('link');
//         linkDiv.onclick = () => window.location.href = link.url;
//
//         linkDiv.innerHTML = `
//             <i class="fa-brands ${link.icon}" style="font-size: 30px;"></i>
//             <span>${link.name}</span>
//             <i class="fas fa-ellipsis-v" data-link="${link.url}" onclick="showShare(event)"></i>
//         `;
//
//         linksContainer.appendChild(linkDiv);
//     });
// });

