var size = 0;
var placement = 'point';

var style_ReserveNaturelleRegionaleRNRLR_10 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    size = 0;
    var labelFont = "7.8px \'Arial\', sans-serif";
    var labelFill = "rgba(192, 96, 0, 1)";
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (label_ReserveNaturelleRegionaleRNRLR_10_eval_expression(context) !== null) {
        labelText = String(label_ReserveNaturelleRegionaleRNRLR_10_eval_expression(context));
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(192,96,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1}), fill: new ol.style.Fill({color: 'rgba(192,96,0,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];

    return style;
};
