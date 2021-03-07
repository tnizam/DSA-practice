//Min Max Stack Construction

class MinMaxStack {
	constructor() {
    this.minMaxStack = [] // will hold the minimum and max at any given moment
		this.stack = [];
		
	}

    // this is the top of the stack
    // meaning the last one in on the stack since the bottom most the 0 as index
  peek() {
      return this.stack[this.stack.length - 1];
  }

  // pop from the top of the stack
  pop() {
    this.minMaxStack.pop(); // must be sync with the stack
    return this.stack.pop();
  }

  push(number) {
    let newMinMax = {min: number, max: number};
    if(this.minMaxStack.length) {
      // this is the min max stack not that regular stack! 
      // last object in the min max stack is the one closest to stack itself
      let lastMinMax = this.minMaxStack[this.minMaxStack.length - 1];
       // seeing which of the two num is min or max and assigning it to the new min max
      newMinMax.min = Math.min(lastMinMax.min, number);
      newMinMax.max = Math.max(lastMinMax.max, number);
    }

    // we are adding the new min max stack that correlates with the stack that is being changed because we are adding the new number in. that is why we were comparing the number to the min max
    this.minMaxStack.push(newMinMax);
    this.stack.push(number);
  }

  getMin() {
    // get the min max of in the minMaxStack of a stack that is recording on minmax
    return this.minMaxStack[this.minMaxStack.length - 1].min;
  }

  getMax() {
    // Write your code here.
    return this.minMaxStack[this.minMaxStack.length - 1].max;
  }
}

// Balanced Brackets

function balancedBrackets(string) {
  // Write your code here.
}