define("Extension.FileSystem.model$DirectoryRec", ["exports", "OutSystems/ClientRuntime/Main", "Extension.FileSystem.model"], function (exports, OutSystems, Extension_FileSystemModel) {
var OS = OutSystems.Internal;
var DirectoryRec = (function (_super) {
__extends(DirectoryRec, _super);
function DirectoryRec(defaults) {
_super.apply(this, arguments);
}
DirectoryRec.attributesToDeclare = function () {
return [
this.attr("Name", "nameAttr", "Name", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Path", "pathAttr", "Path", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CreatedDate", "createdDateAttr", "CreatedDate", true, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("ModifiedDate", "modifiedDateAttr", "ModifiedDate", true, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
DirectoryRec.init();
return DirectoryRec;
})(OS.DataTypes.GenericRecord);
Extension_FileSystemModel.DirectoryRec = DirectoryRec;

});
define("Extension.FileSystem.model$DirectoryRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.FileSystem.model", "Extension.FileSystem.model$DirectoryRec"], function (exports, OutSystems, Extension_FileSystemModel) {
var OS = OutSystems.Internal;
var DirectoryRecord = (function (_super) {
__extends(DirectoryRecord, _super);
function DirectoryRecord(defaults) {
_super.apply(this, arguments);
}
DirectoryRecord.attributesToDeclare = function () {
return [
this.attr("Directory", "directoryAttr", "Directory", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_FileSystemModel.DirectoryRec());
}, true, Extension_FileSystemModel.DirectoryRec)
].concat(_super.attributesToDeclare.call(this));
};
DirectoryRecord.fromStructure = function (str) {
return new DirectoryRecord(new DirectoryRecord.RecordClass({
directoryAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DirectoryRecord._isAnonymousRecord = true;
DirectoryRecord.UniqueId = "fb84b208-1d88-6516-99fd-2e3d649f7069";
DirectoryRecord.init();
return DirectoryRecord;
})(OS.DataTypes.GenericRecord);
Extension_FileSystemModel.DirectoryRecord = DirectoryRecord;

});
define("Extension.FileSystem.model$DirectoryRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.FileSystem.model", "Extension.FileSystem.model$DirectoryRecord"], function (exports, OutSystems, Extension_FileSystemModel) {
var OS = OutSystems.Internal;
var DirectoryRecordList = (function (_super) {
__extends(DirectoryRecordList, _super);
function DirectoryRecordList(defaults) {
_super.apply(this, arguments);
}
DirectoryRecordList.itemType = Extension_FileSystemModel.DirectoryRecord;
return DirectoryRecordList;
})(OS.DataTypes.GenericRecordList);
Extension_FileSystemModel.DirectoryRecordList = DirectoryRecordList;

});
define("Extension.FileSystem.model$FileRec", ["exports", "OutSystems/ClientRuntime/Main", "Extension.FileSystem.model"], function (exports, OutSystems, Extension_FileSystemModel) {
var OS = OutSystems.Internal;
var FileRec = (function (_super) {
__extends(FileRec, _super);
function FileRec(defaults) {
_super.apply(this, arguments);
}
FileRec.attributesToDeclare = function () {
return [
this.attr("Root", "rootAttr", "Root", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Path", "pathAttr", "Path", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Name", "nameAttr", "Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Size", "sizeAttr", "Size", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("CreatedDate", "createdDateAttr", "CreatedDate", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("ModifiedDate", "modifiedDateAttr", "ModifiedDate", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
FileRec.init();
return FileRec;
})(OS.DataTypes.GenericRecord);
Extension_FileSystemModel.FileRec = FileRec;

});
define("Extension.FileSystem.model$FileRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.FileSystem.model", "Extension.FileSystem.model$FileRec"], function (exports, OutSystems, Extension_FileSystemModel) {
var OS = OutSystems.Internal;
var FileRecord = (function (_super) {
__extends(FileRecord, _super);
function FileRecord(defaults) {
_super.apply(this, arguments);
}
FileRecord.attributesToDeclare = function () {
return [
this.attr("File", "fileAttr", "File", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_FileSystemModel.FileRec());
}, true, Extension_FileSystemModel.FileRec)
].concat(_super.attributesToDeclare.call(this));
};
FileRecord.fromStructure = function (str) {
return new FileRecord(new FileRecord.RecordClass({
fileAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
FileRecord._isAnonymousRecord = true;
FileRecord.UniqueId = "5d5f6612-bbf4-08e3-95b0-e9a3de2fe7f2";
FileRecord.init();
return FileRecord;
})(OS.DataTypes.GenericRecord);
Extension_FileSystemModel.FileRecord = FileRecord;

});
define("Extension.FileSystem.model$FileRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.FileSystem.model", "Extension.FileSystem.model$FileRecord"], function (exports, OutSystems, Extension_FileSystemModel) {
var OS = OutSystems.Internal;
var FileRecordList = (function (_super) {
__extends(FileRecordList, _super);
function FileRecordList(defaults) {
_super.apply(this, arguments);
}
FileRecordList.itemType = Extension_FileSystemModel.FileRecord;
return FileRecordList;
})(OS.DataTypes.GenericRecordList);
Extension_FileSystemModel.FileRecordList = FileRecordList;

});
define("Extension.FileSystem.model$LineRec", ["exports", "OutSystems/ClientRuntime/Main", "Extension.FileSystem.model"], function (exports, OutSystems, Extension_FileSystemModel) {
var OS = OutSystems.Internal;
var LineRec = (function (_super) {
__extends(LineRec, _super);
function LineRec(defaults) {
_super.apply(this, arguments);
}
LineRec.attributesToDeclare = function () {
return [
this.attr("Text", "textAttr", "Text", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
LineRec.fromStructure = function (str) {
return new LineRec(new LineRec.RecordClass({
textAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
LineRec.init();
return LineRec;
})(OS.DataTypes.GenericRecord);
Extension_FileSystemModel.LineRec = LineRec;

});
define("Extension.FileSystem.model$LineRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.FileSystem.model", "Extension.FileSystem.model$LineRec"], function (exports, OutSystems, Extension_FileSystemModel) {
var OS = OutSystems.Internal;
var LineRecord = (function (_super) {
__extends(LineRecord, _super);
function LineRecord(defaults) {
_super.apply(this, arguments);
}
LineRecord.attributesToDeclare = function () {
return [
this.attr("Line", "lineAttr", "Line", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_FileSystemModel.LineRec());
}, true, Extension_FileSystemModel.LineRec)
].concat(_super.attributesToDeclare.call(this));
};
LineRecord.fromStructure = function (str) {
return new LineRecord(new LineRecord.RecordClass({
lineAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
LineRecord._isAnonymousRecord = true;
LineRecord.UniqueId = "e41477ae-bc53-88bb-1657-328b23596470";
LineRecord.init();
return LineRecord;
})(OS.DataTypes.GenericRecord);
Extension_FileSystemModel.LineRecord = LineRecord;

});
define("Extension.FileSystem.model$LineRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.FileSystem.model", "Extension.FileSystem.model$LineRecord"], function (exports, OutSystems, Extension_FileSystemModel) {
var OS = OutSystems.Internal;
var LineRecordList = (function (_super) {
__extends(LineRecordList, _super);
function LineRecordList(defaults) {
_super.apply(this, arguments);
}
LineRecordList.itemType = Extension_FileSystemModel.LineRecord;
return LineRecordList;
})(OS.DataTypes.GenericRecordList);
Extension_FileSystemModel.LineRecordList = LineRecordList;

});
define("Extension.FileSystem.model", ["exports", "OutSystems/ClientRuntime/Main"], function (exports, OutSystems) {
var OS = OutSystems.Internal;
var Extension_FileSystemModel = exports;
});
