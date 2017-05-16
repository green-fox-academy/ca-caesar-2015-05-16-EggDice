'use strict'

const test = require('tape')
const chipher = require('./chipher')

test('empty string', t => {
  t.equal(chipher('', 0), '')
  t.end()
})

test('zero offset should not alter the string', t => {
  t.equal(chipher('apple', 0), 'apple')
  t.end()
})

test('1 as offset should replace "a" with "b"', t => {
  t.equal(chipher('a', 1), 'b')
  t.end()
})

test('1 as offset should replace multiple letters', t => {
  t.equal(chipher('aa', 1), 'bb')
  t.end()
})

test('1 as offset should replace multiple different letters', t => {
  t.equal(chipher('ab', 1), 'bc')
  t.end()
})

test('1 as offset should transform z -> a', t => {
  t.equal(chipher('z', 1), 'a')
  t.end()
})

test('1 as offset should transform A -> B', t => {
  t.equal(chipher('A', 1), 'B')
  t.end()
})
