var size = 0;
var placement = 'point';

var style_ParcNaturelRgionalPNR_4 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    size = 0;
    var labelFont = "7.8px \'Arial\', sans-serif";
    var labelFill = "rgba(197, 151, 136, 1)";
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("nom_site") !== null) {
        labelText = String(feature.get("nom_site"));
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(192,96,0,0.5)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 5}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];

    return style;
};
