// pages/home/home.js
const app = getApp()
// console.log(app)
Page({

    /**
     * 页面的初始数据
     */
    data: {
      list: [
        {
            "id": 1,
            "title": "户型南北通透全明户型精装修自住房子保养好 看房方便",
            "desc": "2室2厅/99.54m²/南 北/南阳路136号院",
            "keyword": "新上",
            "price": 102,
            "price1": "10247元/平",
            "img": "https://ke-image.ljcdn.com/410100-inspection/pc1_GwdJwPrFR_1.jpg!m_fill,w_210,h_164,f_jpg?from=ke.com",
            "rob": "新郑大抢手房源榜第4名",
            "img1": "https://vrlab-image4.ljcdn.com/release/auto3dhd/c1828be2f9e997667b0a7923368f2143/screenshot/1588120625_0/pc0_7PMKmiaz8.jpg?imageMogr2/quality/70/thumbnail/1024x",
            "img2": "https://ke-image.ljcdn.com/110000-inspection/pc0_aqnV8AaUt_1.jpg!m_fill,w_1000,h_750,lg_north_west,lx_0,ly_0,l_fbk,f_jpg,ls_50?from=ke.com",
            "img3": "https://ke-image.ljcdn.com/110000-inspection/apc_KVy3ZIVi6_1.jpg!m_fill,w_1000,h_750,lg_north_west,lx_0,ly_0,l_fbk,f_jpg,ls_50?from=ke.com",
            "img4": "https://vrlab-image4.ljcdn.com/release/auto3dhd/781c6389fa6e86d97c4315298282b9e9/screenshot/1586593094_5/pc0_dQiiijM0m.jpg?imageMogr2/quality/70/thumbnail/1024x",
            "img5": "https://ke-image.ljcdn.com/110000-inspection/pc0_UE7XYASfP_1.jpg!m_fill,w_1000,h_750,lg_north_west,lx_0,ly_0,l_fbk,f_jpg,ls_50?from=ke.com",
            "typehouse": "https://ke-image.ljcdn.com/hdic-frame/standard_1eee27e5-2a5c-4abb-ba04-5d869c2a4990.png!m_fill,w_1000,h_750,l_bk,f_jpg,ls_50?from=ke.com",
            "year": "2013年",
            "room": "25.65m²/南/普通窗",
            "bedroomA": "12.65m²/南/普通窗",
            "bedroomB": "11.65m²/南/落地窗",
            "star": "0"
        },
        {
            "id": 2,
            "title": "业主急售   满五   带家具家电",
            "desc": "2室2厅/86.35m²/南/21世纪国际城",
            "keyword": "新上",
            "price": 73,
            "price1": "8454元/平",
            "img": "https://ke-image.ljcdn.com/410100-inspection/pc1_sVoJNyYSG_1.jpg!m_fill,w_210,h_164,f_jpg?from=ke.com",
            "rob": "水上乐园抢手房源榜第4名",
            "img1": "https://ke-image.ljcdn.com/110000-inspection/pc0_UE7XYASfP_1.jpg!m_fill,w_1000,h_750,lg_north_west,lx_0,ly_0,l_fbk,f_jpg,ls_50?from=ke.com",
            "img2": "https://ke-image.ljcdn.com/110000-inspection/pc0_iQME4mQHu_1.jpg!m_fill,w_1000,h_750,lg_north_west,lx_0,ly_0,l_fbk,f_jpg,ls_50?from=ke.com",
            "img3": "https://ke-image.ljcdn.com/110000-inspection/apc_KVy3ZIVi6_1.jpg!m_fill,w_1000,h_750,lg_north_west,lx_0,ly_0,l_fbk,f_jpg,ls_50?from=ke.com",
            "img4": "https://vrlab-image4.ljcdn.com/release/auto3dhd/781c6389fa6e86d97c4315298282b9e9/screenshot/1586593094_5/pc0_dQiiijM0m.jpg?imageMogr2/quality/70/thumbnail/1024x",
            "img5": "https://ke-image.ljcdn.com/110000-inspection/pc0_UE7XYASfP_1.jpg!m_fill,w_1000,h_750,lg_north_west,lx_0,ly_0,l_fbk,f_jpg,ls_50?from=ke.com",
            "typehouse": "https://ke-image.ljcdn.com/hdic-frame/prod-f19c3716-9621-42b6-8ed4-128312cf847b.png!m_fill,w_1000,h_750,l_bk,f_jpg,ls_50?from=ke.com",
            "year": "2015年",
            "room": "30m²/南/普通窗",
            "bedroomA": "16.87m²/南/普通窗",
            "bedroomB": "16.87m²/南/普通窗",
            "star": "0"
        },
        {
            "id": 3,
            "title": "绿荫公园旁精装小两房满五唯一 看房随叫随到 先到先得",
            "desc": "2室1厅/71.77m²/西/天明国际公寓",
            "keyword": "随时可看",
            "price": 105,
            "price1": "14630元/平",
            "img": "https://ke-image.ljcdn.com/110000-inspection/pc1_RwwFp5q3V_1.jpg!m_fill,w_210,h_164,f_jpg?from=ke.com",
            "rob": "经五路抢手房源榜第1名",
            "img1": "https://ke-image.ljcdn.com/110000-inspection/pc0_iQME4mQHu_1.jpg!m_fill,w_1000,h_750,lg_north_west,lx_0,ly_0,l_fbk,f_jpg,ls_50?from=ke.com",
            "img2": "https://ke-image.ljcdn.com/110000-inspection/pc0_UE7XYASfP_1.jpg!m_fill,w_1000,h_750,lg_north_west,lx_0,ly_0,l_fbk,f_jpg,ls_50?from=ke.com",
            "img3": "https://vrlab-image4.ljcdn.com/release/auto3dhd/781c6389fa6e86d97c4315298282b9e9/screenshot/1586593094_5/pc0_dQiiijM0m.jpg?imageMogr2/quality/70/thumbnail/1024x",
            "img4": "https://ke-image.ljcdn.com/110000-inspection/pc0_iQME4mQHu_1.jpg!m_fill,w_1000,h_750,lg_north_west,lx_0,ly_0,l_fbk,f_jpg,ls_50?from=ke.com",
            "img5": "https://ke-image.ljcdn.com/110000-inspection/apc_KVy3ZIVi6_1.jpg!m_fill,w_1000,h_750,lg_north_west,lx_0,ly_0,l_fbk,f_jpg,ls_50?from=ke.com",
            "typehouse": "https://ke-image.ljcdn.com/hdic-frame/prod-87aac127-c2bb-491b-a688-170e4311d328.png!m_fill,w_1000,h_750,l_bk,f_jpg,ls_50?from=ke.com",
            "year": "2020年",
            "room": "25.65m²/南/普通窗",
            "bedroomA": "19.68m²/南/普通窗",
            "bedroomB": "21.35m²/南/普通窗",
            "star": "1"
        },
        {
            "id": 4,
            "title": "临湖观景，税费低，业主诚心随时看！！！",
            "desc": "1室0厅/49.38m²/西北/龙子湖微时代",
            "keyword": "随时可看\n地铁",
            "price": 47,
            "price1": "9417元/平",
            "img": "https://ke-image.ljcdn.com/110000-inspection/pc1_ivSH3Ofzb_1.jpg!m_fill,w_210,h_164,f_jpg?from=ke.com",
            "rob": "大石桥抢手房源榜第2名",
            "img1": "https://vrlab-image4.ljcdn.com/release/auto3dhd/781c6389fa6e86d97c4315298282b9e9/screenshot/1586593094_5/pc0_dQiiijM0m.jpg?imageMogr2/quality/70/thumbnail/1024x",
            "img2": "https://ke-image.ljcdn.com/110000-inspection/pc0_lu3ynhABt_1.jpg!m_fill,w_1000,h_750,lg_north_west,lx_0,ly_0,l_fbk,f_jpg,ls_50?from=ke.com",
            "img3": "https://ke-image.ljcdn.com/110000-inspection/pc0_UE7XYASfP_1.jpg!m_fill,w_1000,h_750,lg_north_west,lx_0,ly_0,l_fbk,f_jpg,ls_50?from=ke.com",
            "img4": "https://ke-image.ljcdn.com/110000-inspection/pc0_iQME4mQHu_1.jpg!m_fill,w_1000,h_750,lg_north_west,lx_0,ly_0,l_fbk,f_jpg,ls_50?from=ke.com",
            "img5": "https://ke-image.ljcdn.com/110000-inspection/pc0_iQME4mQHu_1.jpg!m_fill,w_1000,h_750,lg_north_west,lx_0,ly_0,l_fbk,f_jpg,ls_50?from=ke.com",
            "typehouse": "https://ke-image.ljcdn.com/hdic-frame/standard_1eee27e5-2a5c-4abb-ba04-5d869c2a4990.png!m_fill,w_1000,h_750,l_bk,f_jpg,ls_50?from=ke.com",
            "year": "2008年",
            "room": "30m²/南/普通窗",
            "bedroomA": "19.68m²/南/普通窗",
            "bedroomB": "16.87m²/南/普通窗",
            "star": "0"
        },
        {
            "id": 5,
            "title": "锦艺国际华都美域改房源户型方正 业主诚心出售",
            "desc": "3室2厅/86m²/南/锦艺国际华都美域",
            "keyword": "随时可看\n地铁",
            "price": 165,
            "price1": "19128元/平",
            "img": "https://ke-image.ljcdn.com/110000-inspection/pc1_RZH0gziSo_1.jpg!m_fill,w_210,h_164,f_jpg?from=ke.com",
            "rob": "索凌路北段抢手房源榜第6名",
            "img1": "https://ke-image.ljcdn.com/110000-inspection/apc_KVy3ZIVi6_1.jpg!m_fill,w_1000,h_750,lg_north_west,lx_0,ly_0,l_fbk,f_jpg,ls_50?from=ke.com",
            "img2": "https://ke-image.ljcdn.com/110000-inspection/pc0_UE7XYASfP_1.jpg!m_fill,w_1000,h_750,lg_north_west,lx_0,ly_0,l_fbk,f_jpg,ls_50?from=ke.com",
            "img3": "https://ke-image.ljcdn.com/110000-inspection/apc_KVy3ZIVi6_1.jpg!m_fill,w_1000,h_750,lg_north_west,lx_0,ly_0,l_fbk,f_jpg,ls_50?from=ke.com",
            "img4": "https://vrlab-image4.ljcdn.com/release/auto3dhd/781c6389fa6e86d97c4315298282b9e9/screenshot/1586593094_5/pc0_dQiiijM0m.jpg?imageMogr2/quality/70/thumbnail/1024x",
            "img5": "https://ke-image.ljcdn.com/110000-inspection/pc0_iQME4mQHu_1.jpg!m_fill,w_1000,h_750,lg_north_west,lx_0,ly_0,l_fbk,f_jpg,ls_50?from=ke.com",
            "typehouse": "https://ke-image.ljcdn.com/hdic-frame/prod-f19c3716-9621-42b6-8ed4-128312cf847b.png!m_fill,w_1000,h_750,l_bk,f_jpg,ls_50?from=ke.com",
            "year": "2003年",
            "room": "25.65m²/南/普通窗",
            "bedroomA": "12.65m²/南/普通窗",
            "bedroomB": "16.87m²/南/普通窗",
            "star": "0"
        },
        {
            "id": 6,
            "title": "证件齐全，业主诚心出售，随时签合同。",
            "desc": "2室1厅/90.11m²/南/珠江荣景",
            "keyword": "随时可看",
            "price": 102,
            "price1": "11320元/平",
            "img": "https://ke-image.ljcdn.com/410100-inspection/pc1_GwdJwPrFR_1.jpg!m_fill,w_210,h_164,f_jpg?from=ke.com",
            "rob": "经五路抢手房源榜第1名",
            "img1": "https://vrlab-image4.ljcdn.com/release/auto3dhd/781c6389fa6e86d97c4315298282b9e9/screenshot/1586593094_5/pc0_dQiiijM0m.jpg?imageMogr2/quality/70/thumbnail/1024x",
            "img2": "https://ke-image.ljcdn.com/110000-inspection/pc0_iQME4mQHu_1.jpg!m_fill,w_1000,h_750,lg_north_west,lx_0,ly_0,l_fbk,f_jpg,ls_50?from=ke.com",
            "img3": "https://ke-image.ljcdn.com/110000-inspection/pc0_UE7XYASfP_1.jpg!m_fill,w_1000,h_750,lg_north_west,lx_0,ly_0,l_fbk,f_jpg,ls_50?from=ke.com",
            "img4": "https://ke-image.ljcdn.com/110000-inspection/pc0_iQME4mQHu_1.jpg!m_fill,w_1000,h_750,lg_north_west,lx_0,ly_0,l_fbk,f_jpg,ls_50?from=ke.com",
            "img5": "https://ke-image.ljcdn.com/110000-inspection/apc_KVy3ZIVi6_1.jpg!m_fill,w_1000,h_750,lg_north_west,lx_0,ly_0,l_fbk,f_jpg,ls_50?from=ke.com",
            "typehouse": "https://ke-image.ljcdn.com/hdic-frame/prod-87aac127-c2bb-491b-a688-170e4311d328.png!m_fill,w_1000,h_750,l_bk,f_jpg,ls_50?from=ke.com",
            "year": "2008年",
            "room": "11.65m²/南/落地窗",
            "bedroomA": "19.68m²/南/普通窗",
            "bedroomB": "12.65m²/南/普通窗",
            "star": "1"
        },
        {
            "id": 7,
            "title": "满五唯一，标准一室一厅，采光好，拎包入住",
            "desc": "1室1厅/48.4m²/东 西/亚新美好时光",
            "keyword": "随时可看",
            "price": 64,
            "price1": "13223元/平",
            "img": "https://ke-image.ljcdn.com/410100-inspection/pc1_sVoJNyYSG_1.jpg!m_fill,w_210,h_164,f_jpg?from=ke.com",
            "rob": "水上乐园抢手房源榜第4名",
            "img1": "https://ke-image.ljcdn.com/110000-inspection/pc0_UE7XYASfP_1.jpg!m_fill,w_1000,h_750,lg_north_west,lx_0,ly_0,l_fbk,f_jpg,ls_50?from=ke.com",
            "img2": "https://ke-image.ljcdn.com/110000-inspection/pc0_iQME4mQHu_1.jpg!m_fill,w_1000,h_750,lg_north_west,lx_0,ly_0,l_fbk,f_jpg,ls_50?from=ke.com",
            "img3": "https://vrlab-image4.ljcdn.com/release/auto3dhd/781c6389fa6e86d97c4315298282b9e9/screenshot/1586593094_5/pc0_dQiiijM0m.jpg?imageMogr2/quality/70/thumbnail/1024x",
            "img4": "https://ke-image.ljcdn.com/110000-inspection/pc0_lu3ynhABt_1.jpg!m_fill,w_1000,h_750,lg_north_west,lx_0,ly_0,l_fbk,f_jpg,ls_50?from=ke.com",
            "img5": "https://ke-image.ljcdn.com/110000-inspection/pc0_iQME4mQHu_1.jpg!m_fill,w_1000,h_750,lg_north_west,lx_0,ly_0,l_fbk,f_jpg,ls_50?from=ke.com",
            "typehouse": "https://ke-image.ljcdn.com/hdic-frame/standard_1eee27e5-2a5c-4abb-ba04-5d869c2a4990.png!m_fill,w_1000,h_750,l_bk,f_jpg,ls_50?from=ke.com",
            "year": "2012年",
            "room": "30m²/南/普通窗",
            "bedroomA": "16.87m²/南/普通窗",
            "bedroomB": "19.68m²/南/普通窗",
            "star": "0"
        },
        {
            "id": 8,
            "title": "永恒理想世界三期 2室1厅 南",
            "desc": "2室1厅/96.15m²/南/永恒理想世界三期",
            "keyword": "随时可看\n地铁",
            "price": 145,
            "price1": "15081元/平",
            "img": "https://ke-image.ljcdn.com/110000-inspection/pc1_ivSH3Ofzb_1.jpg!m_fill,w_210,h_164,f_jpg?from=ke.com",
            "rob": "索凌路北段抢手房源榜第6名",
            "img1": "https://ke-image.ljcdn.com/110000-inspection/pc0_iQME4mQHu_1.jpg!m_fill,w_1000,h_750,lg_north_west,lx_0,ly_0,l_fbk,f_jpg,ls_50?from=ke.com",
            "img2": "https://ke-image.ljcdn.com/110000-inspection/apc_KVy3ZIVi6_1.jpg!m_fill,w_1000,h_750,lg_north_west,lx_0,ly_0,l_fbk,f_jpg,ls_50?from=ke.com",
            "img3": "https://ke-image.ljcdn.com/110000-inspection/pc0_iQME4mQHu_1.jpg!m_fill,w_1000,h_750,lg_north_west,lx_0,ly_0,l_fbk,f_jpg,ls_50?from=ke.com",
            "img4": "https://ke-image.ljcdn.com/110000-inspection/pc0_UE7XYASfP_1.jpg!m_fill,w_1000,h_750,lg_north_west,lx_0,ly_0,l_fbk,f_jpg,ls_50?from=ke.com",
            "img5": "https://vrlab-image4.ljcdn.com/release/auto3dhd/781c6389fa6e86d97c4315298282b9e9/screenshot/1586593094_5/pc0_dQiiijM0m.jpg?imageMogr2/quality/70/thumbnail/1024x",
            "typehouse": "https://ke-image.ljcdn.com/hdic-frame/prod-f19c3716-9621-42b6-8ed4-128312cf847b.png!m_fill,w_1000,h_750,l_bk,f_jpg,ls_50?from=ke.com",
            "year": "2015年",
            "room": "30m²/南/普通窗",
            "bedroomA": "11.65m²/南/落地窗",
            "bedroomB": "19.68m²/南/普通窗",
            "star": "0"
        },
        {
            "id": 9,
            "title": "正商瑞钻 2室1厅 南",
            "desc": "2室1厅/83.4m²/南/正商瑞钻",
            "keyword": "随时可看\n地铁",
            "price": 76,
            "price1": "9113元/平",
            "img": "https://ke-image.ljcdn.com/110000-inspection/pc1_RwwFp5q3V_1.jpg!m_fill,w_210,h_164,f_jpg?from=ke.com",
            "rob": "新郑大抢手房源榜第4名",
            "img1": "https://ke-image.ljcdn.com/110000-inspection/pc0_iQME4mQHu_1.jpg!m_fill,w_1000,h_750,lg_north_west,lx_0,ly_0,l_fbk,f_jpg,ls_50?from=ke.com",
            "img2": "https://vrlab-image4.ljcdn.com/release/auto3dhd/781c6389fa6e86d97c4315298282b9e9/screenshot/1586593094_5/pc0_dQiiijM0m.jpg?imageMogr2/quality/70/thumbnail/1024x",
            "img3": "https://ke-image.ljcdn.com/110000-inspection/pc0_lu3ynhABt_1.jpg!m_fill,w_1000,h_750,lg_north_west,lx_0,ly_0,l_fbk,f_jpg,ls_50?from=ke.com",
            "img4": "https://ke-image.ljcdn.com/110000-inspection/pc0_iQME4mQHu_1.jpg!m_fill,w_1000,h_750,lg_north_west,lx_0,ly_0,l_fbk,f_jpg,ls_50?from=ke.com",
            "img5": "https://ke-image.ljcdn.com/110000-inspection/pc0_lu3ynhABt_1.jpg!m_fill,w_1000,h_750,lg_north_west,lx_0,ly_0,l_fbk,f_jpg,ls_50?from=ke.com",
            "typehouse": "https://ke-image.ljcdn.com/hdic-frame/prod-87aac127-c2bb-491b-a688-170e4311d328.png!m_fill,w_1000,h_750,l_bk,f_jpg,ls_50?from=ke.com",
            "year": "2020年",
            "room": "25.65m²/南/普通窗",
            "bedroomA": "21.35m²/南/普通窗",
            "bedroomB": "12.65m²/南/普通窗",
            "star": "0"
        },
        {
            "id": 10,
            "title": "二环内 满五年唯一 南北通透  三房中间层",
            "desc": "3室1厅/115.86m²/南 北/兴华南街64号",
            "keyword": "随时可看",
            "price": 120,
            "price1": "10357元/平",
            "img": "https://ke-image.ljcdn.com/410100-inspection/pc1_GwdJwPrFR_1.jpg!m_fill,w_210,h_164,f_jpg?from=ke.com",
            "rob": "大石桥抢手房源榜第2名",
            "img1": "https://ke-image.ljcdn.com/110000-inspection/pc0_UE7XYASfP_1.jpg!m_fill,w_1000,h_750,lg_north_west,lx_0,ly_0,l_fbk,f_jpg,ls_50?from=ke.com",
            "img2": "https://ke-image.ljcdn.com/110000-inspection/pc0_lu3ynhABt_1.jpg!m_fill,w_1000,h_750,lg_north_west,lx_0,ly_0,l_fbk,f_jpg,ls_50?from=ke.com",
            "img3": "https://ke-image.ljcdn.com/110000-inspection/pc0_iQME4mQHu_1.jpg!m_fill,w_1000,h_750,lg_north_west,lx_0,ly_0,l_fbk,f_jpg,ls_50?from=ke.com",
            "img4": "https://ke-image.ljcdn.com/110000-inspection/pc0_lu3ynhABt_1.jpg!m_fill,w_1000,h_750,lg_north_west,lx_0,ly_0,l_fbk,f_jpg,ls_50?from=ke.com",
            "img5": "https://ke-image.ljcdn.com/110000-inspection/pc0_iQME4mQHu_1.jpg!m_fill,w_1000,h_750,lg_north_west,lx_0,ly_0,l_fbk,f_jpg,ls_50?from=ke.com",
            "typehouse": "https://ke-image.ljcdn.com/hdic-frame/standard_1eee27e5-2a5c-4abb-ba04-5d869c2a4990.png!m_fill,w_1000,h_750,l_bk,f_jpg,ls_50?from=ke.com",
            "year": "2013年",
            "room": "11.65m²/南/落地窗",
            "bedroomA": "11.65m²/南/落地窗",
            "bedroomB": "19.68m²/南/普通窗",
            "star": "0"
        },
        {
            "id": 11,
            "title": "三环内 2011年小区 百万朝南小两房 满五唯一",
            "desc": "2室2厅/83.96m²/南/豫景园",
            "keyword": "新上",
            "price": 101,
            "price1": "12030元/平",
            "img": "https://ke-image.ljcdn.com/110000-inspection/pc1_ivSH3Ofzb_1.jpg!m_fill,w_210,h_164,f_jpg?from=ke.com",
            "rob": "经五路抢手房源榜第1名",
            "img1": "https://ke-image.ljcdn.com/110000-inspection/pc0_iQME4mQHu_1.jpg!m_fill,w_1000,h_750,lg_north_west,lx_0,ly_0,l_fbk,f_jpg,ls_50?from=ke.com",
            "img2": "https://vrlab-image4.ljcdn.com/release/auto3dhd/781c6389fa6e86d97c4315298282b9e9/screenshot/1586593094_5/pc0_dQiiijM0m.jpg?imageMogr2/quality/70/thumbnail/1024x",
            "img3": "https://vrlab-image4.ljcdn.com/release/auto3dhd/781c6389fa6e86d97c4315298282b9e9/screenshot/1586593094_5/pc0_dQiiijM0m.jpg?imageMogr2/quality/70/thumbnail/1024x",
            "img4": "https://vrlab-image4.ljcdn.com/release/auto3dhd/781c6389fa6e86d97c4315298282b9e9/screenshot/1586593094_5/pc0_dQiiijM0m.jpg?imageMogr2/quality/70/thumbnail/1024x",
            "img5": "https://ke-image.ljcdn.com/110000-inspection/pc0_UE7XYASfP_1.jpg!m_fill,w_1000,h_750,lg_north_west,lx_0,ly_0,l_fbk,f_jpg,ls_50?from=ke.com",
            "typehouse": "https://ke-image.ljcdn.com/hdic-frame/prod-f19c3716-9621-42b6-8ed4-128312cf847b.png!m_fill,w_1000,h_750,l_bk,f_jpg,ls_50?from=ke.com",
            "year": "2011年",
            "room": "30m²/南/普通窗",
            "bedroomA": "19.68m²/南/普通窗",
            "bedroomB": "21.35m²/南/普通窗",
            "star": "0"
        },
        {
            "id": 12,
            "title": "小区中间位置 楼下水系  业主急售带车位",
            "desc": "3室2厅/127.4m²/北/永威翡翠城",
            "keyword": "随时可看",
            "price": 350,
            "price1": "27473元/平",
            "img": "https://ke-image.ljcdn.com/110000-inspection/pc1_RwwFp5q3V_1.jpg!m_fill,w_210,h_164,f_jpg?from=ke.com",
            "rob": "新郑大抢手房源榜第4名",
            "img1": "https://vrlab-image4.ljcdn.com/release/auto3dhd/2050ee1c758e996f18408d5385c98803/screenshot/1572404387_10/pc0_bSR6W0Dk9.jpg?imageMogr2/quality/70/thumbnail/1024x",
            "img2": "https://ke-image.ljcdn.com/110000-inspection/pc0_UE7XYASfP_1.jpg!m_fill,w_1000,h_750,lg_north_west,lx_0,ly_0,l_fbk,f_jpg,ls_50?from=ke.com",
            "img3": "https://ke-image.ljcdn.com/110000-inspection/pc0_iQME4mQHu_1.jpg!m_fill,w_1000,h_750,lg_north_west,lx_0,ly_0,l_fbk,f_jpg,ls_50?from=ke.com",
            "img4": "https://ke-image.ljcdn.com/110000-inspection/pc0_lu3ynhABt_1.jpg!m_fill,w_1000,h_750,lg_north_west,lx_0,ly_0,l_fbk,f_jpg,ls_50?from=ke.com",
            "img5": "https://ke-image.ljcdn.com/110000-inspection/pc0_iQME4mQHu_1.jpg!m_fill,w_1000,h_750,lg_north_west,lx_0,ly_0,l_fbk,f_jpg,ls_50?from=ke.com",
            "typehouse": "https://ke-image.ljcdn.com/hdic-frame/prod-f19c3716-9621-42b6-8ed4-128312cf847b.png!m_fill,w_1000,h_750,l_bk,f_jpg,ls_50?from=ke.com",
            "year": "2018年",
            "room": "25.65m²/南/普通窗",
            "bedroomA": "11.65m²/南/落地窗",
            "bedroomB": "19.68m²/南/普通窗",
            "star": "0"
        },
        {
            "id": 13,
            "title": "丰乐花苑 精装1室1厅 多层1楼冬暖夏凉 有车位",
            "desc": "1室1厅/41m²/西/丰乐花苑",
            "keyword": "随时可看",
            "price": 59,
            "price1": "14390元/平",
            "img": "https://ke-image.ljcdn.com/410100-inspection/pc1_GwdJwPrFR_1.jpg!m_fill,w_210,h_164,f_jpg?from=ke.com",
            "rob": "经五路抢手房源榜第1名",
            "img1": "https://ke-image.ljcdn.com/110000-inspection/pc0_UE7XYASfP_1.jpg!m_fill,w_1000,h_750,lg_north_west,lx_0,ly_0,l_fbk,f_jpg,ls_50?from=ke.com",
            "img2": "https://ke-image.ljcdn.com/110000-inspection/apc_KVy3ZIVi6_1.jpg!m_fill,w_1000,h_750,lg_north_west,lx_0,ly_0,l_fbk,f_jpg,ls_50?from=ke.com",
            "img3": "https://ke-image.ljcdn.com/110000-inspection/pc0_lu3ynhABt_1.jpg!m_fill,w_1000,h_750,lg_north_west,lx_0,ly_0,l_fbk,f_jpg,ls_50?from=ke.com",
            "img4": "https://ke-image.ljcdn.com/110000-inspection/pc0_iQME4mQHu_1.jpg!m_fill,w_1000,h_750,lg_north_west,lx_0,ly_0,l_fbk,f_jpg,ls_50?from=ke.com",
            "img5": "https://vrlab-image4.ljcdn.com/release/auto3dhd/2050ee1c758e996f18408d5385c98803/screenshot/1572404387_10/pc0_bSR6W0Dk9.jpg?imageMogr2/quality/70/thumbnail/1024x",
            "typehouse": "https://ke-image.ljcdn.com/hdic-frame/prod-87aac127-c2bb-491b-a688-170e4311d328.png!m_fill,w_1000,h_750,l_bk,f_jpg,ls_50?from=ke.com",
            "year": "2020年",
            "room": "30m²/南/普通窗",
            "bedroomA": "16.87m²/南/普通窗",
            "bedroomB": "19.68m²/南/普通窗",
            "star": "0"
        },
        {
            "id": 14,
            "title": "书香三房，拎包即住，满五唯一，门口三号线低价急售",
            "desc": "3室2厅/97.79m²/南/市政管理处家属院",
            "keyword": "满五年",
            "price": 132,
            "price1": "13498元/平",
            "img": "https://ke-image.ljcdn.com/110000-inspection/pc1_ivSH3Ofzb_1.jpg!m_fill,w_210,h_164,f_jpg?from=ke.com",
            "rob": "水上乐园抢手房源榜第4名",
            "img1": "https://ke-image.ljcdn.com/110000-inspection/pc0_iQME4mQHu_1.jpg!m_fill,w_1000,h_750,lg_north_west,lx_0,ly_0,l_fbk,f_jpg,ls_50?from=ke.com",
            "img2": "https://vrlab-image4.ljcdn.com/release/auto3dhd/781c6389fa6e86d97c4315298282b9e9/screenshot/1586593094_5/pc0_dQiiijM0m.jpg?imageMogr2/quality/70/thumbnail/1024x",
            "img3": "https://vrlab-image4.ljcdn.com/release/auto3dhd/781c6389fa6e86d97c4315298282b9e9/screenshot/1586593094_5/pc0_dQiiijM0m.jpg?imageMogr2/quality/70/thumbnail/1024x",
            "img4": "https://ke-image.ljcdn.com/110000-inspection/pc0_UE7XYASfP_1.jpg!m_fill,w_1000,h_750,lg_north_west,lx_0,ly_0,l_fbk,f_jpg,ls_50?from=ke.com",
            "img5": "https://ke-image.ljcdn.com/110000-inspection/pc0_iQME4mQHu_1.jpg!m_fill,w_1000,h_750,lg_north_west,lx_0,ly_0,l_fbk,f_jpg,ls_50?from=ke.com",
            "typehouse": "https://ke-image.ljcdn.com/hdic-frame/prod-87aac127-c2bb-491b-a688-170e4311d328.png!m_fill,w_1000,h_750,l_bk,f_jpg,ls_50?from=ke.com",
            "year": "2013年",
            "room": "30m²/南/普通窗",
            "bedroomA": "19.68m²/南/普通窗",
            "bedroomB": "12.65m²/南/普通窗",
            "star": "0"
        },
        {
            "id": 15,
            "title": "一楼带70平左右的院子，这个价包税",
            "desc": "2室1厅/78.29m²/南/玉华园",
            "keyword": "随时可看",
            "price": 115,
            "price1": "14689元/平",
            "img": "https://ke-image.ljcdn.com/410100-inspection/pc1_sVoJNyYSG_1.jpg!m_fill,w_210,h_164,f_jpg?from=ke.com",
            "rob": "经五路抢手房源榜第1名",
            "img1": "https://vrlab-image4.ljcdn.com/release/auto3dhd/2050ee1c758e996f18408d5385c98803/screenshot/1572404387_10/pc0_bSR6W0Dk9.jpg?imageMogr2/quality/70/thumbnail/1024x",
            "img2": "https://ke-image.ljcdn.com/110000-inspection/pc0_lu3ynhABt_1.jpg!m_fill,w_1000,h_750,lg_north_west,lx_0,ly_0,l_fbk,f_jpg,ls_50?from=ke.com",
            "img3": "https://ke-image.ljcdn.com/110000-inspection/pc0_UE7XYASfP_1.jpg!m_fill,w_1000,h_750,lg_north_west,lx_0,ly_0,l_fbk,f_jpg,ls_50?from=ke.com",
            "img4": "https://ke-image.ljcdn.com/110000-inspection/pc0_iQME4mQHu_1.jpg!m_fill,w_1000,h_750,lg_north_west,lx_0,ly_0,l_fbk,f_jpg,ls_50?from=ke.com",
            "img5": "https://vrlab-image4.ljcdn.com/release/auto3dhd/781c6389fa6e86d97c4315298282b9e9/screenshot/1586593094_5/pc0_dQiiijM0m.jpg?imageMogr2/quality/70/thumbnail/1024x",
            "typehouse": "https://ke-image.ljcdn.com/hdic-frame/standard_059814a0-4ffb-43b2-8f08-1d18dd4a4fdf.png!m_fill,w_1000,h_750,l_bk,f_jpg,ls_50?from=ke.com",
            "year": "2014年",
            "room": "25.65m²/南/普通窗",
            "bedroomA": "21.35m²/南/普通窗",
            "bedroomB": "15.68m²/南/普通窗",
            "star": "0"
        },
        {
            "id": 16,
            "title": "珠江荣景双气两室看房方便业主诚心出售满五年",
            "desc": "2室1厅/85m²/南/珠江荣景",
            "keyword": "随时可看",
            "price": 96,
            "price1": "11294元/平",
            "img": "https://ke-image.ljcdn.com/110000-inspection/pc1_RwwFp5q3V_1.jpg!m_fill,w_210,h_164,f_jpg?from=ke.com",
            "rob": "经五路抢手房源榜第1名",
            "img1": "https://ke-image.ljcdn.com/110000-inspection/pc0_iQME4mQHu_1.jpg!m_fill,w_1000,h_750,lg_north_west,lx_0,ly_0,l_fbk,f_jpg,ls_50?from=ke.com",
            "img2": "https://vrlab-image4.ljcdn.com/release/auto3dhd/781c6389fa6e86d97c4315298282b9e9/screenshot/1586593094_5/pc0_dQiiijM0m.jpg?imageMogr2/quality/70/thumbnail/1024x",
            "img3": "https://ke-image.ljcdn.com/110000-inspection/pc0_UE7XYASfP_1.jpg!m_fill,w_1000,h_750,lg_north_west,lx_0,ly_0,l_fbk,f_jpg,ls_50?from=ke.com",
            "img4": "https://vrlab-image4.ljcdn.com/release/auto3dhd/2050ee1c758e996f18408d5385c98803/screenshot/1572404387_10/pc0_bSR6W0Dk9.jpg?imageMogr2/quality/70/thumbnail/1024x",
            "img5": "https://ke-image.ljcdn.com/110000-inspection/pc0_iQME4mQHu_1.jpg!m_fill,w_1000,h_750,lg_north_west,lx_0,ly_0,l_fbk,f_jpg,ls_50?from=ke.com",
            "typehouse": "https://ke-image.ljcdn.com/hdic-frame/standard_1eee27e5-2a5c-4abb-ba04-5d869c2a4990.png!m_fill,w_1000,h_750,l_bk,f_jpg,ls_50?from=ke.com",
            "year": "2013年",
            "room": "11.65m²/南/落地窗",
            "bedroomA": "16.87m²/南/普通窗",
            "bedroomB": "19.68m²/南/普通窗",
            "star": "0"
        },
        {
            "id": 17,
            "title": "正商•幸福港湾 2室1厅 西",
            "desc": "2室1厅/73.85m²/西/正商•幸福港湾",
            "keyword": "满五年",
            "price": 99,
            "price1": "13406元/平",
            "img": "https://ke-image.ljcdn.com/410100-inspection/pc1_GwdJwPrFR_1.jpg!m_fill,w_210,h_164,f_jpg?from=ke.com",
            "rob": "水上乐园抢手房源榜第4名",
            "img1": "https://vrlab-image4.ljcdn.com/release/auto3dhd/2050ee1c758e996f18408d5385c98803/screenshot/1572404387_10/pc0_bSR6W0Dk9.jpg?imageMogr2/quality/70/thumbnail/1024x",
            "img2": "https://ke-image.ljcdn.com/110000-inspection/pc0_iQME4mQHu_1.jpg!m_fill,w_1000,h_750,lg_north_west,lx_0,ly_0,l_fbk,f_jpg,ls_50?from=ke.com",
            "img3": "https://ke-image.ljcdn.com/110000-inspection/pc0_lu3ynhABt_1.jpg!m_fill,w_1000,h_750,lg_north_west,lx_0,ly_0,l_fbk,f_jpg,ls_50?from=ke.com",
            "img4": "https://ke-image.ljcdn.com/110000-inspection/pc0_iQME4mQHu_1.jpg!m_fill,w_1000,h_750,lg_north_west,lx_0,ly_0,l_fbk,f_jpg,ls_50?from=ke.com",
            "img5": "https://vrlab-image4.ljcdn.com/release/auto3dhd/2050ee1c758e996f18408d5385c98803/screenshot/1572404387_10/pc0_bSR6W0Dk9.jpg?imageMogr2/quality/70/thumbnail/1024x",
            "typehouse": "https://ke-image.ljcdn.com/hdic-frame/standard_059814a0-4ffb-43b2-8f08-1d18dd4a4fdf.png!m_fill,w_1000,h_750,l_bk,f_jpg,ls_50?from=ke.com",
            "year": "2020年",
            "room": "30m²/南/普通窗",
            "bedroomA": "19.68m²/南/普通窗",
            "bedroomB": "12.65m²/南/普通窗",
            "star": "0"
        },
        {
            "id": 18,
            "title": "朝南毛坯两室  带地下室  中间楼层  业主诚心售",
            "desc": "2室1厅/74.98m²/南/风和日丽家园",
            "keyword": "满两年\n随时可看",
            "price": 109,
            "price1": "14471元/平",
            "img": "https://ke-image.ljcdn.com/110000-inspection/pc1_RwwFp5q3V_1.jpg!m_fill,w_210,h_164,f_jpg?from=ke.com",
            "rob": "大石桥抢手房源榜第2名",
            "img1": "https://ke-image.ljcdn.com/110000-inspection/pc0_iQME4mQHu_1.jpg!m_fill,w_1000,h_750,lg_north_west,lx_0,ly_0,l_fbk,f_jpg,ls_50?from=ke.com",
            "img2": "https://vrlab-image4.ljcdn.com/release/auto3dhd/781c6389fa6e86d97c4315298282b9e9/screenshot/1586593094_5/pc0_dQiiijM0m.jpg?imageMogr2/quality/70/thumbnail/1024x",
            "img3": "https://vrlab-image4.ljcdn.com/release/auto3dhd/781c6389fa6e86d97c4315298282b9e9/screenshot/1586593094_5/pc0_dQiiijM0m.jpg?imageMogr2/quality/70/thumbnail/1024x",
            "img4": "https://ke-image.ljcdn.com/110000-inspection/apc_KVy3ZIVi6_1.jpg!m_fill,w_1000,h_750,lg_north_west,lx_0,ly_0,l_fbk,f_jpg,ls_50?from=ke.com",
            "img5": "https://ke-image.ljcdn.com/110000-inspection/pc0_UE7XYASfP_1.jpg!m_fill,w_1000,h_750,lg_north_west,lx_0,ly_0,l_fbk,f_jpg,ls_50?from=ke.com",
            "typehouse": "https://ke-image.ljcdn.com/hdic-frame/prod-f19c3716-9621-42b6-8ed4-128312cf847b.png!m_fill,w_1000,h_750,l_bk,f_jpg,ls_50?from=ke.com",
            "year": "2008年",
            "room": "25.65m²/南/普通窗",
            "bedroomA": "19.68m²/南/普通窗",
            "bedroomB": "15.68m²/南/普通窗",
            "star": "0"
        },
        {
            "id": 19,
            "title": "满五不唯一，南北通透，无遮挡，采光视野均无遮挡",
            "desc": "2室2厅/91.82m²/南 北/东方鼎盛时代三期",
            "keyword": "随时可看",
            "price": 222,
            "price1": "24178元/平",
            "img": "https://ke-image.ljcdn.com/110000-inspection/pc1_ivSH3Ofzb_1.jpg!m_fill,w_210,h_164,f_jpg?from=ke.com",
            "rob": "索凌路北段抢手房源榜第6名",
            "img1": "https://ke-image.ljcdn.com/110000-inspection/pc0_iQME4mQHu_1.jpg!m_fill,w_1000,h_750,lg_north_west,lx_0,ly_0,l_fbk,f_jpg,ls_50?from=ke.com",
            "img2": "https://ke-image.ljcdn.com/110000-inspection/pc0_iQME4mQHu_1.jpg!m_fill,w_1000,h_750,lg_north_west,lx_0,ly_0,l_fbk,f_jpg,ls_50?from=ke.com",
            "img3": "https://vrlab-image4.ljcdn.com/release/auto3dhd/781c6389fa6e86d97c4315298282b9e9/screenshot/1586593094_5/pc0_dQiiijM0m.jpg?imageMogr2/quality/70/thumbnail/1024x",
            "img4": "https://ke-image.ljcdn.com/110000-inspection/pc0_UE7XYASfP_1.jpg!m_fill,w_1000,h_750,lg_north_west,lx_0,ly_0,l_fbk,f_jpg,ls_50?from=ke.com",
            "img5": "https://ke-image.ljcdn.com/110000-inspection/pc0_lu3ynhABt_1.jpg!m_fill,w_1000,h_750,lg_north_west,lx_0,ly_0,l_fbk,f_jpg,ls_50?from=ke.com",
            "typehouse": "https://ke-image.ljcdn.com/hdic-frame/standard_1eee27e5-2a5c-4abb-ba04-5d869c2a4990.png!m_fill,w_1000,h_750,l_bk,f_jpg,ls_50?from=ke.com",
            "year": "2012年",
            "room": "30m²/南/普通窗",
            "bedroomA": "11.65m²/南/落地窗",
            "bedroomB": "12.65m²/南/普通窗",
            "star": "0"
        },
        {
            "id": 20,
            "title": "思念果岭国际社区三期岛屿生活 2室1厅 西南",
            "desc": "2室1厅/85.36m²/西南/思念果岭国际社区三期岛屿生活",
            "keyword": "随时可看",
            "price": 99,
            "price1": "11598元/平",
            "img": "https://ke-image.ljcdn.com/410100-inspection/pc1_GwdJwPrFR_1.jpg!m_fill,w_210,h_164,f_jpg?from=ke.com",
            "rob": "经五路抢手房源榜第1名",
            "img1": "https://ke-image.ljcdn.com/110000-inspection/pc0_iQME4mQHu_1.jpg!m_fill,w_1000,h_750,lg_north_west,lx_0,ly_0,l_fbk,f_jpg,ls_50?from=ke.com",
            "img2": "https://ke-image.ljcdn.com/110000-inspection/pc0_iQME4mQHu_1.jpg!m_fill,w_1000,h_750,lg_north_west,lx_0,ly_0,l_fbk,f_jpg,ls_50?from=ke.com",
            "img3": "https://ke-image.ljcdn.com/110000-inspection/pc0_UE7XYASfP_1.jpg!m_fill,w_1000,h_750,lg_north_west,lx_0,ly_0,l_fbk,f_jpg,ls_50?from=ke.com",
            "img4": "https://ke-image.ljcdn.com/110000-inspection/pc0_iQME4mQHu_1.jpg!m_fill,w_1000,h_750,lg_north_west,lx_0,ly_0,l_fbk,f_jpg,ls_50?from=ke.com",
            "img5": "https://vrlab-image4.ljcdn.com/release/auto3dhd/2050ee1c758e996f18408d5385c98803/screenshot/1572404387_10/pc0_bSR6W0Dk9.jpg?imageMogr2/quality/70/thumbnail/1024x",
            "typehouse": "https://ke-image.ljcdn.com/hdic-frame/standard_059814a0-4ffb-43b2-8f08-1d18dd4a4fdf.png!m_fill,w_1000,h_750,l_bk,f_jpg,ls_50?from=ke.com",
            "year": "2013年",
            "room": "30m²/南/普通窗",
            "bedroomA": "21.35m²/南/普通窗",
            "bedroomB": "19.68m²/南/普通窗",
            "star": "0"
        },
        {
            "id": 21,
            "title": "黄河路海滩寺 站  年代新   上",
            "desc": "2室2厅/95m²/南 北/孟砦南街6号院",
            "keyword": "随时可看",
            "price": 115,
            "price1": "12105元/平",
            "img": "https://ke-image.ljcdn.com/110000-inspection/pc1_RZH0gziSo_1.jpg!m_fill,w_210,h_164,f_jpg?from=ke.com",
            "rob": "大石桥抢手房源榜第2名",
            "img1": "https://ke-image.ljcdn.com/110000-inspection/pc0_iQME4mQHu_1.jpg!m_fill,w_1000,h_750,lg_north_west,lx_0,ly_0,l_fbk,f_jpg,ls_50?from=ke.com",
            "img2": "https://ke-image.ljcdn.com/110000-inspection/apc_KVy3ZIVi6_1.jpg!m_fill,w_1000,h_750,lg_north_west,lx_0,ly_0,l_fbk,f_jpg,ls_50?from=ke.com",
            "img3": "https://vrlab-image4.ljcdn.com/release/auto3dhd/781c6389fa6e86d97c4315298282b9e9/screenshot/1586593094_5/pc0_dQiiijM0m.jpg?imageMogr2/quality/70/thumbnail/1024x",
            "img4": "https://vrlab-image4.ljcdn.com/release/auto3dhd/781c6389fa6e86d97c4315298282b9e9/screenshot/1586593094_5/pc0_dQiiijM0m.jpg?imageMogr2/quality/70/thumbnail/1024x",
            "img5": "https://ke-image.ljcdn.com/110000-inspection/pc0_UE7XYASfP_1.jpg!m_fill,w_1000,h_750,lg_north_west,lx_0,ly_0,l_fbk,f_jpg,ls_50?from=ke.com",
            "typehouse": "https://ke-image.ljcdn.com/hdic-frame/standard_059814a0-4ffb-43b2-8f08-1d18dd4a4fdf.png!m_fill,w_1000,h_750,l_bk,f_jpg,ls_50?from=ke.com",
            "year": "2013年",
            "room": "11.65m²/南/落地窗",
            "bedroomA": "16.87m²/南/普通窗",
            "bedroomB": "15.68m²/南/普通窗",
            "star": "0"
        },
        {
            "id": 22,
            "title": "精装修，满五唯一，业主诚心出售。",
            "desc": "2室2厅/93.68m²/南/芙蓉花苑",
            "keyword": "新上",
            "price": 120,
            "price1": "12810元/平",
            "img": "https://ke-image.ljcdn.com/410100-inspection/pc1_sVoJNyYSG_1.jpg!m_fill,w_210,h_164,f_jpg?from=ke.com",
            "rob": "索凌路北段抢手房源榜第6名",
            "img1": "https://ke-image.ljcdn.com/110000-inspection/pc0_iQME4mQHu_1.jpg!m_fill,w_1000,h_750,lg_north_west,lx_0,ly_0,l_fbk,f_jpg,ls_50?from=ke.com",
            "img2": "https://ke-image.ljcdn.com/110000-inspection/pc0_iQME4mQHu_1.jpg!m_fill,w_1000,h_750,lg_north_west,lx_0,ly_0,l_fbk,f_jpg,ls_50?from=ke.com",
            "img3": "https://ke-image.ljcdn.com/110000-inspection/pc0_UE7XYASfP_1.jpg!m_fill,w_1000,h_750,lg_north_west,lx_0,ly_0,l_fbk,f_jpg,ls_50?from=ke.com",
            "img4": "https://vrlab-image4.ljcdn.com/release/auto3dhd/2050ee1c758e996f18408d5385c98803/screenshot/1572404387_10/pc0_bSR6W0Dk9.jpg?imageMogr2/quality/70/thumbnail/1024x",
            "img5": "https://vrlab-image4.ljcdn.com/release/auto3dhd/2050ee1c758e996f18408d5385c98803/screenshot/1572404387_10/pc0_bSR6W0Dk9.jpg?imageMogr2/quality/70/thumbnail/1024x",
            "typehouse": "https://ke-image.ljcdn.com/hdic-frame/standard_1eee27e5-2a5c-4abb-ba04-5d869c2a4990.png!m_fill,w_1000,h_750,l_bk,f_jpg,ls_50?from=ke.com",
            "year": "2008年",
            "room": "30m²/南/普通窗",
            "bedroomA": "19.68m²/南/普通窗",
            "bedroomB": "12.65m²/南/普通窗",
            "star": "0"
        },
        {
            "id": 23,
            "title": "多层电梯洋房，交通便利，配套齐全。保利开发，绿化高",
            "desc": "4室2厅/126m²/南/保利海上五月花茉莉园",
            "keyword": "随时可看",
            "price": 239,
            "price1": "18968元/平",
            "img": "https://ke-image.ljcdn.com/110000-inspection/pc1_RZH0gziSo_1.jpg!m_fill,w_210,h_164,f_jpg?from=ke.com",
            "rob": "新郑大抢手房源榜第4名",
            "img1": "https://vrlab-image4.ljcdn.com/release/auto3dhd/2050ee1c758e996f18408d5385c98803/screenshot/1572404387_10/pc0_bSR6W0Dk9.jpg?imageMogr2/quality/70/thumbnail/1024x",
            "img2": "https://ke-image.ljcdn.com/110000-inspection/pc0_iQME4mQHu_1.jpg!m_fill,w_1000,h_750,lg_north_west,lx_0,ly_0,l_fbk,f_jpg,ls_50?from=ke.com",
            "img3": "https://ke-image.ljcdn.com/110000-inspection/pc0_UE7XYASfP_1.jpg!m_fill,w_1000,h_750,lg_north_west,lx_0,ly_0,l_fbk,f_jpg,ls_50?from=ke.com",
            "img4": "https://vrlab-image4.ljcdn.com/release/auto3dhd/2050ee1c758e996f18408d5385c98803/screenshot/1572404387_10/pc0_bSR6W0Dk9.jpg?imageMogr2/quality/70/thumbnail/1024x",
            "img5": "https://vrlab-image4.ljcdn.com/release/auto3dhd/2050ee1c758e996f18408d5385c98803/screenshot/1572404387_10/pc0_bSR6W0Dk9.jpg?imageMogr2/quality/70/thumbnail/1024x",
            "typehouse": "https://ke-image.ljcdn.com/hdic-frame/standard_059814a0-4ffb-43b2-8f08-1d18dd4a4fdf.png!m_fill,w_1000,h_750,l_bk,f_jpg,ls_50?from=ke.com",
            "year": "2009年",
            "room": "25.65m²/南/普通窗",
            "bedroomA": "11.65m²/南/落地窗",
            "bedroomB": "19.68m²/南/普通窗",
            "star": "0"
        },
        {
            "id": 24,
            "title": "双地铁口，06年多层4楼三房，满五唯一",
            "desc": "3室1厅/93m²/东 西/富寓雅居",
            "keyword": "满五年",
            "price": 127,
            "price1": "13656元/平",
            "img": "https://ke-image.ljcdn.com/410100-inspection/pc1_GwdJwPrFR_1.jpg!m_fill,w_210,h_164,f_jpg?from=ke.com",
            "rob": "经五路抢手房源榜第1名",
            "img1": "https://vrlab-image4.ljcdn.com/release/auto3dhd/2050ee1c758e996f18408d5385c98803/screenshot/1572404387_10/pc0_bSR6W0Dk9.jpg?imageMogr2/quality/70/thumbnail/1024x",
            "img2": "https://vrlab-image4.ljcdn.com/release/auto3dhd/781c6389fa6e86d97c4315298282b9e9/screenshot/1586593094_5/pc0_dQiiijM0m.jpg?imageMogr2/quality/70/thumbnail/1024x",
            "img3": "https://vrlab-image4.ljcdn.com/release/auto3dhd/781c6389fa6e86d97c4315298282b9e9/screenshot/1586593094_5/pc0_dQiiijM0m.jpg?imageMogr2/quality/70/thumbnail/1024x",
            "img4": "https://ke-image.ljcdn.com/110000-inspection/pc0_UE7XYASfP_1.jpg!m_fill,w_1000,h_750,lg_north_west,lx_0,ly_0,l_fbk,f_jpg,ls_50?from=ke.com",
            "img5": "https://ke-image.ljcdn.com/110000-inspection/pc0_iQME4mQHu_1.jpg!m_fill,w_1000,h_750,lg_north_west,lx_0,ly_0,l_fbk,f_jpg,ls_50?from=ke.com",
            "typehouse": "https://ke-image.ljcdn.com/hdic-frame/prod-f19c3716-9621-42b6-8ed4-128312cf847b.png!m_fill,w_1000,h_750,l_bk,f_jpg,ls_50?from=ke.com",
            "year": "2003年",
            "room": "30m²/南/普通窗",
            "bedroomA": "19.68m²/南/普通窗",
            "bedroomB": "21.35m²/南/普通窗",
            "star": "0"
        },
        {
            "id": 25,
            "title": "精装大四房，南北通透，满五无抵押，拎包即住",
            "desc": "4室2厅/148m²/南 北/博澳福泽门",
            "keyword": "新上",
            "price": 255,
            "price1": "17230元/平",
            "img": "https://ke-image.ljcdn.com/110000-inspection/pc1_RwwFp5q3V_1.jpg!m_fill,w_210,h_164,f_jpg?from=ke.com",
            "rob": "大石桥抢手房源榜第2名",
            "img1": "https://vrlab-image4.ljcdn.com/release/auto3dhd/2050ee1c758e996f18408d5385c98803/screenshot/1572404387_10/pc0_bSR6W0Dk9.jpg?imageMogr2/quality/70/thumbnail/1024x",
            "img2": "https://ke-image.ljcdn.com/110000-inspection/pc0_iQME4mQHu_1.jpg!m_fill,w_1000,h_750,lg_north_west,lx_0,ly_0,l_fbk,f_jpg,ls_50?from=ke.com",
            "img3": "https://ke-image.ljcdn.com/110000-inspection/pc0_UE7XYASfP_1.jpg!m_fill,w_1000,h_750,lg_north_west,lx_0,ly_0,l_fbk,f_jpg,ls_50?from=ke.com",
            "img4": "https://ke-image.ljcdn.com/110000-inspection/pc0_iQME4mQHu_1.jpg!m_fill,w_1000,h_750,lg_north_west,lx_0,ly_0,l_fbk,f_jpg,ls_50?from=ke.com",
            "img5": "https://vrlab-image4.ljcdn.com/release/auto3dhd/2050ee1c758e996f18408d5385c98803/screenshot/1572404387_10/pc0_bSR6W0Dk9.jpg?imageMogr2/quality/70/thumbnail/1024x",
            "typehouse": "https://ke-image.ljcdn.com/hdic-frame/standard_059814a0-4ffb-43b2-8f08-1d18dd4a4fdf.png!m_fill,w_1000,h_750,l_bk,f_jpg,ls_50?from=ke.com",
            "year": "1998年",
            "room": "25.65m²/南/普通窗",
            "bedroomA": "16.87m²/南/普通窗",
            "bedroomB": "12.65m²/南/普通窗",
            "star": "0"
        },
        {
            "id": 26,
            "title": "此房满二   C户型 家具家电定制  配套齐全",
            "desc": "3室1厅/88.63m²/南/万科城紫兰苑",
            "keyword": "新上",
            "price": 126,
            "price1": "14216元/平",
            "img": "https://ke-image.ljcdn.com/410100-inspection/pc1_sVoJNyYSG_1.jpg!m_fill,w_210,h_164,f_jpg?from=ke.com",
            "rob": "索凌路北段抢手房源榜第6名",
            "img1": "https://ke-image.ljcdn.com/110000-inspection/pc0_UE7XYASfP_1.jpg!m_fill,w_1000,h_750,lg_north_west,lx_0,ly_0,l_fbk,f_jpg,ls_50?from=ke.com",
            "img2": "https://vrlab-image4.ljcdn.com/release/auto3dhd/781c6389fa6e86d97c4315298282b9e9/screenshot/1586593094_5/pc0_dQiiijM0m.jpg?imageMogr2/quality/70/thumbnail/1024x",
            "img3": "https://ke-image.ljcdn.com/110000-inspection/pc0_iQME4mQHu_1.jpg!m_fill,w_1000,h_750,lg_north_west,lx_0,ly_0,l_fbk,f_jpg,ls_50?from=ke.com",
            "img4": "https://vrlab-image4.ljcdn.com/release/auto3dhd/781c6389fa6e86d97c4315298282b9e9/screenshot/1586593094_5/pc0_dQiiijM0m.jpg?imageMogr2/quality/70/thumbnail/1024x",
            "img5": "https://ke-image.ljcdn.com/110000-inspection/pc0_iQME4mQHu_1.jpg!m_fill,w_1000,h_750,lg_north_west,lx_0,ly_0,l_fbk,f_jpg,ls_50?from=ke.com",
            "typehouse": "https://ke-image.ljcdn.com/hdic-frame/prod-87aac127-c2bb-491b-a688-170e4311d328.png!m_fill,w_1000,h_750,l_bk,f_jpg,ls_50?from=ke.com",
            "year": "2015年",
            "room": "12.65m²/南/普通窗",
            "bedroomA": "16.87m²/南/普通窗16.87m²/南/普通窗",
            "bedroomB": "21.35m²/南/普通窗",
            "star": "0"
        },
        {
            "id": 27,
            "title": "地铁口双气精装业主诚心随时签约",
            "desc": "3室2厅/98.64m²/南/农业路67-10号",
            "keyword": "满两年",
            "price": 103,
            "price1": "10442元/平",
            "img": "https://ke-image.ljcdn.com/110000-inspection/pc1_RZH0gziSo_1.jpg!m_fill,w_210,h_164,f_jpg?from=ke.com",
            "rob": "经五路抢手房源榜第1名",
            "img1": "https://ke-image.ljcdn.com/110000-inspection/pc0_iQME4mQHu_1.jpg!m_fill,w_1000,h_750,lg_north_west,lx_0,ly_0,l_fbk,f_jpg,ls_50?from=ke.com",
            "img2": "https://vrlab-image4.ljcdn.com/release/auto3dhd/2050ee1c758e996f18408d5385c98803/screenshot/1572404387_10/pc0_bSR6W0Dk9.jpg?imageMogr2/quality/70/thumbnail/1024x",
            "img3": "https://ke-image.ljcdn.com/110000-inspection/pc0_UE7XYASfP_1.jpg!m_fill,w_1000,h_750,lg_north_west,lx_0,ly_0,l_fbk,f_jpg,ls_50?from=ke.com",
            "img4": "https://vrlab-image4.ljcdn.com/release/auto3dhd/2050ee1c758e996f18408d5385c98803/screenshot/1572404387_10/pc0_bSR6W0Dk9.jpg?imageMogr2/quality/70/thumbnail/1024x",
            "img5": "https://vrlab-image4.ljcdn.com/release/auto3dhd/2050ee1c758e996f18408d5385c98803/screenshot/1572404387_10/pc0_bSR6W0Dk9.jpg?imageMogr2/quality/70/thumbnail/1024x",
            "typehouse": "https://ke-image.ljcdn.com/hdic-frame/standard_1eee27e5-2a5c-4abb-ba04-5d869c2a4990.png!m_fill,w_1000,h_750,l_bk,f_jpg,ls_50?from=ke.com",
            "year": "2017年",
            "room": "25.65m²/南/普通窗",
            "bedroomA": "15.68m²/南/普通窗",
            "bedroomB": "21.35m²/南/普通窗",
            "star": "0"
        },
        {
            "id": 28,
            "title": "大学路主干道标准两室，好房源！",
            "desc": "2室2厅/86.85m²/南/海悦雅居",
            "keyword": "地铁",
            "price": 135,
            "price1": "15544元/平",
            "img": "https://ke-image.ljcdn.com/410100-inspection/pc1_GwdJwPrFR_1.jpg!m_fill,w_210,h_164,f_jpg?from=ke.com",
            "rob": "经五路抢手房源榜第1名",
            "img1": "https://vrlab-image4.ljcdn.com/release/auto3dhd/2050ee1c758e996f18408d5385c98803/screenshot/1572404387_10/pc0_bSR6W0Dk9.jpg?imageMogr2/quality/70/thumbnail/1024x",
            "img2": "https://vrlab-image4.ljcdn.com/release/auto3dhd/781c6389fa6e86d97c4315298282b9e9/screenshot/1586593094_5/pc0_dQiiijM0m.jpg?imageMogr2/quality/70/thumbnail/1024x",
            "img3": "https://ke-image.ljcdn.com/110000-inspection/pc0_UE7XYASfP_1.jpg!m_fill,w_1000,h_750,lg_north_west,lx_0,ly_0,l_fbk,f_jpg,ls_50?from=ke.com",
            "img4": "https://ke-image.ljcdn.com/110000-inspection/pc0_iQME4mQHu_1.jpg!m_fill,w_1000,h_750,lg_north_west,lx_0,ly_0,l_fbk,f_jpg,ls_50?from=ke.com",
            "img5": "https://ke-image.ljcdn.com/110000-inspection/pc0_iQME4mQHu_1.jpg!m_fill,w_1000,h_750,lg_north_west,lx_0,ly_0,l_fbk,f_jpg,ls_50?from=ke.com",
            "typehouse": "https://ke-image.ljcdn.com/hdic-frame/standard_059814a0-4ffb-43b2-8f08-1d18dd4a4fdf.png!m_fill,w_1000,h_750,l_bk,f_jpg,ls_50?from=ke.com",
            "year": "2019年",
            "room": "12.65m²/南/普通窗",
            "bedroomA": "11.65m²/南/落地窗",
            "bedroomB": "21.35m²/南/普通窗",
            "star": "0"
        },
        {
            "id": 29,
            "title": "三号线 五号线交汇处 精装一房一厅  可贷款",
            "desc": "1室1厅/44m²/南/纺织机械厂1号院",
            "keyword": "地铁",
            "price": 45,
            "price1": "10227元/平",
            "img": "https://ke-image.ljcdn.com/110000-inspection/pc1_RZH0gziSo_1.jpg!m_fill,w_210,h_164,f_jpg?from=ke.com",
            "rob": "索凌路北段抢手房源榜第6名",
            "img1": "https://vrlab-image4.ljcdn.com/release/auto3dhd/2050ee1c758e996f18408d5385c98803/screenshot/1572404387_10/pc0_bSR6W0Dk9.jpg?imageMogr2/quality/70/thumbnail/1024x",
            "img2": "https://ke-image.ljcdn.com/110000-inspection/pc0_UE7XYASfP_1.jpg!m_fill,w_1000,h_750,lg_north_west,lx_0,ly_0,l_fbk,f_jpg,ls_50?from=ke.com",
            "img3": "https://vrlab-image4.ljcdn.com/release/auto3dhd/781c6389fa6e86d97c4315298282b9e9/screenshot/1586593094_5/pc0_dQiiijM0m.jpg?imageMogr2/quality/70/thumbnail/1024x",
            "img4": "https://ke-image.ljcdn.com/110000-inspection/pc0_iQME4mQHu_1.jpg!m_fill,w_1000,h_750,lg_north_west,lx_0,ly_0,l_fbk,f_jpg,ls_50?from=ke.com",
            "img5": "https://ke-image.ljcdn.com/110000-inspection/pc0_iQME4mQHu_1.jpg!m_fill,w_1000,h_750,lg_north_west,lx_0,ly_0,l_fbk,f_jpg,ls_50?from=ke.com",
            "typehouse": "https://ke-image.ljcdn.com/hdic-frame/prod-87aac127-c2bb-491b-a688-170e4311d328.png!m_fill,w_1000,h_750,l_bk,f_jpg,ls_50?from=ke.com",
            "year": "2020年",
            "room": "15.68m²/南/普通窗",
            "bedroomA": "11.65m²/南/落地窗",
            "bedroomB": "21.35m²/南/普通窗",
            "star": "0"
        },
        {
            "id": 30,
            "title": "文化路三全路主语城二期大两室诚心出售",
            "desc": "2室2厅/93.62m²/南 北/安泰金苑",
            "keyword": "满三年",
            "price": 118,
            "price1": "12604元/平",
            "img": "https://ke-image.ljcdn.com/410100-inspection/pc1_sVoJNyYSG_1.jpg!m_fill,w_210,h_164,f_jpg?from=ke.com",
            "rob": "大石桥抢手房源榜第2名",
            "img1": "https://ke-image.ljcdn.com/110000-inspection/pc0_iQME4mQHu_1.jpg!m_fill,w_1000,h_750,lg_north_west,lx_0,ly_0,l_fbk,f_jpg,ls_50?from=ke.com",
            "img2": "https://vrlab-image4.ljcdn.com/release/auto3dhd/2050ee1c758e996f18408d5385c98803/screenshot/1572404387_10/pc0_bSR6W0Dk9.jpg?imageMogr2/quality/70/thumbnail/1024x",
            "img3": "https://vrlab-image4.ljcdn.com/release/auto3dhd/2050ee1c758e996f18408d5385c98803/screenshot/1572404387_10/pc0_bSR6W0Dk9.jpg?imageMogr2/quality/70/thumbnail/1024x",
            "img4": "https://ke-image.ljcdn.com/110000-inspection/pc0_UE7XYASfP_1.jpg!m_fill,w_1000,h_750,lg_north_west,lx_0,ly_0,l_fbk,f_jpg,ls_50?from=ke.com",
            "img5": "https://vrlab-image4.ljcdn.com/release/auto3dhd/781c6389fa6e86d97c4315298282b9e9/screenshot/1586593094_5/pc0_dQiiijM0m.jpg?imageMogr2/quality/70/thumbnail/1024x",
            "typehouse": "https://ke-image.ljcdn.com/hdic-frame/prod-f19c3716-9621-42b6-8ed4-128312cf847b.png!m_fill,w_1000,h_750,l_bk,f_jpg,ls_50?from=ke.com",
            "year": "2006年",
            "room": "15.68m²/南/普通窗",
            "bedroomA": "21.35m²/南/普通窗",
            "bedroomB": "30.22m²/南/普通窗",
            "star": "0"
        }
    ],
      navs: ['推荐', '二手房', '新房', '租房', '装修'],
      act: 0,
      flag: true,
      min_swipers: [
        '/images/min_swipers/lbt1.png',
        '/images/min_swipers/lbt2.png',
        '/images/min_swipers/lbt3.png'
      ],
      minSwpInd: 0,
      x: wx.getSystemInfoSync().windowWidth - 60, //x的位置，此处的应为当前元素width+right 或left
      y: wx.getSystemInfoSync().windowHeight - 120, //y的位置，此处应为前元素的height+bottom 或top
      windowWidth: wx.getSystemInfoSync().windowWidth,
      showBackTop: false,
      scrollTop: 0,
      cityText: wx.getStorageSync('cityText') || '上海'
    },

    // 获取数据
    getList() {

      // wx.request({
      //   url: `http://${app.globalData.globalInterface}:4444/ershoufang`,
      //   success: (res) => {
      //     // console.log(res.data.data);
      //     const {
      //       data
      //     } = res.data
      //     // console.log(data);
      //     this.setData({
      //       list: data.reverse()
      //     })
      //   }
      // })
    },
    // 导航切换
    changeNav(e) {
      let param = e.currentTarget.dataset.param
      this.setData({
        act: param
      })
    },
    // 关闭广告
    closeAdvertisement() {
      this.setData({
        flag: !this.data.flag
      })
      // console.log(this.flag);
    },
    // 跳转搜索
    toSearch() {
      wx.navigateTo({
        url: '/pages/search/search'
      })
    },
    // 监听滚动
    onPageScroll: function (e) {
      // console.log(e);
      this.setData({
        scrollTop: e.scrollTop // 更新滚动位置数据
      });
    },
    // 跳转城市
    toShellAddress() {
      wx.navigateTo({
        url: '/pages/ShellAddress/ShellAddress',
      })
    },
    // 获取用户信息
    getUserInfo: function () {
      wx.getUserInfo({
        success: function (res) {
          console.log(res.userInfo)
          // 在这里可以对获取到的用户信息进行处理和使用
        },
        fail: function (err) {
          console.error(err)
        }
      })
    },
    onLoad(e) {
      wx.setStorageSync('list', this.data.list)
      wx.showLoading({
        title: '加载中',
      });
      setTimeout(() => {
        this.setData({
          cityText: e.cit
        })
        // this.getList()
        this.getUserInfo();
        wx.hideLoading();
      }, 500);


    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {},

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})