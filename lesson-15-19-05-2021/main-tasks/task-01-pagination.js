const Pagination = {
  _range: 0,
  _page: 1,
  _alphabetArray: "abcdefghijklmnopqrstuvwxyz".split(""),
  init: function (itemsCount = 4) {
    this._itemsCount = itemsCount;

    this._pageItems = this._alphabetArray.slice(
      this._range * this._itemsCount,
      this._page * this._itemsCount
    );
    console.log(this.pageItems);
  },
  nextPage: function () {
    this._range++;
    this._page++;
    this.init();
    return this;
  },
  prevPage: function () {
    if (this._page > 1) {
      this._range--;
      this._page--;
      this.init();
    }
    return this;
  },
  firstPage() {
    this._range = 0;
    this._page = 1;
    this.init();
  },
  lastPage() {
    this._range = Math.round(this._alphabetArray.length / this._itemsCount) - 1;
    this._page = Math.round(this._alphabetArray.length / this._itemsCount);
    this.init();
  },
  goToPage: function (pageNum) {
    this._page = pageNum;
    this._range = pageNum - 1;
    this.init();
  },
  get pageItems() {
    return this._pageItems;
  },
};

Pagination.init(); // ["a", "b", "c", "d"]
Pagination.goToPage(3); // ["i", "j", "k", "l"]
Pagination.prevPage(); // ["e", "f", "g", "h"]
Pagination.nextPage().nextPage(); // ["m", "n", "o", "p"]
Pagination.firstPage(); // ["a", "b", "c", "d"]
Pagination.lastPage(); // ["y", "z"]
