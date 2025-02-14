const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");

// Hàm thay đổi GIF với hiệu ứng mượt mà
function changeGif(newSrc, newText, delay) {
    setTimeout(() => {
        gif.style.opacity = "0"; // Mờ dần
        setTimeout(() => {
            if (newText) question.innerHTML = newText; // Cập nhật nội dung câu hỏi
            gif.src = newSrc; // Cập nhật GIF
            gif.style.opacity = "1"; // Hiện dần lên
        }, 500); // Chờ hiệu ứng mờ dần hoàn tất (0.5s)
    }, delay);
}

yesBtn.addEventListener("click", () => {
    question.innerHTML = "Thank for ur choice ❤️💕";
    gif.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGNmY2pyOGRlaDhkNThmd3A1OHJpenMxNHgyaTl4cGVqanFnOXhsayZlcD12MV9naWZzX3NlYXJjaCZjdD1n/n4CZ0c7QjgS9sGAO5A/giphy.gif";
    gif.style.display = "block";
    gif.style.opacity = "1"; // Đảm bảo GIF hiển thị đầy đủ
    noBtn.style.display = "none";
    yesBtn.style.display = "none";

    changeGif(
        "https://media.giphy.com/media/L1QBZNJIEfVM3cdDvE/giphy.gif",
        "Happy our 1st Valentine ❤️💕🎉",
        5000
    );
    changeGif(
        "https://media.giphy.com/media/S5h4gvxxc1qlG/giphy.gif",
        "Hope u like the gift 🥰🥰",
        10000
    );

    setTimeout(() => {
        gif.style.opacity = "0"; // Mờ dần trước khi thay đổi nội dung
        setTimeout(() => {
            question.innerHTML = `
                <p>Click Here</p>
                <a href="https://www.youtube.com/watch?v=abPmZCZZrFA" target="_blank">
                    <img class="final-img" src="cat.jpg" width="100" height="100" alt="GIF Icon">
                </a>
            `;
            gif.style.display = "none"; // Ẩn GIF hoàn toàn
        }, 500);
    }, 15000);
    
});

// Hiệu ứng di chuyển nút "No"
noBtn.addEventListener("mouseover", () => {
    const wrapper = document.querySelector(".wrapper");
    const wrapperRect = wrapper.getBoundingClientRect();
    const noBtnRect = noBtn.getBoundingClientRect();

    const maxX = wrapperRect.width - noBtnRect.width;
    const maxY = wrapperRect.height - noBtnRect.height;

    const randomX = Math.min(Math.floor(Math.random() * maxX), maxX);
    const randomY = Math.min(Math.floor(Math.random() * maxY), maxY);

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
});
