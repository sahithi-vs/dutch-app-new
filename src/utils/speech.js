// Speech synthesis functionality
export const speakDutch = (text) => {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'nl-NL';
  utterance.rate = 0.8;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
};