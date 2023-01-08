// # Sets

//Like an array, but there are no duplicate items and there is no particular order for values

// Typically used to identify the existence/presence of an item

// Built in set object isn't comprehensive and may need your own implementation'

function mySet() {
  var collection = [];

  //returns whether the value/element exists in the array
  this.has = function (element) {
    return collection.indexOf(element) !== -1;
  };

  // returns all the values in the set
  this.values = function () {
    return collection;
  };

  //adds an element to the set
  this.add = function (element) {
    if (!this.has(element)) {
      collection.push(element);
      return true;
    }
    return false;
  };

  //removing an element
  this.remove = function (element) {
    if (this.has(element)) {
      var index = collection.indexOf(element);
      collection.splice(index, 1);
      return true;
    }
    return false;
  };

  this.size = function () {
    return collection.length;
  };

  //will return the union of two sets

  this.union = function (otherSet) {
    var unionSet = new mySet();
    var firstSet = this.values();
    var secondSet = otherSet.values();

    firstSet.forEach(function (e) {
      unionSet.add(e);
    });

    secondSet.forEach(function (e) {
      unionSet.add(e);
    });
    return unionSet;
  };

  // returns intersection of two sets

  this.intersection = function (otherSet) {
    var intersectionSet = new mySet();
    var firstSet = this.values();
    first.forEach(function (e) {
      if (otherSet.has(e)) {
        intersectionSet.add(e);
      }
    });
    return intersectionSet;
  };

  this.difference = function (otherSet) {
    var differentSet = new mySet();
    var firstSet = this.values();

    firstSet.forEach(function (e) {
      if (!otherSet.has(e)) {
        differentSet.add(e);
      }
    });
    return differentSet;
  };

  //checks if set is a subset of the set passed in

  this.subset = function (otherSet) {
    var firstSet = this.values();

    return firstSet.every(function (value) {
      return otherSet.has(value);
    });
  };
}

var SetA = new mySet();
var SetB = new mySet();

SetA.add("a");
SetB.add("b");
SetB.add("c");
SetB.add("a");
SetB.add("d");

console.log(SetA.subset(SetB));
