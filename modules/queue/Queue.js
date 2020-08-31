class _Node {
	constructor(data, next, prev) {
		this.data = data;
		this.next = next;
		this.prev = prev;
	}
}

class Queue {
	constructor() {
		// Set initial data.
		this.first=null;
		this.last=null;
	}

	enqueue(data) {
		// Add some data to the queue.

		/* If the queue is empty, then the node will be the top of the stack */
			if(this.last===null){
				this.last=new _Node(data,null,null);
				this.first=this.last;
				return this.last;
			}

			/* If the queue already has something, then create a new node,
			add data to the new node, and change the pointers */
			const node=new _Node(data,null,this.last);
			this.last.next=node;
			this.last=node;
			return this.last;
	}

	dequeue() {
		// Remove some data from the queue.

		/* Remove from the bottom of the queue and then update the pointers */
			const node = this.first;
			this.first = node.next;
			return node.data;
	}

	show() {
		// Return the next item in the queue.
		return this.first;
	}

	all() {
		// Return all items in the queue.
		if(this.last===null){throw new Error('Empty Queue');}
		let node=this.first;
		let list=[];
		while(node!==null){
			list.push(node.data);
			node=node.next;
		}
		return list;
	}
}

module.exports = Queue
