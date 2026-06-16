define("Extension.OfficeUtils.model$WordComplTableCellRec", ["exports", "OutSystems/ClientRuntime/Main", "Extension.OfficeUtils.model"], function (exports, OutSystems, Extension_OfficeUtilsModel) {
var OS = OutSystems.Internal;
var WordComplTableCellRec = (function (_super) {
__extends(WordComplTableCellRec, _super);
function WordComplTableCellRec(defaults) {
_super.apply(this, arguments);
}
WordComplTableCellRec.attributesToDeclare = function () {
return [
this.attr("Placeholder", "placeholderAttr", "Placeholder", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Text", "textAttr", "Text", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
WordComplTableCellRec.init();
return WordComplTableCellRec;
})(OS.DataTypes.GenericRecord);
Extension_OfficeUtilsModel.WordComplTableCellRec = WordComplTableCellRec;

});
define("Extension.OfficeUtils.model$WordComplTableCellRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.OfficeUtils.model", "Extension.OfficeUtils.model$WordComplTableCellRec"], function (exports, OutSystems, Extension_OfficeUtilsModel) {
var OS = OutSystems.Internal;
var WordComplTableCellRecord = (function (_super) {
__extends(WordComplTableCellRecord, _super);
function WordComplTableCellRecord(defaults) {
_super.apply(this, arguments);
}
WordComplTableCellRecord.attributesToDeclare = function () {
return [
this.attr("WordComplTableCell", "wordComplTableCellAttr", "WordComplTableCell", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_OfficeUtilsModel.WordComplTableCellRec());
}, true, Extension_OfficeUtilsModel.WordComplTableCellRec)
].concat(_super.attributesToDeclare.call(this));
};
WordComplTableCellRecord.fromStructure = function (str) {
return new WordComplTableCellRecord(new WordComplTableCellRecord.RecordClass({
wordComplTableCellAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
WordComplTableCellRecord._isAnonymousRecord = true;
WordComplTableCellRecord.UniqueId = "dada8228-049c-f1cb-c9c0-7cabb1686c58";
WordComplTableCellRecord.init();
return WordComplTableCellRecord;
})(OS.DataTypes.GenericRecord);
Extension_OfficeUtilsModel.WordComplTableCellRecord = WordComplTableCellRecord;

});
define("Extension.OfficeUtils.model$WordComplTableCellRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.OfficeUtils.model", "Extension.OfficeUtils.model$WordComplTableCellRecord"], function (exports, OutSystems, Extension_OfficeUtilsModel) {
var OS = OutSystems.Internal;
var WordComplTableCellRecordList = (function (_super) {
__extends(WordComplTableCellRecordList, _super);
function WordComplTableCellRecordList(defaults) {
_super.apply(this, arguments);
}
WordComplTableCellRecordList.itemType = Extension_OfficeUtilsModel.WordComplTableCellRecord;
return WordComplTableCellRecordList;
})(OS.DataTypes.GenericRecordList);
Extension_OfficeUtilsModel.WordComplTableCellRecordList = WordComplTableCellRecordList;

});
define("Extension.OfficeUtils.model$WordComplTableRowRec", ["exports", "OutSystems/ClientRuntime/Main", "Extension.OfficeUtils.model", "Extension.OfficeUtils.model$WordComplTableCellRecordList"], function (exports, OutSystems, Extension_OfficeUtilsModel) {
var OS = OutSystems.Internal;
var WordComplTableRowRec = (function (_super) {
__extends(WordComplTableRowRec, _super);
function WordComplTableRowRec(defaults) {
_super.apply(this, arguments);
}
WordComplTableRowRec.attributesToDeclare = function () {
return [
this.attr("WordComplTableCells", "wordComplTableCellsAttr", "WordComplTableCells", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_OfficeUtilsModel.WordComplTableCellRecordList());
}, true, Extension_OfficeUtilsModel.WordComplTableCellRecordList)
].concat(_super.attributesToDeclare.call(this));
};
WordComplTableRowRec.fromStructure = function (str) {
return new WordComplTableRowRec(new WordComplTableRowRec.RecordClass({
wordComplTableCellsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
WordComplTableRowRec.init();
return WordComplTableRowRec;
})(OS.DataTypes.GenericRecord);
Extension_OfficeUtilsModel.WordComplTableRowRec = WordComplTableRowRec;

});
define("Extension.OfficeUtils.model$WordComplTableRowRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.OfficeUtils.model", "Extension.OfficeUtils.model$WordComplTableRowRec"], function (exports, OutSystems, Extension_OfficeUtilsModel) {
var OS = OutSystems.Internal;
var WordComplTableRowRecord = (function (_super) {
__extends(WordComplTableRowRecord, _super);
function WordComplTableRowRecord(defaults) {
_super.apply(this, arguments);
}
WordComplTableRowRecord.attributesToDeclare = function () {
return [
this.attr("WordComplTableRow", "wordComplTableRowAttr", "WordComplTableRow", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_OfficeUtilsModel.WordComplTableRowRec());
}, true, Extension_OfficeUtilsModel.WordComplTableRowRec)
].concat(_super.attributesToDeclare.call(this));
};
WordComplTableRowRecord.fromStructure = function (str) {
return new WordComplTableRowRecord(new WordComplTableRowRecord.RecordClass({
wordComplTableRowAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
WordComplTableRowRecord._isAnonymousRecord = true;
WordComplTableRowRecord.UniqueId = "fe26a4bf-1305-5e8f-3681-c8be13ae6125";
WordComplTableRowRecord.init();
return WordComplTableRowRecord;
})(OS.DataTypes.GenericRecord);
Extension_OfficeUtilsModel.WordComplTableRowRecord = WordComplTableRowRecord;

});
define("Extension.OfficeUtils.model$WordComplTableRowRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.OfficeUtils.model", "Extension.OfficeUtils.model$WordComplTableRowRecord"], function (exports, OutSystems, Extension_OfficeUtilsModel) {
var OS = OutSystems.Internal;
var WordComplTableRowRecordList = (function (_super) {
__extends(WordComplTableRowRecordList, _super);
function WordComplTableRowRecordList(defaults) {
_super.apply(this, arguments);
}
WordComplTableRowRecordList.itemType = Extension_OfficeUtilsModel.WordComplTableRowRecord;
return WordComplTableRowRecordList;
})(OS.DataTypes.GenericRecordList);
Extension_OfficeUtilsModel.WordComplTableRowRecordList = WordComplTableRowRecordList;

});
define("Extension.OfficeUtils.model$WordComplTableRec", ["exports", "OutSystems/ClientRuntime/Main", "Extension.OfficeUtils.model", "Extension.OfficeUtils.model$WordComplTableRowRecordList"], function (exports, OutSystems, Extension_OfficeUtilsModel) {
var OS = OutSystems.Internal;
var WordComplTableRec = (function (_super) {
__extends(WordComplTableRec, _super);
function WordComplTableRec(defaults) {
_super.apply(this, arguments);
}
WordComplTableRec.attributesToDeclare = function () {
return [
this.attr("WordComplTableRows", "wordComplTableRowsAttr", "WordComplTableRows", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_OfficeUtilsModel.WordComplTableRowRecordList());
}, true, Extension_OfficeUtilsModel.WordComplTableRowRecordList)
].concat(_super.attributesToDeclare.call(this));
};
WordComplTableRec.fromStructure = function (str) {
return new WordComplTableRec(new WordComplTableRec.RecordClass({
wordComplTableRowsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
WordComplTableRec.init();
return WordComplTableRec;
})(OS.DataTypes.GenericRecord);
Extension_OfficeUtilsModel.WordComplTableRec = WordComplTableRec;

});
define("Extension.OfficeUtils.model$WordComplTableRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.OfficeUtils.model", "Extension.OfficeUtils.model$WordComplTableRec"], function (exports, OutSystems, Extension_OfficeUtilsModel) {
var OS = OutSystems.Internal;
var WordComplTableRecord = (function (_super) {
__extends(WordComplTableRecord, _super);
function WordComplTableRecord(defaults) {
_super.apply(this, arguments);
}
WordComplTableRecord.attributesToDeclare = function () {
return [
this.attr("WordComplTable", "wordComplTableAttr", "WordComplTable", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_OfficeUtilsModel.WordComplTableRec());
}, true, Extension_OfficeUtilsModel.WordComplTableRec)
].concat(_super.attributesToDeclare.call(this));
};
WordComplTableRecord.fromStructure = function (str) {
return new WordComplTableRecord(new WordComplTableRecord.RecordClass({
wordComplTableAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
WordComplTableRecord._isAnonymousRecord = true;
WordComplTableRecord.UniqueId = "a8d193dc-a91b-22c8-cebd-6421668e2cc5";
WordComplTableRecord.init();
return WordComplTableRecord;
})(OS.DataTypes.GenericRecord);
Extension_OfficeUtilsModel.WordComplTableRecord = WordComplTableRecord;

});
define("Extension.OfficeUtils.model$WordComplTableRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.OfficeUtils.model", "Extension.OfficeUtils.model$WordComplTableRecord"], function (exports, OutSystems, Extension_OfficeUtilsModel) {
var OS = OutSystems.Internal;
var WordComplTableRecordList = (function (_super) {
__extends(WordComplTableRecordList, _super);
function WordComplTableRecordList(defaults) {
_super.apply(this, arguments);
}
WordComplTableRecordList.itemType = Extension_OfficeUtilsModel.WordComplTableRecord;
return WordComplTableRecordList;
})(OS.DataTypes.GenericRecordList);
Extension_OfficeUtilsModel.WordComplTableRecordList = WordComplTableRecordList;

});
define("Extension.OfficeUtils.model$WordTextRec", ["exports", "OutSystems/ClientRuntime/Main", "Extension.OfficeUtils.model"], function (exports, OutSystems, Extension_OfficeUtilsModel) {
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
}, true)
].concat(_super.attributesToDeclare.call(this));
};
WordTextRec.fromStructure = function (str) {
return new WordTextRec(new WordTextRec.RecordClass({
textAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
WordTextRec.init();
return WordTextRec;
})(OS.DataTypes.GenericRecord);
Extension_OfficeUtilsModel.WordTextRec = WordTextRec;

});
define("Extension.OfficeUtils.model$WordTextRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.OfficeUtils.model", "Extension.OfficeUtils.model$WordTextRec"], function (exports, OutSystems, Extension_OfficeUtilsModel) {
var OS = OutSystems.Internal;
var WordTextRecord = (function (_super) {
__extends(WordTextRecord, _super);
function WordTextRecord(defaults) {
_super.apply(this, arguments);
}
WordTextRecord.attributesToDeclare = function () {
return [
this.attr("WordText", "wordTextAttr", "WordText", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_OfficeUtilsModel.WordTextRec());
}, true, Extension_OfficeUtilsModel.WordTextRec)
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
Extension_OfficeUtilsModel.WordTextRecord = WordTextRecord;

});
define("Extension.OfficeUtils.model$WordSimpleTableCellRec", ["exports", "OutSystems/ClientRuntime/Main", "Extension.OfficeUtils.model"], function (exports, OutSystems, Extension_OfficeUtilsModel) {
var OS = OutSystems.Internal;
var WordSimpleTableCellRec = (function (_super) {
__extends(WordSimpleTableCellRec, _super);
function WordSimpleTableCellRec(defaults) {
_super.apply(this, arguments);
}
WordSimpleTableCellRec.attributesToDeclare = function () {
return [
this.attr("Text", "textAttr", "Text", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
WordSimpleTableCellRec.fromStructure = function (str) {
return new WordSimpleTableCellRec(new WordSimpleTableCellRec.RecordClass({
textAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
WordSimpleTableCellRec.init();
return WordSimpleTableCellRec;
})(OS.DataTypes.GenericRecord);
Extension_OfficeUtilsModel.WordSimpleTableCellRec = WordSimpleTableCellRec;

});
define("Extension.OfficeUtils.model$WordSimpleTableCellRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.OfficeUtils.model", "Extension.OfficeUtils.model$WordSimpleTableCellRec"], function (exports, OutSystems, Extension_OfficeUtilsModel) {
var OS = OutSystems.Internal;
var WordSimpleTableCellRecord = (function (_super) {
__extends(WordSimpleTableCellRecord, _super);
function WordSimpleTableCellRecord(defaults) {
_super.apply(this, arguments);
}
WordSimpleTableCellRecord.attributesToDeclare = function () {
return [
this.attr("WordSimpleTableCell", "wordSimpleTableCellAttr", "WordSimpleTableCell", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_OfficeUtilsModel.WordSimpleTableCellRec());
}, true, Extension_OfficeUtilsModel.WordSimpleTableCellRec)
].concat(_super.attributesToDeclare.call(this));
};
WordSimpleTableCellRecord.fromStructure = function (str) {
return new WordSimpleTableCellRecord(new WordSimpleTableCellRecord.RecordClass({
wordSimpleTableCellAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
WordSimpleTableCellRecord._isAnonymousRecord = true;
WordSimpleTableCellRecord.UniqueId = "adc3c24d-6bb2-5f65-ae2f-fbe4de9a1c36";
WordSimpleTableCellRecord.init();
return WordSimpleTableCellRecord;
})(OS.DataTypes.GenericRecord);
Extension_OfficeUtilsModel.WordSimpleTableCellRecord = WordSimpleTableCellRecord;

});
define("Extension.OfficeUtils.model$WordSimpleTableCellRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.OfficeUtils.model", "Extension.OfficeUtils.model$WordSimpleTableCellRecord"], function (exports, OutSystems, Extension_OfficeUtilsModel) {
var OS = OutSystems.Internal;
var WordSimpleTableCellRecordList = (function (_super) {
__extends(WordSimpleTableCellRecordList, _super);
function WordSimpleTableCellRecordList(defaults) {
_super.apply(this, arguments);
}
WordSimpleTableCellRecordList.itemType = Extension_OfficeUtilsModel.WordSimpleTableCellRecord;
return WordSimpleTableCellRecordList;
})(OS.DataTypes.GenericRecordList);
Extension_OfficeUtilsModel.WordSimpleTableCellRecordList = WordSimpleTableCellRecordList;

});
define("Extension.OfficeUtils.model$WordSimpleTableRowRec", ["exports", "OutSystems/ClientRuntime/Main", "Extension.OfficeUtils.model", "Extension.OfficeUtils.model$WordSimpleTableCellRecordList"], function (exports, OutSystems, Extension_OfficeUtilsModel) {
var OS = OutSystems.Internal;
var WordSimpleTableRowRec = (function (_super) {
__extends(WordSimpleTableRowRec, _super);
function WordSimpleTableRowRec(defaults) {
_super.apply(this, arguments);
}
WordSimpleTableRowRec.attributesToDeclare = function () {
return [
this.attr("WordSimpleTableCells", "wordSimpleTableCellsAttr", "WordSimpleTableCells", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_OfficeUtilsModel.WordSimpleTableCellRecordList());
}, true, Extension_OfficeUtilsModel.WordSimpleTableCellRecordList)
].concat(_super.attributesToDeclare.call(this));
};
WordSimpleTableRowRec.fromStructure = function (str) {
return new WordSimpleTableRowRec(new WordSimpleTableRowRec.RecordClass({
wordSimpleTableCellsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
WordSimpleTableRowRec.init();
return WordSimpleTableRowRec;
})(OS.DataTypes.GenericRecord);
Extension_OfficeUtilsModel.WordSimpleTableRowRec = WordSimpleTableRowRec;

});
define("Extension.OfficeUtils.model$WordSimpleTableRowRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.OfficeUtils.model", "Extension.OfficeUtils.model$WordSimpleTableRowRec"], function (exports, OutSystems, Extension_OfficeUtilsModel) {
var OS = OutSystems.Internal;
var WordSimpleTableRowRecord = (function (_super) {
__extends(WordSimpleTableRowRecord, _super);
function WordSimpleTableRowRecord(defaults) {
_super.apply(this, arguments);
}
WordSimpleTableRowRecord.attributesToDeclare = function () {
return [
this.attr("WordSimpleTableRow", "wordSimpleTableRowAttr", "WordSimpleTableRow", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_OfficeUtilsModel.WordSimpleTableRowRec());
}, true, Extension_OfficeUtilsModel.WordSimpleTableRowRec)
].concat(_super.attributesToDeclare.call(this));
};
WordSimpleTableRowRecord.fromStructure = function (str) {
return new WordSimpleTableRowRecord(new WordSimpleTableRowRecord.RecordClass({
wordSimpleTableRowAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
WordSimpleTableRowRecord._isAnonymousRecord = true;
WordSimpleTableRowRecord.UniqueId = "8c17d77a-7e1c-8240-5bc1-c1ecc4fe91bd";
WordSimpleTableRowRecord.init();
return WordSimpleTableRowRecord;
})(OS.DataTypes.GenericRecord);
Extension_OfficeUtilsModel.WordSimpleTableRowRecord = WordSimpleTableRowRecord;

});
define("Extension.OfficeUtils.model$WordSimpleTableRowRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.OfficeUtils.model", "Extension.OfficeUtils.model$WordSimpleTableRowRecord"], function (exports, OutSystems, Extension_OfficeUtilsModel) {
var OS = OutSystems.Internal;
var WordSimpleTableRowRecordList = (function (_super) {
__extends(WordSimpleTableRowRecordList, _super);
function WordSimpleTableRowRecordList(defaults) {
_super.apply(this, arguments);
}
WordSimpleTableRowRecordList.itemType = Extension_OfficeUtilsModel.WordSimpleTableRowRecord;
return WordSimpleTableRowRecordList;
})(OS.DataTypes.GenericRecordList);
Extension_OfficeUtilsModel.WordSimpleTableRowRecordList = WordSimpleTableRowRecordList;

});
define("Extension.OfficeUtils.model$WordSimpleTableRec", ["exports", "OutSystems/ClientRuntime/Main", "Extension.OfficeUtils.model", "Extension.OfficeUtils.model$WordSimpleTableRowRecordList"], function (exports, OutSystems, Extension_OfficeUtilsModel) {
var OS = OutSystems.Internal;
var WordSimpleTableRec = (function (_super) {
__extends(WordSimpleTableRec, _super);
function WordSimpleTableRec(defaults) {
_super.apply(this, arguments);
}
WordSimpleTableRec.attributesToDeclare = function () {
return [
this.attr("WordSimpleTableRows", "wordSimpleTableRowsAttr", "WordSimpleTableRows", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_OfficeUtilsModel.WordSimpleTableRowRecordList());
}, true, Extension_OfficeUtilsModel.WordSimpleTableRowRecordList)
].concat(_super.attributesToDeclare.call(this));
};
WordSimpleTableRec.fromStructure = function (str) {
return new WordSimpleTableRec(new WordSimpleTableRec.RecordClass({
wordSimpleTableRowsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
WordSimpleTableRec.init();
return WordSimpleTableRec;
})(OS.DataTypes.GenericRecord);
Extension_OfficeUtilsModel.WordSimpleTableRec = WordSimpleTableRec;

});
define("Extension.OfficeUtils.model$WordSimpleTableRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.OfficeUtils.model", "Extension.OfficeUtils.model$WordSimpleTableRec"], function (exports, OutSystems, Extension_OfficeUtilsModel) {
var OS = OutSystems.Internal;
var WordSimpleTableRecord = (function (_super) {
__extends(WordSimpleTableRecord, _super);
function WordSimpleTableRecord(defaults) {
_super.apply(this, arguments);
}
WordSimpleTableRecord.attributesToDeclare = function () {
return [
this.attr("WordSimpleTable", "wordSimpleTableAttr", "WordSimpleTable", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_OfficeUtilsModel.WordSimpleTableRec());
}, true, Extension_OfficeUtilsModel.WordSimpleTableRec)
].concat(_super.attributesToDeclare.call(this));
};
WordSimpleTableRecord.fromStructure = function (str) {
return new WordSimpleTableRecord(new WordSimpleTableRecord.RecordClass({
wordSimpleTableAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
WordSimpleTableRecord._isAnonymousRecord = true;
WordSimpleTableRecord.UniqueId = "befab645-f2db-6f4a-3660-f6d82bdc6def";
WordSimpleTableRecord.init();
return WordSimpleTableRecord;
})(OS.DataTypes.GenericRecord);
Extension_OfficeUtilsModel.WordSimpleTableRecord = WordSimpleTableRecord;

});
define("Extension.OfficeUtils.model$WordPictureRec", ["exports", "OutSystems/ClientRuntime/Main", "Extension.OfficeUtils.model"], function (exports, OutSystems, Extension_OfficeUtilsModel) {
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
}, true)
].concat(_super.attributesToDeclare.call(this));
};
WordPictureRec.fromStructure = function (str) {
return new WordPictureRec(new WordPictureRec.RecordClass({
pictureAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
WordPictureRec.init();
return WordPictureRec;
})(OS.DataTypes.GenericRecord);
Extension_OfficeUtilsModel.WordPictureRec = WordPictureRec;

});
define("Extension.OfficeUtils.model$WordPictureRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.OfficeUtils.model", "Extension.OfficeUtils.model$WordPictureRec"], function (exports, OutSystems, Extension_OfficeUtilsModel) {
var OS = OutSystems.Internal;
var WordPictureRecord = (function (_super) {
__extends(WordPictureRecord, _super);
function WordPictureRecord(defaults) {
_super.apply(this, arguments);
}
WordPictureRecord.attributesToDeclare = function () {
return [
this.attr("WordPicture", "wordPictureAttr", "WordPicture", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_OfficeUtilsModel.WordPictureRec());
}, true, Extension_OfficeUtilsModel.WordPictureRec)
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
Extension_OfficeUtilsModel.WordPictureRecord = WordPictureRecord;

});
define("Extension.OfficeUtils.model$WordOutputRec", ["exports", "OutSystems/ClientRuntime/Main", "Extension.OfficeUtils.model", "Extension.OfficeUtils.model$WordTextRecord", "Extension.OfficeUtils.model$WordSimpleTableRecord", "Extension.OfficeUtils.model$WordPictureRecord", "Extension.OfficeUtils.model$WordComplTableRecord"], function (exports, OutSystems, Extension_OfficeUtilsModel) {
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
this.attr("WordText", "wordTextAttr", "WordText", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_OfficeUtilsModel.WordTextRecord());
}, true, Extension_OfficeUtilsModel.WordTextRecord), 
this.attr("WordSimpleTable", "wordSimpleTableAttr", "WordSimpleTable", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_OfficeUtilsModel.WordSimpleTableRecord());
}, true, Extension_OfficeUtilsModel.WordSimpleTableRecord), 
this.attr("WordPicture", "wordPictureAttr", "WordPicture", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_OfficeUtilsModel.WordPictureRecord());
}, true, Extension_OfficeUtilsModel.WordPictureRecord), 
this.attr("WordComplTable", "wordComplTableAttr", "WordComplTable", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_OfficeUtilsModel.WordComplTableRecord());
}, true, Extension_OfficeUtilsModel.WordComplTableRecord)
].concat(_super.attributesToDeclare.call(this));
};
WordOutputRec.init();
return WordOutputRec;
})(OS.DataTypes.GenericRecord);
Extension_OfficeUtilsModel.WordOutputRec = WordOutputRec;

});
define("Extension.OfficeUtils.model$WordOutputRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.OfficeUtils.model", "Extension.OfficeUtils.model$WordOutputRec"], function (exports, OutSystems, Extension_OfficeUtilsModel) {
var OS = OutSystems.Internal;
var WordOutputRecord = (function (_super) {
__extends(WordOutputRecord, _super);
function WordOutputRecord(defaults) {
_super.apply(this, arguments);
}
WordOutputRecord.attributesToDeclare = function () {
return [
this.attr("WordOutput", "wordOutputAttr", "WordOutput", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_OfficeUtilsModel.WordOutputRec());
}, true, Extension_OfficeUtilsModel.WordOutputRec)
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
Extension_OfficeUtilsModel.WordOutputRecord = WordOutputRecord;

});
define("Extension.OfficeUtils.model$WordOutputRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.OfficeUtils.model", "Extension.OfficeUtils.model$WordOutputRecord"], function (exports, OutSystems, Extension_OfficeUtilsModel) {
var OS = OutSystems.Internal;
var WordOutputRecordList = (function (_super) {
__extends(WordOutputRecordList, _super);
function WordOutputRecordList(defaults) {
_super.apply(this, arguments);
}
WordOutputRecordList.itemType = Extension_OfficeUtilsModel.WordOutputRecord;
return WordOutputRecordList;
})(OS.DataTypes.GenericRecordList);
Extension_OfficeUtilsModel.WordOutputRecordList = WordOutputRecordList;

});
define("Extension.OfficeUtils.model$WordFileRec", ["exports", "OutSystems/ClientRuntime/Main", "Extension.OfficeUtils.model", "Extension.OfficeUtils.model$WordOutputRecordList"], function (exports, OutSystems, Extension_OfficeUtilsModel) {
var OS = OutSystems.Internal;
var WordFileRec = (function (_super) {
__extends(WordFileRec, _super);
function WordFileRec(defaults) {
_super.apply(this, arguments);
}
WordFileRec.attributesToDeclare = function () {
return [
this.attr("WordOutputs", "wordOutputsAttr", "WordOutputs", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_OfficeUtilsModel.WordOutputRecordList());
}, true, Extension_OfficeUtilsModel.WordOutputRecordList), 
this.attr("Template", "templateAttr", "Template", true, false, OS.DataTypes.DataTypes.BinaryData, function () {
return OS.DataTypes.BinaryData.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
WordFileRec.init();
return WordFileRec;
})(OS.DataTypes.GenericRecord);
Extension_OfficeUtilsModel.WordFileRec = WordFileRec;

});
define("Extension.OfficeUtils.model$WordFileRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.OfficeUtils.model", "Extension.OfficeUtils.model$WordFileRec"], function (exports, OutSystems, Extension_OfficeUtilsModel) {
var OS = OutSystems.Internal;
var WordFileRecord = (function (_super) {
__extends(WordFileRecord, _super);
function WordFileRecord(defaults) {
_super.apply(this, arguments);
}
WordFileRecord.attributesToDeclare = function () {
return [
this.attr("WordFile", "wordFileAttr", "WordFile", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_OfficeUtilsModel.WordFileRec());
}, true, Extension_OfficeUtilsModel.WordFileRec)
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
Extension_OfficeUtilsModel.WordFileRecord = WordFileRecord;

});
define("Extension.OfficeUtils.model$ExcelCellStyleRec", ["exports", "OutSystems/ClientRuntime/Main", "Extension.OfficeUtils.model"], function (exports, OutSystems, Extension_OfficeUtilsModel) {
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
Extension_OfficeUtilsModel.ExcelCellStyleRec = ExcelCellStyleRec;

});
define("Extension.OfficeUtils.model$WordTextRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.OfficeUtils.model", "Extension.OfficeUtils.model$WordTextRecord"], function (exports, OutSystems, Extension_OfficeUtilsModel) {
var OS = OutSystems.Internal;
var WordTextRecordList = (function (_super) {
__extends(WordTextRecordList, _super);
function WordTextRecordList(defaults) {
_super.apply(this, arguments);
}
WordTextRecordList.itemType = Extension_OfficeUtilsModel.WordTextRecord;
return WordTextRecordList;
})(OS.DataTypes.GenericRecordList);
Extension_OfficeUtilsModel.WordTextRecordList = WordTextRecordList;

});
define("Extension.OfficeUtils.model$ExcelCellRec", ["exports", "OutSystems/ClientRuntime/Main", "Extension.OfficeUtils.model"], function (exports, OutSystems, Extension_OfficeUtilsModel) {
var OS = OutSystems.Internal;
var ExcelCellRec = (function (_super) {
__extends(ExcelCellRec, _super);
function ExcelCellRec(defaults) {
_super.apply(this, arguments);
}
ExcelCellRec.attributesToDeclare = function () {
return [
this.attr("Row", "rowAttr", "Row", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Column", "columnAttr", "Column", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("CellType", "cellTypeAttr", "CellType", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("TextValue", "textValueAttr", "TextValue", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IntegerValue", "integerValueAttr", "IntegerValue", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("DecimalValue", "decimalValueAttr", "DecimalValue", true, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("BooleanValue", "booleanValueAttr", "BooleanValue", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("DateTimeValue", "dateTimeValueAttr", "DateTimeValue", true, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("DateValue", "dateValueAttr", "DateValue", true, false, OS.DataTypes.DataTypes.Date, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("TimeValue", "timeValueAttr", "TimeValue", true, false, OS.DataTypes.DataTypes.Time, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("UseTemplateCellsDataFormat", "useTemplateCellsDataFormatAttr", "UseTemplateCellsDataFormat", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ExcelCellRec.init();
return ExcelCellRec;
})(OS.DataTypes.GenericRecord);
Extension_OfficeUtilsModel.ExcelCellRec = ExcelCellRec;

});
define("Extension.OfficeUtils.model$ExcelMergeCellsRec", ["exports", "OutSystems/ClientRuntime/Main", "Extension.OfficeUtils.model"], function (exports, OutSystems, Extension_OfficeUtilsModel) {
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
Extension_OfficeUtilsModel.ExcelMergeCellsRec = ExcelMergeCellsRec;

});
define("Extension.OfficeUtils.model$ExcelMergeCellsRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.OfficeUtils.model", "Extension.OfficeUtils.model$ExcelMergeCellsRec"], function (exports, OutSystems, Extension_OfficeUtilsModel) {
var OS = OutSystems.Internal;
var ExcelMergeCellsRecord = (function (_super) {
__extends(ExcelMergeCellsRecord, _super);
function ExcelMergeCellsRecord(defaults) {
_super.apply(this, arguments);
}
ExcelMergeCellsRecord.attributesToDeclare = function () {
return [
this.attr("ExcelMergeCells", "excelMergeCellsAttr", "ExcelMergeCells", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_OfficeUtilsModel.ExcelMergeCellsRec());
}, true, Extension_OfficeUtilsModel.ExcelMergeCellsRec)
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
Extension_OfficeUtilsModel.ExcelMergeCellsRecord = ExcelMergeCellsRecord;

});
define("Extension.OfficeUtils.model$ExcelTableRec", ["exports", "OutSystems/ClientRuntime/Main", "Extension.OfficeUtils.model"], function (exports, OutSystems, Extension_OfficeUtilsModel) {
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
Extension_OfficeUtilsModel.ExcelTableRec = ExcelTableRec;

});
define("Extension.OfficeUtils.model$ExcelTableRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.OfficeUtils.model", "Extension.OfficeUtils.model$ExcelTableRec"], function (exports, OutSystems, Extension_OfficeUtilsModel) {
var OS = OutSystems.Internal;
var ExcelTableRecord = (function (_super) {
__extends(ExcelTableRecord, _super);
function ExcelTableRecord(defaults) {
_super.apply(this, arguments);
}
ExcelTableRecord.attributesToDeclare = function () {
return [
this.attr("ExcelTable", "excelTableAttr", "ExcelTable", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_OfficeUtilsModel.ExcelTableRec());
}, true, Extension_OfficeUtilsModel.ExcelTableRec)
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
Extension_OfficeUtilsModel.ExcelTableRecord = ExcelTableRecord;

});
define("Extension.OfficeUtils.model$ExcelCellRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.OfficeUtils.model", "Extension.OfficeUtils.model$ExcelCellRec"], function (exports, OutSystems, Extension_OfficeUtilsModel) {
var OS = OutSystems.Internal;
var ExcelCellRecord = (function (_super) {
__extends(ExcelCellRecord, _super);
function ExcelCellRecord(defaults) {
_super.apply(this, arguments);
}
ExcelCellRecord.attributesToDeclare = function () {
return [
this.attr("ExcelCell", "excelCellAttr", "ExcelCell", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_OfficeUtilsModel.ExcelCellRec());
}, true, Extension_OfficeUtilsModel.ExcelCellRec)
].concat(_super.attributesToDeclare.call(this));
};
ExcelCellRecord.fromStructure = function (str) {
return new ExcelCellRecord(new ExcelCellRecord.RecordClass({
excelCellAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ExcelCellRecord._isAnonymousRecord = true;
ExcelCellRecord.UniqueId = "820f1af2-5ac9-86f5-9ad0-97ca4d2ffe22";
ExcelCellRecord.init();
return ExcelCellRecord;
})(OS.DataTypes.GenericRecord);
Extension_OfficeUtilsModel.ExcelCellRecord = ExcelCellRecord;

});
define("Extension.OfficeUtils.model$ExcelPictureRec", ["exports", "OutSystems/ClientRuntime/Main", "Extension.OfficeUtils.model"], function (exports, OutSystems, Extension_OfficeUtilsModel) {
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
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ExcelPictureRec.init();
return ExcelPictureRec;
})(OS.DataTypes.GenericRecord);
Extension_OfficeUtilsModel.ExcelPictureRec = ExcelPictureRec;

});
define("Extension.OfficeUtils.model$ExcelPictureRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.OfficeUtils.model", "Extension.OfficeUtils.model$ExcelPictureRec"], function (exports, OutSystems, Extension_OfficeUtilsModel) {
var OS = OutSystems.Internal;
var ExcelPictureRecord = (function (_super) {
__extends(ExcelPictureRecord, _super);
function ExcelPictureRecord(defaults) {
_super.apply(this, arguments);
}
ExcelPictureRecord.attributesToDeclare = function () {
return [
this.attr("ExcelPicture", "excelPictureAttr", "ExcelPicture", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_OfficeUtilsModel.ExcelPictureRec());
}, true, Extension_OfficeUtilsModel.ExcelPictureRec)
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
Extension_OfficeUtilsModel.ExcelPictureRecord = ExcelPictureRecord;

});
define("Extension.OfficeUtils.model$ExcelCellStyleRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.OfficeUtils.model", "Extension.OfficeUtils.model$ExcelCellStyleRec"], function (exports, OutSystems, Extension_OfficeUtilsModel) {
var OS = OutSystems.Internal;
var ExcelCellStyleRecord = (function (_super) {
__extends(ExcelCellStyleRecord, _super);
function ExcelCellStyleRecord(defaults) {
_super.apply(this, arguments);
}
ExcelCellStyleRecord.attributesToDeclare = function () {
return [
this.attr("ExcelCellStyle", "excelCellStyleAttr", "ExcelCellStyle", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_OfficeUtilsModel.ExcelCellStyleRec());
}, true, Extension_OfficeUtilsModel.ExcelCellStyleRec)
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
Extension_OfficeUtilsModel.ExcelCellStyleRecord = ExcelCellStyleRecord;

});
define("Extension.OfficeUtils.model$ExcelOutputRec", ["exports", "OutSystems/ClientRuntime/Main", "Extension.OfficeUtils.model", "Extension.OfficeUtils.model$ExcelTableRecord", "Extension.OfficeUtils.model$ExcelCellRecord", "Extension.OfficeUtils.model$ExcelPictureRecord", "Extension.OfficeUtils.model$ExcelCellStyleRecord", "Extension.OfficeUtils.model$ExcelMergeCellsRecord"], function (exports, OutSystems, Extension_OfficeUtilsModel) {
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
this.attr("SheetToClone", "sheetToCloneAttr", "SheetToClone", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ExcelTable", "excelTableAttr", "ExcelTable", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_OfficeUtilsModel.ExcelTableRecord());
}, true, Extension_OfficeUtilsModel.ExcelTableRecord), 
this.attr("ExcelCell", "excelCellAttr", "ExcelCell", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_OfficeUtilsModel.ExcelCellRecord());
}, true, Extension_OfficeUtilsModel.ExcelCellRecord), 
this.attr("ExcelPicture", "excelPictureAttr", "ExcelPicture", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_OfficeUtilsModel.ExcelPictureRecord());
}, true, Extension_OfficeUtilsModel.ExcelPictureRecord), 
this.attr("ExcelCellStyle", "excelCellStyleAttr", "ExcelCellStyle", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_OfficeUtilsModel.ExcelCellStyleRecord());
}, true, Extension_OfficeUtilsModel.ExcelCellStyleRecord), 
this.attr("ExcelMergeCells", "excelMergeCellsAttr", "ExcelMergeCells", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_OfficeUtilsModel.ExcelMergeCellsRecord());
}, true, Extension_OfficeUtilsModel.ExcelMergeCellsRecord)
].concat(_super.attributesToDeclare.call(this));
};
ExcelOutputRec.init();
return ExcelOutputRec;
})(OS.DataTypes.GenericRecord);
Extension_OfficeUtilsModel.ExcelOutputRec = ExcelOutputRec;

});
define("Extension.OfficeUtils.model$ExcelOutputRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.OfficeUtils.model", "Extension.OfficeUtils.model$ExcelOutputRec"], function (exports, OutSystems, Extension_OfficeUtilsModel) {
var OS = OutSystems.Internal;
var ExcelOutputRecord = (function (_super) {
__extends(ExcelOutputRecord, _super);
function ExcelOutputRecord(defaults) {
_super.apply(this, arguments);
}
ExcelOutputRecord.attributesToDeclare = function () {
return [
this.attr("ExcelOutput", "excelOutputAttr", "ExcelOutput", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_OfficeUtilsModel.ExcelOutputRec());
}, true, Extension_OfficeUtilsModel.ExcelOutputRec)
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
Extension_OfficeUtilsModel.ExcelOutputRecord = ExcelOutputRecord;

});
define("Extension.OfficeUtils.model$ExcelOutputRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.OfficeUtils.model", "Extension.OfficeUtils.model$ExcelOutputRecord"], function (exports, OutSystems, Extension_OfficeUtilsModel) {
var OS = OutSystems.Internal;
var ExcelOutputRecordList = (function (_super) {
__extends(ExcelOutputRecordList, _super);
function ExcelOutputRecordList(defaults) {
_super.apply(this, arguments);
}
ExcelOutputRecordList.itemType = Extension_OfficeUtilsModel.ExcelOutputRecord;
return ExcelOutputRecordList;
})(OS.DataTypes.GenericRecordList);
Extension_OfficeUtilsModel.ExcelOutputRecordList = ExcelOutputRecordList;

});
define("Extension.OfficeUtils.model$ExcelTableRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.OfficeUtils.model", "Extension.OfficeUtils.model$ExcelTableRecord"], function (exports, OutSystems, Extension_OfficeUtilsModel) {
var OS = OutSystems.Internal;
var ExcelTableRecordList = (function (_super) {
__extends(ExcelTableRecordList, _super);
function ExcelTableRecordList(defaults) {
_super.apply(this, arguments);
}
ExcelTableRecordList.itemType = Extension_OfficeUtilsModel.ExcelTableRecord;
return ExcelTableRecordList;
})(OS.DataTypes.GenericRecordList);
Extension_OfficeUtilsModel.ExcelTableRecordList = ExcelTableRecordList;

});
define("Extension.OfficeUtils.model$ExcelMergeCellsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.OfficeUtils.model", "Extension.OfficeUtils.model$ExcelMergeCellsRecord"], function (exports, OutSystems, Extension_OfficeUtilsModel) {
var OS = OutSystems.Internal;
var ExcelMergeCellsRecordList = (function (_super) {
__extends(ExcelMergeCellsRecordList, _super);
function ExcelMergeCellsRecordList(defaults) {
_super.apply(this, arguments);
}
ExcelMergeCellsRecordList.itemType = Extension_OfficeUtilsModel.ExcelMergeCellsRecord;
return ExcelMergeCellsRecordList;
})(OS.DataTypes.GenericRecordList);
Extension_OfficeUtilsModel.ExcelMergeCellsRecordList = ExcelMergeCellsRecordList;

});
define("Extension.OfficeUtils.model$WordSimpleTableRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.OfficeUtils.model", "Extension.OfficeUtils.model$WordSimpleTableRecord"], function (exports, OutSystems, Extension_OfficeUtilsModel) {
var OS = OutSystems.Internal;
var WordSimpleTableRecordList = (function (_super) {
__extends(WordSimpleTableRecordList, _super);
function WordSimpleTableRecordList(defaults) {
_super.apply(this, arguments);
}
WordSimpleTableRecordList.itemType = Extension_OfficeUtilsModel.WordSimpleTableRecord;
return WordSimpleTableRecordList;
})(OS.DataTypes.GenericRecordList);
Extension_OfficeUtilsModel.WordSimpleTableRecordList = WordSimpleTableRecordList;

});
define("Extension.OfficeUtils.model$ExcelFileRec", ["exports", "OutSystems/ClientRuntime/Main", "Extension.OfficeUtils.model", "Extension.OfficeUtils.model$ExcelOutputRecordList"], function (exports, OutSystems, Extension_OfficeUtilsModel) {
var OS = OutSystems.Internal;
var ExcelFileRec = (function (_super) {
__extends(ExcelFileRec, _super);
function ExcelFileRec(defaults) {
_super.apply(this, arguments);
}
ExcelFileRec.attributesToDeclare = function () {
return [
this.attr("ExcelOutputs", "excelOutputsAttr", "ExcelOutputs", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_OfficeUtilsModel.ExcelOutputRecordList());
}, true, Extension_OfficeUtilsModel.ExcelOutputRecordList), 
this.attr("Template", "templateAttr", "Template", false, false, OS.DataTypes.DataTypes.BinaryData, function () {
return OS.DataTypes.BinaryData.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ExcelFileRec.init();
return ExcelFileRec;
})(OS.DataTypes.GenericRecord);
Extension_OfficeUtilsModel.ExcelFileRec = ExcelFileRec;

});
define("Extension.OfficeUtils.model$ExcelFileRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.OfficeUtils.model", "Extension.OfficeUtils.model$ExcelFileRec"], function (exports, OutSystems, Extension_OfficeUtilsModel) {
var OS = OutSystems.Internal;
var ExcelFileRecord = (function (_super) {
__extends(ExcelFileRecord, _super);
function ExcelFileRecord(defaults) {
_super.apply(this, arguments);
}
ExcelFileRecord.attributesToDeclare = function () {
return [
this.attr("ExcelFile", "excelFileAttr", "ExcelFile", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_OfficeUtilsModel.ExcelFileRec());
}, true, Extension_OfficeUtilsModel.ExcelFileRec)
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
Extension_OfficeUtilsModel.ExcelFileRecord = ExcelFileRecord;

});
define("Extension.OfficeUtils.model$WordPictureRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.OfficeUtils.model", "Extension.OfficeUtils.model$WordPictureRecord"], function (exports, OutSystems, Extension_OfficeUtilsModel) {
var OS = OutSystems.Internal;
var WordPictureRecordList = (function (_super) {
__extends(WordPictureRecordList, _super);
function WordPictureRecordList(defaults) {
_super.apply(this, arguments);
}
WordPictureRecordList.itemType = Extension_OfficeUtilsModel.WordPictureRecord;
return WordPictureRecordList;
})(OS.DataTypes.GenericRecordList);
Extension_OfficeUtilsModel.WordPictureRecordList = WordPictureRecordList;

});
define("Extension.OfficeUtils.model$WordFileRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.OfficeUtils.model", "Extension.OfficeUtils.model$WordFileRecord"], function (exports, OutSystems, Extension_OfficeUtilsModel) {
var OS = OutSystems.Internal;
var WordFileRecordList = (function (_super) {
__extends(WordFileRecordList, _super);
function WordFileRecordList(defaults) {
_super.apply(this, arguments);
}
WordFileRecordList.itemType = Extension_OfficeUtilsModel.WordFileRecord;
return WordFileRecordList;
})(OS.DataTypes.GenericRecordList);
Extension_OfficeUtilsModel.WordFileRecordList = WordFileRecordList;

});
define("Extension.OfficeUtils.model$ExcelFileRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.OfficeUtils.model", "Extension.OfficeUtils.model$ExcelFileRecord"], function (exports, OutSystems, Extension_OfficeUtilsModel) {
var OS = OutSystems.Internal;
var ExcelFileRecordList = (function (_super) {
__extends(ExcelFileRecordList, _super);
function ExcelFileRecordList(defaults) {
_super.apply(this, arguments);
}
ExcelFileRecordList.itemType = Extension_OfficeUtilsModel.ExcelFileRecord;
return ExcelFileRecordList;
})(OS.DataTypes.GenericRecordList);
Extension_OfficeUtilsModel.ExcelFileRecordList = ExcelFileRecordList;

});
define("Extension.OfficeUtils.model$ExcelCellStyleRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.OfficeUtils.model", "Extension.OfficeUtils.model$ExcelCellStyleRecord"], function (exports, OutSystems, Extension_OfficeUtilsModel) {
var OS = OutSystems.Internal;
var ExcelCellStyleRecordList = (function (_super) {
__extends(ExcelCellStyleRecordList, _super);
function ExcelCellStyleRecordList(defaults) {
_super.apply(this, arguments);
}
ExcelCellStyleRecordList.itemType = Extension_OfficeUtilsModel.ExcelCellStyleRecord;
return ExcelCellStyleRecordList;
})(OS.DataTypes.GenericRecordList);
Extension_OfficeUtilsModel.ExcelCellStyleRecordList = ExcelCellStyleRecordList;

});
define("Extension.OfficeUtils.model$ExcelPictureRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.OfficeUtils.model", "Extension.OfficeUtils.model$ExcelPictureRecord"], function (exports, OutSystems, Extension_OfficeUtilsModel) {
var OS = OutSystems.Internal;
var ExcelPictureRecordList = (function (_super) {
__extends(ExcelPictureRecordList, _super);
function ExcelPictureRecordList(defaults) {
_super.apply(this, arguments);
}
ExcelPictureRecordList.itemType = Extension_OfficeUtilsModel.ExcelPictureRecord;
return ExcelPictureRecordList;
})(OS.DataTypes.GenericRecordList);
Extension_OfficeUtilsModel.ExcelPictureRecordList = ExcelPictureRecordList;

});
define("Extension.OfficeUtils.model$ExcelCellRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.OfficeUtils.model", "Extension.OfficeUtils.model$ExcelCellRecord"], function (exports, OutSystems, Extension_OfficeUtilsModel) {
var OS = OutSystems.Internal;
var ExcelCellRecordList = (function (_super) {
__extends(ExcelCellRecordList, _super);
function ExcelCellRecordList(defaults) {
_super.apply(this, arguments);
}
ExcelCellRecordList.itemType = Extension_OfficeUtilsModel.ExcelCellRecord;
return ExcelCellRecordList;
})(OS.DataTypes.GenericRecordList);
Extension_OfficeUtilsModel.ExcelCellRecordList = ExcelCellRecordList;

});
define("Extension.OfficeUtils.model", ["exports", "OutSystems/ClientRuntime/Main"], function (exports, OutSystems) {
var OS = OutSystems.Internal;
var Extension_OfficeUtilsModel = exports;
});
