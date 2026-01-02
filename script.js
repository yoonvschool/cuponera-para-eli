function createCoupon() {
  const text = document.getElementById("couponText").value;
  const content = document.getElementById("couponContent");
  const downloadBtn = document.getElementById("downloadBtn");

  if (!text.trim()) return;

  content.textContent = text;
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
