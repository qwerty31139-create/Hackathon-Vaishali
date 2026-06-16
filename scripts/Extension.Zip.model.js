define("Extension.Zip.model$FileRec", ["exports", "OutSystems/ClientRuntime/Main", "Extension.Zip.model"], function (exports, OutSystems, Extension_ZipModel) {
var OS = OutSystems.Internal;
var FileRec = (function (_super) {
__extends(FileRec, _super);
function FileRec(defaults) {
_super.apply(this, arguments);
}
FileRec.attributesToDeclare = function () {
return [
this.attr("Name", "nameAttr", "Name", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsDirectory", "isDirectoryAttr", "IsDirectory", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("DateTime", "dateTimeAttr", "DateTime", true, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("Size", "sizeAttr", "Size", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("CompressedSize", "compressedSizeAttr", "CompressedSize", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Content", "contentAttr", "Content", true, false, OS.DataTypes.DataTypes.BinaryData, function () {
return OS.DataTypes.BinaryData.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
FileRec.init();
return FileRec;
})(OS.DataTypes.GenericRecord);
Extension_ZipModel.FileRec = FileRec;

});
define("Extension.Zip.model$FileRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.Zip.model", "Extension.Zip.model$FileRec"], function (exports, OutSystems, Extension_ZipModel) {
var OS = OutSystems.Internal;
var FileRecord = (function (_super) {
__extends(FileRecord, _super);
function FileRecord(defaults) {
_super.apply(this, arguments);
}
FileRecord.attributesToDeclare = function () {
return [
this.attr("File", "fileAttr", "File", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_ZipModel.FileRec());
}, true, Extension_ZipModel.FileRec)
].concat(_super.attributesToDeclare.call(this));
};
FileRecord.fromStructure = function (str) {
return new FileRecord(new FileRecord.RecordClass({
fileAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
FileRecord._isAnonymousRecord = true;
FileRecord.UniqueId = "2b905bc8-ec62-0a14-8e54-ddae53cb2039";
FileRecord.init();
return FileRecord;
})(OS.DataTypes.GenericRecord);
Extension_ZipModel.FileRecord = FileRecord;

});
define("Extension.Zip.model$FileRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.Zip.model", "Extension.Zip.model$FileRecord"], function (exports, OutSystems, Extension_ZipModel) {
var OS = OutSystems.Internal;
var FileRecordList = (function (_super) {
__extends(FileRecordList, _super);
function FileRecordList(defaults) {
_super.apply(this, arguments);
}
FileRecordList.itemType = Extension_ZipModel.FileRecord;
return FileRecordList;
})(OS.DataTypes.GenericRecordList);
Extension_ZipModel.FileRecordList = FileRecordList;

});
define("Extension.Zip.model", ["exports", "OutSystems/ClientRuntime/Main"], function (exports, OutSystems) {
var OS = OutSystems.Internal;
var Extension_ZipModel = exports;
});
