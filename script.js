let count = localStorage.getItem("couponCount")
  ? parseInt(localStorage.getItem("couponCount"))
  : 0;

const counter = document.getElementById("counter");
counter.textContent = `Cupones creados: ${count} 🎟️`;

function createCoupon() {
  const text = document.getElementById("couponText").value;
  const message = document.getElementById("messageText").value;

  const content = document.getElementById("couponContent");
  const messageBox = document.getElementById("couponMessage");
  const downloadBtn = document.getElementById("downloadBtn");

  if (!text.trim()) return;

  content.textContent = text;
  messageBox.textContent = message;

  count++;
  localStorage.setItem("couponCount", count);
  counter.textContent = `Cupones creados: ${count} 🎟️`;

  downloadBtn.hidden = false;
  celebrate();
}

function celebrate() {
  confetti({
    particleCount: 120,
    spread: 70,
    origin: { y: 0.6 },
    colors: [
      "#E7AE75",
      "#F6DBF3",
      "#FAD6D3",
      "#F288A1",
      "#83513E"
    ]
  });
}

function downloadCoupon() {
  const coupon = document.getElementById("coupon");

  html2canvas(coupon).then(canvas => {
    const link = document.createElement("a");
    link.download = "cupon-para-ti.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  });
}
