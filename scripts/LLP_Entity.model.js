define("LLP_Entity.model$TreeItemRec", ["exports", "OutSystems/ClientRuntime/Main", "LLP_Entity.model"], function (exports, OutSystems, LLP_EntityModel) {
var OS = OutSystems.Internal;
var TreeItemRec = (function (_super) {
__extends(TreeItemRec, _super);
function TreeItemRec(defaults) {
_super.apply(this, arguments);
}
TreeItemRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("ParentId", "parentIdAttr", "ParentId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Label", "labelAttr", "Label", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Active", "activeAttr", "Active", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Href", "hrefAttr", "Href", false, false, OS.DataTypes.DataTypes.Text, function () {
return "javascript: void(0)";
}, true), 
this.attr("Rel", "relAttr", "Rel", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Children", "childrenAttr", "Children", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Order", "orderAttr", "Order", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Opened", "openedAttr", "Opened", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Selected", "selectedAttr", "Selected", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
TreeItemRec.init();
return TreeItemRec;
})(OS.DataTypes.GenericRecord);
LLP_EntityModel.TreeItemRec = TreeItemRec;

});
define("LLP_Entity.model$LLP_INGEntityRec", ["exports", "OutSystems/ClientRuntime/Main", "LLP_Entity.model"], function (exports, OutSystems, LLP_EntityModel) {
var OS = OutSystems.Internal;
var LLP_INGEntityRec = (function (_super) {
__extends(LLP_INGEntityRec, _super);
function LLP_INGEntityRec(defaults) {
_super.apply(this, arguments);
}
LLP_INGEntityRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Description", "descriptionAttr", "Description", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Code", "codeAttr", "Code", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ParentEntityId", "parentEntityIdAttr", "ParentEntityId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("TopEntityId", "topEntityIdAttr", "TopEntityId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("IsActive", "isActiveAttr", "IsActive", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
LLP_INGEntityRec.init();
return LLP_INGEntityRec;
})(OS.DataTypes.GenericRecord);
LLP_EntityModel.LLP_INGEntityRec = LLP_INGEntityRec;

});
define("LLP_Entity.model$TreeNodeRec", ["exports", "OutSystems/ClientRuntime/Main", "LLP_Entity.model"], function (exports, OutSystems, LLP_EntityModel) {
var OS = OutSystems.Internal;
var TreeNodeRec = (function (_super) {
__extends(TreeNodeRec, _super);
function TreeNodeRec(defaults) {
_super.apply(this, arguments);
}
TreeNodeRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
TreeNodeRec.fromStructure = function (str) {
return new TreeNodeRec(new TreeNodeRec.RecordClass({
idAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
TreeNodeRec.init();
return TreeNodeRec;
})(OS.DataTypes.GenericRecord);
LLP_EntityModel.TreeNodeRec = TreeNodeRec;

});
define("LLP_Entity.model$LLP_BaseEntityBancairRec", ["exports", "OutSystems/ClientRuntime/Main", "LLP_Entity.model"], function (exports, OutSystems, LLP_EntityModel) {
var OS = OutSystems.Internal;
var LLP_BaseEntityBancairRec = (function (_super) {
__extends(LLP_BaseEntityBancairRec, _super);
function LLP_BaseEntityBancairRec(defaults) {
_super.apply(this, arguments);
}
LLP_BaseEntityBancairRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("CCRM_CODE", "cCRM_CODEAttr", "CCRM_CODE", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ID_DESCRIPTION", "iD_DESCRIPTIONAttr", "ID_DESCRIPTION", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsActive", "isActiveAttr", "IsActive", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("ANA_ELIGIBLE", "aNA_ELIGIBLEAttr", "ANA_ELIGIBLE", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("RRE_ELIGIBLE", "rRE_ELIGIBLEAttr", "RRE_ELIGIBLE", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CRE_ELIGIBLE", "cRE_ELIGIBLEAttr", "CRE_ELIGIBLE", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("FINREP_DET_ELIGIBLE", "fINREP_DET_ELIGIBLEAttr", "FINREP_DET_ELIGIBLE", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CTRY", "cTRYAttr", "CTRY", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MMT_ELIGIBLE", "mMT_ELIGIBLEAttr", "MMT_ELIGIBLE", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("WB_REGION", "wB_REGIONAttr", "WB_REGION", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Level", "levelAttr", "Level", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("ParentId", "parentIdAttr", "ParentId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("PARENT_CCRM_CODE", "pARENT_CCRM_CODEAttr", "PARENT_CCRM_CODE", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
LLP_BaseEntityBancairRec.init();
return LLP_BaseEntityBancairRec;
})(OS.DataTypes.GenericRecord);
LLP_EntityModel.LLP_BaseEntityBancairRec = LLP_BaseEntityBancairRec;

});
define("LLP_Entity.model", ["exports", "OutSystems/ClientRuntime/Main"], function (exports, OutSystems) {
var OS = OutSystems.Internal;
var LLP_EntityModel = exports;
});
