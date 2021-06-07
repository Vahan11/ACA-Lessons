function oddOrNot(num) {
  if (!num) {
    console.log(true);
    return;
  }

  if (num.slice(0, 1) % 2 === 0) {
    console.log(false);
    return;
  }

  oddOrNot(num.slice(1));
}

oddOrNot("7598"); // false
