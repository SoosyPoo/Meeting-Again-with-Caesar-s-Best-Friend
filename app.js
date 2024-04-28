const friend = "BRUTUS"
const shiftValue = 3; // Caesar cipher shift value
const alphabet = "abcdefghijklmnopqrstuvwxyz";
let encryptedFriend = "";
for (let i = 0; i < friend.length; i++) {
  const currentLetter = friend[i];
  const currentIndex = alphabet.indexOf(currentLetter.toLowerCase());
    const newIndex = (currentIndex + shiftValue) % alphabet.length;// % is the modulus operator which ensures that the sum of the current index and the shift value surpasses the alphabets length. So after "z" we returm back to "a".
    encryptedName += alphabet[newIndex].toUpperCase();
} //loops provide a way to repeat a block of code multiple times, ensuring consostent encryption. 
