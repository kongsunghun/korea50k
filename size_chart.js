function size() {
    document.getElementById("dropdown").classList.toggle("chart_show");
}

window.onclick = function (event) {
    if (!event.target.matches('.size_chartbtn')) {

        var dropdowns = document.getElementsByClassName("size_chart");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('chart_show')) {
                openDropdown.classList.remove('chart_show');
            }
        }
    }
}