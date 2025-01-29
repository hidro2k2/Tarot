const tarotCards = [
    // Major Arcana
    { name: "Người Điên", meaning: "Sự bắt đầu mới, tự do, tinh thần phiêu lưu", image: "images/the-fool.jpg" },
    { name: "Nhà Ảo Thuật", meaning: "Sáng tạo, kỹ năng, tài năng", image: "images/the-magician.jpg" },
    { name: "Nữ Tư Tế", meaning: "Trực giác, tiềm thức, bí ẩn", image: "images/the-high-priestess.jpg" },
    { name: "Nữ Hoàng", meaning: "Sự nuôi dưỡng, phong phú, an toàn", image: "images/the-empress.jpg" },
    { name: "Hoàng Đế", meaning: "Quyền lực, lãnh đạo, cấu trúc", image: "images/the-emperor.jpg" },
    { name: "Giáo Hoàng", meaning: "Truyền thống, tâm linh, đạo đức", image: "images/the-hierophant.jpg" },
    { name: "Tình Nhân", meaning: "Tình yêu, hòa hợp, mối quan hệ", image: "images/the-lovers.jpg" },
    { name: "Chiến Xa", meaning: "Kiểm soát, ý chí, chiến thắng", image: "images/the-chariot.jpg" },
    { name: "Sức Mạnh", meaning: "Can đảm, sức mạnh nội tâm, kiên nhẫn", image: "images/strength.jpg" },
    { name: "Ẩn Sĩ", meaning: "Nội tâm, sự cô độc, tìm kiếm chân lý", image: "images/the-hermit.jpg" },
    { name: "Bánh Xe Số Mệnh", meaning: "Vận may, chu kỳ, thay đổi", image: "images/wheel-of-fortune.jpg" },
    { name: "Công Lý", meaning: "Công bằng, cân bằng, chân lý", image: "images/justice.jpg" },
    { name: "Người Treo Cổ", meaning: "Hy sinh, buông bỏ, quan điểm mới", image: "images/the-hanged-man.jpg" },
    { name: "Thần Chết", meaning: "Kết thúc, thay đổi, chuyển đổi", image: "images/death.jpg" },
    { name: "Tiết Độ", meaning: "Cân bằng, điều độ, kiên nhẫn", image: "images/temperance.jpg" },
    { name: "Ác Quỷ", meaning: "Cám dỗ, nghiện ngập, ràng buộc", image: "images/the-devil.jpg" },
    { name: "Tháp", meaning: "Thảm họa, sự sụp đổ, thay đổi đột ngột", image: "images/the-tower.jpg" },
    { name: "Ngôi Sao", meaning: "Hy vọng, cảm hứng, tái sinh", image: "images/the-star.jpg" },
    { name: "Mặt Trăng", meaning: "Ảo tưởng, sợ hãi, tiềm thức", image: "images/the-moon.jpg" },
    { name: "Mặt Trời", meaning: "Hạnh phúc, thành công, sự sáng tỏ", image: "images/the-sun.jpg" },
    { name: "Phán Xét", meaning: "Tái sinh, thức tỉnh, tha thứ", image: "images/judgement.jpg" },
    { name: "Thế Giới", meaning: "Hoàn thành, thống nhất, thành tựu", image: "images/the-world.jpg" },

    // Minor Arcana - Wands
    { name: "Át Gậy", meaning: "Khởi đầu mới, cảm hứng, tiềm năng", image: "images/ace-of-wands.jpg" },
    { name: "Hai Gậy", meaning: "Lập kế hoạch, quyết định, tiến triển", image: "images/two-of-wands.jpg" },
    { name: "Ba Gậy", meaning: "Mở rộng, thám hiểm, cơ hội", image: "images/three-of-wands.jpg" },
    { name: "Bốn Gậy", meaning: "Ổn định, hòa hợp, thành công", image: "images/four-of-wands.jpg" },
    { name: "Năm Gậy", meaning: "Xung đột, cạnh tranh, thách thức", image: "images/five-of-wands.jpg" },
    { name: "Sáu Gậy", meaning: "Chiến thắng, công nhận, tự hào", image: "images/six-of-wands.jpg" },
    { name: "Bảy Gậy", meaning: "Phòng thủ, kiên trì, quyết tâm", image: "images/seven-of-wands.jpg" },
    { name: "Tám Gậy", meaning: "Hành động nhanh, tiến triển, thông tin", image: "images/eight-of-wands.jpg" },
    { name: "Chín Gậy", meaning: "Kiên cường, cảnh giác, bảo vệ", image: "images/nine-of-wands.jpg" },
    { name: "Mười Gậy", meaning: "Gánh nặng, trách nhiệm, áp lực", image: "images/ten-of-wands.jpg" },
    { name: "Hoàng Tử Gậy", meaning: "Nhiệt huyết, phiêu lưu, hành động", image: "images/page-of-wands.jpg" },
    { name: "Hiệp Sĩ Gậy", meaning: "Quyết đoán, can đảm, hành động", image: "images/knight-of-wands.jpg" },
    { name: "Hoàng Hậu Gậy", meaning: "Tự tin, độc lập, quyến rũ", image: "images/queen-of-wands.jpg" },
    { name: "Vua Gậy", meaning: "Lãnh đạo, tầm nhìn, quyết đoán", image: "images/king-of-wands.jpg" },

    // Minor Arcana - Cups
    { name: "Át Cốc", meaning: "Tình yêu mới, cảm xúc sâu sắc, sáng tạo", image: "images/ace-of-cups.jpg" },
    { name: "Hai Cốc", meaning: "Hợp tác, thu hút, tình yêu", image: "images/two-of-cups.jpg" },
    { name: "Ba Cốc", meaning: "Lễ kỷ niệm, niềm vui, tình bạn", image: "images/three-of-cups.jpg" },
    { name: "Bốn Cốc", meaning: "Sự thờ ơ, thiền định, đánh giá lại", image: "images/four-of-cups.jpg" },
    { name: "Năm Cốc", meaning: "Thất vọng, mất mát, hối tiếc", image: "images/five-of-cups.jpg" },
    { name: "Sáu Cốc", meaning: "Hoài niệm, hồi tưởng, quá khứ", image: "images/six-of-cups.jpg" },
    { name: "Bảy Cốc", meaning: "Ảo tưởng, lựa chọn, mơ mộng", image: "images/seven-of-cups.jpg" },
    { name: "Tám Cốc", meaning: "Rời bỏ, tìm kiếm, thay đổi", image: "images/eight-of-cups.jpg" },
    { name: "Chín Cốc", meaning: "Mãn nguyện, hạnh phúc, thành công", image: "images/nine-of-cups.jpg" },
    { name: "Mười Cốc", meaning: "Hạnh phúc gia đình, hòa hợp, tình yêu", image: "images/ten-of-cups.jpg" },
    { name: "Hoàng Tử Cốc", meaning: "Sáng tạo, trực giác, tin nhắn", image: "images/page-of-cups.jpg" },
    { name: "Hiệp Sĩ Cốc", meaning: "Lãng mạn, quyến rũ, mời gọi", image: "images/knight-of-cups.jpg" },
    { name: "Hoàng Hậu Cốc", meaning: "Trực giác, cảm thông, chăm sóc", image: "images/queen-of-cups.jpg" },
    { name: "Vua Cốc", meaning: "Cảm xúc ổn định, từ bi, khôn ngoan", image: "images/king-of-cups.jpg" },

    // Minor Arcana - Swords
    { name: "Át Kiếm", meaning: "Sự rõ ràng, ý tưởng mới, sức mạnh tinh thần", image: "images/ace-of-swords.jpg" },
    { name: "Hai Kiếm", meaning: "Quyết định khó khăn, cân bằng, bế tắc", image: "images/two-of-swords.jpg" },
    { name: "Ba Kiếm", meaning: "Đau khổ, buồn bã, thất vọng", image: "images/three-of-swords.jpg" },
    { name: "Bốn Kiếm", meaning: "Nghỉ ngơi, hồi phục, thiền định", image: "images/four-of-swords.jpg" },
    { name: "Năm Kiếm", meaning: "Xung đột, thất bại, cạnh tranh", image: "images/five-of-swords.jpg" },
    { name: "Sáu Kiếm", meaning: "Chuyển tiếp, di chuyển, bình yên", image: "images/six-of-swords.jpg" },
    { name: "Bảy Kiếm", meaning: "Lừa dối, chiến lược, bí mật", image: "images/seven-of-swords.jpg" },
    { name: "Tám Kiếm", meaning: "Giới hạn, cảm giác bị mắc kẹt, tự áp đặt", image: "images/eight-of-swords.jpg" },
    { name: "Chín Kiếm", meaning: "Lo lắng, sợ hãi, ác mộng", image: "images/nine-of-swords.jpg" },
    { name: "Mười Kiếm", meaning: "Kết thúc, mất mát, đau đớn", image: "images/ten-of-swords.jpg" },
    { name: "Hoàng Tử Kiếm", meaning: "Tò mò, cảnh giác, sự thật", image: "images/page-of-swords.jpg" },
    { name: "Hiệp Sĩ Kiếm", meaning: "Hành động nhanh, quyết đoán, can đảm", image: "images/knight-of-swords.jpg" },
    { name: "Hoàng Hậu Kiếm", meaning: "Thông minh, độc lập, trung thực", image: "images/queen-of-swords.jpg" },
    { name: "Vua Kiếm", meaning: "Quyền lực trí tuệ, lãnh đạo, công lý", image: "images/king-of-swords.jpg" },

    // Minor Arcana - Pentacles
    { name: "Át Xu", meaning: "Cơ hội mới về tài chính, thịnh vượng", image: "images/ace-of-pentacles.jpg" },
    { name: "Hai Xu", meaning: "Cân bằng tài chính, ưu tiên", image: "images/two-of-pentacles.jpg" },
    { name: "Ba Xu", meaning: "Kỹ năng, hợp tác, thành công", image: "images/three-of-pentacles.jpg" },
    { name: "Bốn Xu", meaning: "An toàn tài chính, tiết kiệm, bảo thủ", image: "images/four-of-pentacles.jpg" },
    { name: "Năm Xu", meaning: "Khó khăn tài chính, cô lập, lo lắng", image: "images/five-of-pentacles.jpg" },
    { name: "Sáu Xu", meaning: "Hào phóng, chia sẻ, hỗ trợ", image: "images/six-of-pentacles.jpg" },
    { name: "Bảy Xu", meaning: "Kiên nhẫn, đầu tư, phát triển", image: "images/seven-of-pentacles.jpg" },
    { name: "Tám Xu", meaning: "Kỹ năng, hoàn thiện, chuyên môn", image: "images/eight-of-pentacles.jpg" },
    { name: "Chín Xu", meaning: "Thành công vật chất, sung túc, an toàn", image: "images/nine-of-pentacles.jpg" },
    { name: "Mười Xu", meaning: "Sự giàu có, gia đình, di sản", image: "images/ten-of-pentacles.jpg" },
    { name: "Hoàng Tử Xu", meaning: "Học hỏi, cơ hội mới, thực tế", image: "images/page-of-pentacles.jpg" },
    { name: "Hiệp Sĩ Xu", meaning: "Chăm chỉ, trách nhiệm, kiên trì", image: "images/knight-of-pentacles.jpg" },
    { name: "Hoàng Hậu Xu", meaning: "Sung túc, an toàn, thực tài", image: "images/queen-of-pentacles.jpg" },
    { name: "Vua Xu", meaning: "Quyền lực tài chính, lãnh đạo, sự ổn định", image: "images/king-of-pentacles.jpg" }
];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Xáo trộn bài khi trang web được tải
shuffleArray(tarotCards);

const drawCardButton = document.getElementById('draw-card');
const messageElement = document.getElementById('message');
const meaningDisplayElement = document.getElementById('meaning-display');
const cardContainer = document.querySelector('.card-flip');
const cardImageElement = document.getElementById('card-image');
const cardNameElement = document.getElementById('card-name');

let currentCardIndex = 0;

drawCardButton.addEventListener('click', () => {
    drawCardButton.disabled = true;
    drawCardButton.textContent = 'Đang rút bài...';
    const loadingSpinner = document.getElementById('loading-spinner');
    if (loadingSpinner) {
        loadingSpinner.classList.remove('hidden');
    } else {
        console.warn('Không tìm thấy phần tử loading-spinner');
    }

    const randomCard = tarotCards[currentCardIndex];
    currentCardIndex = (currentCardIndex + 1) % tarotCards.length;
    
    if (currentCardIndex === 0) {
        shuffleArray(tarotCards);
    }
    
    console.log('Đang tải hình ảnh:', randomCard.image);
    
    const img = new Image();
    img.onload = () => {
        console.log('Hình ảnh đã tải thành công:', randomCard.image);
        cardImageElement.src = randomCard.image;
        cardNameElement.textContent = randomCard.name;
        meaningDisplayElement.textContent = `Ý nghĩa: ${randomCard.meaning}`;
        
        cardContainer.classList.add('flipped');
        messageElement.textContent = 'Lá bài bạn rút được là:';
        meaningDisplayElement.classList.remove('hidden');
        const loadingSpinner = document.getElementById('loading-spinner');
        if (loadingSpinner) {
            loadingSpinner.classList.add('hidden');
        } else {
            console.warn('Không tìm thấy phần tử loading-spinner');
        }
        
        setTimeout(() => {
            drawCardButton.disabled = false;
            drawCardButton.textContent = 'Rút bài mới';
            cardContainer.classList.remove('flipped');
        }, 5000);
    };
    img.onerror = () => {
        console.error('Không thể tải hình ảnh:', randomCard.image);
        // Hiển thị hình ảnh mặc định hoặc thông báo lỗi
        cardImageElement.src = 'images/card-back.jpg';
        cardNameElement.textContent = 'Không thể tải hình ảnh';
        meaningDisplayElement.textContent = 'Vui lòng thử lại';
        const loadingSpinner = document.getElementById('loading-spinner');
        if (loadingSpinner) {
            loadingSpinner.classList.add('hidden');
        } else {
            console.warn('Không tìm thấy phần tử loading-spinner');
        }
        drawCardButton.disabled = false;
        drawCardButton.textContent = 'Rút bài';
    };
    img.src = randomCard.image;
});

function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    }, options);

    images.forEach(img => observer.observe(img));
}

function preloadImages() {
    tarotCards.forEach(card => {
        const img = new Image();
        img.onload = () => console.log('Preloaded:', card.image);
        img.onerror = () => console.error('Failed to preload:', card.image);
        img.src = card.image;
    });
}

// Gọi hàm này sau khi trang đã tải xong
window.addEventListener('load', () => {
    preloadImages();
    lazyLoadImages();
});