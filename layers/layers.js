var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_RG_PH_1 = new ol.format.GeoJSON();
var features_RG_PH_1 = format_RG_PH_1.readFeatures(json_RG_PH_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RG_PH_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RG_PH_1.addFeatures(features_RG_PH_1);
var lyr_RG_PH_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RG_PH_1, 
                style: style_RG_PH_1,
                popuplayertitle: 'RG_PH',
                interactive: true,
                title: '<img src="styles/legend/RG_PH_1.png" /> RG_PH'
            });
var format_DGT_304_2 = new ol.format.GeoJSON();
var features_DGT_304_2 = format_DGT_304_2.readFeatures(json_DGT_304_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DGT_304_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DGT_304_2.addFeatures(features_DGT_304_2);
var lyr_DGT_304_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DGT_304_2, 
                style: style_DGT_304_2,
                popuplayertitle: 'DGT_30.4',
                interactive: true,
                title: '<img src="styles/legend/DGT_304_2.png" /> DGT_30.4'
            });
var format_DGT_DLBD_3 = new ol.format.GeoJSON();
var features_DGT_DLBD_3 = format_DGT_DLBD_3.readFeatures(json_DGT_DLBD_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DGT_DLBD_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DGT_DLBD_3.addFeatures(features_DGT_DLBD_3);
var lyr_DGT_DLBD_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DGT_DLBD_3, 
                style: style_DGT_DLBD_3,
                popuplayertitle: 'DGT_DLBD',
                interactive: true,
                title: '<img src="styles/legend/DGT_DLBD_3.png" /> DGT_DLBD'
            });
var format_DGT_DT743A_4 = new ol.format.GeoJSON();
var features_DGT_DT743A_4 = format_DGT_DT743A_4.readFeatures(json_DGT_DT743A_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DGT_DT743A_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DGT_DT743A_4.addFeatures(features_DGT_DT743A_4);
var lyr_DGT_DT743A_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DGT_DT743A_4, 
                style: style_DGT_DT743A_4,
                popuplayertitle: 'DGT_DT.743A',
                interactive: true,
                title: '<img src="styles/legend/DGT_DT743A_4.png" /> DGT_DT.743A'
            });
var format_DGT_LHP_5 = new ol.format.GeoJSON();
var features_DGT_LHP_5 = format_DGT_LHP_5.readFeatures(json_DGT_LHP_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DGT_LHP_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DGT_LHP_5.addFeatures(features_DGT_LHP_5);
var lyr_DGT_LHP_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DGT_LHP_5, 
                style: style_DGT_LHP_5,
                popuplayertitle: 'DGT_LHP',
                interactive: true,
                title: '<img src="styles/legend/DGT_LHP_5.png" /> DGT_LHP'
            });
var format_DGT_MPTV_6 = new ol.format.GeoJSON();
var features_DGT_MPTV_6 = format_DGT_MPTV_6.readFeatures(json_DGT_MPTV_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DGT_MPTV_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DGT_MPTV_6.addFeatures(features_DGT_MPTV_6);
var lyr_DGT_MPTV_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DGT_MPTV_6, 
                style: style_DGT_MPTV_6,
                popuplayertitle: 'DGT_MP.TV',
                interactive: true,
                title: '<img src="styles/legend/DGT_MPTV_6.png" /> DGT_MP.TV'
            });
var format_DGT_NTMK_7 = new ol.format.GeoJSON();
var features_DGT_NTMK_7 = format_DGT_NTMK_7.readFeatures(json_DGT_NTMK_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DGT_NTMK_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DGT_NTMK_7.addFeatures(features_DGT_NTMK_7);
var lyr_DGT_NTMK_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DGT_NTMK_7, 
                style: style_DGT_NTMK_7,
                popuplayertitle: 'DGT_NTMK',
                interactive: true,
                title: '<img src="styles/legend/DGT_NTMK_7.png" /> DGT_NTMK'
            });
var format_DGT_TQD_8 = new ol.format.GeoJSON();
var features_DGT_TQD_8 = format_DGT_TQD_8.readFeatures(json_DGT_TQD_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DGT_TQD_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DGT_TQD_8.addFeatures(features_DGT_TQD_8);
var lyr_DGT_TQD_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DGT_TQD_8, 
                style: style_DGT_TQD_8,
                popuplayertitle: 'DGT_TQD',
                interactive: true,
                title: '<img src="styles/legend/DGT_TQD_8.png" /> DGT_TQD'
            });
var format_DGT_TVO_9 = new ol.format.GeoJSON();
var features_DGT_TVO_9 = format_DGT_TVO_9.readFeatures(json_DGT_TVO_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DGT_TVO_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DGT_TVO_9.addFeatures(features_DGT_TVO_9);
var lyr_DGT_TVO_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DGT_TVO_9, 
                style: style_DGT_TVO_9,
                popuplayertitle: 'DGT_TVO',
                interactive: true,
                title: '<img src="styles/legend/DGT_TVO_9.png" /> DGT_TVO'
            });
var format_CayBangDaiLoan_10 = new ol.format.GeoJSON();
var features_CayBangDaiLoan_10 = format_CayBangDaiLoan_10.readFeatures(json_CayBangDaiLoan_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CayBangDaiLoan_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CayBangDaiLoan_10.addFeatures(features_CayBangDaiLoan_10);
var lyr_CayBangDaiLoan_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CayBangDaiLoan_10, 
                style: style_CayBangDaiLoan_10,
                popuplayertitle: 'CayBangDaiLoan',
                interactive: true,
                title: '<img src="styles/legend/CayBangDaiLoan_10.png" /> CayBangDaiLoan'
            });
var format_CayMeTay_11 = new ol.format.GeoJSON();
var features_CayMeTay_11 = format_CayMeTay_11.readFeatures(json_CayMeTay_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CayMeTay_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CayMeTay_11.addFeatures(features_CayMeTay_11);
var lyr_CayMeTay_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CayMeTay_11, 
                style: style_CayMeTay_11,
                popuplayertitle: 'CayMeTay',
                interactive: true,
                title: '<img src="styles/legend/CayMeTay_11.png" /> CayMeTay'
            });
var format_CayDauRai_12 = new ol.format.GeoJSON();
var features_CayDauRai_12 = format_CayDauRai_12.readFeatures(json_CayDauRai_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CayDauRai_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CayDauRai_12.addFeatures(features_CayDauRai_12);
var lyr_CayDauRai_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CayDauRai_12, 
                style: style_CayDauRai_12,
                popuplayertitle: 'CayDauRai',
                interactive: true,
                title: '<img src="styles/legend/CayDauRai_12.png" /> CayDauRai'
            });
var format_CaySaoDen_13 = new ol.format.GeoJSON();
var features_CaySaoDen_13 = format_CaySaoDen_13.readFeatures(json_CaySaoDen_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CaySaoDen_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CaySaoDen_13.addFeatures(features_CaySaoDen_13);
var lyr_CaySaoDen_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CaySaoDen_13, 
                style: style_CaySaoDen_13,
                popuplayertitle: 'CaySaoDen',
                interactive: true,
                title: '<img src="styles/legend/CaySaoDen_13.png" /> CaySaoDen'
            });
var format_CayGiangHuong_14 = new ol.format.GeoJSON();
var features_CayGiangHuong_14 = format_CayGiangHuong_14.readFeatures(json_CayGiangHuong_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CayGiangHuong_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CayGiangHuong_14.addFeatures(features_CayGiangHuong_14);
var lyr_CayGiangHuong_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CayGiangHuong_14, 
                style: style_CayGiangHuong_14,
                popuplayertitle: 'CayGiangHuong',
                interactive: true,
                title: '<img src="styles/legend/CayGiangHuong_14.png" /> CayGiangHuong'
            });
var format_ChaLaTrungDong_15 = new ol.format.GeoJSON();
var features_ChaLaTrungDong_15 = format_ChaLaTrungDong_15.readFeatures(json_ChaLaTrungDong_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ChaLaTrungDong_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ChaLaTrungDong_15.addFeatures(features_ChaLaTrungDong_15);
var lyr_ChaLaTrungDong_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ChaLaTrungDong_15, 
                style: style_ChaLaTrungDong_15,
                popuplayertitle: 'ChaLaTrungDong',
                interactive: true,
                title: '<img src="styles/legend/ChaLaTrungDong_15.png" /> ChaLaTrungDong'
            });
var format_CayBangLang_16 = new ol.format.GeoJSON();
var features_CayBangLang_16 = format_CayBangLang_16.readFeatures(json_CayBangLang_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CayBangLang_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CayBangLang_16.addFeatures(features_CayBangLang_16);
var lyr_CayBangLang_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CayBangLang_16, 
                style: style_CayBangLang_16,
                popuplayertitle: 'CayBangLang',
                interactive: true,
                title: '<img src="styles/legend/CayBangLang_16.png" /> CayBangLang'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_RG_PH_1.setVisible(true);lyr_DGT_304_2.setVisible(true);lyr_DGT_DLBD_3.setVisible(true);lyr_DGT_DT743A_4.setVisible(true);lyr_DGT_LHP_5.setVisible(true);lyr_DGT_MPTV_6.setVisible(true);lyr_DGT_NTMK_7.setVisible(true);lyr_DGT_TQD_8.setVisible(true);lyr_DGT_TVO_9.setVisible(true);lyr_CayBangDaiLoan_10.setVisible(true);lyr_CayMeTay_11.setVisible(true);lyr_CayDauRai_12.setVisible(true);lyr_CaySaoDen_13.setVisible(true);lyr_CayGiangHuong_14.setVisible(true);lyr_ChaLaTrungDong_15.setVisible(true);lyr_CayBangLang_16.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_RG_PH_1,lyr_DGT_304_2,lyr_DGT_DLBD_3,lyr_DGT_DT743A_4,lyr_DGT_LHP_5,lyr_DGT_MPTV_6,lyr_DGT_NTMK_7,lyr_DGT_TQD_8,lyr_DGT_TVO_9,lyr_CayBangDaiLoan_10,lyr_CayMeTay_11,lyr_CayDauRai_12,lyr_CaySaoDen_13,lyr_CayGiangHuong_14,lyr_ChaLaTrungDong_15,lyr_CayBangLang_16];
lyr_RG_PH_1.set('fieldAliases', {'GID_3': 'GID_3', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'GID_2': 'GID_2', 'NAME_2': 'NAME_2', 'NL_NAME_2': 'NL_NAME_2', 'NAME_3': 'NAME_3', 'VARNAME_3': 'VARNAME_3', 'NL_NAME_3': 'NL_NAME_3', 'TYPE_3': 'TYPE_3', 'ENGTYPE_3': 'ENGTYPE_3', 'CC_3': 'CC_3', 'HASC_3': 'HASC_3', });
lyr_DGT_304_2.set('fieldAliases', {'id': 'id', });
lyr_DGT_DLBD_3.set('fieldAliases', {'id': 'id', });
lyr_DGT_DT743A_4.set('fieldAliases', {'id': 'id', });
lyr_DGT_LHP_5.set('fieldAliases', {'id': 'id', });
lyr_DGT_MPTV_6.set('fieldAliases', {'id': 'id', });
lyr_DGT_NTMK_7.set('fieldAliases', {'id': 'id', });
lyr_DGT_TQD_8.set('fieldAliases', {'id': 'id', });
lyr_DGT_TVO_9.set('fieldAliases', {'id': 'id', 'Duong': 'Duong', });
lyr_CayBangDaiLoan_10.set('fieldAliases', {'STT': 'STT', 'X': 'X', 'Y': 'Y', 'Ten cay': 'Ten cay', 'Ten khoa hoc': 'Ten khoa hoc', 'Gioi': 'Gioi', 'Bo': 'Bo', 'Ho': 'Ho', 'Chi': 'Chi', 'Loai': 'Loai', 'Chu vi (cm)': 'Chu vi (cm)', 'Chieu cao (m)': 'Chieu cao (m)', 'Duong kinh (cm)': 'Duong kinh (cm)', 'Nguon goc, xuat xu': 'Nguon goc, xuat xu', });
lyr_CayMeTay_11.set('fieldAliases', {'STT': 'STT', 'X': 'X', 'Y': 'Y', 'Ten cay': 'Ten cay', 'Ten khoa hoc': 'Ten khoa hoc', 'Gioi': 'Gioi', 'Bo': 'Bo', 'Ho': 'Ho', 'Chi': 'Chi', 'Loai': 'Loai', 'Chu vi (cm)': 'Chu vi (cm)', 'Chieu cao (m)': 'Chieu cao (m)', 'Duong kinh (cm)': 'Duong kinh (cm)', 'Nguon goc, xuat xu': 'Nguon goc, xuat xu', });
lyr_CayDauRai_12.set('fieldAliases', {'STT': 'STT', 'X': 'X', 'Y': 'Y', 'Ten cay': 'Ten cay', 'Ten khoa hoc': 'Ten khoa hoc', 'Gioi': 'Gioi', 'Bo': 'Bo', 'Ho': 'Ho', 'Chi': 'Chi', 'Loai': 'Loai', 'Chu vi (cm)': 'Chu vi (cm)', 'Chieu cao (m)': 'Chieu cao (m)', 'Duong kinh (cm)': 'Duong kinh (cm)', 'Nguon goc, xuat xu': 'Nguon goc, xuat xu', });
lyr_CaySaoDen_13.set('fieldAliases', {'STT': 'STT', 'X': 'X', 'Y': 'Y', 'Ten cay': 'Ten cay', 'Ten khoa hoc': 'Ten khoa hoc', 'Gioi': 'Gioi', 'Bo': 'Bo', 'Ho': 'Ho', 'Chi': 'Chi', 'Loai': 'Loai', 'Chu vi (cm)': 'Chu vi (cm)', 'Chieu cao (m)': 'Chieu cao (m)', 'Duong kinh (cm)': 'Duong kinh (cm)', 'Nguon goc, xuat xu': 'Nguon goc, xuat xu', });
lyr_CayGiangHuong_14.set('fieldAliases', {'STT': 'STT', 'X': 'X', 'Y': 'Y', 'Ten cay': 'Ten cay', 'Ten khoa hoc': 'Ten khoa hoc', 'Gioi': 'Gioi', 'Bo': 'Bo', 'Ho': 'Ho', 'Chi': 'Chi', 'Loai': 'Loai', 'Chu vi (cm)': 'Chu vi (cm)', 'Chieu cao (m)': 'Chieu cao (m)', 'Duong kinh (cm)': 'Duong kinh (cm)', 'Nguon goc, xuat xu': 'Nguon goc, xuat xu', });
lyr_ChaLaTrungDong_15.set('fieldAliases', {'STT': 'STT', 'X': 'X', 'Y': 'Y', 'Ten cay': 'Ten cay', 'Ten khoa hoc': 'Ten khoa hoc', 'Gioi': 'Gioi', 'Bo': 'Bo', 'Ho': 'Ho', 'Chi': 'Chi', 'Loai': 'Loai', 'Chu vi (cm)': 'Chu vi (cm)', 'Chieu cao (m)': 'Chieu cao (m)', 'Duong kinh (cm)': 'Duong kinh (cm)', 'Nguon goc, xuat xu': 'Nguon goc, xuat xu', });
lyr_CayBangLang_16.set('fieldAliases', {'STT': 'STT', 'X': 'X', 'Y': 'Y', 'Ten cay': 'Ten cay', 'Ten khoa hoc': 'Ten khoa hoc', 'Gioi': 'Gioi', 'Bo': 'Bo', 'Ho': 'Ho', 'Chi': 'Chi', 'Loai': 'Loai', 'Chu vi (cm)': 'Chu vi (cm)', 'Chieu cao (m)': 'Chieu cao (m)', 'Duong kinh (cm)': 'Duong kinh (cm)', 'Nguon goc, xuat xu': 'Nguon goc, xuat xu', });
lyr_RG_PH_1.set('fieldImages', {'GID_3': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'GID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'NAME_3': 'TextEdit', 'VARNAME_3': 'TextEdit', 'NL_NAME_3': 'TextEdit', 'TYPE_3': 'TextEdit', 'ENGTYPE_3': 'TextEdit', 'CC_3': 'TextEdit', 'HASC_3': 'TextEdit', });
lyr_DGT_304_2.set('fieldImages', {'id': 'TextEdit', });
lyr_DGT_DLBD_3.set('fieldImages', {'id': 'TextEdit', });
lyr_DGT_DT743A_4.set('fieldImages', {'id': 'TextEdit', });
lyr_DGT_LHP_5.set('fieldImages', {'id': 'TextEdit', });
lyr_DGT_MPTV_6.set('fieldImages', {'id': 'TextEdit', });
lyr_DGT_NTMK_7.set('fieldImages', {'id': 'TextEdit', });
lyr_DGT_TQD_8.set('fieldImages', {'id': 'TextEdit', });
lyr_DGT_TVO_9.set('fieldImages', {'id': 'TextEdit', 'Duong': 'TextEdit', });
lyr_CayBangDaiLoan_10.set('fieldImages', {'STT': 'Range', 'X': 'TextEdit', 'Y': 'TextEdit', 'Ten cay': 'TextEdit', 'Ten khoa hoc': 'TextEdit', 'Gioi': 'TextEdit', 'Bo': 'TextEdit', 'Ho': 'TextEdit', 'Chi': 'TextEdit', 'Loai': 'TextEdit', 'Chu vi (cm)': 'TextEdit', 'Chieu cao (m)': 'TextEdit', 'Duong kinh (cm)': 'TextEdit', 'Nguon goc, xuat xu': 'TextEdit', });
lyr_CayMeTay_11.set('fieldImages', {'STT': 'Range', 'X': 'TextEdit', 'Y': 'TextEdit', 'Ten cay': 'TextEdit', 'Ten khoa hoc': 'TextEdit', 'Gioi': 'TextEdit', 'Bo': 'TextEdit', 'Ho': 'TextEdit', 'Chi': 'TextEdit', 'Loai': 'TextEdit', 'Chu vi (cm)': 'TextEdit', 'Chieu cao (m)': 'TextEdit', 'Duong kinh (cm)': 'TextEdit', 'Nguon goc, xuat xu': 'TextEdit', });
lyr_CayDauRai_12.set('fieldImages', {'STT': 'Range', 'X': 'TextEdit', 'Y': 'TextEdit', 'Ten cay': 'TextEdit', 'Ten khoa hoc': 'TextEdit', 'Gioi': 'TextEdit', 'Bo': 'TextEdit', 'Ho': 'TextEdit', 'Chi': 'TextEdit', 'Loai': 'TextEdit', 'Chu vi (cm)': 'TextEdit', 'Chieu cao (m)': 'TextEdit', 'Duong kinh (cm)': 'TextEdit', 'Nguon goc, xuat xu': 'TextEdit', });
lyr_CaySaoDen_13.set('fieldImages', {'STT': 'Range', 'X': 'TextEdit', 'Y': 'TextEdit', 'Ten cay': 'TextEdit', 'Ten khoa hoc': 'TextEdit', 'Gioi': 'TextEdit', 'Bo': 'TextEdit', 'Ho': 'TextEdit', 'Chi': 'TextEdit', 'Loai': 'TextEdit', 'Chu vi (cm)': 'TextEdit', 'Chieu cao (m)': 'TextEdit', 'Duong kinh (cm)': 'TextEdit', 'Nguon goc, xuat xu': 'TextEdit', });
lyr_CayGiangHuong_14.set('fieldImages', {'STT': 'Range', 'X': 'TextEdit', 'Y': 'TextEdit', 'Ten cay': 'TextEdit', 'Ten khoa hoc': 'TextEdit', 'Gioi': 'TextEdit', 'Bo': 'TextEdit', 'Ho': 'TextEdit', 'Chi': 'TextEdit', 'Loai': 'TextEdit', 'Chu vi (cm)': 'TextEdit', 'Chieu cao (m)': 'TextEdit', 'Duong kinh (cm)': 'TextEdit', 'Nguon goc, xuat xu': 'TextEdit', });
lyr_ChaLaTrungDong_15.set('fieldImages', {'STT': 'Range', 'X': 'TextEdit', 'Y': 'TextEdit', 'Ten cay': 'TextEdit', 'Ten khoa hoc': 'TextEdit', 'Gioi': 'TextEdit', 'Bo': 'TextEdit', 'Ho': 'TextEdit', 'Chi': 'TextEdit', 'Loai': 'TextEdit', 'Chu vi (cm)': 'TextEdit', 'Chieu cao (m)': 'TextEdit', 'Duong kinh (cm)': 'TextEdit', 'Nguon goc, xuat xu': 'TextEdit', });
lyr_CayBangLang_16.set('fieldImages', {'STT': 'Range', 'X': 'TextEdit', 'Y': 'TextEdit', 'Ten cay': 'TextEdit', 'Ten khoa hoc': 'TextEdit', 'Gioi': 'TextEdit', 'Bo': 'TextEdit', 'Ho': 'TextEdit', 'Chi': 'TextEdit', 'Loai': 'TextEdit', 'Chu vi (cm)': 'TextEdit', 'Chieu cao (m)': 'TextEdit', 'Duong kinh (cm)': 'TextEdit', 'Nguon goc, xuat xu': 'TextEdit', });
lyr_RG_PH_1.set('fieldLabels', {'GID_3': 'no label', 'GID_0': 'no label', 'COUNTRY': 'inline label - always visible', 'GID_1': 'no label', 'NAME_1': 'no label', 'NL_NAME_1': 'no label', 'GID_2': 'no label', 'NAME_2': 'no label', 'NL_NAME_2': 'no label', 'NAME_3': 'no label', 'VARNAME_3': 'no label', 'NL_NAME_3': 'no label', 'TYPE_3': 'no label', 'ENGTYPE_3': 'no label', 'CC_3': 'no label', 'HASC_3': 'no label', });
lyr_DGT_304_2.set('fieldLabels', {'id': 'no label', });
lyr_DGT_DLBD_3.set('fieldLabels', {'id': 'no label', });
lyr_DGT_DT743A_4.set('fieldLabels', {'id': 'no label', });
lyr_DGT_LHP_5.set('fieldLabels', {'id': 'no label', });
lyr_DGT_MPTV_6.set('fieldLabels', {'id': 'no label', });
lyr_DGT_NTMK_7.set('fieldLabels', {'id': 'no label', });
lyr_DGT_TQD_8.set('fieldLabels', {'id': 'no label', });
lyr_DGT_TVO_9.set('fieldLabels', {'id': 'no label', 'Duong': 'no label', });
lyr_CayBangDaiLoan_10.set('fieldLabels', {'STT': 'no label', 'X': 'no label', 'Y': 'no label', 'Ten cay': 'no label', 'Ten khoa hoc': 'no label', 'Gioi': 'no label', 'Bo': 'no label', 'Ho': 'no label', 'Chi': 'no label', 'Loai': 'no label', 'Chu vi (cm)': 'no label', 'Chieu cao (m)': 'no label', 'Duong kinh (cm)': 'no label', 'Nguon goc, xuat xu': 'no label', });
lyr_CayMeTay_11.set('fieldLabels', {'STT': 'no label', 'X': 'no label', 'Y': 'no label', 'Ten cay': 'no label', 'Ten khoa hoc': 'no label', 'Gioi': 'no label', 'Bo': 'no label', 'Ho': 'no label', 'Chi': 'no label', 'Loai': 'no label', 'Chu vi (cm)': 'no label', 'Chieu cao (m)': 'no label', 'Duong kinh (cm)': 'no label', 'Nguon goc, xuat xu': 'no label', });
lyr_CayDauRai_12.set('fieldLabels', {'STT': 'no label', 'X': 'no label', 'Y': 'no label', 'Ten cay': 'no label', 'Ten khoa hoc': 'no label', 'Gioi': 'no label', 'Bo': 'no label', 'Ho': 'no label', 'Chi': 'no label', 'Loai': 'no label', 'Chu vi (cm)': 'no label', 'Chieu cao (m)': 'no label', 'Duong kinh (cm)': 'no label', 'Nguon goc, xuat xu': 'no label', });
lyr_CaySaoDen_13.set('fieldLabels', {'STT': 'no label', 'X': 'no label', 'Y': 'no label', 'Ten cay': 'no label', 'Ten khoa hoc': 'no label', 'Gioi': 'no label', 'Bo': 'no label', 'Ho': 'no label', 'Chi': 'no label', 'Loai': 'no label', 'Chu vi (cm)': 'no label', 'Chieu cao (m)': 'no label', 'Duong kinh (cm)': 'no label', 'Nguon goc, xuat xu': 'no label', });
lyr_CayGiangHuong_14.set('fieldLabels', {'STT': 'no label', 'X': 'no label', 'Y': 'no label', 'Ten cay': 'no label', 'Ten khoa hoc': 'no label', 'Gioi': 'no label', 'Bo': 'no label', 'Ho': 'no label', 'Chi': 'no label', 'Loai': 'no label', 'Chu vi (cm)': 'no label', 'Chieu cao (m)': 'no label', 'Duong kinh (cm)': 'no label', 'Nguon goc, xuat xu': 'no label', });
lyr_ChaLaTrungDong_15.set('fieldLabels', {'STT': 'no label', 'X': 'no label', 'Y': 'no label', 'Ten cay': 'no label', 'Ten khoa hoc': 'no label', 'Gioi': 'no label', 'Bo': 'no label', 'Ho': 'no label', 'Chi': 'no label', 'Loai': 'no label', 'Chu vi (cm)': 'no label', 'Chieu cao (m)': 'no label', 'Duong kinh (cm)': 'no label', 'Nguon goc, xuat xu': 'no label', });
lyr_CayBangLang_16.set('fieldLabels', {'STT': 'no label', 'X': 'no label', 'Y': 'no label', 'Ten cay': 'no label', 'Ten khoa hoc': 'no label', 'Gioi': 'no label', 'Bo': 'no label', 'Ho': 'no label', 'Chi': 'no label', 'Loai': 'no label', 'Chu vi (cm)': 'no label', 'Chieu cao (m)': 'no label', 'Duong kinh (cm)': 'no label', 'Nguon goc, xuat xu': 'no label', });
lyr_CayBangLang_16.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});