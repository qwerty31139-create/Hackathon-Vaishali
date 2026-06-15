define("Extension.Xml.model$XmlErrorRec", ["exports", "OutSystems/ClientRuntime/Main", "Extension.Xml.model"], function (exports, OutSystems, Extension_XmlModel) {
var OS = OutSystems.Internal;
var XmlErrorRec = (function (_super) {
__extends(XmlErrorRec, _super);
function XmlErrorRec(defaults) {
_super.apply(this, arguments);
}
XmlErrorRec.attributesToDeclare = function () {
return [
this.attr("Severity", "severityAttr", "Severity", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Message", "messageAttr", "Message", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
XmlErrorRec.init();
return XmlErrorRec;
})(OS.DataTypes.GenericRecord);
Extension_XmlModel.XmlErrorRec = XmlErrorRec;

});
define("Extension.Xml.model$XsltParamRec", ["exports", "OutSystems/ClientRuntime/Main", "Extension.Xml.model"], function (exports, OutSystems, Extension_XmlModel) {
var OS = OutSystems.Internal;
var XsltParamRec = (function (_super) {
__extends(XsltParamRec, _super);
function XsltParamRec(defaults) {
_super.apply(this, arguments);
}
XsltParamRec.attributesToDeclare = function () {
return [
this.attr("Name", "nameAttr", "Name", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Value", "valueAttr", "Value", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
XsltParamRec.init();
return XsltParamRec;
})(OS.DataTypes.GenericRecord);
Extension_XmlModel.XsltParamRec = XsltParamRec;

});
define("Extension.Xml.model$XsltParamRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.Xml.model", "Extension.Xml.model$XsltParamRec"], function (exports, OutSystems, Extension_XmlModel) {
var OS = OutSystems.Internal;
var XsltParamRecord = (function (_super) {
__extends(XsltParamRecord, _super);
function XsltParamRecord(defaults) {
_super.apply(this, arguments);
}
XsltParamRecord.attributesToDeclare = function () {
return [
this.attr("XsltParam", "xsltParamAttr", "XsltParam", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_XmlModel.XsltParamRec());
}, true, Extension_XmlModel.XsltParamRec)
].concat(_super.attributesToDeclare.call(this));
};
XsltParamRecord.fromStructure = function (str) {
return new XsltParamRecord(new XsltParamRecord.RecordClass({
xsltParamAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
XsltParamRecord._isAnonymousRecord = true;
XsltParamRecord.UniqueId = "bcae707f-2fe9-a35f-2e27-8bdb18b9d864";
XsltParamRecord.init();
return XsltParamRecord;
})(OS.DataTypes.GenericRecord);
Extension_XmlModel.XsltParamRecord = XsltParamRecord;

});
define("Extension.Xml.model$XsltParamRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.Xml.model", "Extension.Xml.model$XsltParamRecord"], function (exports, OutSystems, Extension_XmlModel) {
var OS = OutSystems.Internal;
var XsltParamRecordList = (function (_super) {
__extends(XsltParamRecordList, _super);
function XsltParamRecordList(defaults) {
_super.apply(this, arguments);
}
XsltParamRecordList.itemType = Extension_XmlModel.XsltParamRecord;
return XsltParamRecordList;
})(OS.DataTypes.GenericRecordList);
Extension_XmlModel.XsltParamRecordList = XsltParamRecordList;

});
define("Extension.Xml.model$XmlErrorRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.Xml.model", "Extension.Xml.model$XmlErrorRec"], function (exports, OutSystems, Extension_XmlModel) {
var OS = OutSystems.Internal;
var XmlErrorRecord = (function (_super) {
__extends(XmlErrorRecord, _super);
function XmlErrorRecord(defaults) {
_super.apply(this, arguments);
}
XmlErrorRecord.attributesToDeclare = function () {
return [
this.attr("XmlError", "xmlErrorAttr", "XmlError", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_XmlModel.XmlErrorRec());
}, true, Extension_XmlModel.XmlErrorRec)
].concat(_super.attributesToDeclare.call(this));
};
XmlErrorRecord.fromStructure = function (str) {
return new XmlErrorRecord(new XmlErrorRecord.RecordClass({
xmlErrorAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
XmlErrorRecord._isAnonymousRecord = true;
XmlErrorRecord.UniqueId = "b001a76c-3ac1-211c-c0ff-9dad63ad60b1";
XmlErrorRecord.init();
return XmlErrorRecord;
})(OS.DataTypes.GenericRecord);
Extension_XmlModel.XmlErrorRecord = XmlErrorRecord;

});
define("Extension.Xml.model$XmlErrorRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.Xml.model", "Extension.Xml.model$XmlErrorRecord"], function (exports, OutSystems, Extension_XmlModel) {
var OS = OutSystems.Internal;
var XmlErrorRecordList = (function (_super) {
__extends(XmlErrorRecordList, _super);
function XmlErrorRecordList(defaults) {
_super.apply(this, arguments);
}
XmlErrorRecordList.itemType = Extension_XmlModel.XmlErrorRecord;
return XmlErrorRecordList;
})(OS.DataTypes.GenericRecordList);
Extension_XmlModel.XmlErrorRecordList = XmlErrorRecordList;

});
define("Extension.Xml.model", ["exports", "OutSystems/ClientRuntime/Main"], function (exports, OutSystems) {
var OS = OutSystems.Internal;
var Extension_XmlModel = exports;
});
