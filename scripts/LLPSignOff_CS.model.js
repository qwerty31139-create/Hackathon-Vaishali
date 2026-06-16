define("LLPSignOff_CS.model$NPLPortfolioDetailRec", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_CS.model"], function (exports, OutSystems, LLPSignOff_CSModel) {
var OS = OutSystems.Internal;
var NPLPortfolioDetailRec = (function (_super) {
__extends(NPLPortfolioDetailRec, _super);
function NPLPortfolioDetailRec(defaults) {
_super.apply(this, arguments);
}
NPLPortfolioDetailRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("NPLPortfolioId", "nPLPortfolioIdAttr", "NPLPortfolioId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("PortfolioId", "portfolioIdAttr", "PortfolioId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
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
NPLPortfolioDetailRec.init();
return NPLPortfolioDetailRec;
})(OS.DataTypes.GenericRecord);
LLPSignOff_CSModel.NPLPortfolioDetailRec = NPLPortfolioDetailRec;

});
define("LLPSignOff_CS.model$WorkFlow_EOM_HistoryRec", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_CS.model"], function (exports, OutSystems, LLPSignOff_CSModel) {
var OS = OutSystems.Internal;
var WorkFlow_EOM_HistoryRec = (function (_super) {
__extends(WorkFlow_EOM_HistoryRec, _super);
function WorkFlow_EOM_HistoryRec(defaults) {
_super.apply(this, arguments);
}
WorkFlow_EOM_HistoryRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("EOMRatesProcesMonthYearId", "eOMRatesProcesMonthYearIdAttr", "EOMRatesProcesMonthYearId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("CurrentStatus", "currentStatusAttr", "CurrentStatus", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("NewStatus", "newStatusAttr", "NewStatus", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("CreatedBy", "createdByAttr", "CreatedBy", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("CreatedDate", "createdDateAttr", "CreatedDate", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("DecisionId", "decisionIdAttr", "DecisionId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("WorkFlowTransitionsId", "workFlowTransitionsIdAttr", "WorkFlowTransitionsId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("WorkflowTypeId", "workflowTypeIdAttr", "WorkflowTypeId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
WorkFlow_EOM_HistoryRec.init();
return WorkFlow_EOM_HistoryRec;
})(OS.DataTypes.GenericRecord);
LLPSignOff_CSModel.WorkFlow_EOM_HistoryRec = WorkFlow_EOM_HistoryRec;

});
define("LLPSignOff_CS.model$CreateQuarter_RemarksRec", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_CS.model"], function (exports, OutSystems, LLPSignOff_CSModel) {
var OS = OutSystems.Internal;
var CreateQuarter_RemarksRec = (function (_super) {
__extends(CreateQuarter_RemarksRec, _super);
function CreateQuarter_RemarksRec(defaults) {
_super.apply(this, arguments);
}
CreateQuarter_RemarksRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("SignOffProcesQuarterYear", "signOffProcesQuarterYearAttr", "SignOffProcesQuarterYear", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("CreatedBy", "createdByAttr", "CreatedBy", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Created", "createdAttr", "Created", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("Remark", "remarkAttr", "Remark", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
CreateQuarter_RemarksRec.init();
return CreateQuarter_RemarksRec;
})(OS.DataTypes.GenericRecord);
LLPSignOff_CSModel.CreateQuarter_RemarksRec = CreateQuarter_RemarksRec;

});
define("LLPSignOff_CS.model$SheetFlagsRec", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_CS.model"], function (exports, OutSystems, LLPSignOff_CSModel) {
var OS = OutSystems.Internal;
var SheetFlagsRec = (function (_super) {
__extends(SheetFlagsRec, _super);
function SheetFlagsRec(defaults) {
_super.apply(this, arguments);
}
SheetFlagsRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("RequestId", "requestIdAttr", "RequestId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("IsLess5M", "isLess5MAttr", "IsLess5M", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("IsNoNPLSalesApplicable", "isNoNPLSalesApplicableAttr", "IsNoNPLSalesApplicable", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
SheetFlagsRec.init();
return SheetFlagsRec;
})(OS.DataTypes.GenericRecord);
LLPSignOff_CSModel.SheetFlagsRec = SheetFlagsRec;

});
define("LLPSignOff_CS.model$LLP_BooleanRec", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_CS.model"], function (exports, OutSystems, LLPSignOff_CSModel) {
var OS = OutSystems.Internal;
var LLP_BooleanRec = (function (_super) {
__extends(LLP_BooleanRec, _super);
function LLP_BooleanRec(defaults) {
_super.apply(this, arguments);
}
LLP_BooleanRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Label", "labelAttr", "Label", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Order", "orderAttr", "Order", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
LLP_BooleanRec.init();
return LLP_BooleanRec;
})(OS.DataTypes.GenericRecord);
LLPSignOff_CSModel.LLP_BooleanRec = LLP_BooleanRec;

});
define("LLPSignOff_CS.model$WorkflowStatusRec", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_CS.model"], function (exports, OutSystems, LLPSignOff_CSModel) {
var OS = OutSystems.Internal;
var WorkflowStatusRec = (function (_super) {
__extends(WorkflowStatusRec, _super);
function WorkflowStatusRec(defaults) {
_super.apply(this, arguments);
}
WorkflowStatusRec.attributesToDeclare = function () {
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
WorkflowStatusRec.init();
return WorkflowStatusRec;
})(OS.DataTypes.GenericRecord);
LLPSignOff_CSModel.WorkflowStatusRec = WorkflowStatusRec;

});
define("LLPSignOff_CS.model$SignOffRequestRec", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_CS.model"], function (exports, OutSystems, LLPSignOff_CSModel) {
var OS = OutSystems.Internal;
var SignOffRequestRec = (function (_super) {
__extends(SignOffRequestRec, _super);
function SignOffRequestRec(defaults) {
_super.apply(this, arguments);
}
SignOffRequestRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Guid", "guidAttr", "Guid", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("BaseEntityForSignOffId", "baseEntityForSignOffIdAttr", "BaseEntityForSignOffId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("CreatedBy", "createdByAttr", "CreatedBy", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("UpdatedBy", "updatedByAttr", "UpdatedBy", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("CreatedOn", "createdOnAttr", "CreatedOn", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("UpdatedOn", "updatedOnAttr", "UpdatedOn", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("SignOffProcesQuarterYear", "signOffProcesQuarterYearAttr", "SignOffProcesQuarterYear", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("WorkflowStatusId", "workflowStatusIdAttr", "WorkflowStatusId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("YTD_WorkflowStatusId", "yTD_WorkflowStatusIdAttr", "YTD_WorkflowStatusId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
SignOffRequestRec.init();
return SignOffRequestRec;
})(OS.DataTypes.GenericRecord);
LLPSignOff_CSModel.SignOffRequestRec = SignOffRequestRec;

});
define("LLPSignOff_CS.model$Quarter3Rec", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_CS.model"], function (exports, OutSystems, LLPSignOff_CSModel) {
var OS = OutSystems.Internal;
var Quarter3Rec = (function (_super) {
__extends(Quarter3Rec, _super);
function Quarter3Rec(defaults) {
_super.apply(this, arguments);
}
Quarter3Rec.attributesToDeclare = function () {
return [
this.attr("QuarterId", "quarterIdAttr", "QuarterId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("QuarterOrder", "quarterOrderAttr", "QuarterOrder", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("QuarterName", "quarterNameAttr", "QuarterName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Year", "yearAttr", "Year", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Quarter3Rec.init();
return Quarter3Rec;
})(OS.DataTypes.GenericRecord);
LLPSignOff_CSModel.Quarter3Rec = Quarter3Rec;

});
define("LLPSignOff_CS.model$PortfolioRec", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_CS.model"], function (exports, OutSystems, LLPSignOff_CSModel) {
var OS = OutSystems.Internal;
var PortfolioRec = (function (_super) {
__extends(PortfolioRec, _super);
function PortfolioRec(defaults) {
_super.apply(this, arguments);
}
PortfolioRec.attributesToDeclare = function () {
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
this.attr("PortfolioId", "portfolioIdAttr", "PortfolioId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
PortfolioRec.init();
return PortfolioRec;
})(OS.DataTypes.GenericRecord);
LLPSignOff_CSModel.PortfolioRec = PortfolioRec;

});
define("LLPSignOff_CS.model$Temp_StrLayer1SheetDataRec", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_CS.model"], function (exports, OutSystems, LLPSignOff_CSModel) {
var OS = OutSystems.Internal;
var Temp_StrLayer1SheetDataRec = (function (_super) {
__extends(Temp_StrLayer1SheetDataRec, _super);
function Temp_StrLayer1SheetDataRec(defaults) {
_super.apply(this, arguments);
}
Temp_StrLayer1SheetDataRec.attributesToDeclare = function () {
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
this.attr("LastChanged", "lastChangedAttr", "LastChanged", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("IsValid", "isValidAttr", "IsValid", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("SignoffRequestName", "signoffRequestNameAttr", "SignoffRequestName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Quarter", "quarterAttr", "Quarter", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Temp_StrLayer1SheetDataRec.init();
return Temp_StrLayer1SheetDataRec;
})(OS.DataTypes.GenericRecord);
LLPSignOff_CSModel.Temp_StrLayer1SheetDataRec = Temp_StrLayer1SheetDataRec;

});
define("LLPSignOff_CS.model$NPLPortfolioCategoryRec", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_CS.model"], function (exports, OutSystems, LLPSignOff_CSModel) {
var OS = OutSystems.Internal;
var NPLPortfolioCategoryRec = (function (_super) {
__extends(NPLPortfolioCategoryRec, _super);
function NPLPortfolioCategoryRec(defaults) {
_super.apply(this, arguments);
}
NPLPortfolioCategoryRec.attributesToDeclare = function () {
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
this.attr("IsReadOnly", "isReadOnlyAttr", "IsReadOnly", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Ispercent", "ispercentAttr", "Ispercent", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
NPLPortfolioCategoryRec.init();
return NPLPortfolioCategoryRec;
})(OS.DataTypes.GenericRecord);
LLPSignOff_CSModel.NPLPortfolioCategoryRec = NPLPortfolioCategoryRec;

});
define("LLPSignOff_CS.model$CurrencyConversionRatesRec", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_CS.model"], function (exports, OutSystems, LLPSignOff_CSModel) {
var OS = OutSystems.Internal;
var CurrencyConversionRatesRec = (function (_super) {
__extends(CurrencyConversionRatesRec, _super);
function CurrencyConversionRatesRec(defaults) {
_super.apply(this, arguments);
}
CurrencyConversionRatesRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("CurrencyId", "currencyIdAttr", "CurrencyId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("MonthId", "monthIdAttr", "MonthId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Year", "yearAttr", "Year", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("ConversionRate", "conversionRateAttr", "ConversionRate", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("AverageRate", "averageRateAttr", "AverageRate", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("EOMRatesProcesMonthYearId", "eOMRatesProcesMonthYearIdAttr", "EOMRatesProcesMonthYearId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
CurrencyConversionRatesRec.init();
return CurrencyConversionRatesRec;
})(OS.DataTypes.GenericRecord);
LLPSignOff_CSModel.CurrencyConversionRatesRec = CurrencyConversionRatesRec;

});
define("LLPSignOff_CS.model$AppPropertiesRec", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_CS.model"], function (exports, OutSystems, LLPSignOff_CSModel) {
var OS = OutSystems.Internal;
var AppPropertiesRec = (function (_super) {
__extends(AppPropertiesRec, _super);
function AppPropertiesRec(defaults) {
_super.apply(this, arguments);
}
AppPropertiesRec.attributesToDeclare = function () {
return [
this.attr("App_ApplicationVersion", "app_ApplicationVersionAttr", "App_ApplicationVersion", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("App_Disclaimer", "app_DisclaimerAttr", "App_Disclaimer", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
AppPropertiesRec.init();
return AppPropertiesRec;
})(OS.DataTypes.GenericRecord);
LLPSignOff_CSModel.AppPropertiesRec = AppPropertiesRec;

});
define("LLPSignOff_CS.model$SyncSignOffSheetForGCRRec", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_CS.model"], function (exports, OutSystems, LLPSignOff_CSModel) {
var OS = OutSystems.Internal;
var SyncSignOffSheetForGCRRec = (function (_super) {
__extends(SyncSignOffSheetForGCRRec, _super);
function SyncSignOffSheetForGCRRec(defaults) {
_super.apply(this, arguments);
}
SyncSignOffSheetForGCRRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("SignOffRequestID", "signOffRequestIDAttr", "SignOffRequestID", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("LastSyncDateTime", "lastSyncDateTimeAttr", "LastSyncDateTime", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("CurrentTimeZone", "currentTimeZoneAttr", "CurrentTimeZone", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("workflowTypeId", "workflowTypeIdAttr", "workflowTypeId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("RefreshedBy", "refreshedByAttr", "RefreshedBy", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
SyncSignOffSheetForGCRRec.init();
return SyncSignOffSheetForGCRRec;
})(OS.DataTypes.GenericRecord);
LLPSignOff_CSModel.SyncSignOffSheetForGCRRec = SyncSignOffSheetForGCRRec;

});
define("LLPSignOff_CS.model$AdjustmentRatingSystemRec", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_CS.model"], function (exports, OutSystems, LLPSignOff_CSModel) {
var OS = OutSystems.Internal;
var AdjustmentRatingSystemRec = (function (_super) {
__extends(AdjustmentRatingSystemRec, _super);
function AdjustmentRatingSystemRec(defaults) {
_super.apply(this, arguments);
}
AdjustmentRatingSystemRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("RatingSystem", "ratingSystemAttr", "RatingSystem", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsActive", "isActiveAttr", "IsActive", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
AdjustmentRatingSystemRec.init();
return AdjustmentRatingSystemRec;
})(OS.DataTypes.GenericRecord);
LLPSignOff_CSModel.AdjustmentRatingSystemRec = AdjustmentRatingSystemRec;

});
define("LLPSignOff_CS.model$AdjustmentTypeRec", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_CS.model"], function (exports, OutSystems, LLPSignOff_CSModel) {
var OS = OutSystems.Internal;
var AdjustmentTypeRec = (function (_super) {
__extends(AdjustmentTypeRec, _super);
function AdjustmentTypeRec(defaults) {
_super.apply(this, arguments);
}
AdjustmentTypeRec.attributesToDeclare = function () {
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
this.attr("IsPMA", "isPMAAttr", "IsPMA", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
AdjustmentTypeRec.init();
return AdjustmentTypeRec;
})(OS.DataTypes.GenericRecord);
LLPSignOff_CSModel.AdjustmentTypeRec = AdjustmentTypeRec;

});
define("LLPSignOff_CS.model$BalanceIndicatorRec", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_CS.model"], function (exports, OutSystems, LLPSignOff_CSModel) {
var OS = OutSystems.Internal;
var BalanceIndicatorRec = (function (_super) {
__extends(BalanceIndicatorRec, _super);
function BalanceIndicatorRec(defaults) {
_super.apply(this, arguments);
}
BalanceIndicatorRec.attributesToDeclare = function () {
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
BalanceIndicatorRec.init();
return BalanceIndicatorRec;
})(OS.DataTypes.GenericRecord);
LLPSignOff_CSModel.BalanceIndicatorRec = BalanceIndicatorRec;

});
define("LLPSignOff_CS.model$MonthRec", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_CS.model"], function (exports, OutSystems, LLPSignOff_CSModel) {
var OS = OutSystems.Internal;
var MonthRec = (function (_super) {
__extends(MonthRec, _super);
function MonthRec(defaults) {
_super.apply(this, arguments);
}
MonthRec.attributesToDeclare = function () {
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
this.attr("Quarter", "quarterAttr", "Quarter", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("FullMonth", "fullMonthAttr", "FullMonth", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ShortMonth", "shortMonthAttr", "ShortMonth", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MonthInQuarter", "monthInQuarterAttr", "MonthInQuarter", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
MonthRec.init();
return MonthRec;
})(OS.DataTypes.GenericRecord);
LLPSignOff_CSModel.MonthRec = MonthRec;

});
define("LLPSignOff_CS.model$EOMRatesProcesMonthYearRec", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_CS.model"], function (exports, OutSystems, LLPSignOff_CSModel) {
var OS = OutSystems.Internal;
var EOMRatesProcesMonthYearRec = (function (_super) {
__extends(EOMRatesProcesMonthYearRec, _super);
function EOMRatesProcesMonthYearRec(defaults) {
_super.apply(this, arguments);
}
EOMRatesProcesMonthYearRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("MonthId", "monthIdAttr", "MonthId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Year", "yearAttr", "Year", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Requester", "requesterAttr", "Requester", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Requested", "requestedAttr", "Requested", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("Approver", "approverAttr", "Approver", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Approved", "approvedAttr", "Approved", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("isActive", "isActiveAttr", "isActive", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Status", "statusAttr", "Status", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("StatusId", "statusIdAttr", "StatusId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
EOMRatesProcesMonthYearRec.init();
return EOMRatesProcesMonthYearRec;
})(OS.DataTypes.GenericRecord);
LLPSignOff_CSModel.EOMRatesProcesMonthYearRec = EOMRatesProcesMonthYearRec;

});
define("LLPSignOff_CS.model$DocBinaryRec", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_CS.model"], function (exports, OutSystems, LLPSignOff_CSModel) {
var OS = OutSystems.Internal;
var DocBinaryRec = (function (_super) {
__extends(DocBinaryRec, _super);
function DocBinaryRec(defaults) {
_super.apply(this, arguments);
}
DocBinaryRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("BinaryContent", "binaryContentAttr", "BinaryContent", false, false, OS.DataTypes.DataTypes.BinaryData, function () {
return OS.DataTypes.BinaryData.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
DocBinaryRec.init();
return DocBinaryRec;
})(OS.DataTypes.GenericRecord);
LLPSignOff_CSModel.DocBinaryRec = DocBinaryRec;

});
define("LLPSignOff_CS.model$PMAAdjustmentDetailRec", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_CS.model"], function (exports, OutSystems, LLPSignOff_CSModel) {
var OS = OutSystems.Internal;
var PMAAdjustmentDetailRec = (function (_super) {
__extends(PMAAdjustmentDetailRec, _super);
function PMAAdjustmentDetailRec(defaults) {
_super.apply(this, arguments);
}
PMAAdjustmentDetailRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("PMAAdjustmentId", "pMAAdjustmentIdAttr", "PMAAdjustmentId", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
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
this.attr("Is_AdjustmentAmountinVortex", "is_AdjustmentAmountinVortexAttr", "Is_AdjustmentAmountinVortex", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
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
this.attr("OnBalance", "onBalanceAttr", "OnBalance", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("OffBalance", "offBalanceAttr", "OffBalance", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("IsActive", "isActiveAttr", "IsActive", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, true), 
this.attr("BaseEntityId", "baseEntityIdAttr", "BaseEntityId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("isRolledForward", "isRolledForwardAttr", "isRolledForward", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
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
PMAAdjustmentDetailRec.init();
return PMAAdjustmentDetailRec;
})(OS.DataTypes.GenericRecord);
LLPSignOff_CSModel.PMAAdjustmentDetailRec = PMAAdjustmentDetailRec;

});
define("LLPSignOff_CS.model$WorkflowTypeRec", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_CS.model"], function (exports, OutSystems, LLPSignOff_CSModel) {
var OS = OutSystems.Internal;
var WorkflowTypeRec = (function (_super) {
__extends(WorkflowTypeRec, _super);
function WorkflowTypeRec(defaults) {
_super.apply(this, arguments);
}
WorkflowTypeRec.attributesToDeclare = function () {
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
WorkflowTypeRec.init();
return WorkflowTypeRec;
})(OS.DataTypes.GenericRecord);
LLPSignOff_CSModel.WorkflowTypeRec = WorkflowTypeRec;

});
define("LLPSignOff_CS.model$NPLPortfolioRec", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_CS.model"], function (exports, OutSystems, LLPSignOff_CSModel) {
var OS = OutSystems.Internal;
var NPLPortfolioRec = (function (_super) {
__extends(NPLPortfolioRec, _super);
function NPLPortfolioRec(defaults) {
_super.apply(this, arguments);
}
NPLPortfolioRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("RequestId", "requestIdAttr", "RequestId", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("NameofBuyer", "nameofBuyerAttr", "NameofBuyer", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("SalesDate", "salesDateAttr", "SalesDate", false, false, OS.DataTypes.DataTypes.Date, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("CreatedInStatus", "createdInStatusAttr", "CreatedInStatus", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
NPLPortfolioRec.init();
return NPLPortfolioRec;
})(OS.DataTypes.GenericRecord);
LLPSignOff_CSModel.NPLPortfolioRec = NPLPortfolioRec;

});
define("LLPSignOff_CS.model$WorkflowEOMProces_RemarksRec", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_CS.model"], function (exports, OutSystems, LLPSignOff_CSModel) {
var OS = OutSystems.Internal;
var WorkflowEOMProces_RemarksRec = (function (_super) {
__extends(WorkflowEOMProces_RemarksRec, _super);
function WorkflowEOMProces_RemarksRec(defaults) {
_super.apply(this, arguments);
}
WorkflowEOMProces_RemarksRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("WorkFlowTypeId", "workFlowTypeIdAttr", "WorkFlowTypeId", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("EOMRatesProcesMonthYearId", "eOMRatesProcesMonthYearIdAttr", "EOMRatesProcesMonthYearId", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Action", "actionAttr", "Action", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("CreatedBy", "createdByAttr", "CreatedBy", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Created", "createdAttr", "Created", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("Remark", "remarkAttr", "Remark", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
WorkflowEOMProces_RemarksRec.init();
return WorkflowEOMProces_RemarksRec;
})(OS.DataTypes.GenericRecord);
LLPSignOff_CSModel.WorkflowEOMProces_RemarksRec = WorkflowEOMProces_RemarksRec;

});
define("LLPSignOff_CS.model$YTDCategoryRec", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_CS.model"], function (exports, OutSystems, LLPSignOff_CSModel) {
var OS = OutSystems.Internal;
var YTDCategoryRec = (function (_super) {
__extends(YTDCategoryRec, _super);
function YTDCategoryRec(defaults) {
_super.apply(this, arguments);
}
YTDCategoryRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Label", "labelAttr", "Label", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Description", "descriptionAttr", "Description", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Order", "orderAttr", "Order", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Css", "cssAttr", "Css", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
YTDCategoryRec.init();
return YTDCategoryRec;
})(OS.DataTypes.GenericRecord);
LLPSignOff_CSModel.YTDCategoryRec = YTDCategoryRec;

});
define("LLPSignOff_CS.model$QuarterRec", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_CS.model"], function (exports, OutSystems, LLPSignOff_CSModel) {
var OS = OutSystems.Internal;
var QuarterRec = (function (_super) {
__extends(QuarterRec, _super);
function QuarterRec(defaults) {
_super.apply(this, arguments);
}
QuarterRec.attributesToDeclare = function () {
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
this.attr("StartDate", "startDateAttr", "StartDate", false, false, OS.DataTypes.DataTypes.Date, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("EndDate", "endDateAttr", "EndDate", false, false, OS.DataTypes.DataTypes.Date, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("CutOffDay", "cutOffDayAttr", "CutOffDay", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
QuarterRec.init();
return QuarterRec;
})(OS.DataTypes.GenericRecord);
LLPSignOff_CSModel.QuarterRec = QuarterRec;

});
define("LLPSignOff_CS.model$BaseEntityForSignOffRec", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_CS.model"], function (exports, OutSystems, LLPSignOff_CSModel) {
var OS = OutSystems.Internal;
var BaseEntityForSignOffRec = (function (_super) {
__extends(BaseEntityForSignOffRec, _super);
function BaseEntityForSignOffRec(defaults) {
_super.apply(this, arguments);
}
BaseEntityForSignOffRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("LLP_BaseEntityBancairId", "lLP_BaseEntityBancairIdAttr", "LLP_BaseEntityBancairId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("CurrencyId", "currencyIdAttr", "CurrencyId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("CountryCode", "countryCodeAttr", "CountryCode", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("isGCR", "isGCRAttr", "isGCR", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("CreatedOn", "createdOnAttr", "CreatedOn", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("CreatedBy", "createdByAttr", "CreatedBy", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("LastChangedOn", "lastChangedOnAttr", "LastChangedOn", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("LastChangedBy", "lastChangedByAttr", "LastChangedBy", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("isActive", "isActiveAttr", "isActive", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, true), 
this.attr("Remark", "remarkAttr", "Remark", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CountryCodeGRDM", "countryCodeGRDMAttr", "CountryCodeGRDM", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
BaseEntityForSignOffRec.init();
return BaseEntityForSignOffRec;
})(OS.DataTypes.GenericRecord);
LLPSignOff_CSModel.BaseEntityForSignOffRec = BaseEntityForSignOffRec;

});
define("LLPSignOff_CS.model$WorkflowDecisionRec", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_CS.model"], function (exports, OutSystems, LLPSignOff_CSModel) {
var OS = OutSystems.Internal;
var WorkflowDecisionRec = (function (_super) {
__extends(WorkflowDecisionRec, _super);
function WorkflowDecisionRec(defaults) {
_super.apply(this, arguments);
}
WorkflowDecisionRec.attributesToDeclare = function () {
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
this.attr("Css", "cssAttr", "Css", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
WorkflowDecisionRec.init();
return WorkflowDecisionRec;
})(OS.DataTypes.GenericRecord);
LLPSignOff_CSModel.WorkflowDecisionRec = WorkflowDecisionRec;

});
define("LLPSignOff_CS.model$WriteOffSectionARec", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_CS.model"], function (exports, OutSystems, LLPSignOff_CSModel) {
var OS = OutSystems.Internal;
var WriteOffSectionARec = (function (_super) {
__extends(WriteOffSectionARec, _super);
function WriteOffSectionARec(defaults) {
_super.apply(this, arguments);
}
WriteOffSectionARec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("RequestId", "requestIdAttr", "RequestId", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("S3Ind_WriteOff", "s3Ind_WriteOffAttr", "S3Ind_WriteOff", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("S3Ind_Reversal", "s3Ind_ReversalAttr", "S3Ind_Reversal", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("S3Col_WriteOff", "s3Col_WriteOffAttr", "S3Col_WriteOff", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("S3Col_Reversal", "s3Col_ReversalAttr", "S3Col_Reversal", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Total_WriteOff", "total_WriteOffAttr", "Total_WriteOff", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Total_Reversal", "total_ReversalAttr", "Total_Reversal", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
WriteOffSectionARec.init();
return WriteOffSectionARec;
})(OS.DataTypes.GenericRecord);
LLPSignOff_CSModel.WriteOffSectionARec = WriteOffSectionARec;

});
define("LLPSignOff_CS.model$LayerRec", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_CS.model"], function (exports, OutSystems, LLPSignOff_CSModel) {
var OS = OutSystems.Internal;
var LayerRec = (function (_super) {
__extends(LayerRec, _super);
function LayerRec(defaults) {
_super.apply(this, arguments);
}
LayerRec.attributesToDeclare = function () {
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
this.attr("Description", "descriptionAttr", "Description", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
LayerRec.init();
return LayerRec;
})(OS.DataTypes.GenericRecord);
LLPSignOff_CSModel.LayerRec = LayerRec;

});
define("LLPSignOff_CS.model$NonPMAAdjustmentRec", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_CS.model"], function (exports, OutSystems, LLPSignOff_CSModel) {
var OS = OutSystems.Internal;
var NonPMAAdjustmentRec = (function (_super) {
__extends(NonPMAAdjustmentRec, _super);
function NonPMAAdjustmentRec(defaults) {
_super.apply(this, arguments);
}
NonPMAAdjustmentRec.attributesToDeclare = function () {
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
this.attr("LayerId", "layerIdAttr", "LayerId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
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
this.attr("isRolledForward", "isRolledForwardAttr", "isRolledForward", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
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
NonPMAAdjustmentRec.init();
return NonPMAAdjustmentRec;
})(OS.DataTypes.GenericRecord);
LLPSignOff_CSModel.NonPMAAdjustmentRec = NonPMAAdjustmentRec;

});
define("LLPSignOff_CS.model$AdjustmentStatusRec", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_CS.model"], function (exports, OutSystems, LLPSignOff_CSModel) {
var OS = OutSystems.Internal;
var AdjustmentStatusRec = (function (_super) {
__extends(AdjustmentStatusRec, _super);
function AdjustmentStatusRec(defaults) {
_super.apply(this, arguments);
}
AdjustmentStatusRec.attributesToDeclare = function () {
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
AdjustmentStatusRec.init();
return AdjustmentStatusRec;
})(OS.DataTypes.GenericRecord);
LLPSignOff_CSModel.AdjustmentStatusRec = AdjustmentStatusRec;

});
define("LLPSignOff_CS.model$SignOffProcesQuarterYearRec", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_CS.model"], function (exports, OutSystems, LLPSignOff_CSModel) {
var OS = OutSystems.Internal;
var SignOffProcesQuarterYearRec = (function (_super) {
__extends(SignOffProcesQuarterYearRec, _super);
function SignOffProcesQuarterYearRec(defaults) {
_super.apply(this, arguments);
}
SignOffProcesQuarterYearRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Year", "yearAttr", "Year", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("QuarterId", "quarterIdAttr", "QuarterId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("isActive", "isActiveAttr", "isActive", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Created_By", "created_ByAttr", "Created_By", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Created_On", "created_OnAttr", "Created_On", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
SignOffProcesQuarterYearRec.init();
return SignOffProcesQuarterYearRec;
})(OS.DataTypes.GenericRecord);
LLPSignOff_CSModel.SignOffProcesQuarterYearRec = SignOffProcesQuarterYearRec;

});
define("LLPSignOff_CS.model$SignOffSheetRec", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_CS.model"], function (exports, OutSystems, LLPSignOff_CSModel) {
var OS = OutSystems.Internal;
var SignOffSheetRec = (function (_super) {
__extends(SignOffSheetRec, _super);
function SignOffSheetRec(defaults) {
_super.apply(this, arguments);
}
SignOffSheetRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("PortfolioId", "portfolioIdAttr", "PortfolioId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("ProvisionCategoryId", "provisionCategoryIdAttr", "ProvisionCategoryId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("SignOffRequestId", "signOffRequestIdAttr", "SignOffRequestId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("LayerId", "layerIdAttr", "LayerId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Outstanding", "outstandingAttr", "Outstanding", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("PrevQuarterProv", "prevQuarterProvAttr", "PrevQuarterProv", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("QuarterlyFXChangesForEurMode", "quarterlyFXChangesForEurModeAttr", "QuarterlyFXChangesForEurMode", false, false, OS.DataTypes.DataTypes.Decimal, function () {
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
this.attr("ProvFXChangeForEurMode", "provFXChangeForEurModeAttr", "ProvFXChangeForEurMode", false, false, OS.DataTypes.DataTypes.Decimal, function () {
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
}, true)
].concat(_super.attributesToDeclare.call(this));
};
SignOffSheetRec.init();
return SignOffSheetRec;
})(OS.DataTypes.GenericRecord);
LLPSignOff_CSModel.SignOffSheetRec = SignOffSheetRec;

});
define("LLPSignOff_CS.model$WorkFlow_SignOffRequest_HistoryRec", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_CS.model"], function (exports, OutSystems, LLPSignOff_CSModel) {
var OS = OutSystems.Internal;
var WorkFlow_SignOffRequest_HistoryRec = (function (_super) {
__extends(WorkFlow_SignOffRequest_HistoryRec, _super);
function WorkFlow_SignOffRequest_HistoryRec(defaults) {
_super.apply(this, arguments);
}
WorkFlow_SignOffRequest_HistoryRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("SignOffRequestId", "signOffRequestIdAttr", "SignOffRequestId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("CurrentStatus", "currentStatusAttr", "CurrentStatus", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("NewStatus", "newStatusAttr", "NewStatus", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("CreatedBy", "createdByAttr", "CreatedBy", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("CreatedDate", "createdDateAttr", "CreatedDate", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("DecisionId", "decisionIdAttr", "DecisionId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("WorkFlowTransitionsId", "workFlowTransitionsIdAttr", "WorkFlowTransitionsId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("WorkflowTypeId", "workflowTypeIdAttr", "WorkflowTypeId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
WorkFlow_SignOffRequest_HistoryRec.init();
return WorkFlow_SignOffRequest_HistoryRec;
})(OS.DataTypes.GenericRecord);
LLPSignOff_CSModel.WorkFlow_SignOffRequest_HistoryRec = WorkFlow_SignOffRequest_HistoryRec;

});
define("LLPSignOff_CS.model$PMAKeyQuarterYearRec", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_CS.model"], function (exports, OutSystems, LLPSignOff_CSModel) {
var OS = OutSystems.Internal;
var PMAKeyQuarterYearRec = (function (_super) {
__extends(PMAKeyQuarterYearRec, _super);
function PMAKeyQuarterYearRec(defaults) {
_super.apply(this, arguments);
}
PMAKeyQuarterYearRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
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
this.attr("isRolledForward", "isRolledForwardAttr", "isRolledForward", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("SignOffProcesQuarterYearId", "signOffProcesQuarterYearIdAttr", "SignOffProcesQuarterYearId", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("PMACode", "pMACodeAttr", "PMACode", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
PMAKeyQuarterYearRec.init();
return PMAKeyQuarterYearRec;
})(OS.DataTypes.GenericRecord);
LLPSignOff_CSModel.PMAKeyQuarterYearRec = PMAKeyQuarterYearRec;

});
define("LLPSignOff_CS.model$YTDRequestRec", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_CS.model"], function (exports, OutSystems, LLPSignOff_CSModel) {
var OS = OutSystems.Internal;
var YTDRequestRec = (function (_super) {
__extends(YTDRequestRec, _super);
function YTDRequestRec(defaults) {
_super.apply(this, arguments);
}
YTDRequestRec.attributesToDeclare = function () {
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
}, true), 
this.attr("LastUpdated", "lastUpdatedAttr", "LastUpdated", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
YTDRequestRec.init();
return YTDRequestRec;
})(OS.DataTypes.GenericRecord);
LLPSignOff_CSModel.YTDRequestRec = YTDRequestRec;

});
define("LLPSignOff_CS.model$YTDCategoryConfigRec", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_CS.model"], function (exports, OutSystems, LLPSignOff_CSModel) {
var OS = OutSystems.Internal;
var YTDCategoryConfigRec = (function (_super) {
__extends(YTDCategoryConfigRec, _super);
function YTDCategoryConfigRec(defaults) {
_super.apply(this, arguments);
}
YTDCategoryConfigRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("YTDCategoryID", "yTDCategoryIDAttr", "YTDCategoryID", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("ColumnName", "columnNameAttr", "ColumnName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsPostive", "isPostiveAttr", "IsPostive", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
YTDCategoryConfigRec.init();
return YTDCategoryConfigRec;
})(OS.DataTypes.GenericRecord);
LLPSignOff_CSModel.YTDCategoryConfigRec = YTDCategoryConfigRec;

});
define("LLPSignOff_CS.model$SignOffStatusRec", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_CS.model"], function (exports, OutSystems, LLPSignOff_CSModel) {
var OS = OutSystems.Internal;
var SignOffStatusRec = (function (_super) {
__extends(SignOffStatusRec, _super);
function SignOffStatusRec(defaults) {
_super.apply(this, arguments);
}
SignOffStatusRec.attributesToDeclare = function () {
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
SignOffStatusRec.init();
return SignOffStatusRec;
})(OS.DataTypes.GenericRecord);
LLPSignOff_CSModel.SignOffStatusRec = SignOffStatusRec;

});
define("LLPSignOff_CS.model$UnitiesRec", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_CS.model"], function (exports, OutSystems, LLPSignOff_CSModel) {
var OS = OutSystems.Internal;
var UnitiesRec = (function (_super) {
__extends(UnitiesRec, _super);
function UnitiesRec(defaults) {
_super.apply(this, arguments);
}
UnitiesRec.attributesToDeclare = function () {
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
UnitiesRec.init();
return UnitiesRec;
})(OS.DataTypes.GenericRecord);
LLPSignOff_CSModel.UnitiesRec = UnitiesRec;

});
define("LLPSignOff_CS.model$PMAAdjustmentRec", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_CS.model"], function (exports, OutSystems, LLPSignOff_CSModel) {
var OS = OutSystems.Internal;
var PMAAdjustmentRec = (function (_super) {
__extends(PMAAdjustmentRec, _super);
function PMAAdjustmentRec(defaults) {
_super.apply(this, arguments);
}
PMAAdjustmentRec.attributesToDeclare = function () {
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
this.attr("isRolledForward", "isRolledForwardAttr", "isRolledForward", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("PMAKeyQuarterYearId", "pMAKeyQuarterYearIdAttr", "PMAKeyQuarterYearId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
PMAAdjustmentRec.init();
return PMAAdjustmentRec;
})(OS.DataTypes.GenericRecord);
LLPSignOff_CSModel.PMAAdjustmentRec = PMAAdjustmentRec;

});
define("LLPSignOff_CS.model$WriteOffSectionBRec", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_CS.model"], function (exports, OutSystems, LLPSignOff_CSModel) {
var OS = OutSystems.Internal;
var WriteOffSectionBRec = (function (_super) {
__extends(WriteOffSectionBRec, _super);
function WriteOffSectionBRec(defaults) {
_super.apply(this, arguments);
}
WriteOffSectionBRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("RequestId", "requestIdAttr", "RequestId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Name", "nameAttr", "Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Explanation", "explanationAttr", "Explanation", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("WriteOff", "writeOffAttr", "WriteOff", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("Reversal", "reversalAttr", "Reversal", false, false, OS.DataTypes.DataTypes.Decimal, function () {
return OS.DataTypes.Decimal.defaultValue;
}, true), 
this.attr("LastChanged", "lastChangedAttr", "LastChanged", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("GridId", "gridIdAttr", "GridId", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CreatedInStatus", "createdInStatusAttr", "CreatedInStatus", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
WriteOffSectionBRec.init();
return WriteOffSectionBRec;
})(OS.DataTypes.GenericRecord);
LLPSignOff_CSModel.WriteOffSectionBRec = WriteOffSectionBRec;

});
define("LLPSignOff_CS.model$ProvisionCategoryRec", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_CS.model"], function (exports, OutSystems, LLPSignOff_CSModel) {
var OS = OutSystems.Internal;
var ProvisionCategoryRec = (function (_super) {
__extends(ProvisionCategoryRec, _super);
function ProvisionCategoryRec(defaults) {
_super.apply(this, arguments);
}
ProvisionCategoryRec.attributesToDeclare = function () {
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
this.attr("ShortLabel", "shortLabelAttr", "ShortLabel", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ProvisionCategoryRec.init();
return ProvisionCategoryRec;
})(OS.DataTypes.GenericRecord);
LLPSignOff_CSModel.ProvisionCategoryRec = ProvisionCategoryRec;

});
define("LLPSignOff_CS.model$WorkflowValidateRec", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_CS.model"], function (exports, OutSystems, LLPSignOff_CSModel) {
var OS = OutSystems.Internal;
var WorkflowValidateRec = (function (_super) {
__extends(WorkflowValidateRec, _super);
function WorkflowValidateRec(defaults) {
_super.apply(this, arguments);
}
WorkflowValidateRec.attributesToDeclare = function () {
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
this.attr("WorkflowStatusId", "workflowStatusIdAttr", "WorkflowStatusId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("LayerId", "layerIdAttr", "LayerId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("DecisionId", "decisionIdAttr", "DecisionId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("WorkflowTypeId", "workflowTypeIdAttr", "WorkflowTypeId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
WorkflowValidateRec.init();
return WorkflowValidateRec;
})(OS.DataTypes.GenericRecord);
LLPSignOff_CSModel.WorkflowValidateRec = WorkflowValidateRec;

});
define("LLPSignOff_CS.model$CurrencyModeRec", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_CS.model"], function (exports, OutSystems, LLPSignOff_CSModel) {
var OS = OutSystems.Internal;
var CurrencyModeRec = (function (_super) {
__extends(CurrencyModeRec, _super);
function CurrencyModeRec(defaults) {
_super.apply(this, arguments);
}
CurrencyModeRec.attributesToDeclare = function () {
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
CurrencyModeRec.init();
return CurrencyModeRec;
})(OS.DataTypes.GenericRecord);
LLPSignOff_CSModel.CurrencyModeRec = CurrencyModeRec;

});
define("LLPSignOff_CS.model$WorkflowTransitionsRec", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_CS.model"], function (exports, OutSystems, LLPSignOff_CSModel) {
var OS = OutSystems.Internal;
var WorkflowTransitionsRec = (function (_super) {
__extends(WorkflowTransitionsRec, _super);
function WorkflowTransitionsRec(defaults) {
_super.apply(this, arguments);
}
WorkflowTransitionsRec.attributesToDeclare = function () {
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
this.attr("CurrentStatus", "currentStatusAttr", "CurrentStatus", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Decision", "decisionAttr", "Decision", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("NextStatus", "nextStatusAttr", "NextStatus", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("RoleName", "roleNameAttr", "RoleName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("WorkflowTypeId", "workflowTypeIdAttr", "WorkflowTypeId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("SuccessMessage", "successMessageAttr", "SuccessMessage", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsCommentManadatory", "isCommentManadatoryAttr", "IsCommentManadatory", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("RefreshBaseEntities", "refreshBaseEntitiesAttr", "RefreshBaseEntities", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("ToolTip", "toolTipAttr", "ToolTip", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("TransitionRemarks", "transitionRemarksAttr", "TransitionRemarks", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsMailRequired", "isMailRequiredAttr", "IsMailRequired", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("MailProcessName", "mailProcessNameAttr", "MailProcessName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
WorkflowTransitionsRec.init();
return WorkflowTransitionsRec;
})(OS.DataTypes.GenericRecord);
LLPSignOff_CSModel.WorkflowTransitionsRec = WorkflowTransitionsRec;

});
define("LLPSignOff_CS.model$NPLPortfolioDetailsRec", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_CS.model"], function (exports, OutSystems, LLPSignOff_CSModel) {
var OS = OutSystems.Internal;
var NPLPortfolioDetailsRec = (function (_super) {
__extends(NPLPortfolioDetailsRec, _super);
function NPLPortfolioDetailsRec(defaults) {
_super.apply(this, arguments);
}
NPLPortfolioDetailsRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("NPLPortfolioId", "nPLPortfolioIdAttr", "NPLPortfolioId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("NPLPortfolioCategoryId", "nPLPortfolioCategoryIdAttr", "NPLPortfolioCategoryId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
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
}, true)
].concat(_super.attributesToDeclare.call(this));
};
NPLPortfolioDetailsRec.init();
return NPLPortfolioDetailsRec;
})(OS.DataTypes.GenericRecord);
LLPSignOff_CSModel.NPLPortfolioDetailsRec = NPLPortfolioDetailsRec;

});
define("LLPSignOff_CS.model$WorkflowSignOffRequest_RemarksRec", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_CS.model"], function (exports, OutSystems, LLPSignOff_CSModel) {
var OS = OutSystems.Internal;
var WorkflowSignOffRequest_RemarksRec = (function (_super) {
__extends(WorkflowSignOffRequest_RemarksRec, _super);
function WorkflowSignOffRequest_RemarksRec(defaults) {
_super.apply(this, arguments);
}
WorkflowSignOffRequest_RemarksRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("SignOffRequestId", "signOffRequestIdAttr", "SignOffRequestId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("SignOffRequest_Remarks", "signOffRequest_RemarksAttr", "SignOffRequest_Remarks", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Justification", "justificationAttr", "Justification", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CreatedBy", "createdByAttr", "CreatedBy", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("CreatedDate", "createdDateAttr", "CreatedDate", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("WorkFlowTransitionsId", "workFlowTransitionsIdAttr", "WorkFlowTransitionsId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("WorkflowTypeId", "workflowTypeIdAttr", "WorkflowTypeId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("IsSystemRemark", "isSystemRemarkAttr", "IsSystemRemark", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("isAutoGCRRefresh", "isAutoGCRRefreshAttr", "isAutoGCRRefresh", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
WorkflowSignOffRequest_RemarksRec.init();
return WorkflowSignOffRequest_RemarksRec;
})(OS.DataTypes.GenericRecord);
LLPSignOff_CSModel.WorkflowSignOffRequest_RemarksRec = WorkflowSignOffRequest_RemarksRec;

});
define("LLPSignOff_CS.model$UserSettingsRec", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_CS.model"], function (exports, OutSystems, LLPSignOff_CSModel) {
var OS = OutSystems.Internal;
var UserSettingsRec = (function (_super) {
__extends(UserSettingsRec, _super);
function UserSettingsRec(defaults) {
_super.apply(this, arguments);
}
UserSettingsRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("UserId", "userIdAttr", "UserId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("UnitNumber", "unitNumberAttr", "UnitNumber", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
UserSettingsRec.init();
return UserSettingsRec;
})(OS.DataTypes.GenericRecord);
LLPSignOff_CSModel.UserSettingsRec = UserSettingsRec;

});
define("LLPSignOff_CS.model$EOM_AnnexRec", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_CS.model"], function (exports, OutSystems, LLPSignOff_CSModel) {
var OS = OutSystems.Internal;
var EOM_AnnexRec = (function (_super) {
__extends(EOM_AnnexRec, _super);
function EOM_AnnexRec(defaults) {
_super.apply(this, arguments);
}
EOM_AnnexRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("EOMRatesProcesMonthYearId", "eOMRatesProcesMonthYearIdAttr", "EOMRatesProcesMonthYearId", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Filename", "filenameAttr", "Filename", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("FileType", "fileTypeAttr", "FileType", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DocBinaryId", "docBinaryIdAttr", "DocBinaryId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("DateAdded", "dateAddedAttr", "DateAdded", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("UploadedBy", "uploadedByAttr", "UploadedBy", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
EOM_AnnexRec.init();
return EOM_AnnexRec;
})(OS.DataTypes.GenericRecord);
LLPSignOff_CSModel.EOM_AnnexRec = EOM_AnnexRec;

});
define("LLPSignOff_CS.model$YTDRequestCommentRec", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_CS.model"], function (exports, OutSystems, LLPSignOff_CSModel) {
var OS = OutSystems.Internal;
var YTDRequestCommentRec = (function (_super) {
__extends(YTDRequestCommentRec, _super);
function YTDRequestCommentRec(defaults) {
_super.apply(this, arguments);
}
YTDRequestCommentRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("SignOffRequestId", "signOffRequestIdAttr", "SignOffRequestId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Comment", "commentAttr", "Comment", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
YTDRequestCommentRec.init();
return YTDRequestCommentRec;
})(OS.DataTypes.GenericRecord);
LLPSignOff_CSModel.YTDRequestCommentRec = YTDRequestCommentRec;

});
define("LLPSignOff_CS.model$IndustryRec", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_CS.model"], function (exports, OutSystems, LLPSignOff_CSModel) {
var OS = OutSystems.Internal;
var IndustryRec = (function (_super) {
__extends(IndustryRec, _super);
function IndustryRec(defaults) {
_super.apply(this, arguments);
}
IndustryRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Industry", "industryAttr", "Industry", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsActive", "isActiveAttr", "IsActive", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
IndustryRec.init();
return IndustryRec;
})(OS.DataTypes.GenericRecord);
LLPSignOff_CSModel.IndustryRec = IndustryRec;

});
define("LLPSignOff_CS.model$AdjustmentApproachRec", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_CS.model"], function (exports, OutSystems, LLPSignOff_CSModel) {
var OS = OutSystems.Internal;
var AdjustmentApproachRec = (function (_super) {
__extends(AdjustmentApproachRec, _super);
function AdjustmentApproachRec(defaults) {
_super.apply(this, arguments);
}
AdjustmentApproachRec.attributesToDeclare = function () {
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
AdjustmentApproachRec.init();
return AdjustmentApproachRec;
})(OS.DataTypes.GenericRecord);
LLPSignOff_CSModel.AdjustmentApproachRec = AdjustmentApproachRec;

});
define("LLPSignOff_CS.model$WorkflowModifySignOffRequestConfigurationRec", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_CS.model"], function (exports, OutSystems, LLPSignOff_CSModel) {
var OS = OutSystems.Internal;
var WorkflowModifySignOffRequestConfigurationRec = (function (_super) {
__extends(WorkflowModifySignOffRequestConfigurationRec, _super);
function WorkflowModifySignOffRequestConfigurationRec(defaults) {
_super.apply(this, arguments);
}
WorkflowModifySignOffRequestConfigurationRec.attributesToDeclare = function () {
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
this.attr("LayerId", "layerIdAttr", "LayerId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("StatusId", "statusIdAttr", "StatusId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("RoleName", "roleNameAttr", "RoleName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("WorkflowTypeId", "workflowTypeIdAttr", "WorkflowTypeId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("IsAllowToAdd", "isAllowToAddAttr", "IsAllowToAdd", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
WorkflowModifySignOffRequestConfigurationRec.init();
return WorkflowModifySignOffRequestConfigurationRec;
})(OS.DataTypes.GenericRecord);
LLPSignOff_CSModel.WorkflowModifySignOffRequestConfigurationRec = WorkflowModifySignOffRequestConfigurationRec;

});
define("LLPSignOff_CS.model$Workflow_FourEyesDefinitionsRec", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_CS.model"], function (exports, OutSystems, LLPSignOff_CSModel) {
var OS = OutSystems.Internal;
var Workflow_FourEyesDefinitionsRec = (function (_super) {
__extends(Workflow_FourEyesDefinitionsRec, _super);
function Workflow_FourEyesDefinitionsRec(defaults) {
_super.apply(this, arguments);
}
Workflow_FourEyesDefinitionsRec.attributesToDeclare = function () {
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
this.attr("Workflowtransition_Do", "workflowtransition_DoAttr", "Workflowtransition_Do", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Workflowtransition_Done", "workflowtransition_DoneAttr", "Workflowtransition_Done", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Workflow_FourEyesDefinitionsRec.init();
return Workflow_FourEyesDefinitionsRec;
})(OS.DataTypes.GenericRecord);
LLPSignOff_CSModel.Workflow_FourEyesDefinitionsRec = Workflow_FourEyesDefinitionsRec;

});
define("LLPSignOff_CS.model", ["exports", "OutSystems/ClientRuntime/Main"], function (exports, OutSystems) {
var OS = OutSystems.Internal;
var LLPSignOff_CSModel = exports;
});
