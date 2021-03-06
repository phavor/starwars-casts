import { expect } from 'chai'
import starWars from '../index'

describe('starwars', function() {
  describe('ALL', function () {
    it('should be an array of strings', function() {
      expect(starWars.all).to.satisfy(isArrayOfStrings)

      function isArrayOfStrings(array) {
        return array.every(function(item) {
          return typeof item === 'string'
        })
      }
    })

    it('should contain `Luke Skywalker`', function() {
      expect(starWars.all).to.include('Luke Skywalker')
    })
  })

  describe('random', function() {
    it('should return a random name from the starwars.all array', function() {
      var randomItem = starWars.random()
      expect(starWars.all).to.include(randomItem)
    })

    it ('should return and array of random names if passed a number', function() {
      var randomItems = starWars.random(3)
      expect(randomItems).to.have.length(3)

      randomItems.forEach(function (item) {
        expect(starWars.all).to.include(item)
      });
    })
  })
})