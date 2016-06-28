ymaps.ready(init);

function init() {
    var obj = json;  
    
    var myMap = new ymaps.Map('map', {
        center: [55.733835, 37.588227],
        zoom: 5,
        controls: [],
    });

    ymaps.modules.require(['Heatmap'], function (Heatmap) {
        var data = [];
        console.log(data);
        for (var i = 0; i < obj.length; i ++) {
            data.push([obj[i].Cells.geoData.coordinates[1], obj[i].Cells.geoData.coordinates[0]])
        }
        console.log(data);
        var heatmap = new Heatmap(data, {
            radius: 20,
        });
        heatmap.setMap(myMap);
    });

    
}