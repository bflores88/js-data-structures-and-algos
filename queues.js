/* Queues */

function Queue() {
	collection = [];

	// logs queue array
	this.print = function() {
		console.log(collection);
	};

	// adds to the end of the queue
	this.enqueue = function(element) {
		collection.push(element);
	};

	/* removes item from the zero-th element (beginning) and returns that item
  -- this method mutates the queue by changing the length of the array */
	this.dequeue = function() {
		return collection.shift();
	};

	/* returns the zero-th element (beginning)
  -- it is specifying by index & therefore not mutating the queue */
	this.front = function() {
		return collection[0];
	};

	// returns the size of the queue
	this.size = function() {
		return collection.length;
	};

	// returns a boolean checking whether the queue is empty
	this.isEmpty = function() {
		return collection.length === 0;
	};
}

var q = new Queue();
q.enqueue('a');
q.enqueue('b');
q.enqueue('c');
q.print();
q.dequeue();
console.log(q.front());
q.print();

/* Priority Queue */

/* This implementation of Priority Queues prioritizes using [value, priority],
where priority is an integer */
function PriorityQueue() {
	var collection = [];

	// logs the queue as an array
	this.printCollection = function() {
		console.log(collection);
	};

	// adds to the queue by checking prioirity
	this.enqueue = function(element) {
		if (this.isEmpty()) {
			collection.push(element);
		} else {
			var added = false;
			for (let i = 0; i < collection.length; i++) {
				// checks priorities
				if (element[1] < collection[i][1]) {
					collection.splice(i, 0, element);
					added = true;
					break;
				}
			}

			if (!added) {
				collection.push(element);
			}
		}
	};

	/* removes a value from the front of the queue and returns the value
  -- this mutates the queue */
	this.dequeue = function() {
		var value = collection.shift();
		return value[0];
	};

	// returns the element at index 0 (beginning) without affecting the queue
	this.front = function() {
		return collection[0];
	};

	// returns the size of the queue
	this.size = function() {
		return collection.length;
	};

	// returns a boolean checking whether the queue is empty
	this.isEmpty = function() {
		return collection.length === 0;
	};
}

var pq = new PriorityQueue();
pq.enqueue(['Beau Carnes', 2]);
pq.enqueue(['Quincy Larson', 3]);
pq.enqueue(['Ewa Mitulska-Wójcik', 1]);
pq.enqueue(['Briana Swift', 2]);
pq.printCollection();
pq.dequeue();
console.log(pq.front());
pq.printCollection();
