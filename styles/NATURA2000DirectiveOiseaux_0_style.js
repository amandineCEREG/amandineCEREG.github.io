var size = 0;
var placement = 'point';

    var fill_NATURA2000DirectiveOiseaux_0 = new ol.style.Fill();
var style_NATURA2000DirectiveOiseaux_0 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = ""
    var labelText = "";
    size = 0;
    var labelFont = "7.8px \'Arial\', sans-serif";
    var labelFill = "rgba(0, 0, 0, 1)";
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (label_NATURA2000DirectiveOiseaux_0_eval_expression(context) !== null) {
        labelText = String(label_NATURA2000DirectiveOiseaux_0_eval_expression(context));
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(114,133,132,0.65)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(255,176,94,0.65)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    }),new ol.style.Style({
        
        fill: fill_NATURA2000DirectiveOiseaux_0,
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement)
    })];

    return style;
};

    fill_NATURA2000DirectiveOiseaux_0.setColor(stripe(0.26, 2.0, 315.0, '#000000'));