const xhttp = new XMLHttpRequest();

xhttp.onload = function () {
    const Fh = JSON.parse(this.responseText);
    document.getElementById("yy").innerHTML = Fh.content + Fh.author;
}

xhttp.setRequestHeader("dataSource", "LOCAL_DAILY_WORD");
xhttp.setRequestHeader("dataSource", "LOCAL_PERPETUAL_CALENDAR");
xhttp.open("GET", "https://api.songzixian.com/api/daily-word ", true);
xhttp.send();