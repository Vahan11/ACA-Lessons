let bookList = [
  { bookName: "Catcher in the Rye", readStatus: true, percent: 40 },
  { bookName: "Animal Farm", readStatus: true, percent: 20 },
  { bookName: "Solaris", readStatus: false, percent: 90 },
  { bookName: "The Fall", readStatus: true, percent: 50 },
  { bookName: "White Nights", readStatus: false, percent: 60 },
  { bookName: "After Dark", readStatus: true, percent: 70 },
];

function sortBooks(bookList) {
  bookList.sort((a, b) => b.percent - a.percent);

  let bookNames = [];

  for (let book of bookList) {
    if (book.readStatus) {
      bookNames.push(book.bookName);
    }
  }

  return bookNames;
}

console.log(sortBooks(bookList));
