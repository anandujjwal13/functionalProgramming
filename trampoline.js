function repeat(operation, num) {

    if (num <= 0) return
    setTimeout(operation, 50);
    return repeat(operation, --num);
}

function trampoline(fn) {
    fn();
}

module.exports = function (operation, num) {
    trampoline(operation);
    return repeat(operation, num)
}