function appendToDisplay(value) {
  const display = document.getElementById("display");
  display.value += value;
}

function calculate() {
  const display = document.getElementById("display");
  // Hapus spasi agar pengecekan lebih mudah (misal: "1 + 1" jadi "1+1")
  const expression = display.value;
  const cleanExpression = expression.replace(/\s+/g, "");

  // Cek apakah ekspresinya khusus "1+1"
  if (cleanExpression === "1+1") {
    display.value = "I love you and I will always love you";
  } else {
    try {
      // Menghitung ekspresi matematika lainnya secara normal
      display.value = eval(expression);
    } catch {
      display.value = "Error";
    }
  }
}

function clearDisplay() {
  const display = document.getElementById("display");
  display.value = "";
}
// Mendeteksi tombol keyboard yang ditekan
document.addEventListener("keydown", function (event) {
  const key = event.key;

  // Jika tombol angka (0-9) atau operator (+, -, *, /) ditekan
  if (
    (key >= "0" && key <= "9") ||
    key === "+" ||
    key === "-" ||
    key === "*" ||
    key === "/"
  ) {
    appendToDisplay(key);
  }
  // Jika menekan tombol Enter atau '=' untuk menghitung
  else if (key === "Enter" || key === "=") {
    calculate();
  }
  // Jika menekan tombol Backspace untuk menghapus satu karakter terakhir (opsional)
  else if (key === "Backspace") {
    const display = document.getElementById("display");
    display.value = display.value.slice(0, -1);
  }
  // Jika menekan tombol Escape (Esc) untuk mereset kalkulator
  else if (key === "Escape") {
    clearDisplay();
  }
});
