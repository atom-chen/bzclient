var GameMsgDef = require("GameMsgDef");

cc.Class({
    extends: require("BaseModuleMsg"),

    properties: {
        resPanelUrl:"prefabs/canInvList", // 预制体路径
        msgIdShowView:GameMsgDef.ID_SHOWKCANINVLISTVIEW_CTC, // 显示ID
    },
    messageDispatch:function(msg){
    },
});