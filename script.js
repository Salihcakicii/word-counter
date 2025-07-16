const textInput = document.getElementById("textInput");
const keywordInput = document.getElementById("keywordInput");
const wordCount = document.getElementById("wordCount");
const charCount = document.getElementById("charCount");
const lineCount = document.getElementById("lineCount");
const readTime = document.getElementById("readTime");

const seoStatus = document.getElementById("seoStatus");
const keywordCount = document.getElementById("keywordCount");
const keywordFeedback = document.getElementById("keywordFeedback");

function analyzeText() {
  const text = textInput.value;
  const keyword = keywordInput.value.trim().toLowerCase();

  const words = text.trim().split(/\s+/).filter(Boolean);
  const lines = text.split(/\n/).filter(Boolean);
  const chars = text.length;
  const wordTotal = words.length;
  const lineTotal = lines.length;

  const minutes = Math.floor(wordTotal / 200);
  const seconds = Math.ceil((wordTotal % 200) / (200 / 60));

  wordCount.textContent = wordTotal;
  charCount.textContent = chars;
  lineCount.textContent = lineTotal;
  readTime.textContent = minutes > 0 
    ? `${minutes} dk ${seconds} sn` 
    : `${seconds} saniye`;

  // SEO Analizi: kelime sayısı
  if (wordTotal < 300) {
    seoStatus.textContent = "Yetersiz içerik (300 kelime altında)";
    seoStatus.className = "red";
  } else if (wordTotal < 500) {
    seoStatus.textContent = "İdare eder (300–500 kelime)";
    seoStatus.className = "yellow";
  } else {
    seoStatus.textContent = "İdeal uzunluk (500+ kelime)";
    seoStatus.className = "green";
  }

  // Anahtar kelime sayımı
  let keywordRepeat = 0;
  if (keyword) {
    const regex = new RegExp(`\\b${keyword}\\b`, "gi");
    keywordRepeat = (text.match(regex) || []).length;
  }

  keywordCount.textContent = keywordRepeat;

  if (!keyword) {
    keywordFeedback.textContent = "⚠️ Anahtar kelime girilmedi.";
    keywordFeedback.className = "yellow";
  } else if (keywordRepeat === 0) {
    keywordFeedback.textContent = "❌ Anahtar kelime içerikte yok.";
    keywordFeedback.className = "red";
  } else if (keywordRepeat > wordTotal * 0.05) {
    keywordFeedback.textContent = "⚠️ Anahtar kelime çok sık geçiyor (aşırı optimizasyon).";
    keywordFeedback.className = "yellow";
  } else {
    keywordFeedback.textContent = "✅ Anahtar kelime uygun sayıda geçiyor.";
    keywordFeedback.className = "green";
  }
}

textInput.addEventListener("input", analyzeText);
keywordInput.addEventListener("input", analyzeText);
