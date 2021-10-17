// thispage
const docs = "index.md"

// nav click 
async function run(here) {
  let file = await fetch(here)
  let text = await file.text()
  document.getElementById('content').innerHTML =
    marked(text);
}

// click event for nav
document.getElementById("navigation").addEventListener("click",function(e) { 
    if(e.target && e.target.nodeName == "A") {
        const docs = e.target.id+".md"
        thispage = docs;
        run(docs)
		document.body.className = e.target.id;
		// e.preventDefault();
		// return false;
    }
});

// start <<<<<<<<<<<
run('index.md');