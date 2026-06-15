define("LLPSignOff_BL.model$List_HomePageSignOffRequestRec", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_BL.model"], function (exports, OutSystems, LLPSignOff_BLModel) {
var OS = OutSystems.Internal;
var List_HomePageSignOffRequestRec = (function (_super) {
__extends(List_HomePageSignOffRequestRec, _super);
function List_HomePageSignOffRequestRec(defaults) {
_super.apply(this, arguments);
}
List_HomePageSignOffRequestRec.attributesToDeclare = function () {
return [
this.attr("SignOffRequestId", "signOffRequestIdAttr", "SignOffRequestId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Guid", "guidAttr", "Guid", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("BaseEntityName", "baseEntityNameAttr", "BaseEntityName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ReportingCurrency", "reportingCurrencyAttr", "ReportingCurrency", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("RiskReviewer", "riskReviewerAttr", "RiskReviewer", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("FinanceReviewer", "financeReviewerAttr", "FinanceReviewer", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("provision", "provisionAttr", "provision", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("RiskCost", "riskCostAttr", "RiskCost", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("WriteOff", "writeOffAttr", "WriteOff", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Status", "statusAttr", "Status", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("QuarterName", "quarterNameAttr", "QuarterName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Year", "yearAttr", "Year", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("YTDStatus", "yTDStatusAttr", "YTDStatus", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("QuarterYear", "quarterYearAttr", "QuarterYear", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Actors", "actorsAttr", "Actors", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CountryCode", "countryCodeAttr", "CountryCode", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsGCR", "isGCRAttr", "IsGCR", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
List_HomePageSignOffRequestRec.init();
return List_HomePageSignOffRequestRec;
})(OS.DataTypes.GenericRecord);
LLPSignOff_BLModel.List_HomePageSignOffRequestRec = List_HomePageSignOffRequestRec;

});
define("LLPSignOff_BL.model$CountryDumpRec", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_BL.model"], function (exports, OutSystems, LLPSignOff_BLModel) {
var OS = OutSystems.Internal;
var CountryDumpRec = (function (_super) {
__extends(CountryDumpRec, _super);
function CountryDumpRec(defaults) {
_super.apply(this, arguments);
}
CountryDumpRec.attributesToDeclare = function () {
return [
this.attr("Bookdate", "bookdateAttr", "Bookdate", false, false, OS.DataTypes.DataTypes.Date, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("BaseEntity", "baseEntityAttr", "BaseEntity", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SignOffStatus", "signOffStatusAttr", "SignOffStatus", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Layer", "layerAttr", "Layer", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Portfolio", "portfolioAttr", "Portfolio", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Stage", "stageAttr", "Stage", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Outstanding", "outstandingAttr", "Outstanding", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("PrevQuarterProvision_3", "prevQuarterProvision_3Attr", "PrevQuarterProvision_3", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("FXonT2Basis", "fXonT2BasisAttr", "FXonT2Basis", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("PrevQuarterProvision_1", "prevQuarterProvision_1Attr", "PrevQuarterProvision_1", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Increase", "increaseAttr", "Increase", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Release", "releaseAttr", "Release", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("RiskCost", "riskCostAttr", "RiskCost", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("WriteOff", "writeOffAttr", "WriteOff", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Reversal", "reversalAttr", "Reversal", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Other", "otherAttr", "Other", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("InterestNPL", "interestNPLAttr", "InterestNPL", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("CurrentQuarterProvision", "currentQuarterProvisionAttr", "CurrentQuarterProvision", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("OnBalance", "onBalanceAttr", "OnBalance", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("OffBalance", "offBalanceAttr", "OffBalance", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("ProvFXChange", "provFXChangeAttr", "ProvFXChange", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("CurQuarterProvCurRate", "curQuarterProvCurRateAttr", "CurQuarterProvCurRate", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("AdjustmentKey", "adjustmentKeyAttr", "AdjustmentKey", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("AdjustmentName", "adjustmentNameAttr", "AdjustmentName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("AdjustmentType", "adjustmentTypeAttr", "AdjustmentType", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("AdjustmentStatus", "adjustmentStatusAttr", "AdjustmentStatus", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("InitialApprovementQuarter", "initialApprovementQuarterAttr", "InitialApprovementQuarter", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ExpectedReleaseQuarter", "expectedReleaseQuarterAttr", "ExpectedReleaseQuarter", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Industry", "industryAttr", "Industry", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IFRS9Model", "iFRS9ModelAttr", "IFRS9Model", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Approach", "approachAttr", "Approach", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("InVortex", "inVortexAttr", "InVortex", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Comments", "commentsAttr", "Comments", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CountryCode", "countryCodeAttr", "CountryCode", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Currency", "currencyAttr", "Currency", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Tminus3Rate", "tminus3RateAttr", "Tminus3Rate", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Tminus1Rate", "tminus1RateAttr", "Tminus1Rate", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("TRate", "tRateAttr", "TRate", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
CountryDumpRec.init();
return CountryDumpRec;
})(OS.DataTypes.GenericRecord);
LLPSignOff_BLModel.CountryDumpRec = CountryDumpRec;

});
define("LLPSignOff_BL.model$TextList", ["exports", "OutSystems/ClientRuntime/Main", "Extension.Text.model", "LLPSignOff_BL.model", "Extension.Text.model$TextRec", "LLPSignOff_BL.referencesHealth", "LLPSignOff_BL.referencesHealth$Text"], function (exports, OutSystems, Extension_TextModel, LLPSignOff_BLModel) {
var OS = OutSystems.Internal;
var TextList = (function (_super) {
__extends(TextList, _super);
function TextList(defaults) {
_super.apply(this, arguments);
}
TextList.itemType = Extension_TextModel.TextRec;
return TextList;
})(OS.DataTypes.GenericRecordList);
LLPSignOff_BLModel.TextList = TextList;

});
define("LLPSignOff_BL.model$ResultRec", ["exports", "OutSystems/ClientRuntime/Main", "Extension.Text.model", "LLPSignOff_BL.model", "Extension.Text.model$TextRec", "LLPSignOff_BL.referencesHealth", "LLPSignOff_BL.referencesHealth$Text", "LLPSignOff_BL.model$TextList"], function (exports, OutSystems, Extension_TextModel, LLPSignOff_BLModel) {
var OS = OutSystems.Internal;
var ResultRec = (function (_super) {
__extends(ResultRec, _super);
function ResultRec(defaults) {
_super.apply(this, arguments);
}
ResultRec.attributesToDeclare = function () {
return [
this.attr("IsSuccess", "isSuccessAttr", "IsSuccess", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Messages", "messagesAttr", "Messages", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new LLPSignOff_BLModel.TextList());
}, true, LLPSignOff_BLModel.TextList)
].concat(_super.attributesToDeclare.call(this));
};
ResultRec.init();
return ResultRec;
})(OS.DataTypes.GenericRecord);
LLPSignOff_BLModel.ResultRec = ResultRec;

});
define("LLPSignOff_BL.model$YTDData_ResultRec", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_BL.model", "LLPSignOff_BL.model$ResultRec"], function (exports, OutSystems, LLPSignOff_BLModel) {
var OS = OutSystems.Internal;
var YTDData_ResultRec = (function (_super) {
__extends(YTDData_ResultRec, _super);
function YTDData_ResultRec(defaults) {
_super.apply(this, arguments);
}
YTDData_ResultRec.attributesToDeclare = function () {
return [
this.attr("BaseEntityForSignOffId", "baseEntityForSignOffIdAttr", "BaseEntityForSignOffId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("BaseEntityCode", "baseEntityCodeAttr", "BaseEntityCode", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Result", "resultAttr", "Result", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new LLPSignOff_BLModel.ResultRec());
}, true, LLPSignOff_BLModel.ResultRec)
].concat(_super.attributesToDeclare.call(this));
};
YTDData_ResultRec.init();
return YTDData_ResultRec;
})(OS.DataTypes.GenericRecord);
LLPSignOff_BLModel.YTDData_ResultRec = YTDData_ResultRec;

});
define("LLPSignOff_BL.model$List_HomePageStatusRec", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_BL.model"], function (exports, OutSystems, LLPSignOff_BLModel) {
var OS = OutSystems.Internal;
var List_HomePageStatusRec = (function (_super) {
__extends(List_HomePageStatusRec, _super);
function List_HomePageStatusRec(defaults) {
_super.apply(this, arguments);
}
List_HomePageStatusRec.attributesToDeclare = function () {
return [
this.attr("StatusId", "statusIdAttr", "StatusId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Status", "statusAttr", "Status", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
List_HomePageStatusRec.init();
return List_HomePageStatusRec;
})(OS.DataTypes.GenericRecord);
LLPSignOff_BLModel.List_HomePageStatusRec = List_HomePageStatusRec;

});
define("LLPSignOff_BL.model$Str_AggregatedTotalsLayer1SheetRec", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_BL.model"], function (exports, OutSystems, LLPSignOff_BLModel) {
var OS = OutSystems.Internal;
var Str_AggregatedTotalsLayer1SheetRec = (function (_super) {
__extends(Str_AggregatedTotalsLayer1SheetRec, _super);
function Str_AggregatedTotalsLayer1SheetRec(defaults) {
_super.apply(this, arguments);
}
Str_AggregatedTotalsLayer1SheetRec.attributesToDeclare = function () {
return [
this.attr("CountryId", "countryIdAttr", "CountryId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Name", "nameAttr", "Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Outstanding", "outstandingAttr", "Outstanding", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("PrevQuarterProv", "prevQuarterProvAttr", "PrevQuarterProv", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("QuarterlyFXChanges", "quarterlyFXChangesAttr", "QuarterlyFXChanges", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("PrevQuarterProvCurRate", "prevQuarterProvCurRateAttr", "PrevQuarterProvCurRate", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Increase", "increaseAttr", "Increase", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Release", "releaseAttr", "Release", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("RiskCost", "riskCostAttr", "RiskCost", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("WriteOff", "writeOffAttr", "WriteOff", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Reversal", "reversalAttr", "Reversal", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Other", "otherAttr", "Other", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("InterestNPLLoans", "interestNPLLoansAttr", "InterestNPLLoans", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("CurQuarterProv", "curQuarterProvAttr", "CurQuarterProv", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Check", "checkAttr", "Check", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("OnBalance", "onBalanceAttr", "OnBalance", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("OffBalance", "offBalanceAttr", "OffBalance", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("ProvFXChange", "provFXChangeAttr", "ProvFXChange", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("CurQuarterProvCurRate", "curQuarterProvCurRateAttr", "CurQuarterProvCurRate", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Str_AggregatedTotalsLayer1SheetRec.init();
return Str_AggregatedTotalsLayer1SheetRec;
})(OS.DataTypes.GenericRecord);
LLPSignOff_BLModel.Str_AggregatedTotalsLayer1SheetRec = Str_AggregatedTotalsLayer1SheetRec;

});
define("LLPSignOff_BL.model$SignOffQuarter_BERec", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_BL.model"], function (exports, OutSystems, LLPSignOff_BLModel) {
var OS = OutSystems.Internal;
var SignOffQuarter_BERec = (function (_super) {
__extends(SignOffQuarter_BERec, _super);
function SignOffQuarter_BERec(defaults) {
_super.apply(this, arguments);
}
SignOffQuarter_BERec.attributesToDeclare = function () {
return [
this.attr("BaseEntityForSignOffId", "baseEntityForSignOffIdAttr", "BaseEntityForSignOffId", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("CCRM_CODE", "cCRM_CODEAttr", "CCRM_CODE", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ID_DESCRIPTION", "iD_DESCRIPTIONAttr", "ID_DESCRIPTION", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("HAS_GROUP", "hAS_GROUPAttr", "HAS_GROUP", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
SignOffQuarter_BERec.init();
return SignOffQuarter_BERec;
})(OS.DataTypes.GenericRecord);
LLPSignOff_BLModel.SignOffQuarter_BERec = SignOffQuarter_BERec;

});
define("LLPSignOff_BL.model$AdjustmentNonPMARec", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_BL.model"], function (exports, OutSystems, LLPSignOff_BLModel) {
var OS = OutSystems.Internal;
var AdjustmentNonPMARec = (function (_super) {
__extends(AdjustmentNonPMARec, _super);
function AdjustmentNonPMARec(defaults) {
_super.apply(this, arguments);
}
AdjustmentNonPMARec.attributesToDeclare = function () {
return [
this.attr("AdjustmentId", "adjustmentIdAttr", "AdjustmentId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("SignOffRequestId", "signOffRequestIdAttr", "SignOffRequestId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("AdjustmentType", "adjustmentTypeAttr", "AdjustmentType", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("BaseEntityLabel", "baseEntityLabelAttr", "BaseEntityLabel", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ProvisionCategoryName", "provisionCategoryNameAttr", "ProvisionCategoryName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ProvisionTypeName", "provisionTypeNameAttr", "ProvisionTypeName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("PrevQuarterProv", "prevQuarterProvAttr", "PrevQuarterProv", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("QuarterlyFXChanges", "quarterlyFXChangesAttr", "QuarterlyFXChanges", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("PrevQuarterProvCurRate", "prevQuarterProvCurRateAttr", "PrevQuarterProvCurRate", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Increase", "increaseAttr", "Increase", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Release", "releaseAttr", "Release", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("WriteOff", "writeOffAttr", "WriteOff", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Reversal", "reversalAttr", "Reversal", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Other", "otherAttr", "Other", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("InterestNPLLoans", "interestNPLLoansAttr", "InterestNPLLoans", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("CurQuarterProv", "curQuarterProvAttr", "CurQuarterProv", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("OnBalance", "onBalanceAttr", "OnBalance", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("OffBalance", "offBalanceAttr", "OffBalance", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("RiskCosts", "riskCostsAttr", "RiskCosts", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("LastChanged", "lastChangedAttr", "LastChanged", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("IsSeleted", "isSeletedAttr", "IsSeleted", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Edit", "editAttr", "Edit", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Comment", "commentAttr", "Comment", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("isRolledForward", "isRolledForwardAttr", "isRolledForward", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("OutStanding", "outStandingAttr", "OutStanding", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
AdjustmentNonPMARec.init();
return AdjustmentNonPMARec;
})(OS.DataTypes.GenericRecord);
LLPSignOff_BLModel.AdjustmentNonPMARec = AdjustmentNonPMARec;

});
define("LLPSignOff_BL.model$ExcelUploadedPMAAdjument_ResultRec", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_BL.model"], function (exports, OutSystems, LLPSignOff_BLModel) {
var OS = OutSystems.Internal;
var ExcelUploadedPMAAdjument_ResultRec = (function (_super) {
__extends(ExcelUploadedPMAAdjument_ResultRec, _super);
function ExcelUploadedPMAAdjument_ResultRec(defaults) {
_super.apply(this, arguments);
}
ExcelUploadedPMAAdjument_ResultRec.attributesToDeclare = function () {
return [
this.attr("AdjustmentKey", "adjustmentKeyAttr", "AdjustmentKey", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("AdjustmentType", "adjustmentTypeAttr", "AdjustmentType", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("AdjustmentName", "adjustmentNameAttr", "AdjustmentName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("inidiacatedReleaseQuarter", "inidiacatedReleaseQuarterAttr", "inidiacatedReleaseQuarter", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("AdjustmentStatus", "adjustmentStatusAttr", "AdjustmentStatus", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("BaseEntityCode", "baseEntityCodeAttr", "BaseEntityCode", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("PortfolioId", "portfolioIdAttr", "PortfolioId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("ProvisionCatogary", "provisionCatogaryAttr", "ProvisionCatogary", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("OpeningBalance", "openingBalanceAttr", "OpeningBalance", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Increase", "increaseAttr", "Increase", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Release", "releaseAttr", "Release", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("ClosingBalance", "closingBalanceAttr", "ClosingBalance", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("ofwhichOffBalance", "ofwhichOffBalanceAttr", "ofwhichOffBalance", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("InVortex", "inVortexAttr", "InVortex", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("IFRS9Model", "iFRS9ModelAttr", "IFRS9Model", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Industry", "industryAttr", "Industry", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Approach", "approachAttr", "Approach", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Comment", "commentAttr", "Comment", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ErrorMessage", "errorMessageAttr", "ErrorMessage", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ExcelUploadedPMAAdjument_ResultRec.init();
return ExcelUploadedPMAAdjument_ResultRec;
})(OS.DataTypes.GenericRecord);
LLPSignOff_BLModel.ExcelUploadedPMAAdjument_ResultRec = ExcelUploadedPMAAdjument_ResultRec;

});
define("LLPSignOff_BL.model$Text1Record", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_BL.model"], function (exports, OutSystems, LLPSignOff_BLModel) {
var OS = OutSystems.Internal;
var Text1Record = (function (_super) {
__extends(Text1Record, _super);
function Text1Record(defaults) {
_super.apply(this, arguments);
}
Text1Record.attributesToDeclare = function () {
return [
this.attr("Text", "textAttr", "Text", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Text1Record.fromStructure = function (str) {
return new Text1Record(new Text1Record.RecordClass({
textAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Text1Record._isAnonymousRecord = true;
Text1Record.UniqueId = "ca61515b-5f1b-81a3-f63a-72f69693ae36";
Text1Record.init();
return Text1Record;
})(OS.DataTypes.GenericRecord);
LLPSignOff_BLModel.Text1Record = Text1Record;

});
define("LLPSignOff_BL.model$Text1RecordList", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_BL.model", "LLPSignOff_BL.model$Text1Record"], function (exports, OutSystems, LLPSignOff_BLModel) {
var OS = OutSystems.Internal;
var Text1RecordList = (function (_super) {
__extends(Text1RecordList, _super);
function Text1RecordList(defaults) {
_super.apply(this, arguments);
}
Text1RecordList.itemType = LLPSignOff_BLModel.Text1Record;
return Text1RecordList;
})(OS.DataTypes.GenericRecordList);
LLPSignOff_BLModel.Text1RecordList = Text1RecordList;

});
define("LLPSignOff_BL.model$UploadedExcel_PMAAdjumentRec", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_BL.model"], function (exports, OutSystems, LLPSignOff_BLModel) {
var OS = OutSystems.Internal;
var UploadedExcel_PMAAdjumentRec = (function (_super) {
__extends(UploadedExcel_PMAAdjumentRec, _super);
function UploadedExcel_PMAAdjumentRec(defaults) {
_super.apply(this, arguments);
}
UploadedExcel_PMAAdjumentRec.attributesToDeclare = function () {
return [
this.attr("AdjustmentKey", "adjustmentKeyAttr", "AdjustmentKey", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("AdjustmentType", "adjustmentTypeAttr", "AdjustmentType", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("AdjustmentName", "adjustmentNameAttr", "AdjustmentName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IndicatedReleaseQuarter", "indicatedReleaseQuarterAttr", "IndicatedReleaseQuarter", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("AdjustmentStatus", "adjustmentStatusAttr", "AdjustmentStatus", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("BaseEntity", "baseEntityAttr", "BaseEntity", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Portfolio", "portfolioAttr", "Portfolio", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ProvisionCategory", "provisionCategoryAttr", "ProvisionCategory", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("OpeningBalance", "openingBalanceAttr", "OpeningBalance", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Increase", "increaseAttr", "Increase", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Release", "releaseAttr", "Release", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("ClosingBalance", "closingBalanceAttr", "ClosingBalance", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("ofwhichOffBalance", "ofwhichOffBalanceAttr", "ofwhichOffBalance", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("InVortex", "inVortexAttr", "InVortex", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IFRS9Model", "iFRS9ModelAttr", "IFRS9Model", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Industry", "industryAttr", "Industry", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Approach", "approachAttr", "Approach", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Comments", "commentsAttr", "Comments", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CombinationOfKey", "combinationOfKeyAttr", "CombinationOfKey", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Outstanding", "outstandingAttr", "Outstanding", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
UploadedExcel_PMAAdjumentRec.init();
return UploadedExcel_PMAAdjumentRec;
})(OS.DataTypes.GenericRecord);
LLPSignOff_BLModel.UploadedExcel_PMAAdjumentRec = UploadedExcel_PMAAdjumentRec;

});
define("LLPSignOff_BL.model$Uploaded_PMAAdjumentsDetailsRec", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_BL.model", "LLPSignOff_BL.model$Text1RecordList", "LLPSignOff_BL.model$UploadedExcel_PMAAdjumentRec"], function (exports, OutSystems, LLPSignOff_BLModel) {
var OS = OutSystems.Internal;
var Uploaded_PMAAdjumentsDetailsRec = (function (_super) {
__extends(Uploaded_PMAAdjumentsDetailsRec, _super);
function Uploaded_PMAAdjumentsDetailsRec(defaults) {
_super.apply(this, arguments);
}
Uploaded_PMAAdjumentsDetailsRec.attributesToDeclare = function () {
return [
this.attr("BaseEntityCodeName", "baseEntityCodeNameAttr", "BaseEntityCodeName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("BaseEntityId", "baseEntityIdAttr", "BaseEntityId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("PortfolioName", "portfolioNameAttr", "PortfolioName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("PortfolioId", "portfolioIdAttr", "PortfolioId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("ProvisionCategoryName", "provisionCategoryNameAttr", "ProvisionCategoryName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ProvisionCategoryId", "provisionCategoryIdAttr", "ProvisionCategoryId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("OpeningBalance", "openingBalanceAttr", "OpeningBalance", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Increase", "increaseAttr", "Increase", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Release", "releaseAttr", "Release", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("ClosingBalance", "closingBalanceAttr", "ClosingBalance", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("OffBalance", "offBalanceAttr", "OffBalance", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("InVortex", "inVortexAttr", "InVortex", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("InVortexId", "inVortexIdAttr", "InVortexId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("IFRS9ModelName", "iFRS9ModelNameAttr", "IFRS9ModelName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IFRS9Model", "iFRS9ModelAttr", "IFRS9Model", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Industry", "industryAttr", "Industry", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IndustryId", "industryIdAttr", "IndustryId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Approach", "approachAttr", "Approach", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ApproachId", "approachIdAttr", "ApproachId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Comment", "commentAttr", "Comment", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsValid", "isValidAttr", "IsValid", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Outstanding", "outstandingAttr", "Outstanding", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("ErrorMessage", "errorMessageAttr", "ErrorMessage", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new LLPSignOff_BLModel.Text1RecordList());
}, true, LLPSignOff_BLModel.Text1RecordList), 
this.attr("ExcelPMAAdjumentData", "excelPMAAdjumentDataAttr", "ExcelPMAAdjumentData", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new LLPSignOff_BLModel.UploadedExcel_PMAAdjumentRec());
}, true, LLPSignOff_BLModel.UploadedExcel_PMAAdjumentRec)
].concat(_super.attributesToDeclare.call(this));
};
Uploaded_PMAAdjumentsDetailsRec.init();
return Uploaded_PMAAdjumentsDetailsRec;
})(OS.DataTypes.GenericRecord);
LLPSignOff_BLModel.Uploaded_PMAAdjumentsDetailsRec = Uploaded_PMAAdjumentsDetailsRec;

});
define("LLPSignOff_BL.model$Uploaded_PMAAdjumentsDetailsList", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_BL.model", "LLPSignOff_BL.model$Uploaded_PMAAdjumentsDetailsRec"], function (exports, OutSystems, LLPSignOff_BLModel) {
var OS = OutSystems.Internal;
var Uploaded_PMAAdjumentsDetailsList = (function (_super) {
__extends(Uploaded_PMAAdjumentsDetailsList, _super);
function Uploaded_PMAAdjumentsDetailsList(defaults) {
_super.apply(this, arguments);
}
Uploaded_PMAAdjumentsDetailsList.itemType = LLPSignOff_BLModel.Uploaded_PMAAdjumentsDetailsRec;
return Uploaded_PMAAdjumentsDetailsList;
})(OS.DataTypes.GenericRecordList);
LLPSignOff_BLModel.Uploaded_PMAAdjumentsDetailsList = Uploaded_PMAAdjumentsDetailsList;

});
define("LLPSignOff_BL.model$Uploaded_PMAAdjustmentDataRec", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_BL.model", "LLPSignOff_BL.model$Uploaded_PMAAdjumentsDetailsList", "LLPSignOff_BL.model$Text1RecordList", "LLPSignOff_BL.model$UploadedExcel_PMAAdjumentRec"], function (exports, OutSystems, LLPSignOff_BLModel) {
var OS = OutSystems.Internal;
var Uploaded_PMAAdjustmentDataRec = (function (_super) {
__extends(Uploaded_PMAAdjustmentDataRec, _super);
function Uploaded_PMAAdjustmentDataRec(defaults) {
_super.apply(this, arguments);
}
Uploaded_PMAAdjustmentDataRec.attributesToDeclare = function () {
return [
this.attr("AdjustmentKey", "adjustmentKeyAttr", "AdjustmentKey", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("AdjustmentStatus", "adjustmentStatusAttr", "AdjustmentStatus", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("AdjustmentStatusName", "adjustmentStatusNameAttr", "AdjustmentStatusName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("AdjustmentType", "adjustmentTypeAttr", "AdjustmentType", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("AdjustmentTypeName", "adjustmentTypeNameAttr", "AdjustmentTypeName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("PMAAdjustmentName", "pMAAdjustmentNameAttr", "PMAAdjustmentName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IndicatedReleaseQuarter", "indicatedReleaseQuarterAttr", "IndicatedReleaseQuarter", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("IndicatedReleaseQuarterName", "indicatedReleaseQuarterNameAttr", "IndicatedReleaseQuarterName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IndicatedReleaseYear", "indicatedReleaseYearAttr", "IndicatedReleaseYear", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("IsValid", "isValidAttr", "IsValid", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("AdjustmentDetail", "adjustmentDetailAttr", "AdjustmentDetail", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new LLPSignOff_BLModel.Uploaded_PMAAdjumentsDetailsList());
}, true, LLPSignOff_BLModel.Uploaded_PMAAdjumentsDetailsList), 
this.attr("ErrorMessage", "errorMessageAttr", "ErrorMessage", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new LLPSignOff_BLModel.Text1RecordList());
}, true, LLPSignOff_BLModel.Text1RecordList), 
this.attr("ExcelPMAAdjumentData", "excelPMAAdjumentDataAttr", "ExcelPMAAdjumentData", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new LLPSignOff_BLModel.UploadedExcel_PMAAdjumentRec());
}, true, LLPSignOff_BLModel.UploadedExcel_PMAAdjumentRec)
].concat(_super.attributesToDeclare.call(this));
};
Uploaded_PMAAdjustmentDataRec.init();
return Uploaded_PMAAdjustmentDataRec;
})(OS.DataTypes.GenericRecord);
LLPSignOff_BLModel.Uploaded_PMAAdjustmentDataRec = Uploaded_PMAAdjustmentDataRec;

});
define("LLPSignOff_BL.model$AggYTD_RequestRec", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_BL.model"], function (exports, OutSystems, LLPSignOff_BLModel) {
var OS = OutSystems.Internal;
var AggYTD_RequestRec = (function (_super) {
__extends(AggYTD_RequestRec, _super);
function AggYTD_RequestRec(defaults) {
_super.apply(this, arguments);
}
AggYTD_RequestRec.attributesToDeclare = function () {
return [
this.attr("YTDCategoryName", "yTDCategoryNameAttr", "YTDCategoryName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("YtdOrder", "ytdOrderAttr", "YtdOrder", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Stage1", "stage1Attr", "Stage1", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Stage2", "stage2Attr", "Stage2", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Stage3", "stage3Attr", "Stage3", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("POCI", "pOCIAttr", "POCI", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("SPPIfail", "sPPIfailAttr", "SPPIfail", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Total", "totalAttr", "Total", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
AggYTD_RequestRec.init();
return AggYTD_RequestRec;
})(OS.DataTypes.GenericRecord);
LLPSignOff_BLModel.AggYTD_RequestRec = AggYTD_RequestRec;

});
define("LLPSignOff_BL.model$SQLList_CountrySignOffRequestRec", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_BL.model"], function (exports, OutSystems, LLPSignOff_BLModel) {
var OS = OutSystems.Internal;
var SQLList_CountrySignOffRequestRec = (function (_super) {
__extends(SQLList_CountrySignOffRequestRec, _super);
function SQLList_CountrySignOffRequestRec(defaults) {
_super.apply(this, arguments);
}
SQLList_CountrySignOffRequestRec.attributesToDeclare = function () {
return [
this.attr("Country", "countryAttr", "Country", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CountryCode", "countryCodeAttr", "CountryCode", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ReportingCurrency", "reportingCurrencyAttr", "ReportingCurrency", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("provision", "provisionAttr", "provision", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("RiskCost", "riskCostAttr", "RiskCost", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("WriteOff", "writeOffAttr", "WriteOff", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Status", "statusAttr", "Status", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("QuarterName", "quarterNameAttr", "QuarterName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Year", "yearAttr", "Year", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CountBaseEntityPerUser", "countBaseEntityPerUserAttr", "CountBaseEntityPerUser", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("CountBaseEntityPerCountry", "countBaseEntityPerCountryAttr", "CountBaseEntityPerCountry", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
SQLList_CountrySignOffRequestRec.init();
return SQLList_CountrySignOffRequestRec;
})(OS.DataTypes.GenericRecord);
LLPSignOff_BLModel.SQLList_CountrySignOffRequestRec = SQLList_CountrySignOffRequestRec;

});
define("LLPSignOff_BL.model$Str_ValidateGeneralWorkflowErrorMessageRec", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_BL.model"], function (exports, OutSystems, LLPSignOff_BLModel) {
var OS = OutSystems.Internal;
var Str_ValidateGeneralWorkflowErrorMessageRec = (function (_super) {
__extends(Str_ValidateGeneralWorkflowErrorMessageRec, _super);
function Str_ValidateGeneralWorkflowErrorMessageRec(defaults) {
_super.apply(this, arguments);
}
Str_ValidateGeneralWorkflowErrorMessageRec.attributesToDeclare = function () {
return [
this.attr("ErrorMessage", "errorMessageAttr", "ErrorMessage", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Str_ValidateGeneralWorkflowErrorMessageRec.fromStructure = function (str) {
return new Str_ValidateGeneralWorkflowErrorMessageRec(new Str_ValidateGeneralWorkflowErrorMessageRec.RecordClass({
errorMessageAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
Str_ValidateGeneralWorkflowErrorMessageRec.init();
return Str_ValidateGeneralWorkflowErrorMessageRec;
})(OS.DataTypes.GenericRecord);
LLPSignOff_BLModel.Str_ValidateGeneralWorkflowErrorMessageRec = Str_ValidateGeneralWorkflowErrorMessageRec;

});
define("LLPSignOff_BL.model$Str_ValidateGeneralWorkflowErrorMessageList", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_BL.model", "LLPSignOff_BL.model$Str_ValidateGeneralWorkflowErrorMessageRec"], function (exports, OutSystems, LLPSignOff_BLModel) {
var OS = OutSystems.Internal;
var Str_ValidateGeneralWorkflowErrorMessageList = (function (_super) {
__extends(Str_ValidateGeneralWorkflowErrorMessageList, _super);
function Str_ValidateGeneralWorkflowErrorMessageList(defaults) {
_super.apply(this, arguments);
}
Str_ValidateGeneralWorkflowErrorMessageList.itemType = LLPSignOff_BLModel.Str_ValidateGeneralWorkflowErrorMessageRec;
return Str_ValidateGeneralWorkflowErrorMessageList;
})(OS.DataTypes.GenericRecordList);
LLPSignOff_BLModel.Str_ValidateGeneralWorkflowErrorMessageList = Str_ValidateGeneralWorkflowErrorMessageList;

});
define("LLPSignOff_BL.model$Str_ValidateGeneralWorkflowResultRec", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_BL.model", "LLPSignOff_BL.model$Str_ValidateGeneralWorkflowErrorMessageList"], function (exports, OutSystems, LLPSignOff_BLModel) {
var OS = OutSystems.Internal;
var Str_ValidateGeneralWorkflowResultRec = (function (_super) {
__extends(Str_ValidateGeneralWorkflowResultRec, _super);
function Str_ValidateGeneralWorkflowResultRec(defaults) {
_super.apply(this, arguments);
}
Str_ValidateGeneralWorkflowResultRec.attributesToDeclare = function () {
return [
this.attr("LayerId", "layerIdAttr", "LayerId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("LayerName", "layerNameAttr", "LayerName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsValid", "isValidAttr", "IsValid", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("list_ValidateGeneralWorkflowErrorMessage", "list_ValidateGeneralWorkflowErrorMessageAttr", "list_ValidateGeneralWorkflowErrorMessage", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new LLPSignOff_BLModel.Str_ValidateGeneralWorkflowErrorMessageList());
}, true, LLPSignOff_BLModel.Str_ValidateGeneralWorkflowErrorMessageList)
].concat(_super.attributesToDeclare.call(this));
};
Str_ValidateGeneralWorkflowResultRec.init();
return Str_ValidateGeneralWorkflowResultRec;
})(OS.DataTypes.GenericRecord);
LLPSignOff_BLModel.Str_ValidateGeneralWorkflowResultRec = Str_ValidateGeneralWorkflowResultRec;

});
define("LLPSignOff_BL.model$UploadedExcel_LocalAdjustmentPMARec", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_BL.model"], function (exports, OutSystems, LLPSignOff_BLModel) {
var OS = OutSystems.Internal;
var UploadedExcel_LocalAdjustmentPMARec = (function (_super) {
__extends(UploadedExcel_LocalAdjustmentPMARec, _super);
function UploadedExcel_LocalAdjustmentPMARec(defaults) {
_super.apply(this, arguments);
}
UploadedExcel_LocalAdjustmentPMARec.attributesToDeclare = function () {
return [
this.attr("AdjustmentKey", "adjustmentKeyAttr", "AdjustmentKey", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("AdjustmentType", "adjustmentTypeAttr", "AdjustmentType", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("AdjustmentName", "adjustmentNameAttr", "AdjustmentName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IndicatedReleaseQuarter", "indicatedReleaseQuarterAttr", "IndicatedReleaseQuarter", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("AdjustmentStatus", "adjustmentStatusAttr", "AdjustmentStatus", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Portfolio", "portfolioAttr", "Portfolio", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ProvisionCategory", "provisionCategoryAttr", "ProvisionCategory", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("OpeningBalance", "openingBalanceAttr", "OpeningBalance", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Increase", "increaseAttr", "Increase", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Release", "releaseAttr", "Release", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("ClosingBalance", "closingBalanceAttr", "ClosingBalance", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("ofwhichOffBalance", "ofwhichOffBalanceAttr", "ofwhichOffBalance", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("InVortex", "inVortexAttr", "InVortex", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IFRS9Model", "iFRS9ModelAttr", "IFRS9Model", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Industry", "industryAttr", "Industry", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Approach", "approachAttr", "Approach", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Comments", "commentsAttr", "Comments", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CombinationOfKey", "combinationOfKeyAttr", "CombinationOfKey", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
UploadedExcel_LocalAdjustmentPMARec.init();
return UploadedExcel_LocalAdjustmentPMARec;
})(OS.DataTypes.GenericRecord);
LLPSignOff_BLModel.UploadedExcel_LocalAdjustmentPMARec = UploadedExcel_LocalAdjustmentPMARec;

});
define("LLPSignOff_BL.model$Uploaded_LocalAdjustmentPMADetailsRec", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_BL.model", "LLPSignOff_BL.model$Text1RecordList", "LLPSignOff_BL.model$UploadedExcel_LocalAdjustmentPMARec"], function (exports, OutSystems, LLPSignOff_BLModel) {
var OS = OutSystems.Internal;
var Uploaded_LocalAdjustmentPMADetailsRec = (function (_super) {
__extends(Uploaded_LocalAdjustmentPMADetailsRec, _super);
function Uploaded_LocalAdjustmentPMADetailsRec(defaults) {
_super.apply(this, arguments);
}
Uploaded_LocalAdjustmentPMADetailsRec.attributesToDeclare = function () {
return [
this.attr("PortfolioName", "portfolioNameAttr", "PortfolioName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("PortfolioId", "portfolioIdAttr", "PortfolioId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("ProvisionCategoryName", "provisionCategoryNameAttr", "ProvisionCategoryName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ProvisionCategoryId", "provisionCategoryIdAttr", "ProvisionCategoryId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("OpeningBalance", "openingBalanceAttr", "OpeningBalance", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Increase", "increaseAttr", "Increase", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Release", "releaseAttr", "Release", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("ClosingBalance", "closingBalanceAttr", "ClosingBalance", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("OffBalance", "offBalanceAttr", "OffBalance", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("InVortex", "inVortexAttr", "InVortex", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("InVortexId", "inVortexIdAttr", "InVortexId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("IFRS9ModelName", "iFRS9ModelNameAttr", "IFRS9ModelName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IFRS9Model", "iFRS9ModelAttr", "IFRS9Model", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Industry", "industryAttr", "Industry", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IndustryId", "industryIdAttr", "IndustryId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Approach", "approachAttr", "Approach", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ApproachId", "approachIdAttr", "ApproachId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Comment", "commentAttr", "Comment", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsValid", "isValidAttr", "IsValid", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("ErrorMessage", "errorMessageAttr", "ErrorMessage", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new LLPSignOff_BLModel.Text1RecordList());
}, true, LLPSignOff_BLModel.Text1RecordList), 
this.attr("ExcelPMAAdjumentData", "excelPMAAdjumentDataAttr", "ExcelPMAAdjumentData", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new LLPSignOff_BLModel.UploadedExcel_LocalAdjustmentPMARec());
}, true, LLPSignOff_BLModel.UploadedExcel_LocalAdjustmentPMARec)
].concat(_super.attributesToDeclare.call(this));
};
Uploaded_LocalAdjustmentPMADetailsRec.init();
return Uploaded_LocalAdjustmentPMADetailsRec;
})(OS.DataTypes.GenericRecord);
LLPSignOff_BLModel.Uploaded_LocalAdjustmentPMADetailsRec = Uploaded_LocalAdjustmentPMADetailsRec;

});
define("LLPSignOff_BL.model$Uploaded_LocalAdjustmentPMADetailsList", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_BL.model", "LLPSignOff_BL.model$Uploaded_LocalAdjustmentPMADetailsRec"], function (exports, OutSystems, LLPSignOff_BLModel) {
var OS = OutSystems.Internal;
var Uploaded_LocalAdjustmentPMADetailsList = (function (_super) {
__extends(Uploaded_LocalAdjustmentPMADetailsList, _super);
function Uploaded_LocalAdjustmentPMADetailsList(defaults) {
_super.apply(this, arguments);
}
Uploaded_LocalAdjustmentPMADetailsList.itemType = LLPSignOff_BLModel.Uploaded_LocalAdjustmentPMADetailsRec;
return Uploaded_LocalAdjustmentPMADetailsList;
})(OS.DataTypes.GenericRecordList);
LLPSignOff_BLModel.Uploaded_LocalAdjustmentPMADetailsList = Uploaded_LocalAdjustmentPMADetailsList;

});
define("LLPSignOff_BL.model$Uploaded_LocalAdjustmentPMADataRec", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_BL.model", "LLPSignOff_BL.model$Uploaded_LocalAdjustmentPMADetailsList", "LLPSignOff_BL.model$Text1RecordList", "LLPSignOff_BL.model$UploadedExcel_LocalAdjustmentPMARec"], function (exports, OutSystems, LLPSignOff_BLModel) {
var OS = OutSystems.Internal;
var Uploaded_LocalAdjustmentPMADataRec = (function (_super) {
__extends(Uploaded_LocalAdjustmentPMADataRec, _super);
function Uploaded_LocalAdjustmentPMADataRec(defaults) {
_super.apply(this, arguments);
}
Uploaded_LocalAdjustmentPMADataRec.attributesToDeclare = function () {
return [
this.attr("AdjustmentKey", "adjustmentKeyAttr", "AdjustmentKey", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("AdjustmentStatus", "adjustmentStatusAttr", "AdjustmentStatus", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("AdjustmentStatusName", "adjustmentStatusNameAttr", "AdjustmentStatusName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("AdjustmentType", "adjustmentTypeAttr", "AdjustmentType", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("AdjustmentTypeName", "adjustmentTypeNameAttr", "AdjustmentTypeName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("PMAAdjustmentName", "pMAAdjustmentNameAttr", "PMAAdjustmentName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IndicatedReleaseQuarter", "indicatedReleaseQuarterAttr", "IndicatedReleaseQuarter", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("IndicatedReleaseQuarterName", "indicatedReleaseQuarterNameAttr", "IndicatedReleaseQuarterName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IndicatedReleaseYear", "indicatedReleaseYearAttr", "IndicatedReleaseYear", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("IsValid", "isValidAttr", "IsValid", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("AdjustmentDetail", "adjustmentDetailAttr", "AdjustmentDetail", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new LLPSignOff_BLModel.Uploaded_LocalAdjustmentPMADetailsList());
}, true, LLPSignOff_BLModel.Uploaded_LocalAdjustmentPMADetailsList), 
this.attr("ErrorMessage", "errorMessageAttr", "ErrorMessage", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new LLPSignOff_BLModel.Text1RecordList());
}, true, LLPSignOff_BLModel.Text1RecordList), 
this.attr("ExcelPMAAdjumentData", "excelPMAAdjumentDataAttr", "ExcelPMAAdjumentData", false, false, OS.DataTypes.DataTypes.Record, function () {
return OS.DataTypes.ImmutableBase.getData(new LLPSignOff_BLModel.UploadedExcel_LocalAdjustmentPMARec());
}, true, LLPSignOff_BLModel.UploadedExcel_LocalAdjustmentPMARec)
].concat(_super.attributesToDeclare.call(this));
};
Uploaded_LocalAdjustmentPMADataRec.init();
return Uploaded_LocalAdjustmentPMADataRec;
})(OS.DataTypes.GenericRecord);
LLPSignOff_BLModel.Uploaded_LocalAdjustmentPMADataRec = Uploaded_LocalAdjustmentPMADataRec;

});
define("LLPSignOff_BL.model$Str_AdjustmentRec", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_BL.model"], function (exports, OutSystems, LLPSignOff_BLModel) {
var OS = OutSystems.Internal;
var Str_AdjustmentRec = (function (_super) {
__extends(Str_AdjustmentRec, _super);
function Str_AdjustmentRec(defaults) {
_super.apply(this, arguments);
}
Str_AdjustmentRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("SignOffRequestId", "signOffRequestIdAttr", "SignOffRequestId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("AdjustmentTypeId", "adjustmentTypeIdAttr", "AdjustmentTypeId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("PortfolioId", "portfolioIdAttr", "PortfolioId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("ProvisionCategoryId", "provisionCategoryIdAttr", "ProvisionCategoryId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("PrevQuarterProv", "prevQuarterProvAttr", "PrevQuarterProv", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.BuiltinFunctions.integerToDecimal(0);
}, true), 
this.attr("QuarterlyFXChanges", "quarterlyFXChangesAttr", "QuarterlyFXChanges", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.BuiltinFunctions.integerToDecimal(0);
}, true), 
this.attr("PrevQuarterProvCurRate", "prevQuarterProvCurRateAttr", "PrevQuarterProvCurRate", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.BuiltinFunctions.integerToDecimal(0);
}, true), 
this.attr("Increase", "increaseAttr", "Increase", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.BuiltinFunctions.integerToDecimal(0);
}, true), 
this.attr("Release", "releaseAttr", "Release", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.BuiltinFunctions.integerToDecimal(0);
}, true), 
this.attr("WriteOff", "writeOffAttr", "WriteOff", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.BuiltinFunctions.integerToDecimal(0);
}, true), 
this.attr("Reversal", "reversalAttr", "Reversal", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.BuiltinFunctions.integerToDecimal(0);
}, true), 
this.attr("Other", "otherAttr", "Other", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.BuiltinFunctions.integerToDecimal(0);
}, true), 
this.attr("InterestNPLLoans", "interestNPLLoansAttr", "InterestNPLLoans", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.BuiltinFunctions.integerToDecimal(0);
}, true), 
this.attr("CurQuarterProv", "curQuarterProvAttr", "CurQuarterProv", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.BuiltinFunctions.integerToDecimal(0);
}, true), 
this.attr("OnBalance", "onBalanceAttr", "OnBalance", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("OffBalance", "offBalanceAttr", "OffBalance", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("RiskCosts", "riskCostsAttr", "RiskCosts", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("CreatedOn", "createdOnAttr", "CreatedOn", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("CreatedBy", "createdByAttr", "CreatedBy", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("LastChanged", "lastChangedAttr", "LastChanged", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("LastChangedBy", "lastChangedByAttr", "LastChangedBy", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Comment", "commentAttr", "Comment", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("BaseEntityId", "baseEntityIdAttr", "BaseEntityId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("IsRollForwarded", "isRollForwardedAttr", "IsRollForwarded", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Outstanding", "outstandingAttr", "Outstanding", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Str_AdjustmentRec.init();
return Str_AdjustmentRec;
})(OS.DataTypes.GenericRecord);
LLPSignOff_BLModel.Str_AdjustmentRec = Str_AdjustmentRec;

});
define("LLPSignOff_BL.model$SQLList_CountryYtdRequestRec", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_BL.model"], function (exports, OutSystems, LLPSignOff_BLModel) {
var OS = OutSystems.Internal;
var SQLList_CountryYtdRequestRec = (function (_super) {
__extends(SQLList_CountryYtdRequestRec, _super);
function SQLList_CountryYtdRequestRec(defaults) {
_super.apply(this, arguments);
}
SQLList_CountryYtdRequestRec.attributesToDeclare = function () {
return [
this.attr("Country", "countryAttr", "Country", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CountryCode", "countryCodeAttr", "CountryCode", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ReportingCurrency", "reportingCurrencyAttr", "ReportingCurrency", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("provision", "provisionAttr", "provision", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("RiskCost", "riskCostAttr", "RiskCost", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("WriteOff", "writeOffAttr", "WriteOff", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Status", "statusAttr", "Status", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("QuarterName", "quarterNameAttr", "QuarterName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Year", "yearAttr", "Year", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CountBaseEntityPerUser", "countBaseEntityPerUserAttr", "CountBaseEntityPerUser", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("CountBaseEntityPerCountry", "countBaseEntityPerCountryAttr", "CountBaseEntityPerCountry", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
SQLList_CountryYtdRequestRec.init();
return SQLList_CountryYtdRequestRec;
})(OS.DataTypes.GenericRecord);
LLPSignOff_BLModel.SQLList_CountryYtdRequestRec = SQLList_CountryYtdRequestRec;

});
define("LLPSignOff_BL.model$NPLPortfolioSalesDetail_WbRec", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_BL.model"], function (exports, OutSystems, LLPSignOff_BLModel) {
var OS = OutSystems.Internal;
var NPLPortfolioSalesDetail_WbRec = (function (_super) {
__extends(NPLPortfolioSalesDetail_WbRec, _super);
function NPLPortfolioSalesDetail_WbRec(defaults) {
_super.apply(this, arguments);
}
NPLPortfolioSalesDetail_WbRec.attributesToDeclare = function () {
return [
this.attr("NPLPortfolioDetailsId", "nPLPortfolioDetailsIdAttr", "NPLPortfolioDetailsId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("NPLPortfolioId", "nPLPortfolioIdAttr", "NPLPortfolioId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("PortfolioId", "portfolioIdAttr", "PortfolioId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("PortfolioName", "portfolioNameAttr", "PortfolioName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("NominalAmountOfOutstanding", "nominalAmountOfOutstandingAttr", "NominalAmountOfOutstanding", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("SalesPrice", "salesPriceAttr", "SalesPrice", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("SalesPricePercentage", "salesPricePercentageAttr", "SalesPricePercentage", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("HaircutWriteOff", "haircutWriteOffAttr", "HaircutWriteOff", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("ExistingProvisionPreviousQ", "existingProvisionPreviousQAttr", "ExistingProvisionPreviousQ", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("RiskCostsFollowingWriteOffCQ", "riskCostsFollowingWriteOffCQAttr", "RiskCostsFollowingWriteOffCQ", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
NPLPortfolioSalesDetail_WbRec.init();
return NPLPortfolioSalesDetail_WbRec;
})(OS.DataTypes.GenericRecord);
LLPSignOff_BLModel.NPLPortfolioSalesDetail_WbRec = NPLPortfolioSalesDetail_WbRec;

});
define("LLPSignOff_BL.model$RemarksRec", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_BL.model"], function (exports, OutSystems, LLPSignOff_BLModel) {
var OS = OutSystems.Internal;
var RemarksRec = (function (_super) {
__extends(RemarksRec, _super);
function RemarksRec(defaults) {
_super.apply(this, arguments);
}
RemarksRec.attributesToDeclare = function () {
return [
this.attr("Username", "usernameAttr", "Username", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Name", "nameAttr", "Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CreatedDate", "createdDateAttr", "CreatedDate", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("SignOffRequest_Remarks", "signOffRequest_RemarksAttr", "SignOffRequest_Remarks", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Justification", "justificationAttr", "Justification", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsSystem", "isSystemAttr", "IsSystem", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
RemarksRec.init();
return RemarksRec;
})(OS.DataTypes.GenericRecord);
LLPSignOff_BLModel.RemarksRec = RemarksRec;

});
define("LLPSignOff_BL.model$UploadedExcel_LocalAdjustmentPMA_ResultRec", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_BL.model"], function (exports, OutSystems, LLPSignOff_BLModel) {
var OS = OutSystems.Internal;
var UploadedExcel_LocalAdjustmentPMA_ResultRec = (function (_super) {
__extends(UploadedExcel_LocalAdjustmentPMA_ResultRec, _super);
function UploadedExcel_LocalAdjustmentPMA_ResultRec(defaults) {
_super.apply(this, arguments);
}
UploadedExcel_LocalAdjustmentPMA_ResultRec.attributesToDeclare = function () {
return [
this.attr("AdjustmentKey", "adjustmentKeyAttr", "AdjustmentKey", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("AdjustmentType", "adjustmentTypeAttr", "AdjustmentType", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("AdjustmentTypeId", "adjustmentTypeIdAttr", "AdjustmentTypeId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("AdjustmentName", "adjustmentNameAttr", "AdjustmentName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IndicatedReleaseQuarter", "indicatedReleaseQuarterAttr", "IndicatedReleaseQuarter", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("InidiacatedReleaseQuarterId", "inidiacatedReleaseQuarterIdAttr", "InidiacatedReleaseQuarterId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("AdjustmentStatus", "adjustmentStatusAttr", "AdjustmentStatus", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("AdjustmentStatusId", "adjustmentStatusIdAttr", "AdjustmentStatusId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Portfolio", "portfolioAttr", "Portfolio", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("PortfolioId", "portfolioIdAttr", "PortfolioId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("ProvisionCatogary", "provisionCatogaryAttr", "ProvisionCatogary", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ProvisionCatogaryId", "provisionCatogaryIdAttr", "ProvisionCatogaryId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("OpeningBalance", "openingBalanceAttr", "OpeningBalance", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Increase", "increaseAttr", "Increase", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Release", "releaseAttr", "Release", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("ClosingBalance", "closingBalanceAttr", "ClosingBalance", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("ofwhichOffBalance", "ofwhichOffBalanceAttr", "ofwhichOffBalance", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("InVortex", "inVortexAttr", "InVortex", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("InVortexId", "inVortexIdAttr", "InVortexId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("IFRS9Model", "iFRS9ModelAttr", "IFRS9Model", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IFRS9ModelId", "iFRS9ModelIdAttr", "IFRS9ModelId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Industry", "industryAttr", "Industry", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IndustryId", "industryIdAttr", "IndustryId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Approach", "approachAttr", "Approach", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ApproachId", "approachIdAttr", "ApproachId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Comments", "commentsAttr", "Comments", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ErrorMessage", "errorMessageAttr", "ErrorMessage", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
UploadedExcel_LocalAdjustmentPMA_ResultRec.init();
return UploadedExcel_LocalAdjustmentPMA_ResultRec;
})(OS.DataTypes.GenericRecord);
LLPSignOff_BLModel.UploadedExcel_LocalAdjustmentPMA_ResultRec = UploadedExcel_LocalAdjustmentPMA_ResultRec;

});
define("LLPSignOff_BL.model$NPLPortfolioSalesDetailsRec", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_BL.model"], function (exports, OutSystems, LLPSignOff_BLModel) {
var OS = OutSystems.Internal;
var NPLPortfolioSalesDetailsRec = (function (_super) {
__extends(NPLPortfolioSalesDetailsRec, _super);
function NPLPortfolioSalesDetailsRec(defaults) {
_super.apply(this, arguments);
}
NPLPortfolioSalesDetailsRec.attributesToDeclare = function () {
return [
this.attr("NPLPortfolioDetailsId", "nPLPortfolioDetailsIdAttr", "NPLPortfolioDetailsId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("NPLPortfolioId", "nPLPortfolioIdAttr", "NPLPortfolioId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("NPLPortfolioCategoryId", "nPLPortfolioCategoryIdAttr", "NPLPortfolioCategoryId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("NPLPortfolioCategoryName", "nPLPortfolioCategoryNameAttr", "NPLPortfolioCategoryName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("WholesaleBanking", "wholesaleBankingAttr", "WholesaleBanking", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Mortgages", "mortgagesAttr", "Mortgages", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("ConsumerLending", "consumerLendingAttr", "ConsumerLending", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("BusinessLending", "businessLendingAttr", "BusinessLending", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("IsReadOnly", "isReadOnlyAttr", "IsReadOnly", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Ispercent", "ispercentAttr", "Ispercent", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
NPLPortfolioSalesDetailsRec.init();
return NPLPortfolioSalesDetailsRec;
})(OS.DataTypes.GenericRecord);
LLPSignOff_BLModel.NPLPortfolioSalesDetailsRec = NPLPortfolioSalesDetailsRec;

});
define("LLPSignOff_BL.model$StrLayer1SheetData2Rec", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_BL.model"], function (exports, OutSystems, LLPSignOff_BLModel) {
var OS = OutSystems.Internal;
var StrLayer1SheetData2Rec = (function (_super) {
__extends(StrLayer1SheetData2Rec, _super);
function StrLayer1SheetData2Rec(defaults) {
_super.apply(this, arguments);
}
StrLayer1SheetData2Rec.attributesToDeclare = function () {
return [
this.attr("LayerId", "layerIdAttr", "LayerId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("PortfolioId", "portfolioIdAttr", "PortfolioId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("ProvisionCategoryName", "provisionCategoryNameAttr", "ProvisionCategoryName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ProvisionCategoryId", "provisionCategoryIdAttr", "ProvisionCategoryId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("ProvisionTypeName", "provisionTypeNameAttr", "ProvisionTypeName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Outstanding", "outstandingAttr", "Outstanding", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("PrevQuarterProv", "prevQuarterProvAttr", "PrevQuarterProv", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("QuarterlyFXChanges", "quarterlyFXChangesAttr", "QuarterlyFXChanges", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("PrevQuarterProvCurRate", "prevQuarterProvCurRateAttr", "PrevQuarterProvCurRate", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Increase", "increaseAttr", "Increase", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Release", "releaseAttr", "Release", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("RiskCost", "riskCostAttr", "RiskCost", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("WriteOff", "writeOffAttr", "WriteOff", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Reversal", "reversalAttr", "Reversal", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Other", "otherAttr", "Other", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("InterestNPLLoans", "interestNPLLoansAttr", "InterestNPLLoans", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("CurQuarterProv", "curQuarterProvAttr", "CurQuarterProv", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Check", "checkAttr", "Check", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("OnBalance", "onBalanceAttr", "OnBalance", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("OffBalance", "offBalanceAttr", "OffBalance", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("ProvFXChange", "provFXChangeAttr", "ProvFXChange", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("CurQuarterProvCurRate", "curQuarterProvCurRateAttr", "CurQuarterProvCurRate", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
StrLayer1SheetData2Rec.init();
return StrLayer1SheetData2Rec;
})(OS.DataTypes.GenericRecord);
LLPSignOff_BLModel.StrLayer1SheetData2Rec = StrLayer1SheetData2Rec;

});
define("LLPSignOff_BL.model$UserAccessibleCountries2Rec", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_BL.model"], function (exports, OutSystems, LLPSignOff_BLModel) {
var OS = OutSystems.Internal;
var UserAccessibleCountries2Rec = (function (_super) {
__extends(UserAccessibleCountries2Rec, _super);
function UserAccessibleCountries2Rec(defaults) {
_super.apply(this, arguments);
}
UserAccessibleCountries2Rec.attributesToDeclare = function () {
return [
this.attr("Country", "countryAttr", "Country", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CountryCode", "countryCodeAttr", "CountryCode", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ReportingCurrency", "reportingCurrencyAttr", "ReportingCurrency", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
UserAccessibleCountries2Rec.init();
return UserAccessibleCountries2Rec;
})(OS.DataTypes.GenericRecord);
LLPSignOff_BLModel.UserAccessibleCountries2Rec = UserAccessibleCountries2Rec;

});
define("LLPSignOff_BL.model$ExcelUploadedVortexCognosRec", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_BL.model"], function (exports, OutSystems, LLPSignOff_BLModel) {
var OS = OutSystems.Internal;
var ExcelUploadedVortexCognosRec = (function (_super) {
__extends(ExcelUploadedVortexCognosRec, _super);
function ExcelUploadedVortexCognosRec(defaults) {
_super.apply(this, arguments);
}
ExcelUploadedVortexCognosRec.attributesToDeclare = function () {
return [
this.attr("BaseEntityCode", "baseEntityCodeAttr", "BaseEntityCode", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("BaseEntityName", "baseEntityNameAttr", "BaseEntityName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Portfolio", "portfolioAttr", "Portfolio", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ProvisionCategory", "provisionCategoryAttr", "ProvisionCategory", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Outstanding", "outstandingAttr", "Outstanding", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("OpeningBalance", "openingBalanceAttr", "OpeningBalance", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Increase", "increaseAttr", "Increase", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Release", "releaseAttr", "Release", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("WriteOff", "writeOffAttr", "WriteOff", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Reversal", "reversalAttr", "Reversal", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Other", "otherAttr", "Other", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("InterestNPLLoans", "interestNPLLoansAttr", "InterestNPLLoans", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("ClosingBalance", "closingBalanceAttr", "ClosingBalance", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("ofwhichOffBalance", "ofwhichOffBalanceAttr", "ofwhichOffBalance", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ExcelUploadedVortexCognosRec.init();
return ExcelUploadedVortexCognosRec;
})(OS.DataTypes.GenericRecord);
LLPSignOff_BLModel.ExcelUploadedVortexCognosRec = ExcelUploadedVortexCognosRec;

});
define("LLPSignOff_BL.model$Uploaded_InvalidAdjustmentDataRec", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_BL.model"], function (exports, OutSystems, LLPSignOff_BLModel) {
var OS = OutSystems.Internal;
var Uploaded_InvalidAdjustmentDataRec = (function (_super) {
__extends(Uploaded_InvalidAdjustmentDataRec, _super);
function Uploaded_InvalidAdjustmentDataRec(defaults) {
_super.apply(this, arguments);
}
Uploaded_InvalidAdjustmentDataRec.attributesToDeclare = function () {
return [
this.attr("AdjustmentKey", "adjustmentKeyAttr", "AdjustmentKey", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Status", "statusAttr", "Status", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Uploaded_InvalidAdjustmentDataRec.init();
return Uploaded_InvalidAdjustmentDataRec;
})(OS.DataTypes.GenericRecord);
LLPSignOff_BLModel.Uploaded_InvalidAdjustmentDataRec = Uploaded_InvalidAdjustmentDataRec;

});
define("LLPSignOff_BL.model$NPLPortfolioSalesDetailsList", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_BL.model", "LLPSignOff_BL.model$NPLPortfolioSalesDetailsRec"], function (exports, OutSystems, LLPSignOff_BLModel) {
var OS = OutSystems.Internal;
var NPLPortfolioSalesDetailsList = (function (_super) {
__extends(NPLPortfolioSalesDetailsList, _super);
function NPLPortfolioSalesDetailsList(defaults) {
_super.apply(this, arguments);
}
NPLPortfolioSalesDetailsList.itemType = LLPSignOff_BLModel.NPLPortfolioSalesDetailsRec;
return NPLPortfolioSalesDetailsList;
})(OS.DataTypes.GenericRecordList);
LLPSignOff_BLModel.NPLPortfolioSalesDetailsList = NPLPortfolioSalesDetailsList;

});
define("LLPSignOff_BL.model$NPL_PortfolioRec", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_BL.model", "LLPSignOff_BL.model$NPLPortfolioSalesDetailsList"], function (exports, OutSystems, LLPSignOff_BLModel) {
var OS = OutSystems.Internal;
var NPL_PortfolioRec = (function (_super) {
__extends(NPL_PortfolioRec, _super);
function NPL_PortfolioRec(defaults) {
_super.apply(this, arguments);
}
NPL_PortfolioRec.attributesToDeclare = function () {
return [
this.attr("NPLPortfolioId", "nPLPortfolioIdAttr", "NPLPortfolioId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("SignOffRequestId", "signOffRequestIdAttr", "SignOffRequestId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("NameofBuyer", "nameofBuyerAttr", "NameofBuyer", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SalesDate", "salesDateAttr", "SalesDate", false, false, OS.DataTypes.DataTypes.Date, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("NPLPortfolioSalesDetails", "nPLPortfolioSalesDetailsAttr", "NPLPortfolioSalesDetails", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new LLPSignOff_BLModel.NPLPortfolioSalesDetailsList());
}, true, LLPSignOff_BLModel.NPLPortfolioSalesDetailsList)
].concat(_super.attributesToDeclare.call(this));
};
NPL_PortfolioRec.init();
return NPL_PortfolioRec;
})(OS.DataTypes.GenericRecord);
LLPSignOff_BLModel.NPL_PortfolioRec = NPL_PortfolioRec;

});
define("LLPSignOff_BL.model$ExportExcelAdjustmentsRec", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_BL.model"], function (exports, OutSystems, LLPSignOff_BLModel) {
var OS = OutSystems.Internal;
var ExportExcelAdjustmentsRec = (function (_super) {
__extends(ExportExcelAdjustmentsRec, _super);
function ExportExcelAdjustmentsRec(defaults) {
_super.apply(this, arguments);
}
ExportExcelAdjustmentsRec.attributesToDeclare = function () {
return [
this.attr("Portfolio", "portfolioAttr", "Portfolio", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("PrevQuarterProv", "prevQuarterProvAttr", "PrevQuarterProv", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("QuarterlyFXChanges", "quarterlyFXChangesAttr", "QuarterlyFXChanges", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("PrevQuarterProvCurRate", "prevQuarterProvCurRateAttr", "PrevQuarterProvCurRate", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Increase", "increaseAttr", "Increase", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Release", "releaseAttr", "Release", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("RiskCosts", "riskCostsAttr", "RiskCosts", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("WriteOff", "writeOffAttr", "WriteOff", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Reversal", "reversalAttr", "Reversal", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Other", "otherAttr", "Other", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("InterestNPLLoans", "interestNPLLoansAttr", "InterestNPLLoans", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("CurQuarterProv", "curQuarterProvAttr", "CurQuarterProv", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("OnBalance", "onBalanceAttr", "OnBalance", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("OffBalance", "offBalanceAttr", "OffBalance", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("ProvisionCategory", "provisionCategoryAttr", "ProvisionCategory", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("AdjustmentType", "adjustmentTypeAttr", "AdjustmentType", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("AdjustmentKey", "adjustmentKeyAttr", "AdjustmentKey", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("AdjustmentName", "adjustmentNameAttr", "AdjustmentName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("AdjustmentStatus", "adjustmentStatusAttr", "AdjustmentStatus", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IndicatedReleaseQuarterYear_Text", "indicatedReleaseQuarterYear_TextAttr", "IndicatedReleaseQuarterYear_Text", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsAdjustmentAmountinVortexText", "isAdjustmentAmountinVortexTextAttr", "IsAdjustmentAmountinVortexText", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IFRS9Model", "iFRS9ModelAttr", "IFRS9Model", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Industry", "industryAttr", "Industry", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("AdjustmentApproach", "adjustmentApproachAttr", "AdjustmentApproach", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Comment", "commentAttr", "Comment", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("BaseEntityLabel", "baseEntityLabelAttr", "BaseEntityLabel", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LastChanged", "lastChangedAttr", "LastChanged", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("OrderBy", "orderByAttr", "OrderBy", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Outstanding", "outstandingAttr", "Outstanding", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ExportExcelAdjustmentsRec.init();
return ExportExcelAdjustmentsRec;
})(OS.DataTypes.GenericRecord);
LLPSignOff_BLModel.ExportExcelAdjustmentsRec = ExportExcelAdjustmentsRec;

});
define("LLPSignOff_BL.model$Uploaded_InvalidLocalAdjustmentPMADataRec", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_BL.model"], function (exports, OutSystems, LLPSignOff_BLModel) {
var OS = OutSystems.Internal;
var Uploaded_InvalidLocalAdjustmentPMADataRec = (function (_super) {
__extends(Uploaded_InvalidLocalAdjustmentPMADataRec, _super);
function Uploaded_InvalidLocalAdjustmentPMADataRec(defaults) {
_super.apply(this, arguments);
}
Uploaded_InvalidLocalAdjustmentPMADataRec.attributesToDeclare = function () {
return [
this.attr("AdjustmentKey", "adjustmentKeyAttr", "AdjustmentKey", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Status", "statusAttr", "Status", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Uploaded_InvalidLocalAdjustmentPMADataRec.init();
return Uploaded_InvalidLocalAdjustmentPMADataRec;
})(OS.DataTypes.GenericRecord);
LLPSignOff_BLModel.Uploaded_InvalidLocalAdjustmentPMADataRec = Uploaded_InvalidLocalAdjustmentPMADataRec;

});
define("LLPSignOff_BL.model$ExcelUploaded_NonPMAAdjustmentResultRec", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_BL.model"], function (exports, OutSystems, LLPSignOff_BLModel) {
var OS = OutSystems.Internal;
var ExcelUploaded_NonPMAAdjustmentResultRec = (function (_super) {
__extends(ExcelUploaded_NonPMAAdjustmentResultRec, _super);
function ExcelUploaded_NonPMAAdjustmentResultRec(defaults) {
_super.apply(this, arguments);
}
ExcelUploaded_NonPMAAdjustmentResultRec.attributesToDeclare = function () {
return [
this.attr("BaseEntity", "baseEntityAttr", "BaseEntity", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("AdjustmentType", "adjustmentTypeAttr", "AdjustmentType", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Portfolio", "portfolioAttr", "Portfolio", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ProvisionCategory", "provisionCategoryAttr", "ProvisionCategory", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("OpeningBalance", "openingBalanceAttr", "OpeningBalance", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Increase", "increaseAttr", "Increase", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Release", "releaseAttr", "Release", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("WriteOff", "writeOffAttr", "WriteOff", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Reversal", "reversalAttr", "Reversal", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Other", "otherAttr", "Other", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("InterestNPL", "interestNPLAttr", "InterestNPL", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("ClosingBalance", "closingBalanceAttr", "ClosingBalance", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("ofwhichOffBalance", "ofwhichOffBalanceAttr", "ofwhichOffBalance", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Comments", "commentsAttr", "Comments", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Outstanding", "outstandingAttr", "Outstanding", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("CombinationOfKey", "combinationOfKeyAttr", "CombinationOfKey", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ErrorMessage", "errorMessageAttr", "ErrorMessage", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ExcelUploaded_NonPMAAdjustmentResultRec.init();
return ExcelUploaded_NonPMAAdjustmentResultRec;
})(OS.DataTypes.GenericRecord);
LLPSignOff_BLModel.ExcelUploaded_NonPMAAdjustmentResultRec = ExcelUploaded_NonPMAAdjustmentResultRec;

});
define("LLPSignOff_BL.model$ExcelYTDDataRec", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_BL.model"], function (exports, OutSystems, LLPSignOff_BLModel) {
var OS = OutSystems.Internal;
var ExcelYTDDataRec = (function (_super) {
__extends(ExcelYTDDataRec, _super);
function ExcelYTDDataRec(defaults) {
_super.apply(this, arguments);
}
ExcelYTDDataRec.attributesToDeclare = function () {
return [
this.attr("BaseEntity", "baseEntityAttr", "BaseEntity", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("YTDCategoryName", "yTDCategoryNameAttr", "YTDCategoryName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Stage1", "stage1Attr", "Stage1", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Stage2", "stage2Attr", "Stage2", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Stage3", "stage3Attr", "Stage3", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("POCI", "pOCIAttr", "POCI", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("SPPIfail", "sPPIfailAttr", "SPPIfail", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ExcelYTDDataRec.init();
return ExcelYTDDataRec;
})(OS.DataTypes.GenericRecord);
LLPSignOff_BLModel.ExcelYTDDataRec = ExcelYTDDataRec;

});
define("LLPSignOff_BL.model$ValidationVortexCognosDetailRec", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_BL.model"], function (exports, OutSystems, LLPSignOff_BLModel) {
var OS = OutSystems.Internal;
var ValidationVortexCognosDetailRec = (function (_super) {
__extends(ValidationVortexCognosDetailRec, _super);
function ValidationVortexCognosDetailRec(defaults) {
_super.apply(this, arguments);
}
ValidationVortexCognosDetailRec.attributesToDeclare = function () {
return [
this.attr("ErrorMessage", "errorMessageAttr", "ErrorMessage", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ValidationVortexCognosDetailRec.fromStructure = function (str) {
return new ValidationVortexCognosDetailRec(new ValidationVortexCognosDetailRec.RecordClass({
errorMessageAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ValidationVortexCognosDetailRec.init();
return ValidationVortexCognosDetailRec;
})(OS.DataTypes.GenericRecord);
LLPSignOff_BLModel.ValidationVortexCognosDetailRec = ValidationVortexCognosDetailRec;

});
define("LLPSignOff_BL.model$ValidationVortexCognosDetailList", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_BL.model", "LLPSignOff_BL.model$ValidationVortexCognosDetailRec"], function (exports, OutSystems, LLPSignOff_BLModel) {
var OS = OutSystems.Internal;
var ValidationVortexCognosDetailList = (function (_super) {
__extends(ValidationVortexCognosDetailList, _super);
function ValidationVortexCognosDetailList(defaults) {
_super.apply(this, arguments);
}
ValidationVortexCognosDetailList.itemType = LLPSignOff_BLModel.ValidationVortexCognosDetailRec;
return ValidationVortexCognosDetailList;
})(OS.DataTypes.GenericRecordList);
LLPSignOff_BLModel.ValidationVortexCognosDetailList = ValidationVortexCognosDetailList;

});
define("LLPSignOff_BL.model$VortexCognosDetailsRec", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_BL.model", "LLPSignOff_BL.model$ValidationVortexCognosDetailList"], function (exports, OutSystems, LLPSignOff_BLModel) {
var OS = OutSystems.Internal;
var VortexCognosDetailsRec = (function (_super) {
__extends(VortexCognosDetailsRec, _super);
function VortexCognosDetailsRec(defaults) {
_super.apply(this, arguments);
}
VortexCognosDetailsRec.attributesToDeclare = function () {
return [
this.attr("PortfolioID", "portfolioIDAttr", "PortfolioID", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Portfolio", "portfolioAttr", "Portfolio", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ProvisionCategoryId", "provisionCategoryIdAttr", "ProvisionCategoryId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("ProvisionCategory", "provisionCategoryAttr", "ProvisionCategory", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Outstanding", "outstandingAttr", "Outstanding", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("OpeningBalance", "openingBalanceAttr", "OpeningBalance", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Increase", "increaseAttr", "Increase", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Release", "releaseAttr", "Release", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("WriteOff", "writeOffAttr", "WriteOff", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Reversal", "reversalAttr", "Reversal", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Other", "otherAttr", "Other", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("InterestNPLLoans", "interestNPLLoansAttr", "InterestNPLLoans", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("ClosingBalance", "closingBalanceAttr", "ClosingBalance", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("ofwhichOffBalance", "ofwhichOffBalanceAttr", "ofwhichOffBalance", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("lst_ValidationVortexCognosDetail", "lst_ValidationVortexCognosDetailAttr", "lst_ValidationVortexCognosDetail", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new LLPSignOff_BLModel.ValidationVortexCognosDetailList());
}, true, LLPSignOff_BLModel.ValidationVortexCognosDetailList)
].concat(_super.attributesToDeclare.call(this));
};
VortexCognosDetailsRec.init();
return VortexCognosDetailsRec;
})(OS.DataTypes.GenericRecord);
LLPSignOff_BLModel.VortexCognosDetailsRec = VortexCognosDetailsRec;

});
define("LLPSignOff_BL.model$PMAAdjustmentRecordRec", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_BL.model"], function (exports, OutSystems, LLPSignOff_BLModel) {
var OS = OutSystems.Internal;
var PMAAdjustmentRecordRec = (function (_super) {
__extends(PMAAdjustmentRecordRec, _super);
function PMAAdjustmentRecordRec(defaults) {
_super.apply(this, arguments);
}
PMAAdjustmentRecordRec.attributesToDeclare = function () {
return [
this.attr("SignOffRequestId", "signOffRequestIdAttr", "SignOffRequestId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("PMAAdjustmentId", "pMAAdjustmentIdAttr", "PMAAdjustmentId", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("LayerId", "layerIdAttr", "LayerId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("AdjustmentName", "adjustmentNameAttr", "AdjustmentName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("AdjustmentKey", "adjustmentKeyAttr", "AdjustmentKey", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("AdjustmentStatusId", "adjustmentStatusIdAttr", "AdjustmentStatusId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("IndicatedReleaseQuarter", "indicatedReleaseQuarterAttr", "IndicatedReleaseQuarter", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("IndicatedReleaseYear", "indicatedReleaseYearAttr", "IndicatedReleaseYear", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("AdjustmentTypeId", "adjustmentTypeIdAttr", "AdjustmentTypeId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("isRolledForward", "isRolledForwardAttr", "isRolledForward", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("SignOffProcesQuarterYearId", "signOffProcesQuarterYearIdAttr", "SignOffProcesQuarterYearId", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("IsActive", "isActiveAttr", "IsActive", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
PMAAdjustmentRecordRec.init();
return PMAAdjustmentRecordRec;
})(OS.DataTypes.GenericRecord);
LLPSignOff_BLModel.PMAAdjustmentRecordRec = PMAAdjustmentRecordRec;

});
define("LLPSignOff_BL.model$ValidationNonPMAAdjustmentRec", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_BL.model"], function (exports, OutSystems, LLPSignOff_BLModel) {
var OS = OutSystems.Internal;
var ValidationNonPMAAdjustmentRec = (function (_super) {
__extends(ValidationNonPMAAdjustmentRec, _super);
function ValidationNonPMAAdjustmentRec(defaults) {
_super.apply(this, arguments);
}
ValidationNonPMAAdjustmentRec.attributesToDeclare = function () {
return [
this.attr("ErrorMessage", "errorMessageAttr", "ErrorMessage", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ValidationNonPMAAdjustmentRec.fromStructure = function (str) {
return new ValidationNonPMAAdjustmentRec(new ValidationNonPMAAdjustmentRec.RecordClass({
errorMessageAttr: OS.DataTypes.ImmutableBase.getData(str)
}));
};
ValidationNonPMAAdjustmentRec.init();
return ValidationNonPMAAdjustmentRec;
})(OS.DataTypes.GenericRecord);
LLPSignOff_BLModel.ValidationNonPMAAdjustmentRec = ValidationNonPMAAdjustmentRec;

});
define("LLPSignOff_BL.model$ValidationNonPMAAdjustmentList", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_BL.model", "LLPSignOff_BL.model$ValidationNonPMAAdjustmentRec"], function (exports, OutSystems, LLPSignOff_BLModel) {
var OS = OutSystems.Internal;
var ValidationNonPMAAdjustmentList = (function (_super) {
__extends(ValidationNonPMAAdjustmentList, _super);
function ValidationNonPMAAdjustmentList(defaults) {
_super.apply(this, arguments);
}
ValidationNonPMAAdjustmentList.itemType = LLPSignOff_BLModel.ValidationNonPMAAdjustmentRec;
return ValidationNonPMAAdjustmentList;
})(OS.DataTypes.GenericRecordList);
LLPSignOff_BLModel.ValidationNonPMAAdjustmentList = ValidationNonPMAAdjustmentList;

});
define("LLPSignOff_BL.model$Uploaded_NonPMAAdjustmentResultRec", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_BL.model", "LLPSignOff_BL.model$ValidationNonPMAAdjustmentList"], function (exports, OutSystems, LLPSignOff_BLModel) {
var OS = OutSystems.Internal;
var Uploaded_NonPMAAdjustmentResultRec = (function (_super) {
__extends(Uploaded_NonPMAAdjustmentResultRec, _super);
function Uploaded_NonPMAAdjustmentResultRec(defaults) {
_super.apply(this, arguments);
}
Uploaded_NonPMAAdjustmentResultRec.attributesToDeclare = function () {
return [
this.attr("AdjustmentType", "adjustmentTypeAttr", "AdjustmentType", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("BaseEntity", "baseEntityAttr", "BaseEntity", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Portfolio", "portfolioAttr", "Portfolio", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ProvisionCategory", "provisionCategoryAttr", "ProvisionCategory", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("OpeningBalance", "openingBalanceAttr", "OpeningBalance", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Increase", "increaseAttr", "Increase", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Release", "releaseAttr", "Release", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("WriteOff", "writeOffAttr", "WriteOff", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Reversal", "reversalAttr", "Reversal", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Other", "otherAttr", "Other", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("InterestNPL", "interestNPLAttr", "InterestNPL", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("ClosingBalance", "closingBalanceAttr", "ClosingBalance", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("ofwhichOffBalance", "ofwhichOffBalanceAttr", "ofwhichOffBalance", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Comments", "commentsAttr", "Comments", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Outstanding", "outstandingAttr", "Outstanding", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("CombinationOfKey", "combinationOfKeyAttr", "CombinationOfKey", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("lst_ValidationNonPMAAdjustment", "lst_ValidationNonPMAAdjustmentAttr", "lst_ValidationNonPMAAdjustment", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new LLPSignOff_BLModel.ValidationNonPMAAdjustmentList());
}, true, LLPSignOff_BLModel.ValidationNonPMAAdjustmentList)
].concat(_super.attributesToDeclare.call(this));
};
Uploaded_NonPMAAdjustmentResultRec.init();
return Uploaded_NonPMAAdjustmentResultRec;
})(OS.DataTypes.GenericRecord);
LLPSignOff_BLModel.Uploaded_NonPMAAdjustmentResultRec = Uploaded_NonPMAAdjustmentResultRec;

});
define("LLPSignOff_BL.model$ExcelUploadedVortexCognos_ResultRec", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_BL.model"], function (exports, OutSystems, LLPSignOff_BLModel) {
var OS = OutSystems.Internal;
var ExcelUploadedVortexCognos_ResultRec = (function (_super) {
__extends(ExcelUploadedVortexCognos_ResultRec, _super);
function ExcelUploadedVortexCognos_ResultRec(defaults) {
_super.apply(this, arguments);
}
ExcelUploadedVortexCognos_ResultRec.attributesToDeclare = function () {
return [
this.attr("BaseEntityCode", "baseEntityCodeAttr", "BaseEntityCode", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("BaseEntityName", "baseEntityNameAttr", "BaseEntityName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Portfolio", "portfolioAttr", "Portfolio", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ProvisionCategory", "provisionCategoryAttr", "ProvisionCategory", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Outstanding", "outstandingAttr", "Outstanding", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("OpeningBalance", "openingBalanceAttr", "OpeningBalance", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Increase", "increaseAttr", "Increase", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Release", "releaseAttr", "Release", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("WriteOff", "writeOffAttr", "WriteOff", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Reversal", "reversalAttr", "Reversal", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Other", "otherAttr", "Other", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("InterestNPLLoans", "interestNPLLoansAttr", "InterestNPLLoans", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("ClosingBalance", "closingBalanceAttr", "ClosingBalance", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("ofwhichOffBalance", "ofwhichOffBalanceAttr", "ofwhichOffBalance", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("ErrorMessage", "errorMessageAttr", "ErrorMessage", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ExcelUploadedVortexCognos_ResultRec.init();
return ExcelUploadedVortexCognos_ResultRec;
})(OS.DataTypes.GenericRecord);
LLPSignOff_BLModel.ExcelUploadedVortexCognos_ResultRec = ExcelUploadedVortexCognos_ResultRec;

});
define("LLPSignOff_BL.model$SQLList_HomePageYtdRequestRec", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_BL.model"], function (exports, OutSystems, LLPSignOff_BLModel) {
var OS = OutSystems.Internal;
var SQLList_HomePageYtdRequestRec = (function (_super) {
__extends(SQLList_HomePageYtdRequestRec, _super);
function SQLList_HomePageYtdRequestRec(defaults) {
_super.apply(this, arguments);
}
SQLList_HomePageYtdRequestRec.attributesToDeclare = function () {
return [
this.attr("SignOffRequestId", "signOffRequestIdAttr", "SignOffRequestId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Guid", "guidAttr", "Guid", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("BaseEntityName", "baseEntityNameAttr", "BaseEntityName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ReportingCurrency", "reportingCurrencyAttr", "ReportingCurrency", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("RiskReviewer", "riskReviewerAttr", "RiskReviewer", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("FinanceReviewer", "financeReviewerAttr", "FinanceReviewer", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("provision", "provisionAttr", "provision", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("RiskCost", "riskCostAttr", "RiskCost", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("WriteOff", "writeOffAttr", "WriteOff", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Status", "statusAttr", "Status", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("QuarterName", "quarterNameAttr", "QuarterName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Year", "yearAttr", "Year", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("YTDStatus", "yTDStatusAttr", "YTDStatus", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsGCR", "isGCRAttr", "IsGCR", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
SQLList_HomePageYtdRequestRec.init();
return SQLList_HomePageYtdRequestRec;
})(OS.DataTypes.GenericRecord);
LLPSignOff_BLModel.SQLList_HomePageYtdRequestRec = SQLList_HomePageYtdRequestRec;

});
define("LLPSignOff_BL.model$YTDDataRec", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_BL.model", "LLPSignOff_BL.model$Text1RecordList"], function (exports, OutSystems, LLPSignOff_BLModel) {
var OS = OutSystems.Internal;
var YTDDataRec = (function (_super) {
__extends(YTDDataRec, _super);
function YTDDataRec(defaults) {
_super.apply(this, arguments);
}
YTDDataRec.attributesToDeclare = function () {
return [
this.attr("YTDRequestId", "yTDRequestIdAttr", "YTDRequestId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("BaseEntityForSignOffId", "baseEntityForSignOffIdAttr", "BaseEntityForSignOffId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("SignOffRequestId", "signOffRequestIdAttr", "SignOffRequestId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("BaseEntityCode", "baseEntityCodeAttr", "BaseEntityCode", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("YTDCategoryId", "yTDCategoryIdAttr", "YTDCategoryId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("YTDCategoryName", "yTDCategoryNameAttr", "YTDCategoryName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Stage1", "stage1Attr", "Stage1", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Stage2", "stage2Attr", "Stage2", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Stage3", "stage3Attr", "Stage3", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("POCI", "pOCIAttr", "POCI", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("SPPIfail", "sPPIfailAttr", "SPPIfail", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("ErrorMessage", "errorMessageAttr", "ErrorMessage", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new LLPSignOff_BLModel.Text1RecordList());
}, true, LLPSignOff_BLModel.Text1RecordList)
].concat(_super.attributesToDeclare.call(this));
};
YTDDataRec.init();
return YTDDataRec;
})(OS.DataTypes.GenericRecord);
LLPSignOff_BLModel.YTDDataRec = YTDDataRec;

});
define("LLPSignOff_BL.model$ExportYtdReportRec", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_BL.model"], function (exports, OutSystems, LLPSignOff_BLModel) {
var OS = OutSystems.Internal;
var ExportYtdReportRec = (function (_super) {
__extends(ExportYtdReportRec, _super);
function ExportYtdReportRec(defaults) {
_super.apply(this, arguments);
}
ExportYtdReportRec.attributesToDeclare = function () {
return [
this.attr("Sheet", "sheetAttr", "Sheet", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("BE", "bEAttr", "BE", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("EURinThousand", "eURinThousandAttr", "EURinThousand", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("YearQuater", "yearQuaterAttr", "YearQuater", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SignOffStatus", "signOffStatusAttr", "SignOffStatus", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("YTDStatus", "yTDStatusAttr", "YTDStatus", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Stage1", "stage1Attr", "Stage1", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Stage2", "stage2Attr", "Stage2", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Stage3", "stage3Attr", "Stage3", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("POCI", "pOCIAttr", "POCI", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("SPPIFailure", "sPPIFailureAttr", "SPPIFailure", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Total", "totalAttr", "Total", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ExportYtdReportRec.init();
return ExportYtdReportRec;
})(OS.DataTypes.GenericRecord);
LLPSignOff_BLModel.ExportYtdReportRec = ExportYtdReportRec;

});
define("LLPSignOff_BL.model$VortexCognosDetailsList", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_BL.model", "LLPSignOff_BL.model$VortexCognosDetailsRec"], function (exports, OutSystems, LLPSignOff_BLModel) {
var OS = OutSystems.Internal;
var VortexCognosDetailsList = (function (_super) {
__extends(VortexCognosDetailsList, _super);
function VortexCognosDetailsList(defaults) {
_super.apply(this, arguments);
}
VortexCognosDetailsList.itemType = LLPSignOff_BLModel.VortexCognosDetailsRec;
return VortexCognosDetailsList;
})(OS.DataTypes.GenericRecordList);
LLPSignOff_BLModel.VortexCognosDetailsList = VortexCognosDetailsList;

});
define("LLPSignOff_BL.model$BaseEntityDataRec", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_BL.model", "Extension.Text.model", "LLPSignOff_BL.model$VortexCognosDetailsList", "Extension.Text.model$TextRec", "LLPSignOff_BL.referencesHealth", "LLPSignOff_BL.referencesHealth$Text", "LLPSignOff_BL.model$TextList"], function (exports, OutSystems, LLPSignOff_BLModel, Extension_TextModel) {
var OS = OutSystems.Internal;
var BaseEntityDataRec = (function (_super) {
__extends(BaseEntityDataRec, _super);
function BaseEntityDataRec(defaults) {
_super.apply(this, arguments);
}
BaseEntityDataRec.attributesToDeclare = function () {
return [
this.attr("BaseEntityCode", "baseEntityCodeAttr", "BaseEntityCode", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("BaseEntityName", "baseEntityNameAttr", "BaseEntityName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("lst_VortexCognosDetails", "lst_VortexCognosDetailsAttr", "lst_VortexCognosDetails", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new LLPSignOff_BLModel.VortexCognosDetailsList());
}, true, LLPSignOff_BLModel.VortexCognosDetailsList), 
this.attr("IsValid", "isValidAttr", "IsValid", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("ErrorMessage", "errorMessageAttr", "ErrorMessage", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new LLPSignOff_BLModel.TextList());
}, true, LLPSignOff_BLModel.TextList)
].concat(_super.attributesToDeclare.call(this));
};
BaseEntityDataRec.init();
return BaseEntityDataRec;
})(OS.DataTypes.GenericRecord);
LLPSignOff_BLModel.BaseEntityDataRec = BaseEntityDataRec;

});
define("LLPSignOff_BL.model$AdjustmentsRec", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_BL.model"], function (exports, OutSystems, LLPSignOff_BLModel) {
var OS = OutSystems.Internal;
var AdjustmentsRec = (function (_super) {
__extends(AdjustmentsRec, _super);
function AdjustmentsRec(defaults) {
_super.apply(this, arguments);
}
AdjustmentsRec.attributesToDeclare = function () {
return [
this.attr("AdjustmentId", "adjustmentIdAttr", "AdjustmentId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("AdjustmentName", "adjustmentNameAttr", "AdjustmentName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SignOffRequestId", "signOffRequestIdAttr", "SignOffRequestId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("AdjustmentKey", "adjustmentKeyAttr", "AdjustmentKey", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("AdjustmentStatus", "adjustmentStatusAttr", "AdjustmentStatus", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IndicatedReleaseQuarter", "indicatedReleaseQuarterAttr", "IndicatedReleaseQuarter", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IndicatedReleaseYear", "indicatedReleaseYearAttr", "IndicatedReleaseYear", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("IFRS9model", "iFRS9modelAttr", "IFRS9model", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Industry", "industryAttr", "Industry", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("AdjustmentType", "adjustmentTypeAttr", "AdjustmentType", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("AdjustmentApproach", "adjustmentApproachAttr", "AdjustmentApproach", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("BalanceIndicator", "balanceIndicatorAttr", "BalanceIndicator", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ProvisionCategoryName", "provisionCategoryNameAttr", "ProvisionCategoryName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ProvisionTypeName", "provisionTypeNameAttr", "ProvisionTypeName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsAdjustmentAmountinVortex", "isAdjustmentAmountinVortexAttr", "IsAdjustmentAmountinVortex", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Outstanding", "outstandingAttr", "Outstanding", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("PrevQuarterProv", "prevQuarterProvAttr", "PrevQuarterProv", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("QuarterlyFXChanges", "quarterlyFXChangesAttr", "QuarterlyFXChanges", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("PrevQuarterProvCurRate", "prevQuarterProvCurRateAttr", "PrevQuarterProvCurRate", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Increase", "increaseAttr", "Increase", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Release", "releaseAttr", "Release", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("WriteOff", "writeOffAttr", "WriteOff", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Reversal", "reversalAttr", "Reversal", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Other", "otherAttr", "Other", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("InterestNPLLoans", "interestNPLLoansAttr", "InterestNPLLoans", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("CurQuarterProv", "curQuarterProvAttr", "CurQuarterProv", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("LastChanged", "lastChangedAttr", "LastChanged", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("IsSeleted", "isSeletedAttr", "IsSeleted", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Edit", "editAttr", "Edit", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Comment", "commentAttr", "Comment", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
AdjustmentsRec.init();
return AdjustmentsRec;
})(OS.DataTypes.GenericRecord);
LLPSignOff_BLModel.AdjustmentsRec = AdjustmentsRec;

});
define("LLPSignOff_BL.model$Str_TotalsLayer1SheetRec", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_BL.model"], function (exports, OutSystems, LLPSignOff_BLModel) {
var OS = OutSystems.Internal;
var Str_TotalsLayer1SheetRec = (function (_super) {
__extends(Str_TotalsLayer1SheetRec, _super);
function Str_TotalsLayer1SheetRec(defaults) {
_super.apply(this, arguments);
}
Str_TotalsLayer1SheetRec.attributesToDeclare = function () {
return [
this.attr("SignOffRequestId", "signOffRequestIdAttr", "SignOffRequestId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Name", "nameAttr", "Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Outstanding", "outstandingAttr", "Outstanding", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("PrevQuarterProv", "prevQuarterProvAttr", "PrevQuarterProv", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("QuarterlyFXChanges", "quarterlyFXChangesAttr", "QuarterlyFXChanges", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("PrevQuarterProvCurRate", "prevQuarterProvCurRateAttr", "PrevQuarterProvCurRate", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Increase", "increaseAttr", "Increase", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Release", "releaseAttr", "Release", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("RiskCost", "riskCostAttr", "RiskCost", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("WriteOff", "writeOffAttr", "WriteOff", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Reversal", "reversalAttr", "Reversal", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Other", "otherAttr", "Other", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("InterestNPLLoans", "interestNPLLoansAttr", "InterestNPLLoans", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("CurQuarterProv", "curQuarterProvAttr", "CurQuarterProv", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Check", "checkAttr", "Check", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("OnBalance", "onBalanceAttr", "OnBalance", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("OffBalance", "offBalanceAttr", "OffBalance", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("ProvFXChange", "provFXChangeAttr", "ProvFXChange", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("CurQuarterProvCurRate", "curQuarterProvCurRateAttr", "CurQuarterProvCurRate", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("EmptyData", "emptyDataAttr", "EmptyData", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Str_TotalsLayer1SheetRec.init();
return Str_TotalsLayer1SheetRec;
})(OS.DataTypes.GenericRecord);
LLPSignOff_BLModel.Str_TotalsLayer1SheetRec = Str_TotalsLayer1SheetRec;

});
define("LLPSignOff_BL.model$PMAdjustmentsForUploadTemplateRec", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_BL.model"], function (exports, OutSystems, LLPSignOff_BLModel) {
var OS = OutSystems.Internal;
var PMAdjustmentsForUploadTemplateRec = (function (_super) {
__extends(PMAdjustmentsForUploadTemplateRec, _super);
function PMAdjustmentsForUploadTemplateRec(defaults) {
_super.apply(this, arguments);
}
PMAdjustmentsForUploadTemplateRec.attributesToDeclare = function () {
return [
this.attr("AdjustmentKey", "adjustmentKeyAttr", "AdjustmentKey", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("AdjustmentType", "adjustmentTypeAttr", "AdjustmentType", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("AdjustmentName", "adjustmentNameAttr", "AdjustmentName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IndicatedReleaseQuarter", "indicatedReleaseQuarterAttr", "IndicatedReleaseQuarter", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("AdjustmentStatus", "adjustmentStatusAttr", "AdjustmentStatus", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("BaseEntity", "baseEntityAttr", "BaseEntity", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Portfolio", "portfolioAttr", "Portfolio", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ProvisionCategory", "provisionCategoryAttr", "ProvisionCategory", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("OpeningBalance", "openingBalanceAttr", "OpeningBalance", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Increase", "increaseAttr", "Increase", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Release", "releaseAttr", "Release", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("ClosingBalance", "closingBalanceAttr", "ClosingBalance", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("ofwhichOffBalance", "ofwhichOffBalanceAttr", "ofwhichOffBalance", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("InVortex", "inVortexAttr", "InVortex", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IFRS9Model", "iFRS9ModelAttr", "IFRS9Model", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Industry", "industryAttr", "Industry", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Approach", "approachAttr", "Approach", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Comments", "commentsAttr", "Comments", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CombinationOfKey", "combinationOfKeyAttr", "CombinationOfKey", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Outstanding", "outstandingAttr", "Outstanding", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
PMAdjustmentsForUploadTemplateRec.init();
return PMAdjustmentsForUploadTemplateRec;
})(OS.DataTypes.GenericRecord);
LLPSignOff_BLModel.PMAdjustmentsForUploadTemplateRec = PMAdjustmentsForUploadTemplateRec;

});
define("LLPSignOff_BL.model$CreateQuarterRemarksRec", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_BL.model"], function (exports, OutSystems, LLPSignOff_BLModel) {
var OS = OutSystems.Internal;
var CreateQuarterRemarksRec = (function (_super) {
__extends(CreateQuarterRemarksRec, _super);
function CreateQuarterRemarksRec(defaults) {
_super.apply(this, arguments);
}
CreateQuarterRemarksRec.attributesToDeclare = function () {
return [
this.attr("Username", "usernameAttr", "Username", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Name", "nameAttr", "Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CreatedDate", "createdDateAttr", "CreatedDate", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("Remark", "remarkAttr", "Remark", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
CreateQuarterRemarksRec.init();
return CreateQuarterRemarksRec;
})(OS.DataTypes.GenericRecord);
LLPSignOff_BLModel.CreateQuarterRemarksRec = CreateQuarterRemarksRec;

});
define("LLPSignOff_BL.model$UploadedExcel_PMAAdjument_ResultRec", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_BL.model"], function (exports, OutSystems, LLPSignOff_BLModel) {
var OS = OutSystems.Internal;
var UploadedExcel_PMAAdjument_ResultRec = (function (_super) {
__extends(UploadedExcel_PMAAdjument_ResultRec, _super);
function UploadedExcel_PMAAdjument_ResultRec(defaults) {
_super.apply(this, arguments);
}
UploadedExcel_PMAAdjument_ResultRec.attributesToDeclare = function () {
return [
this.attr("AdjustmentKey", "adjustmentKeyAttr", "AdjustmentKey", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("AdjustmentType", "adjustmentTypeAttr", "AdjustmentType", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("AdjustmentTypeId", "adjustmentTypeIdAttr", "AdjustmentTypeId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("AdjustmentName", "adjustmentNameAttr", "AdjustmentName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IndicatedReleaseQuarter", "indicatedReleaseQuarterAttr", "IndicatedReleaseQuarter", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("InidiacatedReleaseQuarterId", "inidiacatedReleaseQuarterIdAttr", "InidiacatedReleaseQuarterId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("AdjustmentStatus", "adjustmentStatusAttr", "AdjustmentStatus", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("AdjustmentStatusId", "adjustmentStatusIdAttr", "AdjustmentStatusId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("BaseEntity", "baseEntityAttr", "BaseEntity", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Portfolio", "portfolioAttr", "Portfolio", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("PortfolioId", "portfolioIdAttr", "PortfolioId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("ProvisionCatogary", "provisionCatogaryAttr", "ProvisionCatogary", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ProvisionCatogaryId", "provisionCatogaryIdAttr", "ProvisionCatogaryId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("OpeningBalance", "openingBalanceAttr", "OpeningBalance", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Increase", "increaseAttr", "Increase", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Release", "releaseAttr", "Release", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("ClosingBalance", "closingBalanceAttr", "ClosingBalance", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("ofwhichOffBalance", "ofwhichOffBalanceAttr", "ofwhichOffBalance", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("InVortex", "inVortexAttr", "InVortex", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("InVortexId", "inVortexIdAttr", "InVortexId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("IFRS9Model", "iFRS9ModelAttr", "IFRS9Model", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IFRS9ModelId", "iFRS9ModelIdAttr", "IFRS9ModelId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Industry", "industryAttr", "Industry", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IndustryId", "industryIdAttr", "IndustryId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Approach", "approachAttr", "Approach", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ApproachId", "approachIdAttr", "ApproachId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Comments", "commentsAttr", "Comments", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Outstanding", "outstandingAttr", "Outstanding", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("ErrorMessage", "errorMessageAttr", "ErrorMessage", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
UploadedExcel_PMAAdjument_ResultRec.init();
return UploadedExcel_PMAAdjument_ResultRec;
})(OS.DataTypes.GenericRecord);
LLPSignOff_BLModel.UploadedExcel_PMAAdjument_ResultRec = UploadedExcel_PMAAdjument_ResultRec;

});
define("LLPSignOff_BL.model$SQLList_HomePageSignOffRequestRec", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_BL.model"], function (exports, OutSystems, LLPSignOff_BLModel) {
var OS = OutSystems.Internal;
var SQLList_HomePageSignOffRequestRec = (function (_super) {
__extends(SQLList_HomePageSignOffRequestRec, _super);
function SQLList_HomePageSignOffRequestRec(defaults) {
_super.apply(this, arguments);
}
SQLList_HomePageSignOffRequestRec.attributesToDeclare = function () {
return [
this.attr("SignOffRequestId", "signOffRequestIdAttr", "SignOffRequestId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Guid", "guidAttr", "Guid", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("BaseEntityName", "baseEntityNameAttr", "BaseEntityName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ReportingCurrency", "reportingCurrencyAttr", "ReportingCurrency", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("RiskReviewer", "riskReviewerAttr", "RiskReviewer", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("FinanceReviewer", "financeReviewerAttr", "FinanceReviewer", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("provision", "provisionAttr", "provision", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("RiskCost", "riskCostAttr", "RiskCost", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("WriteOff", "writeOffAttr", "WriteOff", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Status", "statusAttr", "Status", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("QuarterName", "quarterNameAttr", "QuarterName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Year", "yearAttr", "Year", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("YTDStatus", "yTDStatusAttr", "YTDStatus", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CountryCode", "countryCodeAttr", "CountryCode", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsGCR", "isGCRAttr", "IsGCR", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
SQLList_HomePageSignOffRequestRec.init();
return SQLList_HomePageSignOffRequestRec;
})(OS.DataTypes.GenericRecord);
LLPSignOff_BLModel.SQLList_HomePageSignOffRequestRec = SQLList_HomePageSignOffRequestRec;

});
define("LLPSignOff_BL.model$YTD_RequestRec", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_BL.model"], function (exports, OutSystems, LLPSignOff_BLModel) {
var OS = OutSystems.Internal;
var YTD_RequestRec = (function (_super) {
__extends(YTD_RequestRec, _super);
function YTD_RequestRec(defaults) {
_super.apply(this, arguments);
}
YTD_RequestRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("SignOffRequestId", "signOffRequestIdAttr", "SignOffRequestId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("YTDCategoryId", "yTDCategoryIdAttr", "YTDCategoryId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("YTDCategoryName", "yTDCategoryNameAttr", "YTDCategoryName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("YTDCategoryCSS", "yTDCategoryCSSAttr", "YTDCategoryCSS", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Stage1", "stage1Attr", "Stage1", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Stage2", "stage2Attr", "Stage2", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Stage3", "stage3Attr", "Stage3", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("POCI", "pOCIAttr", "POCI", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("SPPIfail", "sPPIfailAttr", "SPPIfail", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Total", "totalAttr", "Total", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
YTD_RequestRec.init();
return YTD_RequestRec;
})(OS.DataTypes.GenericRecord);
LLPSignOff_BLModel.YTD_RequestRec = YTD_RequestRec;

});
define("LLPSignOff_BL.model$ExportUploadYtddataRec", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_BL.model"], function (exports, OutSystems, LLPSignOff_BLModel) {
var OS = OutSystems.Internal;
var ExportUploadYtddataRec = (function (_super) {
__extends(ExportUploadYtddataRec, _super);
function ExportUploadYtddataRec(defaults) {
_super.apply(this, arguments);
}
ExportUploadYtddataRec.attributesToDeclare = function () {
return [
this.attr("BE", "bEAttr", "BE", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("YTDCategory", "yTDCategoryAttr", "YTDCategory", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Stage1", "stage1Attr", "Stage1", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Stage2", "stage2Attr", "Stage2", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Stage3", "stage3Attr", "Stage3", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("POCI", "pOCIAttr", "POCI", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("SPPIFailure", "sPPIFailureAttr", "SPPIFailure", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ExportUploadYtddataRec.init();
return ExportUploadYtddataRec;
})(OS.DataTypes.GenericRecord);
LLPSignOff_BLModel.ExportUploadYtddataRec = ExportUploadYtddataRec;

});
define("LLPSignOff_BL.model$List_CountryYtdRequestRec", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_BL.model"], function (exports, OutSystems, LLPSignOff_BLModel) {
var OS = OutSystems.Internal;
var List_CountryYtdRequestRec = (function (_super) {
__extends(List_CountryYtdRequestRec, _super);
function List_CountryYtdRequestRec(defaults) {
_super.apply(this, arguments);
}
List_CountryYtdRequestRec.attributesToDeclare = function () {
return [
this.attr("Country", "countryAttr", "Country", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CountryCode", "countryCodeAttr", "CountryCode", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ReportingCurrency", "reportingCurrencyAttr", "ReportingCurrency", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("provision", "provisionAttr", "provision", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("RiskCost", "riskCostAttr", "RiskCost", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("WriteOff", "writeOffAttr", "WriteOff", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Status", "statusAttr", "Status", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("QuarterName", "quarterNameAttr", "QuarterName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Year", "yearAttr", "Year", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("QuarterYear", "quarterYearAttr", "QuarterYear", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CountBaseEntityPerUser", "countBaseEntityPerUserAttr", "CountBaseEntityPerUser", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("CountBaseEntityPerCountry", "countBaseEntityPerCountryAttr", "CountBaseEntityPerCountry", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Country_DisplayName", "country_DisplayNameAttr", "Country_DisplayName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Country_Tooltip", "country_TooltipAttr", "Country_Tooltip", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
List_CountryYtdRequestRec.init();
return List_CountryYtdRequestRec;
})(OS.DataTypes.GenericRecord);
LLPSignOff_BLModel.List_CountryYtdRequestRec = List_CountryYtdRequestRec;

});
define("LLPSignOff_BL.model$StrLayerBookingSheetDataRec", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_BL.model"], function (exports, OutSystems, LLPSignOff_BLModel) {
var OS = OutSystems.Internal;
var StrLayerBookingSheetDataRec = (function (_super) {
__extends(StrLayerBookingSheetDataRec, _super);
function StrLayerBookingSheetDataRec(defaults) {
_super.apply(this, arguments);
}
StrLayerBookingSheetDataRec.attributesToDeclare = function () {
return [
this.attr("SignOffRequestId", "signOffRequestIdAttr", "SignOffRequestId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("PortfolioId", "portfolioIdAttr", "PortfolioId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("ProvisionCategoryName", "provisionCategoryNameAttr", "ProvisionCategoryName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ProvisionCategoryId", "provisionCategoryIdAttr", "ProvisionCategoryId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("ProvisionTypeName", "provisionTypeNameAttr", "ProvisionTypeName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Outstanding", "outstandingAttr", "Outstanding", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("PrevQuarterProv", "prevQuarterProvAttr", "PrevQuarterProv", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("QuarterlyFXChanges", "quarterlyFXChangesAttr", "QuarterlyFXChanges", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("PrevQuarterProvCurRate", "prevQuarterProvCurRateAttr", "PrevQuarterProvCurRate", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Increase", "increaseAttr", "Increase", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Release", "releaseAttr", "Release", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("RiskCost", "riskCostAttr", "RiskCost", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("WriteOff", "writeOffAttr", "WriteOff", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Reversal", "reversalAttr", "Reversal", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Other", "otherAttr", "Other", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("InterestNPLLoans", "interestNPLLoansAttr", "InterestNPLLoans", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("CurQuarterProv", "curQuarterProvAttr", "CurQuarterProv", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Check", "checkAttr", "Check", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("OnBalance", "onBalanceAttr", "OnBalance", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("OffBalance", "offBalanceAttr", "OffBalance", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("ProvFXChange", "provFXChangeAttr", "ProvFXChange", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("CurQuarterProvCurRate", "curQuarterProvCurRateAttr", "CurQuarterProvCurRate", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
StrLayerBookingSheetDataRec.init();
return StrLayerBookingSheetDataRec;
})(OS.DataTypes.GenericRecord);
LLPSignOff_BLModel.StrLayerBookingSheetDataRec = StrLayerBookingSheetDataRec;

});
define("LLPSignOff_BL.model$Str_PMAAdjustmentDetailsRec", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_BL.model"], function (exports, OutSystems, LLPSignOff_BLModel) {
var OS = OutSystems.Internal;
var Str_PMAAdjustmentDetailsRec = (function (_super) {
__extends(Str_PMAAdjustmentDetailsRec, _super);
function Str_PMAAdjustmentDetailsRec(defaults) {
_super.apply(this, arguments);
}
Str_PMAAdjustmentDetailsRec.attributesToDeclare = function () {
return [
this.attr("PMAAdjustmentDetailId", "pMAAdjustmentDetailIdAttr", "PMAAdjustmentDetailId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("PMAAdjustmentId", "pMAAdjustmentIdAttr", "PMAAdjustmentId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("PrevQuarterProv", "prevQuarterProvAttr", "PrevQuarterProv", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("QuarterlyFXChanges", "quarterlyFXChangesAttr", "QuarterlyFXChanges", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("PrevQuarterProvCurRate", "prevQuarterProvCurRateAttr", "PrevQuarterProvCurRate", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("IFRS9modelId", "iFRS9modelIdAttr", "IFRS9modelId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("IndustryId", "industryIdAttr", "IndustryId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("AdjustmentApproachId", "adjustmentApproachIdAttr", "AdjustmentApproachId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("BalanceIndicatorId", "balanceIndicatorIdAttr", "BalanceIndicatorId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("PortfolioId", "portfolioIdAttr", "PortfolioId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("ProvisionCategoryId", "provisionCategoryIdAttr", "ProvisionCategoryId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("IsAdjustmentAmountinVortex", "isAdjustmentAmountinVortexAttr", "IsAdjustmentAmountinVortex", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Increase", "increaseAttr", "Increase", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Release", "releaseAttr", "Release", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("CurQuarterProv", "curQuarterProvAttr", "CurQuarterProv", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("CreatedOn", "createdOnAttr", "CreatedOn", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("CreatedBy", "createdByAttr", "CreatedBy", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("LastChanged", "lastChangedAttr", "LastChanged", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("LastChangedBy", "lastChangedByAttr", "LastChangedBy", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Comment", "commentAttr", "Comment", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsActive", "isActiveAttr", "IsActive", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("RiskCosts", "riskCostsAttr", "RiskCosts", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("OnBalance", "onBalanceAttr", "OnBalance", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("OffBalance", "offBalanceAttr", "OffBalance", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("BaseEntityLable", "baseEntityLableAttr", "BaseEntityLable", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("BaseEntityId", "baseEntityIdAttr", "BaseEntityId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("IsRollForward", "isRollForwardAttr", "IsRollForward", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("IsDeletable", "isDeletableAttr", "IsDeletable", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Key_Guid", "key_GuidAttr", "Key_Guid", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ProvFXChange", "provFXChangeAttr", "ProvFXChange", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("CurQuarterProvCurRate", "curQuarterProvCurRateAttr", "CurQuarterProvCurRate", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Outstanding", "outstandingAttr", "Outstanding", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Str_PMAAdjustmentDetailsRec.init();
return Str_PMAAdjustmentDetailsRec;
})(OS.DataTypes.GenericRecord);
LLPSignOff_BLModel.Str_PMAAdjustmentDetailsRec = Str_PMAAdjustmentDetailsRec;

});
define("LLPSignOff_BL.model$AdjustmentTypeList", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_CS.model", "LLPSignOff_BL.model", "LLPSignOff_CS.model$AdjustmentTypeRec", "LLPSignOff_BL.referencesHealth", "LLPSignOff_BL.referencesHealth$LLPSignOff_CS"], function (exports, OutSystems, LLPSignOff_CSModel, LLPSignOff_BLModel) {
var OS = OutSystems.Internal;
var AdjustmentTypeList = (function (_super) {
__extends(AdjustmentTypeList, _super);
function AdjustmentTypeList(defaults) {
_super.apply(this, arguments);
}
AdjustmentTypeList.itemType = LLPSignOff_CSModel.AdjustmentTypeRec;
return AdjustmentTypeList;
})(OS.DataTypes.GenericRecordList);
LLPSignOff_BLModel.AdjustmentTypeList = AdjustmentTypeList;

});
define("LLPSignOff_BL.model$PortfolioList", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_CS.model", "LLPSignOff_BL.model", "LLPSignOff_CS.model$PortfolioRec", "LLPSignOff_BL.referencesHealth", "LLPSignOff_BL.referencesHealth$LLPSignOff_CS"], function (exports, OutSystems, LLPSignOff_CSModel, LLPSignOff_BLModel) {
var OS = OutSystems.Internal;
var PortfolioList = (function (_super) {
__extends(PortfolioList, _super);
function PortfolioList(defaults) {
_super.apply(this, arguments);
}
PortfolioList.itemType = LLPSignOff_CSModel.PortfolioRec;
return PortfolioList;
})(OS.DataTypes.GenericRecordList);
LLPSignOff_BLModel.PortfolioList = PortfolioList;

});
define("LLPSignOff_BL.model$AdjustmentStatusList", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_CS.model", "LLPSignOff_BL.model", "LLPSignOff_CS.model$AdjustmentStatusRec", "LLPSignOff_BL.referencesHealth", "LLPSignOff_BL.referencesHealth$LLPSignOff_CS"], function (exports, OutSystems, LLPSignOff_CSModel, LLPSignOff_BLModel) {
var OS = OutSystems.Internal;
var AdjustmentStatusList = (function (_super) {
__extends(AdjustmentStatusList, _super);
function AdjustmentStatusList(defaults) {
_super.apply(this, arguments);
}
AdjustmentStatusList.itemType = LLPSignOff_CSModel.AdjustmentStatusRec;
return AdjustmentStatusList;
})(OS.DataTypes.GenericRecordList);
LLPSignOff_BLModel.AdjustmentStatusList = AdjustmentStatusList;

});
define("LLPSignOff_BL.model$ProvisionCategoryList", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_CS.model", "LLPSignOff_BL.model", "LLPSignOff_CS.model$ProvisionCategoryRec", "LLPSignOff_BL.referencesHealth", "LLPSignOff_BL.referencesHealth$LLPSignOff_CS"], function (exports, OutSystems, LLPSignOff_CSModel, LLPSignOff_BLModel) {
var OS = OutSystems.Internal;
var ProvisionCategoryList = (function (_super) {
__extends(ProvisionCategoryList, _super);
function ProvisionCategoryList(defaults) {
_super.apply(this, arguments);
}
ProvisionCategoryList.itemType = LLPSignOff_CSModel.ProvisionCategoryRec;
return ProvisionCategoryList;
})(OS.DataTypes.GenericRecordList);
LLPSignOff_BLModel.ProvisionCategoryList = ProvisionCategoryList;

});
define("LLPSignOff_BL.model$QuarterList", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_CS.model", "LLPSignOff_BL.model", "LLPSignOff_CS.model$QuarterRec", "LLPSignOff_BL.referencesHealth", "LLPSignOff_BL.referencesHealth$LLPSignOff_CS"], function (exports, OutSystems, LLPSignOff_CSModel, LLPSignOff_BLModel) {
var OS = OutSystems.Internal;
var QuarterList = (function (_super) {
__extends(QuarterList, _super);
function QuarterList(defaults) {
_super.apply(this, arguments);
}
QuarterList.itemType = LLPSignOff_CSModel.QuarterRec;
return QuarterList;
})(OS.DataTypes.GenericRecordList);
LLPSignOff_BLModel.QuarterList = QuarterList;

});
define("LLPSignOff_BL.model$AdjustmentRatingSystemList", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_CS.model", "LLPSignOff_BL.model", "LLPSignOff_CS.model$AdjustmentRatingSystemRec", "LLPSignOff_BL.referencesHealth", "LLPSignOff_BL.referencesHealth$LLPSignOff_CS"], function (exports, OutSystems, LLPSignOff_CSModel, LLPSignOff_BLModel) {
var OS = OutSystems.Internal;
var AdjustmentRatingSystemList = (function (_super) {
__extends(AdjustmentRatingSystemList, _super);
function AdjustmentRatingSystemList(defaults) {
_super.apply(this, arguments);
}
AdjustmentRatingSystemList.itemType = LLPSignOff_CSModel.AdjustmentRatingSystemRec;
return AdjustmentRatingSystemList;
})(OS.DataTypes.GenericRecordList);
LLPSignOff_BLModel.AdjustmentRatingSystemList = AdjustmentRatingSystemList;

});
define("LLPSignOff_BL.model$IndustryList", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_CS.model", "LLPSignOff_BL.model", "LLPSignOff_CS.model$IndustryRec", "LLPSignOff_BL.referencesHealth", "LLPSignOff_BL.referencesHealth$LLPSignOff_CS"], function (exports, OutSystems, LLPSignOff_CSModel, LLPSignOff_BLModel) {
var OS = OutSystems.Internal;
var IndustryList = (function (_super) {
__extends(IndustryList, _super);
function IndustryList(defaults) {
_super.apply(this, arguments);
}
IndustryList.itemType = LLPSignOff_CSModel.IndustryRec;
return IndustryList;
})(OS.DataTypes.GenericRecordList);
LLPSignOff_BLModel.IndustryList = IndustryList;

});
define("LLPSignOff_BL.model$AdjustmentApproachList", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_CS.model", "LLPSignOff_BL.model", "LLPSignOff_CS.model$AdjustmentApproachRec", "LLPSignOff_BL.referencesHealth", "LLPSignOff_BL.referencesHealth$LLPSignOff_CS"], function (exports, OutSystems, LLPSignOff_CSModel, LLPSignOff_BLModel) {
var OS = OutSystems.Internal;
var AdjustmentApproachList = (function (_super) {
__extends(AdjustmentApproachList, _super);
function AdjustmentApproachList(defaults) {
_super.apply(this, arguments);
}
AdjustmentApproachList.itemType = LLPSignOff_CSModel.AdjustmentApproachRec;
return AdjustmentApproachList;
})(OS.DataTypes.GenericRecordList);
LLPSignOff_BLModel.AdjustmentApproachList = AdjustmentApproachList;

});
define("LLPSignOff_BL.model$BalanceIndicatorList", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_CS.model", "LLPSignOff_BL.model", "LLPSignOff_CS.model$BalanceIndicatorRec", "LLPSignOff_BL.referencesHealth", "LLPSignOff_BL.referencesHealth$LLPSignOff_CS"], function (exports, OutSystems, LLPSignOff_CSModel, LLPSignOff_BLModel) {
var OS = OutSystems.Internal;
var BalanceIndicatorList = (function (_super) {
__extends(BalanceIndicatorList, _super);
function BalanceIndicatorList(defaults) {
_super.apply(this, arguments);
}
BalanceIndicatorList.itemType = LLPSignOff_CSModel.BalanceIndicatorRec;
return BalanceIndicatorList;
})(OS.DataTypes.GenericRecordList);
LLPSignOff_BLModel.BalanceIndicatorList = BalanceIndicatorList;

});
define("LLPSignOff_BL.model$LLP_BooleanList", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_CS.model", "LLPSignOff_BL.model", "LLPSignOff_CS.model$LLP_BooleanRec", "LLPSignOff_BL.referencesHealth", "LLPSignOff_BL.referencesHealth$LLPSignOff_CS"], function (exports, OutSystems, LLPSignOff_CSModel, LLPSignOff_BLModel) {
var OS = OutSystems.Internal;
var LLP_BooleanList = (function (_super) {
__extends(LLP_BooleanList, _super);
function LLP_BooleanList(defaults) {
_super.apply(this, arguments);
}
LLP_BooleanList.itemType = LLPSignOff_CSModel.LLP_BooleanRec;
return LLP_BooleanList;
})(OS.DataTypes.GenericRecordList);
LLPSignOff_BLModel.LLP_BooleanList = LLP_BooleanList;

});
define("LLPSignOff_BL.model$StaticTabelsStructureRec", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_CS.model", "LLPSignOff_BL.model", "LLPSignOff_CS.model$AdjustmentTypeRec", "LLPSignOff_BL.referencesHealth", "LLPSignOff_BL.referencesHealth$LLPSignOff_CS", "LLPSignOff_BL.model$AdjustmentTypeList", "LLPSignOff_CS.model$PortfolioRec", "LLPSignOff_BL.model$PortfolioList", "LLPSignOff_CS.model$AdjustmentStatusRec", "LLPSignOff_BL.model$AdjustmentStatusList", "LLPSignOff_CS.model$ProvisionCategoryRec", "LLPSignOff_BL.model$ProvisionCategoryList", "LLPSignOff_CS.model$QuarterRec", "LLPSignOff_BL.model$QuarterList", "LLPSignOff_CS.model$AdjustmentRatingSystemRec", "LLPSignOff_BL.model$AdjustmentRatingSystemList", "LLPSignOff_CS.model$IndustryRec", "LLPSignOff_BL.model$IndustryList", "LLPSignOff_CS.model$AdjustmentApproachRec", "LLPSignOff_BL.model$AdjustmentApproachList", "LLPSignOff_CS.model$BalanceIndicatorRec", "LLPSignOff_BL.model$BalanceIndicatorList", "LLPSignOff_CS.model$LLP_BooleanRec", "LLPSignOff_BL.model$LLP_BooleanList"], function (exports, OutSystems, LLPSignOff_CSModel, LLPSignOff_BLModel) {
var OS = OutSystems.Internal;
var StaticTabelsStructureRec = (function (_super) {
__extends(StaticTabelsStructureRec, _super);
function StaticTabelsStructureRec(defaults) {
_super.apply(this, arguments);
}
StaticTabelsStructureRec.attributesToDeclare = function () {
return [
this.attr("AdjustmentTypes", "adjustmentTypesAttr", "AdjustmentTypes", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new LLPSignOff_BLModel.AdjustmentTypeList());
}, true, LLPSignOff_BLModel.AdjustmentTypeList), 
this.attr("Portfolios", "portfoliosAttr", "Portfolios", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new LLPSignOff_BLModel.PortfolioList());
}, true, LLPSignOff_BLModel.PortfolioList), 
this.attr("AdjustmentStatus", "adjustmentStatusAttr", "AdjustmentStatus", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new LLPSignOff_BLModel.AdjustmentStatusList());
}, true, LLPSignOff_BLModel.AdjustmentStatusList), 
this.attr("ProvisionCategories", "provisionCategoriesAttr", "ProvisionCategories", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new LLPSignOff_BLModel.ProvisionCategoryList());
}, true, LLPSignOff_BLModel.ProvisionCategoryList), 
this.attr("Quarters", "quartersAttr", "Quarters", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new LLPSignOff_BLModel.QuarterList());
}, true, LLPSignOff_BLModel.QuarterList), 
this.attr("AdjustmentRatingSystem", "adjustmentRatingSystemAttr", "AdjustmentRatingSystem", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new LLPSignOff_BLModel.AdjustmentRatingSystemList());
}, true, LLPSignOff_BLModel.AdjustmentRatingSystemList), 
this.attr("Industries", "industriesAttr", "Industries", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new LLPSignOff_BLModel.IndustryList());
}, true, LLPSignOff_BLModel.IndustryList), 
this.attr("AdjustmentApproach", "adjustmentApproachAttr", "AdjustmentApproach", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new LLPSignOff_BLModel.AdjustmentApproachList());
}, true, LLPSignOff_BLModel.AdjustmentApproachList), 
this.attr("BalanceIndicators", "balanceIndicatorsAttr", "BalanceIndicators", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new LLPSignOff_BLModel.BalanceIndicatorList());
}, true, LLPSignOff_BLModel.BalanceIndicatorList), 
this.attr("AdjustmentAmountinVortex", "adjustmentAmountinVortexAttr", "AdjustmentAmountinVortex", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new LLPSignOff_BLModel.LLP_BooleanList());
}, true, LLPSignOff_BLModel.LLP_BooleanList)
].concat(_super.attributesToDeclare.call(this));
};
StaticTabelsStructureRec.init();
return StaticTabelsStructureRec;
})(OS.DataTypes.GenericRecord);
LLPSignOff_BLModel.StaticTabelsStructureRec = StaticTabelsStructureRec;

});
define("LLPSignOff_BL.model$ExcelUploadYTDResultRec", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_BL.model"], function (exports, OutSystems, LLPSignOff_BLModel) {
var OS = OutSystems.Internal;
var ExcelUploadYTDResultRec = (function (_super) {
__extends(ExcelUploadYTDResultRec, _super);
function ExcelUploadYTDResultRec(defaults) {
_super.apply(this, arguments);
}
ExcelUploadYTDResultRec.attributesToDeclare = function () {
return [
this.attr("BaseEntity", "baseEntityAttr", "BaseEntity", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("YTDCategoryName", "yTDCategoryNameAttr", "YTDCategoryName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Stage1", "stage1Attr", "Stage1", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Stage2", "stage2Attr", "Stage2", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Stage3", "stage3Attr", "Stage3", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("POCI", "pOCIAttr", "POCI", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("SPPIfail", "sPPIfailAttr", "SPPIfail", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("ErrorMessage", "errorMessageAttr", "ErrorMessage", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ExcelUploadYTDResultRec.init();
return ExcelUploadYTDResultRec;
})(OS.DataTypes.GenericRecord);
LLPSignOff_BLModel.ExcelUploadYTDResultRec = ExcelUploadYTDResultRec;

});
define("LLPSignOff_BL.model$List_HomePageYtdRequestRec", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_BL.model"], function (exports, OutSystems, LLPSignOff_BLModel) {
var OS = OutSystems.Internal;
var List_HomePageYtdRequestRec = (function (_super) {
__extends(List_HomePageYtdRequestRec, _super);
function List_HomePageYtdRequestRec(defaults) {
_super.apply(this, arguments);
}
List_HomePageYtdRequestRec.attributesToDeclare = function () {
return [
this.attr("SignOffRequestId", "signOffRequestIdAttr", "SignOffRequestId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Guid", "guidAttr", "Guid", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("BaseEntityName", "baseEntityNameAttr", "BaseEntityName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ReportingCurrency", "reportingCurrencyAttr", "ReportingCurrency", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("RiskReviewer", "riskReviewerAttr", "RiskReviewer", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("FinanceReviewer", "financeReviewerAttr", "FinanceReviewer", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("provision", "provisionAttr", "provision", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("RiskCost", "riskCostAttr", "RiskCost", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("WriteOff", "writeOffAttr", "WriteOff", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Status", "statusAttr", "Status", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("QuarterName", "quarterNameAttr", "QuarterName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Year", "yearAttr", "Year", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("YTDStatus", "yTDStatusAttr", "YTDStatus", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsGCR", "isGCRAttr", "IsGCR", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Actors", "actorsAttr", "Actors", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
List_HomePageYtdRequestRec.init();
return List_HomePageYtdRequestRec;
})(OS.DataTypes.GenericRecord);
LLPSignOff_BLModel.List_HomePageYtdRequestRec = List_HomePageYtdRequestRec;

});
define("LLPSignOff_BL.model$YTDSignOffPerQuarterRec", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_BL.model"], function (exports, OutSystems, LLPSignOff_BLModel) {
var OS = OutSystems.Internal;
var YTDSignOffPerQuarterRec = (function (_super) {
__extends(YTDSignOffPerQuarterRec, _super);
function YTDSignOffPerQuarterRec(defaults) {
_super.apply(this, arguments);
}
YTDSignOffPerQuarterRec.attributesToDeclare = function () {
return [
this.attr("SignOffRequestId", "signOffRequestIdAttr", "SignOffRequestId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("QuarterName", "quarterNameAttr", "QuarterName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
YTDSignOffPerQuarterRec.init();
return YTDSignOffPerQuarterRec;
})(OS.DataTypes.GenericRecord);
LLPSignOff_BLModel.YTDSignOffPerQuarterRec = YTDSignOffPerQuarterRec;

});
define("LLPSignOff_BL.model$EOMRemarksRec", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_BL.model"], function (exports, OutSystems, LLPSignOff_BLModel) {
var OS = OutSystems.Internal;
var EOMRemarksRec = (function (_super) {
__extends(EOMRemarksRec, _super);
function EOMRemarksRec(defaults) {
_super.apply(this, arguments);
}
EOMRemarksRec.attributesToDeclare = function () {
return [
this.attr("Username", "usernameAttr", "Username", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Name", "nameAttr", "Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CreatedDate", "createdDateAttr", "CreatedDate", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("ActionRemark", "actionRemarkAttr", "ActionRemark", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CustomRemark", "customRemarkAttr", "CustomRemark", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
EOMRemarksRec.init();
return EOMRemarksRec;
})(OS.DataTypes.GenericRecord);
LLPSignOff_BLModel.EOMRemarksRec = EOMRemarksRec;

});
define("LLPSignOff_BL.model$Str_PMAAdjustmentDetailsList", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_BL.model", "LLPSignOff_BL.model$Str_PMAAdjustmentDetailsRec"], function (exports, OutSystems, LLPSignOff_BLModel) {
var OS = OutSystems.Internal;
var Str_PMAAdjustmentDetailsList = (function (_super) {
__extends(Str_PMAAdjustmentDetailsList, _super);
function Str_PMAAdjustmentDetailsList(defaults) {
_super.apply(this, arguments);
}
Str_PMAAdjustmentDetailsList.itemType = LLPSignOff_BLModel.Str_PMAAdjustmentDetailsRec;
return Str_PMAAdjustmentDetailsList;
})(OS.DataTypes.GenericRecordList);
LLPSignOff_BLModel.Str_PMAAdjustmentDetailsList = Str_PMAAdjustmentDetailsList;

});
define("LLPSignOff_BL.model$Str_PMAAdjustmentRec", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_BL.model", "LLPSignOff_BL.model$Str_PMAAdjustmentDetailsList"], function (exports, OutSystems, LLPSignOff_BLModel) {
var OS = OutSystems.Internal;
var Str_PMAAdjustmentRec = (function (_super) {
__extends(Str_PMAAdjustmentRec, _super);
function Str_PMAAdjustmentRec(defaults) {
_super.apply(this, arguments);
}
Str_PMAAdjustmentRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("SignOffRequestId", "signOffRequestIdAttr", "SignOffRequestId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("AdjustmentName", "adjustmentNameAttr", "AdjustmentName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("AdjustmentKey", "adjustmentKeyAttr", "AdjustmentKey", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("AdjustmentStatusId", "adjustmentStatusIdAttr", "AdjustmentStatusId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("IndicatedReleaseQuarter", "indicatedReleaseQuarterAttr", "IndicatedReleaseQuarter", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("IndicatedReleaseYear", "indicatedReleaseYearAttr", "IndicatedReleaseYear", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("AdjustmentTypeId", "adjustmentTypeIdAttr", "AdjustmentTypeId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("IsActive", "isActiveAttr", "IsActive", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("LayerId", "layerIdAttr", "LayerId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("IsRollForward", "isRollForwardAttr", "IsRollForward", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("List_Str_PMAAdjustmentDetails", "list_Str_PMAAdjustmentDetailsAttr", "List_Str_PMAAdjustmentDetails", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new LLPSignOff_BLModel.Str_PMAAdjustmentDetailsList());
}, true, LLPSignOff_BLModel.Str_PMAAdjustmentDetailsList)
].concat(_super.attributesToDeclare.call(this));
};
Str_PMAAdjustmentRec.init();
return Str_PMAAdjustmentRec;
})(OS.DataTypes.GenericRecord);
LLPSignOff_BLModel.Str_PMAAdjustmentRec = Str_PMAAdjustmentRec;

});
define("LLPSignOff_BL.model$NPLPortfolioSalesDetail_WbList", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_BL.model", "LLPSignOff_BL.model$NPLPortfolioSalesDetail_WbRec"], function (exports, OutSystems, LLPSignOff_BLModel) {
var OS = OutSystems.Internal;
var NPLPortfolioSalesDetail_WbList = (function (_super) {
__extends(NPLPortfolioSalesDetail_WbList, _super);
function NPLPortfolioSalesDetail_WbList(defaults) {
_super.apply(this, arguments);
}
NPLPortfolioSalesDetail_WbList.itemType = LLPSignOff_BLModel.NPLPortfolioSalesDetail_WbRec;
return NPLPortfolioSalesDetail_WbList;
})(OS.DataTypes.GenericRecordList);
LLPSignOff_BLModel.NPLPortfolioSalesDetail_WbList = NPLPortfolioSalesDetail_WbList;

});
define("LLPSignOff_BL.model$NPL_Portfolio_WbRec", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_BL.model", "LLPSignOff_BL.model$NPLPortfolioSalesDetail_WbList"], function (exports, OutSystems, LLPSignOff_BLModel) {
var OS = OutSystems.Internal;
var NPL_Portfolio_WbRec = (function (_super) {
__extends(NPL_Portfolio_WbRec, _super);
function NPL_Portfolio_WbRec(defaults) {
_super.apply(this, arguments);
}
NPL_Portfolio_WbRec.attributesToDeclare = function () {
return [
this.attr("NPLPortfolioId", "nPLPortfolioIdAttr", "NPLPortfolioId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("SignOffRequestId", "signOffRequestIdAttr", "SignOffRequestId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("NameofBuyer", "nameofBuyerAttr", "NameofBuyer", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SalesDate", "salesDateAttr", "SalesDate", false, false, OS.DataTypes.DataTypes.Date, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("Editable", "editableAttr", "Editable", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("NPL_Portfolio_Serialize", "nPL_Portfolio_SerializeAttr", "NPL_Portfolio_Serialize", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("NPLPortfolioSalesDetail_Wb", "nPLPortfolioSalesDetail_WbAttr", "NPLPortfolioSalesDetail_Wb", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new LLPSignOff_BLModel.NPLPortfolioSalesDetail_WbList());
}, true, LLPSignOff_BLModel.NPLPortfolioSalesDetail_WbList)
].concat(_super.attributesToDeclare.call(this));
};
NPL_Portfolio_WbRec.init();
return NPL_Portfolio_WbRec;
})(OS.DataTypes.GenericRecord);
LLPSignOff_BLModel.NPL_Portfolio_WbRec = NPL_Portfolio_WbRec;

});
define("LLPSignOff_BL.model$WorKFlowDecisionRec", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_BL.model"], function (exports, OutSystems, LLPSignOff_BLModel) {
var OS = OutSystems.Internal;
var WorKFlowDecisionRec = (function (_super) {
__extends(WorKFlowDecisionRec, _super);
function WorKFlowDecisionRec(defaults) {
_super.apply(this, arguments);
}
WorKFlowDecisionRec.attributesToDeclare = function () {
return [
this.attr("GeneralWorkflowTransitionId", "generalWorkflowTransitionIdAttr", "GeneralWorkflowTransitionId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("DecisionName", "decisionNameAttr", "DecisionName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsEnabled", "isEnabledAttr", "IsEnabled", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("css", "cssAttr", "css", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsCommentManadatory", "isCommentManadatoryAttr", "IsCommentManadatory", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("DecisionId", "decisionIdAttr", "DecisionId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("ToolTip", "toolTipAttr", "ToolTip", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
WorKFlowDecisionRec.init();
return WorKFlowDecisionRec;
})(OS.DataTypes.GenericRecord);
LLPSignOff_BLModel.WorKFlowDecisionRec = WorKFlowDecisionRec;

});
define("LLPSignOff_BL.model$HomePageCountRec", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_BL.model"], function (exports, OutSystems, LLPSignOff_BLModel) {
var OS = OutSystems.Internal;
var HomePageCountRec = (function (_super) {
__extends(HomePageCountRec, _super);
function HomePageCountRec(defaults) {
_super.apply(this, arguments);
}
HomePageCountRec.attributesToDeclare = function () {
return [
this.attr("StatusId", "statusIdAttr", "StatusId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("StatusName", "statusNameAttr", "StatusName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Count", "countAttr", "Count", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
HomePageCountRec.init();
return HomePageCountRec;
})(OS.DataTypes.GenericRecord);
LLPSignOff_BLModel.HomePageCountRec = HomePageCountRec;

});
define("LLPSignOff_BL.model$Uploaded_NonPMAAdjustmentResultList", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_BL.model", "LLPSignOff_BL.model$Uploaded_NonPMAAdjustmentResultRec"], function (exports, OutSystems, LLPSignOff_BLModel) {
var OS = OutSystems.Internal;
var Uploaded_NonPMAAdjustmentResultList = (function (_super) {
__extends(Uploaded_NonPMAAdjustmentResultList, _super);
function Uploaded_NonPMAAdjustmentResultList(defaults) {
_super.apply(this, arguments);
}
Uploaded_NonPMAAdjustmentResultList.itemType = LLPSignOff_BLModel.Uploaded_NonPMAAdjustmentResultRec;
return Uploaded_NonPMAAdjustmentResultList;
})(OS.DataTypes.GenericRecordList);
LLPSignOff_BLModel.Uploaded_NonPMAAdjustmentResultList = Uploaded_NonPMAAdjustmentResultList;

});
define("LLPSignOff_BL.model$NonPMAAdjustmentList", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_CS.model", "LLPSignOff_BL.model", "LLPSignOff_CS.model$NonPMAAdjustmentRec", "LLPSignOff_BL.referencesHealth", "LLPSignOff_BL.referencesHealth$LLPSignOff_CS"], function (exports, OutSystems, LLPSignOff_CSModel, LLPSignOff_BLModel) {
var OS = OutSystems.Internal;
var NonPMAAdjustmentList = (function (_super) {
__extends(NonPMAAdjustmentList, _super);
function NonPMAAdjustmentList(defaults) {
_super.apply(this, arguments);
}
NonPMAAdjustmentList.itemType = LLPSignOff_CSModel.NonPMAAdjustmentRec;
return NonPMAAdjustmentList;
})(OS.DataTypes.GenericRecordList);
LLPSignOff_BLModel.NonPMAAdjustmentList = NonPMAAdjustmentList;

});
define("LLPSignOff_BL.model$NonPMA_BaseEntityDataRec", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_BL.model", "LLPSignOff_CS.model", "Extension.Text.model", "LLPSignOff_BL.model$Uploaded_NonPMAAdjustmentResultList", "LLPSignOff_CS.model$NonPMAAdjustmentRec", "LLPSignOff_BL.referencesHealth", "LLPSignOff_BL.referencesHealth$LLPSignOff_CS", "LLPSignOff_BL.model$NonPMAAdjustmentList", "Extension.Text.model$TextRec", "LLPSignOff_BL.referencesHealth$Text", "LLPSignOff_BL.model$TextList"], function (exports, OutSystems, LLPSignOff_BLModel, LLPSignOff_CSModel, Extension_TextModel) {
var OS = OutSystems.Internal;
var NonPMA_BaseEntityDataRec = (function (_super) {
__extends(NonPMA_BaseEntityDataRec, _super);
function NonPMA_BaseEntityDataRec(defaults) {
_super.apply(this, arguments);
}
NonPMA_BaseEntityDataRec.attributesToDeclare = function () {
return [
this.attr("BaseEntityCode", "baseEntityCodeAttr", "BaseEntityCode", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("BaseEntityName", "baseEntityNameAttr", "BaseEntityName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Uploaded_NonPMAAdjustmentResult", "uploaded_NonPMAAdjustmentResultAttr", "Uploaded_NonPMAAdjustmentResult", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new LLPSignOff_BLModel.Uploaded_NonPMAAdjustmentResultList());
}, true, LLPSignOff_BLModel.Uploaded_NonPMAAdjustmentResultList), 
this.attr("NonPMAAdjustment", "nonPMAAdjustmentAttr", "NonPMAAdjustment", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new LLPSignOff_BLModel.NonPMAAdjustmentList());
}, true, LLPSignOff_BLModel.NonPMAAdjustmentList), 
this.attr("IsValid", "isValidAttr", "IsValid", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("ErrorMessage", "errorMessageAttr", "ErrorMessage", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new LLPSignOff_BLModel.TextList());
}, true, LLPSignOff_BLModel.TextList)
].concat(_super.attributesToDeclare.call(this));
};
NonPMA_BaseEntityDataRec.init();
return NonPMA_BaseEntityDataRec;
})(OS.DataTypes.GenericRecord);
LLPSignOff_BLModel.NonPMA_BaseEntityDataRec = NonPMA_BaseEntityDataRec;

});
define("LLPSignOff_BL.model$PMA_AdjustmentRec", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_BL.model"], function (exports, OutSystems, LLPSignOff_BLModel) {
var OS = OutSystems.Internal;
var PMA_AdjustmentRec = (function (_super) {
__extends(PMA_AdjustmentRec, _super);
function PMA_AdjustmentRec(defaults) {
_super.apply(this, arguments);
}
PMA_AdjustmentRec.attributesToDeclare = function () {
return [
this.attr("PMAAdjustmentId", "pMAAdjustmentIdAttr", "PMAAdjustmentId", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("SignOffRequestId", "signOffRequestIdAttr", "SignOffRequestId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("AdjustmentName", "adjustmentNameAttr", "AdjustmentName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("AdjustmentKey", "adjustmentKeyAttr", "AdjustmentKey", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("AdjustmentStatusId", "adjustmentStatusIdAttr", "AdjustmentStatusId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("AdjustmentStatus", "adjustmentStatusAttr", "AdjustmentStatus", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IndicatedReleaseQuarter", "indicatedReleaseQuarterAttr", "IndicatedReleaseQuarter", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("IndicatedReleaseQuarterYear_Text", "indicatedReleaseQuarterYear_TextAttr", "IndicatedReleaseQuarterYear_Text", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IndicatedReleaseYear", "indicatedReleaseYearAttr", "IndicatedReleaseYear", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("AdjustmentTypeId", "adjustmentTypeIdAttr", "AdjustmentTypeId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("AdjustmentType", "adjustmentTypeAttr", "AdjustmentType", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsActive", "isActiveAttr", "IsActive", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("PMAAdjustmentDetailId", "pMAAdjustmentDetailIdAttr", "PMAAdjustmentDetailId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("PrevQuarterProv", "prevQuarterProvAttr", "PrevQuarterProv", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("QuarterlyFXChanges", "quarterlyFXChangesAttr", "QuarterlyFXChanges", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("PrevQuarterProvCurRate", "prevQuarterProvCurRateAttr", "PrevQuarterProvCurRate", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("IFRS9modelId", "iFRS9modelIdAttr", "IFRS9modelId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("RatingSystem", "ratingSystemAttr", "RatingSystem", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IndustryId", "industryIdAttr", "IndustryId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Industry", "industryAttr", "Industry", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("AdjustmentApproachId", "adjustmentApproachIdAttr", "AdjustmentApproachId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("AdjustmentApproach", "adjustmentApproachAttr", "AdjustmentApproach", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("BalanceIndicatorId", "balanceIndicatorIdAttr", "BalanceIndicatorId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("BalanceIndicator", "balanceIndicatorAttr", "BalanceIndicator", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("PortfolioId", "portfolioIdAttr", "PortfolioId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Portfolio", "portfolioAttr", "Portfolio", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ProvisionCategoryId", "provisionCategoryIdAttr", "ProvisionCategoryId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("ProvisionCategory", "provisionCategoryAttr", "ProvisionCategory", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsAdjustmentAmountinVortex", "isAdjustmentAmountinVortexAttr", "IsAdjustmentAmountinVortex", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("IsAdjustmentAmountinVortexText", "isAdjustmentAmountinVortexTextAttr", "IsAdjustmentAmountinVortexText", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Increase", "increaseAttr", "Increase", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Release", "releaseAttr", "Release", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("CurQuarterProv", "curQuarterProvAttr", "CurQuarterProv", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("CreatedOn", "createdOnAttr", "CreatedOn", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("CreatedBy", "createdByAttr", "CreatedBy", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("LastChanged", "lastChangedAttr", "LastChanged", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("LastChangedBy", "lastChangedByAttr", "LastChangedBy", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Comment", "commentAttr", "Comment", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("EditActionColumn", "editActionColumnAttr", "EditActionColumn", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DeleteActionColumn", "deleteActionColumnAttr", "DeleteActionColumn", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("RiskCosts", "riskCostsAttr", "RiskCosts", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("OnBalance", "onBalanceAttr", "OnBalance", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("OffBalance", "offBalanceAttr", "OffBalance", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("BaseEntityLable", "baseEntityLableAttr", "BaseEntityLable", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("BaseEntityId", "baseEntityIdAttr", "BaseEntityId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("IsRollForward", "isRollForwardAttr", "IsRollForward", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("IsDeletable", "isDeletableAttr", "IsDeletable", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Outstanding", "outstandingAttr", "Outstanding", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
PMA_AdjustmentRec.init();
return PMA_AdjustmentRec;
})(OS.DataTypes.GenericRecord);
LLPSignOff_BLModel.PMA_AdjustmentRec = PMA_AdjustmentRec;

});
define("LLPSignOff_BL.model$StrLayer1SheetDataRec", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_BL.model"], function (exports, OutSystems, LLPSignOff_BLModel) {
var OS = OutSystems.Internal;
var StrLayer1SheetDataRec = (function (_super) {
__extends(StrLayer1SheetDataRec, _super);
function StrLayer1SheetDataRec(defaults) {
_super.apply(this, arguments);
}
StrLayer1SheetDataRec.attributesToDeclare = function () {
return [
this.attr("SignOffSheetId", "signOffSheetIdAttr", "SignOffSheetId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("SignOffRequestId", "signOffRequestIdAttr", "SignOffRequestId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("LayerId", "layerIdAttr", "LayerId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("PortfolioId", "portfolioIdAttr", "PortfolioId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("ProvisionCategoryName", "provisionCategoryNameAttr", "ProvisionCategoryName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ProvisionCategoryId", "provisionCategoryIdAttr", "ProvisionCategoryId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("ProvisionTypeName", "provisionTypeNameAttr", "ProvisionTypeName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Outstanding", "outstandingAttr", "Outstanding", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("PrevQuarterProv", "prevQuarterProvAttr", "PrevQuarterProv", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("QuarterlyFXChanges", "quarterlyFXChangesAttr", "QuarterlyFXChanges", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("PrevQuarterProvCurRate", "prevQuarterProvCurRateAttr", "PrevQuarterProvCurRate", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Increase", "increaseAttr", "Increase", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Release", "releaseAttr", "Release", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("RiskCost", "riskCostAttr", "RiskCost", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("WriteOff", "writeOffAttr", "WriteOff", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Reversal", "reversalAttr", "Reversal", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Other", "otherAttr", "Other", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("InterestNPLLoans", "interestNPLLoansAttr", "InterestNPLLoans", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("CurQuarterProv", "curQuarterProvAttr", "CurQuarterProv", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Check", "checkAttr", "Check", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("OnBalance", "onBalanceAttr", "OnBalance", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("OffBalance", "offBalanceAttr", "OffBalance", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("ProvFXChange", "provFXChangeAttr", "ProvFXChange", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("CurQuarterProvCurRate", "curQuarterProvCurRateAttr", "CurQuarterProvCurRate", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("LastChanged", "lastChangedAttr", "LastChanged", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("IsValid", "isValidAttr", "IsValid", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("EmptyData", "emptyDataAttr", "EmptyData", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
StrLayer1SheetDataRec.init();
return StrLayer1SheetDataRec;
})(OS.DataTypes.GenericRecord);
LLPSignOff_BLModel.StrLayer1SheetDataRec = StrLayer1SheetDataRec;

});
define("LLPSignOff_BL.model$PMAAdjumentsDetailsRec", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_BL.model"], function (exports, OutSystems, LLPSignOff_BLModel) {
var OS = OutSystems.Internal;
var PMAAdjumentsDetailsRec = (function (_super) {
__extends(PMAAdjumentsDetailsRec, _super);
function PMAAdjumentsDetailsRec(defaults) {
_super.apply(this, arguments);
}
PMAAdjumentsDetailsRec.attributesToDeclare = function () {
return [
this.attr("BaseEntityCode", "baseEntityCodeAttr", "BaseEntityCode", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("PortfolioId", "portfolioIdAttr", "PortfolioId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("ProvisionCatogaryId", "provisionCatogaryIdAttr", "ProvisionCatogaryId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("OpeningBalance", "openingBalanceAttr", "OpeningBalance", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Increase", "increaseAttr", "Increase", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Release", "releaseAttr", "Release", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("ClosingBalance", "closingBalanceAttr", "ClosingBalance", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("OffBalance", "offBalanceAttr", "OffBalance", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("InVortexId", "inVortexIdAttr", "InVortexId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("IFRS9Model", "iFRS9ModelAttr", "IFRS9Model", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("IndustryId", "industryIdAttr", "IndustryId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("ApproachId", "approachIdAttr", "ApproachId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Comment", "commentAttr", "Comment", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("BaseEntityCodeName", "baseEntityCodeNameAttr", "BaseEntityCodeName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Portfolio", "portfolioAttr", "Portfolio", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ProviSionCategory", "proviSionCategoryAttr", "ProviSionCategory", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IFRS9ModelName", "iFRS9ModelNameAttr", "IFRS9ModelName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("InVortex", "inVortexAttr", "InVortex", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Industry", "industryAttr", "Industry", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Approach", "approachAttr", "Approach", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ErrorMessage", "errorMessageAttr", "ErrorMessage", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsValid", "isValidAttr", "IsValid", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
PMAAdjumentsDetailsRec.init();
return PMAAdjumentsDetailsRec;
})(OS.DataTypes.GenericRecord);
LLPSignOff_BLModel.PMAAdjumentsDetailsRec = PMAAdjumentsDetailsRec;

});
define("LLPSignOff_BL.model$InvalidAdjustmentDataRec", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_BL.model"], function (exports, OutSystems, LLPSignOff_BLModel) {
var OS = OutSystems.Internal;
var InvalidAdjustmentDataRec = (function (_super) {
__extends(InvalidAdjustmentDataRec, _super);
function InvalidAdjustmentDataRec(defaults) {
_super.apply(this, arguments);
}
InvalidAdjustmentDataRec.attributesToDeclare = function () {
return [
this.attr("AdjustmentKey", "adjustmentKeyAttr", "AdjustmentKey", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Status", "statusAttr", "Status", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
InvalidAdjustmentDataRec.init();
return InvalidAdjustmentDataRec;
})(OS.DataTypes.GenericRecord);
LLPSignOff_BLModel.InvalidAdjustmentDataRec = InvalidAdjustmentDataRec;

});
define("LLPSignOff_BL.model$Str_RetailTotalsLayer1SheetDataRec", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_BL.model"], function (exports, OutSystems, LLPSignOff_BLModel) {
var OS = OutSystems.Internal;
var Str_RetailTotalsLayer1SheetDataRec = (function (_super) {
__extends(Str_RetailTotalsLayer1SheetDataRec, _super);
function Str_RetailTotalsLayer1SheetDataRec(defaults) {
_super.apply(this, arguments);
}
Str_RetailTotalsLayer1SheetDataRec.attributesToDeclare = function () {
return [
this.attr("SignOffRequestId", "signOffRequestIdAttr", "SignOffRequestId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("ProvisionCategoryId", "provisionCategoryIdAttr", "ProvisionCategoryId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("ProvisionTypeName", "provisionTypeNameAttr", "ProvisionTypeName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Outstanding", "outstandingAttr", "Outstanding", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("PrevQuarterProv", "prevQuarterProvAttr", "PrevQuarterProv", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("QuarterlyFXChanges", "quarterlyFXChangesAttr", "QuarterlyFXChanges", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("PrevQuarterProvCurRate", "prevQuarterProvCurRateAttr", "PrevQuarterProvCurRate", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Increase", "increaseAttr", "Increase", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Release", "releaseAttr", "Release", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("RiskCost", "riskCostAttr", "RiskCost", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("WriteOff", "writeOffAttr", "WriteOff", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Reversal", "reversalAttr", "Reversal", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Other", "otherAttr", "Other", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("InterestNPLLoans", "interestNPLLoansAttr", "InterestNPLLoans", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("CurQuarterProv", "curQuarterProvAttr", "CurQuarterProv", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Check", "checkAttr", "Check", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("OnBalance", "onBalanceAttr", "OnBalance", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("OffBalance", "offBalanceAttr", "OffBalance", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("ProvFXChange", "provFXChangeAttr", "ProvFXChange", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("CurQuarterProvCurRate", "curQuarterProvCurRateAttr", "CurQuarterProvCurRate", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Str_RetailTotalsLayer1SheetDataRec.init();
return Str_RetailTotalsLayer1SheetDataRec;
})(OS.DataTypes.GenericRecord);
LLPSignOff_BLModel.Str_RetailTotalsLayer1SheetDataRec = Str_RetailTotalsLayer1SheetDataRec;

});
define("LLPSignOff_BL.model$List_CountrySignOffRequestRec", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_BL.model"], function (exports, OutSystems, LLPSignOff_BLModel) {
var OS = OutSystems.Internal;
var List_CountrySignOffRequestRec = (function (_super) {
__extends(List_CountrySignOffRequestRec, _super);
function List_CountrySignOffRequestRec(defaults) {
_super.apply(this, arguments);
}
List_CountrySignOffRequestRec.attributesToDeclare = function () {
return [
this.attr("Country", "countryAttr", "Country", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CountryCode", "countryCodeAttr", "CountryCode", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ReportingCurrency", "reportingCurrencyAttr", "ReportingCurrency", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("provision", "provisionAttr", "provision", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("RiskCost", "riskCostAttr", "RiskCost", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("WriteOff", "writeOffAttr", "WriteOff", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Status", "statusAttr", "Status", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("QuarterName", "quarterNameAttr", "QuarterName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Year", "yearAttr", "Year", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("QuarterYear", "quarterYearAttr", "QuarterYear", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CountBaseEntityPerUser", "countBaseEntityPerUserAttr", "CountBaseEntityPerUser", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("CountBaseEntityPerCountry", "countBaseEntityPerCountryAttr", "CountBaseEntityPerCountry", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Country_DisplayName", "country_DisplayNameAttr", "Country_DisplayName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Country_Tooltip", "country_TooltipAttr", "Country_Tooltip", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
List_CountrySignOffRequestRec.init();
return List_CountrySignOffRequestRec;
})(OS.DataTypes.GenericRecord);
LLPSignOff_BLModel.List_CountrySignOffRequestRec = List_CountrySignOffRequestRec;

});
define("LLPSignOff_BL.model$ExcelUploadedPMAAdjumentRec", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_BL.model"], function (exports, OutSystems, LLPSignOff_BLModel) {
var OS = OutSystems.Internal;
var ExcelUploadedPMAAdjumentRec = (function (_super) {
__extends(ExcelUploadedPMAAdjumentRec, _super);
function ExcelUploadedPMAAdjumentRec(defaults) {
_super.apply(this, arguments);
}
ExcelUploadedPMAAdjumentRec.attributesToDeclare = function () {
return [
this.attr("AdjustmentKey", "adjustmentKeyAttr", "AdjustmentKey", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("AdjustmentType", "adjustmentTypeAttr", "AdjustmentType", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("AdjustmentName", "adjustmentNameAttr", "AdjustmentName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IndicatedReleaseQuarter", "indicatedReleaseQuarterAttr", "IndicatedReleaseQuarter", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("AdjustmentStatus", "adjustmentStatusAttr", "AdjustmentStatus", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("BaseEntity", "baseEntityAttr", "BaseEntity", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Portfolio", "portfolioAttr", "Portfolio", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ProvisionCategory", "provisionCategoryAttr", "ProvisionCategory", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("OpeningBalance", "openingBalanceAttr", "OpeningBalance", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Increase", "increaseAttr", "Increase", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Release", "releaseAttr", "Release", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("ClosingBalance", "closingBalanceAttr", "ClosingBalance", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("ofwhichOffBalance", "ofwhichOffBalanceAttr", "ofwhichOffBalance", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("InVortex", "inVortexAttr", "InVortex", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IFRS9Model", "iFRS9ModelAttr", "IFRS9Model", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Industry", "industryAttr", "Industry", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Approach", "approachAttr", "Approach", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Comments", "commentsAttr", "Comments", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ErrorMessage", "errorMessageAttr", "ErrorMessage", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ExcelUploadedPMAAdjumentRec.init();
return ExcelUploadedPMAAdjumentRec;
})(OS.DataTypes.GenericRecord);
LLPSignOff_BLModel.ExcelUploadedPMAAdjumentRec = ExcelUploadedPMAAdjumentRec;

});
define("LLPSignOff_BL.model$UploadedExcel_NonPMAAdjustmentRec", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_BL.model"], function (exports, OutSystems, LLPSignOff_BLModel) {
var OS = OutSystems.Internal;
var UploadedExcel_NonPMAAdjustmentRec = (function (_super) {
__extends(UploadedExcel_NonPMAAdjustmentRec, _super);
function UploadedExcel_NonPMAAdjustmentRec(defaults) {
_super.apply(this, arguments);
}
UploadedExcel_NonPMAAdjustmentRec.attributesToDeclare = function () {
return [
this.attr("AdjustmentType", "adjustmentTypeAttr", "AdjustmentType", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("BaseEntity", "baseEntityAttr", "BaseEntity", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Portfolio", "portfolioAttr", "Portfolio", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ProvisionCategory", "provisionCategoryAttr", "ProvisionCategory", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("OpeningBalance", "openingBalanceAttr", "OpeningBalance", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Increase", "increaseAttr", "Increase", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Release", "releaseAttr", "Release", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("WriteOff", "writeOffAttr", "WriteOff", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Reversal", "reversalAttr", "Reversal", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Other", "otherAttr", "Other", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("InterestNPL", "interestNPLAttr", "InterestNPL", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("ClosingBalance", "closingBalanceAttr", "ClosingBalance", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("ofwhichOffBalance", "ofwhichOffBalanceAttr", "ofwhichOffBalance", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Comments", "commentsAttr", "Comments", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Outstanding", "outstandingAttr", "Outstanding", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("CombinationOfKey", "combinationOfKeyAttr", "CombinationOfKey", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
UploadedExcel_NonPMAAdjustmentRec.init();
return UploadedExcel_NonPMAAdjustmentRec;
})(OS.DataTypes.GenericRecord);
LLPSignOff_BLModel.UploadedExcel_NonPMAAdjustmentRec = UploadedExcel_NonPMAAdjustmentRec;

});
define("LLPSignOff_BL.model$PMAAdjumentsDetailsList", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_BL.model", "LLPSignOff_BL.model$PMAAdjumentsDetailsRec"], function (exports, OutSystems, LLPSignOff_BLModel) {
var OS = OutSystems.Internal;
var PMAAdjumentsDetailsList = (function (_super) {
__extends(PMAAdjumentsDetailsList, _super);
function PMAAdjumentsDetailsList(defaults) {
_super.apply(this, arguments);
}
PMAAdjumentsDetailsList.itemType = LLPSignOff_BLModel.PMAAdjumentsDetailsRec;
return PMAAdjumentsDetailsList;
})(OS.DataTypes.GenericRecordList);
LLPSignOff_BLModel.PMAAdjumentsDetailsList = PMAAdjumentsDetailsList;

});
define("LLPSignOff_BL.model$PMAAdjustmentDataRec", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_BL.model", "LLPSignOff_BL.model$PMAAdjumentsDetailsList"], function (exports, OutSystems, LLPSignOff_BLModel) {
var OS = OutSystems.Internal;
var PMAAdjustmentDataRec = (function (_super) {
__extends(PMAAdjustmentDataRec, _super);
function PMAAdjustmentDataRec(defaults) {
_super.apply(this, arguments);
}
PMAAdjustmentDataRec.attributesToDeclare = function () {
return [
this.attr("AdjustmentKey", "adjustmentKeyAttr", "AdjustmentKey", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("AdjustmentStatus", "adjustmentStatusAttr", "AdjustmentStatus", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("PMAAdjustmentName", "pMAAdjustmentNameAttr", "PMAAdjustmentName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IndicatedReleaseQuarter", "indicatedReleaseQuarterAttr", "IndicatedReleaseQuarter", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("AdjustmentType", "adjustmentTypeAttr", "AdjustmentType", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("AdjustmentStatusName", "adjustmentStatusNameAttr", "AdjustmentStatusName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("AdjustmentTypeName", "adjustmentTypeNameAttr", "AdjustmentTypeName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IndicatedReleaseQuarterName", "indicatedReleaseQuarterNameAttr", "IndicatedReleaseQuarterName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("indicatedReleaseYear", "indicatedReleaseYearAttr", "indicatedReleaseYear", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("IsValid", "isValidAttr", "IsValid", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("ErrorMessage", "errorMessageAttr", "ErrorMessage", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("AdjustmentDetail", "adjustmentDetailAttr", "AdjustmentDetail", false, false, OS.DataTypes.DataTypes.RecordList, function () {
return OS.DataTypes.ImmutableBase.getData(new LLPSignOff_BLModel.PMAAdjumentsDetailsList());
}, true, LLPSignOff_BLModel.PMAAdjumentsDetailsList)
].concat(_super.attributesToDeclare.call(this));
};
PMAAdjustmentDataRec.init();
return PMAAdjustmentDataRec;
})(OS.DataTypes.GenericRecord);
LLPSignOff_BLModel.PMAAdjustmentDataRec = PMAAdjustmentDataRec;

});
define("LLPSignOff_BL.model", ["exports", "OutSystems/ClientRuntime/Main"], function (exports, OutSystems) {
var OS = OutSystems.Internal;
var LLPSignOff_BLModel = exports;
});
