define("LLPSignOff_Roles.model$DecisionRec", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_Roles.model"], function (exports, OutSystems, LLPSignOff_RolesModel) {
var OS = OutSystems.Internal;
var DecisionRec = (function (_super) {
__extends(DecisionRec, _super);
function DecisionRec(defaults) {
_super.apply(this, arguments);
}
DecisionRec.attributesToDeclare = function () {
return [
this.attr("DecisionId", "decisionIdAttr", "DecisionId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("IsEnable", "isEnableAttr", "IsEnable", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
DecisionRec.init();
return DecisionRec;
})(OS.DataTypes.GenericRecord);
LLPSignOff_RolesModel.DecisionRec = DecisionRec;

});
define("LLPSignOff_Roles.model$Str_WorKFlowDecisionRec", ["exports", "OutSystems/ClientRuntime/Main", "LLPSignOff_Roles.model"], function (exports, OutSystems, LLPSignOff_RolesModel) {
var OS = OutSystems.Internal;
var Str_WorKFlowDecisionRec = (function (_super) {
__extends(Str_WorKFlowDecisionRec, _super);
function Str_WorKFlowDecisionRec(defaults) {
_super.apply(this, arguments);
}
Str_WorKFlowDecisionRec.attributesToDeclare = function () {
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
Str_WorKFlowDecisionRec.init();
return Str_WorKFlowDecisionRec;
})(OS.DataTypes.GenericRecord);
LLPSignOff_RolesModel.Str_WorKFlowDecisionRec = Str_WorKFlowDecisionRec;

});
define("LLPSignOff_Roles.model", ["exports", "OutSystems/ClientRuntime/Main"], function (exports, OutSystems) {
var OS = OutSystems.Internal;
var LLPSignOff_RolesModel = exports;
});
