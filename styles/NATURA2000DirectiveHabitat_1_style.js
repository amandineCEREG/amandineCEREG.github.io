var size = 0;
var placement = 'point';

var style_NATURA2000DirectiveHabitat_1 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    size = 0;
    var labelFont = "7.8px \'Arial\', sans-serif";
    var labelFill = "rgba(255, 0, 255, 1)";
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (label_NATURA2000DirectiveHabitat_1_eval_expression(context) !== null) {
        labelText = String(label_NATURA2000DirectiveHabitat_1_eval_expression(context));
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,0,255,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(255,0,255,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];

    return style;
};
