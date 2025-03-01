document.getElementById("randomColorChange").addEventListener("click", function () {
    const colors = [
        "#ff5733", "#33ff57", "#3357ff", "#ff33a8", "#f4c542", "#42f5e6", "#7d3cff",
        "#ff914d", "#1abc9c", "#e74c3c", "#3498db", "#9b59b6", "#2ecc71", "#f39c12",
        "#d35400", "#bdc3c7", "#27ae60", "#e84393", "#c0392b", "#16a085"
    ];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    document.body.style.backgroundColor = randomColor;
    this.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
});


