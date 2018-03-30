const mnist = require('mnist');
const brain = require('brain.js');

const net = new brain.NeuralNetwork();

function random_digit() {
    const value = Math.floor(Math.random()*10);
    const value_str = String(value);

    const output = {};
    output[value_str] = 1;

    return {
        "input": mnist[value].get(),
        "output": output
    };
}

function train_rand(sample_size) {
    const data = [];

    for (let i = 0; i < sample_size; i++) {
        data.push(random_digit());
    }
    net.train(data);
}

function net_result(digit) {
    return brain.likely(digit, net);
}

window.random_digit = random_digit;
window.train_rand = train_rand;
window.net_result = net_result;
