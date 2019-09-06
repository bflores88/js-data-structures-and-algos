/* Sets */

function mySet() {
	// the var colleciton will hold the set
	var collection = [];

	// method checks for the presence of an element and returns true or false
	this.has = function(element) {
		return collection.indexOf(element) !== -1;
	};

	// method returns all the values in the set
	this.values = function() {
		return collection;
	};

	// method adds elements to the set
	this.add = function(element) {
		if (!this.has(element)) {
			collection.push(element);
			return true;
		}

		return false;
	};

	// method removes an element from a set
	this.delete = function(element) {
		if (this.has(element)) {
			index = collection.indexOf(element);
			collection.splice(index, 1);
			return true;
		}

		return false;
	};

	// method returns the size of the collection
	this.size = function() {
		return collection.length;
	};

	// method returns the union of two sets -- items in both sets
	this.union = function(otherSet) {
		var unionSet = new mySet();
		var firstSet = this.values();
		var secondSet = otherSet.values();
		firstSet.forEach(function(e) {
			unionSet.add(e);
		});
		secondSet.forEach(function(e) {
			unionSet.add(e);
		});

		return unionSet;
	};

	/* method returns the intersection of two sets as a new set 
  --items only in both sets */
	this.intersection = function(otherSet) {
		var intersectionSet = new mySet();
		var firstSet = this.values();
		firstSet.forEach(function(e) {
			if (otherSet.has(e)) {
				intersectionSet.add(e);
			}
		});

		return intersectionSet;
	};

	/* method returns the difference of two sets as a new set 
  --items in one set but not the other set */
	this.difference = function(otherSet) {
		var differenceSet = new mySet();
		var firstSet = this.values();
		firstSet.forEach(function(e) {
			if (!otherSet.has(e)) {
				differenceSet.add(e);
			}
		});

		return differenceSet;
	};

	/* method tests if the set is a subset of a different set 
  -- if the first set is completely contained in the second set */
	this.subset = function(otherSet) {
		var firstSet = this.values();
		return firstSet.every(function(value) {
			return otherSet.has(value);
		});
	};
}

var setA = new mySet();
var setB = new mySet();
setA.add('a');
setB.add('b');
setB.add('c');
setB.add('a');
setB.add('d');
console.log(setA.values());
console.log(setB.values());
console.log(setA.subset(setB));
console.log(setA.intersection(setB).values());
console.log(setB.difference(setA).values());

var setC = new Set();
var setD = new Set();
setC.add('a');
setD.add('b');
setD.add('c');
setD.add('a');
setD.add('d');
console.log(setD.values());
setD.delete('a');
console.log(setD.has('a'));
console.log(setD.add('d'));
