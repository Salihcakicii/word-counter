const textInput = document.getElementById("textInput");
const wordCount = document.getElementById("wordCount");
const charCount = document.getElementById("charCount");
const lineCount = document.getElementById("lineCount");
const readTime = document.getElementById("readTime");

textInput.addEventListener("input", () => {
  const text = textInput.value;

  const words = text.trim().split(/\s+/).filter(Boolean);
  const lines = text.split(/\n/).filter(Boolean);
  const chars = text.length;

  const wordTotal = words.length;
  const lineTotal = lines.length;
  const charTotal = chars;

  // Ortalama okuma hızı: dakikada 200 kelime
  const minutes = Math.floor(wordTotal / 200);
  const seconds = Math.ceil((wordTotal % 200) / (200 / 60));

  wordCount.textContent = wordTotal;
  charCount.textContent = charTotal;
  lineCount.textContent = lineTotal;
  readTime.textContent = minutes > 0 
    ? `${minutes} dk ${seconds} sn` 
    : `${seconds} saniye`;
});
