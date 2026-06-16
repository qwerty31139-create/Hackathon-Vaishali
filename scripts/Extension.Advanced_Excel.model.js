define("Extension.Advanced_Excel.model$ColorRec", ["exports", "OutSystems/ClientRuntime/Main", "Extension.Advanced_Excel.model"], function (exports, OutSystems, Extension_Advanced_ExcelModel) {
var OS = OutSystems.Internal;
var ColorRec = (function (_super) {
__extends(ColorRec, _super);
function ColorRec(defaults) {
_super.apply(this, arguments);
}
ColorRec.attributesToDeclare = function () {
return [
this.attr("IsKnownColor", "isKnownColorAttr", "IsKnownColor", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("IsNamedColor", "isNamedColorAttr", "IsNamedColor", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("IsSystemColor", "isSystemColorAttr", "IsSystemColor", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("A", "aAttr", "A", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("R", "rAttr", "R", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("G", "gAttr", "G", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("B", "bAttr", "B", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Name", "nameAttr", "Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ColorRec.init();
return ColorRec;
})(OS.DataTypes.GenericRecord);
Extension_Advanced_ExcelModel.ColorRec = ColorRec;

});
define("Extension.Advanced_Excel.model$NewSheetRec", ["exports", "OutSystems/ClientRuntime/Main", "Extension.Advanced_Excel.model"], function (exports, OutSystems, Extension_Advanced_ExcelModel) {
var OS = OutSystems.Internal;
var NewSheetRec = (function (_super) {
__extends(NewSheetRec, _super);
function NewSheetRec(defaults) {
_super.apply(this, arguments);
}
NewSheetRec.attributesToDeclare = function () {
return [
this.attr("Name", "nameAttr", "Name", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Index", "indexAttr", "Index", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
NewSheetRec.init();
return NewSheetRec;
})(OS.DataTypes.GenericRecord);
Extension_Advanced_ExcelModel.NewSheetRec = NewSheetRec;

});
define("Extension.Advanced_Excel.model$NewSheetRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.Advanced_Excel.model", "Extension.Advanced_Excel.model$NewSheetRec"], function (exports, OutSystems, Extension_Advanced_ExcelModel) {
var OS = OutSystems.Internal;
var NewSheetRecord = (function (_super) {
__extends(NewSheetRecord, _super);
function NewSheetRecord(defaults) {
_super.apply(this, arguments);
}
NewSheetRecord.attributesToDeclare = function () {
return [
this.attr("NewSheet", "newSheetAttr", "NewSheet", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_Advanced_ExcelModel.NewSheetRec());
}, true, Extension_Advanced_ExcelModel.NewSheetRec)
].concat(_super.attributesToDeclare.call(this));
};
NewSheetRecord.fromStructure = function (str) {
return new NewSheetRecord(new NewSheetRecord.RecordClass({
newSheetAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
NewSheetRecord._isAnonymousRecord = true;
NewSheetRecord.UniqueId = "057ff3f0-0533-ce4e-87b2-ecad1b65f5b2";
NewSheetRecord.init();
return NewSheetRecord;
})(OS.DataTypes.GenericRecord);
Extension_Advanced_ExcelModel.NewSheetRecord = NewSheetRecord;

});
define("Extension.Advanced_Excel.model$AddressRec", ["exports", "OutSystems/ClientRuntime/Main", "Extension.Advanced_Excel.model"], function (exports, OutSystems, Extension_Advanced_ExcelModel) {
var OS = OutSystems.Internal;
var AddressRec = (function (_super) {
__extends(AddressRec, _super);
function AddressRec(defaults) {
_super.apply(this, arguments);
}
AddressRec.attributesToDeclare = function () {
return [
this.attr("Address", "addressAttr", "Address", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Column", "columnAttr", "Column", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("IsRef", "isRefAttr", "IsRef", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Row", "rowAttr", "Row", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
AddressRec.init();
return AddressRec;
})(OS.DataTypes.GenericRecord);
Extension_Advanced_ExcelModel.AddressRec = AddressRec;

});
define("Extension.Advanced_Excel.model$AddressRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.Advanced_Excel.model", "Extension.Advanced_Excel.model$AddressRec"], function (exports, OutSystems, Extension_Advanced_ExcelModel) {
var OS = OutSystems.Internal;
var AddressRecord = (function (_super) {
__extends(AddressRecord, _super);
function AddressRecord(defaults) {
_super.apply(this, arguments);
}
AddressRecord.attributesToDeclare = function () {
return [
this.attr("Address", "addressAttr", "Address", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_Advanced_ExcelModel.AddressRec());
}, true, Extension_Advanced_ExcelModel.AddressRec)
].concat(_super.attributesToDeclare.call(this));
};
AddressRecord.fromStructure = function (str) {
return new AddressRecord(new AddressRecord.RecordClass({
addressAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AddressRecord._isAnonymousRecord = true;
AddressRecord.UniqueId = "f515a9b1-b554-ca3a-4bcf-e2a572f5d26a";
AddressRecord.init();
return AddressRecord;
})(OS.DataTypes.GenericRecord);
Extension_Advanced_ExcelModel.AddressRecord = AddressRecord;

});
define("Extension.Advanced_Excel.model$FillStyleRec", ["exports", "OutSystems/ClientRuntime/Main", "Extension.Advanced_Excel.model"], function (exports, OutSystems, Extension_Advanced_ExcelModel) {
var OS = OutSystems.Internal;
var FillStyleRec = (function (_super) {
__extends(FillStyleRec, _super);
function FillStyleRec(defaults) {
_super.apply(this, arguments);
}
FillStyleRec.attributesToDeclare = function () {
return [
this.attr("BackgroundColor", "backgroundColorAttr", "BackgroundColor", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("PatternColor", "patternColorAttr", "PatternColor", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("PatternType", "patternTypeAttr", "PatternType", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
FillStyleRec.init();
return FillStyleRec;
})(OS.DataTypes.GenericRecord);
Extension_Advanced_ExcelModel.FillStyleRec = FillStyleRec;

});
define("Extension.Advanced_Excel.model$FillStyleRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.Advanced_Excel.model", "Extension.Advanced_Excel.model$FillStyleRec"], function (exports, OutSystems, Extension_Advanced_ExcelModel) {
var OS = OutSystems.Internal;
var FillStyleRecord = (function (_super) {
__extends(FillStyleRecord, _super);
function FillStyleRecord(defaults) {
_super.apply(this, arguments);
}
FillStyleRecord.attributesToDeclare = function () {
return [
this.attr("FillStyle", "fillStyleAttr", "FillStyle", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_Advanced_ExcelModel.FillStyleRec());
}, true, Extension_Advanced_ExcelModel.FillStyleRec)
].concat(_super.attributesToDeclare.call(this));
};
FillStyleRecord.fromStructure = function (str) {
return new FillStyleRecord(new FillStyleRecord.RecordClass({
fillStyleAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
FillStyleRecord._isAnonymousRecord = true;
FillStyleRecord.UniqueId = "d81c70fd-4401-e4e5-978a-349ec7bf1843";
FillStyleRecord.init();
return FillStyleRecord;
})(OS.DataTypes.GenericRecord);
Extension_Advanced_ExcelModel.FillStyleRecord = FillStyleRecord;

});
define("Extension.Advanced_Excel.model$BorderStyleRec", ["exports", "OutSystems/ClientRuntime/Main", "Extension.Advanced_Excel.model"], function (exports, OutSystems, Extension_Advanced_ExcelModel) {
var OS = OutSystems.Internal;
var BorderStyleRec = (function (_super) {
__extends(BorderStyleRec, _super);
function BorderStyleRec(defaults) {
_super.apply(this, arguments);
}
BorderStyleRec.attributesToDeclare = function () {
return [
this.attr("Style", "styleAttr", "Style", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Color", "colorAttr", "Color", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
BorderStyleRec.init();
return BorderStyleRec;
})(OS.DataTypes.GenericRecord);
Extension_Advanced_ExcelModel.BorderStyleRec = BorderStyleRec;

});
define("Extension.Advanced_Excel.model$BorderStyleRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.Advanced_Excel.model", "Extension.Advanced_Excel.model$BorderStyleRec"], function (exports, OutSystems, Extension_Advanced_ExcelModel) {
var OS = OutSystems.Internal;
var BorderStyleRecord = (function (_super) {
__extends(BorderStyleRecord, _super);
function BorderStyleRecord(defaults) {
_super.apply(this, arguments);
}
BorderStyleRecord.attributesToDeclare = function () {
return [
this.attr("BorderStyle", "borderStyleAttr", "BorderStyle", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_Advanced_ExcelModel.BorderStyleRec());
}, true, Extension_Advanced_ExcelModel.BorderStyleRec)
].concat(_super.attributesToDeclare.call(this));
};
BorderStyleRecord.fromStructure = function (str) {
return new BorderStyleRecord(new BorderStyleRecord.RecordClass({
borderStyleAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
BorderStyleRecord._isAnonymousRecord = true;
BorderStyleRecord.UniqueId = "aec2aafa-e8aa-26bb-b4b2-2b5960b1ef4c";
BorderStyleRecord.init();
return BorderStyleRecord;
})(OS.DataTypes.GenericRecord);
Extension_Advanced_ExcelModel.BorderStyleRecord = BorderStyleRecord;

});
define("Extension.Advanced_Excel.model$FontStyleRec", ["exports", "OutSystems/ClientRuntime/Main", "Extension.Advanced_Excel.model"], function (exports, OutSystems, Extension_Advanced_ExcelModel) {
var OS = OutSystems.Internal;
var FontStyleRec = (function (_super) {
__extends(FontStyleRec, _super);
function FontStyleRec(defaults) {
_super.apply(this, arguments);
}
FontStyleRec.attributesToDeclare = function () {
return [
this.attr("Bold", "boldAttr", "Bold", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Italic", "italicAttr", "Italic", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Strike", "strikeAttr", "Strike", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Color", "colorAttr", "Color", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Underline", "underlineAttr", "Underline", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
FontStyleRec.init();
return FontStyleRec;
})(OS.DataTypes.GenericRecord);
Extension_Advanced_ExcelModel.FontStyleRec = FontStyleRec;

});
define("Extension.Advanced_Excel.model$FontStyleRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.Advanced_Excel.model", "Extension.Advanced_Excel.model$FontStyleRec"], function (exports, OutSystems, Extension_Advanced_ExcelModel) {
var OS = OutSystems.Internal;
var FontStyleRecord = (function (_super) {
__extends(FontStyleRecord, _super);
function FontStyleRecord(defaults) {
_super.apply(this, arguments);
}
FontStyleRecord.attributesToDeclare = function () {
return [
this.attr("FontStyle", "fontStyleAttr", "FontStyle", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_Advanced_ExcelModel.FontStyleRec());
}, true, Extension_Advanced_ExcelModel.FontStyleRec)
].concat(_super.attributesToDeclare.call(this));
};
FontStyleRecord.fromStructure = function (str) {
return new FontStyleRecord(new FontStyleRecord.RecordClass({
fontStyleAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
FontStyleRecord._isAnonymousRecord = true;
FontStyleRecord.UniqueId = "6010514f-fdc9-577e-a196-de51d4074aeb";
FontStyleRecord.init();
return FontStyleRecord;
})(OS.DataTypes.GenericRecord);
Extension_Advanced_ExcelModel.FontStyleRecord = FontStyleRecord;

});
define("Extension.Advanced_Excel.model$ConditionalFormatStyleRec", ["exports", "OutSystems/ClientRuntime/Main", "Extension.Advanced_Excel.model", "Extension.Advanced_Excel.model$FillStyleRecord", "Extension.Advanced_Excel.model$BorderStyleRecord", "Extension.Advanced_Excel.model$FontStyleRecord"], function (exports, OutSystems, Extension_Advanced_ExcelModel) {
var OS = OutSystems.Internal;
var ConditionalFormatStyleRec = (function (_super) {
__extends(ConditionalFormatStyleRec, _super);
function ConditionalFormatStyleRec(defaults) {
_super.apply(this, arguments);
}
ConditionalFormatStyleRec.attributesToDeclare = function () {
return [
this.attr("Fill", "fillAttr", "Fill", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_Advanced_ExcelModel.FillStyleRecord());
}, true, Extension_Advanced_ExcelModel.FillStyleRecord), 
this.attr("NumberFormat", "numberFormatAttr", "NumberFormat", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("BorderTop", "borderTopAttr", "BorderTop", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_Advanced_ExcelModel.BorderStyleRecord());
}, true, Extension_Advanced_ExcelModel.BorderStyleRecord), 
this.attr("BorderBottom", "borderBottomAttr", "BorderBottom", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_Advanced_ExcelModel.BorderStyleRecord());
}, true, Extension_Advanced_ExcelModel.BorderStyleRecord), 
this.attr("BorderLeft", "borderLeftAttr", "BorderLeft", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_Advanced_ExcelModel.BorderStyleRecord());
}, true, Extension_Advanced_ExcelModel.BorderStyleRecord), 
this.attr("BorderRight", "borderRightAttr", "BorderRight", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_Advanced_ExcelModel.BorderStyleRecord());
}, true, Extension_Advanced_ExcelModel.BorderStyleRecord), 
this.attr("Font", "fontAttr", "Font", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_Advanced_ExcelModel.FontStyleRecord());
}, true, Extension_Advanced_ExcelModel.FontStyleRecord)
].concat(_super.attributesToDeclare.call(this));
};
ConditionalFormatStyleRec.init();
return ConditionalFormatStyleRec;
})(OS.DataTypes.GenericRecord);
Extension_Advanced_ExcelModel.ConditionalFormatStyleRec = ConditionalFormatStyleRec;

});
define("Extension.Advanced_Excel.model$ConditionalFormatStyleRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.Advanced_Excel.model", "Extension.Advanced_Excel.model$ConditionalFormatStyleRec"], function (exports, OutSystems, Extension_Advanced_ExcelModel) {
var OS = OutSystems.Internal;
var ConditionalFormatStyleRecord = (function (_super) {
__extends(ConditionalFormatStyleRecord, _super);
function ConditionalFormatStyleRecord(defaults) {
_super.apply(this, arguments);
}
ConditionalFormatStyleRecord.attributesToDeclare = function () {
return [
this.attr("ConditionalFormatStyle", "conditionalFormatStyleAttr", "ConditionalFormatStyle", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_Advanced_ExcelModel.ConditionalFormatStyleRec());
}, true, Extension_Advanced_ExcelModel.ConditionalFormatStyleRec)
].concat(_super.attributesToDeclare.call(this));
};
ConditionalFormatStyleRecord.fromStructure = function (str) {
return new ConditionalFormatStyleRecord(new ConditionalFormatStyleRecord.RecordClass({
conditionalFormatStyleAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ConditionalFormatStyleRecord._isAnonymousRecord = true;
ConditionalFormatStyleRecord.UniqueId = "309bc9aa-6dee-7419-ae12-77baa162f614";
ConditionalFormatStyleRecord.init();
return ConditionalFormatStyleRecord;
})(OS.DataTypes.GenericRecord);
Extension_Advanced_ExcelModel.ConditionalFormatStyleRecord = ConditionalFormatStyleRecord;

});
define("Extension.Advanced_Excel.model$ConditionalFormatItemRec", ["exports", "OutSystems/ClientRuntime/Main", "Extension.Advanced_Excel.model", "Extension.Advanced_Excel.model$AddressRecord", "Extension.Advanced_Excel.model$ConditionalFormatStyleRecord"], function (exports, OutSystems, Extension_Advanced_ExcelModel) {
var OS = OutSystems.Internal;
var ConditionalFormatItemRec = (function (_super) {
__extends(ConditionalFormatItemRec, _super);
function ConditionalFormatItemRec(defaults) {
_super.apply(this, arguments);
}
ConditionalFormatItemRec.attributesToDeclare = function () {
return [
this.attr("Address", "addressAttr", "Address", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_Advanced_ExcelModel.AddressRecord());
}, true, Extension_Advanced_ExcelModel.AddressRecord), 
this.attr("Priority", "priorityAttr", "Priority", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 101;
}, true), 
this.attr("StopIfTrue", "stopIfTrueAttr", "StopIfTrue", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Formula", "formulaAttr", "Formula", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("RuleType", "ruleTypeAttr", "RuleType", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Style", "styleAttr", "Style", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_Advanced_ExcelModel.ConditionalFormatStyleRecord());
}, true, Extension_Advanced_ExcelModel.ConditionalFormatStyleRecord)
].concat(_super.attributesToDeclare.call(this));
};
ConditionalFormatItemRec.init();
return ConditionalFormatItemRec;
})(OS.DataTypes.GenericRecord);
Extension_Advanced_ExcelModel.ConditionalFormatItemRec = ConditionalFormatItemRec;

});
define("Extension.Advanced_Excel.model$ConditionalFormatItemRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.Advanced_Excel.model", "Extension.Advanced_Excel.model$ConditionalFormatItemRec"], function (exports, OutSystems, Extension_Advanced_ExcelModel) {
var OS = OutSystems.Internal;
var ConditionalFormatItemRecord = (function (_super) {
__extends(ConditionalFormatItemRecord, _super);
function ConditionalFormatItemRecord(defaults) {
_super.apply(this, arguments);
}
ConditionalFormatItemRecord.attributesToDeclare = function () {
return [
this.attr("ConditionalFormatItem", "conditionalFormatItemAttr", "ConditionalFormatItem", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_Advanced_ExcelModel.ConditionalFormatItemRec());
}, true, Extension_Advanced_ExcelModel.ConditionalFormatItemRec)
].concat(_super.attributesToDeclare.call(this));
};
ConditionalFormatItemRecord.fromStructure = function (str) {
return new ConditionalFormatItemRecord(new ConditionalFormatItemRecord.RecordClass({
conditionalFormatItemAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ConditionalFormatItemRecord._isAnonymousRecord = true;
ConditionalFormatItemRecord.UniqueId = "4d21b59b-e872-c115-126a-e3457d2cfff5";
ConditionalFormatItemRecord.init();
return ConditionalFormatItemRecord;
})(OS.DataTypes.GenericRecord);
Extension_Advanced_ExcelModel.ConditionalFormatItemRecord = ConditionalFormatItemRecord;

});
define("Extension.Advanced_Excel.model$ConditionalFormatItemRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.Advanced_Excel.model", "Extension.Advanced_Excel.model$ConditionalFormatItemRecord"], function (exports, OutSystems, Extension_Advanced_ExcelModel) {
var OS = OutSystems.Internal;
var ConditionalFormatItemRecordList = (function (_super) {
__extends(ConditionalFormatItemRecordList, _super);
function ConditionalFormatItemRecordList(defaults) {
_super.apply(this, arguments);
}
ConditionalFormatItemRecordList.itemType = Extension_Advanced_ExcelModel.ConditionalFormatItemRecord;
return ConditionalFormatItemRecordList;
})(OS.DataTypes.GenericRecordList);
Extension_Advanced_ExcelModel.ConditionalFormatItemRecordList = ConditionalFormatItemRecordList;

});
define("Extension.Advanced_Excel.model$DimensionRec", ["exports", "OutSystems/ClientRuntime/Main", "Extension.Advanced_Excel.model", "Extension.Advanced_Excel.model$AddressRecord"], function (exports, OutSystems, Extension_Advanced_ExcelModel) {
var OS = OutSystems.Internal;
var DimensionRec = (function (_super) {
__extends(DimensionRec, _super);
function DimensionRec(defaults) {
_super.apply(this, arguments);
}
DimensionRec.attributesToDeclare = function () {
return [
this.attr("Address", "addressAttr", "Address", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Columns", "columnsAttr", "Columns", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Rows", "rowsAttr", "Rows", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Start", "startAttr", "Start", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_Advanced_ExcelModel.AddressRecord());
}, true, Extension_Advanced_ExcelModel.AddressRecord), 
this.attr("End", "endAttr", "End", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_Advanced_ExcelModel.AddressRecord());
}, true, Extension_Advanced_ExcelModel.AddressRecord)
].concat(_super.attributesToDeclare.call(this));
};
DimensionRec.init();
return DimensionRec;
})(OS.DataTypes.GenericRecord);
Extension_Advanced_ExcelModel.DimensionRec = DimensionRec;

});
define("Extension.Advanced_Excel.model$RangeRec", ["exports", "OutSystems/ClientRuntime/Main", "Extension.Advanced_Excel.model"], function (exports, OutSystems, Extension_Advanced_ExcelModel) {
var OS = OutSystems.Internal;
var RangeRec = (function (_super) {
__extends(RangeRec, _super);
function RangeRec(defaults) {
_super.apply(this, arguments);
}
RangeRec.attributesToDeclare = function () {
return [
this.attr("StartRow", "startRowAttr", "StartRow", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("StartCol", "startColAttr", "StartCol", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("EndRow", "endRowAttr", "EndRow", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("EndCol", "endColAttr", "EndCol", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
RangeRec.init();
return RangeRec;
})(OS.DataTypes.GenericRecord);
Extension_Advanced_ExcelModel.RangeRec = RangeRec;

});
define("Extension.Advanced_Excel.model$RangeRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.Advanced_Excel.model", "Extension.Advanced_Excel.model$RangeRec"], function (exports, OutSystems, Extension_Advanced_ExcelModel) {
var OS = OutSystems.Internal;
var RangeRecord = (function (_super) {
__extends(RangeRecord, _super);
function RangeRecord(defaults) {
_super.apply(this, arguments);
}
RangeRecord.attributesToDeclare = function () {
return [
this.attr("Range", "rangeAttr", "Range", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_Advanced_ExcelModel.RangeRec());
}, true, Extension_Advanced_ExcelModel.RangeRec)
].concat(_super.attributesToDeclare.call(this));
};
RangeRecord.fromStructure = function (str) {
return new RangeRecord(new RangeRecord.RecordClass({
rangeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
RangeRecord._isAnonymousRecord = true;
RangeRecord.UniqueId = "b257477e-0823-872e-c26a-9395c344da3a";
RangeRecord.init();
return RangeRecord;
})(OS.DataTypes.GenericRecord);
Extension_Advanced_ExcelModel.RangeRecord = RangeRecord;

});
define("Extension.Advanced_Excel.model$DataSeriesRec", ["exports", "OutSystems/ClientRuntime/Main", "Extension.Advanced_Excel.model", "Extension.Advanced_Excel.model$RangeRecord"], function (exports, OutSystems, Extension_Advanced_ExcelModel) {
var OS = OutSystems.Internal;
var DataSeriesRec = (function (_super) {
__extends(DataSeriesRec, _super);
function DataSeriesRec(defaults) {
_super.apply(this, arguments);
}
DataSeriesRec.attributesToDeclare = function () {
return [
this.attr("ValueRange", "valueRangeAttr", "ValueRange", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_Advanced_ExcelModel.RangeRecord());
}, true, Extension_Advanced_ExcelModel.RangeRecord), 
this.attr("LabelRange", "labelRangeAttr", "LabelRange", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_Advanced_ExcelModel.RangeRecord());
}, true, Extension_Advanced_ExcelModel.RangeRecord), 
this.attr("Name", "nameAttr", "Name", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
DataSeriesRec.init();
return DataSeriesRec;
})(OS.DataTypes.GenericRecord);
Extension_Advanced_ExcelModel.DataSeriesRec = DataSeriesRec;

});
define("Extension.Advanced_Excel.model$DataSeriesRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.Advanced_Excel.model", "Extension.Advanced_Excel.model$DataSeriesRec"], function (exports, OutSystems, Extension_Advanced_ExcelModel) {
var OS = OutSystems.Internal;
var DataSeriesRecord = (function (_super) {
__extends(DataSeriesRecord, _super);
function DataSeriesRecord(defaults) {
_super.apply(this, arguments);
}
DataSeriesRecord.attributesToDeclare = function () {
return [
this.attr("DataSeries", "dataSeriesAttr", "DataSeries", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_Advanced_ExcelModel.DataSeriesRec());
}, true, Extension_Advanced_ExcelModel.DataSeriesRec)
].concat(_super.attributesToDeclare.call(this));
};
DataSeriesRecord.fromStructure = function (str) {
return new DataSeriesRecord(new DataSeriesRecord.RecordClass({
dataSeriesAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DataSeriesRecord._isAnonymousRecord = true;
DataSeriesRecord.UniqueId = "123ba1f1-e787-2877-9215-d3715ac25c9e";
DataSeriesRecord.init();
return DataSeriesRecord;
})(OS.DataTypes.GenericRecord);
Extension_Advanced_ExcelModel.DataSeriesRecord = DataSeriesRecord;

});
define("Extension.Advanced_Excel.model$DimensionRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.Advanced_Excel.model", "Extension.Advanced_Excel.model$DimensionRec"], function (exports, OutSystems, Extension_Advanced_ExcelModel) {
var OS = OutSystems.Internal;
var DimensionRecord = (function (_super) {
__extends(DimensionRecord, _super);
function DimensionRecord(defaults) {
_super.apply(this, arguments);
}
DimensionRecord.attributesToDeclare = function () {
return [
this.attr("Dimension", "dimensionAttr", "Dimension", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_Advanced_ExcelModel.DimensionRec());
}, true, Extension_Advanced_ExcelModel.DimensionRec)
].concat(_super.attributesToDeclare.call(this));
};
DimensionRecord.fromStructure = function (str) {
return new DimensionRecord(new DimensionRecord.RecordClass({
dimensionAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DimensionRecord._isAnonymousRecord = true;
DimensionRecord.UniqueId = "2316051a-7646-d497-6cec-517e09202819";
DimensionRecord.init();
return DimensionRecord;
})(OS.DataTypes.GenericRecord);
Extension_Advanced_ExcelModel.DimensionRecord = DimensionRecord;

});
define("Extension.Advanced_Excel.model$RangeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.Advanced_Excel.model", "Extension.Advanced_Excel.model$RangeRecord"], function (exports, OutSystems, Extension_Advanced_ExcelModel) {
var OS = OutSystems.Internal;
var RangeRecordList = (function (_super) {
__extends(RangeRecordList, _super);
function RangeRecordList(defaults) {
_super.apply(this, arguments);
}
RangeRecordList.itemType = Extension_Advanced_ExcelModel.RangeRecord;
return RangeRecordList;
})(OS.DataTypes.GenericRecordList);
Extension_Advanced_ExcelModel.RangeRecordList = RangeRecordList;

});
define("Extension.Advanced_Excel.model$ColorRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.Advanced_Excel.model", "Extension.Advanced_Excel.model$ColorRec"], function (exports, OutSystems, Extension_Advanced_ExcelModel) {
var OS = OutSystems.Internal;
var ColorRecord = (function (_super) {
__extends(ColorRecord, _super);
function ColorRecord(defaults) {
_super.apply(this, arguments);
}
ColorRecord.attributesToDeclare = function () {
return [
this.attr("Color", "colorAttr", "Color", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_Advanced_ExcelModel.ColorRec());
}, true, Extension_Advanced_ExcelModel.ColorRec)
].concat(_super.attributesToDeclare.call(this));
};
ColorRecord.fromStructure = function (str) {
return new ColorRecord(new ColorRecord.RecordClass({
colorAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ColorRecord._isAnonymousRecord = true;
ColorRecord.UniqueId = "d2e4097a-6e12-8f40-d558-5aa46caf292f";
ColorRecord.init();
return ColorRecord;
})(OS.DataTypes.GenericRecord);
Extension_Advanced_ExcelModel.ColorRecord = ColorRecord;

});
define("Extension.Advanced_Excel.model$ColorRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.Advanced_Excel.model", "Extension.Advanced_Excel.model$ColorRecord"], function (exports, OutSystems, Extension_Advanced_ExcelModel) {
var OS = OutSystems.Internal;
var ColorRecordList = (function (_super) {
__extends(ColorRecordList, _super);
function ColorRecordList(defaults) {
_super.apply(this, arguments);
}
ColorRecordList.itemType = Extension_Advanced_ExcelModel.ColorRecord;
return ColorRecordList;
})(OS.DataTypes.GenericRecordList);
Extension_Advanced_ExcelModel.ColorRecordList = ColorRecordList;

});
define("Extension.Advanced_Excel.model$BorderStyleRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.Advanced_Excel.model", "Extension.Advanced_Excel.model$BorderStyleRecord"], function (exports, OutSystems, Extension_Advanced_ExcelModel) {
var OS = OutSystems.Internal;
var BorderStyleRecordList = (function (_super) {
__extends(BorderStyleRecordList, _super);
function BorderStyleRecordList(defaults) {
_super.apply(this, arguments);
}
BorderStyleRecordList.itemType = Extension_Advanced_ExcelModel.BorderStyleRecord;
return BorderStyleRecordList;
})(OS.DataTypes.GenericRecordList);
Extension_Advanced_ExcelModel.BorderStyleRecordList = BorderStyleRecordList;

});
define("Extension.Advanced_Excel.model$ItemsRec", ["exports", "OutSystems/ClientRuntime/Main", "Extension.Advanced_Excel.model"], function (exports, OutSystems, Extension_Advanced_ExcelModel) {
var OS = OutSystems.Internal;
var ItemsRec = (function (_super) {
__extends(ItemsRec, _super);
function ItemsRec(defaults) {
_super.apply(this, arguments);
}
ItemsRec.attributesToDeclare = function () {
return [
this.attr("ItemText", "itemTextAttr", "ItemText", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ItemValue", "itemValueAttr", "ItemValue", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ItemsRec.init();
return ItemsRec;
})(OS.DataTypes.GenericRecord);
Extension_Advanced_ExcelModel.ItemsRec = ItemsRec;

});
define("Extension.Advanced_Excel.model$ItemsRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.Advanced_Excel.model", "Extension.Advanced_Excel.model$ItemsRec"], function (exports, OutSystems, Extension_Advanced_ExcelModel) {
var OS = OutSystems.Internal;
var ItemsRecord = (function (_super) {
__extends(ItemsRecord, _super);
function ItemsRecord(defaults) {
_super.apply(this, arguments);
}
ItemsRecord.attributesToDeclare = function () {
return [
this.attr("Items", "itemsAttr", "Items", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_Advanced_ExcelModel.ItemsRec());
}, true, Extension_Advanced_ExcelModel.ItemsRec)
].concat(_super.attributesToDeclare.call(this));
};
ItemsRecord.fromStructure = function (str) {
return new ItemsRecord(new ItemsRecord.RecordClass({
itemsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ItemsRecord._isAnonymousRecord = true;
ItemsRecord.UniqueId = "370b8100-c49f-2d91-8ec9-f23d72976e1f";
ItemsRecord.init();
return ItemsRecord;
})(OS.DataTypes.GenericRecord);
Extension_Advanced_ExcelModel.ItemsRecord = ItemsRecord;

});
define("Extension.Advanced_Excel.model$WorksheetRec", ["exports", "OutSystems/ClientRuntime/Main", "Extension.Advanced_Excel.model", "Extension.Advanced_Excel.model$ColorRecord", "Extension.Advanced_Excel.model$DimensionRecord"], function (exports, OutSystems, Extension_Advanced_ExcelModel) {
var OS = OutSystems.Internal;
var WorksheetRec = (function (_super) {
__extends(WorksheetRec, _super);
function WorksheetRec(defaults) {
_super.apply(this, arguments);
}
WorksheetRec.attributesToDeclare = function () {
return [
this.attr("Name", "nameAttr", "Name", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Index", "indexAttr", "Index", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("TabColor", "tabColorAttr", "TabColor", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_Advanced_ExcelModel.ColorRecord());
}, true, Extension_Advanced_ExcelModel.ColorRecord), 
this.attr("Dimension", "dimensionAttr", "Dimension", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_Advanced_ExcelModel.DimensionRecord());
}, true, Extension_Advanced_ExcelModel.DimensionRecord)
].concat(_super.attributesToDeclare.call(this));
};
WorksheetRec.init();
return WorksheetRec;
})(OS.DataTypes.GenericRecord);
Extension_Advanced_ExcelModel.WorksheetRec = WorksheetRec;

});
define("Extension.Advanced_Excel.model$WorksheetRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.Advanced_Excel.model", "Extension.Advanced_Excel.model$WorksheetRec"], function (exports, OutSystems, Extension_Advanced_ExcelModel) {
var OS = OutSystems.Internal;
var WorksheetRecord = (function (_super) {
__extends(WorksheetRecord, _super);
function WorksheetRecord(defaults) {
_super.apply(this, arguments);
}
WorksheetRecord.attributesToDeclare = function () {
return [
this.attr("Worksheet", "worksheetAttr", "Worksheet", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_Advanced_ExcelModel.WorksheetRec());
}, true, Extension_Advanced_ExcelModel.WorksheetRec)
].concat(_super.attributesToDeclare.call(this));
};
WorksheetRecord.fromStructure = function (str) {
return new WorksheetRecord(new WorksheetRecord.RecordClass({
worksheetAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
WorksheetRecord._isAnonymousRecord = true;
WorksheetRecord.UniqueId = "c17b78df-f772-7d67-a3f9-2ee7e09276fa";
WorksheetRecord.init();
return WorksheetRecord;
})(OS.DataTypes.GenericRecord);
Extension_Advanced_ExcelModel.WorksheetRecord = WorksheetRecord;

});
define("Extension.Advanced_Excel.model$WorksheetRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.Advanced_Excel.model", "Extension.Advanced_Excel.model$WorksheetRecord"], function (exports, OutSystems, Extension_Advanced_ExcelModel) {
var OS = OutSystems.Internal;
var WorksheetRecordList = (function (_super) {
__extends(WorksheetRecordList, _super);
function WorksheetRecordList(defaults) {
_super.apply(this, arguments);
}
WorksheetRecordList.itemType = Extension_Advanced_ExcelModel.WorksheetRecord;
return WorksheetRecordList;
})(OS.DataTypes.GenericRecordList);
Extension_Advanced_ExcelModel.WorksheetRecordList = WorksheetRecordList;

});
define("Extension.Advanced_Excel.model$WorkbookRec", ["exports", "OutSystems/ClientRuntime/Main", "Extension.Advanced_Excel.model", "Extension.Advanced_Excel.model$WorksheetRecordList"], function (exports, OutSystems, Extension_Advanced_ExcelModel) {
var OS = OutSystems.Internal;
var WorkbookRec = (function (_super) {
__extends(WorkbookRec, _super);
function WorkbookRec(defaults) {
_super.apply(this, arguments);
}
WorkbookRec.attributesToDeclare = function () {
return [
this.attr("Worksheets", "worksheetsAttr", "Worksheets", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_Advanced_ExcelModel.WorksheetRecordList());
}, true, Extension_Advanced_ExcelModel.WorksheetRecordList)
].concat(_super.attributesToDeclare.call(this));
};
WorkbookRec.fromStructure = function (str) {
return new WorkbookRec(new WorkbookRec.RecordClass({
worksheetsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
WorkbookRec.init();
return WorkbookRec;
})(OS.DataTypes.GenericRecord);
Extension_Advanced_ExcelModel.WorkbookRec = WorkbookRec;

});
define("Extension.Advanced_Excel.model$FontStyleRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.Advanced_Excel.model", "Extension.Advanced_Excel.model$FontStyleRecord"], function (exports, OutSystems, Extension_Advanced_ExcelModel) {
var OS = OutSystems.Internal;
var FontStyleRecordList = (function (_super) {
__extends(FontStyleRecordList, _super);
function FontStyleRecordList(defaults) {
_super.apply(this, arguments);
}
FontStyleRecordList.itemType = Extension_Advanced_ExcelModel.FontStyleRecord;
return FontStyleRecordList;
})(OS.DataTypes.GenericRecordList);
Extension_Advanced_ExcelModel.FontStyleRecordList = FontStyleRecordList;

});
define("Extension.Advanced_Excel.model$ValueRec", ["exports", "OutSystems/ClientRuntime/Main", "Extension.Advanced_Excel.model"], function (exports, OutSystems, Extension_Advanced_ExcelModel) {
var OS = OutSystems.Internal;
var ValueRec = (function (_super) {
__extends(ValueRec, _super);
function ValueRec(defaults) {
_super.apply(this, arguments);
}
ValueRec.attributesToDeclare = function () {
return [
this.attr("CellValue", "cellValueAttr", "CellValue", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ValueRec.fromStructure = function (str) {
return new ValueRec(new ValueRec.RecordClass({
cellValueAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ValueRec.init();
return ValueRec;
})(OS.DataTypes.GenericRecord);
Extension_Advanced_ExcelModel.ValueRec = ValueRec;

});
define("Extension.Advanced_Excel.model$DimensionRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.Advanced_Excel.model", "Extension.Advanced_Excel.model$DimensionRecord"], function (exports, OutSystems, Extension_Advanced_ExcelModel) {
var OS = OutSystems.Internal;
var DimensionRecordList = (function (_super) {
__extends(DimensionRecordList, _super);
function DimensionRecordList(defaults) {
_super.apply(this, arguments);
}
DimensionRecordList.itemType = Extension_Advanced_ExcelModel.DimensionRecord;
return DimensionRecordList;
})(OS.DataTypes.GenericRecordList);
Extension_Advanced_ExcelModel.DimensionRecordList = DimensionRecordList;

});
define("Extension.Advanced_Excel.model$ImageRec", ["exports", "OutSystems/ClientRuntime/Main", "Extension.Advanced_Excel.model"], function (exports, OutSystems, Extension_Advanced_ExcelModel) {
var OS = OutSystems.Internal;
var ImageRec = (function (_super) {
__extends(ImageRec, _super);
function ImageRec(defaults) {
_super.apply(this, arguments);
}
ImageRec.attributesToDeclare = function () {
return [
this.attr("Name", "nameAttr", "Name", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Content", "contentAttr", "Content", true, false, OS.DataTypes.DataTypes.BinaryData, function () {
return OS.DataTypes.BinaryData.defaultValue;
}, true), 
this.attr("Row", "rowAttr", "Row", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Column", "columnAttr", "Column", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ImageRec.init();
return ImageRec;
})(OS.DataTypes.GenericRecord);
Extension_Advanced_ExcelModel.ImageRec = ImageRec;

});
define("Extension.Advanced_Excel.model$ImageRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.Advanced_Excel.model", "Extension.Advanced_Excel.model$ImageRec"], function (exports, OutSystems, Extension_Advanced_ExcelModel) {
var OS = OutSystems.Internal;
var ImageRecord = (function (_super) {
__extends(ImageRecord, _super);
function ImageRecord(defaults) {
_super.apply(this, arguments);
}
ImageRecord.attributesToDeclare = function () {
return [
this.attr("Image", "imageAttr", "Image", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_Advanced_ExcelModel.ImageRec());
}, true, Extension_Advanced_ExcelModel.ImageRec)
].concat(_super.attributesToDeclare.call(this));
};
ImageRecord.fromStructure = function (str) {
return new ImageRecord(new ImageRecord.RecordClass({
imageAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ImageRecord._isAnonymousRecord = true;
ImageRecord.UniqueId = "d55cca2f-3911-dcb3-be96-f07ed39c8e7e";
ImageRecord.init();
return ImageRecord;
})(OS.DataTypes.GenericRecord);
Extension_Advanced_ExcelModel.ImageRecord = ImageRecord;

});
define("Extension.Advanced_Excel.model$ImageRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.Advanced_Excel.model", "Extension.Advanced_Excel.model$ImageRecord"], function (exports, OutSystems, Extension_Advanced_ExcelModel) {
var OS = OutSystems.Internal;
var ImageRecordList = (function (_super) {
__extends(ImageRecordList, _super);
function ImageRecordList(defaults) {
_super.apply(this, arguments);
}
ImageRecordList.itemType = Extension_Advanced_ExcelModel.ImageRecord;
return ImageRecordList;
})(OS.DataTypes.GenericRecordList);
Extension_Advanced_ExcelModel.ImageRecordList = ImageRecordList;

});
define("Extension.Advanced_Excel.model$ValueRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.Advanced_Excel.model", "Extension.Advanced_Excel.model$ValueRec"], function (exports, OutSystems, Extension_Advanced_ExcelModel) {
var OS = OutSystems.Internal;
var ValueRecord = (function (_super) {
__extends(ValueRecord, _super);
function ValueRecord(defaults) {
_super.apply(this, arguments);
}
ValueRecord.attributesToDeclare = function () {
return [
this.attr("Value", "valueAttr", "Value", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_Advanced_ExcelModel.ValueRec());
}, true, Extension_Advanced_ExcelModel.ValueRec)
].concat(_super.attributesToDeclare.call(this));
};
ValueRecord.fromStructure = function (str) {
return new ValueRecord(new ValueRecord.RecordClass({
valueAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ValueRecord._isAnonymousRecord = true;
ValueRecord.UniqueId = "672709cb-1b0b-de05-12e0-1ac65a216aee";
ValueRecord.init();
return ValueRecord;
})(OS.DataTypes.GenericRecord);
Extension_Advanced_ExcelModel.ValueRecord = ValueRecord;

});
define("Extension.Advanced_Excel.model$AddressRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.Advanced_Excel.model", "Extension.Advanced_Excel.model$AddressRecord"], function (exports, OutSystems, Extension_Advanced_ExcelModel) {
var OS = OutSystems.Internal;
var AddressRecordList = (function (_super) {
__extends(AddressRecordList, _super);
function AddressRecordList(defaults) {
_super.apply(this, arguments);
}
AddressRecordList.itemType = Extension_Advanced_ExcelModel.AddressRecord;
return AddressRecordList;
})(OS.DataTypes.GenericRecordList);
Extension_Advanced_ExcelModel.AddressRecordList = AddressRecordList;

});
define("Extension.Advanced_Excel.model$ConditionalFormatStyleRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.Advanced_Excel.model", "Extension.Advanced_Excel.model$ConditionalFormatStyleRecord"], function (exports, OutSystems, Extension_Advanced_ExcelModel) {
var OS = OutSystems.Internal;
var ConditionalFormatStyleRecordList = (function (_super) {
__extends(ConditionalFormatStyleRecordList, _super);
function ConditionalFormatStyleRecordList(defaults) {
_super.apply(this, arguments);
}
ConditionalFormatStyleRecordList.itemType = Extension_Advanced_ExcelModel.ConditionalFormatStyleRecord;
return ConditionalFormatStyleRecordList;
})(OS.DataTypes.GenericRecordList);
Extension_Advanced_ExcelModel.ConditionalFormatStyleRecordList = ConditionalFormatStyleRecordList;

});
define("Extension.Advanced_Excel.model$CellFormatRec", ["exports", "OutSystems/ClientRuntime/Main", "Extension.Advanced_Excel.model", "Extension.Advanced_Excel.model$BorderStyleRecord"], function (exports, OutSystems, Extension_Advanced_ExcelModel) {
var OS = OutSystems.Internal;
var CellFormatRec = (function (_super) {
__extends(CellFormatRec, _super);
function CellFormatRec(defaults) {
_super.apply(this, arguments);
}
CellFormatRec.attributesToDeclare = function () {
return [
this.attr("FontName", "fontNameAttr", "FontName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("FontSize", "fontSizeAttr", "FontSize", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("BackgroundColor", "backgroundColorAttr", "BackgroundColor", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("AutofitColumn", "autofitColumnAttr", "AutofitColumn", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Bold", "boldAttr", "Bold", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("NumberFormat", "numberFormatAttr", "NumberFormat", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("BorderStyle", "borderStyleAttr", "BorderStyle", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("BorderColor", "borderColorAttr", "BorderColor", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("HorizontalAlignment", "horizontalAlignmentAttr", "HorizontalAlignment", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("VerticalAlignment", "verticalAlignmentAttr", "VerticalAlignment", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("WrapText", "wrapTextAttr", "WrapText", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("ShrinkToFit", "shrinkToFitAttr", "ShrinkToFit", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("TextRotation", "textRotationAttr", "TextRotation", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Hidden", "hiddenAttr", "Hidden", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Indent", "indentAttr", "Indent", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Locked", "lockedAttr", "Locked", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, true), 
this.attr("QuotePrefix", "quotePrefixAttr", "QuotePrefix", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("ReadingOrder", "readingOrderAttr", "ReadingOrder", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("FontColor", "fontColorAttr", "FontColor", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("BorderLeft", "borderLeftAttr", "BorderLeft", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_Advanced_ExcelModel.BorderStyleRecord());
}, true, Extension_Advanced_ExcelModel.BorderStyleRecord), 
this.attr("BorderTop", "borderTopAttr", "BorderTop", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_Advanced_ExcelModel.BorderStyleRecord());
}, true, Extension_Advanced_ExcelModel.BorderStyleRecord), 
this.attr("BorderRight", "borderRightAttr", "BorderRight", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_Advanced_ExcelModel.BorderStyleRecord());
}, true, Extension_Advanced_ExcelModel.BorderStyleRecord), 
this.attr("BorderBottom", "borderBottomAttr", "BorderBottom", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_Advanced_ExcelModel.BorderStyleRecord());
}, true, Extension_Advanced_ExcelModel.BorderStyleRecord)
].concat(_super.attributesToDeclare.call(this));
};
CellFormatRec.init();
return CellFormatRec;
})(OS.DataTypes.GenericRecord);
Extension_Advanced_ExcelModel.CellFormatRec = CellFormatRec;

});
define("Extension.Advanced_Excel.model$DataSeriesRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.Advanced_Excel.model", "Extension.Advanced_Excel.model$DataSeriesRecord"], function (exports, OutSystems, Extension_Advanced_ExcelModel) {
var OS = OutSystems.Internal;
var DataSeriesRecordList = (function (_super) {
__extends(DataSeriesRecordList, _super);
function DataSeriesRecordList(defaults) {
_super.apply(this, arguments);
}
DataSeriesRecordList.itemType = Extension_Advanced_ExcelModel.DataSeriesRecord;
return DataSeriesRecordList;
})(OS.DataTypes.GenericRecordList);
Extension_Advanced_ExcelModel.DataSeriesRecordList = DataSeriesRecordList;

});
define("Extension.Advanced_Excel.model$WorkbookRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.Advanced_Excel.model", "Extension.Advanced_Excel.model$WorkbookRec"], function (exports, OutSystems, Extension_Advanced_ExcelModel) {
var OS = OutSystems.Internal;
var WorkbookRecord = (function (_super) {
__extends(WorkbookRecord, _super);
function WorkbookRecord(defaults) {
_super.apply(this, arguments);
}
WorkbookRecord.attributesToDeclare = function () {
return [
this.attr("Workbook", "workbookAttr", "Workbook", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_Advanced_ExcelModel.WorkbookRec());
}, true, Extension_Advanced_ExcelModel.WorkbookRec)
].concat(_super.attributesToDeclare.call(this));
};
WorkbookRecord.fromStructure = function (str) {
return new WorkbookRecord(new WorkbookRecord.RecordClass({
workbookAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
WorkbookRecord._isAnonymousRecord = true;
WorkbookRecord.UniqueId = "81c52771-ce79-8099-268b-2a9a1425fc5a";
WorkbookRecord.init();
return WorkbookRecord;
})(OS.DataTypes.GenericRecord);
Extension_Advanced_ExcelModel.WorkbookRecord = WorkbookRecord;

});
define("Extension.Advanced_Excel.model$WorkbookRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.Advanced_Excel.model", "Extension.Advanced_Excel.model$WorkbookRecord"], function (exports, OutSystems, Extension_Advanced_ExcelModel) {
var OS = OutSystems.Internal;
var WorkbookRecordList = (function (_super) {
__extends(WorkbookRecordList, _super);
function WorkbookRecordList(defaults) {
_super.apply(this, arguments);
}
WorkbookRecordList.itemType = Extension_Advanced_ExcelModel.WorkbookRecord;
return WorkbookRecordList;
})(OS.DataTypes.GenericRecordList);
Extension_Advanced_ExcelModel.WorkbookRecordList = WorkbookRecordList;

});
define("Extension.Advanced_Excel.model$CellFormatRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.Advanced_Excel.model", "Extension.Advanced_Excel.model$CellFormatRec"], function (exports, OutSystems, Extension_Advanced_ExcelModel) {
var OS = OutSystems.Internal;
var CellFormatRecord = (function (_super) {
__extends(CellFormatRecord, _super);
function CellFormatRecord(defaults) {
_super.apply(this, arguments);
}
CellFormatRecord.attributesToDeclare = function () {
return [
this.attr("CellFormat", "cellFormatAttr", "CellFormat", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_Advanced_ExcelModel.CellFormatRec());
}, true, Extension_Advanced_ExcelModel.CellFormatRec)
].concat(_super.attributesToDeclare.call(this));
};
CellFormatRecord.fromStructure = function (str) {
return new CellFormatRecord(new CellFormatRecord.RecordClass({
cellFormatAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
CellFormatRecord._isAnonymousRecord = true;
CellFormatRecord.UniqueId = "c77cabfc-2ead-dfa1-e85e-e8133db95321";
CellFormatRecord.init();
return CellFormatRecord;
})(OS.DataTypes.GenericRecord);
Extension_Advanced_ExcelModel.CellFormatRecord = CellFormatRecord;

});
define("Extension.Advanced_Excel.model$CellFormatRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.Advanced_Excel.model", "Extension.Advanced_Excel.model$CellFormatRecord"], function (exports, OutSystems, Extension_Advanced_ExcelModel) {
var OS = OutSystems.Internal;
var CellFormatRecordList = (function (_super) {
__extends(CellFormatRecordList, _super);
function CellFormatRecordList(defaults) {
_super.apply(this, arguments);
}
CellFormatRecordList.itemType = Extension_Advanced_ExcelModel.CellFormatRecord;
return CellFormatRecordList;
})(OS.DataTypes.GenericRecordList);
Extension_Advanced_ExcelModel.CellFormatRecordList = CellFormatRecordList;

});
define("Extension.Advanced_Excel.model$ItemsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.Advanced_Excel.model", "Extension.Advanced_Excel.model$ItemsRecord"], function (exports, OutSystems, Extension_Advanced_ExcelModel) {
var OS = OutSystems.Internal;
var ItemsRecordList = (function (_super) {
__extends(ItemsRecordList, _super);
function ItemsRecordList(defaults) {
_super.apply(this, arguments);
}
ItemsRecordList.itemType = Extension_Advanced_ExcelModel.ItemsRecord;
return ItemsRecordList;
})(OS.DataTypes.GenericRecordList);
Extension_Advanced_ExcelModel.ItemsRecordList = ItemsRecordList;

});
define("Extension.Advanced_Excel.model$ProtectionRec", ["exports", "OutSystems/ClientRuntime/Main", "Extension.Advanced_Excel.model"], function (exports, OutSystems, Extension_Advanced_ExcelModel) {
var OS = OutSystems.Internal;
var ProtectionRec = (function (_super) {
__extends(ProtectionRec, _super);
function ProtectionRec(defaults) {
_super.apply(this, arguments);
}
ProtectionRec.attributesToDeclare = function () {
return [
this.attr("IsProtected", "isProtectedAttr", "IsProtected", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Password", "passwordAttr", "Password", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("AllowAutoFilter", "allowAutoFilterAttr", "AllowAutoFilter", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("AllowDeleteColumns", "allowDeleteColumnsAttr", "AllowDeleteColumns", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("AllowDeleteRows", "allowDeleteRowsAttr", "AllowDeleteRows", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("AllowEditObject", "allowEditObjectAttr", "AllowEditObject", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("AllowEditScenarios", "allowEditScenariosAttr", "AllowEditScenarios", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("AllowFormatCells", "allowFormatCellsAttr", "AllowFormatCells", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("AllowFormatColumns", "allowFormatColumnsAttr", "AllowFormatColumns", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("AllowFormatRows", "allowFormatRowsAttr", "AllowFormatRows", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("AllowInsertColumns", "allowInsertColumnsAttr", "AllowInsertColumns", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("AllowInsertRows", "allowInsertRowsAttr", "AllowInsertRows", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("AllowInsertHyperlinks", "allowInsertHyperlinksAttr", "AllowInsertHyperlinks", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("AllowPivotTables", "allowPivotTablesAttr", "AllowPivotTables", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("AllowSelectLockedCells", "allowSelectLockedCellsAttr", "AllowSelectLockedCells", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("AllowSelectUnlockedCells", "allowSelectUnlockedCellsAttr", "AllowSelectUnlockedCells", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("AllowSort", "allowSortAttr", "AllowSort", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ProtectionRec.init();
return ProtectionRec;
})(OS.DataTypes.GenericRecord);
Extension_Advanced_ExcelModel.ProtectionRec = ProtectionRec;

});
define("Extension.Advanced_Excel.model$OfficePropertiesRec", ["exports", "OutSystems/ClientRuntime/Main", "Extension.Advanced_Excel.model"], function (exports, OutSystems, Extension_Advanced_ExcelModel) {
var OS = OutSystems.Internal;
var OfficePropertiesRec = (function (_super) {
__extends(OfficePropertiesRec, _super);
function OfficePropertiesRec(defaults) {
_super.apply(this, arguments);
}
OfficePropertiesRec.attributesToDeclare = function () {
return [
this.attr("Title", "titleAttr", "Title", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Subject", "subjectAttr", "Subject", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Author", "authorAttr", "Author", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Comments", "commentsAttr", "Comments", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Keywords", "keywordsAttr", "Keywords", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LastModifiedBy", "lastModifiedByAttr", "LastModifiedBy", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Category", "categoryAttr", "Category", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Status", "statusAttr", "Status", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Company", "companyAttr", "Company", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Manager", "managerAttr", "Manager", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
OfficePropertiesRec.init();
return OfficePropertiesRec;
})(OS.DataTypes.GenericRecord);
Extension_Advanced_ExcelModel.OfficePropertiesRec = OfficePropertiesRec;

});
define("Extension.Advanced_Excel.model$OfficePropertiesRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.Advanced_Excel.model", "Extension.Advanced_Excel.model$OfficePropertiesRec"], function (exports, OutSystems, Extension_Advanced_ExcelModel) {
var OS = OutSystems.Internal;
var OfficePropertiesRecord = (function (_super) {
__extends(OfficePropertiesRecord, _super);
function OfficePropertiesRecord(defaults) {
_super.apply(this, arguments);
}
OfficePropertiesRecord.attributesToDeclare = function () {
return [
this.attr("OfficeProperties", "officePropertiesAttr", "OfficeProperties", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_Advanced_ExcelModel.OfficePropertiesRec());
}, true, Extension_Advanced_ExcelModel.OfficePropertiesRec)
].concat(_super.attributesToDeclare.call(this));
};
OfficePropertiesRecord.fromStructure = function (str) {
return new OfficePropertiesRecord(new OfficePropertiesRecord.RecordClass({
officePropertiesAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
OfficePropertiesRecord._isAnonymousRecord = true;
OfficePropertiesRecord.UniqueId = "a8af28d2-f270-cd10-b400-3976de36095c";
OfficePropertiesRecord.init();
return OfficePropertiesRecord;
})(OS.DataTypes.GenericRecord);
Extension_Advanced_ExcelModel.OfficePropertiesRecord = OfficePropertiesRecord;

});
define("Extension.Advanced_Excel.model$FillStyleRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.Advanced_Excel.model", "Extension.Advanced_Excel.model$FillStyleRecord"], function (exports, OutSystems, Extension_Advanced_ExcelModel) {
var OS = OutSystems.Internal;
var FillStyleRecordList = (function (_super) {
__extends(FillStyleRecordList, _super);
function FillStyleRecordList(defaults) {
_super.apply(this, arguments);
}
FillStyleRecordList.itemType = Extension_Advanced_ExcelModel.FillStyleRecord;
return FillStyleRecordList;
})(OS.DataTypes.GenericRecordList);
Extension_Advanced_ExcelModel.FillStyleRecordList = FillStyleRecordList;

});
define("Extension.Advanced_Excel.model$OfficePropertiesRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.Advanced_Excel.model", "Extension.Advanced_Excel.model$OfficePropertiesRecord"], function (exports, OutSystems, Extension_Advanced_ExcelModel) {
var OS = OutSystems.Internal;
var OfficePropertiesRecordList = (function (_super) {
__extends(OfficePropertiesRecordList, _super);
function OfficePropertiesRecordList(defaults) {
_super.apply(this, arguments);
}
OfficePropertiesRecordList.itemType = Extension_Advanced_ExcelModel.OfficePropertiesRecord;
return OfficePropertiesRecordList;
})(OS.DataTypes.GenericRecordList);
Extension_Advanced_ExcelModel.OfficePropertiesRecordList = OfficePropertiesRecordList;

});
define("Extension.Advanced_Excel.model$ValueRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.Advanced_Excel.model", "Extension.Advanced_Excel.model$ValueRecord"], function (exports, OutSystems, Extension_Advanced_ExcelModel) {
var OS = OutSystems.Internal;
var ValueRecordList = (function (_super) {
__extends(ValueRecordList, _super);
function ValueRecordList(defaults) {
_super.apply(this, arguments);
}
ValueRecordList.itemType = Extension_Advanced_ExcelModel.ValueRecord;
return ValueRecordList;
})(OS.DataTypes.GenericRecordList);
Extension_Advanced_ExcelModel.ValueRecordList = ValueRecordList;

});
define("Extension.Advanced_Excel.model$ProtectionRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.Advanced_Excel.model", "Extension.Advanced_Excel.model$ProtectionRec"], function (exports, OutSystems, Extension_Advanced_ExcelModel) {
var OS = OutSystems.Internal;
var ProtectionRecord = (function (_super) {
__extends(ProtectionRecord, _super);
function ProtectionRecord(defaults) {
_super.apply(this, arguments);
}
ProtectionRecord.attributesToDeclare = function () {
return [
this.attr("Protection", "protectionAttr", "Protection", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_Advanced_ExcelModel.ProtectionRec());
}, true, Extension_Advanced_ExcelModel.ProtectionRec)
].concat(_super.attributesToDeclare.call(this));
};
ProtectionRecord.fromStructure = function (str) {
return new ProtectionRecord(new ProtectionRecord.RecordClass({
protectionAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ProtectionRecord._isAnonymousRecord = true;
ProtectionRecord.UniqueId = "fffbb7fa-6920-fe34-2ba6-2f190f44511a";
ProtectionRecord.init();
return ProtectionRecord;
})(OS.DataTypes.GenericRecord);
Extension_Advanced_ExcelModel.ProtectionRecord = ProtectionRecord;

});
define("Extension.Advanced_Excel.model$ProtectionRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.Advanced_Excel.model", "Extension.Advanced_Excel.model$ProtectionRecord"], function (exports, OutSystems, Extension_Advanced_ExcelModel) {
var OS = OutSystems.Internal;
var ProtectionRecordList = (function (_super) {
__extends(ProtectionRecordList, _super);
function ProtectionRecordList(defaults) {
_super.apply(this, arguments);
}
ProtectionRecordList.itemType = Extension_Advanced_ExcelModel.ProtectionRecord;
return ProtectionRecordList;
})(OS.DataTypes.GenericRecordList);
Extension_Advanced_ExcelModel.ProtectionRecordList = ProtectionRecordList;

});
define("Extension.Advanced_Excel.model$NewSheetRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.Advanced_Excel.model", "Extension.Advanced_Excel.model$NewSheetRecord"], function (exports, OutSystems, Extension_Advanced_ExcelModel) {
var OS = OutSystems.Internal;
var NewSheetRecordList = (function (_super) {
__extends(NewSheetRecordList, _super);
function NewSheetRecordList(defaults) {
_super.apply(this, arguments);
}
NewSheetRecordList.itemType = Extension_Advanced_ExcelModel.NewSheetRecord;
return NewSheetRecordList;
})(OS.DataTypes.GenericRecordList);
Extension_Advanced_ExcelModel.NewSheetRecordList = NewSheetRecordList;

});
define("Extension.Advanced_Excel.model", ["exports", "OutSystems/ClientRuntime/Main"], function (exports, OutSystems) {
var OS = OutSystems.Internal;
var Extension_Advanced_ExcelModel = exports;
});
