var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_NATURA2000DirectiveOiseaux_0 = new ol.format.GeoJSON();
var features_NATURA2000DirectiveOiseaux_0 = format_NATURA2000DirectiveOiseaux_0.readFeatures(json_NATURA2000DirectiveOiseaux_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NATURA2000DirectiveOiseaux_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_NATURA2000DirectiveOiseaux_0.addFeatures(features_NATURA2000DirectiveOiseaux_0);var lyr_NATURA2000DirectiveOiseaux_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NATURA2000DirectiveOiseaux_0, 
                style: style_NATURA2000DirectiveOiseaux_0,
                title: '<img src="styles/legend/NATURA2000DirectiveOiseaux_0.png" /> NATURA 2000 - Directive Oiseaux'
            });var format_NATURA2000DirectiveHabitat_1 = new ol.format.GeoJSON();
var features_NATURA2000DirectiveHabitat_1 = format_NATURA2000DirectiveHabitat_1.readFeatures(json_NATURA2000DirectiveHabitat_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NATURA2000DirectiveHabitat_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_NATURA2000DirectiveHabitat_1.addFeatures(features_NATURA2000DirectiveHabitat_1);var lyr_NATURA2000DirectiveHabitat_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NATURA2000DirectiveHabitat_1, 
                style: style_NATURA2000DirectiveHabitat_1,
                title: '<img src="styles/legend/NATURA2000DirectiveHabitat_1.png" /> NATURA 2000 - Directive Habitat'
            });var format_ParcNaturelNationalPNNAireoptimaledadhsion_2 = new ol.format.GeoJSON();
var features_ParcNaturelNationalPNNAireoptimaledadhsion_2 = format_ParcNaturelNationalPNNAireoptimaledadhsion_2.readFeatures(json_ParcNaturelNationalPNNAireoptimaledadhsion_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParcNaturelNationalPNNAireoptimaledadhsion_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_ParcNaturelNationalPNNAireoptimaledadhsion_2.addFeatures(features_ParcNaturelNationalPNNAireoptimaledadhsion_2);var lyr_ParcNaturelNationalPNNAireoptimaledadhsion_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ParcNaturelNationalPNNAireoptimaledadhsion_2, 
                style: style_ParcNaturelNationalPNNAireoptimaledadhsion_2,
                title: '<img src="styles/legend/ParcNaturelNationalPNNAireoptimaledadhsion_2.png" /> Parc Naturel National - PNN -Aire optimale d\'adhésion'
            });var format_ParcNaturelNationalPNNZonecentrale_3 = new ol.format.GeoJSON();
var features_ParcNaturelNationalPNNZonecentrale_3 = format_ParcNaturelNationalPNNZonecentrale_3.readFeatures(json_ParcNaturelNationalPNNZonecentrale_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParcNaturelNationalPNNZonecentrale_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_ParcNaturelNationalPNNZonecentrale_3.addFeatures(features_ParcNaturelNationalPNNZonecentrale_3);var lyr_ParcNaturelNationalPNNZonecentrale_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ParcNaturelNationalPNNZonecentrale_3, 
                style: style_ParcNaturelNationalPNNZonecentrale_3,
                title: '<img src="styles/legend/ParcNaturelNationalPNNZonecentrale_3.png" /> Parc Naturel National - PNN -Zone centrale'
            });var format_ParcNaturelRgionalPNR_4 = new ol.format.GeoJSON();
var features_ParcNaturelRgionalPNR_4 = format_ParcNaturelRgionalPNR_4.readFeatures(json_ParcNaturelRgionalPNR_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ParcNaturelRgionalPNR_4 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_ParcNaturelRgionalPNR_4.addFeatures(features_ParcNaturelRgionalPNR_4);var lyr_ParcNaturelRgionalPNR_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ParcNaturelRgionalPNR_4, 
                style: style_ParcNaturelRgionalPNR_4,
                title: '<img src="styles/legend/ParcNaturelRgionalPNR_4.png" /> Parc Naturel Régional - PNR'
            });var format_RAMSAR_5 = new ol.format.GeoJSON();
var features_RAMSAR_5 = format_RAMSAR_5.readFeatures(json_RAMSAR_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RAMSAR_5 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_RAMSAR_5.addFeatures(features_RAMSAR_5);var lyr_RAMSAR_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RAMSAR_5, 
                style: style_RAMSAR_5,
                title: '<img src="styles/legend/RAMSAR_5.png" /> RAMSAR'
            });var format_ReserveNaturelleNationaleRNN_6 = new ol.format.GeoJSON();
var features_ReserveNaturelleNationaleRNN_6 = format_ReserveNaturelleNationaleRNN_6.readFeatures(json_ReserveNaturelleNationaleRNN_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ReserveNaturelleNationaleRNN_6 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_ReserveNaturelleNationaleRNN_6.addFeatures(features_ReserveNaturelleNationaleRNN_6);var lyr_ReserveNaturelleNationaleRNN_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ReserveNaturelleNationaleRNN_6, 
                style: style_ReserveNaturelleNationaleRNN_6,
                title: '<img src="styles/legend/ReserveNaturelleNationaleRNN_6.png" /> Reserve Naturelle Nationale - RNN'
            });var format_PatrimoinemondialdelUNESCOZonetampon_7 = new ol.format.GeoJSON();
var features_PatrimoinemondialdelUNESCOZonetampon_7 = format_PatrimoinemondialdelUNESCOZonetampon_7.readFeatures(json_PatrimoinemondialdelUNESCOZonetampon_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PatrimoinemondialdelUNESCOZonetampon_7 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_PatrimoinemondialdelUNESCOZonetampon_7.addFeatures(features_PatrimoinemondialdelUNESCOZonetampon_7);var lyr_PatrimoinemondialdelUNESCOZonetampon_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PatrimoinemondialdelUNESCOZonetampon_7, 
                style: style_PatrimoinemondialdelUNESCOZonetampon_7,
                title: '<img src="styles/legend/PatrimoinemondialdelUNESCOZonetampon_7.png" /> Patrimoine mondial de l\'UNESCO - Zone tampon'
            });var format_PatrimoinemondialdelUNESCO_8 = new ol.format.GeoJSON();
var features_PatrimoinemondialdelUNESCO_8 = format_PatrimoinemondialdelUNESCO_8.readFeatures(json_PatrimoinemondialdelUNESCO_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PatrimoinemondialdelUNESCO_8 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_PatrimoinemondialdelUNESCO_8.addFeatures(features_PatrimoinemondialdelUNESCO_8);var lyr_PatrimoinemondialdelUNESCO_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PatrimoinemondialdelUNESCO_8, 
                style: style_PatrimoinemondialdelUNESCO_8,
                title: '<img src="styles/legend/PatrimoinemondialdelUNESCO_8.png" /> Patrimoine mondial de l\'UNESCO'
            });var format_ArrtdeprotectiondebiotopeAPB_9 = new ol.format.GeoJSON();
var features_ArrtdeprotectiondebiotopeAPB_9 = format_ArrtdeprotectiondebiotopeAPB_9.readFeatures(json_ArrtdeprotectiondebiotopeAPB_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ArrtdeprotectiondebiotopeAPB_9 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_ArrtdeprotectiondebiotopeAPB_9.addFeatures(features_ArrtdeprotectiondebiotopeAPB_9);var lyr_ArrtdeprotectiondebiotopeAPB_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ArrtdeprotectiondebiotopeAPB_9, 
                style: style_ArrtdeprotectiondebiotopeAPB_9,
                title: '<img src="styles/legend/ArrtdeprotectiondebiotopeAPB_9.png" /> Arrêté de protection de biotope - APB'
            });var format_ReserveNaturelleRegionaleRNRLR_10 = new ol.format.GeoJSON();
var features_ReserveNaturelleRegionaleRNRLR_10 = format_ReserveNaturelleRegionaleRNRLR_10.readFeatures(json_ReserveNaturelleRegionaleRNRLR_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ReserveNaturelleRegionaleRNRLR_10 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_ReserveNaturelleRegionaleRNRLR_10.addFeatures(features_ReserveNaturelleRegionaleRNRLR_10);var lyr_ReserveNaturelleRegionaleRNRLR_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ReserveNaturelleRegionaleRNRLR_10, 
                style: style_ReserveNaturelleRegionaleRNRLR_10,
                title: '<img src="styles/legend/ReserveNaturelleRegionaleRNRLR_10.png" /> Reserve Naturelle Regionale - RNR LR'
            });var format_ReserveNaturelleRegionaleRNRMP_11 = new ol.format.GeoJSON();
var features_ReserveNaturelleRegionaleRNRMP_11 = format_ReserveNaturelleRegionaleRNRMP_11.readFeatures(json_ReserveNaturelleRegionaleRNRMP_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ReserveNaturelleRegionaleRNRMP_11 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_ReserveNaturelleRegionaleRNRMP_11.addFeatures(features_ReserveNaturelleRegionaleRNRMP_11);var lyr_ReserveNaturelleRegionaleRNRMP_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ReserveNaturelleRegionaleRNRMP_11, 
                style: style_ReserveNaturelleRegionaleRNRMP_11,
                title: '<img src="styles/legend/ReserveNaturelleRegionaleRNRMP_11.png" /> Reserve Naturelle Regionale - RNR MP'
            });

lyr_NATURA2000DirectiveOiseaux_0.setVisible(true);lyr_NATURA2000DirectiveHabitat_1.setVisible(true);lyr_ParcNaturelNationalPNNAireoptimaledadhsion_2.setVisible(true);lyr_ParcNaturelNationalPNNZonecentrale_3.setVisible(true);lyr_ParcNaturelRgionalPNR_4.setVisible(true);lyr_RAMSAR_5.setVisible(true);lyr_ReserveNaturelleNationaleRNN_6.setVisible(true);lyr_PatrimoinemondialdelUNESCOZonetampon_7.setVisible(true);lyr_PatrimoinemondialdelUNESCO_8.setVisible(true);lyr_ArrtdeprotectiondebiotopeAPB_9.setVisible(true);lyr_ReserveNaturelleRegionaleRNRLR_10.setVisible(true);lyr_ReserveNaturelleRegionaleRNRMP_11.setVisible(true);
var layersList = [baseLayer,lyr_NATURA2000DirectiveOiseaux_0,lyr_NATURA2000DirectiveHabitat_1,lyr_ParcNaturelNationalPNNAireoptimaledadhsion_2,lyr_ParcNaturelNationalPNNZonecentrale_3,lyr_ParcNaturelRgionalPNR_4,lyr_RAMSAR_5,lyr_ReserveNaturelleNationaleRNN_6,lyr_PatrimoinemondialdelUNESCOZonetampon_7,lyr_PatrimoinemondialdelUNESCO_8,lyr_ArrtdeprotectiondebiotopeAPB_9,lyr_ReserveNaturelleRegionaleRNRLR_10,lyr_ReserveNaturelleRegionaleRNRMP_11];
lyr_NATURA2000DirectiveOiseaux_0.set('fieldAliases', {'gid': 'gid', 'c_site': 'c_site', 'n_site': 'n_site', 't_site': 't_site', 'surf_ha': 'surf_ha', 'dpt_pilot': 'dpt_pilot', 'digit': 'digit', 'url_mnhn': 'url_mnhn', 'f_pert_eau': 'f_pert_eau', 'f_pert_zh': 'f_pert_zh', });
lyr_NATURA2000DirectiveHabitat_1.set('fieldAliases', {'gid': 'gid', 'c_site': 'c_site', 'n_site': 'n_site', 't_site': 't_site', 'surf_ha': 'surf_ha', 'dpt_pilot': 'dpt_pilot', 'digit': 'digit', 'url_mnhn': 'url_mnhn', 'f_pert_eau': 'f_pert_eau', 'f_pert_zh': 'f_pert_zh', 'f_pertchir': 'f_pertchir', });
lyr_ParcNaturelNationalPNNAireoptimaledadhsion_2.set('fieldAliases', {'id_local': 'id_local', 'nom_site': 'nom_site', 'date_crea': 'date_crea', 'src_geom': 'src_geom', 'src_annee': 'src_annee', 'marin': 'marin', 'p1_nature': 'p1_nature', 'p2_culture': 'p2_culture', 'p3_paysage': 'p3_paysage', 'p4_geologi': 'p4_geologi', 'p5_speleo': 'p5_speleo', 'p6_archeo': 'p6_archeo', 'p7_paleob': 'p7_paleob', 'p8_anthrop': 'p8_anthrop', 'p9_science': 'p9_science', 'p10_public': 'p10_public', 'p11_dd': 'p11_dd', 'p12_autre': 'p12_autre', });
lyr_ParcNaturelNationalPNNZonecentrale_3.set('fieldAliases', {'id_local': 'id_local', 'id_mnhn': 'id_mnhn', 'ppn_asso': 'ppn_asso', 'code_r_enp': 'code_r_enp', 'nom_site': 'nom_site', 'date_crea': 'date_crea', 'modif_adm': 'modif_adm', 'modif_geo': 'modif_geo', 'url_fiche': 'url_fiche', 'surf_off': 'surf_off', 'acte_deb': 'acte_deb', 'acte_fin': 'acte_fin', 'gest_site': 'gest_site', 'operateur': 'operateur', 'precision': 'precision', 'src_geom': 'src_geom', 'src_annee': 'src_annee', 'marin': 'marin', 'p1_nature': 'p1_nature', 'p2_culture': 'p2_culture', 'p3_paysage': 'p3_paysage', 'p4_geologi': 'p4_geologi', 'p5_speleo': 'p5_speleo', 'p6_archeo': 'p6_archeo', 'p7_paleob': 'p7_paleob', 'p8_anthrop': 'p8_anthrop', 'p9_science': 'p9_science', 'p10_public': 'p10_public', 'p11_dd': 'p11_dd', 'p12_autre': 'p12_autre', });
lyr_ParcNaturelRgionalPNR_4.set('fieldAliases', {'gid': 'gid', 'id_local': 'id_local', 'id_mnhn': 'id_mnhn', 'nom_site': 'nom_site', 'date_crea': 'date_crea', 'modif_adm': 'modif_adm', 'modif_geo': 'modif_geo', 'url_fiche': 'url_fiche', 'surf_off': 'surf_off', 'acte_deb': 'acte_deb', 'acte_fin': 'acte_fin', 'gest_site': 'gest_site', 'operateur': 'operateur', 'precision': 'precision', 'src_geom': 'src_geom', 'src_annee': 'src_annee', 'marin': 'marin', 'p1_nature': 'p1_nature', 'p2_culture': 'p2_culture', 'p3_paysage': 'p3_paysage', 'p4_geologi': 'p4_geologi', 'p5_speleo': 'p5_speleo', 'p6_archeo': 'p6_archeo', 'p7_paleob': 'p7_paleob', 'p8_anthrop': 'p8_anthrop', 'p9_science': 'p9_science', 'p10_public': 'p10_public', 'p11_dd': 'p11_dd', 'p12_autre': 'p12_autre', });
lyr_RAMSAR_5.set('fieldAliases', {'gid': 'gid', 'id_local': 'id_local', 'id_mnhn': 'id_mnhn', 'nom_site': 'nom_site', 'date_crea': 'date_crea', 'modif_adm': 'modif_adm', 'modif_geo': 'modif_geo', 'url_fiche': 'url_fiche', 'surf_off': 'surf_off', 'acte_deb': 'acte_deb', 'acte_fin': 'acte_fin', 'gest_site': 'gest_site', 'operateur': 'operateur', 'precision': 'precision', 'src_geom': 'src_geom', 'src_annee': 'src_annee', 'marin': 'marin', 'p1_nature': 'p1_nature', 'p2_culture': 'p2_culture', 'p3_paysage': 'p3_paysage', 'p4_geologi': 'p4_geologi', 'p5_speleo': 'p5_speleo', 'p6_archeo': 'p6_archeo', 'p7_paleob': 'p7_paleob', 'p8_anthrop': 'p8_anthrop', 'p9_science': 'p9_science', 'p10_public': 'p10_public', 'p11_dd': 'p11_dd', 'p12_autre': 'p12_autre', });
lyr_ReserveNaturelleNationaleRNN_6.set('fieldAliases', {'gid': 'gid', 'id_local': 'id_local', 'id_mnhn': 'id_mnhn', 'prn_asso': 'prn_asso', 'code_r_enp': 'code_r_enp', 'nom_site': 'nom_site', 'date_crea': 'date_crea', 'modif_adm': 'modif_adm', 'modif_geo': 'modif_geo', 'url_fiche': 'url_fiche', 'surf_off': 'surf_off', 'acte_deb': 'acte_deb', 'acte_fin': 'acte_fin', 'gest_site': 'gest_site', 'operateur': 'operateur', 'precision': 'precision', 'src_geom': 'src_geom', 'src_annee': 'src_annee', 'marin': 'marin', 'p1_nature': 'p1_nature', 'p2_culture': 'p2_culture', 'p3_paysage': 'p3_paysage', 'p4_geologi': 'p4_geologi', 'p5_speleo': 'p5_speleo', 'p6_archeo': 'p6_archeo', 'p7_paleob': 'p7_paleob', 'p8_anthrop': 'p8_anthrop', 'p9_science': 'p9_science', 'p10_public': 'p10_public', 'p11_dd': 'p11_dd', 'p12_autre': 'p12_autre', });
lyr_PatrimoinemondialdelUNESCOZonetampon_7.set('fieldAliases', {'gid': 'gid', 'c_unesco': 'c_unesco', 'c_serie': 'c_serie', 'n_unesco': 'n_unesco', 'n_serie': 'n_serie', 't_unesco': 't_unesco', 'd_inscript': 'd_inscript', 't_crit': 't_crit', 'echelle': 'echelle', 'ref_num': 'ref_num', 'ref_mil': 'ref_mil', });
lyr_PatrimoinemondialdelUNESCO_8.set('fieldAliases', {'gid': 'gid', 'c_unesco': 'c_unesco', 'c_serie': 'c_serie', 'n_unesco': 'n_unesco', 'n_serie': 'n_serie', 't_unesco': 't_unesco', 'd_inscript': 'd_inscript', 't_crit': 't_crit', 'echelle': 'echelle', 'ref_num': 'ref_num', 'ref_mil': 'ref_mil', });
lyr_ArrtdeprotectiondebiotopeAPB_9.set('fieldAliases', {'gid': 'gid', 'id_local': 'id_local', 'id_mnhn': 'id_mnhn', 'nom_site': 'nom_site', 'date_crea': 'date_crea', 'modif_adm': 'modif_adm', 'modif_geo': 'modif_geo', 'url_fiche': 'url_fiche', 'surf_off': 'surf_off', 'acte_deb': 'acte_deb', 'acte_fin': 'acte_fin', 'gest_site': 'gest_site', 'operateur': 'operateur', 'src_geom': 'src_geom', 'src_annee': 'src_annee', 'marin': 'marin', 'p1_nature': 'p1_nature', 'p2_culture': 'p2_culture', 'p3_paysage': 'p3_paysage', 'p4_geologi': 'p4_geologi', 'p5_speleo': 'p5_speleo', 'p6_archeo': 'p6_archeo', 'p7_paleob': 'p7_paleob', 'p8_anthrop': 'p8_anthrop', 'p9_science': 'p9_science', 'p10_public': 'p10_public', 'p11_dd': 'p11_dd', 'p12_autre': 'p12_autre', 'precision': 'precision', 'surf_sig': 'surf_sig', });
lyr_ReserveNaturelleRegionaleRNRLR_10.set('fieldAliases', {'ID_LOCAL': 'ID_LOCAL', 'ID_MNHN': 'ID_MNHN', 'NOM_SITE': 'NOM_SITE', 'DATE_CREA': 'DATE_CREA', 'MODIF_ADM': 'MODIF_ADM', 'MODIF_GEO': 'MODIF_GEO', 'URL_FICHE': 'URL_FICHE', 'SURF_OFF': 'SURF_OFF', 'ACTE_DEB': 'ACTE_DEB', 'ACTE_FIN': 'ACTE_FIN', 'GEST_SITE': 'GEST_SITE', 'OPERATEUR': 'OPERATEUR', 'PRECISION': 'PRECISION', 'SRC_GEOM': 'SRC_GEOM', 'SRC_ANNEE': 'SRC_ANNEE', 'MARIN': 'MARIN', 'P1_NATURE': 'P1_NATURE', 'P2_CULTURE': 'P2_CULTURE', 'P3_PAYSAGE': 'P3_PAYSAGE', 'P4_GEOLOGI': 'P4_GEOLOGI', 'P5_SPELEO': 'P5_SPELEO', 'P6_ARCHEO': 'P6_ARCHEO', 'P7_PALEOB': 'P7_PALEOB', 'P8_ANTHROP': 'P8_ANTHROP', 'P9_SCIENCE': 'P9_SCIENCE', 'P10_PUBLIC': 'P10_PUBLIC', 'P11_DD': 'P11_DD', 'P12_AUTRE': 'P12_AUTRE', });
lyr_ReserveNaturelleRegionaleRNRMP_11.set('fieldAliases', {'id_spn': 'id_spn', 'libelle': 'libelle', 'dt_crea': 'dt_crea', 'statut': 'statut', 'surf_sig': 'surf_sig', 'ref_num': 'ref_num', 'url_fic': 'url_fic', 'precision': 'precision', });
lyr_NATURA2000DirectiveOiseaux_0.set('fieldImages', {'gid': 'TextEdit', 'c_site': 'TextEdit', 'n_site': 'TextEdit', 't_site': 'TextEdit', 'surf_ha': 'TextEdit', 'dpt_pilot': 'TextEdit', 'digit': 'TextEdit', 'url_mnhn': 'TextEdit', 'f_pert_eau': 'TextEdit', 'f_pert_zh': 'TextEdit', });
lyr_NATURA2000DirectiveHabitat_1.set('fieldImages', {'gid': 'TextEdit', 'c_site': 'TextEdit', 'n_site': 'TextEdit', 't_site': 'TextEdit', 'surf_ha': 'TextEdit', 'dpt_pilot': 'TextEdit', 'digit': 'TextEdit', 'url_mnhn': 'TextEdit', 'f_pert_eau': 'TextEdit', 'f_pert_zh': 'TextEdit', 'f_pertchir': 'TextEdit', });
lyr_ParcNaturelNationalPNNAireoptimaledadhsion_2.set('fieldImages', {'id_local': 'TextEdit', 'nom_site': 'TextEdit', 'date_crea': 'TextEdit', 'src_geom': 'TextEdit', 'src_annee': 'TextEdit', 'marin': 'TextEdit', 'p1_nature': 'TextEdit', 'p2_culture': 'TextEdit', 'p3_paysage': 'TextEdit', 'p4_geologi': 'TextEdit', 'p5_speleo': 'TextEdit', 'p6_archeo': 'TextEdit', 'p7_paleob': 'TextEdit', 'p8_anthrop': 'TextEdit', 'p9_science': 'TextEdit', 'p10_public': 'TextEdit', 'p11_dd': 'TextEdit', 'p12_autre': 'TextEdit', });
lyr_ParcNaturelNationalPNNZonecentrale_3.set('fieldImages', {'id_local': 'TextEdit', 'id_mnhn': 'TextEdit', 'ppn_asso': 'TextEdit', 'code_r_enp': 'TextEdit', 'nom_site': 'TextEdit', 'date_crea': 'TextEdit', 'modif_adm': 'TextEdit', 'modif_geo': 'TextEdit', 'url_fiche': 'TextEdit', 'surf_off': 'TextEdit', 'acte_deb': 'TextEdit', 'acte_fin': 'TextEdit', 'gest_site': 'TextEdit', 'operateur': 'TextEdit', 'precision': 'TextEdit', 'src_geom': 'TextEdit', 'src_annee': 'TextEdit', 'marin': 'TextEdit', 'p1_nature': 'TextEdit', 'p2_culture': 'TextEdit', 'p3_paysage': 'TextEdit', 'p4_geologi': 'TextEdit', 'p5_speleo': 'TextEdit', 'p6_archeo': 'TextEdit', 'p7_paleob': 'TextEdit', 'p8_anthrop': 'TextEdit', 'p9_science': 'TextEdit', 'p10_public': 'TextEdit', 'p11_dd': 'TextEdit', 'p12_autre': 'TextEdit', });
lyr_ParcNaturelRgionalPNR_4.set('fieldImages', {'gid': 'TextEdit', 'id_local': 'TextEdit', 'id_mnhn': 'TextEdit', 'nom_site': 'TextEdit', 'date_crea': 'TextEdit', 'modif_adm': 'TextEdit', 'modif_geo': 'TextEdit', 'url_fiche': 'TextEdit', 'surf_off': 'TextEdit', 'acte_deb': 'TextEdit', 'acte_fin': 'TextEdit', 'gest_site': 'TextEdit', 'operateur': 'TextEdit', 'precision': 'TextEdit', 'src_geom': 'TextEdit', 'src_annee': 'TextEdit', 'marin': 'TextEdit', 'p1_nature': 'TextEdit', 'p2_culture': 'TextEdit', 'p3_paysage': 'TextEdit', 'p4_geologi': 'TextEdit', 'p5_speleo': 'TextEdit', 'p6_archeo': 'TextEdit', 'p7_paleob': 'TextEdit', 'p8_anthrop': 'TextEdit', 'p9_science': 'TextEdit', 'p10_public': 'TextEdit', 'p11_dd': 'TextEdit', 'p12_autre': 'TextEdit', });
lyr_RAMSAR_5.set('fieldImages', {'gid': 'TextEdit', 'id_local': 'TextEdit', 'id_mnhn': 'TextEdit', 'nom_site': 'TextEdit', 'date_crea': 'TextEdit', 'modif_adm': 'TextEdit', 'modif_geo': 'TextEdit', 'url_fiche': 'TextEdit', 'surf_off': 'TextEdit', 'acte_deb': 'TextEdit', 'acte_fin': 'TextEdit', 'gest_site': 'TextEdit', 'operateur': 'TextEdit', 'precision': 'TextEdit', 'src_geom': 'TextEdit', 'src_annee': 'TextEdit', 'marin': 'TextEdit', 'p1_nature': 'TextEdit', 'p2_culture': 'TextEdit', 'p3_paysage': 'TextEdit', 'p4_geologi': 'TextEdit', 'p5_speleo': 'TextEdit', 'p6_archeo': 'TextEdit', 'p7_paleob': 'TextEdit', 'p8_anthrop': 'TextEdit', 'p9_science': 'TextEdit', 'p10_public': 'TextEdit', 'p11_dd': 'TextEdit', 'p12_autre': 'TextEdit', });
lyr_ReserveNaturelleNationaleRNN_6.set('fieldImages', {'gid': 'TextEdit', 'id_local': 'TextEdit', 'id_mnhn': 'TextEdit', 'prn_asso': 'TextEdit', 'code_r_enp': 'TextEdit', 'nom_site': 'TextEdit', 'date_crea': 'TextEdit', 'modif_adm': 'TextEdit', 'modif_geo': 'TextEdit', 'url_fiche': 'TextEdit', 'surf_off': 'TextEdit', 'acte_deb': 'TextEdit', 'acte_fin': 'TextEdit', 'gest_site': 'TextEdit', 'operateur': 'TextEdit', 'precision': 'TextEdit', 'src_geom': 'TextEdit', 'src_annee': 'TextEdit', 'marin': 'TextEdit', 'p1_nature': 'TextEdit', 'p2_culture': 'TextEdit', 'p3_paysage': 'TextEdit', 'p4_geologi': 'TextEdit', 'p5_speleo': 'TextEdit', 'p6_archeo': 'TextEdit', 'p7_paleob': 'TextEdit', 'p8_anthrop': 'TextEdit', 'p9_science': 'TextEdit', 'p10_public': 'TextEdit', 'p11_dd': 'TextEdit', 'p12_autre': 'TextEdit', });
lyr_PatrimoinemondialdelUNESCOZonetampon_7.set('fieldImages', {'gid': 'TextEdit', 'c_unesco': 'TextEdit', 'c_serie': 'TextEdit', 'n_unesco': 'TextEdit', 'n_serie': 'TextEdit', 't_unesco': 'TextEdit', 'd_inscript': 'TextEdit', 't_crit': 'TextEdit', 'echelle': 'TextEdit', 'ref_num': 'TextEdit', 'ref_mil': 'TextEdit', });
lyr_PatrimoinemondialdelUNESCO_8.set('fieldImages', {'gid': 'TextEdit', 'c_unesco': 'TextEdit', 'c_serie': 'TextEdit', 'n_unesco': 'TextEdit', 'n_serie': 'TextEdit', 't_unesco': 'TextEdit', 'd_inscript': 'TextEdit', 't_crit': 'TextEdit', 'echelle': 'TextEdit', 'ref_num': 'TextEdit', 'ref_mil': 'TextEdit', });
lyr_ArrtdeprotectiondebiotopeAPB_9.set('fieldImages', {'gid': 'TextEdit', 'id_local': 'TextEdit', 'id_mnhn': 'TextEdit', 'nom_site': 'TextEdit', 'date_crea': 'TextEdit', 'modif_adm': 'TextEdit', 'modif_geo': 'TextEdit', 'url_fiche': 'TextEdit', 'surf_off': 'TextEdit', 'acte_deb': 'TextEdit', 'acte_fin': 'TextEdit', 'gest_site': 'TextEdit', 'operateur': 'TextEdit', 'src_geom': 'TextEdit', 'src_annee': 'TextEdit', 'marin': 'TextEdit', 'p1_nature': 'TextEdit', 'p2_culture': 'TextEdit', 'p3_paysage': 'TextEdit', 'p4_geologi': 'TextEdit', 'p5_speleo': 'TextEdit', 'p6_archeo': 'TextEdit', 'p7_paleob': 'TextEdit', 'p8_anthrop': 'TextEdit', 'p9_science': 'TextEdit', 'p10_public': 'TextEdit', 'p11_dd': 'TextEdit', 'p12_autre': 'TextEdit', 'precision': 'TextEdit', 'surf_sig': 'TextEdit', });
lyr_ReserveNaturelleRegionaleRNRLR_10.set('fieldImages', {'ID_LOCAL': 'TextEdit', 'ID_MNHN': 'TextEdit', 'NOM_SITE': 'TextEdit', 'DATE_CREA': 'TextEdit', 'MODIF_ADM': 'TextEdit', 'MODIF_GEO': 'TextEdit', 'URL_FICHE': 'TextEdit', 'SURF_OFF': 'TextEdit', 'ACTE_DEB': 'TextEdit', 'ACTE_FIN': 'TextEdit', 'GEST_SITE': 'TextEdit', 'OPERATEUR': 'TextEdit', 'PRECISION': 'TextEdit', 'SRC_GEOM': 'TextEdit', 'SRC_ANNEE': 'TextEdit', 'MARIN': 'TextEdit', 'P1_NATURE': 'TextEdit', 'P2_CULTURE': 'TextEdit', 'P3_PAYSAGE': 'TextEdit', 'P4_GEOLOGI': 'TextEdit', 'P5_SPELEO': 'TextEdit', 'P6_ARCHEO': 'TextEdit', 'P7_PALEOB': 'TextEdit', 'P8_ANTHROP': 'TextEdit', 'P9_SCIENCE': 'TextEdit', 'P10_PUBLIC': 'TextEdit', 'P11_DD': 'TextEdit', 'P12_AUTRE': 'TextEdit', });
lyr_ReserveNaturelleRegionaleRNRMP_11.set('fieldImages', {'id_spn': 'TextEdit', 'libelle': 'TextEdit', 'dt_crea': 'TextEdit', 'statut': 'TextEdit', 'surf_sig': 'TextEdit', 'ref_num': 'TextEdit', 'url_fic': 'TextEdit', 'precision': 'TextEdit', });
lyr_NATURA2000DirectiveOiseaux_0.set('fieldLabels', {'gid': 'no label', 'c_site': 'no label', 'n_site': 'no label', 't_site': 'no label', 'surf_ha': 'no label', 'dpt_pilot': 'no label', 'digit': 'no label', 'url_mnhn': 'no label', 'f_pert_eau': 'no label', 'f_pert_zh': 'no label', });
lyr_NATURA2000DirectiveHabitat_1.set('fieldLabels', {'gid': 'no label', 'c_site': 'no label', 'n_site': 'no label', 't_site': 'no label', 'surf_ha': 'no label', 'dpt_pilot': 'no label', 'digit': 'no label', 'url_mnhn': 'no label', 'f_pert_eau': 'no label', 'f_pert_zh': 'no label', 'f_pertchir': 'no label', });
lyr_ParcNaturelNationalPNNAireoptimaledadhsion_2.set('fieldLabels', {'id_local': 'no label', 'nom_site': 'no label', 'date_crea': 'no label', 'src_geom': 'no label', 'src_annee': 'no label', 'marin': 'no label', 'p1_nature': 'no label', 'p2_culture': 'no label', 'p3_paysage': 'no label', 'p4_geologi': 'no label', 'p5_speleo': 'no label', 'p6_archeo': 'no label', 'p7_paleob': 'no label', 'p8_anthrop': 'no label', 'p9_science': 'no label', 'p10_public': 'no label', 'p11_dd': 'no label', 'p12_autre': 'no label', });
lyr_ParcNaturelNationalPNNZonecentrale_3.set('fieldLabels', {'id_local': 'no label', 'id_mnhn': 'no label', 'ppn_asso': 'no label', 'code_r_enp': 'no label', 'nom_site': 'no label', 'date_crea': 'no label', 'modif_adm': 'no label', 'modif_geo': 'no label', 'url_fiche': 'no label', 'surf_off': 'no label', 'acte_deb': 'no label', 'acte_fin': 'no label', 'gest_site': 'no label', 'operateur': 'no label', 'precision': 'no label', 'src_geom': 'no label', 'src_annee': 'no label', 'marin': 'no label', 'p1_nature': 'no label', 'p2_culture': 'no label', 'p3_paysage': 'no label', 'p4_geologi': 'no label', 'p5_speleo': 'no label', 'p6_archeo': 'no label', 'p7_paleob': 'no label', 'p8_anthrop': 'no label', 'p9_science': 'no label', 'p10_public': 'no label', 'p11_dd': 'no label', 'p12_autre': 'no label', });
lyr_ParcNaturelRgionalPNR_4.set('fieldLabels', {'gid': 'no label', 'id_local': 'no label', 'id_mnhn': 'no label', 'nom_site': 'no label', 'date_crea': 'no label', 'modif_adm': 'no label', 'modif_geo': 'no label', 'url_fiche': 'no label', 'surf_off': 'no label', 'acte_deb': 'no label', 'acte_fin': 'no label', 'gest_site': 'no label', 'operateur': 'no label', 'precision': 'no label', 'src_geom': 'no label', 'src_annee': 'no label', 'marin': 'no label', 'p1_nature': 'no label', 'p2_culture': 'no label', 'p3_paysage': 'no label', 'p4_geologi': 'no label', 'p5_speleo': 'no label', 'p6_archeo': 'no label', 'p7_paleob': 'no label', 'p8_anthrop': 'no label', 'p9_science': 'no label', 'p10_public': 'no label', 'p11_dd': 'no label', 'p12_autre': 'no label', });
lyr_RAMSAR_5.set('fieldLabels', {'gid': 'no label', 'id_local': 'no label', 'id_mnhn': 'no label', 'nom_site': 'no label', 'date_crea': 'no label', 'modif_adm': 'no label', 'modif_geo': 'no label', 'url_fiche': 'no label', 'surf_off': 'no label', 'acte_deb': 'no label', 'acte_fin': 'no label', 'gest_site': 'no label', 'operateur': 'no label', 'precision': 'no label', 'src_geom': 'no label', 'src_annee': 'no label', 'marin': 'no label', 'p1_nature': 'no label', 'p2_culture': 'no label', 'p3_paysage': 'no label', 'p4_geologi': 'no label', 'p5_speleo': 'no label', 'p6_archeo': 'no label', 'p7_paleob': 'no label', 'p8_anthrop': 'no label', 'p9_science': 'no label', 'p10_public': 'no label', 'p11_dd': 'no label', 'p12_autre': 'no label', });
lyr_ReserveNaturelleNationaleRNN_6.set('fieldLabels', {'gid': 'no label', 'id_local': 'no label', 'id_mnhn': 'no label', 'prn_asso': 'no label', 'code_r_enp': 'no label', 'nom_site': 'no label', 'date_crea': 'no label', 'modif_adm': 'no label', 'modif_geo': 'no label', 'url_fiche': 'no label', 'surf_off': 'no label', 'acte_deb': 'no label', 'acte_fin': 'no label', 'gest_site': 'no label', 'operateur': 'no label', 'precision': 'no label', 'src_geom': 'no label', 'src_annee': 'no label', 'marin': 'no label', 'p1_nature': 'no label', 'p2_culture': 'no label', 'p3_paysage': 'no label', 'p4_geologi': 'no label', 'p5_speleo': 'no label', 'p6_archeo': 'no label', 'p7_paleob': 'no label', 'p8_anthrop': 'no label', 'p9_science': 'no label', 'p10_public': 'no label', 'p11_dd': 'no label', 'p12_autre': 'no label', });
lyr_PatrimoinemondialdelUNESCOZonetampon_7.set('fieldLabels', {'gid': 'no label', 'c_unesco': 'no label', 'c_serie': 'no label', 'n_unesco': 'no label', 'n_serie': 'no label', 't_unesco': 'no label', 'd_inscript': 'no label', 't_crit': 'no label', 'echelle': 'no label', 'ref_num': 'no label', 'ref_mil': 'no label', });
lyr_PatrimoinemondialdelUNESCO_8.set('fieldLabels', {'gid': 'no label', 'c_unesco': 'no label', 'c_serie': 'no label', 'n_unesco': 'no label', 'n_serie': 'no label', 't_unesco': 'no label', 'd_inscript': 'no label', 't_crit': 'no label', 'echelle': 'no label', 'ref_num': 'no label', 'ref_mil': 'no label', });
lyr_ArrtdeprotectiondebiotopeAPB_9.set('fieldLabels', {'gid': 'no label', 'id_local': 'no label', 'id_mnhn': 'no label', 'nom_site': 'no label', 'date_crea': 'no label', 'modif_adm': 'no label', 'modif_geo': 'no label', 'url_fiche': 'no label', 'surf_off': 'no label', 'acte_deb': 'no label', 'acte_fin': 'no label', 'gest_site': 'no label', 'operateur': 'no label', 'src_geom': 'no label', 'src_annee': 'no label', 'marin': 'no label', 'p1_nature': 'no label', 'p2_culture': 'no label', 'p3_paysage': 'no label', 'p4_geologi': 'no label', 'p5_speleo': 'no label', 'p6_archeo': 'no label', 'p7_paleob': 'no label', 'p8_anthrop': 'no label', 'p9_science': 'no label', 'p10_public': 'no label', 'p11_dd': 'no label', 'p12_autre': 'no label', 'precision': 'no label', 'surf_sig': 'no label', });
lyr_ReserveNaturelleRegionaleRNRLR_10.set('fieldLabels', {'ID_LOCAL': 'no label', 'ID_MNHN': 'no label', 'NOM_SITE': 'no label', 'DATE_CREA': 'no label', 'MODIF_ADM': 'no label', 'MODIF_GEO': 'no label', 'URL_FICHE': 'no label', 'SURF_OFF': 'no label', 'ACTE_DEB': 'no label', 'ACTE_FIN': 'no label', 'GEST_SITE': 'no label', 'OPERATEUR': 'no label', 'PRECISION': 'no label', 'SRC_GEOM': 'no label', 'SRC_ANNEE': 'no label', 'MARIN': 'no label', 'P1_NATURE': 'no label', 'P2_CULTURE': 'no label', 'P3_PAYSAGE': 'no label', 'P4_GEOLOGI': 'no label', 'P5_SPELEO': 'no label', 'P6_ARCHEO': 'no label', 'P7_PALEOB': 'no label', 'P8_ANTHROP': 'no label', 'P9_SCIENCE': 'no label', 'P10_PUBLIC': 'no label', 'P11_DD': 'no label', 'P12_AUTRE': 'no label', });
lyr_ReserveNaturelleRegionaleRNRMP_11.set('fieldLabels', {'id_spn': 'no label', 'libelle': 'no label', 'dt_crea': 'no label', 'statut': 'no label', 'surf_sig': 'no label', 'ref_num': 'no label', 'url_fic': 'no label', 'precision': 'no label', });
lyr_ReserveNaturelleRegionaleRNRMP_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});