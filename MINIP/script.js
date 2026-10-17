// Helper: Simple XOR for password protection
function xorEncryptDecrypt(text, key) {
  if (!key) return text;
  let result = "";
  for (let i = 0; i < text.length; i++) {
    result += String.fromCharCode(text.charCodeAt(i) ^ key.charCodeAt(i % key.length));
  }
  return result;
}

// Convert text to binary
function textToBinary(text) {
  return text
    .split("")
    .map((char) => char.charCodeAt(0).toString(2).padStart(8, "0"))
    .join("");
}

// Convert binary to text
function binaryToText(binary) {
  let chars = [];
  for (let i = 0; i < binary.length; i += 8) {
    const byte = binary.substr(i, 8);
    chars.push(String.fromCharCode(parseInt(byte, 2)));
  }
  return chars.join("");
}

// Encode message
function encodeMessage() {
  const fileInput = document.getElementById("inputImage").files[0];
  const message = document.getElementById("message").value;
  const password = document.getElementById("password").value;

  if (!fileInput || !message) {
    alert("Please select an image and type a message!");
    return;
  }

  const encrypted = xorEncryptDecrypt(message, password) + "\0"; // Add terminator

  const reader = new FileReader();}