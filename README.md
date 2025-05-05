# Encryption - Decryption Tool

This web-based tool allows users to encrypt and decrypt text using different cipher methods. The available cipher methods include Caesar Cipher, Reverse Cipher, Atbash Cipher, and Base64 encoding. Users can also upload a text file for encryption/decryption and change the interface language.

## Features

- **File Upload:** Upload a `.txt` file to input text for encryption or decryption.
- **Cipher Methods:**
  - **Caesar Cipher:** A substitution cipher where each letter is shifted by a specified value.
  - **Reverse Cipher:** The text is reversed.
  - **Atbash Cipher:** A substitution cipher where each letter is mapped to its reverse counterpart in the alphabet.
  - **Base64 Encoding/Decoding:** Convert text to Base64 or decode Base64 encoded text.
- **Language Selector:** Change the interface language between English, Azerbaijani, Turkish, and Russian.
- **Encryption & Decryption:** Encrypt or decrypt text based on the selected cipher method and shift value (if applicable).
- **Download Result:** Download the processed result as a `.txt` file.
- **Reload Page:** Reload the application to reset all fields.

## Getting Started

1. Clone or download the repository.
2. Open the `index.html` file in a web browser.
3. Upload a text file or enter the text directly in the input field.
4. Choose a cipher method and, if applicable, set the shift value.
5. Click the "Encrypt" or "Decrypt" button based on your needs.
6. Download the result or reload the page to reset the tool.

## Languages Supported

- **English (en)**
- **Azerbaijani (az)**
- **Turkish (tr)**
- **Russian (ru)**

## How to Use

1. **Upload Text File:** Use the file input to upload a `.txt` file.
2. **Select Cipher Method:** Choose one of the available cipher methods.
3. **Shift Value (if applicable):** Set the shift value for Caesar cipher or Base64 encoding.
4. **Encrypt/Decrypt:** Click the respective button to either encrypt or decrypt the text.
5. **Download Result:** Once the operation is complete, click the "Download Result" button to save the processed text.
6. **Reload:** If you want to reset the tool, click the "Reload" button.

## Example

1. **Encrypt:** Select the Caesar Cipher and set the shift to 3. Enter the text "HELLO" and click "Encrypt". The result will be "KHOOR".
2. **Decrypt:** Select Caesar Cipher and set the shift to 3. Enter "KHOOR" and click "Decrypt". The result will be "HELLO".

## Contributing

Feel free to fork the repository and submit pull requests for improvements or bug fixes. If you encounter any issues or have suggestions, please open an issue on the repository.
