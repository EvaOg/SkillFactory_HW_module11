const getMonth = require('./script.js');

describe('find a month name', () => {
   
  it('if the month\'s number is correct', () => {
    expect(getMonth(2)).toBe('February')
   })

   it('if the month\'s number is not correct', () => {
    expect(getMonth(5)).toBe('It\'s not a winter month')
   })

   it('if it\'s not a number', () => {
    expect(getMonth('h')).toBe('It\'s not a winter month')
   })

})

