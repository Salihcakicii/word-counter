const textInput = document.getElementById("textInput");
const charCount = document.getElementById("charCount");
const wordCount = document.getElementById("wordCount");
const lineCount = document.getElementById("lineCount");
const readingTime = document.getElementById("readingTime");

textInput.addEventListener("input", () => {
  const text = textInput.value;

  // Karakter sayısı
  charCount.textContent = text.length;

  // Kelime sayısı
  const words = text.trim().split(/\s+/).filter(Boolean);
  wordCount.textContent = words.length;

  // Satır sayısı
  const lines = text.split(/\n/);
  lineCount.textContent = lines.length;

  // Okuma süresi (ortalama 200 kelime/dk)
  const totalSeconds = Math.ceil((words.length / 200) * 60);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  readingTime.textContent = minutes > 0 ? `${minutes} dk ${seconds} sn` : `${seconds} sn`;
});

function copyText() {
  textInput.select();
  document.execCommand("copy");
  alert("Metin kopyalandı!");
}
