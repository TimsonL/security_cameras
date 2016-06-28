ymaps.ready(init);

function init() {
    var obj = json;  
    
    var myMap = new ymaps.Map('map', {
        center: [55.733835, 37.588227],
        zoom: 11,
        controls: []
    });

    ymaps.modules.require(['Heatmap'], function (Heatmap) {
        var data = [];
        for (var i = 0; i < obj.length; i ++) {
            data.push([obj[i].Cells.geoData.coordinates[1], obj[i].Cells.geoData.coordinates[0]])
        }
        var heatmap = new Heatmap(data, {
            radius: 20,
        });
        heatmap.setMap(myMap);
    });

    
}