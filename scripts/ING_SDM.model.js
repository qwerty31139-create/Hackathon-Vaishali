define("ING_SDM.model$BaseEntityBancair_NRec", ["exports", "OutSystems/ClientRuntime/Main", "ING_SDM.model"], function (exports, OutSystems, ING_SDMModel) {
var OS = OutSystems.Internal;
var BaseEntityBancair_NRec = (function (_super) {
__extends(BaseEntityBancair_NRec, _super);
function BaseEntityBancair_NRec(defaults) {
_super.apply(this, arguments);
}
BaseEntityBancair_NRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("CCRM_CODE", "cCRM_CODEAttr", "CCRM_CODE", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ID_DESCRIPTION", "iD_DESCRIPTIONAttr", "ID_DESCRIPTION", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("PARENT", "pARENTAttr", "PARENT", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("PARENT_HLB", "pARENT_HLBAttr", "PARENT_HLB", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("BASE_ENTITY_ALCO_ID", "bASE_ENTITY_ALCO_IDAttr", "BASE_ENTITY_ALCO_ID", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("BASE_ENTITY_DS_ID", "bASE_ENTITY_DS_IDAttr", "BASE_ENTITY_DS_ID", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ANA_ELIGIBLE", "aNA_ELIGIBLEAttr", "ANA_ELIGIBLE", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("RRE_ELIGIBLE", "rRE_ELIGIBLEAttr", "RRE_ELIGIBLE", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CRE_ELIGIBLE", "cRE_ELIGIBLEAttr", "CRE_ELIGIBLE", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("FINREP_DET_ELIGIBLE", "fINREP_DET_ELIGIBLEAttr", "FINREP_DET_ELIGIBLE", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CTRY", "cTRYAttr", "CTRY", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DQ_REPORTING_MARKET_ID", "dQ_REPORTING_MARKET_IDAttr", "DQ_REPORTING_MARKET_ID", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MMT_ELIGIBLE", "mMT_ELIGIBLEAttr", "MMT_ELIGIBLE", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("WB_REGION", "wB_REGIONAttr", "WB_REGION", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsActive", "isActiveAttr", "IsActive", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Level", "levelAttr", "Level", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
BaseEntityBancair_NRec.init();
return BaseEntityBancair_NRec;
})(OS.DataTypes.GenericRecord);
ING_SDMModel.BaseEntityBancair_NRec = BaseEntityBancair_NRec;

});
define("ING_SDM.model$RealEstateLocation_NRec", ["exports", "OutSystems/ClientRuntime/Main", "ING_SDM.model"], function (exports, OutSystems, ING_SDMModel) {
var OS = OutSystems.Internal;
var RealEstateLocation_NRec = (function (_super) {
__extends(RealEstateLocation_NRec, _super);
function RealEstateLocation_NRec(defaults) {
_super.apply(this, arguments);
}
RealEstateLocation_NRec.attributesToDeclare = function () {
return [
this.attr("CODE", "cODEAttr", "CODE", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("EFF_DT", "eFF_DTAttr", "EFF_DT", true, false, OS.DataTypes.DataTypes.Date, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("END_DT", "eND_DTAttr", "END_DT", false, false, OS.DataTypes.DataTypes.Date, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("DSC", "dSCAttr", "DSC", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("PARENT", "pARENTAttr", "PARENT", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("EXTND_DSC", "eXTND_DSCAttr", "EXTND_DSC", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CHG_RSN", "cHG_RSNAttr", "CHG_RSN", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsActive", "isActiveAttr", "IsActive", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
RealEstateLocation_NRec.init();
return RealEstateLocation_NRec;
})(OS.DataTypes.GenericRecord);
ING_SDMModel.RealEstateLocation_NRec = RealEstateLocation_NRec;

});
define("ING_SDM.model$SeniorityCode_NRec", ["exports", "OutSystems/ClientRuntime/Main", "ING_SDM.model"], function (exports, OutSystems, ING_SDMModel) {
var OS = OutSystems.Internal;
var SeniorityCode_NRec = (function (_super) {
__extends(SeniorityCode_NRec, _super);
function SeniorityCode_NRec(defaults) {
_super.apply(this, arguments);
}
SeniorityCode_NRec.attributesToDeclare = function () {
return [
this.attr("Code", "codeAttr", "Code", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Description", "descriptionAttr", "Description", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ExtendedDescription", "extendedDescriptionAttr", "ExtendedDescription", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsActive", "isActiveAttr", "IsActive", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
SeniorityCode_NRec.init();
return SeniorityCode_NRec;
})(OS.DataTypes.GenericRecord);
ING_SDMModel.SeniorityCode_NRec = SeniorityCode_NRec;

});
define("ING_SDM.model$ReasonRec", ["exports", "OutSystems/ClientRuntime/Main", "ING_SDM.model"], function (exports, OutSystems, ING_SDMModel) {
var OS = OutSystems.Internal;
var ReasonRec = (function (_super) {
__extends(ReasonRec, _super);
function ReasonRec(defaults) {
_super.apply(this, arguments);
}
ReasonRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Code", "codeAttr", "Code", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Description", "descriptionAttr", "Description", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ReasonType", "reasonTypeAttr", "ReasonType", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("ParentCode", "parentCodeAttr", "ParentCode", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Level", "levelAttr", "Level", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("AddRemove", "addRemoveAttr", "AddRemove", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("IsNewDoD", "isNewDoDAttr", "IsNewDoD", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("RiskRaterVisibility", "riskRaterVisibilityAttr", "RiskRaterVisibility", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("RetailClassification", "retailClassificationAttr", "RetailClassification", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsActive", "isActiveAttr", "IsActive", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ReasonRec.init();
return ReasonRec;
})(OS.DataTypes.GenericRecord);
ING_SDMModel.ReasonRec = ReasonRec;

});
define("ING_SDM.model$SourceOfPaymentRec", ["exports", "OutSystems/ClientRuntime/Main", "ING_SDM.model"], function (exports, OutSystems, ING_SDMModel) {
var OS = OutSystems.Internal;
var SourceOfPaymentRec = (function (_super) {
__extends(SourceOfPaymentRec, _super);
function SourceOfPaymentRec(defaults) {
_super.apply(this, arguments);
}
SourceOfPaymentRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Description", "descriptionAttr", "Description", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Definition", "definitionAttr", "Definition", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsActive", "isActiveAttr", "IsActive", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
SourceOfPaymentRec.init();
return SourceOfPaymentRec;
})(OS.DataTypes.GenericRecord);
ING_SDMModel.SourceOfPaymentRec = SourceOfPaymentRec;

});
define("ING_SDM.model$RankOfSecurity_NRec", ["exports", "OutSystems/ClientRuntime/Main", "ING_SDM.model"], function (exports, OutSystems, ING_SDMModel) {
var OS = OutSystems.Internal;
var RankOfSecurity_NRec = (function (_super) {
__extends(RankOfSecurity_NRec, _super);
function RankOfSecurity_NRec(defaults) {
_super.apply(this, arguments);
}
RankOfSecurity_NRec.attributesToDeclare = function () {
return [
this.attr("Code", "codeAttr", "Code", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Description", "descriptionAttr", "Description", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ExtendedDescription", "extendedDescriptionAttr", "ExtendedDescription", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsActive", "isActiveAttr", "IsActive", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
RankOfSecurity_NRec.init();
return RankOfSecurity_NRec;
})(OS.DataTypes.GenericRecord);
ING_SDMModel.RankOfSecurity_NRec = RankOfSecurity_NRec;

});
define("ING_SDM.model$RealEstateClassRec", ["exports", "OutSystems/ClientRuntime/Main", "ING_SDM.model"], function (exports, OutSystems, ING_SDMModel) {
var OS = OutSystems.Internal;
var RealEstateClassRec = (function (_super) {
__extends(RealEstateClassRec, _super);
function RealEstateClassRec(defaults) {
_super.apply(this, arguments);
}
RealEstateClassRec.attributesToDeclare = function () {
return [
this.attr("Code", "codeAttr", "Code", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Description", "descriptionAttr", "Description", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ExtendedDescription", "extendedDescriptionAttr", "ExtendedDescription", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsActive", "isActiveAttr", "IsActive", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
RealEstateClassRec.init();
return RealEstateClassRec;
})(OS.DataTypes.GenericRecord);
ING_SDMModel.RealEstateClassRec = RealEstateClassRec;

});
define("ING_SDM.model$InterestRatesRec", ["exports", "OutSystems/ClientRuntime/Main", "ING_SDM.model"], function (exports, OutSystems, ING_SDMModel) {
var OS = OutSystems.Internal;
var InterestRatesRec = (function (_super) {
__extends(InterestRatesRec, _super);
function InterestRatesRec(defaults) {
_super.apply(this, arguments);
}
InterestRatesRec.attributesToDeclare = function () {
return [
this.attr("CCRM_Code", "cCRM_CodeAttr", "CCRM_Code", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Id_Description", "id_DescriptionAttr", "Id_Description", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("GMDB", "gMDBAttr", "GMDB", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Bloomberg", "bloombergAttr", "Bloomberg", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Reuters", "reutersAttr", "Reuters", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("InterestBaseId", "interestBaseIdAttr", "InterestBaseId", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("TenorType", "tenorTypeAttr", "TenorType", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("InterestRateType", "interestRateTypeAttr", "InterestRateType", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DayCount", "dayCountAttr", "DayCount", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CurrencyPriority", "currencyPriorityAttr", "CurrencyPriority", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("IsActive", "isActiveAttr", "IsActive", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
InterestRatesRec.init();
return InterestRatesRec;
})(OS.DataTypes.GenericRecord);
ING_SDMModel.InterestRatesRec = InterestRatesRec;

});
define("ING_SDM.model$RealEstateLocationRec", ["exports", "OutSystems/ClientRuntime/Main", "ING_SDM.model"], function (exports, OutSystems, ING_SDMModel) {
var OS = OutSystems.Internal;
var RealEstateLocationRec = (function (_super) {
__extends(RealEstateLocationRec, _super);
function RealEstateLocationRec(defaults) {
_super.apply(this, arguments);
}
RealEstateLocationRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Description", "descriptionAttr", "Description", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Definition", "definitionAttr", "Definition", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsActive", "isActiveAttr", "IsActive", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
RealEstateLocationRec.init();
return RealEstateLocationRec;
})(OS.DataTypes.GenericRecord);
ING_SDMModel.RealEstateLocationRec = RealEstateLocationRec;

});
define("ING_SDM.model$CR_Guarantee_Call_IndRec", ["exports", "OutSystems/ClientRuntime/Main", "ING_SDM.model"], function (exports, OutSystems, ING_SDMModel) {
var OS = OutSystems.Internal;
var CR_Guarantee_Call_IndRec = (function (_super) {
__extends(CR_Guarantee_Call_IndRec, _super);
function CR_Guarantee_Call_IndRec(defaults) {
_super.apply(this, arguments);
}
CR_Guarantee_Call_IndRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Description", "descriptionAttr", "Description", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Definition", "definitionAttr", "Definition", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsActive", "isActiveAttr", "IsActive", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
CR_Guarantee_Call_IndRec.init();
return CR_Guarantee_Call_IndRec;
})(OS.DataTypes.GenericRecord);
ING_SDMModel.CR_Guarantee_Call_IndRec = CR_Guarantee_Call_IndRec;

});
define("ING_SDM.model$CreditLossRootCauseRec", ["exports", "OutSystems/ClientRuntime/Main", "ING_SDM.model"], function (exports, OutSystems, ING_SDMModel) {
var OS = OutSystems.Internal;
var CreditLossRootCauseRec = (function (_super) {
__extends(CreditLossRootCauseRec, _super);
function CreditLossRootCauseRec(defaults) {
_super.apply(this, arguments);
}
CreditLossRootCauseRec.attributesToDeclare = function () {
return [
this.attr("CODE", "cODEAttr", "CODE", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("EFF_DT", "eFF_DTAttr", "EFF_DT", true, false, OS.DataTypes.DataTypes.Date, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("END_DT", "eND_DTAttr", "END_DT", false, false, OS.DataTypes.DataTypes.Date, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("DSC", "dSCAttr", "DSC", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("EXTND_DSC", "eXTND_DSCAttr", "EXTND_DSC", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CHG_RSN", "cHG_RSNAttr", "CHG_RSN", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsActive", "isActiveAttr", "IsActive", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
CreditLossRootCauseRec.init();
return CreditLossRootCauseRec;
})(OS.DataTypes.GenericRecord);
ING_SDMModel.CreditLossRootCauseRec = CreditLossRootCauseRec;

});
define("ING_SDM.model$CollateralValuationType_NRec", ["exports", "OutSystems/ClientRuntime/Main", "ING_SDM.model"], function (exports, OutSystems, ING_SDMModel) {
var OS = OutSystems.Internal;
var CollateralValuationType_NRec = (function (_super) {
__extends(CollateralValuationType_NRec, _super);
function CollateralValuationType_NRec(defaults) {
_super.apply(this, arguments);
}
CollateralValuationType_NRec.attributesToDeclare = function () {
return [
this.attr("Code", "codeAttr", "Code", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Description", "descriptionAttr", "Description", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ExtendedDescription", "extendedDescriptionAttr", "ExtendedDescription", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsActive", "isActiveAttr", "IsActive", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
CollateralValuationType_NRec.init();
return CollateralValuationType_NRec;
})(OS.DataTypes.GenericRecord);
ING_SDMModel.CollateralValuationType_NRec = CollateralValuationType_NRec;

});
define("ING_SDM.model$Lessons_Learned_Subject_TypeRec", ["exports", "OutSystems/ClientRuntime/Main", "ING_SDM.model"], function (exports, OutSystems, ING_SDMModel) {
var OS = OutSystems.Internal;
var Lessons_Learned_Subject_TypeRec = (function (_super) {
__extends(Lessons_Learned_Subject_TypeRec, _super);
function Lessons_Learned_Subject_TypeRec(defaults) {
_super.apply(this, arguments);
}
Lessons_Learned_Subject_TypeRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Code", "codeAttr", "Code", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Description", "descriptionAttr", "Description", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsActive", "isActiveAttr", "IsActive", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Lessons_Learned_Subject_TypeRec.init();
return Lessons_Learned_Subject_TypeRec;
})(OS.DataTypes.GenericRecord);
ING_SDMModel.Lessons_Learned_Subject_TypeRec = Lessons_Learned_Subject_TypeRec;

});
define("ING_SDM.model$GCDFacilityType_NRec", ["exports", "OutSystems/ClientRuntime/Main", "ING_SDM.model"], function (exports, OutSystems, ING_SDMModel) {
var OS = OutSystems.Internal;
var GCDFacilityType_NRec = (function (_super) {
__extends(GCDFacilityType_NRec, _super);
function GCDFacilityType_NRec(defaults) {
_super.apply(this, arguments);
}
GCDFacilityType_NRec.attributesToDeclare = function () {
return [
this.attr("Code", "codeAttr", "Code", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Description", "descriptionAttr", "Description", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ExtendedDescription", "extendedDescriptionAttr", "ExtendedDescription", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("GroupType", "groupTypeAttr", "GroupType", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("TermType", "termTypeAttr", "TermType", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("AssetClass", "assetClassAttr", "AssetClass", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("TradeFinanceInd", "tradeFinanceIndAttr", "TradeFinanceInd", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsActive", "isActiveAttr", "IsActive", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
GCDFacilityType_NRec.init();
return GCDFacilityType_NRec;
})(OS.DataTypes.GenericRecord);
ING_SDMModel.GCDFacilityType_NRec = GCDFacilityType_NRec;

});
define("ING_SDM.model$SDM_INTEREST_BASERec", ["exports", "OutSystems/ClientRuntime/Main", "ING_SDM.model"], function (exports, OutSystems, ING_SDMModel) {
var OS = OutSystems.Internal;
var SDM_INTEREST_BASERec = (function (_super) {
__extends(SDM_INTEREST_BASERec, _super);
function SDM_INTEREST_BASERec(defaults) {
_super.apply(this, arguments);
}
SDM_INTEREST_BASERec.attributesToDeclare = function () {
return [
this.attr("CCRM_CODE", "cCRM_CODEAttr", "CCRM_CODE", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DESCRIPTION", "dESCRIPTIONAttr", "DESCRIPTION", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CURRENCY", "cURRENCYAttr", "CURRENCY", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DEFAULT_INTEREST_SIZE", "dEFAULT_INTEREST_SIZEAttr", "DEFAULT_INTEREST_SIZE", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("TIME_UNIT", "tIME_UNITAttr", "TIME_UNIT", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("TENOR_BUCKET_TIME_BAND", "tENOR_BUCKET_TIME_BANDAttr", "TENOR_BUCKET_TIME_BAND", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DEFAULT_INTEREST_DC_FIXED", "dEFAULT_INTEREST_DC_FIXEDAttr", "DEFAULT_INTEREST_DC_FIXED", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("PRIORITY", "pRIORITYAttr", "PRIORITY", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("COUPON_TYPE", "cOUPON_TYPEAttr", "COUPON_TYPE", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DAYCOUNT", "dAYCOUNTAttr", "DAYCOUNT", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("GCD_BASE_RATE_ID", "gCD_BASE_RATE_IDAttr", "GCD_BASE_RATE_ID", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IS_ACTIVE", "iS_ACTIVEAttr", "IS_ACTIVE", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
SDM_INTEREST_BASERec.init();
return SDM_INTEREST_BASERec;
})(OS.DataTypes.GenericRecord);
ING_SDMModel.SDM_INTEREST_BASERec = SDM_INTEREST_BASERec;

});
define("ING_SDM.model$SDM_REAL_ESTATE_LOC_NRec", ["exports", "OutSystems/ClientRuntime/Main", "ING_SDM.model"], function (exports, OutSystems, ING_SDMModel) {
var OS = OutSystems.Internal;
var SDM_REAL_ESTATE_LOC_NRec = (function (_super) {
__extends(SDM_REAL_ESTATE_LOC_NRec, _super);
function SDM_REAL_ESTATE_LOC_NRec(defaults) {
_super.apply(this, arguments);
}
SDM_REAL_ESTATE_LOC_NRec.attributesToDeclare = function () {
return [
this.attr("CODE", "cODEAttr", "CODE", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("EFF_DT", "eFF_DTAttr", "EFF_DT", true, false, OS.DataTypes.DataTypes.Date, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("END_DT", "eND_DTAttr", "END_DT", false, false, OS.DataTypes.DataTypes.Date, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("DSC", "dSCAttr", "DSC", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("PARENT", "pARENTAttr", "PARENT", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("EXTND_DSC", "eXTND_DSCAttr", "EXTND_DSC", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CHG_RSN", "cHG_RSNAttr", "CHG_RSN", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IS_ACTIVE", "iS_ACTIVEAttr", "IS_ACTIVE", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
SDM_REAL_ESTATE_LOC_NRec.init();
return SDM_REAL_ESTATE_LOC_NRec;
})(OS.DataTypes.GenericRecord);
ING_SDMModel.SDM_REAL_ESTATE_LOC_NRec = SDM_REAL_ESTATE_LOC_NRec;

});
define("ING_SDM.model$SDM_GCD_BASE_RATERec", ["exports", "OutSystems/ClientRuntime/Main", "ING_SDM.model"], function (exports, OutSystems, ING_SDMModel) {
var OS = OutSystems.Internal;
var SDM_GCD_BASE_RATERec = (function (_super) {
__extends(SDM_GCD_BASE_RATERec, _super);
function SDM_GCD_BASE_RATERec(defaults) {
_super.apply(this, arguments);
}
SDM_GCD_BASE_RATERec.attributesToDeclare = function () {
return [
this.attr("GCD_BASE_RATE_ID", "gCD_BASE_RATE_IDAttr", "GCD_BASE_RATE_ID", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DESCRIPTION", "dESCRIPTIONAttr", "DESCRIPTION", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IS_ACTIVE", "iS_ACTIVEAttr", "IS_ACTIVE", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
SDM_GCD_BASE_RATERec.init();
return SDM_GCD_BASE_RATERec;
})(OS.DataTypes.GenericRecord);
ING_SDMModel.SDM_GCD_BASE_RATERec = SDM_GCD_BASE_RATERec;

});
define("ING_SDM.model$ProjectType_NRec", ["exports", "OutSystems/ClientRuntime/Main", "ING_SDM.model"], function (exports, OutSystems, ING_SDMModel) {
var OS = OutSystems.Internal;
var ProjectType_NRec = (function (_super) {
__extends(ProjectType_NRec, _super);
function ProjectType_NRec(defaults) {
_super.apply(this, arguments);
}
ProjectType_NRec.attributesToDeclare = function () {
return [
this.attr("Code", "codeAttr", "Code", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Description", "descriptionAttr", "Description", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ExtendedDescription", "extendedDescriptionAttr", "ExtendedDescription", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsActive", "isActiveAttr", "IsActive", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ProjectType_NRec.init();
return ProjectType_NRec;
})(OS.DataTypes.GenericRecord);
ING_SDMModel.ProjectType_NRec = ProjectType_NRec;

});
define("ING_SDM.model$GCDFacilityTypeRec", ["exports", "OutSystems/ClientRuntime/Main", "ING_SDM.model"], function (exports, OutSystems, ING_SDMModel) {
var OS = OutSystems.Internal;
var GCDFacilityTypeRec = (function (_super) {
__extends(GCDFacilityTypeRec, _super);
function GCDFacilityTypeRec(defaults) {
_super.apply(this, arguments);
}
GCDFacilityTypeRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Description", "descriptionAttr", "Description", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Definition", "definitionAttr", "Definition", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("GroupType", "groupTypeAttr", "GroupType", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("TermType", "termTypeAttr", "TermType", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("AssetClass", "assetClassAttr", "AssetClass", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("TradeFinanceInd", "tradeFinanceIndAttr", "TradeFinanceInd", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsActive", "isActiveAttr", "IsActive", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
GCDFacilityTypeRec.init();
return GCDFacilityTypeRec;
})(OS.DataTypes.GenericRecord);
ING_SDMModel.GCDFacilityTypeRec = GCDFacilityTypeRec;

});
define("ING_SDM.model$SeniorityCodeRec", ["exports", "OutSystems/ClientRuntime/Main", "ING_SDM.model"], function (exports, OutSystems, ING_SDMModel) {
var OS = OutSystems.Internal;
var SeniorityCodeRec = (function (_super) {
__extends(SeniorityCodeRec, _super);
function SeniorityCodeRec(defaults) {
_super.apply(this, arguments);
}
SeniorityCodeRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Description", "descriptionAttr", "Description", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Definition", "definitionAttr", "Definition", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsActive", "isActiveAttr", "IsActive", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
SeniorityCodeRec.init();
return SeniorityCodeRec;
})(OS.DataTypes.GenericRecord);
ING_SDMModel.SeniorityCodeRec = SeniorityCodeRec;

});
define("ING_SDM.model$Exposure_SeniorityRec", ["exports", "OutSystems/ClientRuntime/Main", "ING_SDM.model"], function (exports, OutSystems, ING_SDMModel) {
var OS = OutSystems.Internal;
var Exposure_SeniorityRec = (function (_super) {
__extends(Exposure_SeniorityRec, _super);
function Exposure_SeniorityRec(defaults) {
_super.apply(this, arguments);
}
Exposure_SeniorityRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Code", "codeAttr", "Code", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Label", "labelAttr", "Label", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Order", "orderAttr", "Order", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("IsActive", "isActiveAttr", "IsActive", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Exposure_SeniorityRec.init();
return Exposure_SeniorityRec;
})(OS.DataTypes.GenericRecord);
ING_SDMModel.Exposure_SeniorityRec = Exposure_SeniorityRec;

});
define("ING_SDM.model$OutFlowReasonsCategoryRec", ["exports", "OutSystems/ClientRuntime/Main", "ING_SDM.model"], function (exports, OutSystems, ING_SDMModel) {
var OS = OutSystems.Internal;
var OutFlowReasonsCategoryRec = (function (_super) {
__extends(OutFlowReasonsCategoryRec, _super);
function OutFlowReasonsCategoryRec(defaults) {
_super.apply(this, arguments);
}
OutFlowReasonsCategoryRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Label", "labelAttr", "Label", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Order", "orderAttr", "Order", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
OutFlowReasonsCategoryRec.init();
return OutFlowReasonsCategoryRec;
})(OS.DataTypes.GenericRecord);
ING_SDMModel.OutFlowReasonsCategoryRec = OutFlowReasonsCategoryRec;

});
define("ING_SDM.model$CR_Collateral_Sale_IndRec", ["exports", "OutSystems/ClientRuntime/Main", "ING_SDM.model"], function (exports, OutSystems, ING_SDMModel) {
var OS = OutSystems.Internal;
var CR_Collateral_Sale_IndRec = (function (_super) {
__extends(CR_Collateral_Sale_IndRec, _super);
function CR_Collateral_Sale_IndRec(defaults) {
_super.apply(this, arguments);
}
CR_Collateral_Sale_IndRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Description", "descriptionAttr", "Description", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Definition", "definitionAttr", "Definition", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsActive", "isActiveAttr", "IsActive", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
CR_Collateral_Sale_IndRec.init();
return CR_Collateral_Sale_IndRec;
})(OS.DataTypes.GenericRecord);
ING_SDMModel.CR_Collateral_Sale_IndRec = CR_Collateral_Sale_IndRec;

});
define("ING_SDM.model$CR_Workout_Proc_TypeRec", ["exports", "OutSystems/ClientRuntime/Main", "ING_SDM.model"], function (exports, OutSystems, ING_SDMModel) {
var OS = OutSystems.Internal;
var CR_Workout_Proc_TypeRec = (function (_super) {
__extends(CR_Workout_Proc_TypeRec, _super);
function CR_Workout_Proc_TypeRec(defaults) {
_super.apply(this, arguments);
}
CR_Workout_Proc_TypeRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Description", "descriptionAttr", "Description", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Definition", "definitionAttr", "Definition", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsActive", "isActiveAttr", "IsActive", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
CR_Workout_Proc_TypeRec.init();
return CR_Workout_Proc_TypeRec;
})(OS.DataTypes.GenericRecord);
ING_SDMModel.CR_Workout_Proc_TypeRec = CR_Workout_Proc_TypeRec;

});
define("ING_SDM.model$CollectionMethodRec", ["exports", "OutSystems/ClientRuntime/Main", "ING_SDM.model"], function (exports, OutSystems, ING_SDMModel) {
var OS = OutSystems.Internal;
var CollectionMethodRec = (function (_super) {
__extends(CollectionMethodRec, _super);
function CollectionMethodRec(defaults) {
_super.apply(this, arguments);
}
CollectionMethodRec.attributesToDeclare = function () {
return [
this.attr("Code", "codeAttr", "Code", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Description", "descriptionAttr", "Description", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ExtendedDescription", "extendedDescriptionAttr", "ExtendedDescription", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsActive", "isActiveAttr", "IsActive", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
CollectionMethodRec.init();
return CollectionMethodRec;
})(OS.DataTypes.GenericRecord);
ING_SDMModel.CollectionMethodRec = CollectionMethodRec;

});
define("ING_SDM.model$SystemRec", ["exports", "OutSystems/ClientRuntime/Main", "ING_SDM.model"], function (exports, OutSystems, ING_SDMModel) {
var OS = OutSystems.Internal;
var SystemRec = (function (_super) {
__extends(SystemRec, _super);
function SystemRec(defaults) {
_super.apply(this, arguments);
}
SystemRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Code", "codeAttr", "Code", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Description", "descriptionAttr", "Description", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Internal", "internalAttr", "Internal", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsActive", "isActiveAttr", "IsActive", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("UpdatedDate", "updatedDateAttr", "UpdatedDate", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
SystemRec.init();
return SystemRec;
})(OS.DataTypes.GenericRecord);
ING_SDMModel.SystemRec = SystemRec;

});
define("ING_SDM.model$CurrencyRec", ["exports", "OutSystems/ClientRuntime/Main", "ING_SDM.model"], function (exports, OutSystems, ING_SDMModel) {
var OS = OutSystems.Internal;
var CurrencyRec = (function (_super) {
__extends(CurrencyRec, _super);
function CurrencyRec(defaults) {
_super.apply(this, arguments);
}
CurrencyRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Code", "codeAttr", "Code", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Description", "descriptionAttr", "Description", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DevelopedMarket", "developedMarketAttr", "DevelopedMarket", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsActive", "isActiveAttr", "IsActive", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("UpdatedDate", "updatedDateAttr", "UpdatedDate", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
CurrencyRec.init();
return CurrencyRec;
})(OS.DataTypes.GenericRecord);
ING_SDMModel.CurrencyRec = CurrencyRec;

});
define("ING_SDM.model$RegCoverTypeClassRec", ["exports", "OutSystems/ClientRuntime/Main", "ING_SDM.model"], function (exports, OutSystems, ING_SDMModel) {
var OS = OutSystems.Internal;
var RegCoverTypeClassRec = (function (_super) {
__extends(RegCoverTypeClassRec, _super);
function RegCoverTypeClassRec(defaults) {
_super.apply(this, arguments);
}
RegCoverTypeClassRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Description", "descriptionAttr", "Description", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CRR_REF", "cRR_REFAttr", "CRR_REF", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("AQR_CODE", "aQR_CODEAttr", "AQR_CODE", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("COREP_IRB", "cOREP_IRBAttr", "COREP_IRB", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("FundedIndicator", "fundedIndicatorAttr", "FundedIndicator", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("AnaCreditProtectionType", "anaCreditProtectionTypeAttr", "AnaCreditProtectionType", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("AnaProtectionValueType", "anaProtectionValueTypeAttr", "AnaProtectionValueType", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("FINREPCoverType", "fINREPCoverTypeAttr", "FINREPCoverType", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CollateralValueType", "collateralValueTypeAttr", "CollateralValueType", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("IsActive", "isActiveAttr", "IsActive", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
RegCoverTypeClassRec.init();
return RegCoverTypeClassRec;
})(OS.DataTypes.GenericRecord);
ING_SDMModel.RegCoverTypeClassRec = RegCoverTypeClassRec;

});
define("ING_SDM.model$InterestBaseRec", ["exports", "OutSystems/ClientRuntime/Main", "ING_SDM.model"], function (exports, OutSystems, ING_SDMModel) {
var OS = OutSystems.Internal;
var InterestBaseRec = (function (_super) {
__extends(InterestBaseRec, _super);
function InterestBaseRec(defaults) {
_super.apply(this, arguments);
}
InterestBaseRec.attributesToDeclare = function () {
return [
this.attr("CCRM_Code", "cCRM_CodeAttr", "CCRM_Code", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Description", "descriptionAttr", "Description", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Currency", "currencyAttr", "Currency", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DefaultInterestSize", "defaultInterestSizeAttr", "DefaultInterestSize", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("TimeUnit", "timeUnitAttr", "TimeUnit", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("TenorBucketTimeBand", "tenorBucketTimeBandAttr", "TenorBucketTimeBand", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DefaultInterestDCFixed", "defaultInterestDCFixedAttr", "DefaultInterestDCFixed", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Priority", "priorityAttr", "Priority", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("CouponType", "couponTypeAttr", "CouponType", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DayCount", "dayCountAttr", "DayCount", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("GCDBaseRateId", "gCDBaseRateIdAttr", "GCDBaseRateId", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsActive", "isActiveAttr", "IsActive", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
InterestBaseRec.init();
return InterestBaseRec;
})(OS.DataTypes.GenericRecord);
ING_SDMModel.InterestBaseRec = InterestBaseRec;

});
define("ING_SDM.model$ShipSizeUnitsRec", ["exports", "OutSystems/ClientRuntime/Main", "ING_SDM.model"], function (exports, OutSystems, ING_SDMModel) {
var OS = OutSystems.Internal;
var ShipSizeUnitsRec = (function (_super) {
__extends(ShipSizeUnitsRec, _super);
function ShipSizeUnitsRec(defaults) {
_super.apply(this, arguments);
}
ShipSizeUnitsRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Description", "descriptionAttr", "Description", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("GCDShipSizeUnitId", "gCDShipSizeUnitIdAttr", "GCDShipSizeUnitId", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("IsActive", "isActiveAttr", "IsActive", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ShipSizeUnitsRec.init();
return ShipSizeUnitsRec;
})(OS.DataTypes.GenericRecord);
ING_SDMModel.ShipSizeUnitsRec = ShipSizeUnitsRec;

});
define("ING_SDM.model$ProjectFinanceTechnologyRec", ["exports", "OutSystems/ClientRuntime/Main", "ING_SDM.model"], function (exports, OutSystems, ING_SDMModel) {
var OS = OutSystems.Internal;
var ProjectFinanceTechnologyRec = (function (_super) {
__extends(ProjectFinanceTechnologyRec, _super);
function ProjectFinanceTechnologyRec(defaults) {
_super.apply(this, arguments);
}
ProjectFinanceTechnologyRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Description", "descriptionAttr", "Description", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("GCDProjectFintechId", "gCDProjectFintechIdAttr", "GCDProjectFintechId", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("IsActive", "isActiveAttr", "IsActive", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ProjectFinanceTechnologyRec.init();
return ProjectFinanceTechnologyRec;
})(OS.DataTypes.GenericRecord);
ING_SDMModel.ProjectFinanceTechnologyRec = ProjectFinanceTechnologyRec;

});
define("ING_SDM.model$CustomerTypeRec", ["exports", "OutSystems/ClientRuntime/Main", "ING_SDM.model"], function (exports, OutSystems, ING_SDMModel) {
var OS = OutSystems.Internal;
var CustomerTypeRec = (function (_super) {
__extends(CustomerTypeRec, _super);
function CustomerTypeRec(defaults) {
_super.apply(this, arguments);
}
CustomerTypeRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("CCRMCode", "cCRMCodeAttr", "CCRMCode", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Description", "descriptionAttr", "Description", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsRetail", "isRetailAttr", "IsRetail", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("IsActive", "isActiveAttr", "IsActive", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
CustomerTypeRec.init();
return CustomerTypeRec;
})(OS.DataTypes.GenericRecord);
ING_SDMModel.CustomerTypeRec = CustomerTypeRec;

});
define("ING_SDM.model$TransactionType_NRec", ["exports", "OutSystems/ClientRuntime/Main", "ING_SDM.model"], function (exports, OutSystems, ING_SDMModel) {
var OS = OutSystems.Internal;
var TransactionType_NRec = (function (_super) {
__extends(TransactionType_NRec, _super);
function TransactionType_NRec(defaults) {
_super.apply(this, arguments);
}
TransactionType_NRec.attributesToDeclare = function () {
return [
this.attr("Code", "codeAttr", "Code", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Description", "descriptionAttr", "Description", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ExtendedDescription", "extendedDescriptionAttr", "ExtendedDescription", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsActive", "isActiveAttr", "IsActive", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
TransactionType_NRec.init();
return TransactionType_NRec;
})(OS.DataTypes.GenericRecord);
ING_SDMModel.TransactionType_NRec = TransactionType_NRec;

});
define("ING_SDM.model$RankRec", ["exports", "OutSystems/ClientRuntime/Main", "ING_SDM.model"], function (exports, OutSystems, ING_SDMModel) {
var OS = OutSystems.Internal;
var RankRec = (function (_super) {
__extends(RankRec, _super);
function RankRec(defaults) {
_super.apply(this, arguments);
}
RankRec.attributesToDeclare = function () {
return [
this.attr("CCRM_Code", "cCRM_CodeAttr", "CCRM_Code", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DSC", "dSCAttr", "DSC", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DEFN", "dEFNAttr", "DEFN", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SenorityId", "senorityIdAttr", "SenorityId", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsActive", "isActiveAttr", "IsActive", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
RankRec.init();
return RankRec;
})(OS.DataTypes.GenericRecord);
ING_SDMModel.RankRec = RankRec;

});
define("ING_SDM.model$CostRecovery_SignalTypeRec", ["exports", "OutSystems/ClientRuntime/Main", "ING_SDM.model"], function (exports, OutSystems, ING_SDMModel) {
var OS = OutSystems.Internal;
var CostRecovery_SignalTypeRec = (function (_super) {
__extends(CostRecovery_SignalTypeRec, _super);
function CostRecovery_SignalTypeRec(defaults) {
_super.apply(this, arguments);
}
CostRecovery_SignalTypeRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Label", "labelAttr", "Label", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Order", "orderAttr", "Order", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Abbreviation", "abbreviationAttr", "Abbreviation", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Value", "valueAttr", "Value", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
CostRecovery_SignalTypeRec.init();
return CostRecovery_SignalTypeRec;
})(OS.DataTypes.GenericRecord);
ING_SDMModel.CostRecovery_SignalTypeRec = CostRecovery_SignalTypeRec;

});
define("ING_SDM.model$Cover_TypeRec", ["exports", "OutSystems/ClientRuntime/Main", "ING_SDM.model"], function (exports, OutSystems, ING_SDMModel) {
var OS = OutSystems.Internal;
var Cover_TypeRec = (function (_super) {
__extends(Cover_TypeRec, _super);
function Cover_TypeRec(defaults) {
_super.apply(this, arguments);
}
Cover_TypeRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Label", "labelAttr", "Label", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Code", "codeAttr", "Code", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("RegCoverTypeClassId", "regCoverTypeClassIdAttr", "RegCoverTypeClassId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("AssetTypeId", "assetTypeIdAttr", "AssetTypeId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Parent", "parentAttr", "Parent", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsActive", "isActiveAttr", "IsActive", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("UpdatedDate", "updatedDateAttr", "UpdatedDate", true, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Cover_TypeRec.init();
return Cover_TypeRec;
})(OS.DataTypes.GenericRecord);
ING_SDMModel.Cover_TypeRec = Cover_TypeRec;

});
define("ING_SDM.model$CountryRec", ["exports", "OutSystems/ClientRuntime/Main", "ING_SDM.model"], function (exports, OutSystems, ING_SDMModel) {
var OS = OutSystems.Internal;
var CountryRec = (function (_super) {
__extends(CountryRec, _super);
function CountryRec(defaults) {
_super.apply(this, arguments);
}
CountryRec.attributesToDeclare = function () {
return [
this.attr("Code", "codeAttr", "Code", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ISO3Digit", "iSO3DigitAttr", "ISO3Digit", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Description", "descriptionAttr", "Description", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("GridIdCentralGovernment", "gridIdCentralGovernmentAttr", "GridIdCentralGovernment", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("GridIdCountry", "gridIdCountryAttr", "GridIdCountry", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("CurrencyId", "currencyIdAttr", "CurrencyId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("IsActive", "isActiveAttr", "IsActive", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
CountryRec.init();
return CountryRec;
})(OS.DataTypes.GenericRecord);
ING_SDMModel.CountryRec = CountryRec;

});
define("ING_SDM.model$SDM_GCD_SOURCE_OF_PAYMENT_NRec", ["exports", "OutSystems/ClientRuntime/Main", "ING_SDM.model"], function (exports, OutSystems, ING_SDMModel) {
var OS = OutSystems.Internal;
var SDM_GCD_SOURCE_OF_PAYMENT_NRec = (function (_super) {
__extends(SDM_GCD_SOURCE_OF_PAYMENT_NRec, _super);
function SDM_GCD_SOURCE_OF_PAYMENT_NRec(defaults) {
_super.apply(this, arguments);
}
SDM_GCD_SOURCE_OF_PAYMENT_NRec.attributesToDeclare = function () {
return [
this.attr("CODE", "cODEAttr", "CODE", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("EFF_DT", "eFF_DTAttr", "EFF_DT", true, false, OS.DataTypes.DataTypes.Date, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("END_DT", "eND_DTAttr", "END_DT", false, false, OS.DataTypes.DataTypes.Date, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("DSC", "dSCAttr", "DSC", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("PARENT", "pARENTAttr", "PARENT", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("EXTND_DSC", "eXTND_DSCAttr", "EXTND_DSC", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CHG_RSN", "cHG_RSNAttr", "CHG_RSN", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IS_ACTIVE", "iS_ACTIVEAttr", "IS_ACTIVE", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
SDM_GCD_SOURCE_OF_PAYMENT_NRec.init();
return SDM_GCD_SOURCE_OF_PAYMENT_NRec;
})(OS.DataTypes.GenericRecord);
ING_SDMModel.SDM_GCD_SOURCE_OF_PAYMENT_NRec = SDM_GCD_SOURCE_OF_PAYMENT_NRec;

});
define("ING_SDM.model$LienMortgageRec", ["exports", "OutSystems/ClientRuntime/Main", "ING_SDM.model"], function (exports, OutSystems, ING_SDMModel) {
var OS = OutSystems.Internal;
var LienMortgageRec = (function (_super) {
__extends(LienMortgageRec, _super);
function LienMortgageRec(defaults) {
_super.apply(this, arguments);
}
LienMortgageRec.attributesToDeclare = function () {
return [
this.attr("CCRM_Code", "cCRM_CodeAttr", "CCRM_Code", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Description", "descriptionAttr", "Description", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("RankOfSecurityId", "rankOfSecurityIdAttr", "RankOfSecurityId", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("IsActive", "isActiveAttr", "IsActive", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
LienMortgageRec.init();
return LienMortgageRec;
})(OS.DataTypes.GenericRecord);
ING_SDMModel.LienMortgageRec = LienMortgageRec;

});
define("ING_SDM.model$CR_RecoveryTypeRec", ["exports", "OutSystems/ClientRuntime/Main", "ING_SDM.model"], function (exports, OutSystems, ING_SDMModel) {
var OS = OutSystems.Internal;
var CR_RecoveryTypeRec = (function (_super) {
__extends(CR_RecoveryTypeRec, _super);
function CR_RecoveryTypeRec(defaults) {
_super.apply(this, arguments);
}
CR_RecoveryTypeRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Description", "descriptionAttr", "Description", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Definition", "definitionAttr", "Definition", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("TransactionTypeId", "transactionTypeIdAttr", "TransactionTypeId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("IsActive", "isActiveAttr", "IsActive", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
CR_RecoveryTypeRec.init();
return CR_RecoveryTypeRec;
})(OS.DataTypes.GenericRecord);
ING_SDMModel.CR_RecoveryTypeRec = CR_RecoveryTypeRec;

});
define("ING_SDM.model$ProjectTypeRec", ["exports", "OutSystems/ClientRuntime/Main", "ING_SDM.model"], function (exports, OutSystems, ING_SDMModel) {
var OS = OutSystems.Internal;
var ProjectTypeRec = (function (_super) {
__extends(ProjectTypeRec, _super);
function ProjectTypeRec(defaults) {
_super.apply(this, arguments);
}
ProjectTypeRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Description", "descriptionAttr", "Description", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Definition", "definitionAttr", "Definition", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsActive", "isActiveAttr", "IsActive", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ProjectTypeRec.init();
return ProjectTypeRec;
})(OS.DataTypes.GenericRecord);
ING_SDMModel.ProjectTypeRec = ProjectTypeRec;

});
define("ING_SDM.model$CostRecovery_TypeRec", ["exports", "OutSystems/ClientRuntime/Main", "ING_SDM.model"], function (exports, OutSystems, ING_SDMModel) {
var OS = OutSystems.Internal;
var CostRecovery_TypeRec = (function (_super) {
__extends(CostRecovery_TypeRec, _super);
function CostRecovery_TypeRec(defaults) {
_super.apply(this, arguments);
}
CostRecovery_TypeRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Code", "codeAttr", "Code", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Label", "labelAttr", "Label", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SignalType", "signalTypeAttr", "SignalType", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("IsActive", "isActiveAttr", "IsActive", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
CostRecovery_TypeRec.init();
return CostRecovery_TypeRec;
})(OS.DataTypes.GenericRecord);
ING_SDMModel.CostRecovery_TypeRec = CostRecovery_TypeRec;

});
define("ING_SDM.model$CR_RecoverySourceRec", ["exports", "OutSystems/ClientRuntime/Main", "ING_SDM.model"], function (exports, OutSystems, ING_SDMModel) {
var OS = OutSystems.Internal;
var CR_RecoverySourceRec = (function (_super) {
__extends(CR_RecoverySourceRec, _super);
function CR_RecoverySourceRec(defaults) {
_super.apply(this, arguments);
}
CR_RecoverySourceRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Description", "descriptionAttr", "Description", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Definition", "definitionAttr", "Definition", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SourcePaymentId", "sourcePaymentIdAttr", "SourcePaymentId", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("IsActive", "isActiveAttr", "IsActive", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
CR_RecoverySourceRec.init();
return CR_RecoverySourceRec;
})(OS.DataTypes.GenericRecord);
ING_SDMModel.CR_RecoverySourceRec = CR_RecoverySourceRec;

});
define("ING_SDM.model$Limit_TypeRec", ["exports", "OutSystems/ClientRuntime/Main", "ING_SDM.model"], function (exports, OutSystems, ING_SDMModel) {
var OS = OutSystems.Internal;
var Limit_TypeRec = (function (_super) {
__extends(Limit_TypeRec, _super);
function Limit_TypeRec(defaults) {
_super.apply(this, arguments);
}
Limit_TypeRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Code", "codeAttr", "Code", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Description", "descriptionAttr", "Description", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ParentCode", "parentCodeAttr", "ParentCode", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ParentDescription", "parentDescriptionAttr", "ParentDescription", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Level", "levelAttr", "Level", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("DefaultPurposeCode", "defaultPurposeCodeAttr", "DefaultPurposeCode", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DefaultPurposeDescription", "defaultPurposeDescriptionAttr", "DefaultPurposeDescription", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LLPIncludedAssigned", "lLPIncludedAssignedAttr", "LLPIncludedAssigned", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LLPIncludedCascade", "lLPIncludedCascadeAttr", "LLPIncludedCascade", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LLPIncludedDescriptionCascad", "lLPIncludedDescriptionCascadAttr", "LLPIncludedDescriptionCascad", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ID_COLUMNLevel1", "iD_COLUMNLevel1Attr", "ID_COLUMNLevel1", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ID_COLUMNLevel1Description", "iD_COLUMNLevel1DescriptionAttr", "ID_COLUMNLevel1Description", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ID_COLUMNLevel2", "iD_COLUMNLevel2Attr", "ID_COLUMNLevel2", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ID_COLUMNLevel2Description", "iD_COLUMNLevel2DescriptionAttr", "ID_COLUMNLevel2Description", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ID_COLUMNLevel3", "iD_COLUMNLevel3Attr", "ID_COLUMNLevel3", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ID_COLUMNLevel3Description", "iD_COLUMNLevel3DescriptionAttr", "ID_COLUMNLevel3Description", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ID_COLUMNLevel4", "iD_COLUMNLevel4Attr", "ID_COLUMNLevel4", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ID_COLUMNLevel4Description", "iD_COLUMNLevel4DescriptionAttr", "ID_COLUMNLevel4Description", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ID_COLUMNLevel5", "iD_COLUMNLevel5Attr", "ID_COLUMNLevel5", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("ID_COLUMNLevel5Description", "iD_COLUMNLevel5DescriptionAttr", "ID_COLUMNLevel5Description", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("GCDFacilityTypeId", "gCDFacilityTypeIdAttr", "GCDFacilityTypeId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsActive", "isActiveAttr", "IsActive", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Limit_TypeRec.init();
return Limit_TypeRec;
})(OS.DataTypes.GenericRecord);
ING_SDMModel.Limit_TypeRec = Limit_TypeRec;

});
define("ING_SDM.model$GCDBaseRate_NRec", ["exports", "OutSystems/ClientRuntime/Main", "ING_SDM.model"], function (exports, OutSystems, ING_SDMModel) {
var OS = OutSystems.Internal;
var GCDBaseRate_NRec = (function (_super) {
__extends(GCDBaseRate_NRec, _super);
function GCDBaseRate_NRec(defaults) {
_super.apply(this, arguments);
}
GCDBaseRate_NRec.attributesToDeclare = function () {
return [
this.attr("Code", "codeAttr", "Code", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Description", "descriptionAttr", "Description", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ExtendedDescription", "extendedDescriptionAttr", "ExtendedDescription", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsActive", "isActiveAttr", "IsActive", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
GCDBaseRate_NRec.init();
return GCDBaseRate_NRec;
})(OS.DataTypes.GenericRecord);
ING_SDMModel.GCDBaseRate_NRec = GCDBaseRate_NRec;

});
define("ING_SDM.model$Operational_Risk_TypeRec", ["exports", "OutSystems/ClientRuntime/Main", "ING_SDM.model"], function (exports, OutSystems, ING_SDMModel) {
var OS = OutSystems.Internal;
var Operational_Risk_TypeRec = (function (_super) {
__extends(Operational_Risk_TypeRec, _super);
function Operational_Risk_TypeRec(defaults) {
_super.apply(this, arguments);
}
Operational_Risk_TypeRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Code", "codeAttr", "Code", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Description", "descriptionAttr", "Description", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsActive", "isActiveAttr", "IsActive", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Operational_Risk_TypeRec.init();
return Operational_Risk_TypeRec;
})(OS.DataTypes.GenericRecord);
ING_SDMModel.Operational_Risk_TypeRec = Operational_Risk_TypeRec;

});
define("ING_SDM.model$AddRemoveIndicatorRec", ["exports", "OutSystems/ClientRuntime/Main", "ING_SDM.model"], function (exports, OutSystems, ING_SDMModel) {
var OS = OutSystems.Internal;
var AddRemoveIndicatorRec = (function (_super) {
__extends(AddRemoveIndicatorRec, _super);
function AddRemoveIndicatorRec(defaults) {
_super.apply(this, arguments);
}
AddRemoveIndicatorRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Label", "labelAttr", "Label", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Order", "orderAttr", "Order", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Code", "codeAttr", "Code", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
AddRemoveIndicatorRec.init();
return AddRemoveIndicatorRec;
})(OS.DataTypes.GenericRecord);
ING_SDMModel.AddRemoveIndicatorRec = AddRemoveIndicatorRec;

});
define("ING_SDM.model$ContractualRevenueIndicatorRec", ["exports", "OutSystems/ClientRuntime/Main", "ING_SDM.model"], function (exports, OutSystems, ING_SDMModel) {
var OS = OutSystems.Internal;
var ContractualRevenueIndicatorRec = (function (_super) {
__extends(ContractualRevenueIndicatorRec, _super);
function ContractualRevenueIndicatorRec(defaults) {
_super.apply(this, arguments);
}
ContractualRevenueIndicatorRec.attributesToDeclare = function () {
return [
this.attr("Code", "codeAttr", "Code", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Description", "descriptionAttr", "Description", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ExtendedDescription", "extendedDescriptionAttr", "ExtendedDescription", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsActive", "isActiveAttr", "IsActive", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ContractualRevenueIndicatorRec.init();
return ContractualRevenueIndicatorRec;
})(OS.DataTypes.GenericRecord);
ING_SDMModel.ContractualRevenueIndicatorRec = ContractualRevenueIndicatorRec;

});
define("ING_SDM.model$StateOfCompletionRec", ["exports", "OutSystems/ClientRuntime/Main", "ING_SDM.model"], function (exports, OutSystems, ING_SDMModel) {
var OS = OutSystems.Internal;
var StateOfCompletionRec = (function (_super) {
__extends(StateOfCompletionRec, _super);
function StateOfCompletionRec(defaults) {
_super.apply(this, arguments);
}
StateOfCompletionRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Description", "descriptionAttr", "Description", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Definition", "definitionAttr", "Definition", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsActive", "isActiveAttr", "IsActive", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
StateOfCompletionRec.init();
return StateOfCompletionRec;
})(OS.DataTypes.GenericRecord);
ING_SDMModel.StateOfCompletionRec = StateOfCompletionRec;

});
define("ING_SDM.model$Customer_SegmentationRec", ["exports", "OutSystems/ClientRuntime/Main", "ING_SDM.model"], function (exports, OutSystems, ING_SDMModel) {
var OS = OutSystems.Internal;
var Customer_SegmentationRec = (function (_super) {
__extends(Customer_SegmentationRec, _super);
function Customer_SegmentationRec(defaults) {
_super.apply(this, arguments);
}
Customer_SegmentationRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Code", "codeAttr", "Code", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Description", "descriptionAttr", "Description", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ParentCode", "parentCodeAttr", "ParentCode", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Level", "levelAttr", "Level", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("SizeDefault", "sizeDefaultAttr", "SizeDefault", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SizeDefaultDescription", "sizeDefaultDescriptionAttr", "SizeDefaultDescription", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("KMVCategory", "kMVCategoryAttr", "KMVCategory", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("KMVCategoryDescription", "kMVCategoryDescriptionAttr", "KMVCategoryDescription", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Basel2PF", "basel2PFAttr", "Basel2PF", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Basel2PFDescription", "basel2PFDescriptionAttr", "Basel2PFDescription", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("AllowMultipleCA", "allowMultipleCAAttr", "AllowMultipleCA", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("AllowGroupCA", "allowGroupCAAttr", "AllowGroupCA", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("LAMRequired", "lAMRequiredAttr", "LAMRequired", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("PAMRequired", "pAMRequiredAttr", "PAMRequired", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Gatekeeper", "gatekeeperAttr", "Gatekeeper", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("GatekeeperDescription", "gatekeeperDescriptionAttr", "GatekeeperDescription", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("AlternativeGatekeeper", "alternativeGatekeeperAttr", "AlternativeGatekeeper", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("AlternativeGatekeeperDescrip", "alternativeGatekeeperDescripAttr", "AlternativeGatekeeperDescrip", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SegmentOwner", "segmentOwnerAttr", "SegmentOwner", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SegmentOwnerDescription", "segmentOwnerDescriptionAttr", "SegmentOwnerDescription", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MaintenanceUnit", "maintenanceUnitAttr", "MaintenanceUnit", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MaintenanceUnitDescription", "maintenanceUnitDescriptionAttr", "MaintenanceUnitDescription", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ComplianceDepartment", "complianceDepartmentAttr", "ComplianceDepartment", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ComplianceDepartmentDescript", "complianceDepartmentDescriptAttr", "ComplianceDepartmentDescript", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MISRAROCCode", "mISRAROCCodeAttr", "MISRAROCCode", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ProvisionRiskHorizon", "provisionRiskHorizonAttr", "ProvisionRiskHorizon", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ProvisionRiskHorizonDescript", "provisionRiskHorizonDescriptAttr", "ProvisionRiskHorizonDescript", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DashboardKFFCluster", "dashboardKFFClusterAttr", "DashboardKFFCluster", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DashboardKFFClusterDescripti", "dashboardKFFClusterDescriptiAttr", "DashboardKFFClusterDescripti", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("GETypeCustomerSegmentGroup", "gETypeCustomerSegmentGroupAttr", "GETypeCustomerSegmentGroup", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("GETypeCustomerSegmentGroupDe", "gETypeCustomerSegmentGroupDeAttr", "GETypeCustomerSegmentGroupDe", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsActive", "isActiveAttr", "IsActive", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Customer_SegmentationRec.init();
return Customer_SegmentationRec;
})(OS.DataTypes.GenericRecord);
ING_SDMModel.Customer_SegmentationRec = Customer_SegmentationRec;

});
define("ING_SDM.model$TransactionTypeRec", ["exports", "OutSystems/ClientRuntime/Main", "ING_SDM.model"], function (exports, OutSystems, ING_SDMModel) {
var OS = OutSystems.Internal;
var TransactionTypeRec = (function (_super) {
__extends(TransactionTypeRec, _super);
function TransactionTypeRec(defaults) {
_super.apply(this, arguments);
}
TransactionTypeRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Description", "descriptionAttr", "Description", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Definition", "definitionAttr", "Definition", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsActive", "isActiveAttr", "IsActive", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
TransactionTypeRec.init();
return TransactionTypeRec;
})(OS.DataTypes.GenericRecord);
ING_SDMModel.TransactionTypeRec = TransactionTypeRec;

});
define("ING_SDM.model$SDM_CREDIT_LOSS_ROOT_CAUSERec", ["exports", "OutSystems/ClientRuntime/Main", "ING_SDM.model"], function (exports, OutSystems, ING_SDMModel) {
var OS = OutSystems.Internal;
var SDM_CREDIT_LOSS_ROOT_CAUSERec = (function (_super) {
__extends(SDM_CREDIT_LOSS_ROOT_CAUSERec, _super);
function SDM_CREDIT_LOSS_ROOT_CAUSERec(defaults) {
_super.apply(this, arguments);
}
SDM_CREDIT_LOSS_ROOT_CAUSERec.attributesToDeclare = function () {
return [
this.attr("CODE", "cODEAttr", "CODE", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("EFF_DT", "eFF_DTAttr", "EFF_DT", true, false, OS.DataTypes.DataTypes.Date, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("END_DT", "eND_DTAttr", "END_DT", false, false, OS.DataTypes.DataTypes.Date, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("DSC", "dSCAttr", "DSC", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("EXTND_DSC", "eXTND_DSCAttr", "EXTND_DSC", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CHG_RSN", "cHG_RSNAttr", "CHG_RSN", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IS_ACTIVE", "iS_ACTIVEAttr", "IS_ACTIVE", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
SDM_CREDIT_LOSS_ROOT_CAUSERec.init();
return SDM_CREDIT_LOSS_ROOT_CAUSERec;
})(OS.DataTypes.GenericRecord);
ING_SDMModel.SDM_CREDIT_LOSS_ROOT_CAUSERec = SDM_CREDIT_LOSS_ROOT_CAUSERec;

});
define("ING_SDM.model$RankOfSecurityRec", ["exports", "OutSystems/ClientRuntime/Main", "ING_SDM.model"], function (exports, OutSystems, ING_SDMModel) {
var OS = OutSystems.Internal;
var RankOfSecurityRec = (function (_super) {
__extends(RankOfSecurityRec, _super);
function RankOfSecurityRec(defaults) {
_super.apply(this, arguments);
}
RankOfSecurityRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Description", "descriptionAttr", "Description", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsActive", "isActiveAttr", "IsActive", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
RankOfSecurityRec.init();
return RankOfSecurityRec;
})(OS.DataTypes.GenericRecord);
ING_SDMModel.RankOfSecurityRec = RankOfSecurityRec;

});
define("ING_SDM.model$SDMTableQueueRec", ["exports", "OutSystems/ClientRuntime/Main", "ING_SDM.model"], function (exports, OutSystems, ING_SDMModel) {
var OS = OutSystems.Internal;
var SDMTableQueueRec = (function (_super) {
__extends(SDMTableQueueRec, _super);
function SDMTableQueueRec(defaults) {
_super.apply(this, arguments);
}
SDMTableQueueRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("ZIPFileName", "zIPFileNameAttr", "ZIPFileName", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("TableName", "tableNameAttr", "TableName", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("FileName", "fileNameAttr", "FileName", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("FileCreationDate", "fileCreationDateAttr", "FileCreationDate", true, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
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
this.attr("DataLastChangeDate", "dataLastChangeDateAttr", "DataLastChangeDate", true, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("AddedToQueueDate", "addedToQueueDateAttr", "AddedToQueueDate", true, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("ProcessStartDate", "processStartDateAttr", "ProcessStartDate", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("ProcessEndDate", "processEndDateAttr", "ProcessEndDate", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
SDMTableQueueRec.init();
return SDMTableQueueRec;
})(OS.DataTypes.GenericRecord);
ING_SDMModel.SDMTableQueueRec = SDMTableQueueRec;

});
define("ING_SDM.model$Risk_RatingRec", ["exports", "OutSystems/ClientRuntime/Main", "ING_SDM.model"], function (exports, OutSystems, ING_SDMModel) {
var OS = OutSystems.Internal;
var Risk_RatingRec = (function (_super) {
__extends(Risk_RatingRec, _super);
function Risk_RatingRec(defaults) {
_super.apply(this, arguments);
}
Risk_RatingRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Code", "codeAttr", "Code", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Description", "descriptionAttr", "Description", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ParentCode", "parentCodeAttr", "ParentCode", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Level", "levelAttr", "Level", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("ModelCode", "modelCodeAttr", "ModelCode", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ModelDescription", "modelDescriptionAttr", "ModelDescription", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("InsuranceRating", "insuranceRatingAttr", "InsuranceRating", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("InsuranceRatingDescription", "insuranceRatingDescriptionAttr", "InsuranceRatingDescription", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Basel2PF", "basel2PFAttr", "Basel2PF", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Basel2PFDescription", "basel2PFDescriptionAttr", "Basel2PFDescription", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SortOrder", "sortOrderAttr", "SortOrder", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("RiskAlert", "riskAlertAttr", "RiskAlert", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("RiskAlertDescription", "riskAlertDescriptionAttr", "RiskAlertDescription", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("InDefaultIndicator", "inDefaultIndicatorAttr", "InDefaultIndicator", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("IsActive", "isActiveAttr", "IsActive", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Risk_RatingRec.init();
return Risk_RatingRec;
})(OS.DataTypes.GenericRecord);
ING_SDMModel.Risk_RatingRec = Risk_RatingRec;

});
define("ING_SDM.model$GCDBaseRateRec", ["exports", "OutSystems/ClientRuntime/Main", "ING_SDM.model"], function (exports, OutSystems, ING_SDMModel) {
var OS = OutSystems.Internal;
var GCDBaseRateRec = (function (_super) {
__extends(GCDBaseRateRec, _super);
function GCDBaseRateRec(defaults) {
_super.apply(this, arguments);
}
GCDBaseRateRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Description", "descriptionAttr", "Description", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsActive", "isActiveAttr", "IsActive", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
GCDBaseRateRec.init();
return GCDBaseRateRec;
})(OS.DataTypes.GenericRecord);
ING_SDMModel.GCDBaseRateRec = GCDBaseRateRec;

});
define("ING_SDM.model$CR_CostTypeRec", ["exports", "OutSystems/ClientRuntime/Main", "ING_SDM.model"], function (exports, OutSystems, ING_SDMModel) {
var OS = OutSystems.Internal;
var CR_CostTypeRec = (function (_super) {
__extends(CR_CostTypeRec, _super);
function CR_CostTypeRec(defaults) {
_super.apply(this, arguments);
}
CR_CostTypeRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Description", "descriptionAttr", "Description", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Definition", "definitionAttr", "Definition", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("TransactionTypeId", "transactionTypeIdAttr", "TransactionTypeId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("IsActive", "isActiveAttr", "IsActive", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
CR_CostTypeRec.init();
return CR_CostTypeRec;
})(OS.DataTypes.GenericRecord);
ING_SDMModel.CR_CostTypeRec = CR_CostTypeRec;

});
define("ING_SDM.model$RawINGEntityRec", ["exports", "OutSystems/ClientRuntime/Main", "ING_SDM.model"], function (exports, OutSystems, ING_SDMModel) {
var OS = OutSystems.Internal;
var RawINGEntityRec = (function (_super) {
__extends(RawINGEntityRec, _super);
function RawINGEntityRec(defaults) {
_super.apply(this, arguments);
}
RawINGEntityRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Change", "changeAttr", "Change", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Proposer", "proposerAttr", "Proposer", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SDU", "sDUAttr", "SDU", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Status", "statusAttr", "Status", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("BusinessKey", "businessKeyAttr", "BusinessKey", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CCRMCode", "cCRMCodeAttr", "CCRMCode", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Description", "descriptionAttr", "Description", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Parent", "parentAttr", "Parent", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ParentDesc", "parentDescAttr", "ParentDesc", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Level", "levelAttr", "Level", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("INGLegalEntity", "iNGLegalEntityAttr", "INGLegalEntity", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("INGLegalEntityDesc", "iNGLegalEntityDescAttr", "INGLegalEntityDesc", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("BankIndicator", "bankIndicatorAttr", "BankIndicator", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("BankIndicatorDesc", "bankIndicatorDescAttr", "BankIndicatorDesc", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("BaseEntity", "baseEntityAttr", "BaseEntity", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("BaseEntityDesc", "baseEntityDescAttr", "BaseEntityDesc", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("BranchCountry", "branchCountryAttr", "BranchCountry", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("BranchCountryDesc", "branchCountryDescAttr", "BranchCountryDesc", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("BaseCCY", "baseCCYAttr", "BaseCCY", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("BaseCCYDesc", "baseCCYDescAttr", "BaseCCYDesc", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CRS", "cRSAttr", "CRS", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CRSDesc", "cRSDescAttr", "CRSDesc", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CRSCalcMethod", "cRSCalcMethodAttr", "CRSCalcMethod", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CRSCalcMethodDesc", "cRSCalcMethodDescAttr", "CRSCalcMethodDesc", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("TimeZone", "timeZoneAttr", "TimeZone", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("TimeZoneDesc", "timeZoneDescAttr", "TimeZoneDesc", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MISRAROCOffice", "mISRAROCOfficeAttr", "MISRAROCOffice", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MISRAROCOfficeDesc", "mISRAROCOfficeDescAttr", "MISRAROCOfficeDesc", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MISRAROCProduct", "mISRAROCProductAttr", "MISRAROCProduct", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MISRAROCProductDesc", "mISRAROCProductDescAttr", "MISRAROCProductDesc", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("AssetValuationCurve", "assetValuationCurveAttr", "AssetValuationCurve", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("AssetValuationCurveDesc", "assetValuationCurveDescAttr", "AssetValuationCurveDesc", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("KMVCategory", "kMVCategoryAttr", "KMVCategory", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("KMVCategoryDesc", "kMVCategoryDescAttr", "KMVCategoryDesc", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("KMVBucketNr", "kMVBucketNrAttr", "KMVBucketNr", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("ECParameter", "eCParameterAttr", "ECParameter", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ECParameterDesc", "eCParameterDescAttr", "ECParameterDesc", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CountryRetainedRisk", "countryRetainedRiskAttr", "CountryRetainedRisk", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CountryRetainedRiskDesc", "countryRetainedRiskDescAttr", "CountryRetainedRiskDesc", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IndustryRetainedRisk", "industryRetainedRiskAttr", "IndustryRetainedRisk", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IndustryRetainedRiskDesc", "industryRetainedRiskDescAttr", "IndustryRetainedRiskDesc", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("RiskHorizon", "riskHorizonAttr", "RiskHorizon", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("RiskHorizonDesc", "riskHorizonDescAttr", "RiskHorizonDesc", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SizeDefault", "sizeDefaultAttr", "SizeDefault", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SizeDefaultDesc", "sizeDefaultDescAttr", "SizeDefaultDesc", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Basel2PF", "basel2PFAttr", "Basel2PF", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Basel2PFDesc", "basel2PFDescAttr", "Basel2PFDesc", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("RSquared", "rSquaredAttr", "RSquared", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("RSquaredDesc", "rSquaredDescAttr", "RSquaredDesc", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("RSquaredPF", "rSquaredPFAttr", "RSquaredPF", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("RSquaredPFDesc", "rSquaredPFDescAttr", "RSquaredPFDesc", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ProvisionCalcMethod", "provisionCalcMethodAttr", "ProvisionCalcMethod", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ProvisionCalcMethodDesc", "provisionCalcMethodDescAttr", "ProvisionCalcMethodDesc", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IASThreshold", "iASThresholdAttr", "IASThreshold", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("AddonForDayCount", "addonForDayCountAttr", "AddonForDayCount", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("AddonForDayCountDesc", "addonForDayCountDescAttr", "AddonForDayCountDesc", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("AddonForOfferPeriod", "addonForOfferPeriodAttr", "AddonForOfferPeriod", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("TaxRate", "taxRateAttr", "TaxRate", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("AllowHistoricBooking", "allowHistoricBookingAttr", "AllowHistoricBooking", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("AllowHistoricBookingDesc", "allowHistoricBookingDescAttr", "AllowHistoricBookingDesc", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LogoFileName", "logoFileNameAttr", "LogoFileName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LocalCCY", "localCCYAttr", "LocalCCY", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LocalCCYDesc", "localCCYDescAttr", "LocalCCYDesc", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LimitOwnerDefaultRisk", "limitOwnerDefaultRiskAttr", "LimitOwnerDefaultRisk", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LimitOwnerDefaultRiskDesc", "limitOwnerDefaultRiskDescAttr", "LimitOwnerDefaultRiskDesc", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("KTRenting", "kTRentingAttr", "KTRenting", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("KTRentingDesc", "kTRentingDescAttr", "KTRentingDesc", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("RiskManager", "riskManagerAttr", "RiskManager", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("RiskManagerDesc", "riskManagerDescAttr", "RiskManagerDesc", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LLPCalcForInvest", "lLPCalcForInvestAttr", "LLPCalcForInvest", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LLPCalcForInvestDesc", "lLPCalcForInvestDescAttr", "LLPCalcForInvestDesc", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("VortexSTARproExport", "vortexSTARproExportAttr", "VortexSTARproExport", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("VortexSTARproExportDesc", "vortexSTARproExportDescAttr", "VortexSTARproExportDesc", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("AssetCorrelationModel", "assetCorrelationModelAttr", "AssetCorrelationModel", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("AssetCorrelationModelDesc", "assetCorrelationModelDescAttr", "AssetCorrelationModelDesc", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("InitCurrencyMismatchOfficeA", "initCurrencyMismatchOfficeAAttr", "InitCurrencyMismatchOfficeA", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("InitCurrencyMismatchOfficeC", "initCurrencyMismatchOfficeCAttr", "InitCurrencyMismatchOfficeC", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("InitCurrencyMismatchOfficeCD", "initCurrencyMismatchOfficeCDAttr", "InitCurrencyMismatchOfficeCD", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("OneBankOffice", "oneBankOfficeAttr", "OneBankOffice", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("OneBankOfficeDesc", "oneBankOfficeDescAttr", "OneBankOfficeDesc", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("AccountingClassification", "accountingClassificationAttr", "AccountingClassification", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("AccountingClassificationDesc", "accountingClassificationDescAttr", "AccountingClassificationDesc", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("PermanentSAAsgn", "permanentSAAsgnAttr", "PermanentSAAsgn", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("PermanentSACasc", "permanentSACascAttr", "PermanentSACasc", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("PermanentSACascDesc", "permanentSACascDescAttr", "PermanentSACascDesc", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CCRMCodeLevel7", "cCRMCodeLevel7Attr", "CCRMCodeLevel7", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CCRMCodeLevel7Desc", "cCRMCodeLevel7DescAttr", "CCRMCodeLevel7Desc", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CCRMCodeLevel6", "cCRMCodeLevel6Attr", "CCRMCodeLevel6", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CCRMCodeLevel6Desc", "cCRMCodeLevel6DescAttr", "CCRMCodeLevel6Desc", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CCRMCodeLevel5", "cCRMCodeLevel5Attr", "CCRMCodeLevel5", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CCRMCodeLevel5Desc", "cCRMCodeLevel5DescAttr", "CCRMCodeLevel5Desc", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CCRMCodeLevel4", "cCRMCodeLevel4Attr", "CCRMCodeLevel4", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CCRMCodeLevel4Desc", "cCRMCodeLevel4DescAttr", "CCRMCodeLevel4Desc", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CCRMCodeLevel3", "cCRMCodeLevel3Attr", "CCRMCodeLevel3", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CCRMCodeLevel3Desc", "cCRMCodeLevel3DescAttr", "CCRMCodeLevel3Desc", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CCRMCodeLevel2", "cCRMCodeLevel2Attr", "CCRMCodeLevel2", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CCRMCodeLevel2Desc", "cCRMCodeLevel2DescAttr", "CCRMCodeLevel2Desc", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CCRMCodeLevel1", "cCRMCodeLevel1Attr", "CCRMCodeLevel1", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CCRMCodeLevel1Desc", "cCRMCodeLevel1DescAttr", "CCRMCodeLevel1Desc", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("BaseEntityLevel8", "baseEntityLevel8Attr", "BaseEntityLevel8", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("BaseEntityLevel8Desc", "baseEntityLevel8DescAttr", "BaseEntityLevel8Desc", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("BaseEntityLevel7", "baseEntityLevel7Attr", "BaseEntityLevel7", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("BaseEntityLevel7Desc", "baseEntityLevel7DescAttr", "BaseEntityLevel7Desc", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("BaseEntityLevel6", "baseEntityLevel6Attr", "BaseEntityLevel6", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("BaseEntityLevel6Desc", "baseEntityLevel6DescAttr", "BaseEntityLevel6Desc", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("BaseEntityLevel5", "baseEntityLevel5Attr", "BaseEntityLevel5", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("BaseEntityLevel5Desc", "baseEntityLevel5DescAttr", "BaseEntityLevel5Desc", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("BaseEntityLevel4", "baseEntityLevel4Attr", "BaseEntityLevel4", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("BaseEntityLevel4Desc", "baseEntityLevel4DescAttr", "BaseEntityLevel4Desc", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("BaseEntityLevel3", "baseEntityLevel3Attr", "BaseEntityLevel3", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("BaseEntityLevel3Desc", "baseEntityLevel3DescAttr", "BaseEntityLevel3Desc", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("BaseEntityLevel2", "baseEntityLevel2Attr", "BaseEntityLevel2", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("BaseEntityLevel2Desc", "baseEntityLevel2DescAttr", "BaseEntityLevel2Desc", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("BaseEntityLevel1", "baseEntityLevel1Attr", "BaseEntityLevel1", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("BaseEntityLevel1Desc", "baseEntityLevel1DescAttr", "BaseEntityLevel1Desc", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("BranchCountryLevel4", "branchCountryLevel4Attr", "BranchCountryLevel4", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("BranchCountryLevel4Desc", "branchCountryLevel4DescAttr", "BranchCountryLevel4Desc", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("BranchCountryLevel3", "branchCountryLevel3Attr", "BranchCountryLevel3", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("BranchCountryLevel3Desc", "branchCountryLevel3DescAttr", "BranchCountryLevel3Desc", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("BranchCountryLevel2", "branchCountryLevel2Attr", "BranchCountryLevel2", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("BranchCountryLevel2Desc", "branchCountryLevel2DescAttr", "BranchCountryLevel2Desc", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("BranchCountryLevel1", "branchCountryLevel1Attr", "BranchCountryLevel1", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("BranchCountryLevel1Desc", "branchCountryLevel1DescAttr", "BranchCountryLevel1Desc", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("BaseCCYLevel2", "baseCCYLevel2Attr", "BaseCCYLevel2", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("BaseCCYLevel2Desc", "baseCCYLevel2DescAttr", "BaseCCYLevel2Desc", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("BaseCCYLevel1", "baseCCYLevel1Attr", "BaseCCYLevel1", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("BaseCCYLevel1Desc", "baseCCYLevel1DescAttr", "BaseCCYLevel1Desc", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MISRAROCOfficeLevel9", "mISRAROCOfficeLevel9Attr", "MISRAROCOfficeLevel9", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MISRAROCOfficeLevel9Desc", "mISRAROCOfficeLevel9DescAttr", "MISRAROCOfficeLevel9Desc", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MISRAROCOfficeLevel8", "mISRAROCOfficeLevel8Attr", "MISRAROCOfficeLevel8", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MISRAROCOfficeLevel8Desc", "mISRAROCOfficeLevel8DescAttr", "MISRAROCOfficeLevel8Desc", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MISRAROCOfficeLevel7", "mISRAROCOfficeLevel7Attr", "MISRAROCOfficeLevel7", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MISRAROCOfficeLevel7Desc", "mISRAROCOfficeLevel7DescAttr", "MISRAROCOfficeLevel7Desc", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MISRAROCOfficeLevel6", "mISRAROCOfficeLevel6Attr", "MISRAROCOfficeLevel6", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MISRAROCOfficeLevel6Desc", "mISRAROCOfficeLevel6DescAttr", "MISRAROCOfficeLevel6Desc", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MISRAROCOfficeLevel5", "mISRAROCOfficeLevel5Attr", "MISRAROCOfficeLevel5", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MISRAROCOfficeLevel5Desc", "mISRAROCOfficeLevel5DescAttr", "MISRAROCOfficeLevel5Desc", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MISRAROCOfficeLevel4", "mISRAROCOfficeLevel4Attr", "MISRAROCOfficeLevel4", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MISRAROCOfficeLevel4Desc", "mISRAROCOfficeLevel4DescAttr", "MISRAROCOfficeLevel4Desc", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MISRAROCOfficeLevel3", "mISRAROCOfficeLevel3Attr", "MISRAROCOfficeLevel3", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MISRAROCOfficeLevel3Desc", "mISRAROCOfficeLevel3DescAttr", "MISRAROCOfficeLevel3Desc", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MISRAROCOfficeLevel2", "mISRAROCOfficeLevel2Attr", "MISRAROCOfficeLevel2", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MISRAROCOfficeLevel2Desc", "mISRAROCOfficeLevel2DescAttr", "MISRAROCOfficeLevel2Desc", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MISRAROCOfficeLevel1", "mISRAROCOfficeLevel1Attr", "MISRAROCOfficeLevel1", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MISRAROCOfficeLevel1Desc", "mISRAROCOfficeLevel1DescAttr", "MISRAROCOfficeLevel1Desc", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MISRAROCProductLevel7", "mISRAROCProductLevel7Attr", "MISRAROCProductLevel7", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MISRAROCProductLevel7Desc", "mISRAROCProductLevel7DescAttr", "MISRAROCProductLevel7Desc", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MISRAROCProductLevel6", "mISRAROCProductLevel6Attr", "MISRAROCProductLevel6", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MISRAROCProductLevel6Desc", "mISRAROCProductLevel6DescAttr", "MISRAROCProductLevel6Desc", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MISRAROCProductLevel5", "mISRAROCProductLevel5Attr", "MISRAROCProductLevel5", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MISRAROCProductLevel5Desc", "mISRAROCProductLevel5DescAttr", "MISRAROCProductLevel5Desc", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MISRAROCProductLevel4", "mISRAROCProductLevel4Attr", "MISRAROCProductLevel4", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MISRAROCProductLevel4Desc", "mISRAROCProductLevel4DescAttr", "MISRAROCProductLevel4Desc", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MISRAROCProductLevel3", "mISRAROCProductLevel3Attr", "MISRAROCProductLevel3", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MISRAROCProductLevel3Desc", "mISRAROCProductLevel3DescAttr", "MISRAROCProductLevel3Desc", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MISRAROCProductLevel2", "mISRAROCProductLevel2Attr", "MISRAROCProductLevel2", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MISRAROCProductLevel2Desc", "mISRAROCProductLevel2DescAttr", "MISRAROCProductLevel2Desc", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MISRAROCProductLevel1", "mISRAROCProductLevel1Attr", "MISRAROCProductLevel1", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MISRAROCProductLevel1Desc", "mISRAROCProductLevel1DescAttr", "MISRAROCProductLevel1Desc", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LocalCCYLevel2", "localCCYLevel2Attr", "LocalCCYLevel2", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LocalCCYLevel2Desc", "localCCYLevel2DescAttr", "LocalCCYLevel2Desc", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LocalCCYLevel1", "localCCYLevel1Attr", "LocalCCYLevel1", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LocalCCYLevel1Desc", "localCCYLevel1DescAttr", "LocalCCYLevel1Desc", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LimitOwnerDefaultRiskLev5", "limitOwnerDefaultRiskLev5Attr", "LimitOwnerDefaultRiskLev5", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LimitOwnerDefaultRiskLev5Des", "limitOwnerDefaultRiskLev5DesAttr", "LimitOwnerDefaultRiskLev5Des", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LimitOwnerDefaultRiskLev4", "limitOwnerDefaultRiskLev4Attr", "LimitOwnerDefaultRiskLev4", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LimitOwnerDefaultRiskLev4Des", "limitOwnerDefaultRiskLev4DesAttr", "LimitOwnerDefaultRiskLev4Des", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LimitOwnerDefaultRiskLev3", "limitOwnerDefaultRiskLev3Attr", "LimitOwnerDefaultRiskLev3", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LimitOwnerDefaultRiskLev3Des", "limitOwnerDefaultRiskLev3DesAttr", "LimitOwnerDefaultRiskLev3Des", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LimitOwnerDefaultRiskLev2", "limitOwnerDefaultRiskLev2Attr", "LimitOwnerDefaultRiskLev2", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LimitOwnerDefaultRiskLev2Des", "limitOwnerDefaultRiskLev2DesAttr", "LimitOwnerDefaultRiskLev2Des", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LimitOwnerDefaultRiskLev1", "limitOwnerDefaultRiskLev1Attr", "LimitOwnerDefaultRiskLev1", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LimitOwnerDefaultRiskLev1Des", "limitOwnerDefaultRiskLev1DesAttr", "LimitOwnerDefaultRiskLev1Des", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("OneBankOfficeLevel6", "oneBankOfficeLevel6Attr", "OneBankOfficeLevel6", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("OneBankOfficeLevel6Desc", "oneBankOfficeLevel6DescAttr", "OneBankOfficeLevel6Desc", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("OneBankOfficeLevel5", "oneBankOfficeLevel5Attr", "OneBankOfficeLevel5", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("OneBankOfficeLevel5Desc", "oneBankOfficeLevel5DescAttr", "OneBankOfficeLevel5Desc", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("OneBankOfficeLevel4", "oneBankOfficeLevel4Attr", "OneBankOfficeLevel4", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("OneBankOfficeLevel4Desc", "oneBankOfficeLevel4DescAttr", "OneBankOfficeLevel4Desc", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("OneBankOfficeLevel3", "oneBankOfficeLevel3Attr", "OneBankOfficeLevel3", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("OneBankOfficeLevel3Desc", "oneBankOfficeLevel3DescAttr", "OneBankOfficeLevel3Desc", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("OneBankOfficeLevel2", "oneBankOfficeLevel2Attr", "OneBankOfficeLevel2", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("OneBankOfficeLevel2Desc", "oneBankOfficeLevel2DescAttr", "OneBankOfficeLevel2Desc", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("OneBankOfficeLevel1", "oneBankOfficeLevel1Attr", "OneBankOfficeLevel1", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("OneBankOfficeLevel1Desc", "oneBankOfficeLevel1DescAttr", "OneBankOfficeLevel1Desc", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsActive", "isActiveAttr", "IsActive", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
RawINGEntityRec.init();
return RawINGEntityRec;
})(OS.DataTypes.GenericRecord);
ING_SDMModel.RawINGEntityRec = RawINGEntityRec;

});
define("ING_SDM.model$TransactionReasonTypeRec", ["exports", "OutSystems/ClientRuntime/Main", "ING_SDM.model"], function (exports, OutSystems, ING_SDMModel) {
var OS = OutSystems.Internal;
var TransactionReasonTypeRec = (function (_super) {
__extends(TransactionReasonTypeRec, _super);
function TransactionReasonTypeRec(defaults) {
_super.apply(this, arguments);
}
TransactionReasonTypeRec.attributesToDeclare = function () {
return [
this.attr("Code", "codeAttr", "Code", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Description", "descriptionAttr", "Description", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ExtendedDescription", "extendedDescriptionAttr", "ExtendedDescription", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsActive", "isActiveAttr", "IsActive", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
TransactionReasonTypeRec.init();
return TransactionReasonTypeRec;
})(OS.DataTypes.GenericRecord);
ING_SDMModel.TransactionReasonTypeRec = TransactionReasonTypeRec;

});
define("ING_SDM.model$AssetTypeRec", ["exports", "OutSystems/ClientRuntime/Main", "ING_SDM.model"], function (exports, OutSystems, ING_SDMModel) {
var OS = OutSystems.Internal;
var AssetTypeRec = (function (_super) {
__extends(AssetTypeRec, _super);
function AssetTypeRec(defaults) {
_super.apply(this, arguments);
}
AssetTypeRec.attributesToDeclare = function () {
return [
this.attr("CCRM_CODE", "cCRM_CODEAttr", "CCRM_CODE", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Description", "descriptionAttr", "Description", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ParentId", "parentIdAttr", "ParentId", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Definition", "definitionAttr", "Definition", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("GCDCollateralTypeId", "gCDCollateralTypeIdAttr", "GCDCollateralTypeId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("GCDRealStateTypeId", "gCDRealStateTypeIdAttr", "GCDRealStateTypeId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("GCDCommodityTypeId", "gCDCommodityTypeIdAttr", "GCDCommodityTypeId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("IsActive", "isActiveAttr", "IsActive", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
AssetTypeRec.init();
return AssetTypeRec;
})(OS.DataTypes.GenericRecord);
ING_SDMModel.AssetTypeRec = AssetTypeRec;

});
define("ING_SDM.model$OutFlowReasonsSubCategoryRec", ["exports", "OutSystems/ClientRuntime/Main", "ING_SDM.model"], function (exports, OutSystems, ING_SDMModel) {
var OS = OutSystems.Internal;
var OutFlowReasonsSubCategoryRec = (function (_super) {
__extends(OutFlowReasonsSubCategoryRec, _super);
function OutFlowReasonsSubCategoryRec(defaults) {
_super.apply(this, arguments);
}
OutFlowReasonsSubCategoryRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("OutFlowReasonsCategoryId", "outFlowReasonsCategoryIdAttr", "OutFlowReasonsCategoryId", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Label", "labelAttr", "Label", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Order", "orderAttr", "Order", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
OutFlowReasonsSubCategoryRec.init();
return OutFlowReasonsSubCategoryRec;
})(OS.DataTypes.GenericRecord);
ING_SDMModel.OutFlowReasonsSubCategoryRec = OutFlowReasonsSubCategoryRec;

});
define("ING_SDM.model$OwnerOccupiedStatusRec", ["exports", "OutSystems/ClientRuntime/Main", "ING_SDM.model"], function (exports, OutSystems, ING_SDMModel) {
var OS = OutSystems.Internal;
var OwnerOccupiedStatusRec = (function (_super) {
__extends(OwnerOccupiedStatusRec, _super);
function OwnerOccupiedStatusRec(defaults) {
_super.apply(this, arguments);
}
OwnerOccupiedStatusRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Description", "descriptionAttr", "Description", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Definition", "definitionAttr", "Definition", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsActive", "isActiveAttr", "IsActive", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
OwnerOccupiedStatusRec.init();
return OwnerOccupiedStatusRec;
})(OS.DataTypes.GenericRecord);
ING_SDMModel.OwnerOccupiedStatusRec = OwnerOccupiedStatusRec;

});
define("ING_SDM.model$SourceOfPayment_NRec", ["exports", "OutSystems/ClientRuntime/Main", "ING_SDM.model"], function (exports, OutSystems, ING_SDMModel) {
var OS = OutSystems.Internal;
var SourceOfPayment_NRec = (function (_super) {
__extends(SourceOfPayment_NRec, _super);
function SourceOfPayment_NRec(defaults) {
_super.apply(this, arguments);
}
SourceOfPayment_NRec.attributesToDeclare = function () {
return [
this.attr("CODE", "cODEAttr", "CODE", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("EFF_DT", "eFF_DTAttr", "EFF_DT", true, false, OS.DataTypes.DataTypes.Date, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("END_DT", "eND_DTAttr", "END_DT", false, false, OS.DataTypes.DataTypes.Date, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("DSC", "dSCAttr", "DSC", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("PARENT", "pARENTAttr", "PARENT", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("EXTND_DSC", "eXTND_DSCAttr", "EXTND_DSC", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CHG_RSN", "cHG_RSNAttr", "CHG_RSN", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsActive", "isActiveAttr", "IsActive", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
SourceOfPayment_NRec.init();
return SourceOfPayment_NRec;
})(OS.DataTypes.GenericRecord);
ING_SDMModel.SourceOfPayment_NRec = SourceOfPayment_NRec;

});
define("ING_SDM.model$OwnerOccupiedStatus_NRec", ["exports", "OutSystems/ClientRuntime/Main", "ING_SDM.model"], function (exports, OutSystems, ING_SDMModel) {
var OS = OutSystems.Internal;
var OwnerOccupiedStatus_NRec = (function (_super) {
__extends(OwnerOccupiedStatus_NRec, _super);
function OwnerOccupiedStatus_NRec(defaults) {
_super.apply(this, arguments);
}
OwnerOccupiedStatus_NRec.attributesToDeclare = function () {
return [
this.attr("Code", "codeAttr", "Code", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Description", "descriptionAttr", "Description", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ExtendedDescription", "extendedDescriptionAttr", "ExtendedDescription", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsActive", "isActiveAttr", "IsActive", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
OwnerOccupiedStatus_NRec.init();
return OwnerOccupiedStatus_NRec;
})(OS.DataTypes.GenericRecord);
ING_SDMModel.OwnerOccupiedStatus_NRec = OwnerOccupiedStatus_NRec;

});
define("ING_SDM.model$Recovery_SourceRec", ["exports", "OutSystems/ClientRuntime/Main", "ING_SDM.model"], function (exports, OutSystems, ING_SDMModel) {
var OS = OutSystems.Internal;
var Recovery_SourceRec = (function (_super) {
__extends(Recovery_SourceRec, _super);
function Recovery_SourceRec(defaults) {
_super.apply(this, arguments);
}
Recovery_SourceRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Code", "codeAttr", "Code", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Description", "descriptionAttr", "Description", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsActive", "isActiveAttr", "IsActive", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Recovery_SourceRec.init();
return Recovery_SourceRec;
})(OS.DataTypes.GenericRecord);
ING_SDMModel.Recovery_SourceRec = Recovery_SourceRec;

});
define("ING_SDM.model$ReasonTypeRec", ["exports", "OutSystems/ClientRuntime/Main", "ING_SDM.model"], function (exports, OutSystems, ING_SDMModel) {
var OS = OutSystems.Internal;
var ReasonTypeRec = (function (_super) {
__extends(ReasonTypeRec, _super);
function ReasonTypeRec(defaults) {
_super.apply(this, arguments);
}
ReasonTypeRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Label", "labelAttr", "Label", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Order", "orderAttr", "Order", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Code", "codeAttr", "Code", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ReasonTypeRec.init();
return ReasonTypeRec;
})(OS.DataTypes.GenericRecord);
ING_SDMModel.ReasonTypeRec = ReasonTypeRec;

});
define("ING_SDM.model$CollateralValuationTypeRec", ["exports", "OutSystems/ClientRuntime/Main", "ING_SDM.model"], function (exports, OutSystems, ING_SDMModel) {
var OS = OutSystems.Internal;
var CollateralValuationTypeRec = (function (_super) {
__extends(CollateralValuationTypeRec, _super);
function CollateralValuationTypeRec(defaults) {
_super.apply(this, arguments);
}
CollateralValuationTypeRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Description", "descriptionAttr", "Description", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Definition", "definitionAttr", "Definition", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsActive", "isActiveAttr", "IsActive", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
CollateralValuationTypeRec.init();
return CollateralValuationTypeRec;
})(OS.DataTypes.GenericRecord);
ING_SDMModel.CollateralValuationTypeRec = CollateralValuationTypeRec;

});
define("ING_SDM.model", ["exports", "OutSystems/ClientRuntime/Main"], function (exports, OutSystems) {
var OS = OutSystems.Internal;
var ING_SDMModel = exports;
});
