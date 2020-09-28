const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

const title = "";
const DATE = "";
const date = "";
const pub = "";
const url = window.location.href;
const author = "";

const lookupTable = {
  "www.bbc.com":
    'title = document.getElementById("main-heading").innerText; pub = "BBC News Online"; DATE = new Date(document.getElementsByTagName("time")[0].dateTime);',
  "www.theguardian.com":
    'title = document.getElementsByTagName("h1")[0].innerText; pub = "The Guardian"; author = [...document.getElementsByTagName("a")].filter(el => el.rel == "author")[0].innerText; const [z, d, m, y] = [...document.getElementsByTagName("label")].filter(el => el.htmlFor == "dateToggle")[0].innerText.split(" "); DATE = new Date(`${d} ${months.filter(el => el.toLowerCase().startsWith(m.toLowerCase()))[0]} ${y}`);'
};

function main() {
  // Step 1:  Get host name.
  var hostname = window.location.hostname;

  // Step 2:  If host name could not be found.
  if (!hostname) {
    // alert("Could not get hostname.");
    return;
  }

  // Step 3:  If host name is not in the database.
  if (!lookupTable[hostname]) {
    // confirm(
    // hostname +
    // " is not in the database currently.  Do you want extension developers to add this domain?"
    // );
    return;
  }

  // Step 4:  If lookupTable has the data.
  // alert(hostname);
  eval(lookupTable[hostname]);
  date =
    months[DATE.getUTCMonth()] +
    " " +
    DATE.getUTCDate() +
    ", " +
    DATE.getUTCFullYear();
  var result =
    "{{source\n|pub    = " +
    pub +
    "\n|url    = " +
    url +
    "\n|date   = " +
    date +
    "\n|title  = " +
    title +
    "\n|author = " +
    author +
    "\n}}";
  prompt("", result);
}

main();