define("Extension.SAMLAuthentication.model$TextRec", ["exports", "OutSystems/ClientRuntime/Main", "Extension.SAMLAuthentication.model"], function (exports, OutSystems, Extension_SAMLAuthenticationModel) {
var OS = OutSystems.Internal;
var TextRec = (function (_super) {
__extends(TextRec, _super);
function TextRec(defaults) {
_super.apply(this, arguments);
}
TextRec.attributesToDeclare = function () {
return [
this.attr("Value", "valueAttr", "Value", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
TextRec.fromStructure = function (str) {
return new TextRec(new TextRec.RecordClass({
valueAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
TextRec.init();
return TextRec;
})(OS.DataTypes.GenericRecord);
Extension_SAMLAuthenticationModel.TextRec = TextRec;

});
define("Extension.SAMLAuthentication.model$SAMLValidationRec", ["exports", "OutSystems/ClientRuntime/Main", "Extension.SAMLAuthentication.model"], function (exports, OutSystems, Extension_SAMLAuthenticationModel) {
var OS = OutSystems.Internal;
var SAMLValidationRec = (function (_super) {
__extends(SAMLValidationRec, _super);
function SAMLValidationRec(defaults) {
_super.apply(this, arguments);
}
SAMLValidationRec.attributesToDeclare = function () {
return [
this.attr("Success", "successAttr", "Success", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Error", "errorAttr", "Error", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
SAMLValidationRec.init();
return SAMLValidationRec;
})(OS.DataTypes.GenericRecord);
Extension_SAMLAuthenticationModel.SAMLValidationRec = SAMLValidationRec;

});
define("Extension.SAMLAuthentication.model$TextRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.SAMLAuthentication.model", "Extension.SAMLAuthentication.model$TextRec"], function (exports, OutSystems, Extension_SAMLAuthenticationModel) {
var OS = OutSystems.Internal;
var TextRecord = (function (_super) {
__extends(TextRecord, _super);
function TextRecord(defaults) {
_super.apply(this, arguments);
}
TextRecord.attributesToDeclare = function () {
return [
this.attr("Text", "textAttr", "Text", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_SAMLAuthenticationModel.TextRec());
}, true, Extension_SAMLAuthenticationModel.TextRec)
].concat(_super.attributesToDeclare.call(this));
};
TextRecord.fromStructure = function (str) {
return new TextRecord(new TextRecord.RecordClass({
textAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
TextRecord._isAnonymousRecord = true;
TextRecord.UniqueId = "38dc292d-60da-7fe1-c1b8-04b8ca79611f";
TextRecord.init();
return TextRecord;
})(OS.DataTypes.GenericRecord);
Extension_SAMLAuthenticationModel.TextRecord = TextRecord;

});
define("Extension.SAMLAuthentication.model$TextRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.SAMLAuthentication.model", "Extension.SAMLAuthentication.model$TextRecord"], function (exports, OutSystems, Extension_SAMLAuthenticationModel) {
var OS = OutSystems.Internal;
var TextRecordList = (function (_super) {
__extends(TextRecordList, _super);
function TextRecordList(defaults) {
_super.apply(this, arguments);
}
TextRecordList.itemType = Extension_SAMLAuthenticationModel.TextRecord;
return TextRecordList;
})(OS.DataTypes.GenericRecordList);
Extension_SAMLAuthenticationModel.TextRecordList = TextRecordList;

});
define("Extension.SAMLAuthentication.model$LogoutResponseRec", ["exports", "OutSystems/ClientRuntime/Main", "Extension.SAMLAuthentication.model"], function (exports, OutSystems, Extension_SAMLAuthenticationModel) {
var OS = OutSystems.Internal;
var LogoutResponseRec = (function (_super) {
__extends(LogoutResponseRec, _super);
function LogoutResponseRec(defaults) {
_super.apply(this, arguments);
}
LogoutResponseRec.attributesToDeclare = function () {
return [
this.attr("RequestId", "requestIdAttr", "RequestId", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Success", "successAttr", "Success", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Partial", "partialAttr", "Partial", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("ReasonError", "reasonErrorAttr", "ReasonError", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IssueInstant", "issueInstantAttr", "IssueInstant", true, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("ResponseToMessageId", "responseToMessageIdAttr", "ResponseToMessageId", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
LogoutResponseRec.init();
return LogoutResponseRec;
})(OS.DataTypes.GenericRecord);
Extension_SAMLAuthenticationModel.LogoutResponseRec = LogoutResponseRec;

});
define("Extension.SAMLAuthentication.model$LogoutResponseRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.SAMLAuthentication.model", "Extension.SAMLAuthentication.model$LogoutResponseRec"], function (exports, OutSystems, Extension_SAMLAuthenticationModel) {
var OS = OutSystems.Internal;
var LogoutResponseRecord = (function (_super) {
__extends(LogoutResponseRecord, _super);
function LogoutResponseRecord(defaults) {
_super.apply(this, arguments);
}
LogoutResponseRecord.attributesToDeclare = function () {
return [
this.attr("LogoutResponse", "logoutResponseAttr", "LogoutResponse", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_SAMLAuthenticationModel.LogoutResponseRec());
}, true, Extension_SAMLAuthenticationModel.LogoutResponseRec)
].concat(_super.attributesToDeclare.call(this));
};
LogoutResponseRecord.fromStructure = function (str) {
return new LogoutResponseRecord(new LogoutResponseRecord.RecordClass({
logoutResponseAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
LogoutResponseRecord._isAnonymousRecord = true;
LogoutResponseRecord.UniqueId = "f1180948-e33c-9478-a8ff-0a299f823504";
LogoutResponseRecord.init();
return LogoutResponseRecord;
})(OS.DataTypes.GenericRecord);
Extension_SAMLAuthenticationModel.LogoutResponseRecord = LogoutResponseRecord;

});
define("Extension.SAMLAuthentication.model$LogoutResponseRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.SAMLAuthentication.model", "Extension.SAMLAuthentication.model$LogoutResponseRecord"], function (exports, OutSystems, Extension_SAMLAuthenticationModel) {
var OS = OutSystems.Internal;
var LogoutResponseRecordList = (function (_super) {
__extends(LogoutResponseRecordList, _super);
function LogoutResponseRecordList(defaults) {
_super.apply(this, arguments);
}
LogoutResponseRecordList.itemType = Extension_SAMLAuthenticationModel.LogoutResponseRecord;
return LogoutResponseRecordList;
})(OS.DataTypes.GenericRecordList);
Extension_SAMLAuthenticationModel.LogoutResponseRecordList = LogoutResponseRecordList;

});
define("Extension.SAMLAuthentication.model$AttributeRec", ["exports", "OutSystems/ClientRuntime/Main", "Extension.SAMLAuthentication.model"], function (exports, OutSystems, Extension_SAMLAuthenticationModel) {
var OS = OutSystems.Internal;
var AttributeRec = (function (_super) {
__extends(AttributeRec, _super);
function AttributeRec(defaults) {
_super.apply(this, arguments);
}
AttributeRec.attributesToDeclare = function () {
return [
this.attr("Name", "nameAttr", "Name", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Value", "valueAttr", "Value", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
AttributeRec.init();
return AttributeRec;
})(OS.DataTypes.GenericRecord);
Extension_SAMLAuthenticationModel.AttributeRec = AttributeRec;

});
define("Extension.SAMLAuthentication.model$AttributeRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.SAMLAuthentication.model", "Extension.SAMLAuthentication.model$AttributeRec"], function (exports, OutSystems, Extension_SAMLAuthenticationModel) {
var OS = OutSystems.Internal;
var AttributeRecord = (function (_super) {
__extends(AttributeRecord, _super);
function AttributeRecord(defaults) {
_super.apply(this, arguments);
}
AttributeRecord.attributesToDeclare = function () {
return [
this.attr("Attribute", "attributeAttr", "Attribute", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_SAMLAuthenticationModel.AttributeRec());
}, true, Extension_SAMLAuthenticationModel.AttributeRec)
].concat(_super.attributesToDeclare.call(this));
};
AttributeRecord.fromStructure = function (str) {
return new AttributeRecord(new AttributeRecord.RecordClass({
attributeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AttributeRecord._isAnonymousRecord = true;
AttributeRecord.UniqueId = "69c767a4-3f9a-545f-28c6-067d5a0e2fc9";
AttributeRecord.init();
return AttributeRecord;
})(OS.DataTypes.GenericRecord);
Extension_SAMLAuthenticationModel.AttributeRecord = AttributeRecord;

});
define("Extension.SAMLAuthentication.model$AttributeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.SAMLAuthentication.model", "Extension.SAMLAuthentication.model$AttributeRecord"], function (exports, OutSystems, Extension_SAMLAuthenticationModel) {
var OS = OutSystems.Internal;
var AttributeRecordList = (function (_super) {
__extends(AttributeRecordList, _super);
function AttributeRecordList(defaults) {
_super.apply(this, arguments);
}
AttributeRecordList.itemType = Extension_SAMLAuthenticationModel.AttributeRecord;
return AttributeRecordList;
})(OS.DataTypes.GenericRecordList);
Extension_SAMLAuthenticationModel.AttributeRecordList = AttributeRecordList;

});
define("Extension.SAMLAuthentication.model$DataRec", ["exports", "OutSystems/ClientRuntime/Main", "Extension.SAMLAuthentication.model", "Extension.SAMLAuthentication.model$AttributeRecordList"], function (exports, OutSystems, Extension_SAMLAuthenticationModel) {
var OS = OutSystems.Internal;
var DataRec = (function (_super) {
__extends(DataRec, _super);
function DataRec(defaults) {
_super.apply(this, arguments);
}
DataRec.attributesToDeclare = function () {
return [
this.attr("NameID", "nameIDAttr", "NameID", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Audience", "audienceAttr", "Audience", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("AttributeStatement", "attributeStatementAttr", "AttributeStatement", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_SAMLAuthenticationModel.AttributeRecordList());
}, true, Extension_SAMLAuthenticationModel.AttributeRecordList), 
this.attr("DestinationURL", "destinationURLAttr", "DestinationURL", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("RecipientURL", "recipientURLAttr", "RecipientURL", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SessionIndex", "sessionIndexAttr", "SessionIndex", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("InResponseToMessageId", "inResponseToMessageIdAttr", "InResponseToMessageId", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DecryptedAssertion", "decryptedAssertionAttr", "DecryptedAssertion", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
DataRec.init();
return DataRec;
})(OS.DataTypes.GenericRecord);
Extension_SAMLAuthenticationModel.DataRec = DataRec;

});
define("Extension.SAMLAuthentication.model$DataRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.SAMLAuthentication.model", "Extension.SAMLAuthentication.model$DataRec"], function (exports, OutSystems, Extension_SAMLAuthenticationModel) {
var OS = OutSystems.Internal;
var DataRecord = (function (_super) {
__extends(DataRecord, _super);
function DataRecord(defaults) {
_super.apply(this, arguments);
}
DataRecord.attributesToDeclare = function () {
return [
this.attr("Data", "dataAttr", "Data", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_SAMLAuthenticationModel.DataRec());
}, true, Extension_SAMLAuthenticationModel.DataRec)
].concat(_super.attributesToDeclare.call(this));
};
DataRecord.fromStructure = function (str) {
return new DataRecord(new DataRecord.RecordClass({
dataAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DataRecord._isAnonymousRecord = true;
DataRecord.UniqueId = "490ca554-001d-2127-07f6-630c6662c5fd";
DataRecord.init();
return DataRecord;
})(OS.DataTypes.GenericRecord);
Extension_SAMLAuthenticationModel.DataRecord = DataRecord;

});
define("Extension.SAMLAuthentication.model$ValidationRec", ["exports", "OutSystems/ClientRuntime/Main", "Extension.SAMLAuthentication.model"], function (exports, OutSystems, Extension_SAMLAuthenticationModel) {
var OS = OutSystems.Internal;
var ValidationRec = (function (_super) {
__extends(ValidationRec, _super);
function ValidationRec(defaults) {
_super.apply(this, arguments);
}
ValidationRec.attributesToDeclare = function () {
return [
this.attr("ResponseId", "responseIdAttr", "ResponseId", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsValidSignature", "isValidSignatureAttr", "IsValidSignature", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("IsValidCertificate", "isValidCertificateAttr", "IsValidCertificate", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("IsValidTimestamp", "isValidTimestampAttr", "IsValidTimestamp", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("isValidStatusCode", "isValidStatusCodeAttr", "isValidStatusCode", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("IsValidIssuer", "isValidIssuerAttr", "IsValidIssuer", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("StatusCode", "statusCodeAttr", "StatusCode", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Issuer", "issuerAttr", "Issuer", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("NotBefore", "notBeforeAttr", "NotBefore", true, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("NotOnOrAfter", "notOnOrAfterAttr", "NotOnOrAfter", true, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("IsRespSignatureRequiredButNotFound", "isRespSignatureRequiredButNotFoundAttr", "IsRespSignatureRequiredButNotFound", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ValidationRec.init();
return ValidationRec;
})(OS.DataTypes.GenericRecord);
Extension_SAMLAuthenticationModel.ValidationRec = ValidationRec;

});
define("Extension.SAMLAuthentication.model$LogoutRequestRec", ["exports", "OutSystems/ClientRuntime/Main", "Extension.SAMLAuthentication.model", "Extension.SAMLAuthentication.model$TextRecordList"], function (exports, OutSystems, Extension_SAMLAuthenticationModel) {
var OS = OutSystems.Internal;
var LogoutRequestRec = (function (_super) {
__extends(LogoutRequestRec, _super);
function LogoutRequestRec(defaults) {
_super.apply(this, arguments);
}
LogoutRequestRec.attributesToDeclare = function () {
return [
this.attr("IssueInstant", "issueInstantAttr", "IssueInstant", true, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("Issuer", "issuerAttr", "Issuer", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("NameID", "nameIDAttr", "NameID", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SessionIndexes", "sessionIndexesAttr", "SessionIndexes", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_SAMLAuthenticationModel.TextRecordList());
}, true, Extension_SAMLAuthenticationModel.TextRecordList), 
this.attr("RequestId", "requestIdAttr", "RequestId", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
LogoutRequestRec.init();
return LogoutRequestRec;
})(OS.DataTypes.GenericRecord);
Extension_SAMLAuthenticationModel.LogoutRequestRec = LogoutRequestRec;

});
define("Extension.SAMLAuthentication.model$LogoutRequestRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.SAMLAuthentication.model", "Extension.SAMLAuthentication.model$LogoutRequestRec"], function (exports, OutSystems, Extension_SAMLAuthenticationModel) {
var OS = OutSystems.Internal;
var LogoutRequestRecord = (function (_super) {
__extends(LogoutRequestRecord, _super);
function LogoutRequestRecord(defaults) {
_super.apply(this, arguments);
}
LogoutRequestRecord.attributesToDeclare = function () {
return [
this.attr("LogoutRequest", "logoutRequestAttr", "LogoutRequest", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_SAMLAuthenticationModel.LogoutRequestRec());
}, true, Extension_SAMLAuthenticationModel.LogoutRequestRec)
].concat(_super.attributesToDeclare.call(this));
};
LogoutRequestRecord.fromStructure = function (str) {
return new LogoutRequestRecord(new LogoutRequestRecord.RecordClass({
logoutRequestAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
LogoutRequestRecord._isAnonymousRecord = true;
LogoutRequestRecord.UniqueId = "6346975c-4a76-f15f-5671-3be5049a464e";
LogoutRequestRecord.init();
return LogoutRequestRecord;
})(OS.DataTypes.GenericRecord);
Extension_SAMLAuthenticationModel.LogoutRequestRecord = LogoutRequestRecord;

});
define("Extension.SAMLAuthentication.model$LogoutRequestRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.SAMLAuthentication.model", "Extension.SAMLAuthentication.model$LogoutRequestRecord"], function (exports, OutSystems, Extension_SAMLAuthenticationModel) {
var OS = OutSystems.Internal;
var LogoutRequestRecordList = (function (_super) {
__extends(LogoutRequestRecordList, _super);
function LogoutRequestRecordList(defaults) {
_super.apply(this, arguments);
}
LogoutRequestRecordList.itemType = Extension_SAMLAuthenticationModel.LogoutRequestRecord;
return LogoutRequestRecordList;
})(OS.DataTypes.GenericRecordList);
Extension_SAMLAuthenticationModel.LogoutRequestRecordList = LogoutRequestRecordList;

});
define("Extension.SAMLAuthentication.model$DataRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.SAMLAuthentication.model", "Extension.SAMLAuthentication.model$DataRecord"], function (exports, OutSystems, Extension_SAMLAuthenticationModel) {
var OS = OutSystems.Internal;
var DataRecordList = (function (_super) {
__extends(DataRecordList, _super);
function DataRecordList(defaults) {
_super.apply(this, arguments);
}
DataRecordList.itemType = Extension_SAMLAuthenticationModel.DataRecord;
return DataRecordList;
})(OS.DataTypes.GenericRecordList);
Extension_SAMLAuthenticationModel.DataRecordList = DataRecordList;

});
define("Extension.SAMLAuthentication.model$ValidationRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.SAMLAuthentication.model", "Extension.SAMLAuthentication.model$ValidationRec"], function (exports, OutSystems, Extension_SAMLAuthenticationModel) {
var OS = OutSystems.Internal;
var ValidationRecord = (function (_super) {
__extends(ValidationRecord, _super);
function ValidationRecord(defaults) {
_super.apply(this, arguments);
}
ValidationRecord.attributesToDeclare = function () {
return [
this.attr("Validation", "validationAttr", "Validation", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_SAMLAuthenticationModel.ValidationRec());
}, true, Extension_SAMLAuthenticationModel.ValidationRec)
].concat(_super.attributesToDeclare.call(this));
};
ValidationRecord.fromStructure = function (str) {
return new ValidationRecord(new ValidationRecord.RecordClass({
validationAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ValidationRecord._isAnonymousRecord = true;
ValidationRecord.UniqueId = "cacd93ab-78cc-f2b7-46a7-335f7ae7f40c";
ValidationRecord.init();
return ValidationRecord;
})(OS.DataTypes.GenericRecord);
Extension_SAMLAuthenticationModel.ValidationRecord = ValidationRecord;

});
define("Extension.SAMLAuthentication.model$ValidationRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.SAMLAuthentication.model", "Extension.SAMLAuthentication.model$ValidationRecord"], function (exports, OutSystems, Extension_SAMLAuthenticationModel) {
var OS = OutSystems.Internal;
var ValidationRecordList = (function (_super) {
__extends(ValidationRecordList, _super);
function ValidationRecordList(defaults) {
_super.apply(this, arguments);
}
ValidationRecordList.itemType = Extension_SAMLAuthenticationModel.ValidationRecord;
return ValidationRecordList;
})(OS.DataTypes.GenericRecordList);
Extension_SAMLAuthenticationModel.ValidationRecordList = ValidationRecordList;

});
define("Extension.SAMLAuthentication.model$SAMLValidationRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.SAMLAuthentication.model", "Extension.SAMLAuthentication.model$SAMLValidationRec"], function (exports, OutSystems, Extension_SAMLAuthenticationModel) {
var OS = OutSystems.Internal;
var SAMLValidationRecord = (function (_super) {
__extends(SAMLValidationRecord, _super);
function SAMLValidationRecord(defaults) {
_super.apply(this, arguments);
}
SAMLValidationRecord.attributesToDeclare = function () {
return [
this.attr("SAMLValidation", "sAMLValidationAttr", "SAMLValidation", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_SAMLAuthenticationModel.SAMLValidationRec());
}, true, Extension_SAMLAuthenticationModel.SAMLValidationRec)
].concat(_super.attributesToDeclare.call(this));
};
SAMLValidationRecord.fromStructure = function (str) {
return new SAMLValidationRecord(new SAMLValidationRecord.RecordClass({
sAMLValidationAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SAMLValidationRecord._isAnonymousRecord = true;
SAMLValidationRecord.UniqueId = "f2470dcf-3003-4d7d-eac8-aa02525cf98a";
SAMLValidationRecord.init();
return SAMLValidationRecord;
})(OS.DataTypes.GenericRecord);
Extension_SAMLAuthenticationModel.SAMLValidationRecord = SAMLValidationRecord;

});
define("Extension.SAMLAuthentication.model$SAMLValidationRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.SAMLAuthentication.model", "Extension.SAMLAuthentication.model$SAMLValidationRecord"], function (exports, OutSystems, Extension_SAMLAuthenticationModel) {
var OS = OutSystems.Internal;
var SAMLValidationRecordList = (function (_super) {
__extends(SAMLValidationRecordList, _super);
function SAMLValidationRecordList(defaults) {
_super.apply(this, arguments);
}
SAMLValidationRecordList.itemType = Extension_SAMLAuthenticationModel.SAMLValidationRecord;
return SAMLValidationRecordList;
})(OS.DataTypes.GenericRecordList);
Extension_SAMLAuthenticationModel.SAMLValidationRecordList = SAMLValidationRecordList;

});
define("Extension.SAMLAuthentication.model", ["exports", "OutSystems/ClientRuntime/Main"], function (exports, OutSystems) {
var OS = OutSystems.Internal;
var Extension_SAMLAuthenticationModel = exports;
});
