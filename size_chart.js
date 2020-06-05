function size() {
    document.getElementById("dropdown").classList.toggle("chart_show");
}

window.onclick = function (event) {
    if (!event.target.matches('.size_chartbtn')) {

        var chart = document.getElementsByClassName("size_chart");
        var c;
        for (c = 0; c < chart.length; c++) {
            var openchart = chart[c];
            if (openchart.classList.contains('chart_show')) {
                openchart.classList.remove('chart_show');
            }
        }
    }
}