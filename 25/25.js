var library = [
    {
        title: "Bill Gates",
        author: "The Road Ahead",
        readingStatus: true,
    },
    {
        title: "Steve Jobs",
        author: "Walter Isaacson",
        readingStatus: true,
    },
    {
        title: "Mockingjay: The Final Book of The Hunger Games",
        author: "Suzanne Collins",
        readingStatus: false,
    },
];
for (var _i = 0, library_1 = library; _i < library_1.length; _i++) {
    var book = library_1[_i];
    if (book.readingStatus) {
        console.log("Already read ".concat(book.title, " by ").concat(book.author, ".\n"));
    }
    else {
        console.log("You still need to read ".concat(book.title, " by ").concat(book.author));
    }
}
