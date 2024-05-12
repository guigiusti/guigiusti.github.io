const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const host = "https://" + window.location.hostname;
if (urlParams.get('t')) {
    if (urlParams.get('t') == 'portfolio') {
        fetch(host+'/textosbase/portfolio.html')
    .then(r=>r.blob()).then(b=>b.text()).then(m=>{document.getElementById("txt").innerHTML=marked.parse(m)})
    }
    fetch(host+'/textosbase/'+ urlParams.get('t') + '.md')
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
const queryString2 = window.location.search;
const urlParams2 = new URLSearchParams(queryString2); 
if (!urlParams2.get('d')) {if (!urlParams.get('t')) {fetch(host+'/textosbase/textos-index.html')
    .then(r=>r.blob()).then(b=>b.text()).then(m=>{document.getElementById("txt").innerHTML=marked.parse(m)});}}
const urlContainParams = window.location.search.length === 0;
if (urlContainParams) {fetch(host+'/textosbase/textos-index.html')
    .then(r=>r.blob()).then(b=>b.text()).then(m=>{document.getElementById("txt").innerHTML=marked.parse(m)});};