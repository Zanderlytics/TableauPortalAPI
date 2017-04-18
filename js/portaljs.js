
var viz;

function createViz(vizAddress) {
    var vizDiv = document.getElementById("vizContainer"),
		vizURL = vizAddress
        options = {
            hideTabs: true
        };

    if (viz) { // If a viz object exists, delete it.
        viz.dispose();
        }

	viz = new tableau.Viz(vizDiv, vizURL, options); 
}