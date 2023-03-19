let puzzles = [];

// board setup with just 1 black king and 1 white bishop
puzzles.push([
    "", "", "", "", "", "", "", "k",
    "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "B",
    "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", ""
]);

puzzles.push([
    "", "", "", "", "", "", "", "k",
    "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "B",
    "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", "",
    "", "", "", "", "", "n", "", "",
    "", "", "", "", "", "", "", "",
    "", "", "", "", "", "", "", ""
]);

puzzles.push([
    "", "", "", "", "", "", "", "k",
    "", "", "", "", "", "", "", "",
    "", "", "", "", "", "p", "", "B",
    "", "", "", "", "", "", "", "",
    "", "", "r", "", "", "", "", "",
    "", "", "", "", "", "", "", "",
    "", "", "", "", "", "r", "", "",
    "", "", "", "", "", "", "", "",
]);

// Bishop maze 1
puzzles.push([
    "","","b","","","","","",
    "","","","","","","","",
    "","n","","","","","","n",
    "","","","","","","","",
    "","","k","","","r","","",
    "","","","","","","","",
    "","","","","","","","",
    "","","","","","","","B"
]);

// Bishop maze 2
puzzles.push([
    "","","","","","","","",
    "","","","","","","","",
    "","","","","","n","","",
    "","k","","","","","","",
    "","","","","","","","",
    "","","","","r","","","",
    "","","","","","","","",
    "","B","","","","","",""
]);

// Bishop maze 3
puzzles.push([
    "","","B","","","","","",
    "","","","","","","","",
    "","","p","n","","","","",
    "","","","","","","","",
    "","","","","","n","","",
    "","","","","","","","",
    "","","","","","","","",
    "","k","","","","","",""
]);

export default puzzles;