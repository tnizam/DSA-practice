//Min Max Stack Construction

class MinMaxStack {
	constructor() {
    this.MinMaxStack = [] // will hold the minimum and max at any given moment
		this.stack = [];
		
	}

    // this is the top of the stack
    // meaning the last one in on the stack since the bottom most the 0 as index
  peek() {
      return this.stack[this.stack.length - 1];
  }

  // pop from the top of the stack
  pop() {
    this.MinMaxStack.pop(); // must be sync with the stack
    return this.stack.pop();
  }

  push(number) {
    
  }

  getMin() {
    // Write your code here.
  }

  getMax() {
    // Write your code here.
  }
}

