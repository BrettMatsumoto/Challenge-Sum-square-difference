/*  SumOfASquare(naturalNumbers)
 *
 *  @param naturalNumbers        1...naturalNumbers to square and add
 *  @method sumOfSquares()       returns ths sum of all 'naturalNumbers' squared
 *  @method squareOfTheSums()    returns the square of all 'naturalNumbers'
 */
exports.SumOfASquare = SumOfASquare;

function SumOfASquare(naturalNumbers) {
  this.naturalNumbers = naturalNumbers;

  this.sumOfSquares = function () {
    let result = 0;
    let squared = 0;

    for (let i = 0; i <= this.naturalNumbers; i++){
      squared = i*i;
      result += squared;
    }

    return result;
  }

  this.squareOfTheSums = function () {
    let result = 0;
    let sum = 0;

    for (let i = 0; i <= this.naturalNumbers; i++){
      sum += i;
      result = sum*sum;
    }
    return result;
  }






}

// do work here


// overwrite the object prototype, or add methods to the prototype
// to satisfy the two method calls, sumOfSquares() and squareOfTheSums()
