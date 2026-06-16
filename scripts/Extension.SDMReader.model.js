define("Extension.SDMReader.model$AttributeXmlConfigRec", ["exports", "OutSystems/ClientRuntime/Main", "Extension.SDMReader.model"], function (exports, OutSystems, Extension_SDMReaderModel) {
var OS = OutSystems.Internal;
var AttributeXmlConfigRec = (function (_super) {
__extends(AttributeXmlConfigRec, _super);
function AttributeXmlConfigRec(defaults) {
_super.apply(this, arguments);
}
AttributeXmlConfigRec.attributesToDeclare = function () {
return [
this.attr("Name", "nameAttr", "Name", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("AttributeName", "attributeNameAttr", "AttributeName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ExcludeIfNull", "excludeIfNullAttr", "ExcludeIfNull", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, true), 
this.attr("NullableValue", "nullableValueAttr", "NullableValue", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("RecordListMode", "recordListModeAttr", "RecordListMode", false, false, OS.DataTypes.DataTypes.Text, function () {
return "C";
}, true), 
this.attr("RecordMode", "recordModeAttr", "RecordMode", false, false, OS.DataTypes.DataTypes.Text, function () {
return "S";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
AttributeXmlConfigRec.init();
return AttributeXmlConfigRec;
})(OS.DataTypes.GenericRecord);
Extension_SDMReaderModel.AttributeXmlConfigRec = AttributeXmlConfigRec;

});
define("Extension.SDMReader.model$AttributeXmlConfigRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.SDMReader.model", "Extension.SDMReader.model$AttributeXmlConfigRec"], function (exports, OutSystems, Extension_SDMReaderModel) {
var OS = OutSystems.Internal;
var AttributeXmlConfigRecord = (function (_super) {
__extends(AttributeXmlConfigRecord, _super);
function AttributeXmlConfigRecord(defaults) {
_super.apply(this, arguments);
}
AttributeXmlConfigRecord.attributesToDeclare = function () {
return [
this.attr("AttributeXmlConfig", "attributeXmlConfigAttr", "AttributeXmlConfig", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_SDMReaderModel.AttributeXmlConfigRec());
}, true, Extension_SDMReaderModel.AttributeXmlConfigRec)
].concat(_super.attributesToDeclare.call(this));
};
AttributeXmlConfigRecord.fromStructure = function (str) {
return new AttributeXmlConfigRecord(new AttributeXmlConfigRecord.RecordClass({
attributeXmlConfigAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
AttributeXmlConfigRecord._isAnonymousRecord = true;
AttributeXmlConfigRecord.UniqueId = "c76ee2e9-30d4-829e-20f6-3e5af59fb57e";
AttributeXmlConfigRecord.init();
return AttributeXmlConfigRecord;
})(OS.DataTypes.GenericRecord);
Extension_SDMReaderModel.AttributeXmlConfigRecord = AttributeXmlConfigRecord;

});
define("Extension.SDMReader.model$AttributeXmlConfigRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.SDMReader.model", "Extension.SDMReader.model$AttributeXmlConfigRecord"], function (exports, OutSystems, Extension_SDMReaderModel) {
var OS = OutSystems.Internal;
var AttributeXmlConfigRecordList = (function (_super) {
__extends(AttributeXmlConfigRecordList, _super);
function AttributeXmlConfigRecordList(defaults) {
_super.apply(this, arguments);
}
AttributeXmlConfigRecordList.itemType = Extension_SDMReaderModel.AttributeXmlConfigRecord;
return AttributeXmlConfigRecordList;
})(OS.DataTypes.GenericRecordList);
Extension_SDMReaderModel.AttributeXmlConfigRecordList = AttributeXmlConfigRecordList;

});
define("Extension.SDMReader.model$RecordXmlConfigRec", ["exports", "OutSystems/ClientRuntime/Main", "Extension.SDMReader.model", "Extension.SDMReader.model$AttributeXmlConfigRecordList"], function (exports, OutSystems, Extension_SDMReaderModel) {
var OS = OutSystems.Internal;
var RecordXmlConfigRec = (function (_super) {
__extends(RecordXmlConfigRec, _super);
function RecordXmlConfigRec(defaults) {
_super.apply(this, arguments);
}
RecordXmlConfigRec.attributesToDeclare = function () {
return [
this.attr("RecordName", "recordNameAttr", "RecordName", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("AttributesConfig", "attributesConfigAttr", "AttributesConfig", true, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_SDMReaderModel.AttributeXmlConfigRecordList());
}, true, Extension_SDMReaderModel.AttributeXmlConfigRecordList), 
this.attr("Namespace", "namespaceAttr", "Namespace", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("EffectiveName", "effectiveNameAttr", "EffectiveName", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
RecordXmlConfigRec.init();
return RecordXmlConfigRec;
})(OS.DataTypes.GenericRecord);
Extension_SDMReaderModel.RecordXmlConfigRec = RecordXmlConfigRec;

});
define("Extension.SDMReader.model$SDMTableInfoRec", ["exports", "OutSystems/ClientRuntime/Main", "Extension.SDMReader.model"], function (exports, OutSystems, Extension_SDMReaderModel) {
var OS = OutSystems.Internal;
var SDMTableInfoRec = (function (_super) {
__extends(SDMTableInfoRec, _super);
function SDMTableInfoRec(defaults) {
_super.apply(this, arguments);
}
SDMTableInfoRec.attributesToDeclare = function () {
return [
this.attr("Name", "nameAttr", "Name", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Description", "descriptionAttr", "Description", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DistributionDate", "distributionDateAttr", "DistributionDate", true, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("DistributionSequenceNumber", "distributionSequenceNumberAttr", "DistributionSequenceNumber", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("DistributionPart", "distributionPartAttr", "DistributionPart", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("StructureVersion", "structureVersionAttr", "StructureVersion", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Active", "activeAttr", "Active", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("DataLastChangeDate", "dataLastChangeDateAttr", "DataLastChangeDate", true, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
SDMTableInfoRec.init();
return SDMTableInfoRec;
})(OS.DataTypes.GenericRecord);
Extension_SDMReaderModel.SDMTableInfoRec = SDMTableInfoRec;

});
define("Extension.SDMReader.model$SDMTableInfoRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.SDMReader.model", "Extension.SDMReader.model$SDMTableInfoRec"], function (exports, OutSystems, Extension_SDMReaderModel) {
var OS = OutSystems.Internal;
var SDMTableInfoRecord = (function (_super) {
__extends(SDMTableInfoRecord, _super);
function SDMTableInfoRecord(defaults) {
_super.apply(this, arguments);
}
SDMTableInfoRecord.attributesToDeclare = function () {
return [
this.attr("SDMTableInfo", "sDMTableInfoAttr", "SDMTableInfo", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_SDMReaderModel.SDMTableInfoRec());
}, true, Extension_SDMReaderModel.SDMTableInfoRec)
].concat(_super.attributesToDeclare.call(this));
};
SDMTableInfoRecord.fromStructure = function (str) {
return new SDMTableInfoRecord(new SDMTableInfoRecord.RecordClass({
sDMTableInfoAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SDMTableInfoRecord._isAnonymousRecord = true;
SDMTableInfoRecord.UniqueId = "cfcf28a2-1f76-746b-3b5b-9275ce2ae4f1";
SDMTableInfoRecord.init();
return SDMTableInfoRecord;
})(OS.DataTypes.GenericRecord);
Extension_SDMReaderModel.SDMTableInfoRecord = SDMTableInfoRecord;

});
define("Extension.SDMReader.model$SDMTableInfoRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.SDMReader.model", "Extension.SDMReader.model$SDMTableInfoRecord"], function (exports, OutSystems, Extension_SDMReaderModel) {
var OS = OutSystems.Internal;
var SDMTableInfoRecordList = (function (_super) {
__extends(SDMTableInfoRecordList, _super);
function SDMTableInfoRecordList(defaults) {
_super.apply(this, arguments);
}
SDMTableInfoRecordList.itemType = Extension_SDMReaderModel.SDMTableInfoRecord;
return SDMTableInfoRecordList;
})(OS.DataTypes.GenericRecordList);
Extension_SDMReaderModel.SDMTableInfoRecordList = SDMTableInfoRecordList;

});
define("Extension.SDMReader.model$SDMTestCurrencyRec", ["exports", "OutSystems/ClientRuntime/Main", "Extension.SDMReader.model"], function (exports, OutSystems, Extension_SDMReaderModel) {
var OS = OutSystems.Internal;
var SDMTestCurrencyRec = (function (_super) {
__extends(SDMTestCurrencyRec, _super);
function SDMTestCurrencyRec(defaults) {
_super.apply(this, arguments);
}
SDMTestCurrencyRec.attributesToDeclare = function () {
return [
this.attr("CCRM_CODE", "cCRM_CODEAttr", "CCRM_CODE", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DESCRIPTION", "dESCRIPTIONAttr", "DESCRIPTION", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("PARENT", "pARENTAttr", "PARENT", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DEV_MARKET", "dEV_MARKETAttr", "DEV_MARKET", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("BASE_CUR", "bASE_CURAttr", "BASE_CUR", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SIGMA_FX", "sIGMA_FXAttr", "SIGMA_FX", true, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("SUCCESSOR", "sUCCESSORAttr", "SUCCESSOR", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CURRENCY_CLUSTER", "cURRENCY_CLUSTERAttr", "CURRENCY_CLUSTER", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LEVEL", "lEVELAttr", "LEVEL", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("IS_ACTIVE", "iS_ACTIVEAttr", "IS_ACTIVE", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
SDMTestCurrencyRec.init();
return SDMTestCurrencyRec;
})(OS.DataTypes.GenericRecord);
Extension_SDMReaderModel.SDMTestCurrencyRec = SDMTestCurrencyRec;

});
define("Extension.SDMReader.model$SDMTestCurrencyRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.SDMReader.model", "Extension.SDMReader.model$SDMTestCurrencyRec"], function (exports, OutSystems, Extension_SDMReaderModel) {
var OS = OutSystems.Internal;
var SDMTestCurrencyRecord = (function (_super) {
__extends(SDMTestCurrencyRecord, _super);
function SDMTestCurrencyRecord(defaults) {
_super.apply(this, arguments);
}
SDMTestCurrencyRecord.attributesToDeclare = function () {
return [
this.attr("SDMTestCurrency", "sDMTestCurrencyAttr", "SDMTestCurrency", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_SDMReaderModel.SDMTestCurrencyRec());
}, true, Extension_SDMReaderModel.SDMTestCurrencyRec)
].concat(_super.attributesToDeclare.call(this));
};
SDMTestCurrencyRecord.fromStructure = function (str) {
return new SDMTestCurrencyRecord(new SDMTestCurrencyRecord.RecordClass({
sDMTestCurrencyAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SDMTestCurrencyRecord._isAnonymousRecord = true;
SDMTestCurrencyRecord.UniqueId = "18af3f5a-4cdd-ee9c-86a7-afe7abbc0b46";
SDMTestCurrencyRecord.init();
return SDMTestCurrencyRecord;
})(OS.DataTypes.GenericRecord);
Extension_SDMReaderModel.SDMTestCurrencyRecord = SDMTestCurrencyRecord;

});
define("Extension.SDMReader.model$XmlDeclarationRec", ["exports", "OutSystems/ClientRuntime/Main", "Extension.SDMReader.model"], function (exports, OutSystems, Extension_SDMReaderModel) {
var OS = OutSystems.Internal;
var XmlDeclarationRec = (function (_super) {
__extends(XmlDeclarationRec, _super);
function XmlDeclarationRec(defaults) {
_super.apply(this, arguments);
}
XmlDeclarationRec.attributesToDeclare = function () {
return [
this.attr("AddDeclaration", "addDeclarationAttr", "AddDeclaration", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Version", "versionAttr", "Version", false, false, OS.DataTypes.DataTypes.Text, function () {
return "1.0";
}, true), 
this.attr("Encoding", "encodingAttr", "Encoding", false, false, OS.DataTypes.DataTypes.Text, function () {
return "UTF-8";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
XmlDeclarationRec.init();
return XmlDeclarationRec;
})(OS.DataTypes.GenericRecord);
Extension_SDMReaderModel.XmlDeclarationRec = XmlDeclarationRec;

});
define("Extension.SDMReader.model$XmlDeclarationRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.SDMReader.model", "Extension.SDMReader.model$XmlDeclarationRec"], function (exports, OutSystems, Extension_SDMReaderModel) {
var OS = OutSystems.Internal;
var XmlDeclarationRecord = (function (_super) {
__extends(XmlDeclarationRecord, _super);
function XmlDeclarationRecord(defaults) {
_super.apply(this, arguments);
}
XmlDeclarationRecord.attributesToDeclare = function () {
return [
this.attr("XmlDeclaration", "xmlDeclarationAttr", "XmlDeclaration", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_SDMReaderModel.XmlDeclarationRec());
}, true, Extension_SDMReaderModel.XmlDeclarationRec)
].concat(_super.attributesToDeclare.call(this));
};
XmlDeclarationRecord.fromStructure = function (str) {
return new XmlDeclarationRecord(new XmlDeclarationRecord.RecordClass({
xmlDeclarationAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
XmlDeclarationRecord._isAnonymousRecord = true;
XmlDeclarationRecord.UniqueId = "42010453-6de8-201c-c9db-cd5c7770534c";
XmlDeclarationRecord.init();
return XmlDeclarationRecord;
})(OS.DataTypes.GenericRecord);
Extension_SDMReaderModel.XmlDeclarationRecord = XmlDeclarationRecord;

});
define("Extension.SDMReader.model$XmlDeclarationRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.SDMReader.model", "Extension.SDMReader.model$XmlDeclarationRecord"], function (exports, OutSystems, Extension_SDMReaderModel) {
var OS = OutSystems.Internal;
var XmlDeclarationRecordList = (function (_super) {
__extends(XmlDeclarationRecordList, _super);
function XmlDeclarationRecordList(defaults) {
_super.apply(this, arguments);
}
XmlDeclarationRecordList.itemType = Extension_SDMReaderModel.XmlDeclarationRecord;
return XmlDeclarationRecordList;
})(OS.DataTypes.GenericRecordList);
Extension_SDMReaderModel.XmlDeclarationRecordList = XmlDeclarationRecordList;

});
define("Extension.SDMReader.model$SDMAllDataTypeDummyRec", ["exports", "OutSystems/ClientRuntime/Main", "Extension.SDMReader.model"], function (exports, OutSystems, Extension_SDMReaderModel) {
var OS = OutSystems.Internal;
var SDMAllDataTypeDummyRec = (function (_super) {
__extends(SDMAllDataTypeDummyRec, _super);
function SDMAllDataTypeDummyRec(defaults) {
_super.apply(this, arguments);
}
SDMAllDataTypeDummyRec.attributesToDeclare = function () {
return [
this.attr("StringMandatory", "stringMandatoryAttr", "StringMandatory", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("StringNotMandatory", "stringNotMandatoryAttr", "StringNotMandatory", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Int32Mandatory", "int32MandatoryAttr", "Int32Mandatory", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Int32NotMandatory", "int32NotMandatoryAttr", "Int32NotMandatory", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("DecimalMandatory", "decimalMandatoryAttr", "DecimalMandatory", true, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("DecimalNotMandatory", "decimalNotMandatoryAttr", "DecimalNotMandatory", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("BooleanMandatory", "booleanMandatoryAttr", "BooleanMandatory", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("BooleanNotMandatory", "booleanNotMandatoryAttr", "BooleanNotMandatory", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Int64Mandatory", "int64MandatoryAttr", "Int64Mandatory", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Int64NotMandatory", "int64NotMandatoryAttr", "Int64NotMandatory", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("DateTimeMandatory", "dateTimeMandatoryAttr", "DateTimeMandatory", true, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("DateTimeNotMandatory", "dateTimeNotMandatoryAttr", "DateTimeNotMandatory", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
SDMAllDataTypeDummyRec.init();
return SDMAllDataTypeDummyRec;
})(OS.DataTypes.GenericRecord);
Extension_SDMReaderModel.SDMAllDataTypeDummyRec = SDMAllDataTypeDummyRec;

});
define("Extension.SDMReader.model$SDMAllDataTypeDummyRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.SDMReader.model", "Extension.SDMReader.model$SDMAllDataTypeDummyRec"], function (exports, OutSystems, Extension_SDMReaderModel) {
var OS = OutSystems.Internal;
var SDMAllDataTypeDummyRecord = (function (_super) {
__extends(SDMAllDataTypeDummyRecord, _super);
function SDMAllDataTypeDummyRecord(defaults) {
_super.apply(this, arguments);
}
SDMAllDataTypeDummyRecord.attributesToDeclare = function () {
return [
this.attr("SDMAllDataTypeDummy", "sDMAllDataTypeDummyAttr", "SDMAllDataTypeDummy", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_SDMReaderModel.SDMAllDataTypeDummyRec());
}, true, Extension_SDMReaderModel.SDMAllDataTypeDummyRec)
].concat(_super.attributesToDeclare.call(this));
};
SDMAllDataTypeDummyRecord.fromStructure = function (str) {
return new SDMAllDataTypeDummyRecord(new SDMAllDataTypeDummyRecord.RecordClass({
sDMAllDataTypeDummyAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SDMAllDataTypeDummyRecord._isAnonymousRecord = true;
SDMAllDataTypeDummyRecord.UniqueId = "8a8cfb79-fd1b-752c-ce68-a5ab96c42055";
SDMAllDataTypeDummyRecord.init();
return SDMAllDataTypeDummyRecord;
})(OS.DataTypes.GenericRecord);
Extension_SDMReaderModel.SDMAllDataTypeDummyRecord = SDMAllDataTypeDummyRecord;

});
define("Extension.SDMReader.model$SDMAllDataTypeDummyRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.SDMReader.model", "Extension.SDMReader.model$SDMAllDataTypeDummyRecord"], function (exports, OutSystems, Extension_SDMReaderModel) {
var OS = OutSystems.Internal;
var SDMAllDataTypeDummyRecordList = (function (_super) {
__extends(SDMAllDataTypeDummyRecordList, _super);
function SDMAllDataTypeDummyRecordList(defaults) {
_super.apply(this, arguments);
}
SDMAllDataTypeDummyRecordList.itemType = Extension_SDMReaderModel.SDMAllDataTypeDummyRecord;
return SDMAllDataTypeDummyRecordList;
})(OS.DataTypes.GenericRecordList);
Extension_SDMReaderModel.SDMAllDataTypeDummyRecordList = SDMAllDataTypeDummyRecordList;

});
define("Extension.SDMReader.model$SDMTestOfficeRec", ["exports", "OutSystems/ClientRuntime/Main", "Extension.SDMReader.model"], function (exports, OutSystems, Extension_SDMReaderModel) {
var OS = OutSystems.Internal;
var SDMTestOfficeRec = (function (_super) {
__extends(SDMTestOfficeRec, _super);
function SDMTestOfficeRec(defaults) {
_super.apply(this, arguments);
}
SDMTestOfficeRec.attributesToDeclare = function () {
return [
this.attr("CCRM_CODE", "cCRM_CODEAttr", "CCRM_CODE", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DESCRIPTION", "dESCRIPTIONAttr", "DESCRIPTION", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("PARENT", "pARENTAttr", "PARENT", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LEGAL_ENTITY_CODE", "lEGAL_ENTITY_CODEAttr", "LEGAL_ENTITY_CODE", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("BANK_INDICATOR", "bANK_INDICATORAttr", "BANK_INDICATOR", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("BASE_ENTITY_N", "bASE_ENTITY_NAttr", "BASE_ENTITY_N", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("BASE_ENTITY", "bASE_ENTITYAttr", "BASE_ENTITY", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("BRANCH_COUNTRY", "bRANCH_COUNTRYAttr", "BRANCH_COUNTRY", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("BRANCH_BASE_CCY", "bRANCH_BASE_CCYAttr", "BRANCH_BASE_CCY", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CRS", "cRSAttr", "CRS", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CALCULATION_METHOD_CRS", "cALCULATION_METHOD_CRSAttr", "CALCULATION_METHOD_CRS", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("TIME_ZONE", "tIME_ZONEAttr", "TIME_ZONE", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MISRAROC_OFFICE", "mISRAROC_OFFICEAttr", "MISRAROC_OFFICE", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MISOB_BUSINESS_LINE", "mISOB_BUSINESS_LINEAttr", "MISOB_BUSINESS_LINE", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DEFAULT_MISRAROC_PRODUCT", "dEFAULT_MISRAROC_PRODUCTAttr", "DEFAULT_MISRAROC_PRODUCT", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ASSET_VALUATION_CURVE", "aSSET_VALUATION_CURVEAttr", "ASSET_VALUATION_CURVE", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("KMV_CATEGORY", "kMV_CATEGORYAttr", "KMV_CATEGORY", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("KMV_BUCKET_NUMBER", "kMV_BUCKET_NUMBERAttr", "KMV_BUCKET_NUMBER", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("EC_PARAMETER", "eC_PARAMETERAttr", "EC_PARAMETER", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("COUNTRY_RETAINED_RISK", "cOUNTRY_RETAINED_RISKAttr", "COUNTRY_RETAINED_RISK", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("INDUSTRY_RETAINED_RISK", "iNDUSTRY_RETAINED_RISKAttr", "INDUSTRY_RETAINED_RISK", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("OFFICE_CLUST_RISK_HORIZON", "oFFICE_CLUST_RISK_HORIZONAttr", "OFFICE_CLUST_RISK_HORIZON", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("OFFICE_CLUST_SIZE_DEFAULT", "oFFICE_CLUST_SIZE_DEFAULTAttr", "OFFICE_CLUST_SIZE_DEFAULT", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("OFFICE_CLUSTER_B2_PORT", "oFFICE_CLUSTER_B2_PORTAttr", "OFFICE_CLUSTER_B2_PORT", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("OFFICE_CLUSTER_R_SQUARED", "oFFICE_CLUSTER_R_SQUAREDAttr", "OFFICE_CLUSTER_R_SQUARED", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("R_SQUARED_PF", "r_SQUARED_PFAttr", "R_SQUARED_PF", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("PROV_CALC_METHOD", "pROV_CALC_METHODAttr", "PROV_CALC_METHOD", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IAS_THRESHOLD", "iAS_THRESHOLDAttr", "IAS_THRESHOLD", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("ADD_ON_FOR_DAY_COUNT", "aDD_ON_FOR_DAY_COUNTAttr", "ADD_ON_FOR_DAY_COUNT", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ADD_ON_FOR_OFFER_PERIOD", "aDD_ON_FOR_OFFER_PERIODAttr", "ADD_ON_FOR_OFFER_PERIOD", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("TAX_RATE", "tAX_RATEAttr", "TAX_RATE", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("ALLOW_HISTORIC_BOOKING", "aLLOW_HISTORIC_BOOKINGAttr", "ALLOW_HISTORIC_BOOKING", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LOGO_FILE_NAME", "lOGO_FILE_NAMEAttr", "LOGO_FILE_NAME", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LOCAL_CURRENCY", "lOCAL_CURRENCYAttr", "LOCAL_CURRENCY", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LIMIT_OWNER_DEF_RISK_CAT", "lIMIT_OWNER_DEF_RISK_CATAttr", "LIMIT_OWNER_DEF_RISK_CAT", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("KT_RENTING", "kT_RENTINGAttr", "KT_RENTING", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("RISK_MANAGER", "rISK_MANAGERAttr", "RISK_MANAGER", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("INCLUDE_INVESTMENT_LLP", "iNCLUDE_INVESTMENT_LLPAttr", "INCLUDE_INVESTMENT_LLP", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("VOR2SP_VDU_EXPORT", "vOR2SP_VDU_EXPORTAttr", "VOR2SP_VDU_EXPORT", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("OFFICE_CLUSTER_CORREL", "oFFICE_CLUSTER_CORRELAttr", "OFFICE_CLUSTER_CORREL", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("OFF_CLUSTER_CURR_MISM_HC", "oFF_CLUSTER_CURR_MISM_HCAttr", "OFF_CLUSTER_CURR_MISM_HC", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ONE_BANK_OFFICE", "oNE_BANK_OFFICEAttr", "ONE_BANK_OFFICE", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ACCOUNTING_CLASSIFICATION", "aCCOUNTING_CLASSIFICATIONAttr", "ACCOUNTING_CLASSIFICATION", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("PERMANENT_SA", "pERMANENT_SAAttr", "PERMANENT_SA", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LEVEL", "lEVELAttr", "LEVEL", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("IS_ACTIVE", "iS_ACTIVEAttr", "IS_ACTIVE", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
SDMTestOfficeRec.init();
return SDMTestOfficeRec;
})(OS.DataTypes.GenericRecord);
Extension_SDMReaderModel.SDMTestOfficeRec = SDMTestOfficeRec;

});
define("Extension.SDMReader.model$SDMTestAssetTypeRec", ["exports", "OutSystems/ClientRuntime/Main", "Extension.SDMReader.model"], function (exports, OutSystems, Extension_SDMReaderModel) {
var OS = OutSystems.Internal;
var SDMTestAssetTypeRec = (function (_super) {
__extends(SDMTestAssetTypeRec, _super);
function SDMTestAssetTypeRec(defaults) {
_super.apply(this, arguments);
}
SDMTestAssetTypeRec.attributesToDeclare = function () {
return [
this.attr("LOCAL_SYSTEM", "lOCAL_SYSTEMAttr", "LOCAL_SYSTEM", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LOCAL_CODE", "lOCAL_CODEAttr", "LOCAL_CODE", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LOCAL_DESCRIPTION", "lOCAL_DESCRIPTIONAttr", "LOCAL_DESCRIPTION", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CCRM_CODE", "cCRM_CODEAttr", "CCRM_CODE", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("WEIGHTING_PERCENTAGE", "wEIGHTING_PERCENTAGEAttr", "WEIGHTING_PERCENTAGE", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IS_ACTIVE", "iS_ACTIVEAttr", "IS_ACTIVE", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
SDMTestAssetTypeRec.init();
return SDMTestAssetTypeRec;
})(OS.DataTypes.GenericRecord);
Extension_SDMReaderModel.SDMTestAssetTypeRec = SDMTestAssetTypeRec;

});
define("Extension.SDMReader.model$RecordXmlConfigRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.SDMReader.model", "Extension.SDMReader.model$RecordXmlConfigRec"], function (exports, OutSystems, Extension_SDMReaderModel) {
var OS = OutSystems.Internal;
var RecordXmlConfigRecord = (function (_super) {
__extends(RecordXmlConfigRecord, _super);
function RecordXmlConfigRecord(defaults) {
_super.apply(this, arguments);
}
RecordXmlConfigRecord.attributesToDeclare = function () {
return [
this.attr("RecordXmlConfig", "recordXmlConfigAttr", "RecordXmlConfig", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_SDMReaderModel.RecordXmlConfigRec());
}, true, Extension_SDMReaderModel.RecordXmlConfigRec)
].concat(_super.attributesToDeclare.call(this));
};
RecordXmlConfigRecord.fromStructure = function (str) {
return new RecordXmlConfigRecord(new RecordXmlConfigRecord.RecordClass({
recordXmlConfigAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
RecordXmlConfigRecord._isAnonymousRecord = true;
RecordXmlConfigRecord.UniqueId = "6078f0dd-9203-db04-0297-aca531dcf1a7";
RecordXmlConfigRecord.init();
return RecordXmlConfigRecord;
})(OS.DataTypes.GenericRecord);
Extension_SDMReaderModel.RecordXmlConfigRecord = RecordXmlConfigRecord;

});
define("Extension.SDMReader.model$SDMTestAssetTypeRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.SDMReader.model", "Extension.SDMReader.model$SDMTestAssetTypeRec"], function (exports, OutSystems, Extension_SDMReaderModel) {
var OS = OutSystems.Internal;
var SDMTestAssetTypeRecord = (function (_super) {
__extends(SDMTestAssetTypeRecord, _super);
function SDMTestAssetTypeRecord(defaults) {
_super.apply(this, arguments);
}
SDMTestAssetTypeRecord.attributesToDeclare = function () {
return [
this.attr("SDMTestAssetType", "sDMTestAssetTypeAttr", "SDMTestAssetType", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_SDMReaderModel.SDMTestAssetTypeRec());
}, true, Extension_SDMReaderModel.SDMTestAssetTypeRec)
].concat(_super.attributesToDeclare.call(this));
};
SDMTestAssetTypeRecord.fromStructure = function (str) {
return new SDMTestAssetTypeRecord(new SDMTestAssetTypeRecord.RecordClass({
sDMTestAssetTypeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SDMTestAssetTypeRecord._isAnonymousRecord = true;
SDMTestAssetTypeRecord.UniqueId = "e3e1feaa-16e7-9f7c-c2bf-b8e79f38ed92";
SDMTestAssetTypeRecord.init();
return SDMTestAssetTypeRecord;
})(OS.DataTypes.GenericRecord);
Extension_SDMReaderModel.SDMTestAssetTypeRecord = SDMTestAssetTypeRecord;

});
define("Extension.SDMReader.model$SDMTestAssetTypeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.SDMReader.model", "Extension.SDMReader.model$SDMTestAssetTypeRecord"], function (exports, OutSystems, Extension_SDMReaderModel) {
var OS = OutSystems.Internal;
var SDMTestAssetTypeRecordList = (function (_super) {
__extends(SDMTestAssetTypeRecordList, _super);
function SDMTestAssetTypeRecordList(defaults) {
_super.apply(this, arguments);
}
SDMTestAssetTypeRecordList.itemType = Extension_SDMReaderModel.SDMTestAssetTypeRecord;
return SDMTestAssetTypeRecordList;
})(OS.DataTypes.GenericRecordList);
Extension_SDMReaderModel.SDMTestAssetTypeRecordList = SDMTestAssetTypeRecordList;

});
define("Extension.SDMReader.model$DefaultXmlConfigRec", ["exports", "OutSystems/ClientRuntime/Main", "Extension.SDMReader.model", "Extension.SDMReader.model$XmlDeclarationRecord"], function (exports, OutSystems, Extension_SDMReaderModel) {
var OS = OutSystems.Internal;
var DefaultXmlConfigRec = (function (_super) {
__extends(DefaultXmlConfigRec, _super);
function DefaultXmlConfigRec(defaults) {
_super.apply(this, arguments);
}
DefaultXmlConfigRec.attributesToDeclare = function () {
return [
this.attr("ExcludeIfNull", "excludeIfNullAttr", "ExcludeIfNull", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, true), 
this.attr("RecordListMode", "recordListModeAttr", "RecordListMode", false, false, OS.DataTypes.DataTypes.Text, function () {
return "C";
}, true), 
this.attr("RecordMode", "recordModeAttr", "RecordMode", false, false, OS.DataTypes.DataTypes.Text, function () {
return "S";
}, true), 
this.attr("AttributePrefix", "attributePrefixAttr", "AttributePrefix", false, false, OS.DataTypes.DataTypes.Text, function () {
return "Attr_";
}, true), 
this.attr("ContentPrefix", "contentPrefixAttr", "ContentPrefix", false, false, OS.DataTypes.DataTypes.Text, function () {
return "Cont_";
}, true), 
this.attr("XmlDeclaration", "xmlDeclarationAttr", "XmlDeclaration", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_SDMReaderModel.XmlDeclarationRecord());
}, true, Extension_SDMReaderModel.XmlDeclarationRecord), 
this.attr("TypeDecimalCulture", "typeDecimalCultureAttr", "TypeDecimalCulture", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("TypeDateTimeFormat", "typeDateTimeFormatAttr", "TypeDateTimeFormat", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("TypeDateFormat", "typeDateFormatAttr", "TypeDateFormat", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("TypeTimeFormat", "typeTimeFormatAttr", "TypeTimeFormat", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
DefaultXmlConfigRec.init();
return DefaultXmlConfigRec;
})(OS.DataTypes.GenericRecord);
Extension_SDMReaderModel.DefaultXmlConfigRec = DefaultXmlConfigRec;

});
define("Extension.SDMReader.model$DefaultXmlConfigRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.SDMReader.model", "Extension.SDMReader.model$DefaultXmlConfigRec"], function (exports, OutSystems, Extension_SDMReaderModel) {
var OS = OutSystems.Internal;
var DefaultXmlConfigRecord = (function (_super) {
__extends(DefaultXmlConfigRecord, _super);
function DefaultXmlConfigRecord(defaults) {
_super.apply(this, arguments);
}
DefaultXmlConfigRecord.attributesToDeclare = function () {
return [
this.attr("DefaultXmlConfig", "defaultXmlConfigAttr", "DefaultXmlConfig", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_SDMReaderModel.DefaultXmlConfigRec());
}, true, Extension_SDMReaderModel.DefaultXmlConfigRec)
].concat(_super.attributesToDeclare.call(this));
};
DefaultXmlConfigRecord.fromStructure = function (str) {
return new DefaultXmlConfigRecord(new DefaultXmlConfigRecord.RecordClass({
defaultXmlConfigAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
DefaultXmlConfigRecord._isAnonymousRecord = true;
DefaultXmlConfigRecord.UniqueId = "fb0a61cc-3ebb-233a-31f0-09e9daac34a6";
DefaultXmlConfigRecord.init();
return DefaultXmlConfigRecord;
})(OS.DataTypes.GenericRecord);
Extension_SDMReaderModel.DefaultXmlConfigRecord = DefaultXmlConfigRecord;

});
define("Extension.SDMReader.model$DefaultXmlConfigRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.SDMReader.model", "Extension.SDMReader.model$DefaultXmlConfigRecord"], function (exports, OutSystems, Extension_SDMReaderModel) {
var OS = OutSystems.Internal;
var DefaultXmlConfigRecordList = (function (_super) {
__extends(DefaultXmlConfigRecordList, _super);
function DefaultXmlConfigRecordList(defaults) {
_super.apply(this, arguments);
}
DefaultXmlConfigRecordList.itemType = Extension_SDMReaderModel.DefaultXmlConfigRecord;
return DefaultXmlConfigRecordList;
})(OS.DataTypes.GenericRecordList);
Extension_SDMReaderModel.DefaultXmlConfigRecordList = DefaultXmlConfigRecordList;

});
define("Extension.SDMReader.model$SDMTestOfficeRecord", ["exports", "OutSystems/ClientRuntime/Main", "Extension.SDMReader.model", "Extension.SDMReader.model$SDMTestOfficeRec"], function (exports, OutSystems, Extension_SDMReaderModel) {
var OS = OutSystems.Internal;
var SDMTestOfficeRecord = (function (_super) {
__extends(SDMTestOfficeRecord, _super);
function SDMTestOfficeRecord(defaults) {
_super.apply(this, arguments);
}
SDMTestOfficeRecord.attributesToDeclare = function () {
return [
this.attr("SDMTestOffice", "sDMTestOfficeAttr", "SDMTestOffice", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new Extension_SDMReaderModel.SDMTestOfficeRec());
}, true, Extension_SDMReaderModel.SDMTestOfficeRec)
].concat(_super.attributesToDeclare.call(this));
};
SDMTestOfficeRecord.fromStructure = function (str) {
return new SDMTestOfficeRecord(new SDMTestOfficeRecord.RecordClass({
sDMTestOfficeAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
SDMTestOfficeRecord._isAnonymousRecord = true;
SDMTestOfficeRecord.UniqueId = "a19b13a4-976c-6c7c-a80c-940041da5965";
SDMTestOfficeRecord.init();
return SDMTestOfficeRecord;
})(OS.DataTypes.GenericRecord);
Extension_SDMReaderModel.SDMTestOfficeRecord = SDMTestOfficeRecord;

});
define("Extension.SDMReader.model$SDMTestCurrencyRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.SDMReader.model", "Extension.SDMReader.model$SDMTestCurrencyRecord"], function (exports, OutSystems, Extension_SDMReaderModel) {
var OS = OutSystems.Internal;
var SDMTestCurrencyRecordList = (function (_super) {
__extends(SDMTestCurrencyRecordList, _super);
function SDMTestCurrencyRecordList(defaults) {
_super.apply(this, arguments);
}
SDMTestCurrencyRecordList.itemType = Extension_SDMReaderModel.SDMTestCurrencyRecord;
return SDMTestCurrencyRecordList;
})(OS.DataTypes.GenericRecordList);
Extension_SDMReaderModel.SDMTestCurrencyRecordList = SDMTestCurrencyRecordList;

});
define("Extension.SDMReader.model$SDMTestOfficeRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.SDMReader.model", "Extension.SDMReader.model$SDMTestOfficeRecord"], function (exports, OutSystems, Extension_SDMReaderModel) {
var OS = OutSystems.Internal;
var SDMTestOfficeRecordList = (function (_super) {
__extends(SDMTestOfficeRecordList, _super);
function SDMTestOfficeRecordList(defaults) {
_super.apply(this, arguments);
}
SDMTestOfficeRecordList.itemType = Extension_SDMReaderModel.SDMTestOfficeRecord;
return SDMTestOfficeRecordList;
})(OS.DataTypes.GenericRecordList);
Extension_SDMReaderModel.SDMTestOfficeRecordList = SDMTestOfficeRecordList;

});
define("Extension.SDMReader.model$RecordXmlConfigRecordList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.SDMReader.model", "Extension.SDMReader.model$RecordXmlConfigRecord"], function (exports, OutSystems, Extension_SDMReaderModel) {
var OS = OutSystems.Internal;
var RecordXmlConfigRecordList = (function (_super) {
__extends(RecordXmlConfigRecordList, _super);
function RecordXmlConfigRecordList(defaults) {
_super.apply(this, arguments);
}
RecordXmlConfigRecordList.itemType = Extension_SDMReaderModel.RecordXmlConfigRecord;
return RecordXmlConfigRecordList;
})(OS.DataTypes.GenericRecordList);
Extension_SDMReaderModel.RecordXmlConfigRecordList = RecordXmlConfigRecordList;

});
define("Extension.SDMReader.model", ["exports", "OutSystems/ClientRuntime/Main"], function (exports, OutSystems) {
var OS = OutSystems.Internal;
var Extension_SDMReaderModel = exports;
});
