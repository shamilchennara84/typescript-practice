"use strict";
const library = [
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
for (const book of library) {
    if (book.readingStatus) {
        console.log(`Already read ${book.title} by ${book.author}.
`);
    }
    else {
        console.log(`You still need to read ${book.title} by ${book.author}`);
    }
}
