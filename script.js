// script.js

const generatePassword = (length, options) => {
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specialChars = "!@#$%^&*()";

    let charPool = '';
    if (options.includeUppercase) charPool += uppercase;
    if (options.includeLowercase) charPool += lowercase;
    if (options.includeNumbers) charPool += numbers;
    if (options.includeSpecialChars) charPool += specialChars;

    if (charPool.length === 0) {
        throw new Error('At least one character type must be selected.');
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charPool.length);
        password += charPool[randomIndex];
    }

    return password;
};

// Ekspor fungsi untuk keperluan pengujian
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { generatePassword };
}