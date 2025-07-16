function analyzeText() {
  const text = document.getElementById("textInput").value;

  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const chars = text.replace(/\s/g, '').length;
  const lines = text.split(/\n/).filter(line => line.trim() !== "").length;
  const readingTime = Math.ceil(words / 200); // Ortalama 200 kelime/dk

  document.getElementById("words").innerText = words;
  document.getElementById("chars").innerText = chars;
  document.getElementById("lines").innerText = lines;
  document.getElementById("readingTime").innerText = readingTime;
}
