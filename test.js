const chai = require('chai');
const expect = chai.expect;

const GetMidnightDate = require('./index.js');

describe('GetMidnightDate(dateObj)', function() {

  describe('normal month dates', function(){
    it('should correctly return last day of month', function() {

      expect( GetMidnightDate( new Date(2001,0,1) ) ).to.deep.equal( new Date(2001,0,31) );
      expect( GetMidnightDate( new Date(2001,1,1) ) ).to.deep.equal( new Date(2001,1,28) );
      expect( GetMidnightDate( new Date(2001,2,1) ) ).to.deep.equal( new Date(2001,2,31) );
      expect( GetMidnightDate( new Date(2001,3,1) ) ).to.deep.equal( new Date(2001,3,30) );
      expect( GetMidnightDate( new Date(2001,4,1) ) ).to.deep.equal( new Date(2001,4,31) );
      expect( GetMidnightDate( new Date(2001,5,1) ) ).to.deep.equal( new Date(2001,5,30) );
      expect( GetMidnightDate( new Date(2001,6,1) ) ).to.deep.equal( new Date(2001,6,31) );
      expect( GetMidnightDate( new Date(2001,7,1) ) ).to.deep.equal( new Date(2001,7,31) );
      expect( GetMidnightDate( new Date(2001,8,1) ) ).to.deep.equal( new Date(2001,8,30) );
      expect( GetMidnightDate( new Date(2001,9,1) ) ).to.deep.equal( new Date(2001,9,31) );
      expect( GetMidnightDate( new Date(2001,10,1) ) ).to.deep.equal( new Date(2001,10,30) );
      expect( GetMidnightDate( new Date(2001,11,1) ) ).to.deep.equal( new Date(2001,11,31) );

    });
  });

  describe('last day of month supplied', function(){
    it('should return same Date', function() {

      expect( GetMidnightDate( new Date(2016,8,30) ) ).to.deep.equal( new Date(2016,8,30) );

    });
  });

  describe('February in a leap year', function(){
    it('should return Feb 29th', function() {

      expect( GetMidnightDate( new Date(2016,1,1) ) ).to.deep.equal( new Date(2016,1,29) );

    });
  });



});