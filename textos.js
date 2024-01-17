const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
if (urlParams.get('t')) {
    fetch('/guigiusti.github.io/textosbase/'+ urlParams.get('t') + '.md')
    .then(r=>r.blob()).then(b=>b.text()).then(m=>{document.getElementById("txt").innerHTML=marked.parse(m)});
}
function dev_index () {
    if (urlParams.get('d')) {
        window.location.pathname = '/dev/jogos/'+ urlParams.get('d') + '/index.html'
    }
    if (!urlParams.get('d')) {
        window.location.pathname = '/dev'
}}
if (urlParams.get('d')) {dev_index()
}
function textos_index (m) {
    window.location.pathname = '/'
}


const queryString2 = window.location.search;
const urlParams2 = new URLSearchParams(queryString2); 
if (!urlParams2.get('d')) {if (!urlParams.get('t')) {fetch('/guigiusti.github.io/textosbase/textos-index.html')
    .then(r=>r.blob()).then(b=>b.text()).then(m=>{document.getElementById("txt").innerHTML=marked.parse(m)});}}
const urlContainParams = window.location.search.length === 0;
if (urlContainParams) {fetch('/guigiusti.github.io/textosbase/textos-index.html')
    .then(r=>r.blob()).then(b=>b.text()).then(m=>{document.getElementById("txt").innerHTML=marked.parse(m)});};