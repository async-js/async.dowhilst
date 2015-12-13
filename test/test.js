'use strict'

var doWhilst = require('..')
var should = require('should')

describe('doWhilst', function () {
  it('works fine', function (done) {
    var call_order = []
    var count = 0

    doWhilst(
      function (cb) {
        call_order.push(['iterator', count])
        count++
        cb(null, count)
      },
      function () {
        call_order.push(['test', count])
        return (count < 5)
      },
      function (err, result) {
        result.should.be.equal(5)
        call_order.should.be.eql([
          ['iterator', 0], ['test', 1],
          ['iterator', 1], ['test', 2],
          ['iterator', 2], ['test', 3],
          ['iterator', 3], ['test', 4],
          ['iterator', 4], ['test', 5]
        ])
        done(err)
      }
    )
  })
})
