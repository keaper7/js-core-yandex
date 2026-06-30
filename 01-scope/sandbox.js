function createCounters() {
    var counters = [];

    for (let i = 0; i < 3; i++) {
        counters.push(function() {
            console.log(i);
        });
    }

    return counters;
}

const myCounters = createCounters();

myCounters[0](); // Что выведет?
myCounters[1](); // Что выведет?
myCounters[2](); // Что выведет?