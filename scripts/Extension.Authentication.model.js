define("Extension.Authentication.model$Deprecated_HTTPHeaderRec", ["exports", "OutSystems/ClientRuntime/Main", "Extension.Authentication.model"], function (exports, OutSystems, Extension_AuthenticationModel) {
var OS = OutSystems.Internal;
var Deprecated_HTTPHeaderRec = (function (_super) {
__extends(Deprecated_HTTPHeaderRec, _super);
function Deprecated_HTTPHeaderRec(defaults) {
_super.apply(this, arguments);
}
Deprecated_HTTPHeaderRec.attributesToDeclare = function () {
return [
this.attr("Name", "nameAttr", "Name", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Value", "valueAttr", "Value", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Deprecated_HTTPHeaderRec.init();
return Deprecated_HTTPHeaderRec;
})(OS.DataTypes.GenericRecord);
Extension_AuthenticationModel.Deprecated_HTTPHeaderRec = Deprecated_HTTPHeaderRec;

});
define("Extension.Authentication.model$Deprecated_HTTPHeaderRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.Authentication.model", "Extension.Authentication.model$Deprecated_HTTPHeaderRec"], function (exports, OutSystems, Extension_AuthenticationModel) {
var OS = OutSystems.Internal;
var Deprecated_HTTPHeaderRecord = (function (_super) {
__extends(Deprecated_HTTPHeaderRecord, _super);
function Deprecated_HTTPHeaderRecord(defaults) {
_super.apply(this, arguments);
}
Deprecated_HTTPHeaderRecord.attributesToDeclare = function () {
return [
this.attr("Deprecated_HTTPHeader", "deprecated_HTTPHeaderAttr", "Deprecated_HTTPHeader", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_AuthenticationModel.Deprecated_HTTPHeaderRec());
}, true, Extension_AuthenticationModel.Deprecated_HTTPHeaderRec)
].concat(_super.attributesToDeclare.call(this));
};
Deprecated_HTTPHeaderRecord.fromStructure = function (str) {
return new Deprecated_HTTPHeaderRecord(new Deprecated_HTTPHeaderRecord.RecordClass({
deprecated_HTTPHeaderAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Deprecated_HTTPHeaderRecord._isAnonymousRecord = true;
Deprecated_HTTPHeaderRecord.UniqueId = "e3fe1428-c399-2e4a-7d0c-afe4a6c3f967";
Deprecated_HTTPHeaderRecord.init();
return Deprecated_HTTPHeaderRecord;
})(OS.DataTypes.GenericRecord);
Extension_AuthenticationModel.Deprecated_HTTPHeaderRecord = Deprecated_HTTPHeaderRecord;

});
define("Extension.Authentication.model$Deprecated_HTTPHeaderRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.Authentication.model", "Extension.Authentication.model$Deprecated_HTTPHeaderRecord"], function (exports, OutSystems, Extension_AuthenticationModel) {
var OS = OutSystems.Internal;
var Deprecated_HTTPHeaderRecordList = (function (_super) {
__extends(Deprecated_HTTPHeaderRecordList, _super);
function Deprecated_HTTPHeaderRecordList(defaults) {
_super.apply(this, arguments);
}
Deprecated_HTTPHeaderRecordList.itemType = Extension_AuthenticationModel.Deprecated_HTTPHeaderRecord;
return Deprecated_HTTPHeaderRecordList;
})(OS.DataTypes.GenericRecordList);
Extension_AuthenticationModel.Deprecated_HTTPHeaderRecordList = Deprecated_HTTPHeaderRecordList;

});
define("Extension.Authentication.model$PropertyRec", ["exports", "OutSystems/ClientRuntime/Main", "Extension.Authentication.model"], function (exports, OutSystems, Extension_AuthenticationModel) {
var OS = OutSystems.Internal;
var PropertyRec = (function (_super) {
__extends(PropertyRec, _super);
function PropertyRec(defaults) {
_super.apply(this, arguments);
}
PropertyRec.attributesToDeclare = function () {
return [
this.attr("Name", "nameAttr", "Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Value", "valueAttr", "Value", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MoreValues", "moreValuesAttr", "MoreValues", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
PropertyRec.init();
return PropertyRec;
})(OS.DataTypes.GenericRecord);
Extension_AuthenticationModel.PropertyRec = PropertyRec;

});
define("Extension.Authentication.model$PropertyRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.Authentication.model", "Extension.Authentication.model$PropertyRec"], function (exports, OutSystems, Extension_AuthenticationModel) {
var OS = OutSystems.Internal;
var PropertyRecord = (function (_super) {
__extends(PropertyRecord, _super);
function PropertyRecord(defaults) {
_super.apply(this, arguments);
}
PropertyRecord.attributesToDeclare = function () {
return [
this.attr("Property", "propertyAttr", "Property", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_AuthenticationModel.PropertyRec());
}, true, Extension_AuthenticationModel.PropertyRec)
].concat(_super.attributesToDeclare.call(this));
};
PropertyRecord.fromStructure = function (str) {
return new PropertyRecord(new PropertyRecord.RecordClass({
propertyAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
PropertyRecord._isAnonymousRecord = true;
PropertyRecord.UniqueId = "2aecf770-0991-dc7a-4e48-23959f585367";
PropertyRecord.init();
return PropertyRecord;
})(OS.DataTypes.GenericRecord);
Extension_AuthenticationModel.PropertyRecord = PropertyRecord;

});
define("Extension.Authentication.model$Deprecated_ContactPersonRec", ["exports", "OutSystems/ClientRuntime/Main", "Extension.Authentication.model"], function (exports, OutSystems, Extension_AuthenticationModel) {
var OS = OutSystems.Internal;
var Deprecated_ContactPersonRec = (function (_super) {
__extends(Deprecated_ContactPersonRec, _super);
function Deprecated_ContactPersonRec(defaults) {
_super.apply(this, arguments);
}
Deprecated_ContactPersonRec.attributesToDeclare = function () {
return [
this.attr("Company", "companyAttr", "Company", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("GivenName", "givenNameAttr", "GivenName", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SurName", "surNameAttr", "SurName", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("EmailAddress", "emailAddressAttr", "EmailAddress", true, false, OS.DataTypes.DataTypes.Email, function () {
return "";
}, true), 
this.attr("TelephoneNumber", "telephoneNumberAttr", "TelephoneNumber", true, false, OS.DataTypes.DataTypes.PhoneNumber, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Deprecated_ContactPersonRec.init();
return Deprecated_ContactPersonRec;
})(OS.DataTypes.GenericRecord);
Extension_AuthenticationModel.Deprecated_ContactPersonRec = Deprecated_ContactPersonRec;

});
define("Extension.Authentication.model$Deprecated_ContactPersonRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.Authentication.model", "Extension.Authentication.model$Deprecated_ContactPersonRec"], function (exports, OutSystems, Extension_AuthenticationModel) {
var OS = OutSystems.Internal;
var Deprecated_ContactPersonRecord = (function (_super) {
__extends(Deprecated_ContactPersonRecord, _super);
function Deprecated_ContactPersonRecord(defaults) {
_super.apply(this, arguments);
}
Deprecated_ContactPersonRecord.attributesToDeclare = function () {
return [
this.attr("Deprecated_ContactPerson", "deprecated_ContactPersonAttr", "Deprecated_ContactPerson", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_AuthenticationModel.Deprecated_ContactPersonRec());
}, true, Extension_AuthenticationModel.Deprecated_ContactPersonRec)
].concat(_super.attributesToDeclare.call(this));
};
Deprecated_ContactPersonRecord.fromStructure = function (str) {
return new Deprecated_ContactPersonRecord(new Deprecated_ContactPersonRecord.RecordClass({
deprecated_ContactPersonAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Deprecated_ContactPersonRecord._isAnonymousRecord = true;
Deprecated_ContactPersonRecord.UniqueId = "3a024e7d-9c68-86c6-50e9-acf3999c524a";
Deprecated_ContactPersonRecord.init();
return Deprecated_ContactPersonRecord;
})(OS.DataTypes.GenericRecord);
Extension_AuthenticationModel.Deprecated_ContactPersonRecord = Deprecated_ContactPersonRecord;

});
define("Extension.Authentication.model$NodeRec", ["exports", "OutSystems/ClientRuntime/Main", "Extension.Authentication.model"], function (exports, OutSystems, Extension_AuthenticationModel) {
var OS = OutSystems.Internal;
var NodeRec = (function (_super) {
__extends(NodeRec, _super);
function NodeRec(defaults) {
_super.apply(this, arguments);
}
NodeRec.attributesToDeclare = function () {
return [
this.attr("Path", "pathAttr", "Path", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
NodeRec.fromStructure = function (str) {
return new NodeRec(new NodeRec.RecordClass({
pathAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
NodeRec.init();
return NodeRec;
})(OS.DataTypes.GenericRecord);
Extension_AuthenticationModel.NodeRec = NodeRec;

});
define("Extension.Authentication.model$NodeRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.Authentication.model", "Extension.Authentication.model$NodeRec"], function (exports, OutSystems, Extension_AuthenticationModel) {
var OS = OutSystems.Internal;
var NodeRecord = (function (_super) {
__extends(NodeRecord, _super);
function NodeRecord(defaults) {
_super.apply(this, arguments);
}
NodeRecord.attributesToDeclare = function () {
return [
this.attr("Node", "nodeAttr", "Node", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_AuthenticationModel.NodeRec());
}, true, Extension_AuthenticationModel.NodeRec)
].concat(_super.attributesToDeclare.call(this));
};
NodeRecord.fromStructure = function (str) {
return new NodeRecord(new NodeRecord.RecordClass({
nodeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
NodeRecord._isAnonymousRecord = true;
NodeRecord.UniqueId = "98d9cf11-7a35-73d3-8fae-41966ca62bb9";
NodeRecord.init();
return NodeRecord;
})(OS.DataTypes.GenericRecord);
Extension_AuthenticationModel.NodeRecord = NodeRecord;

});
define("Extension.Authentication.model$NodeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.Authentication.model", "Extension.Authentication.model$NodeRecord"], function (exports, OutSystems, Extension_AuthenticationModel) {
var OS = OutSystems.Internal;
var NodeRecordList = (function (_super) {
__extends(NodeRecordList, _super);
function NodeRecordList(defaults) {
_super.apply(this, arguments);
}
NodeRecordList.itemType = Extension_AuthenticationModel.NodeRecord;
return NodeRecordList;
})(OS.DataTypes.GenericRecordList);
Extension_AuthenticationModel.NodeRecordList = NodeRecordList;

});
define("Extension.Authentication.model$GroupRec", ["exports", "OutSystems/ClientRuntime/Main", "Extension.Authentication.model"], function (exports, OutSystems, Extension_AuthenticationModel) {
var OS = OutSystems.Internal;
var GroupRec = (function (_super) {
__extends(GroupRec, _super);
function GroupRec(defaults) {
_super.apply(this, arguments);
}
GroupRec.attributesToDeclare = function () {
return [
this.attr("Name", "nameAttr", "Name", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
GroupRec.fromStructure = function (str) {
return new GroupRec(new GroupRec.RecordClass({
nameAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
GroupRec.init();
return GroupRec;
})(OS.DataTypes.GenericRecord);
Extension_AuthenticationModel.GroupRec = GroupRec;

});
define("Extension.Authentication.model$GroupRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.Authentication.model", "Extension.Authentication.model$GroupRec"], function (exports, OutSystems, Extension_AuthenticationModel) {
var OS = OutSystems.Internal;
var GroupRecord = (function (_super) {
__extends(GroupRecord, _super);
function GroupRecord(defaults) {
_super.apply(this, arguments);
}
GroupRecord.attributesToDeclare = function () {
return [
this.attr("Group", "groupAttr", "Group", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_AuthenticationModel.GroupRec());
}, true, Extension_AuthenticationModel.GroupRec)
].concat(_super.attributesToDeclare.call(this));
};
GroupRecord.fromStructure = function (str) {
return new GroupRecord(new GroupRecord.RecordClass({
groupAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
GroupRecord._isAnonymousRecord = true;
GroupRecord.UniqueId = "57010155-1e66-edd3-beb2-a1c7247ad958";
GroupRecord.init();
return GroupRecord;
})(OS.DataTypes.GenericRecord);
Extension_AuthenticationModel.GroupRecord = GroupRecord;

});
define("Extension.Authentication.model$Deprecated_ContactPersonRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.Authentication.model", "Extension.Authentication.model$Deprecated_ContactPersonRecord"], function (exports, OutSystems, Extension_AuthenticationModel) {
var OS = OutSystems.Internal;
var Deprecated_ContactPersonRecordList = (function (_super) {
__extends(Deprecated_ContactPersonRecordList, _super);
function Deprecated_ContactPersonRecordList(defaults) {
_super.apply(this, arguments);
}
Deprecated_ContactPersonRecordList.itemType = Extension_AuthenticationModel.Deprecated_ContactPersonRecord;
return Deprecated_ContactPersonRecordList;
})(OS.DataTypes.GenericRecordList);
Extension_AuthenticationModel.Deprecated_ContactPersonRecordList = Deprecated_ContactPersonRecordList;

});
define("Extension.Authentication.model$PropertyRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.Authentication.model", "Extension.Authentication.model$PropertyRecord"], function (exports, OutSystems, Extension_AuthenticationModel) {
var OS = OutSystems.Internal;
var PropertyRecordList = (function (_super) {
__extends(PropertyRecordList, _super);
function PropertyRecordList(defaults) {
_super.apply(this, arguments);
}
PropertyRecordList.itemType = Extension_AuthenticationModel.PropertyRecord;
return PropertyRecordList;
})(OS.DataTypes.GenericRecordList);
Extension_AuthenticationModel.PropertyRecordList = PropertyRecordList;

});
define("Extension.Authentication.model$GroupRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.Authentication.model", "Extension.Authentication.model$GroupRecord"], function (exports, OutSystems, Extension_AuthenticationModel) {
var OS = OutSystems.Internal;
var GroupRecordList = (function (_super) {
__extends(GroupRecordList, _super);
function GroupRecordList(defaults) {
_super.apply(this, arguments);
}
GroupRecordList.itemType = Extension_AuthenticationModel.GroupRecord;
return GroupRecordList;
})(OS.DataTypes.GenericRecordList);
Extension_AuthenticationModel.GroupRecordList = GroupRecordList;

});
define("Extension.Authentication.model", ["exports", "OutSystems/ClientRuntime/Main"], function (exports, OutSystems) {
var OS = OutSystems.Internal;
var Extension_AuthenticationModel = exports;
});
