define("Extension.OfficeUtilsExternalLib.model$WordTextStyleRec", ["exports", "OutSystems/ClientRuntime/Main", "Extension.OfficeUtilsExternalLib.model"], function (exports, OutSystems, Extension_OfficeUtilsExternalLibModel) {
var OS = OutSystems.Internal;
var WordTextStyleRec = (function (_super) {
__extends(WordTextStyleRec, _super);
function WordTextStyleRec(defaults) {
_super.apply(this, arguments);
}
WordTextStyleRec.attributesToDeclare = function () {
return [
this.attr("Color", "colorAttr", "Color", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("FontSize", "fontSizeAttr", "FontSize", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("IsBold", "isBoldAttr", "IsBold", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("IsItalic", "isItalicAttr", "IsItalic", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("IsUnderlined", "isUnderlinedAttr", "IsUnderlined", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
WordTextStyleRec.init();
return WordTextStyleRec;
})(OS.DataTypes.GenericRecord);
Extension_OfficeUtilsExternalLibModel.WordTextStyleRec = WordTextStyleRec;

});
define("Extension.OfficeUtilsExternalLib.model$WordTextStyleRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.OfficeUtilsExternalLib.model", "Extension.OfficeUtilsExternalLib.model$WordTextStyleRec"], function (exports, OutSystems, Extension_OfficeUtilsExternalLibModel) {
var OS = OutSystems.Internal;
var WordTextStyleRecord = (function (_super) {
__extends(WordTextStyleRecord, _super);
function WordTextStyleRecord(defaults) {
_super.apply(this, arguments);
}
WordTextStyleRecord.attributesToDeclare = function () {
return [
this.attr("WordTextStyle", "wordTextStyleAttr", "WordTextStyle", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_OfficeUtilsExternalLibModel.WordTextStyleRec());
}, true, Extension_OfficeUtilsExternalLibModel.WordTextStyleRec)
].concat(_super.attributesToDeclare.call(this));
};
WordTextStyleRecord.fromStructure = function (str) {
return new WordTextStyleRecord(new WordTextStyleRecord.RecordClass({
wordTextStyleAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
WordTextStyleRecord._isAnonymousRecord = true;
WordTextStyleRecord.UniqueId = "7698dc54-2d0d-0651-7b13-621842f99446";
WordTextStyleRecord.init();
return WordTextStyleRecord;
})(OS.DataTypes.GenericRecord);
Extension_OfficeUtilsExternalLibModel.WordTextStyleRecord = WordTextStyleRecord;

});
define("Extension.OfficeUtilsExternalLib.model$WordTextRec", ["exports", "OutSystems/ClientRuntime/Main", "Extension.OfficeUtilsExternalLib.model", "Extension.OfficeUtilsExternalLib.model$WordTextStyleRecord"], function (exports, OutSystems, Extension_OfficeUtilsExternalLibModel) {
var OS = OutSystems.Internal;
var WordTextRec = (function (_super) {
__extends(WordTextRec, _super);
function WordTextRec(defaults) {
_super.apply(this, arguments);
}
WordTextRec.attributesToDeclare = function () {
return [
this.attr("Text", "textAttr", "Text", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Hyperlink", "hyperlinkAttr", "Hyperlink", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("TextStyle", "textStyleAttr", "TextStyle", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_OfficeUtilsExternalLibModel.WordTextStyleRecord());
}, true, Extension_OfficeUtilsExternalLibModel.WordTextStyleRecord)
].concat(_super.attributesToDeclare.call(this));
};
WordTextRec.init();
return WordTextRec;
})(OS.DataTypes.GenericRecord);
Extension_OfficeUtilsExternalLibModel.WordTextRec = WordTextRec;

});
define("Extension.OfficeUtilsExternalLib.model$WordTextRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.OfficeUtilsExternalLib.model", "Extension.OfficeUtilsExternalLib.model$WordTextRec"], function (exports, OutSystems, Extension_OfficeUtilsExternalLibModel) {
var OS = OutSystems.Internal;
var WordTextRecord = (function (_super) {
__extends(WordTextRecord, _super);
function WordTextRecord(defaults) {
_super.apply(this, arguments);
}
WordTextRecord.attributesToDeclare = function () {
return [
this.attr("WordText", "wordTextAttr", "WordText", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_OfficeUtilsExternalLibModel.WordTextRec());
}, true, Extension_OfficeUtilsExternalLibModel.WordTextRec)
].concat(_super.attributesToDeclare.call(this));
};
WordTextRecord.fromStructure = function (str) {
return new WordTextRecord(new WordTextRecord.RecordClass({
wordTextAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
WordTextRecord._isAnonymousRecord = true;
WordTextRecord.UniqueId = "711be5c8-828f-862a-8c89-7353e81e0ca8";
WordTextRecord.init();
return WordTextRecord;
})(OS.DataTypes.GenericRecord);
Extension_OfficeUtilsExternalLibModel.WordTextRecord = WordTextRecord;

});
define("Extension.OfficeUtilsExternalLib.model$WordPictureRec", ["exports", "OutSystems/ClientRuntime/Main", "Extension.OfficeUtilsExternalLib.model"], function (exports, OutSystems, Extension_OfficeUtilsExternalLibModel) {
var OS = OutSystems.Internal;
var WordPictureRec = (function (_super) {
__extends(WordPictureRec, _super);
function WordPictureRec(defaults) {
_super.apply(this, arguments);
}
WordPictureRec.attributesToDeclare = function () {
return [
this.attr("Picture", "pictureAttr", "Picture", true, false, OS.DataTypes.DataTypes.BinaryData, function () {
return OS.DataTypes.BinaryData.defaultValue;
}, true), 
this.attr("Width", "widthAttr", "Width", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
WordPictureRec.init();
return WordPictureRec;
})(OS.DataTypes.GenericRecord);
Extension_OfficeUtilsExternalLibModel.WordPictureRec = WordPictureRec;

});
define("Extension.OfficeUtilsExternalLib.model$WordPictureRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.OfficeUtilsExternalLib.model", "Extension.OfficeUtilsExternalLib.model$WordPictureRec"], function (exports, OutSystems, Extension_OfficeUtilsExternalLibModel) {
var OS = OutSystems.Internal;
var WordPictureRecord = (function (_super) {
__extends(WordPictureRecord, _super);
function WordPictureRecord(defaults) {
_super.apply(this, arguments);
}
WordPictureRecord.attributesToDeclare = function () {
return [
this.attr("WordPicture", "wordPictureAttr", "WordPicture", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_OfficeUtilsExternalLibModel.WordPictureRec());
}, true, Extension_OfficeUtilsExternalLibModel.WordPictureRec)
].concat(_super.attributesToDeclare.call(this));
};
WordPictureRecord.fromStructure = function (str) {
return new WordPictureRecord(new WordPictureRecord.RecordClass({
wordPictureAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
WordPictureRecord._isAnonymousRecord = true;
WordPictureRecord.UniqueId = "b7030d64-0ed7-f0b0-f7ef-a401839ec7d5";
WordPictureRecord.init();
return WordPictureRecord;
})(OS.DataTypes.GenericRecord);
Extension_OfficeUtilsExternalLibModel.WordPictureRecord = WordPictureRecord;

});
define("Extension.OfficeUtilsExternalLib.model$WordTableRowReplacementRec", ["exports", "OutSystems/ClientRuntime/Main", "Extension.OfficeUtilsExternalLib.model", "Extension.OfficeUtilsExternalLib.model$WordTextRecord", "Extension.OfficeUtilsExternalLib.model$WordPictureRecord"], function (exports, OutSystems, Extension_OfficeUtilsExternalLibModel) {
var OS = OutSystems.Internal;
var WordTableRowReplacementRec = (function (_super) {
__extends(WordTableRowReplacementRec, _super);
function WordTableRowReplacementRec(defaults) {
_super.apply(this, arguments);
}
WordTableRowReplacementRec.attributesToDeclare = function () {
return [
this.attr("Placeholder", "placeholderAttr", "Placeholder", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("WordText", "wordTextAttr", "WordText", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_OfficeUtilsExternalLibModel.WordTextRecord());
}, true, Extension_OfficeUtilsExternalLibModel.WordTextRecord), 
this.attr("WordPicture", "wordPictureAttr", "WordPicture", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_OfficeUtilsExternalLibModel.WordPictureRecord());
}, true, Extension_OfficeUtilsExternalLibModel.WordPictureRecord)
].concat(_super.attributesToDeclare.call(this));
};
WordTableRowReplacementRec.init();
return WordTableRowReplacementRec;
})(OS.DataTypes.GenericRecord);
Extension_OfficeUtilsExternalLibModel.WordTableRowReplacementRec = WordTableRowReplacementRec;

});
define("Extension.OfficeUtilsExternalLib.model$WordTableRowReplacementRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.OfficeUtilsExternalLib.model", "Extension.OfficeUtilsExternalLib.model$WordTableRowReplacementRec"], function (exports, OutSystems, Extension_OfficeUtilsExternalLibModel) {
var OS = OutSystems.Internal;
var WordTableRowReplacementRecord = (function (_super) {
__extends(WordTableRowReplacementRecord, _super);
function WordTableRowReplacementRecord(defaults) {
_super.apply(this, arguments);
}
WordTableRowReplacementRecord.attributesToDeclare = function () {
return [
this.attr("WordTableRowReplacement", "wordTableRowReplacementAttr", "WordTableRowReplacement", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_OfficeUtilsExternalLibModel.WordTableRowReplacementRec());
}, true, Extension_OfficeUtilsExternalLibModel.WordTableRowReplacementRec)
].concat(_super.attributesToDeclare.call(this));
};
WordTableRowReplacementRecord.fromStructure = function (str) {
return new WordTableRowReplacementRecord(new WordTableRowReplacementRecord.RecordClass({
wordTableRowReplacementAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
WordTableRowReplacementRecord._isAnonymousRecord = true;
WordTableRowReplacementRecord.UniqueId = "3ffe3f31-8842-ef2c-ce9b-5ffac79dac43";
WordTableRowReplacementRecord.init();
return WordTableRowReplacementRecord;
})(OS.DataTypes.GenericRecord);
Extension_OfficeUtilsExternalLibModel.WordTableRowReplacementRecord = WordTableRowReplacementRecord;

});
define("Extension.OfficeUtilsExternalLib.model$WordTableRowReplacementRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.OfficeUtilsExternalLib.model", "Extension.OfficeUtilsExternalLib.model$WordTableRowReplacementRecord"], function (exports, OutSystems, Extension_OfficeUtilsExternalLibModel) {
var OS = OutSystems.Internal;
var WordTableRowReplacementRecordList = (function (_super) {
__extends(WordTableRowReplacementRecordList, _super);
function WordTableRowReplacementRecordList(defaults) {
_super.apply(this, arguments);
}
WordTableRowReplacementRecordList.itemType = Extension_OfficeUtilsExternalLibModel.WordTableRowReplacementRecord;
return WordTableRowReplacementRecordList;
})(OS.DataTypes.GenericRecordList);
Extension_OfficeUtilsExternalLibModel.WordTableRowReplacementRecordList = WordTableRowReplacementRecordList;

});
define("Extension.OfficeUtilsExternalLib.model$WordTableRowRec", ["exports", "OutSystems/ClientRuntime/Main", "Extension.OfficeUtilsExternalLib.model", "Extension.OfficeUtilsExternalLib.model$WordTableRowReplacementRecordList"], function (exports, OutSystems, Extension_OfficeUtilsExternalLibModel) {
var OS = OutSystems.Internal;
var WordTableRowRec = (function (_super) {
__extends(WordTableRowRec, _super);
function WordTableRowRec(defaults) {
_super.apply(this, arguments);
}
WordTableRowRec.attributesToDeclare = function () {
return [
this.attr("RowReplacements", "rowReplacementsAttr", "RowReplacements", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_OfficeUtilsExternalLibModel.WordTableRowReplacementRecordList());
}, true, Extension_OfficeUtilsExternalLibModel.WordTableRowReplacementRecordList)
].concat(_super.attributesToDeclare.call(this));
};
WordTableRowRec.fromStructure = function (str) {
return new WordTableRowRec(new WordTableRowRec.RecordClass({
rowReplacementsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
WordTableRowRec.init();
return WordTableRowRec;
})(OS.DataTypes.GenericRecord);
Extension_OfficeUtilsExternalLibModel.WordTableRowRec = WordTableRowRec;

});
define("Extension.OfficeUtilsExternalLib.model$WordTableRowRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.OfficeUtilsExternalLib.model", "Extension.OfficeUtilsExternalLib.model$WordTableRowRec"], function (exports, OutSystems, Extension_OfficeUtilsExternalLibModel) {
var OS = OutSystems.Internal;
var WordTableRowRecord = (function (_super) {
__extends(WordTableRowRecord, _super);
function WordTableRowRecord(defaults) {
_super.apply(this, arguments);
}
WordTableRowRecord.attributesToDeclare = function () {
return [
this.attr("WordTableRow", "wordTableRowAttr", "WordTableRow", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_OfficeUtilsExternalLibModel.WordTableRowRec());
}, true, Extension_OfficeUtilsExternalLibModel.WordTableRowRec)
].concat(_super.attributesToDeclare.call(this));
};
WordTableRowRecord.fromStructure = function (str) {
return new WordTableRowRecord(new WordTableRowRecord.RecordClass({
wordTableRowAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
WordTableRowRecord._isAnonymousRecord = true;
WordTableRowRecord.UniqueId = "95bdf9b2-56f4-1a52-061f-eb4412025769";
WordTableRowRecord.init();
return WordTableRowRecord;
})(OS.DataTypes.GenericRecord);
Extension_OfficeUtilsExternalLibModel.WordTableRowRecord = WordTableRowRecord;

});
define("Extension.OfficeUtilsExternalLib.model$WordTableRowRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.OfficeUtilsExternalLib.model", "Extension.OfficeUtilsExternalLib.model$WordTableRowRecord"], function (exports, OutSystems, Extension_OfficeUtilsExternalLibModel) {
var OS = OutSystems.Internal;
var WordTableRowRecordList = (function (_super) {
__extends(WordTableRowRecordList, _super);
function WordTableRowRecordList(defaults) {
_super.apply(this, arguments);
}
WordTableRowRecordList.itemType = Extension_OfficeUtilsExternalLibModel.WordTableRowRecord;
return WordTableRowRecordList;
})(OS.DataTypes.GenericRecordList);
Extension_OfficeUtilsExternalLibModel.WordTableRowRecordList = WordTableRowRecordList;

});
define("Extension.OfficeUtilsExternalLib.model$WordTableRec", ["exports", "OutSystems/ClientRuntime/Main", "Extension.OfficeUtilsExternalLib.model", "Extension.OfficeUtilsExternalLib.model$WordTableRowRecordList"], function (exports, OutSystems, Extension_OfficeUtilsExternalLibModel) {
var OS = OutSystems.Internal;
var WordTableRec = (function (_super) {
__extends(WordTableRec, _super);
function WordTableRec(defaults) {
_super.apply(this, arguments);
}
WordTableRec.attributesToDeclare = function () {
return [
this.attr("TableRows", "tableRowsAttr", "TableRows", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_OfficeUtilsExternalLibModel.WordTableRowRecordList());
}, true, Extension_OfficeUtilsExternalLibModel.WordTableRowRecordList), 
this.attr("StartRow", "startRowAttr", "StartRow", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
WordTableRec.init();
return WordTableRec;
})(OS.DataTypes.GenericRecord);
Extension_OfficeUtilsExternalLibModel.WordTableRec = WordTableRec;

});
define("Extension.OfficeUtilsExternalLib.model$WordTableRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.OfficeUtilsExternalLib.model", "Extension.OfficeUtilsExternalLib.model$WordTableRec"], function (exports, OutSystems, Extension_OfficeUtilsExternalLibModel) {
var OS = OutSystems.Internal;
var WordTableRecord = (function (_super) {
__extends(WordTableRecord, _super);
function WordTableRecord(defaults) {
_super.apply(this, arguments);
}
WordTableRecord.attributesToDeclare = function () {
return [
this.attr("WordTable", "wordTableAttr", "WordTable", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_OfficeUtilsExternalLibModel.WordTableRec());
}, true, Extension_OfficeUtilsExternalLibModel.WordTableRec)
].concat(_super.attributesToDeclare.call(this));
};
WordTableRecord.fromStructure = function (str) {
return new WordTableRecord(new WordTableRecord.RecordClass({
wordTableAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
WordTableRecord._isAnonymousRecord = true;
WordTableRecord.UniqueId = "061a6d14-52aa-9ca3-b5d1-2422466bc145";
WordTableRecord.init();
return WordTableRecord;
})(OS.DataTypes.GenericRecord);
Extension_OfficeUtilsExternalLibModel.WordTableRecord = WordTableRecord;

});
define("Extension.OfficeUtilsExternalLib.model$WordLegacyTableCellRec", ["exports", "OutSystems/ClientRuntime/Main", "Extension.OfficeUtilsExternalLib.model"], function (exports, OutSystems, Extension_OfficeUtilsExternalLibModel) {
var OS = OutSystems.Internal;
var WordLegacyTableCellRec = (function (_super) {
__extends(WordLegacyTableCellRec, _super);
function WordLegacyTableCellRec(defaults) {
_super.apply(this, arguments);
}
WordLegacyTableCellRec.attributesToDeclare = function () {
return [
this.attr("Value", "valueAttr", "Value", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
WordLegacyTableCellRec.fromStructure = function (str) {
return new WordLegacyTableCellRec(new WordLegacyTableCellRec.RecordClass({
valueAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
WordLegacyTableCellRec.init();
return WordLegacyTableCellRec;
})(OS.DataTypes.GenericRecord);
Extension_OfficeUtilsExternalLibModel.WordLegacyTableCellRec = WordLegacyTableCellRec;

});
define("Extension.OfficeUtilsExternalLib.model$WordLegacyTableCellRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.OfficeUtilsExternalLib.model", "Extension.OfficeUtilsExternalLib.model$WordLegacyTableCellRec"], function (exports, OutSystems, Extension_OfficeUtilsExternalLibModel) {
var OS = OutSystems.Internal;
var WordLegacyTableCellRecord = (function (_super) {
__extends(WordLegacyTableCellRecord, _super);
function WordLegacyTableCellRecord(defaults) {
_super.apply(this, arguments);
}
WordLegacyTableCellRecord.attributesToDeclare = function () {
return [
this.attr("WordLegacyTableCell", "wordLegacyTableCellAttr", "WordLegacyTableCell", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_OfficeUtilsExternalLibModel.WordLegacyTableCellRec());
}, true, Extension_OfficeUtilsExternalLibModel.WordLegacyTableCellRec)
].concat(_super.attributesToDeclare.call(this));
};
WordLegacyTableCellRecord.fromStructure = function (str) {
return new WordLegacyTableCellRecord(new WordLegacyTableCellRecord.RecordClass({
wordLegacyTableCellAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
WordLegacyTableCellRecord._isAnonymousRecord = true;
WordLegacyTableCellRecord.UniqueId = "adc3c24d-6bb2-5f65-ae2f-fbe4de9a1c36";
WordLegacyTableCellRecord.init();
return WordLegacyTableCellRecord;
})(OS.DataTypes.GenericRecord);
Extension_OfficeUtilsExternalLibModel.WordLegacyTableCellRecord = WordLegacyTableCellRecord;

});
define("Extension.OfficeUtilsExternalLib.model$WordLegacyTableCellRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.OfficeUtilsExternalLib.model", "Extension.OfficeUtilsExternalLib.model$WordLegacyTableCellRecord"], function (exports, OutSystems, Extension_OfficeUtilsExternalLibModel) {
var OS = OutSystems.Internal;
var WordLegacyTableCellRecordList = (function (_super) {
__extends(WordLegacyTableCellRecordList, _super);
function WordLegacyTableCellRecordList(defaults) {
_super.apply(this, arguments);
}
WordLegacyTableCellRecordList.itemType = Extension_OfficeUtilsExternalLibModel.WordLegacyTableCellRecord;
return WordLegacyTableCellRecordList;
})(OS.DataTypes.GenericRecordList);
Extension_OfficeUtilsExternalLibModel.WordLegacyTableCellRecordList = WordLegacyTableCellRecordList;

});
define("Extension.OfficeUtilsExternalLib.model$WordLegacyTableRowRec", ["exports", "OutSystems/ClientRuntime/Main", "Extension.OfficeUtilsExternalLib.model", "Extension.OfficeUtilsExternalLib.model$WordLegacyTableCellRecordList"], function (exports, OutSystems, Extension_OfficeUtilsExternalLibModel) {
var OS = OutSystems.Internal;
var WordLegacyTableRowRec = (function (_super) {
__extends(WordLegacyTableRowRec, _super);
function WordLegacyTableRowRec(defaults) {
_super.apply(this, arguments);
}
WordLegacyTableRowRec.attributesToDeclare = function () {
return [
this.attr("TableCells", "tableCellsAttr", "TableCells", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_OfficeUtilsExternalLibModel.WordLegacyTableCellRecordList());
}, true, Extension_OfficeUtilsExternalLibModel.WordLegacyTableCellRecordList)
].concat(_super.attributesToDeclare.call(this));
};
WordLegacyTableRowRec.fromStructure = function (str) {
return new WordLegacyTableRowRec(new WordLegacyTableRowRec.RecordClass({
tableCellsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
WordLegacyTableRowRec.init();
return WordLegacyTableRowRec;
})(OS.DataTypes.GenericRecord);
Extension_OfficeUtilsExternalLibModel.WordLegacyTableRowRec = WordLegacyTableRowRec;

});
define("Extension.OfficeUtilsExternalLib.model$WordLegacyTableRowRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.OfficeUtilsExternalLib.model", "Extension.OfficeUtilsExternalLib.model$WordLegacyTableRowRec"], function (exports, OutSystems, Extension_OfficeUtilsExternalLibModel) {
var OS = OutSystems.Internal;
var WordLegacyTableRowRecord = (function (_super) {
__extends(WordLegacyTableRowRecord, _super);
function WordLegacyTableRowRecord(defaults) {
_super.apply(this, arguments);
}
WordLegacyTableRowRecord.attributesToDeclare = function () {
return [
this.attr("WordLegacyTableRow", "wordLegacyTableRowAttr", "WordLegacyTableRow", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_OfficeUtilsExternalLibModel.WordLegacyTableRowRec());
}, true, Extension_OfficeUtilsExternalLibModel.WordLegacyTableRowRec)
].concat(_super.attributesToDeclare.call(this));
};
WordLegacyTableRowRecord.fromStructure = function (str) {
return new WordLegacyTableRowRecord(new WordLegacyTableRowRecord.RecordClass({
wordLegacyTableRowAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
WordLegacyTableRowRecord._isAnonymousRecord = true;
WordLegacyTableRowRecord.UniqueId = "8c17d77a-7e1c-8240-5bc1-c1ecc4fe91bd";
WordLegacyTableRowRecord.init();
return WordLegacyTableRowRecord;
})(OS.DataTypes.GenericRecord);
Extension_OfficeUtilsExternalLibModel.WordLegacyTableRowRecord = WordLegacyTableRowRecord;

});
define("Extension.OfficeUtilsExternalLib.model$WordLegacyTableRowRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.OfficeUtilsExternalLib.model", "Extension.OfficeUtilsExternalLib.model$WordLegacyTableRowRecord"], function (exports, OutSystems, Extension_OfficeUtilsExternalLibModel) {
var OS = OutSystems.Internal;
var WordLegacyTableRowRecordList = (function (_super) {
__extends(WordLegacyTableRowRecordList, _super);
function WordLegacyTableRowRecordList(defaults) {
_super.apply(this, arguments);
}
WordLegacyTableRowRecordList.itemType = Extension_OfficeUtilsExternalLibModel.WordLegacyTableRowRecord;
return WordLegacyTableRowRecordList;
})(OS.DataTypes.GenericRecordList);
Extension_OfficeUtilsExternalLibModel.WordLegacyTableRowRecordList = WordLegacyTableRowRecordList;

});
define("Extension.OfficeUtilsExternalLib.model$WordLegacyTableRec", ["exports", "OutSystems/ClientRuntime/Main", "Extension.OfficeUtilsExternalLib.model", "Extension.OfficeUtilsExternalLib.model$WordLegacyTableRowRecordList"], function (exports, OutSystems, Extension_OfficeUtilsExternalLibModel) {
var OS = OutSystems.Internal;
var WordLegacyTableRec = (function (_super) {
__extends(WordLegacyTableRec, _super);
function WordLegacyTableRec(defaults) {
_super.apply(this, arguments);
}
WordLegacyTableRec.attributesToDeclare = function () {
return [
this.attr("TableRows", "tableRowsAttr", "TableRows", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_OfficeUtilsExternalLibModel.WordLegacyTableRowRecordList());
}, true, Extension_OfficeUtilsExternalLibModel.WordLegacyTableRowRecordList)
].concat(_super.attributesToDeclare.call(this));
};
WordLegacyTableRec.fromStructure = function (str) {
return new WordLegacyTableRec(new WordLegacyTableRec.RecordClass({
tableRowsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
WordLegacyTableRec.init();
return WordLegacyTableRec;
})(OS.DataTypes.GenericRecord);
Extension_OfficeUtilsExternalLibModel.WordLegacyTableRec = WordLegacyTableRec;

});
define("Extension.OfficeUtilsExternalLib.model$WordLegacyTableRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.OfficeUtilsExternalLib.model", "Extension.OfficeUtilsExternalLib.model$WordLegacyTableRec"], function (exports, OutSystems, Extension_OfficeUtilsExternalLibModel) {
var OS = OutSystems.Internal;
var WordLegacyTableRecord = (function (_super) {
__extends(WordLegacyTableRecord, _super);
function WordLegacyTableRecord(defaults) {
_super.apply(this, arguments);
}
WordLegacyTableRecord.attributesToDeclare = function () {
return [
this.attr("WordLegacyTable", "wordLegacyTableAttr", "WordLegacyTable", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_OfficeUtilsExternalLibModel.WordLegacyTableRec());
}, true, Extension_OfficeUtilsExternalLibModel.WordLegacyTableRec)
].concat(_super.attributesToDeclare.call(this));
};
WordLegacyTableRecord.fromStructure = function (str) {
return new WordLegacyTableRecord(new WordLegacyTableRecord.RecordClass({
wordLegacyTableAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
WordLegacyTableRecord._isAnonymousRecord = true;
WordLegacyTableRecord.UniqueId = "befab645-f2db-6f4a-3660-f6d82bdc6def";
WordLegacyTableRecord.init();
return WordLegacyTableRecord;
})(OS.DataTypes.GenericRecord);
Extension_OfficeUtilsExternalLibModel.WordLegacyTableRecord = WordLegacyTableRecord;

});
define("Extension.OfficeUtilsExternalLib.model$WordOutputRec", ["exports", "OutSystems/ClientRuntime/Main", "Extension.OfficeUtilsExternalLib.model", "Extension.OfficeUtilsExternalLib.model$WordTextRecord", "Extension.OfficeUtilsExternalLib.model$WordLegacyTableRecord", "Extension.OfficeUtilsExternalLib.model$WordTableRecord", "Extension.OfficeUtilsExternalLib.model$WordPictureRecord"], function (exports, OutSystems, Extension_OfficeUtilsExternalLibModel) {
var OS = OutSystems.Internal;
var WordOutputRec = (function (_super) {
__extends(WordOutputRec, _super);
function WordOutputRec(defaults) {
_super.apply(this, arguments);
}
WordOutputRec.attributesToDeclare = function () {
return [
this.attr("OutputType", "outputTypeAttr", "OutputType", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Placeholder", "placeholderAttr", "Placeholder", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("WordText", "wordTextAttr", "WordText", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_OfficeUtilsExternalLibModel.WordTextRecord());
}, true, Extension_OfficeUtilsExternalLibModel.WordTextRecord), 
this.attr("WordLegacyTable", "wordLegacyTableAttr", "WordLegacyTable", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_OfficeUtilsExternalLibModel.WordLegacyTableRecord());
}, true, Extension_OfficeUtilsExternalLibModel.WordLegacyTableRecord), 
this.attr("WordTable", "wordTableAttr", "WordTable", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_OfficeUtilsExternalLibModel.WordTableRecord());
}, true, Extension_OfficeUtilsExternalLibModel.WordTableRecord), 
this.attr("WordPicture", "wordPictureAttr", "WordPicture", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_OfficeUtilsExternalLibModel.WordPictureRecord());
}, true, Extension_OfficeUtilsExternalLibModel.WordPictureRecord), 
this.attr("DeletePlaceholder", "deletePlaceholderAttr", "DeletePlaceholder", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
WordOutputRec.init();
return WordOutputRec;
})(OS.DataTypes.GenericRecord);
Extension_OfficeUtilsExternalLibModel.WordOutputRec = WordOutputRec;

});
define("Extension.OfficeUtilsExternalLib.model$WordOutputRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.OfficeUtilsExternalLib.model", "Extension.OfficeUtilsExternalLib.model$WordOutputRec"], function (exports, OutSystems, Extension_OfficeUtilsExternalLibModel) {
var OS = OutSystems.Internal;
var WordOutputRecord = (function (_super) {
__extends(WordOutputRecord, _super);
function WordOutputRecord(defaults) {
_super.apply(this, arguments);
}
WordOutputRecord.attributesToDeclare = function () {
return [
this.attr("WordOutput", "wordOutputAttr", "WordOutput", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_OfficeUtilsExternalLibModel.WordOutputRec());
}, true, Extension_OfficeUtilsExternalLibModel.WordOutputRec)
].concat(_super.attributesToDeclare.call(this));
};
WordOutputRecord.fromStructure = function (str) {
return new WordOutputRecord(new WordOutputRecord.RecordClass({
wordOutputAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
WordOutputRecord._isAnonymousRecord = true;
WordOutputRecord.UniqueId = "8aec5090-9c69-4ef1-e51f-0665f33ceebd";
WordOutputRecord.init();
return WordOutputRecord;
})(OS.DataTypes.GenericRecord);
Extension_OfficeUtilsExternalLibModel.WordOutputRecord = WordOutputRecord;

});
define("Extension.OfficeUtilsExternalLib.model$WordOutputRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.OfficeUtilsExternalLib.model", "Extension.OfficeUtilsExternalLib.model$WordOutputRecord"], function (exports, OutSystems, Extension_OfficeUtilsExternalLibModel) {
var OS = OutSystems.Internal;
var WordOutputRecordList = (function (_super) {
__extends(WordOutputRecordList, _super);
function WordOutputRecordList(defaults) {
_super.apply(this, arguments);
}
WordOutputRecordList.itemType = Extension_OfficeUtilsExternalLibModel.WordOutputRecord;
return WordOutputRecordList;
})(OS.DataTypes.GenericRecordList);
Extension_OfficeUtilsExternalLibModel.WordOutputRecordList = WordOutputRecordList;

});
define("Extension.OfficeUtilsExternalLib.model$WordOptionsRec", ["exports", "OutSystems/ClientRuntime/Main", "Extension.OfficeUtilsExternalLib.model"], function (exports, OutSystems, Extension_OfficeUtilsExternalLibModel) {
var OS = OutSystems.Internal;
var WordOptionsRec = (function (_super) {
__extends(WordOptionsRec, _super);
function WordOptionsRec(defaults) {
_super.apply(this, arguments);
}
WordOptionsRec.attributesToDeclare = function () {
return [
this.attr("AutoRemoveInvalidXMLChars", "autoRemoveInvalidXMLCharsAttr", "AutoRemoveInvalidXMLChars", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
WordOptionsRec.fromStructure = function (str) {
return new WordOptionsRec(new WordOptionsRec.RecordClass({
autoRemoveInvalidXMLCharsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
WordOptionsRec.init();
return WordOptionsRec;
})(OS.DataTypes.GenericRecord);
Extension_OfficeUtilsExternalLibModel.WordOptionsRec = WordOptionsRec;

});
define("Extension.OfficeUtilsExternalLib.model$WordOptionsRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.OfficeUtilsExternalLib.model", "Extension.OfficeUtilsExternalLib.model$WordOptionsRec"], function (exports, OutSystems, Extension_OfficeUtilsExternalLibModel) {
var OS = OutSystems.Internal;
var WordOptionsRecord = (function (_super) {
__extends(WordOptionsRecord, _super);
function WordOptionsRecord(defaults) {
_super.apply(this, arguments);
}
WordOptionsRecord.attributesToDeclare = function () {
return [
this.attr("WordOptions", "wordOptionsAttr", "WordOptions", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_OfficeUtilsExternalLibModel.WordOptionsRec());
}, true, Extension_OfficeUtilsExternalLibModel.WordOptionsRec)
].concat(_super.attributesToDeclare.call(this));
};
WordOptionsRecord.fromStructure = function (str) {
return new WordOptionsRecord(new WordOptionsRecord.RecordClass({
wordOptionsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
WordOptionsRecord._isAnonymousRecord = true;
WordOptionsRecord.UniqueId = "e1bce663-045a-9c3f-9037-0a08144b302b";
WordOptionsRecord.init();
return WordOptionsRecord;
})(OS.DataTypes.GenericRecord);
Extension_OfficeUtilsExternalLibModel.WordOptionsRecord = WordOptionsRecord;

});
define("Extension.OfficeUtilsExternalLib.model$WordFileRec", ["exports", "OutSystems/ClientRuntime/Main", "Extension.OfficeUtilsExternalLib.model", "Extension.OfficeUtilsExternalLib.model$WordOutputRecordList", "Extension.OfficeUtilsExternalLib.model$WordOptionsRecord"], function (exports, OutSystems, Extension_OfficeUtilsExternalLibModel) {
var OS = OutSystems.Internal;
var WordFileRec = (function (_super) {
__extends(WordFileRec, _super);
function WordFileRec(defaults) {
_super.apply(this, arguments);
}
WordFileRec.attributesToDeclare = function () {
return [
this.attr("WordOutputs", "wordOutputsAttr", "WordOutputs", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_OfficeUtilsExternalLibModel.WordOutputRecordList());
}, true, Extension_OfficeUtilsExternalLibModel.WordOutputRecordList), 
this.attr("Template", "templateAttr", "Template", true, false, OS.DataTypes.DataTypes.BinaryData, function () {
return OS.DataTypes.BinaryData.defaultValue;
}, true), 
this.attr("Options", "optionsAttr", "Options", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_OfficeUtilsExternalLibModel.WordOptionsRecord());
}, true, Extension_OfficeUtilsExternalLibModel.WordOptionsRecord)
].concat(_super.attributesToDeclare.call(this));
};
WordFileRec.init();
return WordFileRec;
})(OS.DataTypes.GenericRecord);
Extension_OfficeUtilsExternalLibModel.WordFileRec = WordFileRec;

});
define("Extension.OfficeUtilsExternalLib.model$WordFileRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.OfficeUtilsExternalLib.model", "Extension.OfficeUtilsExternalLib.model$WordFileRec"], function (exports, OutSystems, Extension_OfficeUtilsExternalLibModel) {
var OS = OutSystems.Internal;
var WordFileRecord = (function (_super) {
__extends(WordFileRecord, _super);
function WordFileRecord(defaults) {
_super.apply(this, arguments);
}
WordFileRecord.attributesToDeclare = function () {
return [
this.attr("WordFile", "wordFileAttr", "WordFile", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_OfficeUtilsExternalLibModel.WordFileRec());
}, true, Extension_OfficeUtilsExternalLibModel.WordFileRec)
].concat(_super.attributesToDeclare.call(this));
};
WordFileRecord.fromStructure = function (str) {
return new WordFileRecord(new WordFileRecord.RecordClass({
wordFileAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
WordFileRecord._isAnonymousRecord = true;
WordFileRecord.UniqueId = "143b2d38-3508-84ad-b266-8c8ab498a362";
WordFileRecord.init();
return WordFileRecord;
})(OS.DataTypes.GenericRecord);
Extension_OfficeUtilsExternalLibModel.WordFileRecord = WordFileRecord;

});
define("Extension.OfficeUtilsExternalLib.model$ExcelCellStyleRec", ["exports", "OutSystems/ClientRuntime/Main", "Extension.OfficeUtilsExternalLib.model"], function (exports, OutSystems, Extension_OfficeUtilsExternalLibModel) {
var OS = OutSystems.Internal;
var ExcelCellStyleRec = (function (_super) {
__extends(ExcelCellStyleRec, _super);
function ExcelCellStyleRec(defaults) {
_super.apply(this, arguments);
}
ExcelCellStyleRec.attributesToDeclare = function () {
return [
this.attr("Row", "rowAttr", "Row", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Column", "columnAttr", "Column", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("CellColor", "cellColorAttr", "CellColor", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CellFontColor", "cellFontColorAttr", "CellFontColor", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CellBorderBottomColor", "cellBorderBottomColorAttr", "CellBorderBottomColor", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CellBorderTopColor", "cellBorderTopColorAttr", "CellBorderTopColor", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CellBorderRightColor", "cellBorderRightColorAttr", "CellBorderRightColor", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CellBorderLeftColor", "cellBorderLeftColorAttr", "CellBorderLeftColor", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CellHorizontalAlignment", "cellHorizontalAlignmentAttr", "CellHorizontalAlignment", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("CellVerticalAlignment", "cellVerticalAlignmentAttr", "CellVerticalAlignment", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ExcelCellStyleRec.init();
return ExcelCellStyleRec;
})(OS.DataTypes.GenericRecord);
Extension_OfficeUtilsExternalLibModel.ExcelCellStyleRec = ExcelCellStyleRec;

});
define("Extension.OfficeUtilsExternalLib.model$WordTextRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.OfficeUtilsExternalLib.model", "Extension.OfficeUtilsExternalLib.model$WordTextRecord"], function (exports, OutSystems, Extension_OfficeUtilsExternalLibModel) {
var OS = OutSystems.Internal;
var WordTextRecordList = (function (_super) {
__extends(WordTextRecordList, _super);
function WordTextRecordList(defaults) {
_super.apply(this, arguments);
}
WordTextRecordList.itemType = Extension_OfficeUtilsExternalLibModel.WordTextRecord;
return WordTextRecordList;
})(OS.DataTypes.GenericRecordList);
Extension_OfficeUtilsExternalLibModel.WordTextRecordList = WordTextRecordList;

});
define("Extension.OfficeUtilsExternalLib.model$ExcelCellValueRec", ["exports", "OutSystems/ClientRuntime/Main", "Extension.OfficeUtilsExternalLib.model"], function (exports, OutSystems, Extension_OfficeUtilsExternalLibModel) {
var OS = OutSystems.Internal;
var ExcelCellValueRec = (function (_super) {
__extends(ExcelCellValueRec, _super);
function ExcelCellValueRec(defaults) {
_super.apply(this, arguments);
}
ExcelCellValueRec.attributesToDeclare = function () {
return [
this.attr("Row", "rowAttr", "Row", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Column", "columnAttr", "Column", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("CellValueType", "cellValueTypeAttr", "CellValueType", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("TextValue", "textValueAttr", "TextValue", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IntegerValue", "integerValueAttr", "IntegerValue", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("DecimalValue", "decimalValueAttr", "DecimalValue", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("BooleanValue", "booleanValueAttr", "BooleanValue", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("DateTimeValue", "dateTimeValueAttr", "DateTimeValue", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("DateValue", "dateValueAttr", "DateValue", false, false, OS.DataTypes.DataTypes.Date, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("TimeValue", "timeValueAttr", "TimeValue", false, false, OS.DataTypes.DataTypes.Time, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("Formula", "formulaAttr", "Formula", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("UseTemplateCellsDataFormat", "useTemplateCellsDataFormatAttr", "UseTemplateCellsDataFormat", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ExcelCellValueRec.init();
return ExcelCellValueRec;
})(OS.DataTypes.GenericRecord);
Extension_OfficeUtilsExternalLibModel.ExcelCellValueRec = ExcelCellValueRec;

});
define("Extension.OfficeUtilsExternalLib.model$WordTextStyleRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.OfficeUtilsExternalLib.model", "Extension.OfficeUtilsExternalLib.model$WordTextStyleRecord"], function (exports, OutSystems, Extension_OfficeUtilsExternalLibModel) {
var OS = OutSystems.Internal;
var WordTextStyleRecordList = (function (_super) {
__extends(WordTextStyleRecordList, _super);
function WordTextStyleRecordList(defaults) {
_super.apply(this, arguments);
}
WordTextStyleRecordList.itemType = Extension_OfficeUtilsExternalLibModel.WordTextStyleRecord;
return WordTextStyleRecordList;
})(OS.DataTypes.GenericRecordList);
Extension_OfficeUtilsExternalLibModel.WordTextStyleRecordList = WordTextStyleRecordList;

});
define("Extension.OfficeUtilsExternalLib.model$ExcelMergeCellsRec", ["exports", "OutSystems/ClientRuntime/Main", "Extension.OfficeUtilsExternalLib.model"], function (exports, OutSystems, Extension_OfficeUtilsExternalLibModel) {
var OS = OutSystems.Internal;
var ExcelMergeCellsRec = (function (_super) {
__extends(ExcelMergeCellsRec, _super);
function ExcelMergeCellsRec(defaults) {
_super.apply(this, arguments);
}
ExcelMergeCellsRec.attributesToDeclare = function () {
return [
this.attr("Row", "rowAttr", "Row", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Column", "columnAttr", "Column", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("RowTo", "rowToAttr", "RowTo", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("ColumnTo", "columnToAttr", "ColumnTo", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ExcelMergeCellsRec.init();
return ExcelMergeCellsRec;
})(OS.DataTypes.GenericRecord);
Extension_OfficeUtilsExternalLibModel.ExcelMergeCellsRec = ExcelMergeCellsRec;

});
define("Extension.OfficeUtilsExternalLib.model$ExcelMergeCellsRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.OfficeUtilsExternalLib.model", "Extension.OfficeUtilsExternalLib.model$ExcelMergeCellsRec"], function (exports, OutSystems, Extension_OfficeUtilsExternalLibModel) {
var OS = OutSystems.Internal;
var ExcelMergeCellsRecord = (function (_super) {
__extends(ExcelMergeCellsRecord, _super);
function ExcelMergeCellsRecord(defaults) {
_super.apply(this, arguments);
}
ExcelMergeCellsRecord.attributesToDeclare = function () {
return [
this.attr("ExcelMergeCells", "excelMergeCellsAttr", "ExcelMergeCells", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_OfficeUtilsExternalLibModel.ExcelMergeCellsRec());
}, true, Extension_OfficeUtilsExternalLibModel.ExcelMergeCellsRec)
].concat(_super.attributesToDeclare.call(this));
};
ExcelMergeCellsRecord.fromStructure = function (str) {
return new ExcelMergeCellsRecord(new ExcelMergeCellsRecord.RecordClass({
excelMergeCellsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ExcelMergeCellsRecord._isAnonymousRecord = true;
ExcelMergeCellsRecord.UniqueId = "38e7739e-5c61-269c-14a0-09a24b9b1354";
ExcelMergeCellsRecord.init();
return ExcelMergeCellsRecord;
})(OS.DataTypes.GenericRecord);
Extension_OfficeUtilsExternalLibModel.ExcelMergeCellsRecord = ExcelMergeCellsRecord;

});
define("Extension.OfficeUtilsExternalLib.model$ExcelTableRec", ["exports", "OutSystems/ClientRuntime/Main", "Extension.OfficeUtilsExternalLib.model"], function (exports, OutSystems, Extension_OfficeUtilsExternalLibModel) {
var OS = OutSystems.Internal;
var ExcelTableRec = (function (_super) {
__extends(ExcelTableRec, _super);
function ExcelTableRec(defaults) {
_super.apply(this, arguments);
}
ExcelTableRec.attributesToDeclare = function () {
return [
this.attr("Row", "rowAttr", "Row", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Column", "columnAttr", "Column", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Binary", "binaryAttr", "Binary", true, false, OS.DataTypes.DataTypes.BinaryData, function () {
return OS.DataTypes.BinaryData.defaultValue;
}, true), 
this.attr("DiscardHeader", "discardHeaderAttr", "DiscardHeader", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("UseTemplateCellsDataFormat", "useTemplateCellsDataFormatAttr", "UseTemplateCellsDataFormat", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ExcelTableRec.init();
return ExcelTableRec;
})(OS.DataTypes.GenericRecord);
Extension_OfficeUtilsExternalLibModel.ExcelTableRec = ExcelTableRec;

});
define("Extension.OfficeUtilsExternalLib.model$ExcelTableRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.OfficeUtilsExternalLib.model", "Extension.OfficeUtilsExternalLib.model$ExcelTableRec"], function (exports, OutSystems, Extension_OfficeUtilsExternalLibModel) {
var OS = OutSystems.Internal;
var ExcelTableRecord = (function (_super) {
__extends(ExcelTableRecord, _super);
function ExcelTableRecord(defaults) {
_super.apply(this, arguments);
}
ExcelTableRecord.attributesToDeclare = function () {
return [
this.attr("ExcelTable", "excelTableAttr", "ExcelTable", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_OfficeUtilsExternalLibModel.ExcelTableRec());
}, true, Extension_OfficeUtilsExternalLibModel.ExcelTableRec)
].concat(_super.attributesToDeclare.call(this));
};
ExcelTableRecord.fromStructure = function (str) {
return new ExcelTableRecord(new ExcelTableRecord.RecordClass({
excelTableAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ExcelTableRecord._isAnonymousRecord = true;
ExcelTableRecord.UniqueId = "6cc10b86-b882-3004-d234-5fab73532fc9";
ExcelTableRecord.init();
return ExcelTableRecord;
})(OS.DataTypes.GenericRecord);
Extension_OfficeUtilsExternalLibModel.ExcelTableRecord = ExcelTableRecord;

});
define("Extension.OfficeUtilsExternalLib.model$ExcelCellValueRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.OfficeUtilsExternalLib.model", "Extension.OfficeUtilsExternalLib.model$ExcelCellValueRec"], function (exports, OutSystems, Extension_OfficeUtilsExternalLibModel) {
var OS = OutSystems.Internal;
var ExcelCellValueRecord = (function (_super) {
__extends(ExcelCellValueRecord, _super);
function ExcelCellValueRecord(defaults) {
_super.apply(this, arguments);
}
ExcelCellValueRecord.attributesToDeclare = function () {
return [
this.attr("ExcelCellValue", "excelCellValueAttr", "ExcelCellValue", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_OfficeUtilsExternalLibModel.ExcelCellValueRec());
}, true, Extension_OfficeUtilsExternalLibModel.ExcelCellValueRec)
].concat(_super.attributesToDeclare.call(this));
};
ExcelCellValueRecord.fromStructure = function (str) {
return new ExcelCellValueRecord(new ExcelCellValueRecord.RecordClass({
excelCellValueAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ExcelCellValueRecord._isAnonymousRecord = true;
ExcelCellValueRecord.UniqueId = "820f1af2-5ac9-86f5-9ad0-97ca4d2ffe22";
ExcelCellValueRecord.init();
return ExcelCellValueRecord;
})(OS.DataTypes.GenericRecord);
Extension_OfficeUtilsExternalLibModel.ExcelCellValueRecord = ExcelCellValueRecord;

});
define("Extension.OfficeUtilsExternalLib.model$ExcelPictureRec", ["exports", "OutSystems/ClientRuntime/Main", "Extension.OfficeUtilsExternalLib.model"], function (exports, OutSystems, Extension_OfficeUtilsExternalLibModel) {
var OS = OutSystems.Internal;
var ExcelPictureRec = (function (_super) {
__extends(ExcelPictureRec, _super);
function ExcelPictureRec(defaults) {
_super.apply(this, arguments);
}
ExcelPictureRec.attributesToDeclare = function () {
return [
this.attr("Row", "rowAttr", "Row", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Column", "columnAttr", "Column", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("PictureBinary", "pictureBinaryAttr", "PictureBinary", true, false, OS.DataTypes.DataTypes.BinaryData, function () {
return OS.DataTypes.BinaryData.defaultValue;
}, true), 
this.attr("FitWithinCell", "fitWithinCellAttr", "FitWithinCell", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ExcelPictureRec.init();
return ExcelPictureRec;
})(OS.DataTypes.GenericRecord);
Extension_OfficeUtilsExternalLibModel.ExcelPictureRec = ExcelPictureRec;

});
define("Extension.OfficeUtilsExternalLib.model$ExcelPictureRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.OfficeUtilsExternalLib.model", "Extension.OfficeUtilsExternalLib.model$ExcelPictureRec"], function (exports, OutSystems, Extension_OfficeUtilsExternalLibModel) {
var OS = OutSystems.Internal;
var ExcelPictureRecord = (function (_super) {
__extends(ExcelPictureRecord, _super);
function ExcelPictureRecord(defaults) {
_super.apply(this, arguments);
}
ExcelPictureRecord.attributesToDeclare = function () {
return [
this.attr("ExcelPicture", "excelPictureAttr", "ExcelPicture", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_OfficeUtilsExternalLibModel.ExcelPictureRec());
}, true, Extension_OfficeUtilsExternalLibModel.ExcelPictureRec)
].concat(_super.attributesToDeclare.call(this));
};
ExcelPictureRecord.fromStructure = function (str) {
return new ExcelPictureRecord(new ExcelPictureRecord.RecordClass({
excelPictureAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ExcelPictureRecord._isAnonymousRecord = true;
ExcelPictureRecord.UniqueId = "f58d4a59-e7a2-3191-ef01-ea7eddd9a569";
ExcelPictureRecord.init();
return ExcelPictureRecord;
})(OS.DataTypes.GenericRecord);
Extension_OfficeUtilsExternalLibModel.ExcelPictureRecord = ExcelPictureRecord;

});
define("Extension.OfficeUtilsExternalLib.model$ExcelCellStyleRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.OfficeUtilsExternalLib.model", "Extension.OfficeUtilsExternalLib.model$ExcelCellStyleRec"], function (exports, OutSystems, Extension_OfficeUtilsExternalLibModel) {
var OS = OutSystems.Internal;
var ExcelCellStyleRecord = (function (_super) {
__extends(ExcelCellStyleRecord, _super);
function ExcelCellStyleRecord(defaults) {
_super.apply(this, arguments);
}
ExcelCellStyleRecord.attributesToDeclare = function () {
return [
this.attr("ExcelCellStyle", "excelCellStyleAttr", "ExcelCellStyle", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_OfficeUtilsExternalLibModel.ExcelCellStyleRec());
}, true, Extension_OfficeUtilsExternalLibModel.ExcelCellStyleRec)
].concat(_super.attributesToDeclare.call(this));
};
ExcelCellStyleRecord.fromStructure = function (str) {
return new ExcelCellStyleRecord(new ExcelCellStyleRecord.RecordClass({
excelCellStyleAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ExcelCellStyleRecord._isAnonymousRecord = true;
ExcelCellStyleRecord.UniqueId = "f6923453-e003-442b-232b-596f0648e433";
ExcelCellStyleRecord.init();
return ExcelCellStyleRecord;
})(OS.DataTypes.GenericRecord);
Extension_OfficeUtilsExternalLibModel.ExcelCellStyleRecord = ExcelCellStyleRecord;

});
define("Extension.OfficeUtilsExternalLib.model$ExcelCloneSheetRec", ["exports", "OutSystems/ClientRuntime/Main", "Extension.OfficeUtilsExternalLib.model"], function (exports, OutSystems, Extension_OfficeUtilsExternalLibModel) {
var OS = OutSystems.Internal;
var ExcelCloneSheetRec = (function (_super) {
__extends(ExcelCloneSheetRec, _super);
function ExcelCloneSheetRec(defaults) {
_super.apply(this, arguments);
}
ExcelCloneSheetRec.attributesToDeclare = function () {
return [
this.attr("SheetToClone", "sheetToCloneAttr", "SheetToClone", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ExcelCloneSheetRec.fromStructure = function (str) {
return new ExcelCloneSheetRec(new ExcelCloneSheetRec.RecordClass({
sheetToCloneAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ExcelCloneSheetRec.init();
return ExcelCloneSheetRec;
})(OS.DataTypes.GenericRecord);
Extension_OfficeUtilsExternalLibModel.ExcelCloneSheetRec = ExcelCloneSheetRec;

});
define("Extension.OfficeUtilsExternalLib.model$ExcelCloneSheetRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.OfficeUtilsExternalLib.model", "Extension.OfficeUtilsExternalLib.model$ExcelCloneSheetRec"], function (exports, OutSystems, Extension_OfficeUtilsExternalLibModel) {
var OS = OutSystems.Internal;
var ExcelCloneSheetRecord = (function (_super) {
__extends(ExcelCloneSheetRecord, _super);
function ExcelCloneSheetRecord(defaults) {
_super.apply(this, arguments);
}
ExcelCloneSheetRecord.attributesToDeclare = function () {
return [
this.attr("ExcelCloneSheet", "excelCloneSheetAttr", "ExcelCloneSheet", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_OfficeUtilsExternalLibModel.ExcelCloneSheetRec());
}, true, Extension_OfficeUtilsExternalLibModel.ExcelCloneSheetRec)
].concat(_super.attributesToDeclare.call(this));
};
ExcelCloneSheetRecord.fromStructure = function (str) {
return new ExcelCloneSheetRecord(new ExcelCloneSheetRecord.RecordClass({
excelCloneSheetAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ExcelCloneSheetRecord._isAnonymousRecord = true;
ExcelCloneSheetRecord.UniqueId = "6183f790-1d75-1c24-7676-eefa7205617d";
ExcelCloneSheetRecord.init();
return ExcelCloneSheetRecord;
})(OS.DataTypes.GenericRecord);
Extension_OfficeUtilsExternalLibModel.ExcelCloneSheetRecord = ExcelCloneSheetRecord;

});
define("Extension.OfficeUtilsExternalLib.model$ExcelSheetPropertiesRec", ["exports", "OutSystems/ClientRuntime/Main", "Extension.OfficeUtilsExternalLib.model"], function (exports, OutSystems, Extension_OfficeUtilsExternalLibModel) {
var OS = OutSystems.Internal;
var ExcelSheetPropertiesRec = (function (_super) {
__extends(ExcelSheetPropertiesRec, _super);
function ExcelSheetPropertiesRec(defaults) {
_super.apply(this, arguments);
}
ExcelSheetPropertiesRec.attributesToDeclare = function () {
return [
this.attr("Password", "passwordAttr", "Password", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("UnlockFormatting", "unlockFormattingAttr", "UnlockFormatting", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ExcelSheetPropertiesRec.init();
return ExcelSheetPropertiesRec;
})(OS.DataTypes.GenericRecord);
Extension_OfficeUtilsExternalLibModel.ExcelSheetPropertiesRec = ExcelSheetPropertiesRec;

});
define("Extension.OfficeUtilsExternalLib.model$ExcelSheetPropertiesRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.OfficeUtilsExternalLib.model", "Extension.OfficeUtilsExternalLib.model$ExcelSheetPropertiesRec"], function (exports, OutSystems, Extension_OfficeUtilsExternalLibModel) {
var OS = OutSystems.Internal;
var ExcelSheetPropertiesRecord = (function (_super) {
__extends(ExcelSheetPropertiesRecord, _super);
function ExcelSheetPropertiesRecord(defaults) {
_super.apply(this, arguments);
}
ExcelSheetPropertiesRecord.attributesToDeclare = function () {
return [
this.attr("ExcelSheetProperties", "excelSheetPropertiesAttr", "ExcelSheetProperties", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_OfficeUtilsExternalLibModel.ExcelSheetPropertiesRec());
}, true, Extension_OfficeUtilsExternalLibModel.ExcelSheetPropertiesRec)
].concat(_super.attributesToDeclare.call(this));
};
ExcelSheetPropertiesRecord.fromStructure = function (str) {
return new ExcelSheetPropertiesRecord(new ExcelSheetPropertiesRecord.RecordClass({
excelSheetPropertiesAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ExcelSheetPropertiesRecord._isAnonymousRecord = true;
ExcelSheetPropertiesRecord.UniqueId = "6fdebf81-ea60-8672-3683-728fb7b610b9";
ExcelSheetPropertiesRecord.init();
return ExcelSheetPropertiesRecord;
})(OS.DataTypes.GenericRecord);
Extension_OfficeUtilsExternalLibModel.ExcelSheetPropertiesRecord = ExcelSheetPropertiesRecord;

});
define("Extension.OfficeUtilsExternalLib.model$ExcelOutputRec", ["exports", "OutSystems/ClientRuntime/Main", "Extension.OfficeUtilsExternalLib.model", "Extension.OfficeUtilsExternalLib.model$ExcelTableRecord", "Extension.OfficeUtilsExternalLib.model$ExcelCellValueRecord", "Extension.OfficeUtilsExternalLib.model$ExcelPictureRecord", "Extension.OfficeUtilsExternalLib.model$ExcelCellStyleRecord", "Extension.OfficeUtilsExternalLib.model$ExcelMergeCellsRecord", "Extension.OfficeUtilsExternalLib.model$ExcelCloneSheetRecord", "Extension.OfficeUtilsExternalLib.model$ExcelSheetPropertiesRecord"], function (exports, OutSystems, Extension_OfficeUtilsExternalLibModel) {
var OS = OutSystems.Internal;
var ExcelOutputRec = (function (_super) {
__extends(ExcelOutputRec, _super);
function ExcelOutputRec(defaults) {
_super.apply(this, arguments);
}
ExcelOutputRec.attributesToDeclare = function () {
return [
this.attr("OutputType", "outputTypeAttr", "OutputType", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("SheetName", "sheetNameAttr", "SheetName", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ExcelTable", "excelTableAttr", "ExcelTable", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_OfficeUtilsExternalLibModel.ExcelTableRecord());
}, true, Extension_OfficeUtilsExternalLibModel.ExcelTableRecord), 
this.attr("ExcelCellValue", "excelCellValueAttr", "ExcelCellValue", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_OfficeUtilsExternalLibModel.ExcelCellValueRecord());
}, true, Extension_OfficeUtilsExternalLibModel.ExcelCellValueRecord), 
this.attr("ExcelPicture", "excelPictureAttr", "ExcelPicture", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_OfficeUtilsExternalLibModel.ExcelPictureRecord());
}, true, Extension_OfficeUtilsExternalLibModel.ExcelPictureRecord), 
this.attr("ExcelCellStyle", "excelCellStyleAttr", "ExcelCellStyle", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_OfficeUtilsExternalLibModel.ExcelCellStyleRecord());
}, true, Extension_OfficeUtilsExternalLibModel.ExcelCellStyleRecord), 
this.attr("ExcelMergeCells", "excelMergeCellsAttr", "ExcelMergeCells", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_OfficeUtilsExternalLibModel.ExcelMergeCellsRecord());
}, true, Extension_OfficeUtilsExternalLibModel.ExcelMergeCellsRecord), 
this.attr("ExcelCloneSheet", "excelCloneSheetAttr", "ExcelCloneSheet", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_OfficeUtilsExternalLibModel.ExcelCloneSheetRecord());
}, true, Extension_OfficeUtilsExternalLibModel.ExcelCloneSheetRecord), 
this.attr("ExcelSheetProperties", "excelSheetPropertiesAttr", "ExcelSheetProperties", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_OfficeUtilsExternalLibModel.ExcelSheetPropertiesRecord());
}, true, Extension_OfficeUtilsExternalLibModel.ExcelSheetPropertiesRecord)
].concat(_super.attributesToDeclare.call(this));
};
ExcelOutputRec.init();
return ExcelOutputRec;
})(OS.DataTypes.GenericRecord);
Extension_OfficeUtilsExternalLibModel.ExcelOutputRec = ExcelOutputRec;

});
define("Extension.OfficeUtilsExternalLib.model$ExcelOutputRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.OfficeUtilsExternalLib.model", "Extension.OfficeUtilsExternalLib.model$ExcelOutputRec"], function (exports, OutSystems, Extension_OfficeUtilsExternalLibModel) {
var OS = OutSystems.Internal;
var ExcelOutputRecord = (function (_super) {
__extends(ExcelOutputRecord, _super);
function ExcelOutputRecord(defaults) {
_super.apply(this, arguments);
}
ExcelOutputRecord.attributesToDeclare = function () {
return [
this.attr("ExcelOutput", "excelOutputAttr", "ExcelOutput", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_OfficeUtilsExternalLibModel.ExcelOutputRec());
}, true, Extension_OfficeUtilsExternalLibModel.ExcelOutputRec)
].concat(_super.attributesToDeclare.call(this));
};
ExcelOutputRecord.fromStructure = function (str) {
return new ExcelOutputRecord(new ExcelOutputRecord.RecordClass({
excelOutputAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ExcelOutputRecord._isAnonymousRecord = true;
ExcelOutputRecord.UniqueId = "bc3d89d1-7056-82f8-1e0e-79c97464b37e";
ExcelOutputRecord.init();
return ExcelOutputRecord;
})(OS.DataTypes.GenericRecord);
Extension_OfficeUtilsExternalLibModel.ExcelOutputRecord = ExcelOutputRecord;

});
define("Extension.OfficeUtilsExternalLib.model$ExcelOutputRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.OfficeUtilsExternalLib.model", "Extension.OfficeUtilsExternalLib.model$ExcelOutputRecord"], function (exports, OutSystems, Extension_OfficeUtilsExternalLibModel) {
var OS = OutSystems.Internal;
var ExcelOutputRecordList = (function (_super) {
__extends(ExcelOutputRecordList, _super);
function ExcelOutputRecordList(defaults) {
_super.apply(this, arguments);
}
ExcelOutputRecordList.itemType = Extension_OfficeUtilsExternalLibModel.ExcelOutputRecord;
return ExcelOutputRecordList;
})(OS.DataTypes.GenericRecordList);
Extension_OfficeUtilsExternalLibModel.ExcelOutputRecordList = ExcelOutputRecordList;

});
define("Extension.OfficeUtilsExternalLib.model$ExcelTableRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.OfficeUtilsExternalLib.model", "Extension.OfficeUtilsExternalLib.model$ExcelTableRecord"], function (exports, OutSystems, Extension_OfficeUtilsExternalLibModel) {
var OS = OutSystems.Internal;
var ExcelTableRecordList = (function (_super) {
__extends(ExcelTableRecordList, _super);
function ExcelTableRecordList(defaults) {
_super.apply(this, arguments);
}
ExcelTableRecordList.itemType = Extension_OfficeUtilsExternalLibModel.ExcelTableRecord;
return ExcelTableRecordList;
})(OS.DataTypes.GenericRecordList);
Extension_OfficeUtilsExternalLibModel.ExcelTableRecordList = ExcelTableRecordList;

});
define("Extension.OfficeUtilsExternalLib.model$WordOptionsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.OfficeUtilsExternalLib.model", "Extension.OfficeUtilsExternalLib.model$WordOptionsRecord"], function (exports, OutSystems, Extension_OfficeUtilsExternalLibModel) {
var OS = OutSystems.Internal;
var WordOptionsRecordList = (function (_super) {
__extends(WordOptionsRecordList, _super);
function WordOptionsRecordList(defaults) {
_super.apply(this, arguments);
}
WordOptionsRecordList.itemType = Extension_OfficeUtilsExternalLibModel.WordOptionsRecord;
return WordOptionsRecordList;
})(OS.DataTypes.GenericRecordList);
Extension_OfficeUtilsExternalLibModel.WordOptionsRecordList = WordOptionsRecordList;

});
define("Extension.OfficeUtilsExternalLib.model$ExcelSheetPropertiesRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.OfficeUtilsExternalLib.model", "Extension.OfficeUtilsExternalLib.model$ExcelSheetPropertiesRecord"], function (exports, OutSystems, Extension_OfficeUtilsExternalLibModel) {
var OS = OutSystems.Internal;
var ExcelSheetPropertiesRecordList = (function (_super) {
__extends(ExcelSheetPropertiesRecordList, _super);
function ExcelSheetPropertiesRecordList(defaults) {
_super.apply(this, arguments);
}
ExcelSheetPropertiesRecordList.itemType = Extension_OfficeUtilsExternalLibModel.ExcelSheetPropertiesRecord;
return ExcelSheetPropertiesRecordList;
})(OS.DataTypes.GenericRecordList);
Extension_OfficeUtilsExternalLibModel.ExcelSheetPropertiesRecordList = ExcelSheetPropertiesRecordList;

});
define("Extension.OfficeUtilsExternalLib.model$ExcelMergeCellsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.OfficeUtilsExternalLib.model", "Extension.OfficeUtilsExternalLib.model$ExcelMergeCellsRecord"], function (exports, OutSystems, Extension_OfficeUtilsExternalLibModel) {
var OS = OutSystems.Internal;
var ExcelMergeCellsRecordList = (function (_super) {
__extends(ExcelMergeCellsRecordList, _super);
function ExcelMergeCellsRecordList(defaults) {
_super.apply(this, arguments);
}
ExcelMergeCellsRecordList.itemType = Extension_OfficeUtilsExternalLibModel.ExcelMergeCellsRecord;
return ExcelMergeCellsRecordList;
})(OS.DataTypes.GenericRecordList);
Extension_OfficeUtilsExternalLibModel.ExcelMergeCellsRecordList = ExcelMergeCellsRecordList;

});
define("Extension.OfficeUtilsExternalLib.model$WordLegacyTableRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.OfficeUtilsExternalLib.model", "Extension.OfficeUtilsExternalLib.model$WordLegacyTableRecord"], function (exports, OutSystems, Extension_OfficeUtilsExternalLibModel) {
var OS = OutSystems.Internal;
var WordLegacyTableRecordList = (function (_super) {
__extends(WordLegacyTableRecordList, _super);
function WordLegacyTableRecordList(defaults) {
_super.apply(this, arguments);
}
WordLegacyTableRecordList.itemType = Extension_OfficeUtilsExternalLibModel.WordLegacyTableRecord;
return WordLegacyTableRecordList;
})(OS.DataTypes.GenericRecordList);
Extension_OfficeUtilsExternalLibModel.WordLegacyTableRecordList = WordLegacyTableRecordList;

});
define("Extension.OfficeUtilsExternalLib.model$ExcelCloneSheetRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.OfficeUtilsExternalLib.model", "Extension.OfficeUtilsExternalLib.model$ExcelCloneSheetRecord"], function (exports, OutSystems, Extension_OfficeUtilsExternalLibModel) {
var OS = OutSystems.Internal;
var ExcelCloneSheetRecordList = (function (_super) {
__extends(ExcelCloneSheetRecordList, _super);
function ExcelCloneSheetRecordList(defaults) {
_super.apply(this, arguments);
}
ExcelCloneSheetRecordList.itemType = Extension_OfficeUtilsExternalLibModel.ExcelCloneSheetRecord;
return ExcelCloneSheetRecordList;
})(OS.DataTypes.GenericRecordList);
Extension_OfficeUtilsExternalLibModel.ExcelCloneSheetRecordList = ExcelCloneSheetRecordList;

});
define("Extension.OfficeUtilsExternalLib.model$ExcelFileRec", ["exports", "OutSystems/ClientRuntime/Main", "Extension.OfficeUtilsExternalLib.model", "Extension.OfficeUtilsExternalLib.model$ExcelOutputRecordList"], function (exports, OutSystems, Extension_OfficeUtilsExternalLibModel) {
var OS = OutSystems.Internal;
var ExcelFileRec = (function (_super) {
__extends(ExcelFileRec, _super);
function ExcelFileRec(defaults) {
_super.apply(this, arguments);
}
ExcelFileRec.attributesToDeclare = function () {
return [
this.attr("ExcelOutputs", "excelOutputsAttr", "ExcelOutputs", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_OfficeUtilsExternalLibModel.ExcelOutputRecordList());
}, true, Extension_OfficeUtilsExternalLibModel.ExcelOutputRecordList), 
this.attr("Template", "templateAttr", "Template", false, false, OS.DataTypes.DataTypes.BinaryData, function () {
return OS.DataTypes.BinaryData.defaultValue;
}, true), 
this.attr("LockStructure", "lockStructureAttr", "LockStructure", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ExcelFileRec.init();
return ExcelFileRec;
})(OS.DataTypes.GenericRecord);
Extension_OfficeUtilsExternalLibModel.ExcelFileRec = ExcelFileRec;

});
define("Extension.OfficeUtilsExternalLib.model$ExcelFileRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.OfficeUtilsExternalLib.model", "Extension.OfficeUtilsExternalLib.model$ExcelFileRec"], function (exports, OutSystems, Extension_OfficeUtilsExternalLibModel) {
var OS = OutSystems.Internal;
var ExcelFileRecord = (function (_super) {
__extends(ExcelFileRecord, _super);
function ExcelFileRecord(defaults) {
_super.apply(this, arguments);
}
ExcelFileRecord.attributesToDeclare = function () {
return [
this.attr("ExcelFile", "excelFileAttr", "ExcelFile", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_OfficeUtilsExternalLibModel.ExcelFileRec());
}, true, Extension_OfficeUtilsExternalLibModel.ExcelFileRec)
].concat(_super.attributesToDeclare.call(this));
};
ExcelFileRecord.fromStructure = function (str) {
return new ExcelFileRecord(new ExcelFileRecord.RecordClass({
excelFileAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ExcelFileRecord._isAnonymousRecord = true;
ExcelFileRecord.UniqueId = "9a665fb9-38ed-b694-9587-3160bacc120d";
ExcelFileRecord.init();
return ExcelFileRecord;
})(OS.DataTypes.GenericRecord);
Extension_OfficeUtilsExternalLibModel.ExcelFileRecord = ExcelFileRecord;

});
define("Extension.OfficeUtilsExternalLib.model$WordPictureRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.OfficeUtilsExternalLib.model", "Extension.OfficeUtilsExternalLib.model$WordPictureRecord"], function (exports, OutSystems, Extension_OfficeUtilsExternalLibModel) {
var OS = OutSystems.Internal;
var WordPictureRecordList = (function (_super) {
__extends(WordPictureRecordList, _super);
function WordPictureRecordList(defaults) {
_super.apply(this, arguments);
}
WordPictureRecordList.itemType = Extension_OfficeUtilsExternalLibModel.WordPictureRecord;
return WordPictureRecordList;
})(OS.DataTypes.GenericRecordList);
Extension_OfficeUtilsExternalLibModel.WordPictureRecordList = WordPictureRecordList;

});
define("Extension.OfficeUtilsExternalLib.model$WordTableRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.OfficeUtilsExternalLib.model", "Extension.OfficeUtilsExternalLib.model$WordTableRecord"], function (exports, OutSystems, Extension_OfficeUtilsExternalLibModel) {
var OS = OutSystems.Internal;
var WordTableRecordList = (function (_super) {
__extends(WordTableRecordList, _super);
function WordTableRecordList(defaults) {
_super.apply(this, arguments);
}
WordTableRecordList.itemType = Extension_OfficeUtilsExternalLibModel.WordTableRecord;
return WordTableRecordList;
})(OS.DataTypes.GenericRecordList);
Extension_OfficeUtilsExternalLibModel.WordTableRecordList = WordTableRecordList;

});
define("Extension.OfficeUtilsExternalLib.model$WordFileRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.OfficeUtilsExternalLib.model", "Extension.OfficeUtilsExternalLib.model$WordFileRecord"], function (exports, OutSystems, Extension_OfficeUtilsExternalLibModel) {
var OS = OutSystems.Internal;
var WordFileRecordList = (function (_super) {
__extends(WordFileRecordList, _super);
function WordFileRecordList(defaults) {
_super.apply(this, arguments);
}
WordFileRecordList.itemType = Extension_OfficeUtilsExternalLibModel.WordFileRecord;
return WordFileRecordList;
})(OS.DataTypes.GenericRecordList);
Extension_OfficeUtilsExternalLibModel.WordFileRecordList = WordFileRecordList;

});
define("Extension.OfficeUtilsExternalLib.model$ExcelFileRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.OfficeUtilsExternalLib.model", "Extension.OfficeUtilsExternalLib.model$ExcelFileRecord"], function (exports, OutSystems, Extension_OfficeUtilsExternalLibModel) {
var OS = OutSystems.Internal;
var ExcelFileRecordList = (function (_super) {
__extends(ExcelFileRecordList, _super);
function ExcelFileRecordList(defaults) {
_super.apply(this, arguments);
}
ExcelFileRecordList.itemType = Extension_OfficeUtilsExternalLibModel.ExcelFileRecord;
return ExcelFileRecordList;
})(OS.DataTypes.GenericRecordList);
Extension_OfficeUtilsExternalLibModel.ExcelFileRecordList = ExcelFileRecordList;

});
define("Extension.OfficeUtilsExternalLib.model$ExcelCellStyleRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.OfficeUtilsExternalLib.model", "Extension.OfficeUtilsExternalLib.model$ExcelCellStyleRecord"], function (exports, OutSystems, Extension_OfficeUtilsExternalLibModel) {
var OS = OutSystems.Internal;
var ExcelCellStyleRecordList = (function (_super) {
__extends(ExcelCellStyleRecordList, _super);
function ExcelCellStyleRecordList(defaults) {
_super.apply(this, arguments);
}
ExcelCellStyleRecordList.itemType = Extension_OfficeUtilsExternalLibModel.ExcelCellStyleRecord;
return ExcelCellStyleRecordList;
})(OS.DataTypes.GenericRecordList);
Extension_OfficeUtilsExternalLibModel.ExcelCellStyleRecordList = ExcelCellStyleRecordList;

});
define("Extension.OfficeUtilsExternalLib.model$ExcelPictureRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.OfficeUtilsExternalLib.model", "Extension.OfficeUtilsExternalLib.model$ExcelPictureRecord"], function (exports, OutSystems, Extension_OfficeUtilsExternalLibModel) {
var OS = OutSystems.Internal;
var ExcelPictureRecordList = (function (_super) {
__extends(ExcelPictureRecordList, _super);
function ExcelPictureRecordList(defaults) {
_super.apply(this, arguments);
}
ExcelPictureRecordList.itemType = Extension_OfficeUtilsExternalLibModel.ExcelPictureRecord;
return ExcelPictureRecordList;
})(OS.DataTypes.GenericRecordList);
Extension_OfficeUtilsExternalLibModel.ExcelPictureRecordList = ExcelPictureRecordList;

});
define("Extension.OfficeUtilsExternalLib.model$ExcelCellValueRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.OfficeUtilsExternalLib.model", "Extension.OfficeUtilsExternalLib.model$ExcelCellValueRecord"], function (exports, OutSystems, Extension_OfficeUtilsExternalLibModel) {
var OS = OutSystems.Internal;
var ExcelCellValueRecordList = (function (_super) {
__extends(ExcelCellValueRecordList, _super);
function ExcelCellValueRecordList(defaults) {
_super.apply(this, arguments);
}
ExcelCellValueRecordList.itemType = Extension_OfficeUtilsExternalLibModel.ExcelCellValueRecord;
return ExcelCellValueRecordList;
})(OS.DataTypes.GenericRecordList);
Extension_OfficeUtilsExternalLibModel.ExcelCellValueRecordList = ExcelCellValueRecordList;

});
define("Extension.OfficeUtilsExternalLib.model", ["exports", "OutSystems/ClientRuntime/Main"], function (exports, OutSystems) {
var OS = OutSystems.Internal;
var Extension_OfficeUtilsExternalLibModel = exports;
});
