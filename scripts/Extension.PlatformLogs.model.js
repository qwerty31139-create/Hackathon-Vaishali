define("Extension.PlatformLogs.model$Log_Mobile_RequestRec", ["exports", "OutSystems/ClientRuntime/Main", "Extension.PlatformLogs.model"], function (exports, OutSystems, Extension_PlatformLogsModel) {
var OS = OutSystems.Internal;
var Log_Mobile_RequestRec = (function (_super) {
__extends(Log_Mobile_RequestRec, _super);
function Log_Mobile_RequestRec(defaults) {
_super.apply(this, arguments);
}
Log_Mobile_RequestRec.attributesToDeclare = function () {
return [
this.attr("Tenant_Id", "tenant_IdAttr", "Tenant_Id", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Instant", "instantAttr", "Instant", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("Espace_Id", "espace_IdAttr", "Espace_Id", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Screen", "screenAttr", "Screen", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Source", "sourceAttr", "Source", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Endpoint", "endpointAttr", "Endpoint", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Duration", "durationAttr", "Duration", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Executed_by", "executed_byAttr", "Executed_by", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Error_Id", "error_IdAttr", "Error_Id", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Cycle", "cycleAttr", "Cycle", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Request_Key", "request_KeyAttr", "Request_Key", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Login_Id", "login_IdAttr", "Login_Id", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("User_Id", "user_IdAttr", "User_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Espace_Name", "espace_NameAttr", "Espace_Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Application_Name", "application_NameAttr", "Application_Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Application_Key", "application_KeyAttr", "Application_Key", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Username", "usernameAttr", "Username", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Log_Mobile_RequestRec.init();
return Log_Mobile_RequestRec;
})(OS.DataTypes.GenericRecord);
Extension_PlatformLogsModel.Log_Mobile_RequestRec = Log_Mobile_RequestRec;

});
define("Extension.PlatformLogs.model$Log_Mobile_RequestRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.PlatformLogs.model", "Extension.PlatformLogs.model$Log_Mobile_RequestRec"], function (exports, OutSystems, Extension_PlatformLogsModel) {
var OS = OutSystems.Internal;
var Log_Mobile_RequestRecord = (function (_super) {
__extends(Log_Mobile_RequestRecord, _super);
function Log_Mobile_RequestRecord(defaults) {
_super.apply(this, arguments);
}
Log_Mobile_RequestRecord.attributesToDeclare = function () {
return [
this.attr("Log_Mobile_Request", "log_Mobile_RequestAttr", "Log_Mobile_Request", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_PlatformLogsModel.Log_Mobile_RequestRec());
}, true, Extension_PlatformLogsModel.Log_Mobile_RequestRec)
].concat(_super.attributesToDeclare.call(this));
};
Log_Mobile_RequestRecord.fromStructure = function (str) {
return new Log_Mobile_RequestRecord(new Log_Mobile_RequestRecord.RecordClass({
log_Mobile_RequestAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Log_Mobile_RequestRecord._isAnonymousRecord = true;
Log_Mobile_RequestRecord.UniqueId = "005f6c89-45f9-2fd3-c019-1abf1f0443b1";
Log_Mobile_RequestRecord.init();
return Log_Mobile_RequestRecord;
})(OS.DataTypes.GenericRecord);
Extension_PlatformLogsModel.Log_Mobile_RequestRecord = Log_Mobile_RequestRecord;

});
define("Extension.PlatformLogs.model$Log_ServiceAPI_Detail_PreviousRec", ["exports", "OutSystems/ClientRuntime/Main", "Extension.PlatformLogs.model"], function (exports, OutSystems, Extension_PlatformLogsModel) {
var OS = OutSystems.Internal;
var Log_ServiceAPI_Detail_PreviousRec = (function (_super) {
__extends(Log_ServiceAPI_Detail_PreviousRec, _super);
function Log_ServiceAPI_Detail_PreviousRec(defaults) {
_super.apply(this, arguments);
}
Log_ServiceAPI_Detail_PreviousRec.attributesToDeclare = function () {
return [
this.attr("Tenant_Id", "tenant_IdAttr", "Tenant_Id", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Message", "messageAttr", "Message", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Detail", "detailAttr", "Detail", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DetailLabel", "detailLabelAttr", "DetailLabel", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Cycle", "cycleAttr", "Cycle", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Log_ServiceAPI_Detail_PreviousRec.init();
return Log_ServiceAPI_Detail_PreviousRec;
})(OS.DataTypes.GenericRecord);
Extension_PlatformLogsModel.Log_ServiceAPI_Detail_PreviousRec = Log_ServiceAPI_Detail_PreviousRec;

});
define("Extension.PlatformLogs.model$Log_ServiceAPI_Detail_PreviousRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.PlatformLogs.model", "Extension.PlatformLogs.model$Log_ServiceAPI_Detail_PreviousRec"], function (exports, OutSystems, Extension_PlatformLogsModel) {
var OS = OutSystems.Internal;
var Log_ServiceAPI_Detail_PreviousRecord = (function (_super) {
__extends(Log_ServiceAPI_Detail_PreviousRecord, _super);
function Log_ServiceAPI_Detail_PreviousRecord(defaults) {
_super.apply(this, arguments);
}
Log_ServiceAPI_Detail_PreviousRecord.attributesToDeclare = function () {
return [
this.attr("Log_ServiceAPI_Detail_Previous", "log_ServiceAPI_Detail_PreviousAttr", "Log_ServiceAPI_Detail_Previous", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_PlatformLogsModel.Log_ServiceAPI_Detail_PreviousRec());
}, true, Extension_PlatformLogsModel.Log_ServiceAPI_Detail_PreviousRec)
].concat(_super.attributesToDeclare.call(this));
};
Log_ServiceAPI_Detail_PreviousRecord.fromStructure = function (str) {
return new Log_ServiceAPI_Detail_PreviousRecord(new Log_ServiceAPI_Detail_PreviousRecord.RecordClass({
log_ServiceAPI_Detail_PreviousAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Log_ServiceAPI_Detail_PreviousRecord._isAnonymousRecord = true;
Log_ServiceAPI_Detail_PreviousRecord.UniqueId = "73d7324d-aa2b-8b83-50a4-3e98184a22b7";
Log_ServiceAPI_Detail_PreviousRecord.init();
return Log_ServiceAPI_Detail_PreviousRecord;
})(OS.DataTypes.GenericRecord);
Extension_PlatformLogsModel.Log_ServiceAPI_Detail_PreviousRecord = Log_ServiceAPI_Detail_PreviousRecord;

});
define("Extension.PlatformLogs.model$Log_ServiceAPI_Detail_PreviousRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.PlatformLogs.model", "Extension.PlatformLogs.model$Log_ServiceAPI_Detail_PreviousRecord"], function (exports, OutSystems, Extension_PlatformLogsModel) {
var OS = OutSystems.Internal;
var Log_ServiceAPI_Detail_PreviousRecordList = (function (_super) {
__extends(Log_ServiceAPI_Detail_PreviousRecordList, _super);
function Log_ServiceAPI_Detail_PreviousRecordList(defaults) {
_super.apply(this, arguments);
}
Log_ServiceAPI_Detail_PreviousRecordList.itemType = Extension_PlatformLogsModel.Log_ServiceAPI_Detail_PreviousRecord;
return Log_ServiceAPI_Detail_PreviousRecordList;
})(OS.DataTypes.GenericRecordList);
Extension_PlatformLogsModel.Log_ServiceAPI_Detail_PreviousRecordList = Log_ServiceAPI_Detail_PreviousRecordList;

});
define("Extension.PlatformLogs.model$Log_Web_ReferenceRec", ["exports", "OutSystems/ClientRuntime/Main", "Extension.PlatformLogs.model"], function (exports, OutSystems, Extension_PlatformLogsModel) {
var OS = OutSystems.Internal;
var Log_Web_ReferenceRec = (function (_super) {
__extends(Log_Web_ReferenceRec, _super);
function Log_Web_ReferenceRec(defaults) {
_super.apply(this, arguments);
}
Log_Web_ReferenceRec.attributesToDeclare = function () {
return [
this.attr("Tenant_Id", "tenant_IdAttr", "Tenant_Id", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Instant", "instantAttr", "Instant", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("Duration", "durationAttr", "Duration", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("URL", "uRLAttr", "URL", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Method", "methodAttr", "Method", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Espace_Id", "espace_IdAttr", "Espace_Id", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Executed_by", "executed_byAttr", "Executed_by", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Error_Id", "error_IdAttr", "Error_Id", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IntegrationLog_Id", "integrationLog_IdAttr", "IntegrationLog_Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Cycle", "cycleAttr", "Cycle", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Log_Web_ReferenceRec.init();
return Log_Web_ReferenceRec;
})(OS.DataTypes.GenericRecord);
Extension_PlatformLogsModel.Log_Web_ReferenceRec = Log_Web_ReferenceRec;

});
define("Extension.PlatformLogs.model$Log_Web_ReferenceRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.PlatformLogs.model", "Extension.PlatformLogs.model$Log_Web_ReferenceRec"], function (exports, OutSystems, Extension_PlatformLogsModel) {
var OS = OutSystems.Internal;
var Log_Web_ReferenceRecord = (function (_super) {
__extends(Log_Web_ReferenceRecord, _super);
function Log_Web_ReferenceRecord(defaults) {
_super.apply(this, arguments);
}
Log_Web_ReferenceRecord.attributesToDeclare = function () {
return [
this.attr("Log_Web_Reference", "log_Web_ReferenceAttr", "Log_Web_Reference", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_PlatformLogsModel.Log_Web_ReferenceRec());
}, true, Extension_PlatformLogsModel.Log_Web_ReferenceRec)
].concat(_super.attributesToDeclare.call(this));
};
Log_Web_ReferenceRecord.fromStructure = function (str) {
return new Log_Web_ReferenceRecord(new Log_Web_ReferenceRecord.RecordClass({
log_Web_ReferenceAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Log_Web_ReferenceRecord._isAnonymousRecord = true;
Log_Web_ReferenceRecord.UniqueId = "01017cd8-60aa-1275-194d-0a0ec337e32e";
Log_Web_ReferenceRecord.init();
return Log_Web_ReferenceRecord;
})(OS.DataTypes.GenericRecord);
Extension_PlatformLogsModel.Log_Web_ReferenceRecord = Log_Web_ReferenceRecord;

});
define("Extension.PlatformLogs.model$Log_Screen_PreviousRec", ["exports", "OutSystems/ClientRuntime/Main", "Extension.PlatformLogs.model"], function (exports, OutSystems, Extension_PlatformLogsModel) {
var OS = OutSystems.Internal;
var Log_Screen_PreviousRec = (function (_super) {
__extends(Log_Screen_PreviousRec, _super);
function Log_Screen_PreviousRec(defaults) {
_super.apply(this, arguments);
}
Log_Screen_PreviousRec.attributesToDeclare = function () {
return [
this.attr("Tenant_Id", "tenant_IdAttr", "Tenant_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Instant", "instantAttr", "Instant", true, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("Duration", "durationAttr", "Duration", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Screen", "screenAttr", "Screen", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Session_Id", "session_IdAttr", "Session_Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("User_Id", "user_IdAttr", "User_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Espace_Id", "espace_IdAttr", "Espace_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Msisdn", "msisdnAttr", "Msisdn", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Screen_Type", "screen_TypeAttr", "Screen_Type", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Cycle", "cycleAttr", "Cycle", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Executed_By", "executed_ByAttr", "Executed_By", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Session_Bytes", "session_BytesAttr", "Session_Bytes", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Viewstate_Bytes", "viewstate_BytesAttr", "Viewstate_Bytes", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Session_Requests", "session_RequestsAttr", "Session_Requests", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Access_Mode", "access_ModeAttr", "Access_Mode", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Request_Key", "request_KeyAttr", "Request_Key", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Action_Name", "action_NameAttr", "Action_Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Client_IP", "client_IPAttr", "Client_IP", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Espace_Name", "espace_NameAttr", "Espace_Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Application_Name", "application_NameAttr", "Application_Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Application_Key", "application_KeyAttr", "Application_Key", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Username", "usernameAttr", "Username", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Log_Screen_PreviousRec.init();
return Log_Screen_PreviousRec;
})(OS.DataTypes.GenericRecord);
Extension_PlatformLogsModel.Log_Screen_PreviousRec = Log_Screen_PreviousRec;

});
define("Extension.PlatformLogs.model$Log_Screen_PreviousRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.PlatformLogs.model", "Extension.PlatformLogs.model$Log_Screen_PreviousRec"], function (exports, OutSystems, Extension_PlatformLogsModel) {
var OS = OutSystems.Internal;
var Log_Screen_PreviousRecord = (function (_super) {
__extends(Log_Screen_PreviousRecord, _super);
function Log_Screen_PreviousRecord(defaults) {
_super.apply(this, arguments);
}
Log_Screen_PreviousRecord.attributesToDeclare = function () {
return [
this.attr("Log_Screen_Previous", "log_Screen_PreviousAttr", "Log_Screen_Previous", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_PlatformLogsModel.Log_Screen_PreviousRec());
}, true, Extension_PlatformLogsModel.Log_Screen_PreviousRec)
].concat(_super.attributesToDeclare.call(this));
};
Log_Screen_PreviousRecord.fromStructure = function (str) {
return new Log_Screen_PreviousRecord(new Log_Screen_PreviousRecord.RecordClass({
log_Screen_PreviousAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Log_Screen_PreviousRecord._isAnonymousRecord = true;
Log_Screen_PreviousRecord.UniqueId = "04a9fa79-f012-8639-4cae-5e97e91a1658";
Log_Screen_PreviousRecord.init();
return Log_Screen_PreviousRecord;
})(OS.DataTypes.GenericRecord);
Extension_PlatformLogsModel.Log_Screen_PreviousRecord = Log_Screen_PreviousRecord;

});
define("Extension.PlatformLogs.model$Log_Extension_PreviousRec", ["exports", "OutSystems/ClientRuntime/Main", "Extension.PlatformLogs.model"], function (exports, OutSystems, Extension_PlatformLogsModel) {
var OS = OutSystems.Internal;
var Log_Extension_PreviousRec = (function (_super) {
__extends(Log_Extension_PreviousRec, _super);
function Log_Extension_PreviousRec(defaults) {
_super.apply(this, arguments);
}
Log_Extension_PreviousRec.attributesToDeclare = function () {
return [
this.attr("Tenant_Id", "tenant_IdAttr", "Tenant_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Instant", "instantAttr", "Instant", true, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("Duration", "durationAttr", "Duration", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Action_Name", "action_NameAttr", "Action_Name", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Session_Id", "session_IdAttr", "Session_Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("User_Id", "user_IdAttr", "User_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Espace_Id", "espace_IdAttr", "Espace_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Extension_Id", "extension_IdAttr", "Extension_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Executed_By", "executed_ByAttr", "Executed_By", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Error_Id", "error_IdAttr", "Error_Id", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Cycle", "cycleAttr", "Cycle", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Request_Key", "request_KeyAttr", "Request_Key", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Espace_Name", "espace_NameAttr", "Espace_Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Extension_Name", "extension_NameAttr", "Extension_Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Application_Name", "application_NameAttr", "Application_Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Application_Key", "application_KeyAttr", "Application_Key", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Username", "usernameAttr", "Username", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Log_Extension_PreviousRec.init();
return Log_Extension_PreviousRec;
})(OS.DataTypes.GenericRecord);
Extension_PlatformLogsModel.Log_Extension_PreviousRec = Log_Extension_PreviousRec;

});
define("Extension.PlatformLogs.model$Log_ServiceAPI_PreviousRec", ["exports", "OutSystems/ClientRuntime/Main", "Extension.PlatformLogs.model"], function (exports, OutSystems, Extension_PlatformLogsModel) {
var OS = OutSystems.Internal;
var Log_ServiceAPI_PreviousRec = (function (_super) {
__extends(Log_ServiceAPI_PreviousRec, _super);
function Log_ServiceAPI_PreviousRec(defaults) {
_super.apply(this, arguments);
}
Log_ServiceAPI_PreviousRec.attributesToDeclare = function () {
return [
this.attr("Tenant_Id", "tenant_IdAttr", "Tenant_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Instant", "instantAttr", "Instant", true, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("User_Id", "user_IdAttr", "User_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Login_Id", "login_IdAttr", "Login_Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Session_Id", "session_IdAttr", "Session_Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Espace_Id", "espace_IdAttr", "Espace_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Error_Id", "error_IdAttr", "Error_Id", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Executed_by", "executed_byAttr", "Executed_by", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Request_Key", "request_KeyAttr", "Request_Key", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Entrypoiint_Name", "entrypoiint_NameAttr", "Entrypoiint_Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Action", "actionAttr", "Action", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Cycle", "cycleAttr", "Cycle", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Duration", "durationAttr", "Duration", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Source", "sourceAttr", "Source", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Endpoint", "endpointAttr", "Endpoint", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Espace_Name", "espace_NameAttr", "Espace_Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Application_Name", "application_NameAttr", "Application_Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Application_Key", "application_KeyAttr", "Application_Key", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Username", "usernameAttr", "Username", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Original_Request_Key", "original_Request_KeyAttr", "Original_Request_Key", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Log_ServiceAPI_PreviousRec.init();
return Log_ServiceAPI_PreviousRec;
})(OS.DataTypes.GenericRecord);
Extension_PlatformLogsModel.Log_ServiceAPI_PreviousRec = Log_ServiceAPI_PreviousRec;

});
define("Extension.PlatformLogs.model$Log_ServiceAPI_PreviousRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.PlatformLogs.model", "Extension.PlatformLogs.model$Log_ServiceAPI_PreviousRec"], function (exports, OutSystems, Extension_PlatformLogsModel) {
var OS = OutSystems.Internal;
var Log_ServiceAPI_PreviousRecord = (function (_super) {
__extends(Log_ServiceAPI_PreviousRecord, _super);
function Log_ServiceAPI_PreviousRecord(defaults) {
_super.apply(this, arguments);
}
Log_ServiceAPI_PreviousRecord.attributesToDeclare = function () {
return [
this.attr("Log_ServiceAPI_Previous", "log_ServiceAPI_PreviousAttr", "Log_ServiceAPI_Previous", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_PlatformLogsModel.Log_ServiceAPI_PreviousRec());
}, true, Extension_PlatformLogsModel.Log_ServiceAPI_PreviousRec)
].concat(_super.attributesToDeclare.call(this));
};
Log_ServiceAPI_PreviousRecord.fromStructure = function (str) {
return new Log_ServiceAPI_PreviousRecord(new Log_ServiceAPI_PreviousRecord.RecordClass({
log_ServiceAPI_PreviousAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Log_ServiceAPI_PreviousRecord._isAnonymousRecord = true;
Log_ServiceAPI_PreviousRecord.UniqueId = "062a7972-48a1-b006-2e52-ab777a3ae782";
Log_ServiceAPI_PreviousRecord.init();
return Log_ServiceAPI_PreviousRecord;
})(OS.DataTypes.GenericRecord);
Extension_PlatformLogsModel.Log_ServiceAPI_PreviousRecord = Log_ServiceAPI_PreviousRecord;

});
define("Extension.PlatformLogs.model$Log_Mobile_Request_Detail_PreviousRec", ["exports", "OutSystems/ClientRuntime/Main", "Extension.PlatformLogs.model"], function (exports, OutSystems, Extension_PlatformLogsModel) {
var OS = OutSystems.Internal;
var Log_Mobile_Request_Detail_PreviousRec = (function (_super) {
__extends(Log_Mobile_Request_Detail_PreviousRec, _super);
function Log_Mobile_Request_Detail_PreviousRec(defaults) {
_super.apply(this, arguments);
}
Log_Mobile_Request_Detail_PreviousRec.attributesToDeclare = function () {
return [
this.attr("Tenant_Id", "tenant_IdAttr", "Tenant_Id", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Cycle", "cycleAttr", "Cycle", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Message", "messageAttr", "Message", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Detail", "detailAttr", "Detail", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DetailLabel", "detailLabelAttr", "DetailLabel", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Log_Mobile_Request_Detail_PreviousRec.init();
return Log_Mobile_Request_Detail_PreviousRec;
})(OS.DataTypes.GenericRecord);
Extension_PlatformLogsModel.Log_Mobile_Request_Detail_PreviousRec = Log_Mobile_Request_Detail_PreviousRec;

});
define("Extension.PlatformLogs.model$Log_Extension_PreviousRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.PlatformLogs.model", "Extension.PlatformLogs.model$Log_Extension_PreviousRec"], function (exports, OutSystems, Extension_PlatformLogsModel) {
var OS = OutSystems.Internal;
var Log_Extension_PreviousRecord = (function (_super) {
__extends(Log_Extension_PreviousRecord, _super);
function Log_Extension_PreviousRecord(defaults) {
_super.apply(this, arguments);
}
Log_Extension_PreviousRecord.attributesToDeclare = function () {
return [
this.attr("Log_Extension_Previous", "log_Extension_PreviousAttr", "Log_Extension_Previous", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_PlatformLogsModel.Log_Extension_PreviousRec());
}, true, Extension_PlatformLogsModel.Log_Extension_PreviousRec)
].concat(_super.attributesToDeclare.call(this));
};
Log_Extension_PreviousRecord.fromStructure = function (str) {
return new Log_Extension_PreviousRecord(new Log_Extension_PreviousRecord.RecordClass({
log_Extension_PreviousAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Log_Extension_PreviousRecord._isAnonymousRecord = true;
Log_Extension_PreviousRecord.UniqueId = "0805fe28-923a-85b6-07fb-d8118ace904d";
Log_Extension_PreviousRecord.init();
return Log_Extension_PreviousRecord;
})(OS.DataTypes.GenericRecord);
Extension_PlatformLogsModel.Log_Extension_PreviousRecord = Log_Extension_PreviousRecord;

});
define("Extension.PlatformLogs.model$Log_Cyclic_JobRec", ["exports", "OutSystems/ClientRuntime/Main", "Extension.PlatformLogs.model"], function (exports, OutSystems, Extension_PlatformLogsModel) {
var OS = OutSystems.Internal;
var Log_Cyclic_JobRec = (function (_super) {
__extends(Log_Cyclic_JobRec, _super);
function Log_Cyclic_JobRec(defaults) {
_super.apply(this, arguments);
}
Log_Cyclic_JobRec.attributesToDeclare = function () {
return [
this.attr("Tenant_Id", "tenant_IdAttr", "Tenant_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Instant", "instantAttr", "Instant", true, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("Duration", "durationAttr", "Duration", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Cyclic_Job_Key", "cyclic_Job_KeyAttr", "Cyclic_Job_Key", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Espace_Id", "espace_IdAttr", "Espace_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Executed_By", "executed_ByAttr", "Executed_By", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Error_Id", "error_IdAttr", "Error_Id", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Should_Have_Run_At", "should_Have_Run_AtAttr", "Should_Have_Run_At", true, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("Next_Run", "next_RunAttr", "Next_Run", true, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("Cycle", "cycleAttr", "Cycle", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Request_Key", "request_KeyAttr", "Request_Key", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Espace_Name", "espace_NameAttr", "Espace_Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Application_Name", "application_NameAttr", "Application_Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Application_Key", "application_KeyAttr", "Application_Key", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Cyclic_Job_Name", "cyclic_Job_NameAttr", "Cyclic_Job_Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Log_Cyclic_JobRec.init();
return Log_Cyclic_JobRec;
})(OS.DataTypes.GenericRecord);
Extension_PlatformLogsModel.Log_Cyclic_JobRec = Log_Cyclic_JobRec;

});
define("Extension.PlatformLogs.model$Log_Cyclic_JobRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.PlatformLogs.model", "Extension.PlatformLogs.model$Log_Cyclic_JobRec"], function (exports, OutSystems, Extension_PlatformLogsModel) {
var OS = OutSystems.Internal;
var Log_Cyclic_JobRecord = (function (_super) {
__extends(Log_Cyclic_JobRecord, _super);
function Log_Cyclic_JobRecord(defaults) {
_super.apply(this, arguments);
}
Log_Cyclic_JobRecord.attributesToDeclare = function () {
return [
this.attr("Log_Cyclic_Job", "log_Cyclic_JobAttr", "Log_Cyclic_Job", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_PlatformLogsModel.Log_Cyclic_JobRec());
}, true, Extension_PlatformLogsModel.Log_Cyclic_JobRec)
].concat(_super.attributesToDeclare.call(this));
};
Log_Cyclic_JobRecord.fromStructure = function (str) {
return new Log_Cyclic_JobRecord(new Log_Cyclic_JobRecord.RecordClass({
log_Cyclic_JobAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Log_Cyclic_JobRecord._isAnonymousRecord = true;
Log_Cyclic_JobRecord.UniqueId = "0a056135-0e0d-1540-f441-843ef02af6a0";
Log_Cyclic_JobRecord.init();
return Log_Cyclic_JobRecord;
})(OS.DataTypes.GenericRecord);
Extension_PlatformLogsModel.Log_Cyclic_JobRecord = Log_Cyclic_JobRecord;

});
define("Extension.PlatformLogs.model$Log_Mobile_RequestRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.PlatformLogs.model", "Extension.PlatformLogs.model$Log_Mobile_RequestRecord"], function (exports, OutSystems, Extension_PlatformLogsModel) {
var OS = OutSystems.Internal;
var Log_Mobile_RequestRecordList = (function (_super) {
__extends(Log_Mobile_RequestRecordList, _super);
function Log_Mobile_RequestRecordList(defaults) {
_super.apply(this, arguments);
}
Log_Mobile_RequestRecordList.itemType = Extension_PlatformLogsModel.Log_Mobile_RequestRecord;
return Log_Mobile_RequestRecordList;
})(OS.DataTypes.GenericRecordList);
Extension_PlatformLogsModel.Log_Mobile_RequestRecordList = Log_Mobile_RequestRecordList;

});
define("Extension.PlatformLogs.model$Log_ErrorRec", ["exports", "OutSystems/ClientRuntime/Main", "Extension.PlatformLogs.model"], function (exports, OutSystems, Extension_PlatformLogsModel) {
var OS = OutSystems.Internal;
var Log_ErrorRec = (function (_super) {
__extends(Log_ErrorRec, _super);
function Log_ErrorRec(defaults) {
_super.apply(this, arguments);
}
Log_ErrorRec.attributesToDeclare = function () {
return [
this.attr("Tenant_Id", "tenant_IdAttr", "Tenant_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Instant", "instantAttr", "Instant", true, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("Session_Id", "session_IdAttr", "Session_Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("User_Id", "user_IdAttr", "User_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Espace_Id", "espace_IdAttr", "Espace_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Message", "messageAttr", "Message", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Stack", "stackAttr", "Stack", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Module_Name", "module_NameAttr", "Module_Name", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Server", "serverAttr", "Server", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Cycle", "cycleAttr", "Cycle", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("EnvironmentInformation", "environmentInformationAttr", "EnvironmentInformation", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Entrypoint_Name", "entrypoint_NameAttr", "Entrypoint_Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Action_Name", "action_NameAttr", "Action_Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Request_Key", "request_KeyAttr", "Request_Key", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Espace_Name", "espace_NameAttr", "Espace_Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Application_Name", "application_NameAttr", "Application_Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Application_Key", "application_KeyAttr", "Application_Key", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Username", "usernameAttr", "Username", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Log_ErrorRec.init();
return Log_ErrorRec;
})(OS.DataTypes.GenericRecord);
Extension_PlatformLogsModel.Log_ErrorRec = Log_ErrorRec;

});
define("Extension.PlatformLogs.model$Log_ErrorRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.PlatformLogs.model", "Extension.PlatformLogs.model$Log_ErrorRec"], function (exports, OutSystems, Extension_PlatformLogsModel) {
var OS = OutSystems.Internal;
var Log_ErrorRecord = (function (_super) {
__extends(Log_ErrorRecord, _super);
function Log_ErrorRecord(defaults) {
_super.apply(this, arguments);
}
Log_ErrorRecord.attributesToDeclare = function () {
return [
this.attr("Log_Error", "log_ErrorAttr", "Log_Error", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_PlatformLogsModel.Log_ErrorRec());
}, true, Extension_PlatformLogsModel.Log_ErrorRec)
].concat(_super.attributesToDeclare.call(this));
};
Log_ErrorRecord.fromStructure = function (str) {
return new Log_ErrorRecord(new Log_ErrorRecord.RecordClass({
log_ErrorAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Log_ErrorRecord._isAnonymousRecord = true;
Log_ErrorRecord.UniqueId = "177cbfd7-3897-d11d-08ef-ae6256ada1f4";
Log_ErrorRecord.init();
return Log_ErrorRecord;
})(OS.DataTypes.GenericRecord);
Extension_PlatformLogsModel.Log_ErrorRecord = Log_ErrorRecord;

});
define("Extension.PlatformLogs.model$Log_General_PreviousRec", ["exports", "OutSystems/ClientRuntime/Main", "Extension.PlatformLogs.model"], function (exports, OutSystems, Extension_PlatformLogsModel) {
var OS = OutSystems.Internal;
var Log_General_PreviousRec = (function (_super) {
__extends(Log_General_PreviousRec, _super);
function Log_General_PreviousRec(defaults) {
_super.apply(this, arguments);
}
Log_General_PreviousRec.attributesToDeclare = function () {
return [
this.attr("Tenant_Id", "tenant_IdAttr", "Tenant_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Instant", "instantAttr", "Instant", true, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("Session_Id", "session_IdAttr", "Session_Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("User_Id", "user_IdAttr", "User_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Espace_Id", "espace_IdAttr", "Espace_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Error_Id", "error_IdAttr", "Error_Id", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Message", "messageAttr", "Message", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Message_Type", "message_TypeAttr", "Message_Type", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Module_Name", "module_NameAttr", "Module_Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Cycle", "cycleAttr", "Cycle", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Request_Key", "request_KeyAttr", "Request_Key", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Entrypoint_Name", "entrypoint_NameAttr", "Entrypoint_Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Action_Name", "action_NameAttr", "Action_Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Client_IP", "client_IPAttr", "Client_IP", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Espace_Name", "espace_NameAttr", "Espace_Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Application_Name", "application_NameAttr", "Application_Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Application_Key", "application_KeyAttr", "Application_Key", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Username", "usernameAttr", "Username", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Log_General_PreviousRec.init();
return Log_General_PreviousRec;
})(OS.DataTypes.GenericRecord);
Extension_PlatformLogsModel.Log_General_PreviousRec = Log_General_PreviousRec;

});
define("Extension.PlatformLogs.model$Log_General_PreviousRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.PlatformLogs.model", "Extension.PlatformLogs.model$Log_General_PreviousRec"], function (exports, OutSystems, Extension_PlatformLogsModel) {
var OS = OutSystems.Internal;
var Log_General_PreviousRecord = (function (_super) {
__extends(Log_General_PreviousRecord, _super);
function Log_General_PreviousRecord(defaults) {
_super.apply(this, arguments);
}
Log_General_PreviousRecord.attributesToDeclare = function () {
return [
this.attr("Log_General_Previous", "log_General_PreviousAttr", "Log_General_Previous", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_PlatformLogsModel.Log_General_PreviousRec());
}, true, Extension_PlatformLogsModel.Log_General_PreviousRec)
].concat(_super.attributesToDeclare.call(this));
};
Log_General_PreviousRecord.fromStructure = function (str) {
return new Log_General_PreviousRecord(new Log_General_PreviousRecord.RecordClass({
log_General_PreviousAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Log_General_PreviousRecord._isAnonymousRecord = true;
Log_General_PreviousRecord.UniqueId = "19cbd067-3d32-4541-b8a5-81c01ca2eabc";
Log_General_PreviousRecord.init();
return Log_General_PreviousRecord;
})(OS.DataTypes.GenericRecord);
Extension_PlatformLogsModel.Log_General_PreviousRecord = Log_General_PreviousRecord;

});
define("Extension.PlatformLogs.model$Log_Web_Service_PreviousRec", ["exports", "OutSystems/ClientRuntime/Main", "Extension.PlatformLogs.model"], function (exports, OutSystems, Extension_PlatformLogsModel) {
var OS = OutSystems.Internal;
var Log_Web_Service_PreviousRec = (function (_super) {
__extends(Log_Web_Service_PreviousRec, _super);
function Log_Web_Service_PreviousRec(defaults) {
_super.apply(this, arguments);
}
Log_Web_Service_PreviousRec.attributesToDeclare = function () {
return [
this.attr("Tenant_Id", "tenant_IdAttr", "Tenant_Id", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Instant", "instantAttr", "Instant", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("Duration", "durationAttr", "Duration", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Name", "nameAttr", "Name", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Method", "methodAttr", "Method", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Espace_Id", "espace_IdAttr", "Espace_Id", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Client_IP", "client_IPAttr", "Client_IP", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Executed_by", "executed_byAttr", "Executed_by", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Error_Id", "error_IdAttr", "Error_Id", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Cycle", "cycleAttr", "Cycle", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Log_Web_Service_PreviousRec.init();
return Log_Web_Service_PreviousRec;
})(OS.DataTypes.GenericRecord);
Extension_PlatformLogsModel.Log_Web_Service_PreviousRec = Log_Web_Service_PreviousRec;

});
define("Extension.PlatformLogs.model$Log_Web_Service_PreviousRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.PlatformLogs.model", "Extension.PlatformLogs.model$Log_Web_Service_PreviousRec"], function (exports, OutSystems, Extension_PlatformLogsModel) {
var OS = OutSystems.Internal;
var Log_Web_Service_PreviousRecord = (function (_super) {
__extends(Log_Web_Service_PreviousRecord, _super);
function Log_Web_Service_PreviousRecord(defaults) {
_super.apply(this, arguments);
}
Log_Web_Service_PreviousRecord.attributesToDeclare = function () {
return [
this.attr("Log_Web_Service_Previous", "log_Web_Service_PreviousAttr", "Log_Web_Service_Previous", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_PlatformLogsModel.Log_Web_Service_PreviousRec());
}, true, Extension_PlatformLogsModel.Log_Web_Service_PreviousRec)
].concat(_super.attributesToDeclare.call(this));
};
Log_Web_Service_PreviousRecord.fromStructure = function (str) {
return new Log_Web_Service_PreviousRecord(new Log_Web_Service_PreviousRecord.RecordClass({
log_Web_Service_PreviousAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Log_Web_Service_PreviousRecord._isAnonymousRecord = true;
Log_Web_Service_PreviousRecord.UniqueId = "1a37bd5e-22f8-7654-b0e3-fc45e35e092a";
Log_Web_Service_PreviousRecord.init();
return Log_Web_Service_PreviousRecord;
})(OS.DataTypes.GenericRecord);
Extension_PlatformLogsModel.Log_Web_Service_PreviousRecord = Log_Web_Service_PreviousRecord;

});
define("Extension.PlatformLogs.model$Log_Cyclic_Job_PreviousRec", ["exports", "OutSystems/ClientRuntime/Main", "Extension.PlatformLogs.model"], function (exports, OutSystems, Extension_PlatformLogsModel) {
var OS = OutSystems.Internal;
var Log_Cyclic_Job_PreviousRec = (function (_super) {
__extends(Log_Cyclic_Job_PreviousRec, _super);
function Log_Cyclic_Job_PreviousRec(defaults) {
_super.apply(this, arguments);
}
Log_Cyclic_Job_PreviousRec.attributesToDeclare = function () {
return [
this.attr("Tenant_Id", "tenant_IdAttr", "Tenant_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Instant", "instantAttr", "Instant", true, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("Duration", "durationAttr", "Duration", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Cyclic_Job_Key", "cyclic_Job_KeyAttr", "Cyclic_Job_Key", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Espace_Id", "espace_IdAttr", "Espace_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Executed_By", "executed_ByAttr", "Executed_By", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Error_Id", "error_IdAttr", "Error_Id", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Should_Have_Run_At", "should_Have_Run_AtAttr", "Should_Have_Run_At", true, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("Next_Run", "next_RunAttr", "Next_Run", true, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("Cycle", "cycleAttr", "Cycle", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Request_Key", "request_KeyAttr", "Request_Key", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Espace_Name", "espace_NameAttr", "Espace_Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Application_Name", "application_NameAttr", "Application_Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Application_Key", "application_KeyAttr", "Application_Key", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Cyclic_Job_Name", "cyclic_Job_NameAttr", "Cyclic_Job_Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Log_Cyclic_Job_PreviousRec.init();
return Log_Cyclic_Job_PreviousRec;
})(OS.DataTypes.GenericRecord);
Extension_PlatformLogsModel.Log_Cyclic_Job_PreviousRec = Log_Cyclic_Job_PreviousRec;

});
define("Extension.PlatformLogs.model$Log_Cyclic_Job_PreviousRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.PlatformLogs.model", "Extension.PlatformLogs.model$Log_Cyclic_Job_PreviousRec"], function (exports, OutSystems, Extension_PlatformLogsModel) {
var OS = OutSystems.Internal;
var Log_Cyclic_Job_PreviousRecord = (function (_super) {
__extends(Log_Cyclic_Job_PreviousRecord, _super);
function Log_Cyclic_Job_PreviousRecord(defaults) {
_super.apply(this, arguments);
}
Log_Cyclic_Job_PreviousRecord.attributesToDeclare = function () {
return [
this.attr("Log_Cyclic_Job_Previous", "log_Cyclic_Job_PreviousAttr", "Log_Cyclic_Job_Previous", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_PlatformLogsModel.Log_Cyclic_Job_PreviousRec());
}, true, Extension_PlatformLogsModel.Log_Cyclic_Job_PreviousRec)
].concat(_super.attributesToDeclare.call(this));
};
Log_Cyclic_Job_PreviousRecord.fromStructure = function (str) {
return new Log_Cyclic_Job_PreviousRecord(new Log_Cyclic_Job_PreviousRecord.RecordClass({
log_Cyclic_Job_PreviousAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Log_Cyclic_Job_PreviousRecord._isAnonymousRecord = true;
Log_Cyclic_Job_PreviousRecord.UniqueId = "1d7a3fac-cf8e-ca02-3ff8-11ccf2830761";
Log_Cyclic_Job_PreviousRecord.init();
return Log_Cyclic_Job_PreviousRecord;
})(OS.DataTypes.GenericRecord);
Extension_PlatformLogsModel.Log_Cyclic_Job_PreviousRecord = Log_Cyclic_Job_PreviousRecord;

});
define("Extension.PlatformLogs.model$Log_IntegrationRec", ["exports", "OutSystems/ClientRuntime/Main", "Extension.PlatformLogs.model"], function (exports, OutSystems, Extension_PlatformLogsModel) {
var OS = OutSystems.Internal;
var Log_IntegrationRec = (function (_super) {
__extends(Log_IntegrationRec, _super);
function Log_IntegrationRec(defaults) {
_super.apply(this, arguments);
}
Log_IntegrationRec.attributesToDeclare = function () {
return [
this.attr("Tenant_Id", "tenant_IdAttr", "Tenant_Id", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Instant", "instantAttr", "Instant", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("Duration", "durationAttr", "Duration", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Source", "sourceAttr", "Source", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Endpoint", "endpointAttr", "Endpoint", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Action", "actionAttr", "Action", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Type", "typeAttr", "Type", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Espace_Id", "espace_IdAttr", "Espace_Id", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Error_Id", "error_IdAttr", "Error_Id", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Executed_by", "executed_byAttr", "Executed_by", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Cycle", "cycleAttr", "Cycle", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Is_Expose", "is_ExposeAttr", "Is_Expose", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Request_Key", "request_KeyAttr", "Request_Key", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Espace_Name", "espace_NameAttr", "Espace_Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Application_Name", "application_NameAttr", "Application_Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Application_Key", "application_KeyAttr", "Application_Key", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Log_IntegrationRec.init();
return Log_IntegrationRec;
})(OS.DataTypes.GenericRecord);
Extension_PlatformLogsModel.Log_IntegrationRec = Log_IntegrationRec;

});
define("Extension.PlatformLogs.model$Log_IntegrationRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.PlatformLogs.model", "Extension.PlatformLogs.model$Log_IntegrationRec"], function (exports, OutSystems, Extension_PlatformLogsModel) {
var OS = OutSystems.Internal;
var Log_IntegrationRecord = (function (_super) {
__extends(Log_IntegrationRecord, _super);
function Log_IntegrationRecord(defaults) {
_super.apply(this, arguments);
}
Log_IntegrationRecord.attributesToDeclare = function () {
return [
this.attr("Log_Integration", "log_IntegrationAttr", "Log_Integration", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_PlatformLogsModel.Log_IntegrationRec());
}, true, Extension_PlatformLogsModel.Log_IntegrationRec)
].concat(_super.attributesToDeclare.call(this));
};
Log_IntegrationRecord.fromStructure = function (str) {
return new Log_IntegrationRecord(new Log_IntegrationRecord.RecordClass({
log_IntegrationAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Log_IntegrationRecord._isAnonymousRecord = true;
Log_IntegrationRecord.UniqueId = "200415f2-5091-5b7b-5593-617f2279c02b";
Log_IntegrationRecord.init();
return Log_IntegrationRecord;
})(OS.DataTypes.GenericRecord);
Extension_PlatformLogsModel.Log_IntegrationRecord = Log_IntegrationRecord;

});
define("Extension.PlatformLogs.model$Log_RequestEvent_PreviousRec", ["exports", "OutSystems/ClientRuntime/Main", "Extension.PlatformLogs.model"], function (exports, OutSystems, Extension_PlatformLogsModel) {
var OS = OutSystems.Internal;
var Log_RequestEvent_PreviousRec = (function (_super) {
__extends(Log_RequestEvent_PreviousRec, _super);
function Log_RequestEvent_PreviousRec(defaults) {
_super.apply(this, arguments);
}
Log_RequestEvent_PreviousRec.attributesToDeclare = function () {
return [
this.attr("Instant", "instantAttr", "Instant", true, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("RequestKey", "requestKeyAttr", "RequestKey", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("RequestEventName", "requestEventNameAttr", "RequestEventName", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ModuleKey", "moduleKeyAttr", "ModuleKey", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ModuleName", "moduleNameAttr", "ModuleName", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ApplicationKey", "applicationKeyAttr", "ApplicationKey", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ApplicationName", "applicationNameAttr", "ApplicationName", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("EventDetails", "eventDetailsAttr", "EventDetails", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Cycle", "cycleAttr", "Cycle", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Log_RequestEvent_PreviousRec.init();
return Log_RequestEvent_PreviousRec;
})(OS.DataTypes.GenericRecord);
Extension_PlatformLogsModel.Log_RequestEvent_PreviousRec = Log_RequestEvent_PreviousRec;

});
define("Extension.PlatformLogs.model$Log_Integration_Detail_PreviousRec", ["exports", "OutSystems/ClientRuntime/Main", "Extension.PlatformLogs.model"], function (exports, OutSystems, Extension_PlatformLogsModel) {
var OS = OutSystems.Internal;
var Log_Integration_Detail_PreviousRec = (function (_super) {
__extends(Log_Integration_Detail_PreviousRec, _super);
function Log_Integration_Detail_PreviousRec(defaults) {
_super.apply(this, arguments);
}
Log_Integration_Detail_PreviousRec.attributesToDeclare = function () {
return [
this.attr("Tenant_Id", "tenant_IdAttr", "Tenant_Id", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Cycle", "cycleAttr", "Cycle", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Message", "messageAttr", "Message", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Detail", "detailAttr", "Detail", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DetailLabel", "detailLabelAttr", "DetailLabel", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Log_Integration_Detail_PreviousRec.init();
return Log_Integration_Detail_PreviousRec;
})(OS.DataTypes.GenericRecord);
Extension_PlatformLogsModel.Log_Integration_Detail_PreviousRec = Log_Integration_Detail_PreviousRec;

});
define("Extension.PlatformLogs.model$Log_Integration_Detail_PreviousRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.PlatformLogs.model", "Extension.PlatformLogs.model$Log_Integration_Detail_PreviousRec"], function (exports, OutSystems, Extension_PlatformLogsModel) {
var OS = OutSystems.Internal;
var Log_Integration_Detail_PreviousRecord = (function (_super) {
__extends(Log_Integration_Detail_PreviousRecord, _super);
function Log_Integration_Detail_PreviousRecord(defaults) {
_super.apply(this, arguments);
}
Log_Integration_Detail_PreviousRecord.attributesToDeclare = function () {
return [
this.attr("Log_Integration_Detail_Previous", "log_Integration_Detail_PreviousAttr", "Log_Integration_Detail_Previous", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_PlatformLogsModel.Log_Integration_Detail_PreviousRec());
}, true, Extension_PlatformLogsModel.Log_Integration_Detail_PreviousRec)
].concat(_super.attributesToDeclare.call(this));
};
Log_Integration_Detail_PreviousRecord.fromStructure = function (str) {
return new Log_Integration_Detail_PreviousRecord(new Log_Integration_Detail_PreviousRecord.RecordClass({
log_Integration_Detail_PreviousAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Log_Integration_Detail_PreviousRecord._isAnonymousRecord = true;
Log_Integration_Detail_PreviousRecord.UniqueId = "914c315b-2694-1d69-2579-facdf0f22f81";
Log_Integration_Detail_PreviousRecord.init();
return Log_Integration_Detail_PreviousRecord;
})(OS.DataTypes.GenericRecord);
Extension_PlatformLogsModel.Log_Integration_Detail_PreviousRecord = Log_Integration_Detail_PreviousRecord;

});
define("Extension.PlatformLogs.model$Log_Integration_Detail_PreviousRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.PlatformLogs.model", "Extension.PlatformLogs.model$Log_Integration_Detail_PreviousRecord"], function (exports, OutSystems, Extension_PlatformLogsModel) {
var OS = OutSystems.Internal;
var Log_Integration_Detail_PreviousRecordList = (function (_super) {
__extends(Log_Integration_Detail_PreviousRecordList, _super);
function Log_Integration_Detail_PreviousRecordList(defaults) {
_super.apply(this, arguments);
}
Log_Integration_Detail_PreviousRecordList.itemType = Extension_PlatformLogsModel.Log_Integration_Detail_PreviousRecord;
return Log_Integration_Detail_PreviousRecordList;
})(OS.DataTypes.GenericRecordList);
Extension_PlatformLogsModel.Log_Integration_Detail_PreviousRecordList = Log_Integration_Detail_PreviousRecordList;

});
define("Extension.PlatformLogs.model$Log_RequestEventRec", ["exports", "OutSystems/ClientRuntime/Main", "Extension.PlatformLogs.model"], function (exports, OutSystems, Extension_PlatformLogsModel) {
var OS = OutSystems.Internal;
var Log_RequestEventRec = (function (_super) {
__extends(Log_RequestEventRec, _super);
function Log_RequestEventRec(defaults) {
_super.apply(this, arguments);
}
Log_RequestEventRec.attributesToDeclare = function () {
return [
this.attr("Instant", "instantAttr", "Instant", true, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("RequestKey", "requestKeyAttr", "RequestKey", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("RequestEventName", "requestEventNameAttr", "RequestEventName", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ModuleKey", "moduleKeyAttr", "ModuleKey", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ModuleName", "moduleNameAttr", "ModuleName", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ApplicationKey", "applicationKeyAttr", "ApplicationKey", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ApplicationName", "applicationNameAttr", "ApplicationName", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("EventDetails", "eventDetailsAttr", "EventDetails", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Cycle", "cycleAttr", "Cycle", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Log_RequestEventRec.init();
return Log_RequestEventRec;
})(OS.DataTypes.GenericRecord);
Extension_PlatformLogsModel.Log_RequestEventRec = Log_RequestEventRec;

});
define("Extension.PlatformLogs.model$Log_Error_PreviousRec", ["exports", "OutSystems/ClientRuntime/Main", "Extension.PlatformLogs.model"], function (exports, OutSystems, Extension_PlatformLogsModel) {
var OS = OutSystems.Internal;
var Log_Error_PreviousRec = (function (_super) {
__extends(Log_Error_PreviousRec, _super);
function Log_Error_PreviousRec(defaults) {
_super.apply(this, arguments);
}
Log_Error_PreviousRec.attributesToDeclare = function () {
return [
this.attr("Tenant_Id", "tenant_IdAttr", "Tenant_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Instant", "instantAttr", "Instant", true, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("Session_Id", "session_IdAttr", "Session_Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("User_Id", "user_IdAttr", "User_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Espace_Id", "espace_IdAttr", "Espace_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Message", "messageAttr", "Message", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Stack", "stackAttr", "Stack", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Module_Name", "module_NameAttr", "Module_Name", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Server", "serverAttr", "Server", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Cycle", "cycleAttr", "Cycle", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("EnvironmentInformation", "environmentInformationAttr", "EnvironmentInformation", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Entrypoint_Name", "entrypoint_NameAttr", "Entrypoint_Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Action_Name", "action_NameAttr", "Action_Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Request_Key", "request_KeyAttr", "Request_Key", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Espace_Name", "espace_NameAttr", "Espace_Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Application_Name", "application_NameAttr", "Application_Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Application_Key", "application_KeyAttr", "Application_Key", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Username", "usernameAttr", "Username", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Log_Error_PreviousRec.init();
return Log_Error_PreviousRec;
})(OS.DataTypes.GenericRecord);
Extension_PlatformLogsModel.Log_Error_PreviousRec = Log_Error_PreviousRec;

});
define("Extension.PlatformLogs.model$Log_Error_PreviousRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.PlatformLogs.model", "Extension.PlatformLogs.model$Log_Error_PreviousRec"], function (exports, OutSystems, Extension_PlatformLogsModel) {
var OS = OutSystems.Internal;
var Log_Error_PreviousRecord = (function (_super) {
__extends(Log_Error_PreviousRecord, _super);
function Log_Error_PreviousRecord(defaults) {
_super.apply(this, arguments);
}
Log_Error_PreviousRecord.attributesToDeclare = function () {
return [
this.attr("Log_Error_Previous", "log_Error_PreviousAttr", "Log_Error_Previous", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_PlatformLogsModel.Log_Error_PreviousRec());
}, true, Extension_PlatformLogsModel.Log_Error_PreviousRec)
].concat(_super.attributesToDeclare.call(this));
};
Log_Error_PreviousRecord.fromStructure = function (str) {
return new Log_Error_PreviousRecord(new Log_Error_PreviousRecord.RecordClass({
log_Error_PreviousAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Log_Error_PreviousRecord._isAnonymousRecord = true;
Log_Error_PreviousRecord.UniqueId = "3d3731e4-9fdb-cfdb-7f23-f1ebcfa69c2a";
Log_Error_PreviousRecord.init();
return Log_Error_PreviousRecord;
})(OS.DataTypes.GenericRecord);
Extension_PlatformLogsModel.Log_Error_PreviousRecord = Log_Error_PreviousRecord;

});
define("Extension.PlatformLogs.model$Log_Error_PreviousRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.PlatformLogs.model", "Extension.PlatformLogs.model$Log_Error_PreviousRecord"], function (exports, OutSystems, Extension_PlatformLogsModel) {
var OS = OutSystems.Internal;
var Log_Error_PreviousRecordList = (function (_super) {
__extends(Log_Error_PreviousRecordList, _super);
function Log_Error_PreviousRecordList(defaults) {
_super.apply(this, arguments);
}
Log_Error_PreviousRecordList.itemType = Extension_PlatformLogsModel.Log_Error_PreviousRecord;
return Log_Error_PreviousRecordList;
})(OS.DataTypes.GenericRecordList);
Extension_PlatformLogsModel.Log_Error_PreviousRecordList = Log_Error_PreviousRecordList;

});
define("Extension.PlatformLogs.model$Log_Mobile_Request_Detail_PreviousRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.PlatformLogs.model", "Extension.PlatformLogs.model$Log_Mobile_Request_Detail_PreviousRec"], function (exports, OutSystems, Extension_PlatformLogsModel) {
var OS = OutSystems.Internal;
var Log_Mobile_Request_Detail_PreviousRecord = (function (_super) {
__extends(Log_Mobile_Request_Detail_PreviousRecord, _super);
function Log_Mobile_Request_Detail_PreviousRecord(defaults) {
_super.apply(this, arguments);
}
Log_Mobile_Request_Detail_PreviousRecord.attributesToDeclare = function () {
return [
this.attr("Log_Mobile_Request_Detail_Previous", "log_Mobile_Request_Detail_PreviousAttr", "Log_Mobile_Request_Detail_Previous", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_PlatformLogsModel.Log_Mobile_Request_Detail_PreviousRec());
}, true, Extension_PlatformLogsModel.Log_Mobile_Request_Detail_PreviousRec)
].concat(_super.attributesToDeclare.call(this));
};
Log_Mobile_Request_Detail_PreviousRecord.fromStructure = function (str) {
return new Log_Mobile_Request_Detail_PreviousRecord(new Log_Mobile_Request_Detail_PreviousRecord.RecordClass({
log_Mobile_Request_Detail_PreviousAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Log_Mobile_Request_Detail_PreviousRecord._isAnonymousRecord = true;
Log_Mobile_Request_Detail_PreviousRecord.UniqueId = "bfe8386f-6230-b91c-583a-b795b29553f1";
Log_Mobile_Request_Detail_PreviousRecord.init();
return Log_Mobile_Request_Detail_PreviousRecord;
})(OS.DataTypes.GenericRecord);
Extension_PlatformLogsModel.Log_Mobile_Request_Detail_PreviousRecord = Log_Mobile_Request_Detail_PreviousRecord;

});
define("Extension.PlatformLogs.model$Log_Mobile_Request_Detail_PreviousRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.PlatformLogs.model", "Extension.PlatformLogs.model$Log_Mobile_Request_Detail_PreviousRecord"], function (exports, OutSystems, Extension_PlatformLogsModel) {
var OS = OutSystems.Internal;
var Log_Mobile_Request_Detail_PreviousRecordList = (function (_super) {
__extends(Log_Mobile_Request_Detail_PreviousRecordList, _super);
function Log_Mobile_Request_Detail_PreviousRecordList(defaults) {
_super.apply(this, arguments);
}
Log_Mobile_Request_Detail_PreviousRecordList.itemType = Extension_PlatformLogsModel.Log_Mobile_Request_Detail_PreviousRecord;
return Log_Mobile_Request_Detail_PreviousRecordList;
})(OS.DataTypes.GenericRecordList);
Extension_PlatformLogsModel.Log_Mobile_Request_Detail_PreviousRecordList = Log_Mobile_Request_Detail_PreviousRecordList;

});
define("Extension.PlatformLogs.model$Log_Web_Reference_PreviousRec", ["exports", "OutSystems/ClientRuntime/Main", "Extension.PlatformLogs.model"], function (exports, OutSystems, Extension_PlatformLogsModel) {
var OS = OutSystems.Internal;
var Log_Web_Reference_PreviousRec = (function (_super) {
__extends(Log_Web_Reference_PreviousRec, _super);
function Log_Web_Reference_PreviousRec(defaults) {
_super.apply(this, arguments);
}
Log_Web_Reference_PreviousRec.attributesToDeclare = function () {
return [
this.attr("Tenant_Id", "tenant_IdAttr", "Tenant_Id", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Instant", "instantAttr", "Instant", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("Duration", "durationAttr", "Duration", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("URL", "uRLAttr", "URL", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Method", "methodAttr", "Method", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Espace_Id", "espace_IdAttr", "Espace_Id", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Executed_by", "executed_byAttr", "Executed_by", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Error_Id", "error_IdAttr", "Error_Id", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IntegrationLog_Id", "integrationLog_IdAttr", "IntegrationLog_Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Cycle", "cycleAttr", "Cycle", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Log_Web_Reference_PreviousRec.init();
return Log_Web_Reference_PreviousRec;
})(OS.DataTypes.GenericRecord);
Extension_PlatformLogsModel.Log_Web_Reference_PreviousRec = Log_Web_Reference_PreviousRec;

});
define("Extension.PlatformLogs.model$Log_Web_Reference_PreviousRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.PlatformLogs.model", "Extension.PlatformLogs.model$Log_Web_Reference_PreviousRec"], function (exports, OutSystems, Extension_PlatformLogsModel) {
var OS = OutSystems.Internal;
var Log_Web_Reference_PreviousRecord = (function (_super) {
__extends(Log_Web_Reference_PreviousRecord, _super);
function Log_Web_Reference_PreviousRecord(defaults) {
_super.apply(this, arguments);
}
Log_Web_Reference_PreviousRecord.attributesToDeclare = function () {
return [
this.attr("Log_Web_Reference_Previous", "log_Web_Reference_PreviousAttr", "Log_Web_Reference_Previous", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_PlatformLogsModel.Log_Web_Reference_PreviousRec());
}, true, Extension_PlatformLogsModel.Log_Web_Reference_PreviousRec)
].concat(_super.attributesToDeclare.call(this));
};
Log_Web_Reference_PreviousRecord.fromStructure = function (str) {
return new Log_Web_Reference_PreviousRecord(new Log_Web_Reference_PreviousRecord.RecordClass({
log_Web_Reference_PreviousAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Log_Web_Reference_PreviousRecord._isAnonymousRecord = true;
Log_Web_Reference_PreviousRecord.UniqueId = "423ef30e-1003-2014-7a84-14d1841eae43";
Log_Web_Reference_PreviousRecord.init();
return Log_Web_Reference_PreviousRecord;
})(OS.DataTypes.GenericRecord);
Extension_PlatformLogsModel.Log_Web_Reference_PreviousRecord = Log_Web_Reference_PreviousRecord;

});
define("Extension.PlatformLogs.model$Log_Mobile_Request_PreviousRec", ["exports", "OutSystems/ClientRuntime/Main", "Extension.PlatformLogs.model"], function (exports, OutSystems, Extension_PlatformLogsModel) {
var OS = OutSystems.Internal;
var Log_Mobile_Request_PreviousRec = (function (_super) {
__extends(Log_Mobile_Request_PreviousRec, _super);
function Log_Mobile_Request_PreviousRec(defaults) {
_super.apply(this, arguments);
}
Log_Mobile_Request_PreviousRec.attributesToDeclare = function () {
return [
this.attr("Tenant_Id", "tenant_IdAttr", "Tenant_Id", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Instant", "instantAttr", "Instant", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("Espace_Id", "espace_IdAttr", "Espace_Id", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Screen", "screenAttr", "Screen", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Source", "sourceAttr", "Source", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Endpoint", "endpointAttr", "Endpoint", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Duration", "durationAttr", "Duration", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Executed_by", "executed_byAttr", "Executed_by", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Error_Id", "error_IdAttr", "Error_Id", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Cycle", "cycleAttr", "Cycle", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Request_Key", "request_KeyAttr", "Request_Key", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Login_Id", "login_IdAttr", "Login_Id", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("User_Id", "user_IdAttr", "User_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Espace_Name", "espace_NameAttr", "Espace_Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Application_Name", "application_NameAttr", "Application_Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Application_Key", "application_KeyAttr", "Application_Key", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Username", "usernameAttr", "Username", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Log_Mobile_Request_PreviousRec.init();
return Log_Mobile_Request_PreviousRec;
})(OS.DataTypes.GenericRecord);
Extension_PlatformLogsModel.Log_Mobile_Request_PreviousRec = Log_Mobile_Request_PreviousRec;

});
define("Extension.PlatformLogs.model$Log_GeneralRec", ["exports", "OutSystems/ClientRuntime/Main", "Extension.PlatformLogs.model"], function (exports, OutSystems, Extension_PlatformLogsModel) {
var OS = OutSystems.Internal;
var Log_GeneralRec = (function (_super) {
__extends(Log_GeneralRec, _super);
function Log_GeneralRec(defaults) {
_super.apply(this, arguments);
}
Log_GeneralRec.attributesToDeclare = function () {
return [
this.attr("Tenant_Id", "tenant_IdAttr", "Tenant_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Instant", "instantAttr", "Instant", true, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("Session_Id", "session_IdAttr", "Session_Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("User_Id", "user_IdAttr", "User_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Espace_Id", "espace_IdAttr", "Espace_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Error_Id", "error_IdAttr", "Error_Id", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Message", "messageAttr", "Message", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Message_Type", "message_TypeAttr", "Message_Type", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Module_Name", "module_NameAttr", "Module_Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Cycle", "cycleAttr", "Cycle", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Request_Key", "request_KeyAttr", "Request_Key", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Entrypoint_Name", "entrypoint_NameAttr", "Entrypoint_Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Action_Name", "action_NameAttr", "Action_Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Client_IP", "client_IPAttr", "Client_IP", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Espace_Name", "espace_NameAttr", "Espace_Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Application_Name", "application_NameAttr", "Application_Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Application_Key", "application_KeyAttr", "Application_Key", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Username", "usernameAttr", "Username", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Log_GeneralRec.init();
return Log_GeneralRec;
})(OS.DataTypes.GenericRecord);
Extension_PlatformLogsModel.Log_GeneralRec = Log_GeneralRec;

});
define("Extension.PlatformLogs.model$Log_GeneralRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.PlatformLogs.model", "Extension.PlatformLogs.model$Log_GeneralRec"], function (exports, OutSystems, Extension_PlatformLogsModel) {
var OS = OutSystems.Internal;
var Log_GeneralRecord = (function (_super) {
__extends(Log_GeneralRecord, _super);
function Log_GeneralRecord(defaults) {
_super.apply(this, arguments);
}
Log_GeneralRecord.attributesToDeclare = function () {
return [
this.attr("Log_General", "log_GeneralAttr", "Log_General", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_PlatformLogsModel.Log_GeneralRec());
}, true, Extension_PlatformLogsModel.Log_GeneralRec)
].concat(_super.attributesToDeclare.call(this));
};
Log_GeneralRecord.fromStructure = function (str) {
return new Log_GeneralRecord(new Log_GeneralRecord.RecordClass({
log_GeneralAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Log_GeneralRecord._isAnonymousRecord = true;
Log_GeneralRecord.UniqueId = "5b94cba6-f524-a02d-40fe-2ac59c24353b";
Log_GeneralRecord.init();
return Log_GeneralRecord;
})(OS.DataTypes.GenericRecord);
Extension_PlatformLogsModel.Log_GeneralRecord = Log_GeneralRecord;

});
define("Extension.PlatformLogs.model$Log_GeneralRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.PlatformLogs.model", "Extension.PlatformLogs.model$Log_GeneralRecord"], function (exports, OutSystems, Extension_PlatformLogsModel) {
var OS = OutSystems.Internal;
var Log_GeneralRecordList = (function (_super) {
__extends(Log_GeneralRecordList, _super);
function Log_GeneralRecordList(defaults) {
_super.apply(this, arguments);
}
Log_GeneralRecordList.itemType = Extension_PlatformLogsModel.Log_GeneralRecord;
return Log_GeneralRecordList;
})(OS.DataTypes.GenericRecordList);
Extension_PlatformLogsModel.Log_GeneralRecordList = Log_GeneralRecordList;

});
define("Extension.PlatformLogs.model$Log_Mobile_Request_PreviousRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.PlatformLogs.model", "Extension.PlatformLogs.model$Log_Mobile_Request_PreviousRec"], function (exports, OutSystems, Extension_PlatformLogsModel) {
var OS = OutSystems.Internal;
var Log_Mobile_Request_PreviousRecord = (function (_super) {
__extends(Log_Mobile_Request_PreviousRecord, _super);
function Log_Mobile_Request_PreviousRecord(defaults) {
_super.apply(this, arguments);
}
Log_Mobile_Request_PreviousRecord.attributesToDeclare = function () {
return [
this.attr("Log_Mobile_Request_Previous", "log_Mobile_Request_PreviousAttr", "Log_Mobile_Request_Previous", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_PlatformLogsModel.Log_Mobile_Request_PreviousRec());
}, true, Extension_PlatformLogsModel.Log_Mobile_Request_PreviousRec)
].concat(_super.attributesToDeclare.call(this));
};
Log_Mobile_Request_PreviousRecord.fromStructure = function (str) {
return new Log_Mobile_Request_PreviousRecord(new Log_Mobile_Request_PreviousRecord.RecordClass({
log_Mobile_Request_PreviousAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Log_Mobile_Request_PreviousRecord._isAnonymousRecord = true;
Log_Mobile_Request_PreviousRecord.UniqueId = "832708f6-56b4-f1d3-5070-c4b98923293e";
Log_Mobile_Request_PreviousRecord.init();
return Log_Mobile_Request_PreviousRecord;
})(OS.DataTypes.GenericRecord);
Extension_PlatformLogsModel.Log_Mobile_Request_PreviousRecord = Log_Mobile_Request_PreviousRecord;

});
define("Extension.PlatformLogs.model$Log_Mobile_Request_PreviousRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.PlatformLogs.model", "Extension.PlatformLogs.model$Log_Mobile_Request_PreviousRecord"], function (exports, OutSystems, Extension_PlatformLogsModel) {
var OS = OutSystems.Internal;
var Log_Mobile_Request_PreviousRecordList = (function (_super) {
__extends(Log_Mobile_Request_PreviousRecordList, _super);
function Log_Mobile_Request_PreviousRecordList(defaults) {
_super.apply(this, arguments);
}
Log_Mobile_Request_PreviousRecordList.itemType = Extension_PlatformLogsModel.Log_Mobile_Request_PreviousRecord;
return Log_Mobile_Request_PreviousRecordList;
})(OS.DataTypes.GenericRecordList);
Extension_PlatformLogsModel.Log_Mobile_Request_PreviousRecordList = Log_Mobile_Request_PreviousRecordList;

});
define("Extension.PlatformLogs.model$Log_Integration_PreviousRec", ["exports", "OutSystems/ClientRuntime/Main", "Extension.PlatformLogs.model"], function (exports, OutSystems, Extension_PlatformLogsModel) {
var OS = OutSystems.Internal;
var Log_Integration_PreviousRec = (function (_super) {
__extends(Log_Integration_PreviousRec, _super);
function Log_Integration_PreviousRec(defaults) {
_super.apply(this, arguments);
}
Log_Integration_PreviousRec.attributesToDeclare = function () {
return [
this.attr("Tenant_Id", "tenant_IdAttr", "Tenant_Id", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Instant", "instantAttr", "Instant", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("Duration", "durationAttr", "Duration", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Source", "sourceAttr", "Source", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Endpoint", "endpointAttr", "Endpoint", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Action", "actionAttr", "Action", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Type", "typeAttr", "Type", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Espace_Id", "espace_IdAttr", "Espace_Id", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Error_Id", "error_IdAttr", "Error_Id", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Executed_by", "executed_byAttr", "Executed_by", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Cycle", "cycleAttr", "Cycle", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Is_Expose", "is_ExposeAttr", "Is_Expose", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Request_Key", "request_KeyAttr", "Request_Key", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Espace_Name", "espace_NameAttr", "Espace_Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Application_Name", "application_NameAttr", "Application_Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Application_Key", "application_KeyAttr", "Application_Key", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Log_Integration_PreviousRec.init();
return Log_Integration_PreviousRec;
})(OS.DataTypes.GenericRecord);
Extension_PlatformLogsModel.Log_Integration_PreviousRec = Log_Integration_PreviousRec;

});
define("Extension.PlatformLogs.model$Log_Integration_PreviousRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.PlatformLogs.model", "Extension.PlatformLogs.model$Log_Integration_PreviousRec"], function (exports, OutSystems, Extension_PlatformLogsModel) {
var OS = OutSystems.Internal;
var Log_Integration_PreviousRecord = (function (_super) {
__extends(Log_Integration_PreviousRecord, _super);
function Log_Integration_PreviousRecord(defaults) {
_super.apply(this, arguments);
}
Log_Integration_PreviousRecord.attributesToDeclare = function () {
return [
this.attr("Log_Integration_Previous", "log_Integration_PreviousAttr", "Log_Integration_Previous", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_PlatformLogsModel.Log_Integration_PreviousRec());
}, true, Extension_PlatformLogsModel.Log_Integration_PreviousRec)
].concat(_super.attributesToDeclare.call(this));
};
Log_Integration_PreviousRecord.fromStructure = function (str) {
return new Log_Integration_PreviousRecord(new Log_Integration_PreviousRecord.RecordClass({
log_Integration_PreviousAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Log_Integration_PreviousRecord._isAnonymousRecord = true;
Log_Integration_PreviousRecord.UniqueId = "da8153ea-e646-6850-1489-5d5696660de5";
Log_Integration_PreviousRecord.init();
return Log_Integration_PreviousRecord;
})(OS.DataTypes.GenericRecord);
Extension_PlatformLogsModel.Log_Integration_PreviousRecord = Log_Integration_PreviousRecord;

});
define("Extension.PlatformLogs.model$Log_Integration_PreviousRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.PlatformLogs.model", "Extension.PlatformLogs.model$Log_Integration_PreviousRecord"], function (exports, OutSystems, Extension_PlatformLogsModel) {
var OS = OutSystems.Internal;
var Log_Integration_PreviousRecordList = (function (_super) {
__extends(Log_Integration_PreviousRecordList, _super);
function Log_Integration_PreviousRecordList(defaults) {
_super.apply(this, arguments);
}
Log_Integration_PreviousRecordList.itemType = Extension_PlatformLogsModel.Log_Integration_PreviousRecord;
return Log_Integration_PreviousRecordList;
})(OS.DataTypes.GenericRecordList);
Extension_PlatformLogsModel.Log_Integration_PreviousRecordList = Log_Integration_PreviousRecordList;

});
define("Extension.PlatformLogs.model$Log_ErrorRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.PlatformLogs.model", "Extension.PlatformLogs.model$Log_ErrorRecord"], function (exports, OutSystems, Extension_PlatformLogsModel) {
var OS = OutSystems.Internal;
var Log_ErrorRecordList = (function (_super) {
__extends(Log_ErrorRecordList, _super);
function Log_ErrorRecordList(defaults) {
_super.apply(this, arguments);
}
Log_ErrorRecordList.itemType = Extension_PlatformLogsModel.Log_ErrorRecord;
return Log_ErrorRecordList;
})(OS.DataTypes.GenericRecordList);
Extension_PlatformLogsModel.Log_ErrorRecordList = Log_ErrorRecordList;

});
define("Extension.PlatformLogs.model$Log_Mobile_Request_DetailRec", ["exports", "OutSystems/ClientRuntime/Main", "Extension.PlatformLogs.model"], function (exports, OutSystems, Extension_PlatformLogsModel) {
var OS = OutSystems.Internal;
var Log_Mobile_Request_DetailRec = (function (_super) {
__extends(Log_Mobile_Request_DetailRec, _super);
function Log_Mobile_Request_DetailRec(defaults) {
_super.apply(this, arguments);
}
Log_Mobile_Request_DetailRec.attributesToDeclare = function () {
return [
this.attr("Tenant_Id", "tenant_IdAttr", "Tenant_Id", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Cycle", "cycleAttr", "Cycle", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Message", "messageAttr", "Message", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Detail", "detailAttr", "Detail", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DetailLabel", "detailLabelAttr", "DetailLabel", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Log_Mobile_Request_DetailRec.init();
return Log_Mobile_Request_DetailRec;
})(OS.DataTypes.GenericRecord);
Extension_PlatformLogsModel.Log_Mobile_Request_DetailRec = Log_Mobile_Request_DetailRec;

});
define("Extension.PlatformLogs.model$Log_Mobile_Request_DetailRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.PlatformLogs.model", "Extension.PlatformLogs.model$Log_Mobile_Request_DetailRec"], function (exports, OutSystems, Extension_PlatformLogsModel) {
var OS = OutSystems.Internal;
var Log_Mobile_Request_DetailRecord = (function (_super) {
__extends(Log_Mobile_Request_DetailRecord, _super);
function Log_Mobile_Request_DetailRecord(defaults) {
_super.apply(this, arguments);
}
Log_Mobile_Request_DetailRecord.attributesToDeclare = function () {
return [
this.attr("Log_Mobile_Request_Detail", "log_Mobile_Request_DetailAttr", "Log_Mobile_Request_Detail", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_PlatformLogsModel.Log_Mobile_Request_DetailRec());
}, true, Extension_PlatformLogsModel.Log_Mobile_Request_DetailRec)
].concat(_super.attributesToDeclare.call(this));
};
Log_Mobile_Request_DetailRecord.fromStructure = function (str) {
return new Log_Mobile_Request_DetailRecord(new Log_Mobile_Request_DetailRecord.RecordClass({
log_Mobile_Request_DetailAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Log_Mobile_Request_DetailRecord._isAnonymousRecord = true;
Log_Mobile_Request_DetailRecord.UniqueId = "62fe9980-16b5-7f4a-528b-0f7da2866314";
Log_Mobile_Request_DetailRecord.init();
return Log_Mobile_Request_DetailRecord;
})(OS.DataTypes.GenericRecord);
Extension_PlatformLogsModel.Log_Mobile_Request_DetailRecord = Log_Mobile_Request_DetailRecord;

});
define("Extension.PlatformLogs.model$Log_General_PreviousRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.PlatformLogs.model", "Extension.PlatformLogs.model$Log_General_PreviousRecord"], function (exports, OutSystems, Extension_PlatformLogsModel) {
var OS = OutSystems.Internal;
var Log_General_PreviousRecordList = (function (_super) {
__extends(Log_General_PreviousRecordList, _super);
function Log_General_PreviousRecordList(defaults) {
_super.apply(this, arguments);
}
Log_General_PreviousRecordList.itemType = Extension_PlatformLogsModel.Log_General_PreviousRecord;
return Log_General_PreviousRecordList;
})(OS.DataTypes.GenericRecordList);
Extension_PlatformLogsModel.Log_General_PreviousRecordList = Log_General_PreviousRecordList;

});
define("Extension.PlatformLogs.model$Log_ServiceAPI_DetailRec", ["exports", "OutSystems/ClientRuntime/Main", "Extension.PlatformLogs.model"], function (exports, OutSystems, Extension_PlatformLogsModel) {
var OS = OutSystems.Internal;
var Log_ServiceAPI_DetailRec = (function (_super) {
__extends(Log_ServiceAPI_DetailRec, _super);
function Log_ServiceAPI_DetailRec(defaults) {
_super.apply(this, arguments);
}
Log_ServiceAPI_DetailRec.attributesToDeclare = function () {
return [
this.attr("Tenant_Id", "tenant_IdAttr", "Tenant_Id", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Message", "messageAttr", "Message", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Detail", "detailAttr", "Detail", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DetailLabel", "detailLabelAttr", "DetailLabel", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Cycle", "cycleAttr", "Cycle", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Log_ServiceAPI_DetailRec.init();
return Log_ServiceAPI_DetailRec;
})(OS.DataTypes.GenericRecord);
Extension_PlatformLogsModel.Log_ServiceAPI_DetailRec = Log_ServiceAPI_DetailRec;

});
define("Extension.PlatformLogs.model$Log_ServiceAPI_DetailRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.PlatformLogs.model", "Extension.PlatformLogs.model$Log_ServiceAPI_DetailRec"], function (exports, OutSystems, Extension_PlatformLogsModel) {
var OS = OutSystems.Internal;
var Log_ServiceAPI_DetailRecord = (function (_super) {
__extends(Log_ServiceAPI_DetailRecord, _super);
function Log_ServiceAPI_DetailRecord(defaults) {
_super.apply(this, arguments);
}
Log_ServiceAPI_DetailRecord.attributesToDeclare = function () {
return [
this.attr("Log_ServiceAPI_Detail", "log_ServiceAPI_DetailAttr", "Log_ServiceAPI_Detail", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_PlatformLogsModel.Log_ServiceAPI_DetailRec());
}, true, Extension_PlatformLogsModel.Log_ServiceAPI_DetailRec)
].concat(_super.attributesToDeclare.call(this));
};
Log_ServiceAPI_DetailRecord.fromStructure = function (str) {
return new Log_ServiceAPI_DetailRecord(new Log_ServiceAPI_DetailRecord.RecordClass({
log_ServiceAPI_DetailAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Log_ServiceAPI_DetailRecord._isAnonymousRecord = true;
Log_ServiceAPI_DetailRecord.UniqueId = "681f76b9-3a0c-a82e-f588-debfa6783041";
Log_ServiceAPI_DetailRecord.init();
return Log_ServiceAPI_DetailRecord;
})(OS.DataTypes.GenericRecord);
Extension_PlatformLogsModel.Log_ServiceAPI_DetailRecord = Log_ServiceAPI_DetailRecord;

});
define("Extension.PlatformLogs.model$Log_RequestEventRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.PlatformLogs.model", "Extension.PlatformLogs.model$Log_RequestEventRec"], function (exports, OutSystems, Extension_PlatformLogsModel) {
var OS = OutSystems.Internal;
var Log_RequestEventRecord = (function (_super) {
__extends(Log_RequestEventRecord, _super);
function Log_RequestEventRecord(defaults) {
_super.apply(this, arguments);
}
Log_RequestEventRecord.attributesToDeclare = function () {
return [
this.attr("Log_RequestEvent", "log_RequestEventAttr", "Log_RequestEvent", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_PlatformLogsModel.Log_RequestEventRec());
}, true, Extension_PlatformLogsModel.Log_RequestEventRec)
].concat(_super.attributesToDeclare.call(this));
};
Log_RequestEventRecord.fromStructure = function (str) {
return new Log_RequestEventRecord(new Log_RequestEventRecord.RecordClass({
log_RequestEventAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Log_RequestEventRecord._isAnonymousRecord = true;
Log_RequestEventRecord.UniqueId = "f070f615-3821-a618-0b59-996e2acd31e3";
Log_RequestEventRecord.init();
return Log_RequestEventRecord;
})(OS.DataTypes.GenericRecord);
Extension_PlatformLogsModel.Log_RequestEventRecord = Log_RequestEventRecord;

});
define("Extension.PlatformLogs.model$Log_RequestEventRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.PlatformLogs.model", "Extension.PlatformLogs.model$Log_RequestEventRecord"], function (exports, OutSystems, Extension_PlatformLogsModel) {
var OS = OutSystems.Internal;
var Log_RequestEventRecordList = (function (_super) {
__extends(Log_RequestEventRecordList, _super);
function Log_RequestEventRecordList(defaults) {
_super.apply(this, arguments);
}
Log_RequestEventRecordList.itemType = Extension_PlatformLogsModel.Log_RequestEventRecord;
return Log_RequestEventRecordList;
})(OS.DataTypes.GenericRecordList);
Extension_PlatformLogsModel.Log_RequestEventRecordList = Log_RequestEventRecordList;

});
define("Extension.PlatformLogs.model$Log_RequestEvent_PreviousRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.PlatformLogs.model", "Extension.PlatformLogs.model$Log_RequestEvent_PreviousRec"], function (exports, OutSystems, Extension_PlatformLogsModel) {
var OS = OutSystems.Internal;
var Log_RequestEvent_PreviousRecord = (function (_super) {
__extends(Log_RequestEvent_PreviousRecord, _super);
function Log_RequestEvent_PreviousRecord(defaults) {
_super.apply(this, arguments);
}
Log_RequestEvent_PreviousRecord.attributesToDeclare = function () {
return [
this.attr("Log_RequestEvent_Previous", "log_RequestEvent_PreviousAttr", "Log_RequestEvent_Previous", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_PlatformLogsModel.Log_RequestEvent_PreviousRec());
}, true, Extension_PlatformLogsModel.Log_RequestEvent_PreviousRec)
].concat(_super.attributesToDeclare.call(this));
};
Log_RequestEvent_PreviousRecord.fromStructure = function (str) {
return new Log_RequestEvent_PreviousRecord(new Log_RequestEvent_PreviousRecord.RecordClass({
log_RequestEvent_PreviousAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Log_RequestEvent_PreviousRecord._isAnonymousRecord = true;
Log_RequestEvent_PreviousRecord.UniqueId = "7a566e7c-07c6-aca1-7268-3d32dcd3cf90";
Log_RequestEvent_PreviousRecord.init();
return Log_RequestEvent_PreviousRecord;
})(OS.DataTypes.GenericRecord);
Extension_PlatformLogsModel.Log_RequestEvent_PreviousRecord = Log_RequestEvent_PreviousRecord;

});
define("Extension.PlatformLogs.model$Log_ExtensionRec", ["exports", "OutSystems/ClientRuntime/Main", "Extension.PlatformLogs.model"], function (exports, OutSystems, Extension_PlatformLogsModel) {
var OS = OutSystems.Internal;
var Log_ExtensionRec = (function (_super) {
__extends(Log_ExtensionRec, _super);
function Log_ExtensionRec(defaults) {
_super.apply(this, arguments);
}
Log_ExtensionRec.attributesToDeclare = function () {
return [
this.attr("Tenant_Id", "tenant_IdAttr", "Tenant_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Instant", "instantAttr", "Instant", true, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("Duration", "durationAttr", "Duration", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Action_Name", "action_NameAttr", "Action_Name", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Session_Id", "session_IdAttr", "Session_Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("User_Id", "user_IdAttr", "User_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Espace_Id", "espace_IdAttr", "Espace_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Extension_Id", "extension_IdAttr", "Extension_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Executed_By", "executed_ByAttr", "Executed_By", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Error_Id", "error_IdAttr", "Error_Id", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Cycle", "cycleAttr", "Cycle", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Request_Key", "request_KeyAttr", "Request_Key", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Espace_Name", "espace_NameAttr", "Espace_Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Extension_Name", "extension_NameAttr", "Extension_Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Application_Name", "application_NameAttr", "Application_Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Application_Key", "application_KeyAttr", "Application_Key", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Username", "usernameAttr", "Username", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Log_ExtensionRec.init();
return Log_ExtensionRec;
})(OS.DataTypes.GenericRecord);
Extension_PlatformLogsModel.Log_ExtensionRec = Log_ExtensionRec;

});
define("Extension.PlatformLogs.model$Log_ExtensionRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.PlatformLogs.model", "Extension.PlatformLogs.model$Log_ExtensionRec"], function (exports, OutSystems, Extension_PlatformLogsModel) {
var OS = OutSystems.Internal;
var Log_ExtensionRecord = (function (_super) {
__extends(Log_ExtensionRecord, _super);
function Log_ExtensionRecord(defaults) {
_super.apply(this, arguments);
}
Log_ExtensionRecord.attributesToDeclare = function () {
return [
this.attr("Log_Extension", "log_ExtensionAttr", "Log_Extension", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_PlatformLogsModel.Log_ExtensionRec());
}, true, Extension_PlatformLogsModel.Log_ExtensionRec)
].concat(_super.attributesToDeclare.call(this));
};
Log_ExtensionRecord.fromStructure = function (str) {
return new Log_ExtensionRecord(new Log_ExtensionRecord.RecordClass({
log_ExtensionAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Log_ExtensionRecord._isAnonymousRecord = true;
Log_ExtensionRecord.UniqueId = "c4355f02-1445-05f9-161a-d0cedcd43bcd";
Log_ExtensionRecord.init();
return Log_ExtensionRecord;
})(OS.DataTypes.GenericRecord);
Extension_PlatformLogsModel.Log_ExtensionRecord = Log_ExtensionRecord;

});
define("Extension.PlatformLogs.model$Log_ExtensionRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.PlatformLogs.model", "Extension.PlatformLogs.model$Log_ExtensionRecord"], function (exports, OutSystems, Extension_PlatformLogsModel) {
var OS = OutSystems.Internal;
var Log_ExtensionRecordList = (function (_super) {
__extends(Log_ExtensionRecordList, _super);
function Log_ExtensionRecordList(defaults) {
_super.apply(this, arguments);
}
Log_ExtensionRecordList.itemType = Extension_PlatformLogsModel.Log_ExtensionRecord;
return Log_ExtensionRecordList;
})(OS.DataTypes.GenericRecordList);
Extension_PlatformLogsModel.Log_ExtensionRecordList = Log_ExtensionRecordList;

});
define("Extension.PlatformLogs.model$Log_Integration_DetailRec", ["exports", "OutSystems/ClientRuntime/Main", "Extension.PlatformLogs.model"], function (exports, OutSystems, Extension_PlatformLogsModel) {
var OS = OutSystems.Internal;
var Log_Integration_DetailRec = (function (_super) {
__extends(Log_Integration_DetailRec, _super);
function Log_Integration_DetailRec(defaults) {
_super.apply(this, arguments);
}
Log_Integration_DetailRec.attributesToDeclare = function () {
return [
this.attr("Tenant_Id", "tenant_IdAttr", "Tenant_Id", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Cycle", "cycleAttr", "Cycle", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Message", "messageAttr", "Message", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Detail", "detailAttr", "Detail", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DetailLabel", "detailLabelAttr", "DetailLabel", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Log_Integration_DetailRec.init();
return Log_Integration_DetailRec;
})(OS.DataTypes.GenericRecord);
Extension_PlatformLogsModel.Log_Integration_DetailRec = Log_Integration_DetailRec;

});
define("Extension.PlatformLogs.model$Log_Integration_DetailRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.PlatformLogs.model", "Extension.PlatformLogs.model$Log_Integration_DetailRec"], function (exports, OutSystems, Extension_PlatformLogsModel) {
var OS = OutSystems.Internal;
var Log_Integration_DetailRecord = (function (_super) {
__extends(Log_Integration_DetailRecord, _super);
function Log_Integration_DetailRecord(defaults) {
_super.apply(this, arguments);
}
Log_Integration_DetailRecord.attributesToDeclare = function () {
return [
this.attr("Log_Integration_Detail", "log_Integration_DetailAttr", "Log_Integration_Detail", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_PlatformLogsModel.Log_Integration_DetailRec());
}, true, Extension_PlatformLogsModel.Log_Integration_DetailRec)
].concat(_super.attributesToDeclare.call(this));
};
Log_Integration_DetailRecord.fromStructure = function (str) {
return new Log_Integration_DetailRecord(new Log_Integration_DetailRecord.RecordClass({
log_Integration_DetailAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Log_Integration_DetailRecord._isAnonymousRecord = true;
Log_Integration_DetailRecord.UniqueId = "8b8c7d4d-4383-852c-da28-b185cfc243a6";
Log_Integration_DetailRecord.init();
return Log_Integration_DetailRecord;
})(OS.DataTypes.GenericRecord);
Extension_PlatformLogsModel.Log_Integration_DetailRecord = Log_Integration_DetailRecord;

});
define("Extension.PlatformLogs.model$Log_Web_Reference_PreviousRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.PlatformLogs.model", "Extension.PlatformLogs.model$Log_Web_Reference_PreviousRecord"], function (exports, OutSystems, Extension_PlatformLogsModel) {
var OS = OutSystems.Internal;
var Log_Web_Reference_PreviousRecordList = (function (_super) {
__extends(Log_Web_Reference_PreviousRecordList, _super);
function Log_Web_Reference_PreviousRecordList(defaults) {
_super.apply(this, arguments);
}
Log_Web_Reference_PreviousRecordList.itemType = Extension_PlatformLogsModel.Log_Web_Reference_PreviousRecord;
return Log_Web_Reference_PreviousRecordList;
})(OS.DataTypes.GenericRecordList);
Extension_PlatformLogsModel.Log_Web_Reference_PreviousRecordList = Log_Web_Reference_PreviousRecordList;

});
define("Extension.PlatformLogs.model$Log_Web_ReferenceRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.PlatformLogs.model", "Extension.PlatformLogs.model$Log_Web_ReferenceRecord"], function (exports, OutSystems, Extension_PlatformLogsModel) {
var OS = OutSystems.Internal;
var Log_Web_ReferenceRecordList = (function (_super) {
__extends(Log_Web_ReferenceRecordList, _super);
function Log_Web_ReferenceRecordList(defaults) {
_super.apply(this, arguments);
}
Log_Web_ReferenceRecordList.itemType = Extension_PlatformLogsModel.Log_Web_ReferenceRecord;
return Log_Web_ReferenceRecordList;
})(OS.DataTypes.GenericRecordList);
Extension_PlatformLogsModel.Log_Web_ReferenceRecordList = Log_Web_ReferenceRecordList;

});
define("Extension.PlatformLogs.model$Log_ScreenRec", ["exports", "OutSystems/ClientRuntime/Main", "Extension.PlatformLogs.model"], function (exports, OutSystems, Extension_PlatformLogsModel) {
var OS = OutSystems.Internal;
var Log_ScreenRec = (function (_super) {
__extends(Log_ScreenRec, _super);
function Log_ScreenRec(defaults) {
_super.apply(this, arguments);
}
Log_ScreenRec.attributesToDeclare = function () {
return [
this.attr("Tenant_Id", "tenant_IdAttr", "Tenant_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Instant", "instantAttr", "Instant", true, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("Duration", "durationAttr", "Duration", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Screen", "screenAttr", "Screen", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Session_Id", "session_IdAttr", "Session_Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("User_Id", "user_IdAttr", "User_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Espace_Id", "espace_IdAttr", "Espace_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Msisdn", "msisdnAttr", "Msisdn", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Screen_Type", "screen_TypeAttr", "Screen_Type", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Cycle", "cycleAttr", "Cycle", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Executed_By", "executed_ByAttr", "Executed_By", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Session_Bytes", "session_BytesAttr", "Session_Bytes", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Viewstate_Bytes", "viewstate_BytesAttr", "Viewstate_Bytes", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Session_Requests", "session_RequestsAttr", "Session_Requests", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Access_Mode", "access_ModeAttr", "Access_Mode", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Request_Key", "request_KeyAttr", "Request_Key", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Action_Name", "action_NameAttr", "Action_Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Client_IP", "client_IPAttr", "Client_IP", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Espace_Name", "espace_NameAttr", "Espace_Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Application_Name", "application_NameAttr", "Application_Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Application_Key", "application_KeyAttr", "Application_Key", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Username", "usernameAttr", "Username", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Log_ScreenRec.init();
return Log_ScreenRec;
})(OS.DataTypes.GenericRecord);
Extension_PlatformLogsModel.Log_ScreenRec = Log_ScreenRec;

});
define("Extension.PlatformLogs.model$Log_ScreenRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.PlatformLogs.model", "Extension.PlatformLogs.model$Log_ScreenRec"], function (exports, OutSystems, Extension_PlatformLogsModel) {
var OS = OutSystems.Internal;
var Log_ScreenRecord = (function (_super) {
__extends(Log_ScreenRecord, _super);
function Log_ScreenRecord(defaults) {
_super.apply(this, arguments);
}
Log_ScreenRecord.attributesToDeclare = function () {
return [
this.attr("Log_Screen", "log_ScreenAttr", "Log_Screen", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_PlatformLogsModel.Log_ScreenRec());
}, true, Extension_PlatformLogsModel.Log_ScreenRec)
].concat(_super.attributesToDeclare.call(this));
};
Log_ScreenRecord.fromStructure = function (str) {
return new Log_ScreenRecord(new Log_ScreenRecord.RecordClass({
log_ScreenAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Log_ScreenRecord._isAnonymousRecord = true;
Log_ScreenRecord.UniqueId = "92ab8940-78cb-534c-361f-887553f171a2";
Log_ScreenRecord.init();
return Log_ScreenRecord;
})(OS.DataTypes.GenericRecord);
Extension_PlatformLogsModel.Log_ScreenRecord = Log_ScreenRecord;

});
define("Extension.PlatformLogs.model$Log_IntegrationRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.PlatformLogs.model", "Extension.PlatformLogs.model$Log_IntegrationRecord"], function (exports, OutSystems, Extension_PlatformLogsModel) {
var OS = OutSystems.Internal;
var Log_IntegrationRecordList = (function (_super) {
__extends(Log_IntegrationRecordList, _super);
function Log_IntegrationRecordList(defaults) {
_super.apply(this, arguments);
}
Log_IntegrationRecordList.itemType = Extension_PlatformLogsModel.Log_IntegrationRecord;
return Log_IntegrationRecordList;
})(OS.DataTypes.GenericRecordList);
Extension_PlatformLogsModel.Log_IntegrationRecordList = Log_IntegrationRecordList;

});
define("Extension.PlatformLogs.model$Log_ServiceAPI_DetailRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.PlatformLogs.model", "Extension.PlatformLogs.model$Log_ServiceAPI_DetailRecord"], function (exports, OutSystems, Extension_PlatformLogsModel) {
var OS = OutSystems.Internal;
var Log_ServiceAPI_DetailRecordList = (function (_super) {
__extends(Log_ServiceAPI_DetailRecordList, _super);
function Log_ServiceAPI_DetailRecordList(defaults) {
_super.apply(this, arguments);
}
Log_ServiceAPI_DetailRecordList.itemType = Extension_PlatformLogsModel.Log_ServiceAPI_DetailRecord;
return Log_ServiceAPI_DetailRecordList;
})(OS.DataTypes.GenericRecordList);
Extension_PlatformLogsModel.Log_ServiceAPI_DetailRecordList = Log_ServiceAPI_DetailRecordList;

});
define("Extension.PlatformLogs.model$Log_Screen_PreviousRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.PlatformLogs.model", "Extension.PlatformLogs.model$Log_Screen_PreviousRecord"], function (exports, OutSystems, Extension_PlatformLogsModel) {
var OS = OutSystems.Internal;
var Log_Screen_PreviousRecordList = (function (_super) {
__extends(Log_Screen_PreviousRecordList, _super);
function Log_Screen_PreviousRecordList(defaults) {
_super.apply(this, arguments);
}
Log_Screen_PreviousRecordList.itemType = Extension_PlatformLogsModel.Log_Screen_PreviousRecord;
return Log_Screen_PreviousRecordList;
})(OS.DataTypes.GenericRecordList);
Extension_PlatformLogsModel.Log_Screen_PreviousRecordList = Log_Screen_PreviousRecordList;

});
define("Extension.PlatformLogs.model$Log_RequestEvent_PreviousRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.PlatformLogs.model", "Extension.PlatformLogs.model$Log_RequestEvent_PreviousRecord"], function (exports, OutSystems, Extension_PlatformLogsModel) {
var OS = OutSystems.Internal;
var Log_RequestEvent_PreviousRecordList = (function (_super) {
__extends(Log_RequestEvent_PreviousRecordList, _super);
function Log_RequestEvent_PreviousRecordList(defaults) {
_super.apply(this, arguments);
}
Log_RequestEvent_PreviousRecordList.itemType = Extension_PlatformLogsModel.Log_RequestEvent_PreviousRecord;
return Log_RequestEvent_PreviousRecordList;
})(OS.DataTypes.GenericRecordList);
Extension_PlatformLogsModel.Log_RequestEvent_PreviousRecordList = Log_RequestEvent_PreviousRecordList;

});
define("Extension.PlatformLogs.model$Log_ServiceAPIRec", ["exports", "OutSystems/ClientRuntime/Main", "Extension.PlatformLogs.model"], function (exports, OutSystems, Extension_PlatformLogsModel) {
var OS = OutSystems.Internal;
var Log_ServiceAPIRec = (function (_super) {
__extends(Log_ServiceAPIRec, _super);
function Log_ServiceAPIRec(defaults) {
_super.apply(this, arguments);
}
Log_ServiceAPIRec.attributesToDeclare = function () {
return [
this.attr("Tenant_Id", "tenant_IdAttr", "Tenant_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Instant", "instantAttr", "Instant", true, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("User_Id", "user_IdAttr", "User_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Login_Id", "login_IdAttr", "Login_Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Session_Id", "session_IdAttr", "Session_Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Espace_Id", "espace_IdAttr", "Espace_Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Error_Id", "error_IdAttr", "Error_Id", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Executed_by", "executed_byAttr", "Executed_by", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Request_Key", "request_KeyAttr", "Request_Key", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Entrypoint_Name", "entrypoint_NameAttr", "Entrypoint_Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Action", "actionAttr", "Action", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Cycle", "cycleAttr", "Cycle", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Duration", "durationAttr", "Duration", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Source", "sourceAttr", "Source", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Endpoint", "endpointAttr", "Endpoint", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Espace_Name", "espace_NameAttr", "Espace_Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Application_Name", "application_NameAttr", "Application_Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Application_Key", "application_KeyAttr", "Application_Key", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Username", "usernameAttr", "Username", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Original_Request_Key", "original_Request_KeyAttr", "Original_Request_Key", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Log_ServiceAPIRec.init();
return Log_ServiceAPIRec;
})(OS.DataTypes.GenericRecord);
Extension_PlatformLogsModel.Log_ServiceAPIRec = Log_ServiceAPIRec;

});
define("Extension.PlatformLogs.model$Log_Web_ServiceRec", ["exports", "OutSystems/ClientRuntime/Main", "Extension.PlatformLogs.model"], function (exports, OutSystems, Extension_PlatformLogsModel) {
var OS = OutSystems.Internal;
var Log_Web_ServiceRec = (function (_super) {
__extends(Log_Web_ServiceRec, _super);
function Log_Web_ServiceRec(defaults) {
_super.apply(this, arguments);
}
Log_Web_ServiceRec.attributesToDeclare = function () {
return [
this.attr("Tenant_Id", "tenant_IdAttr", "Tenant_Id", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Instant", "instantAttr", "Instant", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("Duration", "durationAttr", "Duration", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Name", "nameAttr", "Name", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Method", "methodAttr", "Method", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Espace_Id", "espace_IdAttr", "Espace_Id", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Client_IP", "client_IPAttr", "Client_IP", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Executed_by", "executed_byAttr", "Executed_by", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Error_Id", "error_IdAttr", "Error_Id", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Cycle", "cycleAttr", "Cycle", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Log_Web_ServiceRec.init();
return Log_Web_ServiceRec;
})(OS.DataTypes.GenericRecord);
Extension_PlatformLogsModel.Log_Web_ServiceRec = Log_Web_ServiceRec;

});
define("Extension.PlatformLogs.model$Log_ScreenRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.PlatformLogs.model", "Extension.PlatformLogs.model$Log_ScreenRecord"], function (exports, OutSystems, Extension_PlatformLogsModel) {
var OS = OutSystems.Internal;
var Log_ScreenRecordList = (function (_super) {
__extends(Log_ScreenRecordList, _super);
function Log_ScreenRecordList(defaults) {
_super.apply(this, arguments);
}
Log_ScreenRecordList.itemType = Extension_PlatformLogsModel.Log_ScreenRecord;
return Log_ScreenRecordList;
})(OS.DataTypes.GenericRecordList);
Extension_PlatformLogsModel.Log_ScreenRecordList = Log_ScreenRecordList;

});
define("Extension.PlatformLogs.model$Log_Integration_DetailRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.PlatformLogs.model", "Extension.PlatformLogs.model$Log_Integration_DetailRecord"], function (exports, OutSystems, Extension_PlatformLogsModel) {
var OS = OutSystems.Internal;
var Log_Integration_DetailRecordList = (function (_super) {
__extends(Log_Integration_DetailRecordList, _super);
function Log_Integration_DetailRecordList(defaults) {
_super.apply(this, arguments);
}
Log_Integration_DetailRecordList.itemType = Extension_PlatformLogsModel.Log_Integration_DetailRecord;
return Log_Integration_DetailRecordList;
})(OS.DataTypes.GenericRecordList);
Extension_PlatformLogsModel.Log_Integration_DetailRecordList = Log_Integration_DetailRecordList;

});
define("Extension.PlatformLogs.model$Log_Cyclic_JobRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.PlatformLogs.model", "Extension.PlatformLogs.model$Log_Cyclic_JobRecord"], function (exports, OutSystems, Extension_PlatformLogsModel) {
var OS = OutSystems.Internal;
var Log_Cyclic_JobRecordList = (function (_super) {
__extends(Log_Cyclic_JobRecordList, _super);
function Log_Cyclic_JobRecordList(defaults) {
_super.apply(this, arguments);
}
Log_Cyclic_JobRecordList.itemType = Extension_PlatformLogsModel.Log_Cyclic_JobRecord;
return Log_Cyclic_JobRecordList;
})(OS.DataTypes.GenericRecordList);
Extension_PlatformLogsModel.Log_Cyclic_JobRecordList = Log_Cyclic_JobRecordList;

});
define("Extension.PlatformLogs.model$Log_Extension_PreviousRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.PlatformLogs.model", "Extension.PlatformLogs.model$Log_Extension_PreviousRecord"], function (exports, OutSystems, Extension_PlatformLogsModel) {
var OS = OutSystems.Internal;
var Log_Extension_PreviousRecordList = (function (_super) {
__extends(Log_Extension_PreviousRecordList, _super);
function Log_Extension_PreviousRecordList(defaults) {
_super.apply(this, arguments);
}
Log_Extension_PreviousRecordList.itemType = Extension_PlatformLogsModel.Log_Extension_PreviousRecord;
return Log_Extension_PreviousRecordList;
})(OS.DataTypes.GenericRecordList);
Extension_PlatformLogsModel.Log_Extension_PreviousRecordList = Log_Extension_PreviousRecordList;

});
define("Extension.PlatformLogs.model$Log_ServiceAPI_PreviousRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.PlatformLogs.model", "Extension.PlatformLogs.model$Log_ServiceAPI_PreviousRecord"], function (exports, OutSystems, Extension_PlatformLogsModel) {
var OS = OutSystems.Internal;
var Log_ServiceAPI_PreviousRecordList = (function (_super) {
__extends(Log_ServiceAPI_PreviousRecordList, _super);
function Log_ServiceAPI_PreviousRecordList(defaults) {
_super.apply(this, arguments);
}
Log_ServiceAPI_PreviousRecordList.itemType = Extension_PlatformLogsModel.Log_ServiceAPI_PreviousRecord;
return Log_ServiceAPI_PreviousRecordList;
})(OS.DataTypes.GenericRecordList);
Extension_PlatformLogsModel.Log_ServiceAPI_PreviousRecordList = Log_ServiceAPI_PreviousRecordList;

});
define("Extension.PlatformLogs.model$Log_ServiceAPIRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.PlatformLogs.model", "Extension.PlatformLogs.model$Log_ServiceAPIRec"], function (exports, OutSystems, Extension_PlatformLogsModel) {
var OS = OutSystems.Internal;
var Log_ServiceAPIRecord = (function (_super) {
__extends(Log_ServiceAPIRecord, _super);
function Log_ServiceAPIRecord(defaults) {
_super.apply(this, arguments);
}
Log_ServiceAPIRecord.attributesToDeclare = function () {
return [
this.attr("Log_ServiceAPI", "log_ServiceAPIAttr", "Log_ServiceAPI", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_PlatformLogsModel.Log_ServiceAPIRec());
}, true, Extension_PlatformLogsModel.Log_ServiceAPIRec)
].concat(_super.attributesToDeclare.call(this));
};
Log_ServiceAPIRecord.fromStructure = function (str) {
return new Log_ServiceAPIRecord(new Log_ServiceAPIRecord.RecordClass({
log_ServiceAPIAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Log_ServiceAPIRecord._isAnonymousRecord = true;
Log_ServiceAPIRecord.UniqueId = "eeae0ae9-16c5-4c18-6e99-5010041256f9";
Log_ServiceAPIRecord.init();
return Log_ServiceAPIRecord;
})(OS.DataTypes.GenericRecord);
Extension_PlatformLogsModel.Log_ServiceAPIRecord = Log_ServiceAPIRecord;

});
define("Extension.PlatformLogs.model$Log_ServiceAPIRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.PlatformLogs.model", "Extension.PlatformLogs.model$Log_ServiceAPIRecord"], function (exports, OutSystems, Extension_PlatformLogsModel) {
var OS = OutSystems.Internal;
var Log_ServiceAPIRecordList = (function (_super) {
__extends(Log_ServiceAPIRecordList, _super);
function Log_ServiceAPIRecordList(defaults) {
_super.apply(this, arguments);
}
Log_ServiceAPIRecordList.itemType = Extension_PlatformLogsModel.Log_ServiceAPIRecord;
return Log_ServiceAPIRecordList;
})(OS.DataTypes.GenericRecordList);
Extension_PlatformLogsModel.Log_ServiceAPIRecordList = Log_ServiceAPIRecordList;

});
define("Extension.PlatformLogs.model$Log_Web_Service_PreviousRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.PlatformLogs.model", "Extension.PlatformLogs.model$Log_Web_Service_PreviousRecord"], function (exports, OutSystems, Extension_PlatformLogsModel) {
var OS = OutSystems.Internal;
var Log_Web_Service_PreviousRecordList = (function (_super) {
__extends(Log_Web_Service_PreviousRecordList, _super);
function Log_Web_Service_PreviousRecordList(defaults) {
_super.apply(this, arguments);
}
Log_Web_Service_PreviousRecordList.itemType = Extension_PlatformLogsModel.Log_Web_Service_PreviousRecord;
return Log_Web_Service_PreviousRecordList;
})(OS.DataTypes.GenericRecordList);
Extension_PlatformLogsModel.Log_Web_Service_PreviousRecordList = Log_Web_Service_PreviousRecordList;

});
define("Extension.PlatformLogs.model$Log_Web_ServiceRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.PlatformLogs.model", "Extension.PlatformLogs.model$Log_Web_ServiceRec"], function (exports, OutSystems, Extension_PlatformLogsModel) {
var OS = OutSystems.Internal;
var Log_Web_ServiceRecord = (function (_super) {
__extends(Log_Web_ServiceRecord, _super);
function Log_Web_ServiceRecord(defaults) {
_super.apply(this, arguments);
}
Log_Web_ServiceRecord.attributesToDeclare = function () {
return [
this.attr("Log_Web_Service", "log_Web_ServiceAttr", "Log_Web_Service", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_PlatformLogsModel.Log_Web_ServiceRec());
}, true, Extension_PlatformLogsModel.Log_Web_ServiceRec)
].concat(_super.attributesToDeclare.call(this));
};
Log_Web_ServiceRecord.fromStructure = function (str) {
return new Log_Web_ServiceRecord(new Log_Web_ServiceRecord.RecordClass({
log_Web_ServiceAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Log_Web_ServiceRecord._isAnonymousRecord = true;
Log_Web_ServiceRecord.UniqueId = "daeb3345-a729-0aaa-a39b-353214740160";
Log_Web_ServiceRecord.init();
return Log_Web_ServiceRecord;
})(OS.DataTypes.GenericRecord);
Extension_PlatformLogsModel.Log_Web_ServiceRecord = Log_Web_ServiceRecord;

});
define("Extension.PlatformLogs.model$Log_Web_ServiceRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.PlatformLogs.model", "Extension.PlatformLogs.model$Log_Web_ServiceRecord"], function (exports, OutSystems, Extension_PlatformLogsModel) {
var OS = OutSystems.Internal;
var Log_Web_ServiceRecordList = (function (_super) {
__extends(Log_Web_ServiceRecordList, _super);
function Log_Web_ServiceRecordList(defaults) {
_super.apply(this, arguments);
}
Log_Web_ServiceRecordList.itemType = Extension_PlatformLogsModel.Log_Web_ServiceRecord;
return Log_Web_ServiceRecordList;
})(OS.DataTypes.GenericRecordList);
Extension_PlatformLogsModel.Log_Web_ServiceRecordList = Log_Web_ServiceRecordList;

});
define("Extension.PlatformLogs.model$Log_Cyclic_Job_PreviousRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.PlatformLogs.model", "Extension.PlatformLogs.model$Log_Cyclic_Job_PreviousRecord"], function (exports, OutSystems, Extension_PlatformLogsModel) {
var OS = OutSystems.Internal;
var Log_Cyclic_Job_PreviousRecordList = (function (_super) {
__extends(Log_Cyclic_Job_PreviousRecordList, _super);
function Log_Cyclic_Job_PreviousRecordList(defaults) {
_super.apply(this, arguments);
}
Log_Cyclic_Job_PreviousRecordList.itemType = Extension_PlatformLogsModel.Log_Cyclic_Job_PreviousRecord;
return Log_Cyclic_Job_PreviousRecordList;
})(OS.DataTypes.GenericRecordList);
Extension_PlatformLogsModel.Log_Cyclic_Job_PreviousRecordList = Log_Cyclic_Job_PreviousRecordList;

});
define("Extension.PlatformLogs.model$Log_Mobile_Request_DetailRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.PlatformLogs.model", "Extension.PlatformLogs.model$Log_Mobile_Request_DetailRecord"], function (exports, OutSystems, Extension_PlatformLogsModel) {
var OS = OutSystems.Internal;
var Log_Mobile_Request_DetailRecordList = (function (_super) {
__extends(Log_Mobile_Request_DetailRecordList, _super);
function Log_Mobile_Request_DetailRecordList(defaults) {
_super.apply(this, arguments);
}
Log_Mobile_Request_DetailRecordList.itemType = Extension_PlatformLogsModel.Log_Mobile_Request_DetailRecord;
return Log_Mobile_Request_DetailRecordList;
})(OS.DataTypes.GenericRecordList);
Extension_PlatformLogsModel.Log_Mobile_Request_DetailRecordList = Log_Mobile_Request_DetailRecordList;

});
define("Extension.PlatformLogs.model", ["exports", "OutSystems/ClientRuntime/Main"], function (exports, OutSystems) {
var OS = OutSystems.Internal;
var Extension_PlatformLogsModel = exports;
});
