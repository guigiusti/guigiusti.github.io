const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
if (urlParams.get('t')) {
    fetch('/guigiusti.github.io/textosbase/'+ urlParams.get('t') + '.md')
    .then(r=>r.blob()).then(b=>b.text()).then(m=>{document.getElementById("txt").innerHTML=marked.parse(m)});
}
function dev_index () {
    if (urlParams.get('dev')) {
        fetch('/guigiusti.github.io/dev/jogos/'+ urlParams.get('dev') + '/.html')
        .then(r=>r.blob()).then(b=>b.text()).then(m=>{document.getElementById("txt").innerHTML=marked.parse(m)});
        if (urlParams.get('dev') == 'index') {
            if (window.location.pathname != "/") {
                window.location.pathname = '/'
            }
        }
    }
    if (!urlParams.get('dev')) {
        window.location.search = "?dev=index"
}}
if (urlParams.get('dev')) {dev_index()
}
function textos_index (m) {
    window.location.href ="index.html"
}


const queryString2 = window.location.search;
const urlParams2 = new URLSearchParams(queryString2); 
if (!urlParams2.get('dev')) {if (!urlParams.get('t')) {fetch('/guigiusti.github.io/textosbase/textos-index.html')
    .then(r=>r.blob()).then(b=>b.text()).then(m=>{document.getElementById("txt").innerHTML=marked.parse(m)});}}
const urlContainParams = window.location.search.length === 0;
if (urlContainParams) {fetch('/guigiusti.github.io/textosbase/textos-index.html')
    .then(r=>r.blob()).then(b=>b.text()).then(m=>{document.getElementById("txt").innerHTML=marked.parse(m)});};