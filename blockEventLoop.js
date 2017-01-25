function repeat(operation, num) {
  if (num <= 0) return;

  operation();

  if (num % 10 === 0) {

    repeat(operation, --num);

  } else {
    repeat(operation, --num);
  }
}

module.exports = repeat