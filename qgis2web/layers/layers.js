var wms_layers = [];
var format_KAB_JATENG_0 = new ol.format.GeoJSON();
var features_KAB_JATENG_0 = format_KAB_JATENG_0.readFeatures(json_KAB_JATENG_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KAB_JATENG_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_KAB_JATENG_0.addFeatures(features_KAB_JATENG_0);var lyr_KAB_JATENG_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KAB_JATENG_0, 
                style: style_KAB_JATENG_0,
    title: 'KAB_JATENG<br />\
    <img src="styles/legend/KAB_JATENG_0_0.png" />  0 - 15 <br />\
    <img src="styles/legend/KAB_JATENG_0_1.png" />  15 - 30 <br />\
    <img src="styles/legend/KAB_JATENG_0_2.png" />  30 - 50 <br />\
    <img src="styles/legend/KAB_JATENG_0_3.png" />  50 - 150 <br />\
    <img src="styles/legend/KAB_JATENG_0_4.png" />  150 - 300 <br />'
        });

lyr_KAB_JATENG_0.setVisible(true);
var layersList = [lyr_KAB_JATENG_0];
lyr_KAB_JATENG_0.set('fieldAliases', {'ID': 'ID', 'Kabupaten_': 'Kabupaten_', 'Ibukota': 'Ibukota', 'Hotel': 'Hotel', 'Kamar': 'Kamar', });
lyr_KAB_JATENG_0.set('fieldImages', {'ID': 'TextEdit', 'Kabupaten_': 'TextEdit', 'Ibukota': 'TextEdit', 'Hotel': 'TextEdit', 'Kamar': 'TextEdit', });
lyr_KAB_JATENG_0.set('fieldLabels', {'ID': 'inline label', 'Kabupaten_': 'inline label', 'Ibukota': 'inline label', 'Hotel': 'inline label', 'Kamar': 'no label', });
lyr_KAB_JATENG_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});