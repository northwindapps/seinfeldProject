const synth = window.speechSynthesis;
const speakButton = document.getElementById('speak');
const inputField = document.getElementById('text-to-speech');

const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.lang = 'en-US'; // Set the language for recognition

recognition.onresult = (event) => {
  const transcript = event.results[0][0].transcript;
  document.getElementById('output').textContent = transcript;
  speakText();
};

recognition.onerror = (event) => {
  console.error('Speech recognition error:', event.error);
};

const startButton = document.getElementById('start-recognition');

startButton.addEventListener('click', () => {
  console.log('haha');
  recognition.start();
});

recognition.onend = () => {
  recognition.start(); // Continuously listen for speech
};

recognition.onspeechend = () => {
  recognition.stop(); // Stop listening after speech ends
};

function speakText() {
    // const text = inputField.value;
    const text = 'ah ha.Oh yes.'
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = synth.getVoices()[0]; // Set the voice (you may need to select an available voice)
    utterance.rate = 1.0; // Speech rate (0.1 to 10)
    utterance.pitch = 1.0; // Speech pitch (0 to 2)
    const voices = synth.getVoices();
    const usEnglishVoice = voices.find(voice => voice.lang === 'en-US');
    utterance.voice = usEnglishVoice;
    synth.speak(utterance);
  }
  
