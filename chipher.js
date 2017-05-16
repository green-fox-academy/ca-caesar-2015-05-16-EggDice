'use strict'

const LOWERCASE_BASE_OFFSET = 97
const UPPERCASE_BASE_OFFSET = 65
const ALPHABET_SIZE = 26

function chipher(input, offset) {
  return Array.from(input)
    .map(letter => chipherLetter(letter, offset))
    .join('')
}

function chipherLetter(letter, offset) {
  const baseOffset = isUpperCase(letter) ? UPPERCASE_BASE_OFFSET : LOWERCASE_BASE_OFFSET
  const originalCharCode = letter.charCodeAt(0)
  const offsetWithOverflow =
    (originalCharCode - baseOffset + offset) % ALPHABET_SIZE
  const newCharCode = baseOffset + offsetWithOverflow
  return String.fromCharCode(newCharCode)
}

function isUpperCase(letter) {
  return letter.toUpperCase() === letter
}

module.exports = chipher;
