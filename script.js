const fileInput = document.getElementById('fileInput');
const cipherMethod = document.getElementById('cipherMethod');
const shiftContainer = document.getElementById('shiftContainer');
const shift = document.getElementById('shift');
const languageSelector = document.getElementById('languageSelector');
const downloadBtn = document.getElementById('downloadBtn');
const reloadBtn = document.getElementById('reloadBtn');

fileInput.addEventListener('change', function () {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function () {
      document.getElementById('inputText').value = reader.result;
    };
    reader.readAsText(file, 'UTF-8');
  }
});

cipherMethod.addEventListener('change', function () {
  shiftContainer.style.display = cipherMethod.value === 'caesar' || cipherMethod.value === 'base64' ? 'block' : 'none';
});

function caesarCipher(text, shift, decrypt = false) {
  return Array.from(text).map(char => {
    const code = char.charCodeAt(0);
    return String.fromCharCode(decrypt ? code - shift : code + shift);
  }).join(''); 
}

function reverseCipher(text) {
  return text.split('').reverse().join('');
}

function atbashCipher(text) {
  return Array.from(text).map(char => {
    const code = char.charCodeAt(0);
    if (char >= 'A' && char <= 'Z') return String.fromCharCode(90 - (code - 65));
    if (char >= 'a' && char <= 'z') return String.fromCharCode(122 - (code - 97));
    return char;
  }).join('');
}

function base64Cipher(text, decrypt = false) {
  try {
    return decrypt ? atob(text) : btoa(text);
  } catch {
    return 'Invalid base64 input';
  }
}

function encryptText() {
  const input = document.getElementById('inputText').value;
  const shiftValue = parseInt(shift.value);
  const method = cipherMethod.value;
  let result = '';
  if (method === 'caesar') result = caesarCipher(input, shiftValue);
  else if (method === 'reverse') result = reverseCipher(input);
  else if (method === 'atbash') result = atbashCipher(input);
  else if (method === 'base64') result = base64Cipher(input);
  document.getElementById('outputText').value = result;
}

function decryptText() {
  const input = document.getElementById('inputText').value;
  const shiftValue = parseInt(shift.value);
  const method = cipherMethod.value;
  let result = '';
  if (method === 'caesar') result = caesarCipher(input, shiftValue, true);
  else if (method === 'reverse') result = reverseCipher(input);
  else if (method === 'atbash') result = atbashCipher(input);
  else if (method === 'base64') result = base64Cipher(input, true);
  document.getElementById('outputText').value = result;
}

function downloadResult() {
  const text = document.getElementById('outputText').value;
  const shiftValue = shift.value;
  const method = cipherMethod.value;
  const content = `Method: ${method}\nShift: ${shiftValue}\n${text}`;
  const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'result.txt';
  link.click();
}

function reloadPage() {
  location.reload();
}

function changeLanguage() {
  const lang = languageSelector.value;

  const translations = {
    en: {
      controlsHeader: 'Controls',
      uploadLabel: 'Upload Text File',
      cipherMethodLabel: 'Cipher Method',
      shiftLabel: 'Shift Value',
      languageLabel: 'Interface Language',
      textProcessingHeader: 'Text Processing',
      encryptBtn: 'Encrypt',
      decryptBtn: 'Decrypt',
      downloadBtn: 'Download Result',
      reloadBtn: 'Reload',
      inputPlaceholder: 'Enter text to encrypt or decrypt...',
      outputPlaceholder: 'Result will appear here...'
    },
    az: {
      controlsHeader: 'Nəzarət Panelləri',
      uploadLabel: 'Mətni Yükləyin',
      cipherMethodLabel: 'Şifrələmə Metodu',
      shiftLabel: 'İlkin Dəyəri',
      languageLabel: 'İnterfeys Dili',
      textProcessingHeader: 'Mətnin Emalı',
      encryptBtn: 'Şifrələmək',
      decryptBtn: 'Açmaq',
      downloadBtn: 'Nəticəni Yüklə',
      reloadBtn: 'Yenidən Yüklə',
      inputPlaceholder: 'Şifrələmək və ya açmaq üçün mətni daxil edin...',
      outputPlaceholder: 'Nəticə burada görsənəcək...'
    },
    tr: {
      controlsHeader: 'Kontroller',
      uploadLabel: 'Metin Dosyasını Yükle',
      cipherMethodLabel: 'Şifreleme Yöntemi',
      shiftLabel: 'Kaydırma Değeri',
      languageLabel: 'Arayüz Dili',
      textProcessingHeader: 'Metin İşleme',
      encryptBtn: 'Şifrele',
      decryptBtn: 'Şifre Çöz',
      downloadBtn: 'Sonucu İndir',
      reloadBtn: 'Yeniden Yükle',
      inputPlaceholder: 'Şifrelenecek veya çözülecek metni girin...',
      outputPlaceholder: 'Sonuç burada görünecek...'
    },
    ru: {
      controlsHeader: 'Управление',
      uploadLabel: 'Загрузите текстовый файл',
      cipherMethodLabel: 'Метод Шифрования',
      shiftLabel: 'Значение сдвига',
      languageLabel: 'Язык интерфейса',
      textProcessingHeader: 'Обработка текста',
      encryptBtn: 'Зашифровать',
      decryptBtn: 'Расшифровать',
      downloadBtn: 'Скачать результат',
      reloadBtn: 'Перезагрузить',
      inputPlaceholder: 'Введите текст для шифрования или расшифровки...',
      outputPlaceholder: 'Результат появится здесь...'
    }
  };

  const t = translations[lang];

  document.getElementById('controlsHeader').innerText = t.controlsHeader;
  document.getElementById('uploadLabel').innerText = t.uploadLabel;
  document.getElementById('cipherMethodLabel').innerText = t.cipherMethodLabel;
  document.getElementById('shiftLabel').innerText = t.shiftLabel;
  document.getElementById('languageLabel').innerText = t.languageLabel;
  document.getElementById('textProcessingHeader').innerText = t.textProcessingHeader;
  document.querySelector('.encrypt-btn').innerText = t.encryptBtn;
  document.querySelector('.decrypt-btn').innerText = t.decryptBtn;
  document.getElementById('downloadBtn').innerText = t.downloadBtn;
  document.getElementById('reloadBtn').innerText = t.reloadBtn;
  
  document.getElementById('inputText').placeholder = t.inputPlaceholder;
  document.getElementById('outputText').placeholder = t.outputPlaceholder;
}
