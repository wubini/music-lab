# deepIndexOf
The deepIndexOf package adds a deepIndexOf method to the JavaScript Array prototype.  The method acts similar to the standard indexOf, but will do a breadth first search through all array entries and object properties for the value given, returning the index of the element in the original array that contains the value.  The method can also search by key/value pair, and can restrict how many level deeps it will search.

<b>`arr.deepIndexOf(value,[key],[depth])`</b>

<h2>Parameters</h2>

- value: The value that is searched for.
- key (Optional): Limits search to values of object properties at key.  Searches all values if key is null or undefined.
- depth (Optional): How deep to search.  No limit if depth is null or undefined.

<h2>Examples</h2>

```js
require('deepindexof');

['a','b','c'].deepIndexOf('b') === 1;

[10,11,12].deepIndexOf(12) === 2;

[10,11,12].deepIndexOf(25) === -1;
```
```js
require('deepindexof');

var arr = [{'a':1,'b':2},{'x':3,'y':2}];

arr.deepIndexOf(1) === 0;

arr.deepIndexOf(2) === 0;

arr.deepIndexOf(3) === 1;

arr.deepIndexOf(4) === -1;

arr.deepIndexOf(2,'y') === 1;
```
```js
require('deepindexof');

var arr = [[1, 2],[3, 2]];

arr.deepIndexOf(1) === 0;

arr.deepIndexOf(2) === 0;

arr.deepIndexOf(3) === 1;

arr.deepIndexOf(4) === -1;
```
```js
require('deepindexof');

var arr = [{'a':1,'b':{'c':2,'d':4}},{'x':3,'y':2}];

arr.deepIndexOf(4) === 0;

arr.deepIndexOf(2) === 1;

arr.deepIndexOf(2,'c') === 0;

arr.deepIndexOf(4,null,2) === 0;

arr.deepIndexOf(4,null,1) === -1;
```