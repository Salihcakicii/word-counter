const textInput = document.getElementById("textInput");
const wordCountEl = document.getElementById("wordCount");
const charCountWithSpacesEl = document.getElementById("charCountWithSpaces");
const charCountWithoutSpacesEl = document.getElementById("charCountWithoutSpaces");
const sentenceCountEl = document.getElementById("sentenceCount");
const paragraphCountEl = document.getElementById("paragraphCount");
const readingTimeEl = document.getElementById("readingTime");
const copyBtn = document.getElementById("copyBtn");
const languageSelect = document.getElementById("languageSelect");

const texts = {
  tr: {
    copySuccess: "Metin panoya kopyalandı!",
    copyFail: "Kopyalama başarısız oldu!",
  },
  en: {
    copySuccess: "Text copied to clipboard!",
    copyFail: "Copy failed!",
  },
};

function countWords(text) {
  if (!text) return 0;
  return text.trim().split(/\s+/).filter(w => w.length > 0).length;
}

function countCharacters(text, includeSpaces = true) {
  if (!text) return 0;
  return includeSpaces ? text.length : text.replace(/\s/g, "").length;
}

function countSentences(text) {
  if (!text) return 0;
  // Cümle sonu noktaları: . ! ?
  const sentences = text.match(/[^.!?]+[.!?]+/g);
  return sentences ? sentences.length : 0;
}

function countParagraphs(text) {
  if (!text) return 0;
  const paragraphs = text.trim().split(/\n+/);
  return paragraphs.filter(p => p.trim().length > 0).length;
}

function estimateReadingTime(wordCount) {
  // Ortalama 200 kelime/dakika
  return Math.max(1, Math.round(wordCount / 200));
}

function updateCounts() {
  const text = textInput.value;

  const words = countWords(text);
  const charsWithSpaces = countCharacters(text, true);
  const charsWithoutSpaces = countCharacters(text, false);
  const sentences = countSentences(text);
  const paragraphs = countParagraphs(text);
  const readingTime = estimateReadingTime(words);

  wordCountEl.textContent = words;
  charCountWithSpacesEl.textContent = charsWithSpaces;
  charCountWithoutSpacesEl.textContent = charsWithoutSpaces;
  sentenceCountEl.textContent = sentences;
  paragraphCountEl.textContent = paragraphs;
  readingTimeEl.textContent = readingTime;
}

textInput.addEventListener("input", updateCounts);

copyBtn.addEventListener("click", () => {
  const lang = languageSelect.value;
  navigator.clipboard.writeText(textInput.value).then(() => {
    alert(texts[lang].copySuccess);
  }).catch(() => {
    alert(texts[lang].copyFail);
  });
});

languageSelect.addEventListener("change", () => {
  // Dili değiştirdiğimizde alert metinlerini güncellemek için burada herhangi ekstra işlem yok.
  // İstersen başka dil değişim işlemleri eklenebilir.
});

updateCounts();
