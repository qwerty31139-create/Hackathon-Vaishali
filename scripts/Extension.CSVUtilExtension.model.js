define("Extension.CSVUtilExtension.model$CSVLoadConfigRec", ["exports", "OutSystems/ClientRuntime/Main", "Extension.CSVUtilExtension.model"], function (exports, OutSystems, Extension_CSVUtilExtensionModel) {
var OS = OutSystems.Internal;
var CSVLoadConfigRec = (function (_super) {
__extends(CSVLoadConfigRec, _super);
function CSVLoadConfigRec(defaults) {
_super.apply(this, arguments);
}
CSVLoadConfigRec.attributesToDeclare = function () {
return [
this.attr("Encode", "encodeAttr", "Encode", false, false, OS.DataTypes.DataTypes.Text, function () {
return "utf-8";
}, true), 
this.attr("IsSkipHeader", "isSkipHeaderAttr", "IsSkipHeader", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, true), 
this.attr("IsIgnoreColumnChange", "isIgnoreColumnChangeAttr", "IsIgnoreColumnChange", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, true), 
this.attr("FieldDelimiter", "fieldDelimiterAttr", "FieldDelimiter", false, false, OS.DataTypes.DataTypes.Text, function () {
return ",";
}, true), 
this.attr("IsDisableDoubleQuote", "isDisableDoubleQuoteAttr", "IsDisableDoubleQuote", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("AttrFilter", "attrFilterAttr", "AttrFilter", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsDropCommentRow", "isDropCommentRowAttr", "IsDropCommentRow", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
CSVLoadConfigRec.init();
return CSVLoadConfigRec;
})(OS.DataTypes.GenericRecord);
Extension_CSVUtilExtensionModel.CSVLoadConfigRec = CSVLoadConfigRec;

});
define("Extension.CSVUtilExtension.model$CSVLoadConfigRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.CSVUtilExtension.model", "Extension.CSVUtilExtension.model$CSVLoadConfigRec"], function (exports, OutSystems, Extension_CSVUtilExtensionModel) {
var OS = OutSystems.Internal;
var CSVLoadConfigRecord = (function (_super) {
__extends(CSVLoadConfigRecord, _super);
function CSVLoadConfigRecord(defaults) {
_super.apply(this, arguments);
}
CSVLoadConfigRecord.attributesToDeclare = function () {
return [
this.attr("CSVLoadConfig", "cSVLoadConfigAttr", "CSVLoadConfig", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_CSVUtilExtensionModel.CSVLoadConfigRec());
}, true, Extension_CSVUtilExtensionModel.CSVLoadConfigRec)
].concat(_super.attributesToDeclare.call(this));
};
CSVLoadConfigRecord.fromStructure = function (str) {
return new CSVLoadConfigRecord(new CSVLoadConfigRecord.RecordClass({
cSVLoadConfigAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
CSVLoadConfigRecord._isAnonymousRecord = true;
CSVLoadConfigRecord.UniqueId = "102366c8-60dc-0de2-8301-03f332514c91";
CSVLoadConfigRecord.init();
return CSVLoadConfigRecord;
})(OS.DataTypes.GenericRecord);
Extension_CSVUtilExtensionModel.CSVLoadConfigRecord = CSVLoadConfigRecord;

});
define("Extension.CSVUtilExtension.model$CSVLoadConfigRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.CSVUtilExtension.model", "Extension.CSVUtilExtension.model$CSVLoadConfigRecord"], function (exports, OutSystems, Extension_CSVUtilExtensionModel) {
var OS = OutSystems.Internal;
var CSVLoadConfigRecordList = (function (_super) {
__extends(CSVLoadConfigRecordList, _super);
function CSVLoadConfigRecordList(defaults) {
_super.apply(this, arguments);
}
CSVLoadConfigRecordList.itemType = Extension_CSVUtilExtensionModel.CSVLoadConfigRecord;
return CSVLoadConfigRecordList;
})(OS.DataTypes.GenericRecordList);
Extension_CSVUtilExtensionModel.CSVLoadConfigRecordList = CSVLoadConfigRecordList;

});
define("Extension.CSVUtilExtension.model$CSVExportConfigRec", ["exports", "OutSystems/ClientRuntime/Main", "Extension.CSVUtilExtension.model"], function (exports, OutSystems, Extension_CSVUtilExtensionModel) {
var OS = OutSystems.Internal;
var CSVExportConfigRec = (function (_super) {
__extends(CSVExportConfigRec, _super);
function CSVExportConfigRec(defaults) {
_super.apply(this, arguments);
}
CSVExportConfigRec.attributesToDeclare = function () {
return [
this.attr("IsShowHeader", "isShowHeaderAttr", "IsShowHeader", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, true), 
this.attr("FieldDelimiter", "fieldDelimiterAttr", "FieldDelimiter", false, false, OS.DataTypes.DataTypes.Text, function () {
return ",";
}, true), 
this.attr("EncodeMode", "encodeModeAttr", "EncodeMode", false, false, OS.DataTypes.DataTypes.Text, function () {
return "auto";
}, true), 
this.attr("LineSeperator", "lineSeperatorAttr", "LineSeperator", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CustomHeader", "customHeaderAttr", "CustomHeader", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("AttrFilter", "attrFilterAttr", "AttrFilter", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
CSVExportConfigRec.init();
return CSVExportConfigRec;
})(OS.DataTypes.GenericRecord);
Extension_CSVUtilExtensionModel.CSVExportConfigRec = CSVExportConfigRec;

});
define("Extension.CSVUtilExtension.model$CSVExportConfigRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.CSVUtilExtension.model", "Extension.CSVUtilExtension.model$CSVExportConfigRec"], function (exports, OutSystems, Extension_CSVUtilExtensionModel) {
var OS = OutSystems.Internal;
var CSVExportConfigRecord = (function (_super) {
__extends(CSVExportConfigRecord, _super);
function CSVExportConfigRecord(defaults) {
_super.apply(this, arguments);
}
CSVExportConfigRecord.attributesToDeclare = function () {
return [
this.attr("CSVExportConfig", "cSVExportConfigAttr", "CSVExportConfig", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_CSVUtilExtensionModel.CSVExportConfigRec());
}, true, Extension_CSVUtilExtensionModel.CSVExportConfigRec)
].concat(_super.attributesToDeclare.call(this));
};
CSVExportConfigRecord.fromStructure = function (str) {
return new CSVExportConfigRecord(new CSVExportConfigRecord.RecordClass({
cSVExportConfigAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
CSVExportConfigRecord._isAnonymousRecord = true;
CSVExportConfigRecord.UniqueId = "11455b25-1aeb-6b46-7015-63b7c5c71840";
CSVExportConfigRecord.init();
return CSVExportConfigRecord;
})(OS.DataTypes.GenericRecord);
Extension_CSVUtilExtensionModel.CSVExportConfigRecord = CSVExportConfigRecord;

});
define("Extension.CSVUtilExtension.model$CSVExportConfigRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.CSVUtilExtension.model", "Extension.CSVUtilExtension.model$CSVExportConfigRecord"], function (exports, OutSystems, Extension_CSVUtilExtensionModel) {
var OS = OutSystems.Internal;
var CSVExportConfigRecordList = (function (_super) {
__extends(CSVExportConfigRecordList, _super);
function CSVExportConfigRecordList(defaults) {
_super.apply(this, arguments);
}
CSVExportConfigRecordList.itemType = Extension_CSVUtilExtensionModel.CSVExportConfigRecord;
return CSVExportConfigRecordList;
})(OS.DataTypes.GenericRecordList);
Extension_CSVUtilExtensionModel.CSVExportConfigRecordList = CSVExportConfigRecordList;

});
define("Extension.CSVUtilExtension.model", ["exports", "OutSystems/ClientRuntime/Main"], function (exports, OutSystems) {
var OS = OutSystems.Internal;
var Extension_CSVUtilExtensionModel = exports;
});
