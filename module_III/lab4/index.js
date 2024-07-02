const {AddStrategy, SubtractStrategy, Context} = require("./Strategy");

const addStrategy = new AddStrategy();
const subtractStrategy = new SubtractStrategy();

const context = new Context(addStrategy);

const getDiscountByDay = (day, value) => {
    if(['Monday', 'Wednesday', 'Friday'].includes(day)){
        context.strategy = addStrategy;
    }else if(['Tuesday', 'Thursday'].includes(day)){
        context.strategy = subtractStrategy
    }

    return context.executeStrategy(value);
} 

const value = 2500000;

console.log(`10% discount Monday: ${getDiscountByDay("Monday", value)}`);
console.log(`20% discount Tuesday: ${getDiscountByDay("Tuesday", value)}`);
console.log(`10% discount Wednesday: ${getDiscountByDay("Wednesday", value)}`);
console.log(`20% discount Thursday ${getDiscountByDay("Thursday", value)}`);
console.log(`10% discount Friday ${getDiscountByDay("Friday", value)}`);

