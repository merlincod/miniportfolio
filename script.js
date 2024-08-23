document.addEventListener("DOMContentLoaded", function() {
    const cursor = document.createElement("div");
    cursor.classList.add("custom-cursor");
    document.body.appendChild(cursor);

    document.addEventListener("mousemove", function(e) {
        cursor.style.left = e.pageX + "px";
        cursor.style.top = e.pageY + "px";
    });

    const hoverableElements = document.querySelectorAll("a, .message-box, #profile-picture");
    hoverableElements.forEach(el => {
        el.addEventListener("mouseover", () => cursor.classList.add("hover-grow"));
        el.addEventListener("mouseout", () => cursor.classList.remove("hover-grow"));
    });
});
