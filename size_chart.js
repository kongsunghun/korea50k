function size() {
    document.getElementById("dropdown").classList.toggle("chart_show");
}

window.onclick = function (event) {
    if (!event.target.matches('.size_chartbtn')) {

        var charts = document.getElementsByClassName("size_chart");
        var c;
        for (c = 0; c < charts.length; c++) {
            var openchart = charts[c];
            if (openchart.classList.contains('chart_show')) {
                openchart.classList.remove('chart_show');
            }
        }
    }
}