

function save(This) {
    let state = $(This).is(":checked");
    localStorage.setItem('checkbox-' + $(This).val(), state);
}

$(function(){ 
    let num = document.getElementsByTagName("details").length
    document.getElementById("num").innerHTML = num;
    let summary = document.getElementsByTagName("summary")
    for (let i = 0; i < summary.length; i++) {
        let t = 'checkbox-' + $(summary[i]).html()
        if (localStorage.getItem(t)) {
            summary[i].innerHTML = '<input type="checkbox" checked onclick="save(this)" value="' + summary[i].innerText + '">' + summary[i].innerHTML
        } else {
            summary[i].innerHTML = '<input type="checkbox" onclick="save(this)" value="' + summary[i].innerText + '">' + summary[i].innerHTML
        }
    }
}); 