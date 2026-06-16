define("Extension.Sanitization.model$IntegerLiteralRec", ["exports", "OutSystems/ClientRuntime/Main", "Extension.Sanitization.model"], function (exports, OutSystems, Extension_SanitizationModel) {
var OS = OutSystems.Internal;
var IntegerLiteralRec = (function (_super) {
__extends(IntegerLiteralRec, _super);
function IntegerLiteralRec(defaults) {
_super.apply(this, arguments);
}
IntegerLiteralRec.attributesToDeclare = function () {
return [
this.attr("Value", "valueAttr", "Value", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
IntegerLiteralRec.fromStructure = function (str) {
return new IntegerLiteralRec(new IntegerLiteralRec.RecordClass({
valueAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
IntegerLiteralRec.init();
return IntegerLiteralRec;
})(OS.DataTypes.GenericRecord);
Extension_SanitizationModel.IntegerLiteralRec = IntegerLiteralRec;

});
define("Extension.Sanitization.model$IntegerLiteralRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.Sanitization.model", "Extension.Sanitization.model$IntegerLiteralRec"], function (exports, OutSystems, Extension_SanitizationModel) {
var OS = OutSystems.Internal;
var IntegerLiteralRecord = (function (_super) {
__extends(IntegerLiteralRecord, _super);
function IntegerLiteralRecord(defaults) {
_super.apply(this, arguments);
}
IntegerLiteralRecord.attributesToDeclare = function () {
return [
this.attr("IntegerLiteral", "integerLiteralAttr", "IntegerLiteral", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_SanitizationModel.IntegerLiteralRec());
}, true, Extension_SanitizationModel.IntegerLiteralRec)
].concat(_super.attributesToDeclare.call(this));
};
IntegerLiteralRecord.fromStructure = function (str) {
return new IntegerLiteralRecord(new IntegerLiteralRecord.RecordClass({
integerLiteralAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
IntegerLiteralRecord._isAnonymousRecord = true;
IntegerLiteralRecord.UniqueId = "501f23bc-6d75-0fe0-b76b-3bfaa246f6ae";
IntegerLiteralRecord.init();
return IntegerLiteralRecord;
})(OS.DataTypes.GenericRecord);
Extension_SanitizationModel.IntegerLiteralRecord = IntegerLiteralRecord;

});
define("Extension.Sanitization.model$IntegerLiteralRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.Sanitization.model", "Extension.Sanitization.model$IntegerLiteralRecord"], function (exports, OutSystems, Extension_SanitizationModel) {
var OS = OutSystems.Internal;
var IntegerLiteralRecordList = (function (_super) {
__extends(IntegerLiteralRecordList, _super);
function IntegerLiteralRecordList(defaults) {
_super.apply(this, arguments);
}
IntegerLiteralRecordList.itemType = Extension_SanitizationModel.IntegerLiteralRecord;
return IntegerLiteralRecordList;
})(OS.DataTypes.GenericRecordList);
Extension_SanitizationModel.IntegerLiteralRecordList = IntegerLiteralRecordList;

});
define("Extension.Sanitization.model$TextLiteralRec", ["exports", "OutSystems/ClientRuntime/Main", "Extension.Sanitization.model"], function (exports, OutSystems, Extension_SanitizationModel) {
var OS = OutSystems.Internal;
var TextLiteralRec = (function (_super) {
__extends(TextLiteralRec, _super);
function TextLiteralRec(defaults) {
_super.apply(this, arguments);
}
TextLiteralRec.attributesToDeclare = function () {
return [
this.attr("Value", "valueAttr", "Value", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
TextLiteralRec.fromStructure = function (str) {
return new TextLiteralRec(new TextLiteralRec.RecordClass({
valueAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
TextLiteralRec.init();
return TextLiteralRec;
})(OS.DataTypes.GenericRecord);
Extension_SanitizationModel.TextLiteralRec = TextLiteralRec;

});
define("Extension.Sanitization.model$TextLiteralRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.Sanitization.model", "Extension.Sanitization.model$TextLiteralRec"], function (exports, OutSystems, Extension_SanitizationModel) {
var OS = OutSystems.Internal;
var TextLiteralRecord = (function (_super) {
__extends(TextLiteralRecord, _super);
function TextLiteralRecord(defaults) {
_super.apply(this, arguments);
}
TextLiteralRecord.attributesToDeclare = function () {
return [
this.attr("TextLiteral", "textLiteralAttr", "TextLiteral", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_SanitizationModel.TextLiteralRec());
}, true, Extension_SanitizationModel.TextLiteralRec)
].concat(_super.attributesToDeclare.call(this));
};
TextLiteralRecord.fromStructure = function (str) {
return new TextLiteralRecord(new TextLiteralRecord.RecordClass({
textLiteralAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
TextLiteralRecord._isAnonymousRecord = true;
TextLiteralRecord.UniqueId = "29e2163d-2345-da7c-6960-7a126cd47369";
TextLiteralRecord.init();
return TextLiteralRecord;
})(OS.DataTypes.GenericRecord);
Extension_SanitizationModel.TextLiteralRecord = TextLiteralRecord;

});
define("Extension.Sanitization.model$TextLiteralRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.Sanitization.model", "Extension.Sanitization.model$TextLiteralRecord"], function (exports, OutSystems, Extension_SanitizationModel) {
var OS = OutSystems.Internal;
var TextLiteralRecordList = (function (_super) {
__extends(TextLiteralRecordList, _super);
function TextLiteralRecordList(defaults) {
_super.apply(this, arguments);
}
TextLiteralRecordList.itemType = Extension_SanitizationModel.TextLiteralRecord;
return TextLiteralRecordList;
})(OS.DataTypes.GenericRecordList);
Extension_SanitizationModel.TextLiteralRecordList = TextLiteralRecordList;

});
define("Extension.Sanitization.model", ["exports", "OutSystems/ClientRuntime/Main"], function (exports, OutSystems) {
var OS = OutSystems.Internal;
var Extension_SanitizationModel = exports;
});
