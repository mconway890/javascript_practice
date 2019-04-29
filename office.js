var officeData = [{
    "employeeName": "Michael Scott",
    "position": "Regional Manager",
    "AKA": "Michael Scarn",
  },
  {
    "employeeName": "Jim Halpert",
    "position": "Sales Rep",
    "AKA": "Big Tuna",
  },
  {
    "employeeName": "Dwight Schrute",
    "position": "Head Salesman",
    "AKA": "D-Money",
  },
  {
    "employeeName": "Pam Halpert",
    "position": "Office Administrator",
    "AKA": "Beesly",
  }
];

var searchText = "Manager";
var dataFilter = item => // creating a function and passing each element in array
  item.position.toLowerCase()
  // looking in the position element of each of the array items to see if it matches the search text
  // converting each element toLowerCase() so I can find the instance where the T is capitalized
  // or where the T is lowercase
  .match(searchText.toLowerCase());
  // match method looks for some text and compares it to some other text
  // this will return true if the element we're testing for matches our test
  // OR it will exclude the element if it doesn't match
var displayData = officeData.filter(dataFilter);

console.log(displayData);
