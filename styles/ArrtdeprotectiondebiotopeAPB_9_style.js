var size = 0;
var placement = 'point';

var style_ArrtdeprotectiondebiotopeAPB_9 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    size = 0;
    var labelFont = "7.8px \'Arial\', sans-serif";
    var labelFill = "rgba(227, 26, 28, 1)";
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (label_ArrtdeprotectiondebiotopeAPB_9_eval_expression(context) !== null) {
        labelText = String(label_ArrtdeprotectiondebiotopeAPB_9_eval_expression(context));
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(227,26,28,1.0)', lineDash: [10,5], lineCap: 'butt', lineJoin: 'miter', width: 1}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];

    return style;
};
