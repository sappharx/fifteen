import test from 'ava'

import add from './add'

test('add two numbers', t => {
  t.is(add(2,3), 5)
})

test('add a poisive and negative integer', t => {
  t.is(add(-11, 22), 11)
})
