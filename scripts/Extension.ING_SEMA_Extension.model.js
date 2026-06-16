define("Extension.ING_SEMA_Extension.model$SaaCFieldsRec", ["exports", "OutSystems/ClientRuntime/Main", "Extension.ING_SEMA_Extension.model"], function (exports, OutSystems, Extension_ING_SEMA_ExtensionModel) {
var OS = OutSystems.Internal;
var SaaCFieldsRec = (function (_super) {
__extends(SaaCFieldsRec, _super);
function SaaCFieldsRec(defaults) {
_super.apply(this, arguments);
}
SaaCFieldsRec.attributesToDeclare = function () {
return [
this.attr("ED_ApplicationName", "eD_ApplicationNameAttr", "ED_ApplicationName", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ED_ING_Identifier", "eD_ING_IdentifierAttr", "ED_ING_Identifier", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ED_CMDBID", "eD_CMDBIDAttr", "ED_CMDBID", false, false, OS.DataTypes.DataTypes.Text, function () {
return "null";
}, true), 
this.attr("ED_CountryCode", "eD_CountryCodeAttr", "ED_CountryCode", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ED_Timestamp", "eD_TimestampAttr", "ED_Timestamp", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("ED_EventName", "eD_EventNameAttr", "ED_EventName", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ED_EventDescription", "eD_EventDescriptionAttr", "ED_EventDescription", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ED_EventCategory", "eD_EventCategoryAttr", "ED_EventCategory", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ED_Action", "eD_ActionAttr", "ED_Action", false, false, OS.DataTypes.DataTypes.Text, function () {
return "null";
}, true), 
this.attr("ED_Significance", "eD_SignificanceAttr", "ED_Significance", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ED_Message", "eD_MessageAttr", "ED_Message", false, false, OS.DataTypes.DataTypes.Text, function () {
return "null";
}, true), 
this.attr("ED_AdditionalInformation", "eD_AdditionalInformationAttr", "ED_AdditionalInformation", false, false, OS.DataTypes.DataTypes.Text, function () {
return "null";
}, true), 
this.attr("LS_IPAddress", "lS_IPAddressAttr", "LS_IPAddress", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LS_Hostname", "lS_HostnameAttr", "LS_Hostname", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LS_FQDN", "lS_FQDNAttr", "LS_FQDN", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LS_TechnologyUsed", "lS_TechnologyUsedAttr", "LS_TechnologyUsed", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LS_Environment", "lS_EnvironmentAttr", "LS_Environment", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SD_UserName", "sD_UserNameAttr", "SD_UserName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "null";
}, true), 
this.attr("SD_UserId", "sD_UserIdAttr", "SD_UserId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "null";
}, true), 
this.attr("SD_UserPrivileges", "sD_UserPrivilegesAttr", "SD_UserPrivileges", false, false, OS.DataTypes.DataTypes.Text, function () {
return "null";
}, true), 
this.attr("SD_IpAddress", "sD_IpAddressAttr", "SD_IpAddress", false, false, OS.DataTypes.DataTypes.Text, function () {
return "null";
}, true), 
this.attr("SD_HostName", "sD_HostNameAttr", "SD_HostName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "null";
}, true), 
this.attr("SD_FQDN", "sD_FQDNAttr", "SD_FQDN", false, false, OS.DataTypes.DataTypes.Text, function () {
return "null";
}, true), 
this.attr("DD_UserName", "dD_UserNameAttr", "DD_UserName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "null";
}, true), 
this.attr("DD_UserId", "dD_UserIdAttr", "DD_UserId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "null";
}, true), 
this.attr("DD_UserPrivileges", "dD_UserPrivilegesAttr", "DD_UserPrivileges", false, false, OS.DataTypes.DataTypes.Text, function () {
return "null";
}, true), 
this.attr("DD_IpAddress", "dD_IpAddressAttr", "DD_IpAddress", false, false, OS.DataTypes.DataTypes.Text, function () {
return "null";
}, true), 
this.attr("DD_HostName", "dD_HostNameAttr", "DD_HostName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "null";
}, true), 
this.attr("DD_Fqdn", "dD_FqdnAttr", "DD_Fqdn", false, false, OS.DataTypes.DataTypes.Text, function () {
return "null";
}, true), 
this.attr("GR_NewValue", "gR_NewValueAttr", "GR_NewValue", false, false, OS.DataTypes.DataTypes.Text, function () {
return "null";
}, true), 
this.attr("GR_OldValue", "gR_OldValueAttr", "GR_OldValue", false, false, OS.DataTypes.DataTypes.Text, function () {
return "null";
}, true), 
this.attr("GR_CurrentName", "gR_CurrentNameAttr", "GR_CurrentName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "null";
}, true), 
this.attr("File_Name", "file_NameAttr", "File_Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "null";
}, true), 
this.attr("File_Path", "file_PathAttr", "File_Path", false, false, OS.DataTypes.DataTypes.Text, function () {
return "null";
}, true), 
this.attr("File_Id", "file_IdAttr", "File_Id", false, false, OS.DataTypes.DataTypes.Text, function () {
return "null";
}, true), 
this.attr("File_Type", "file_TypeAttr", "File_Type", false, false, OS.DataTypes.DataTypes.Text, function () {
return "null";
}, true), 
this.attr("File_Size", "file_SizeAttr", "File_Size", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("File_CreationTime", "file_CreationTimeAttr", "File_CreationTime", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("File_ModificationTime", "file_ModificationTimeAttr", "File_ModificationTime", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("File_Permission", "file_PermissionAttr", "File_Permission", false, false, OS.DataTypes.DataTypes.Text, function () {
return "null";
}, true), 
this.attr("File_Hash", "file_HashAttr", "File_Hash", false, false, OS.DataTypes.DataTypes.Text, function () {
return "null";
}, true), 
this.attr("SP_Name", "sP_NameAttr", "SP_Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "null";
}, true), 
this.attr("SP_Id", "sP_IdAttr", "SP_Id", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("SP_State", "sP_StateAttr", "SP_State", false, false, OS.DataTypes.DataTypes.Text, function () {
return "null";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
SaaCFieldsRec.init();
return SaaCFieldsRec;
})(OS.DataTypes.GenericRecord);
Extension_ING_SEMA_ExtensionModel.SaaCFieldsRec = SaaCFieldsRec;

});
define("Extension.ING_SEMA_Extension.model$SaaCFieldsRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.ING_SEMA_Extension.model", "Extension.ING_SEMA_Extension.model$SaaCFieldsRec"], function (exports, OutSystems, Extension_ING_SEMA_ExtensionModel) {
var OS = OutSystems.Internal;
var SaaCFieldsRecord = (function (_super) {
__extends(SaaCFieldsRecord, _super);
function SaaCFieldsRecord(defaults) {
_super.apply(this, arguments);
}
SaaCFieldsRecord.attributesToDeclare = function () {
return [
this.attr("SaaCFields", "saaCFieldsAttr", "SaaCFields", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_ING_SEMA_ExtensionModel.SaaCFieldsRec());
}, true, Extension_ING_SEMA_ExtensionModel.SaaCFieldsRec)
].concat(_super.attributesToDeclare.call(this));
};
SaaCFieldsRecord.fromStructure = function (str) {
return new SaaCFieldsRecord(new SaaCFieldsRecord.RecordClass({
saaCFieldsAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SaaCFieldsRecord._isAnonymousRecord = true;
SaaCFieldsRecord.UniqueId = "50d459b3-43b0-a77f-afe8-609cd8e02917";
SaaCFieldsRecord.init();
return SaaCFieldsRecord;
})(OS.DataTypes.GenericRecord);
Extension_ING_SEMA_ExtensionModel.SaaCFieldsRecord = SaaCFieldsRecord;

});
define("Extension.ING_SEMA_Extension.model$SaaCFieldsRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.ING_SEMA_Extension.model", "Extension.ING_SEMA_Extension.model$SaaCFieldsRecord"], function (exports, OutSystems, Extension_ING_SEMA_ExtensionModel) {
var OS = OutSystems.Internal;
var SaaCFieldsRecordList = (function (_super) {
__extends(SaaCFieldsRecordList, _super);
function SaaCFieldsRecordList(defaults) {
_super.apply(this, arguments);
}
SaaCFieldsRecordList.itemType = Extension_ING_SEMA_ExtensionModel.SaaCFieldsRecord;
return SaaCFieldsRecordList;
})(OS.DataTypes.GenericRecordList);
Extension_ING_SEMA_ExtensionModel.SaaCFieldsRecordList = SaaCFieldsRecordList;

});
define("Extension.ING_SEMA_Extension.model", ["exports", "OutSystems/ClientRuntime/Main"], function (exports, OutSystems) {
var OS = OutSystems.Internal;
var Extension_ING_SEMA_ExtensionModel = exports;
});
