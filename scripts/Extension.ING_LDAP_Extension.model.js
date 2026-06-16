define("Extension.ING_LDAP_Extension.model$UserDetailsRec", ["exports", "OutSystems/ClientRuntime/Main", "Extension.ING_LDAP_Extension.model"], function (exports, OutSystems, Extension_ING_LDAP_ExtensionModel) {
var OS = OutSystems.Internal;
var UserDetailsRec = (function (_super) {
__extends(UserDetailsRec, _super);
function UserDetailsRec(defaults) {
_super.apply(this, arguments);
}
UserDetailsRec.attributesToDeclare = function () {
return [
this.attr("FirstName", "firstNameAttr", "FirstName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LastName", "lastNameAttr", "LastName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Initials", "initialsAttr", "Initials", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("FullName", "fullNameAttr", "FullName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("HRDepartment", "hRDepartmentAttr", "HRDepartment", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Email", "emailAttr", "Email", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Country", "countryAttr", "Country", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CorporateKey", "corporateKeyAttr", "CorporateKey", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Organisation", "organisationAttr", "Organisation", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("PhoneNumber", "phoneNumberAttr", "PhoneNumber", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
UserDetailsRec.init();
return UserDetailsRec;
})(OS.DataTypes.GenericRecord);
Extension_ING_LDAP_ExtensionModel.UserDetailsRec = UserDetailsRec;

});
define("Extension.ING_LDAP_Extension.model$UserDetailsRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.ING_LDAP_Extension.model", "Extension.ING_LDAP_Extension.model$UserDetailsRec"], function (exports, OutSystems, Extension_ING_LDAP_ExtensionModel) {
var OS = OutSystems.Internal;
var UserDetailsRecord = (function (_super) {
__extends(UserDetailsRecord, _super);
function UserDetailsRecord(defaults) {
_super.apply(this, arguments);
}
UserDetailsRecord.attributesToDeclare = function () {
return [
this.attr("UserDetails", "userDetailsAttr", "UserDetails", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_ING_LDAP_ExtensionModel.UserDetailsRec());
}, true, Extension_ING_LDAP_ExtensionModel.UserDetailsRec)
].concat(_super.attributesToDeclare.call(this));
};
UserDetailsRecord.fromStructure = function (str) {
return new UserDetailsRecord(new UserDetailsRecord.RecordClass({
userDetailsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
UserDetailsRecord._isAnonymousRecord = true;
UserDetailsRecord.UniqueId = "8d7b509a-4a5d-1171-ec05-ff3fedc09d2f";
UserDetailsRecord.init();
return UserDetailsRecord;
})(OS.DataTypes.GenericRecord);
Extension_ING_LDAP_ExtensionModel.UserDetailsRecord = UserDetailsRecord;

});
define("Extension.ING_LDAP_Extension.model$UserDetailsPlusRec", ["exports", "OutSystems/ClientRuntime/Main", "Extension.ING_LDAP_Extension.model", "Extension.ING_LDAP_Extension.model$UserDetailsRecord"], function (exports, OutSystems, Extension_ING_LDAP_ExtensionModel) {
var OS = OutSystems.Internal;
var UserDetailsPlusRec = (function (_super) {
__extends(UserDetailsPlusRec, _super);
function UserDetailsPlusRec(defaults) {
_super.apply(this, arguments);
}
UserDetailsPlusRec.attributesToDeclare = function () {
return [
this.attr("UserDetails", "userDetailsAttr", "UserDetails", true, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_ING_LDAP_ExtensionModel.UserDetailsRecord());
}, true, Extension_ING_LDAP_ExtensionModel.UserDetailsRecord), 
this.attr("UserAccessControl", "userAccessControlAttr", "UserAccessControl", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
UserDetailsPlusRec.init();
return UserDetailsPlusRec;
})(OS.DataTypes.GenericRecord);
Extension_ING_LDAP_ExtensionModel.UserDetailsPlusRec = UserDetailsPlusRec;

});
define("Extension.ING_LDAP_Extension.model$UserStatusRec", ["exports", "OutSystems/ClientRuntime/Main", "Extension.ING_LDAP_Extension.model"], function (exports, OutSystems, Extension_ING_LDAP_ExtensionModel) {
var OS = OutSystems.Internal;
var UserStatusRec = (function (_super) {
__extends(UserStatusRec, _super);
function UserStatusRec(defaults) {
_super.apply(this, arguments);
}
UserStatusRec.attributesToDeclare = function () {
return [
this.attr("CorporateKey", "corporateKeyAttr", "CorporateKey", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("UserId", "userIdAttr", "UserId", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Status", "statusAttr", "Status", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
UserStatusRec.init();
return UserStatusRec;
})(OS.DataTypes.GenericRecord);
Extension_ING_LDAP_ExtensionModel.UserStatusRec = UserStatusRec;

});
define("Extension.ING_LDAP_Extension.model$GroupMailBoxMemberRec", ["exports", "OutSystems/ClientRuntime/Main", "Extension.ING_LDAP_Extension.model"], function (exports, OutSystems, Extension_ING_LDAP_ExtensionModel) {
var OS = OutSystems.Internal;
var GroupMailBoxMemberRec = (function (_super) {
__extends(GroupMailBoxMemberRec, _super);
function GroupMailBoxMemberRec(defaults) {
_super.apply(this, arguments);
}
GroupMailBoxMemberRec.attributesToDeclare = function () {
return [
this.attr("CorporateKey", "corporateKeyAttr", "CorporateKey", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
GroupMailBoxMemberRec.fromStructure = function (str) {
return new GroupMailBoxMemberRec(new GroupMailBoxMemberRec.RecordClass({
corporateKeyAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
GroupMailBoxMemberRec.init();
return GroupMailBoxMemberRec;
})(OS.DataTypes.GenericRecord);
Extension_ING_LDAP_ExtensionModel.GroupMailBoxMemberRec = GroupMailBoxMemberRec;

});
define("Extension.ING_LDAP_Extension.model$GroupMailBoxMemberRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.ING_LDAP_Extension.model", "Extension.ING_LDAP_Extension.model$GroupMailBoxMemberRec"], function (exports, OutSystems, Extension_ING_LDAP_ExtensionModel) {
var OS = OutSystems.Internal;
var GroupMailBoxMemberRecord = (function (_super) {
__extends(GroupMailBoxMemberRecord, _super);
function GroupMailBoxMemberRecord(defaults) {
_super.apply(this, arguments);
}
GroupMailBoxMemberRecord.attributesToDeclare = function () {
return [
this.attr("GroupMailBoxMember", "groupMailBoxMemberAttr", "GroupMailBoxMember", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_ING_LDAP_ExtensionModel.GroupMailBoxMemberRec());
}, true, Extension_ING_LDAP_ExtensionModel.GroupMailBoxMemberRec)
].concat(_super.attributesToDeclare.call(this));
};
GroupMailBoxMemberRecord.fromStructure = function (str) {
return new GroupMailBoxMemberRecord(new GroupMailBoxMemberRecord.RecordClass({
groupMailBoxMemberAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
GroupMailBoxMemberRecord._isAnonymousRecord = true;
GroupMailBoxMemberRecord.UniqueId = "dd5331cd-423a-9297-85ee-4e3387e6553d";
GroupMailBoxMemberRecord.init();
return GroupMailBoxMemberRecord;
})(OS.DataTypes.GenericRecord);
Extension_ING_LDAP_ExtensionModel.GroupMailBoxMemberRecord = GroupMailBoxMemberRecord;

});
define("Extension.ING_LDAP_Extension.model$GroupMailBoxMemberRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.ING_LDAP_Extension.model", "Extension.ING_LDAP_Extension.model$GroupMailBoxMemberRecord"], function (exports, OutSystems, Extension_ING_LDAP_ExtensionModel) {
var OS = OutSystems.Internal;
var GroupMailBoxMemberRecordList = (function (_super) {
__extends(GroupMailBoxMemberRecordList, _super);
function GroupMailBoxMemberRecordList(defaults) {
_super.apply(this, arguments);
}
GroupMailBoxMemberRecordList.itemType = Extension_ING_LDAP_ExtensionModel.GroupMailBoxMemberRecord;
return GroupMailBoxMemberRecordList;
})(OS.DataTypes.GenericRecordList);
Extension_ING_LDAP_ExtensionModel.GroupMailBoxMemberRecordList = GroupMailBoxMemberRecordList;

});
define("Extension.ING_LDAP_Extension.model$GroupMailBoxRec", ["exports", "OutSystems/ClientRuntime/Main", "Extension.ING_LDAP_Extension.model", "Extension.ING_LDAP_Extension.model$GroupMailBoxMemberRecordList"], function (exports, OutSystems, Extension_ING_LDAP_ExtensionModel) {
var OS = OutSystems.Internal;
var GroupMailBoxRec = (function (_super) {
__extends(GroupMailBoxRec, _super);
function GroupMailBoxRec(defaults) {
_super.apply(this, arguments);
}
GroupMailBoxRec.attributesToDeclare = function () {
return [
this.attr("Name", "nameAttr", "Name", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MailAddress", "mailAddressAttr", "MailAddress", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Members", "membersAttr", "Members", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_ING_LDAP_ExtensionModel.GroupMailBoxMemberRecordList());
}, true, Extension_ING_LDAP_ExtensionModel.GroupMailBoxMemberRecordList)
].concat(_super.attributesToDeclare.call(this));
};
GroupMailBoxRec.init();
return GroupMailBoxRec;
})(OS.DataTypes.GenericRecord);
Extension_ING_LDAP_ExtensionModel.GroupMailBoxRec = GroupMailBoxRec;

});
define("Extension.ING_LDAP_Extension.model$GroupMailBoxRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.ING_LDAP_Extension.model", "Extension.ING_LDAP_Extension.model$GroupMailBoxRec"], function (exports, OutSystems, Extension_ING_LDAP_ExtensionModel) {
var OS = OutSystems.Internal;
var GroupMailBoxRecord = (function (_super) {
__extends(GroupMailBoxRecord, _super);
function GroupMailBoxRecord(defaults) {
_super.apply(this, arguments);
}
GroupMailBoxRecord.attributesToDeclare = function () {
return [
this.attr("GroupMailBox", "groupMailBoxAttr", "GroupMailBox", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_ING_LDAP_ExtensionModel.GroupMailBoxRec());
}, true, Extension_ING_LDAP_ExtensionModel.GroupMailBoxRec)
].concat(_super.attributesToDeclare.call(this));
};
GroupMailBoxRecord.fromStructure = function (str) {
return new GroupMailBoxRecord(new GroupMailBoxRecord.RecordClass({
groupMailBoxAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
GroupMailBoxRecord._isAnonymousRecord = true;
GroupMailBoxRecord.UniqueId = "7df809c6-570b-2c9e-29fc-5b907b9c8f74";
GroupMailBoxRecord.init();
return GroupMailBoxRecord;
})(OS.DataTypes.GenericRecord);
Extension_ING_LDAP_ExtensionModel.GroupMailBoxRecord = GroupMailBoxRecord;

});
define("Extension.ING_LDAP_Extension.model$GroupMailBoxRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.ING_LDAP_Extension.model", "Extension.ING_LDAP_Extension.model$GroupMailBoxRecord"], function (exports, OutSystems, Extension_ING_LDAP_ExtensionModel) {
var OS = OutSystems.Internal;
var GroupMailBoxRecordList = (function (_super) {
__extends(GroupMailBoxRecordList, _super);
function GroupMailBoxRecordList(defaults) {
_super.apply(this, arguments);
}
GroupMailBoxRecordList.itemType = Extension_ING_LDAP_ExtensionModel.GroupMailBoxRecord;
return GroupMailBoxRecordList;
})(OS.DataTypes.GenericRecordList);
Extension_ING_LDAP_ExtensionModel.GroupMailBoxRecordList = GroupMailBoxRecordList;

});
define("Extension.ING_LDAP_Extension.model$UserDetailsPlusRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.ING_LDAP_Extension.model", "Extension.ING_LDAP_Extension.model$UserDetailsPlusRec"], function (exports, OutSystems, Extension_ING_LDAP_ExtensionModel) {
var OS = OutSystems.Internal;
var UserDetailsPlusRecord = (function (_super) {
__extends(UserDetailsPlusRecord, _super);
function UserDetailsPlusRecord(defaults) {
_super.apply(this, arguments);
}
UserDetailsPlusRecord.attributesToDeclare = function () {
return [
this.attr("UserDetailsPlus", "userDetailsPlusAttr", "UserDetailsPlus", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_ING_LDAP_ExtensionModel.UserDetailsPlusRec());
}, true, Extension_ING_LDAP_ExtensionModel.UserDetailsPlusRec)
].concat(_super.attributesToDeclare.call(this));
};
UserDetailsPlusRecord.fromStructure = function (str) {
return new UserDetailsPlusRecord(new UserDetailsPlusRecord.RecordClass({
userDetailsPlusAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
UserDetailsPlusRecord._isAnonymousRecord = true;
UserDetailsPlusRecord.UniqueId = "5d190e40-348f-89ae-5418-84299ba21cb2";
UserDetailsPlusRecord.init();
return UserDetailsPlusRecord;
})(OS.DataTypes.GenericRecord);
Extension_ING_LDAP_ExtensionModel.UserDetailsPlusRecord = UserDetailsPlusRecord;

});
define("Extension.ING_LDAP_Extension.model$UserRec", ["exports", "OutSystems/ClientRuntime/Main", "Extension.ING_LDAP_Extension.model"], function (exports, OutSystems, Extension_ING_LDAP_ExtensionModel) {
var OS = OutSystems.Internal;
var UserRec = (function (_super) {
__extends(UserRec, _super);
function UserRec(defaults) {
_super.apply(this, arguments);
}
UserRec.attributesToDeclare = function () {
return [
this.attr("CKEY", "cKEYAttr", "CKEY", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("UserId", "userIdAttr", "UserId", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
UserRec.init();
return UserRec;
})(OS.DataTypes.GenericRecord);
Extension_ING_LDAP_ExtensionModel.UserRec = UserRec;

});
define("Extension.ING_LDAP_Extension.model$UserRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.ING_LDAP_Extension.model", "Extension.ING_LDAP_Extension.model$UserRec"], function (exports, OutSystems, Extension_ING_LDAP_ExtensionModel) {
var OS = OutSystems.Internal;
var UserRecord = (function (_super) {
__extends(UserRecord, _super);
function UserRecord(defaults) {
_super.apply(this, arguments);
}
UserRecord.attributesToDeclare = function () {
return [
this.attr("User", "userAttr", "User", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_ING_LDAP_ExtensionModel.UserRec());
}, true, Extension_ING_LDAP_ExtensionModel.UserRec)
].concat(_super.attributesToDeclare.call(this));
};
UserRecord.fromStructure = function (str) {
return new UserRecord(new UserRecord.RecordClass({
userAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
UserRecord._isAnonymousRecord = true;
UserRecord.UniqueId = "d10f4ad2-e09f-bd78-645b-eeb85b7ce67c";
UserRecord.init();
return UserRecord;
})(OS.DataTypes.GenericRecord);
Extension_ING_LDAP_ExtensionModel.UserRecord = UserRecord;

});
define("Extension.ING_LDAP_Extension.model$UserRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.ING_LDAP_Extension.model", "Extension.ING_LDAP_Extension.model$UserRecord"], function (exports, OutSystems, Extension_ING_LDAP_ExtensionModel) {
var OS = OutSystems.Internal;
var UserRecordList = (function (_super) {
__extends(UserRecordList, _super);
function UserRecordList(defaults) {
_super.apply(this, arguments);
}
UserRecordList.itemType = Extension_ING_LDAP_ExtensionModel.UserRecord;
return UserRecordList;
})(OS.DataTypes.GenericRecordList);
Extension_ING_LDAP_ExtensionModel.UserRecordList = UserRecordList;

});
define("Extension.ING_LDAP_Extension.model$UserStatusRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.ING_LDAP_Extension.model", "Extension.ING_LDAP_Extension.model$UserStatusRec"], function (exports, OutSystems, Extension_ING_LDAP_ExtensionModel) {
var OS = OutSystems.Internal;
var UserStatusRecord = (function (_super) {
__extends(UserStatusRecord, _super);
function UserStatusRecord(defaults) {
_super.apply(this, arguments);
}
UserStatusRecord.attributesToDeclare = function () {
return [
this.attr("UserStatus", "userStatusAttr", "UserStatus", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_ING_LDAP_ExtensionModel.UserStatusRec());
}, true, Extension_ING_LDAP_ExtensionModel.UserStatusRec)
].concat(_super.attributesToDeclare.call(this));
};
UserStatusRecord.fromStructure = function (str) {
return new UserStatusRecord(new UserStatusRecord.RecordClass({
userStatusAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
UserStatusRecord._isAnonymousRecord = true;
UserStatusRecord.UniqueId = "f63d46ea-efb8-9852-fb18-702bd2288c05";
UserStatusRecord.init();
return UserStatusRecord;
})(OS.DataTypes.GenericRecord);
Extension_ING_LDAP_ExtensionModel.UserStatusRecord = UserStatusRecord;

});
define("Extension.ING_LDAP_Extension.model$UserStatusRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.ING_LDAP_Extension.model", "Extension.ING_LDAP_Extension.model$UserStatusRecord"], function (exports, OutSystems, Extension_ING_LDAP_ExtensionModel) {
var OS = OutSystems.Internal;
var UserStatusRecordList = (function (_super) {
__extends(UserStatusRecordList, _super);
function UserStatusRecordList(defaults) {
_super.apply(this, arguments);
}
UserStatusRecordList.itemType = Extension_ING_LDAP_ExtensionModel.UserStatusRecord;
return UserStatusRecordList;
})(OS.DataTypes.GenericRecordList);
Extension_ING_LDAP_ExtensionModel.UserStatusRecordList = UserStatusRecordList;

});
define("Extension.ING_LDAP_Extension.model$UserDetailsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.ING_LDAP_Extension.model", "Extension.ING_LDAP_Extension.model$UserDetailsRecord"], function (exports, OutSystems, Extension_ING_LDAP_ExtensionModel) {
var OS = OutSystems.Internal;
var UserDetailsRecordList = (function (_super) {
__extends(UserDetailsRecordList, _super);
function UserDetailsRecordList(defaults) {
_super.apply(this, arguments);
}
UserDetailsRecordList.itemType = Extension_ING_LDAP_ExtensionModel.UserDetailsRecord;
return UserDetailsRecordList;
})(OS.DataTypes.GenericRecordList);
Extension_ING_LDAP_ExtensionModel.UserDetailsRecordList = UserDetailsRecordList;

});
define("Extension.ING_LDAP_Extension.model$UserDetailsPlusRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.ING_LDAP_Extension.model", "Extension.ING_LDAP_Extension.model$UserDetailsPlusRecord"], function (exports, OutSystems, Extension_ING_LDAP_ExtensionModel) {
var OS = OutSystems.Internal;
var UserDetailsPlusRecordList = (function (_super) {
__extends(UserDetailsPlusRecordList, _super);
function UserDetailsPlusRecordList(defaults) {
_super.apply(this, arguments);
}
UserDetailsPlusRecordList.itemType = Extension_ING_LDAP_ExtensionModel.UserDetailsPlusRecord;
return UserDetailsPlusRecordList;
})(OS.DataTypes.GenericRecordList);
Extension_ING_LDAP_ExtensionModel.UserDetailsPlusRecordList = UserDetailsPlusRecordList;

});
define("Extension.ING_LDAP_Extension.model", ["exports", "OutSystems/ClientRuntime/Main"], function (exports, OutSystems) {
var OS = OutSystems.Internal;
var Extension_ING_LDAP_ExtensionModel = exports;
});
