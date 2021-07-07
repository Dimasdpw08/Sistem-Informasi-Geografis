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
    <img src="styles/legend/INDONESIA_KABcopy_0_0.png" />  3.0000 - 13.0000 <br />\
    <img src="styles/legend/INDONESIA_KABcopy_0_1.png" /> 12.00 - 17.00<br />\
    <img src="styles/legend/INDONESIA_KABcopy_0_2.png" /> 17.00 - 29.00<br />\
    <img src="styles/legend/INDONESIA_KABcopy_0_3.png" /> 29.00 - 49.00<br />\
    <img src="styles/legend/INDONESIA_KABcopy_0_4.png" /> 49.00 - 60.00<br />'
        });

lyr_INDONESIA_KABcopy_0.setVisible(true);
var layersList = [lyr_INDONESIA_KABcopy_0];
lyr_INDONESIA_KABcopy_0.set('fieldAliases', {'ID': 'ID', 'Kabupaten_': 'Kabupaten_', 'Ibukota': 'Ibukota', 'Daya Tarik': 'Daya Tarik', });
lyr_INDONESIA_KABcopy_0.set('fieldImages', {'ID': 'TextEdit', 'Kabupaten_': 'TextEdit', 'Ibukota': 'TextEdit', 'Daya Tarik': 'TextEdit', });
lyr_INDONESIA_KABcopy_0.set('fieldLabels', {'ID': 'inline label', 'Kabupaten_': 'inline label', 'Ibukota': 'inline label', 'Daya Tarik': 'inline label', });
lyr_INDONESIA_KABcopy_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});