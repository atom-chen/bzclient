cc.Class({
    extends: cc.Component,

    properties: {
        wanfa1: [cc.Node],
        wanfa2: [cc.Node],
        wanfa3: [cc.Node],
        wanfa4: [cc.Node],
    },

    // use this for initialization
    onLoad: function () {

    },
    onEnable() {
        //this.initData()
    },
    initData(obj) {
        let conf = obj
        if (!conf) return
        if (conf.aagems == 1) {
            this.node.parent.getComponent('gameGuizeView').changeSprite(this.wanfa1[0], true)
            this.node.parent.getComponent('gameGuizeView').changeSprite(this.wanfa1[1], false)
            this.wanfa1[0].getChildByName('Label').color = new cc.color(255, 249, 154, 255)
            this.wanfa2[0].getChildByName('Label').getComponent(cc.Label).string = '8局('+cc.SZCardConfig_AA[cc.fy.gameNetMgr.conf.type][4-cc.fy.gameNetMgr.conf.maxCntOfPlayers][0]+'房卡)'
            this.wanfa2[1].getChildByName('Label').getComponent(cc.Label).string = '16局('+cc.SZCardConfig_AA[cc.fy.gameNetMgr.conf.type][4-cc.fy.gameNetMgr.conf.maxCntOfPlayers][1]+'房卡)'
            this.wanfa2[2].getChildByName('Label').getComponent(cc.Label).string = '32('+cc.SZCardConfig_AA[cc.fy.gameNetMgr.conf.type][4-cc.fy.gameNetMgr.conf.maxCntOfPlayers][2]+'房卡)'
            this.wanfa1[0].getChildByName('Label').getComponent(cc.Label).string = 'AA付'

        } else if (conf.aagems == 0) {
            this.node.parent.getComponent('gameGuizeView').changeSprite(this.wanfa1[1], true)
            this.node.parent.getComponent('gameGuizeView').changeSprite(this.wanfa1[0], false)
            this.wanfa1[1].getChildByName('Label').color = new cc.color(255, 249, 154, 255)
            this.wanfa2[0].getChildByName('Label').getComponent(cc.Label).string = '8局('+cc.SZCardConfig[cc.fy.gameNetMgr.conf.type][4-cc.fy.gameNetMgr.conf.maxCntOfPlayers][0]+'房卡)'
            this.wanfa2[1].getChildByName('Label').getComponent(cc.Label).string = '16局('+cc.SZCardConfig[cc.fy.gameNetMgr.conf.type][4-cc.fy.gameNetMgr.conf.maxCntOfPlayers][1]+'房卡)'
            this.wanfa2[2].getChildByName('Label').getComponent(cc.Label).string = '32局('+cc.SZCardConfig[cc.fy.gameNetMgr.conf.type][4-cc.fy.gameNetMgr.conf.maxCntOfPlayers][2]+'房卡)'
            this.wanfa1[1].getChildByName('Label').getComponent(cc.Label).string = '房主付'

        } else {
            this.node.parent.getComponent('gameGuizeView').changeSprite(this.wanfa1[1], true)
            this.node.parent.getComponent('gameGuizeView').changeSprite(this.wanfa1[0], false)
            this.wanfa1[1].getChildByName('Label').getComponent(cc.Label).string = '圈主付'
            this.wanfa1[1].getChildByName('Label').color = new cc.color(255, 249, 154, 255)
            this.wanfa2[0].getChildByName('Label').getComponent(cc.Label).string = '8局('+cc.SZCardConfig[cc.fy.gameNetMgr.conf.type][4-cc.fy.gameNetMgr.conf.maxCntOfPlayers][0]+'房卡)'
            this.wanfa2[1].getChildByName('Label').getComponent(cc.Label).string = '16局('+cc.SZCardConfig[cc.fy.gameNetMgr.conf.type][4-cc.fy.gameNetMgr.conf.maxCntOfPlayers][1]+'房卡)'
            this.wanfa2[2].getChildByName('Label').getComponent(cc.Label).string = '32局('+cc.SZCardConfig[cc.fy.gameNetMgr.conf.type][4-cc.fy.gameNetMgr.conf.maxCntOfPlayers][2]+'房卡)'
        }
        if (conf.xuanzejushu == 1) {
            this.node.parent.getComponent('gameGuizeView').changeSprite(this.wanfa2[1], true)
            this.node.parent.getComponent('gameGuizeView').changeSprite(this.wanfa2[2], false)
            this.node.parent.getComponent('gameGuizeView').changeSprite(this.wanfa2[0], false)
            this.wanfa2[1].getChildByName('Label').color = new cc.color(255, 249, 154, 255)
        } else if (conf.xuanzejushu == 0) {
            this.node.parent.getComponent('gameGuizeView').changeSprite(this.wanfa2[1], false)
            this.node.parent.getComponent('gameGuizeView').changeSprite(this.wanfa2[0], true)
            this.node.parent.getComponent('gameGuizeView').changeSprite(this.wanfa2[2], false)
            this.wanfa2[0].getChildByName('Label').color = new cc.color(255, 249, 154, 255)
        } else {
            this.node.parent.getComponent('gameGuizeView').changeSprite(this.wanfa2[1], false)
            this.node.parent.getComponent('gameGuizeView').changeSprite(this.wanfa2[0], false)
            this.node.parent.getComponent('gameGuizeView').changeSprite(this.wanfa2[2], true)
            this.wanfa2[2].getChildByName('Label').color = new cc.color(255, 249, 154, 255)
        }
        if (conf.double == 1) {
            this.node.parent.getComponent('gameGuizeView').changeSprite(this.wanfa3[0], true)
            this.wanfa3[0].getChildByName('Label').color = new cc.color(255, 249, 154, 255)
        }else{
            this.node.parent.getComponent('gameGuizeView').changeSprite(this.wanfa3[0], false)
         
        }
        // if(cc.fy.gameNetMgr.conf.isClubRoom){
        //     this.node.getChildByName('bg').height = 280
        //     this.wanfa4[0].parent.parent.active = true
        //     if (conf.isGps == 1) {
        //         this.node.parent.getComponent('gameGuizeView').changeSprite(this.wanfa4[0], true)
        //         this.wanfa4[0].getChildByName('Label').color = new cc.color(255, 249, 154, 255)
        //     } else {
        //         this.node.parent.getComponent('gameGuizeView').changeSprite(this.wanfa4[0], false)
        //     }
        // }else{
        //     this.wanfa4[0].parent.parent.active = false
        //     this.node.getChildByName('bg').height = 260
        // }
        this.wanfa4[0].parent.parent.active = false
        this.node.getChildByName('bg').height = 230
        if(cc.fy.gameNetMgr.conf.isClubRoom){
            this.wanfa1[1].getChildByName('Label').getComponent(cc.Label).string = '圈主付';
        }else{
            this.wanfa1[1].getChildByName('Label').getComponent(cc.Label).string = '房主付';
        }
        // {"type":9,"xuanzejushu":1,"renshu":1,"aagems":1,"xiaohua":1,"difen":1,"mingan":1,"isGroup":0,"isSameIp":0,"isGps":0,"version":20171109,"channelid":3}

    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
