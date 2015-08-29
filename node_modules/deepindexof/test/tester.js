var expect = require('chai').expect;
require('../index');

describe('normal indexOf', function () {
  var arr = ["val1","val2",6,9];

  it('finds "val1" at index 0', function () {
    expect(arr.deepIndexOf('val1')).to.equal(0);
  });
  it('finds "val2" at index 1', function () {
    expect(arr.deepIndexOf('val2')).to.equal(1);
  });
  it('finds 6 at index 2', function () {
    expect(arr.deepIndexOf(6)).to.equal(2);
  });
  it('finds 9 at index 3', function () {
    expect(arr.deepIndexOf(9)).to.equal(3);
  });

  it('returns -1 for "val3"', function () {
    expect(arr.deepIndexOf('val3')).to.equal(-1);
  });

  it('returns -1 for 4', function () {
    expect(arr.deepIndexOf(4)).to.equal(-1);
  });

  it('returns -1 for "6"', function () {
    expect(arr.deepIndexOf('6')).to.equal(-1);
  });
});

describe('1 deepindexOf objects', function () {
  var arr = [{'1':'val1','2':3},
            {'1':3,'2':'val2'},
            {'1':'val2','2':'val3'},'val3'];

  it('finds "val1" at index 0', function () {
    expect(arr.deepIndexOf('val1')).to.equal(0);
  });
  it('finds "val2" at index 1', function () {
    expect(arr.deepIndexOf('val2')).to.equal(1);
  });
  it('finds "val3" at index 3', function () {
    expect(arr.deepIndexOf('val3')).to.equal(3);
  });
  it('finds 3 at index 0', function () {
    expect(arr.deepIndexOf(3)).to.equal(0);
  });

  it('returns -1 for "val4"', function () {
    expect(arr.deepIndexOf('val4')).to.equal(-1);
  });

  it('returns -1 for 4', function () {
    expect(arr.deepIndexOf(4)).to.equal(-1);
  });

  it('returns -1 for "3"', function () {
    expect(arr.deepIndexOf('3')).to.equal(-1);
  });
});

describe('1 deepindexOf arrays', function () {
  var arr = [['val1',3],
            [3,'val2'],
            ['val2','val3'],'val3'];

  it('finds "val1" at index 0', function () {
    expect(arr.deepIndexOf('val1')).to.equal(0);
  });
  it('finds "val2" at index 1', function () {
    expect(arr.deepIndexOf('val2')).to.equal(1);
  });
  it('finds "val3" at index 3', function () {
    expect(arr.deepIndexOf('val3')).to.equal(3);
  });
  it('finds 3 at index 0', function () {
    expect(arr.deepIndexOf(3)).to.equal(0);
  });

  it('returns -1 for "val4"', function () {
    expect(arr.deepIndexOf('val4')).to.equal(-1);
  });

  it('returns -1 for 4', function () {
    expect(arr.deepIndexOf(4)).to.equal(-1);
  });

  it('returns -1 for "3"', function () {
    expect(arr.deepIndexOf('3')).to.equal(-1);
  });
});

describe('1 deepindexOf objects with key', function () {
  var arr = [{'1':'val1','2':3},
            {'1':3,'2':'val2'},
            {'1':'val2','2':'val3'},'val3'];

  it('finds "val1" at index 0 with key "1"', function () {
    expect(arr.deepIndexOf('val1','1')).to.equal(0);
  });
  it('finds "val2" at index 1 with key "2"', function () {
    expect(arr.deepIndexOf('val2','2')).to.equal(1);
  });
  it('finds "val3" at index 3 with key "2"', function () {
    expect(arr.deepIndexOf('val3','2')).to.equal(2);
  });
  it('finds 3 at index 0 with key "2"', function () {
    expect(arr.deepIndexOf(3,'2')).to.equal(0);
  });

  it('finds 3 at index 1 with key "1"', function () {
    expect(arr.deepIndexOf(3,'1')).to.equal(1);
  });

  it('returns -1 for "val1" with key "3"', function () {
    expect(arr.deepIndexOf('val1','3')).to.equal(-1);
  });

  it('returns -1 for "val3" with key "1"', function () {
    expect(arr.deepIndexOf('val3','1')).to.equal(-1);
  });

  it('returns -1 for "3"', function () {
    expect(arr.deepIndexOf('3','1')).to.equal(-1);
  });
});

describe('>1 deepindexOf objects', function () {
  var arr = [{'1':{'a':'val1','b':3}},
            {'1':{'a':3,'b':'val2'},
            '2':{'a':'val2','b':'val3','c':'val4'}},'val3'];

  it('finds "val1" at index 0', function () {
    expect(arr.deepIndexOf('val1')).to.equal(0);
  });
  it('finds "val2" at index 1', function () {
    expect(arr.deepIndexOf('val2')).to.equal(1);
  });
  it('finds "val4" at index 1', function () {
    expect(arr.deepIndexOf('val4')).to.equal(1);
  });
  it('finds "val3" at index 3', function () {
    expect(arr.deepIndexOf('val3')).to.equal(2);
  });
  it('finds 3 at index 0', function () {
    expect(arr.deepIndexOf(3)).to.equal(0);
  });

  it('returns -1 for "val5"', function () {
    expect(arr.deepIndexOf('val5')).to.equal(-1);
  });

  it('returns -1 for 4', function () {
    expect(arr.deepIndexOf(4)).to.equal(-1);
  });

  it('returns -1 for "3"', function () {
    expect(arr.deepIndexOf('3')).to.equal(-1);
  });

  it('finds 3 for key c at index 0',function(){
    arr = [{'a':1,'b':{'c':2,'d':4}},{'x':3,'y':2}];
    expect(arr.deepIndexOf(2,'c')).to.equal(0);
  });
});

describe('>1 deepindexOf objects with depth', function () {
  var arr = [{'1':{'a':{'1a':'val1'},'b':3}},
            {'1':{'a':3,'b':'val2'},
            '2':{'a':'val2','b':'val3','c':'val4'}},'val3'];

  it('finds "val1" at index 0', function () {
    expect(arr.deepIndexOf('val1',null,3)).to.equal(0);
  });
  it('finds "val1" at index 0', function () {
    expect(arr.deepIndexOf('val1',null,2)).to.equal(-1);
  });
});

describe('large arrays', function () {
  var arr = [];
  var i;
  var j;

  for(i=0;i<100;i++){
    arr.push([]);
    for(j=0;j<1000;j++){
      arr[i].push(j);
    }
  }

  arr[i-1].push(j);

  it('handles a large array', function () {
    expect(arr.deepIndexOf(50)).to.equal(0);
  });
  it('handles a large array', function () {
    expect(arr.deepIndexOf(j-50)).to.equal(0);
  });
  it('handles a large array', function () {
    expect(arr.deepIndexOf(j)).to.equal(i-1);
  });
});