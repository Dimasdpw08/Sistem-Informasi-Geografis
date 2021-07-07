var wms_layers = [];
var format_INDONESIA_KABcopy_0 = new ol.format.GeoJSON();
var features_INDONESIA_KABcopy_0 = format_INDONESIA_KABcopy_0.readFeatures(json_INDONESIA_KABcopy_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_INDONESIA_KABcopy_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_INDONESIA_KABcopy_0.addFeatures(features_INDONESIA_KABcopy_0);var lyr_INDONESIA_KABcopy_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_INDONESIA_KABcopy_0, 
                style: style_INDONESIA_KABcopy_0,
    title: 'INDONESIA_KAB copy<br />\
    <img src="styles/legend/INDONESIA_KABcopy_0_0.png" /> 0.00 - 35.00<br />\
    <img src="styles/legend/INDONESIA_KABcopy_0_1.png" /> 35.00 - 50.00<br />\
    <img src="styles/legend/INDONESIA_KABcopy_0_2.png" /> 50.00 - 75.00<br />\
    <img src="styles/legend/INDONESIA_KABcopy_0_3.png" /> 75.00 - 130.00<br />\
    <img src="styles/legend/INDONESIA_KABcopy_0_4.png" /> 130.00 - 300.00<br />'
        });

lyr_INDONESIA_KABcopy_0.setVisible(true);
var layersList = [lyr_INDONESIA_KABcopy_0];
lyr_INDONESIA_KABcopy_0.set('fieldAliases', {'ID': 'ID', 'Kabupaten_': 'Kabupaten_', 'Ibukota': 'Ibukota', 'Tm_Tidur': 'Tm_Tidur', 'Jml_Kamar': 'Jml_Kamar', 'H_Non_Btg': 'H_Non_Btg', });
lyr_INDONESIA_KABcopy_0.set('fieldImages', {'ID': 'TextEdit', 'Kabupaten_': 'TextEdit', 'Ibukota': 'TextEdit', 'Tm_Tidur': 'TextEdit', 'Jml_Kamar': 'TextEdit', 'H_Non_Btg': 'TextEdit', });
lyr_INDONESIA_KABcopy_0.set('fieldLabels', {'ID': 'inline label', 'Kabupaten_': 'inline label', 'Ibukota': 'inline label', 'Tm_Tidur': 'inline label', 'Jml_Kamar': 'inline label', 'H_Non_Btg': 'inline label', });
lyr_INDONESIA_KABcopy_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});