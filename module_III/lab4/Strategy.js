class Context {
    constructor(strategy) {
      this.strategy = strategy;
    }
    
    executeStrategy(value ) {
      return this.strategy.execute(value);
    }
  }
  
  class AddStrategy {
    execute(value) {
      const discount = value * 0.10;
      return value - discount
    }
  }

  class SubtractStrategy{
    execute(value){
        const discount = value * 0.20;
        return value -discount
    }
  }

  module.exports = {
    Context,
    AddStrategy,
    SubtractStrategy
  }