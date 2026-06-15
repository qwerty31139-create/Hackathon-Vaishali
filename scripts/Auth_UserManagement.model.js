define("Auth_UserManagement.model$ExportUserRec", ["exports", "OutSystems/ClientRuntime/Main", "Auth_UserManagement.model"], function (exports, OutSystems, Auth_UserManagementModel) {
var OS = OutSystems.Internal;
var ExportUserRec = (function (_super) {
__extends(ExportUserRec, _super);
function ExportUserRec(defaults) {
_super.apply(this, arguments);
}
ExportUserRec.attributesToDeclare = function () {
return [
this.attr("Name", "nameAttr", "Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Username", "usernameAttr", "Username", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Email", "emailAttr", "Email", false, false, OS.DataTypes.DataTypes.Email, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ExportUserRec.init();
return ExportUserRec;
})(OS.DataTypes.GenericRecord);
Auth_UserManagementModel.ExportUserRec = ExportUserRec;

});
define("Auth_UserManagement.model$ExportUserAssociationRec", ["exports", "OutSystems/ClientRuntime/Main", "Auth_UserManagement.model"], function (exports, OutSystems, Auth_UserManagementModel) {
var OS = OutSystems.Internal;
var ExportUserAssociationRec = (function (_super) {
__extends(ExportUserAssociationRec, _super);
function ExportUserAssociationRec(defaults) {
_super.apply(this, arguments);
}
ExportUserAssociationRec.attributesToDeclare = function () {
return [
this.attr("User_Username", "user_UsernameAttr", "User_Username", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Role_Id", "role_IdAttr", "Role_Id", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Team_Name", "team_NameAttr", "Team_Name", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsTeamleader", "isTeamleaderAttr", "IsTeamleader", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Group_Name", "group_NameAttr", "Group_Name", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Entity_Code", "entity_CodeAttr", "Entity_Code", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsDepartmentManager", "isDepartmentManagerAttr", "IsDepartmentManager", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ExportUserAssociationRec.init();
return ExportUserAssociationRec;
})(OS.DataTypes.GenericRecord);
Auth_UserManagementModel.ExportUserAssociationRec = ExportUserAssociationRec;

});
define("Auth_UserManagement.model$Filter_UsersManagementRec", ["exports", "OutSystems/ClientRuntime/Main", "Auth_UserManagement.model"], function (exports, OutSystems, Auth_UserManagementModel) {
var OS = OutSystems.Internal;
var Filter_UsersManagementRec = (function (_super) {
__extends(Filter_UsersManagementRec, _super);
function Filter_UsersManagementRec(defaults) {
_super.apply(this, arguments);
}
Filter_UsersManagementRec.attributesToDeclare = function () {
return [
this.attr("Search", "searchAttr", "Search", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("GroupId", "groupIdAttr", "GroupId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("LdapCorpKey", "ldapCorpKeyAttr", "LdapCorpKey", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
Filter_UsersManagementRec.init();
return Filter_UsersManagementRec;
})(OS.DataTypes.GenericRecord);
Auth_UserManagementModel.Filter_UsersManagementRec = Filter_UsersManagementRec;

});
define("Auth_UserManagement.model$ExportTeamRec", ["exports", "OutSystems/ClientRuntime/Main", "Auth_UserManagement.model"], function (exports, OutSystems, Auth_UserManagementModel) {
var OS = OutSystems.Internal;
var ExportTeamRec = (function (_super) {
__extends(ExportTeamRec, _super);
function ExportTeamRec(defaults) {
_super.apply(this, arguments);
}
ExportTeamRec.attributesToDeclare = function () {
return [
this.attr("Group_Name", "group_NameAttr", "Group_Name", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Name", "nameAttr", "Name", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Description", "descriptionAttr", "Description", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ExportTeamRec.init();
return ExportTeamRec;
})(OS.DataTypes.GenericRecord);
Auth_UserManagementModel.ExportTeamRec = ExportTeamRec;

});
define("Auth_UserManagement.model$MenuSubItemRec", ["exports", "OutSystems/ClientRuntime/Main", "Auth_UserManagement.model"], function (exports, OutSystems, Auth_UserManagementModel) {
var OS = OutSystems.Internal;
var MenuSubItemRec = (function (_super) {
__extends(MenuSubItemRec, _super);
function MenuSubItemRec(defaults) {
_super.apply(this, arguments);
}
MenuSubItemRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Order", "orderAttr", "Order", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Caption", "captionAttr", "Caption", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("MenuItemId", "menuItemIdAttr", "MenuItemId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
MenuSubItemRec.init();
return MenuSubItemRec;
})(OS.DataTypes.GenericRecord);
Auth_UserManagementModel.MenuSubItemRec = MenuSubItemRec;

});
define("Auth_UserManagement.model$GroupPendingReviewRec", ["exports", "OutSystems/ClientRuntime/Main", "Auth_UserManagement.model"], function (exports, OutSystems, Auth_UserManagementModel) {
var OS = OutSystems.Internal;
var GroupPendingReviewRec = (function (_super) {
__extends(GroupPendingReviewRec, _super);
function GroupPendingReviewRec(defaults) {
_super.apply(this, arguments);
}
GroupPendingReviewRec.attributesToDeclare = function () {
return [
this.attr("GroupId", "groupIdAttr", "GroupId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("GroupName", "groupNameAttr", "GroupName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Pending1", "pending1Attr", "Pending1", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Pending2", "pending2Attr", "Pending2", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("UserName", "userNameAttr", "UserName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("RoleId", "roleIdAttr", "RoleId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
GroupPendingReviewRec.init();
return GroupPendingReviewRec;
})(OS.DataTypes.GenericRecord);
Auth_UserManagementModel.GroupPendingReviewRec = GroupPendingReviewRec;

});
define("Auth_UserManagement.model$UserPendingReviewSTRec", ["exports", "OutSystems/ClientRuntime/Main", "Auth_UserManagement.model"], function (exports, OutSystems, Auth_UserManagementModel) {
var OS = OutSystems.Internal;
var UserPendingReviewSTRec = (function (_super) {
__extends(UserPendingReviewSTRec, _super);
function UserPendingReviewSTRec(defaults) {
_super.apply(this, arguments);
}
UserPendingReviewSTRec.attributesToDeclare = function () {
return [
this.attr("GroupId", "groupIdAttr", "GroupId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("GroupName", "groupNameAttr", "GroupName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("UserEmail", "userEmailAttr", "UserEmail", false, false, OS.DataTypes.DataTypes.Email, function () {
return "";
}, true), 
this.attr("Day7", "day7Attr", "Day7", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Day3", "day3Attr", "Day3", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("Roles", "rolesAttr", "Roles", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LastReviewDate", "lastReviewDateAttr", "LastReviewDate", false, false, OS.DataTypes.DataTypes.Date, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
UserPendingReviewSTRec.init();
return UserPendingReviewSTRec;
})(OS.DataTypes.GenericRecord);
Auth_UserManagementModel.UserPendingReviewSTRec = UserPendingReviewSTRec;

});
define("Auth_UserManagement.model$UserGroupRec", ["exports", "OutSystems/ClientRuntime/Main", "Auth_UserManagement.model"], function (exports, OutSystems, Auth_UserManagementModel) {
var OS = OutSystems.Internal;
var UserGroupRec = (function (_super) {
__extends(UserGroupRec, _super);
function UserGroupRec(defaults) {
_super.apply(this, arguments);
}
UserGroupRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("UserId", "userIdAttr", "UserId", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("GroupId", "groupIdAttr", "GroupId", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
UserGroupRec.init();
return UserGroupRec;
})(OS.DataTypes.GenericRecord);
Auth_UserManagementModel.UserGroupRec = UserGroupRec;

});
define("Auth_UserManagement.model$ApplicationTypeRec", ["exports", "OutSystems/ClientRuntime/Main", "Auth_UserManagement.model"], function (exports, OutSystems, Auth_UserManagementModel) {
var OS = OutSystems.Internal;
var ApplicationTypeRec = (function (_super) {
__extends(ApplicationTypeRec, _super);
function ApplicationTypeRec(defaults) {
_super.apply(this, arguments);
}
ApplicationTypeRec.attributesToDeclare = function () {
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
ApplicationTypeRec.init();
return ApplicationTypeRec;
})(OS.DataTypes.GenericRecord);
Auth_UserManagementModel.ApplicationTypeRec = ApplicationTypeRec;

});
define("Auth_UserManagement.model$UserReviewResultsRec", ["exports", "OutSystems/ClientRuntime/Main", "Auth_UserManagement.model"], function (exports, OutSystems, Auth_UserManagementModel) {
var OS = OutSystems.Internal;
var UserReviewResultsRec = (function (_super) {
__extends(UserReviewResultsRec, _super);
function UserReviewResultsRec(defaults) {
_super.apply(this, arguments);
}
UserReviewResultsRec.attributesToDeclare = function () {
return [
this.attr("Keep", "keepAttr", "Keep", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, true), 
this.attr("Remove", "removeAttr", "Remove", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("ReviewDue", "reviewDueAttr", "ReviewDue", true, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
UserReviewResultsRec.init();
return UserReviewResultsRec;
})(OS.DataTypes.GenericRecord);
Auth_UserManagementModel.UserReviewResultsRec = UserReviewResultsRec;

});
define("Auth_UserManagement.model$GroupAssignmentRec", ["exports", "OutSystems/ClientRuntime/Main", "Auth_UserManagement.model"], function (exports, OutSystems, Auth_UserManagementModel) {
var OS = OutSystems.Internal;
var GroupAssignmentRec = (function (_super) {
__extends(GroupAssignmentRec, _super);
function GroupAssignmentRec(defaults) {
_super.apply(this, arguments);
}
GroupAssignmentRec.attributesToDeclare = function () {
return [
this.attr("GroupId", "groupIdAttr", "GroupId", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("GroupName", "groupNameAttr", "GroupName", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsSelected", "isSelectedAttr", "IsSelected", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("IsEdit", "isEditAttr", "IsEdit", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("RoleId", "roleIdAttr", "RoleId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("OldGroupId", "oldGroupIdAttr", "OldGroupId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("RoleName", "roleNameAttr", "RoleName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsThisGroupManager", "isThisGroupManagerAttr", "IsThisGroupManager", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
GroupAssignmentRec.init();
return GroupAssignmentRec;
})(OS.DataTypes.GenericRecord);
Auth_UserManagementModel.GroupAssignmentRec = GroupAssignmentRec;

});
define("Auth_UserManagement.model$DualControlChangeTypeRec", ["exports", "OutSystems/ClientRuntime/Main", "Auth_UserManagement.model"], function (exports, OutSystems, Auth_UserManagementModel) {
var OS = OutSystems.Internal;
var DualControlChangeTypeRec = (function (_super) {
__extends(DualControlChangeTypeRec, _super);
function DualControlChangeTypeRec(defaults) {
_super.apply(this, arguments);
}
DualControlChangeTypeRec.attributesToDeclare = function () {
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
DualControlChangeTypeRec.init();
return DualControlChangeTypeRec;
})(OS.DataTypes.GenericRecord);
Auth_UserManagementModel.DualControlChangeTypeRec = DualControlChangeTypeRec;

});
define("Auth_UserManagement.model$DualControlGroupRec", ["exports", "OutSystems/ClientRuntime/Main", "Auth_UserManagement.model"], function (exports, OutSystems, Auth_UserManagementModel) {
var OS = OutSystems.Internal;
var DualControlGroupRec = (function (_super) {
__extends(DualControlGroupRec, _super);
function DualControlGroupRec(defaults) {
_super.apply(this, arguments);
}
DualControlGroupRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("GroupId", "groupIdAttr", "GroupId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("EntityId", "entityIdAttr", "EntityId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Name", "nameAttr", "Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Description", "descriptionAttr", "Description", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("GroupTypeId", "groupTypeIdAttr", "GroupTypeId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Status", "statusAttr", "Status", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Requester", "requesterAttr", "Requester", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Approver", "approverAttr", "Approver", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Requested", "requestedAttr", "Requested", true, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("Approved", "approvedAttr", "Approved", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("Rejected", "rejectedAttr", "Rejected", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("ChangeType", "changeTypeAttr", "ChangeType", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("ApplicationId", "applicationIdAttr", "ApplicationId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("LLP_BaseEntityBancairId", "lLP_BaseEntityBancairIdAttr", "LLP_BaseEntityBancairId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
DualControlGroupRec.init();
return DualControlGroupRec;
})(OS.DataTypes.GenericRecord);
Auth_UserManagementModel.DualControlGroupRec = DualControlGroupRec;

});
define("Auth_UserManagement.model$DualControlChangeTypeGMRec", ["exports", "OutSystems/ClientRuntime/Main", "Auth_UserManagement.model"], function (exports, OutSystems, Auth_UserManagementModel) {
var OS = OutSystems.Internal;
var DualControlChangeTypeGMRec = (function (_super) {
__extends(DualControlChangeTypeGMRec, _super);
function DualControlChangeTypeGMRec(defaults) {
_super.apply(this, arguments);
}
DualControlChangeTypeGMRec.attributesToDeclare = function () {
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
DualControlChangeTypeGMRec.init();
return DualControlChangeTypeGMRec;
})(OS.DataTypes.GenericRecord);
Auth_UserManagementModel.DualControlChangeTypeGMRec = DualControlChangeTypeGMRec;

});
define("Auth_UserManagement.model$ExportGroupRec", ["exports", "OutSystems/ClientRuntime/Main", "Auth_UserManagement.model"], function (exports, OutSystems, Auth_UserManagementModel) {
var OS = OutSystems.Internal;
var ExportGroupRec = (function (_super) {
__extends(ExportGroupRec, _super);
function ExportGroupRec(defaults) {
_super.apply(this, arguments);
}
ExportGroupRec.attributesToDeclare = function () {
return [
this.attr("Entity_Code", "entity_CodeAttr", "Entity_Code", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Name", "nameAttr", "Name", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Description", "descriptionAttr", "Description", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ExportGroupRec.init();
return ExportGroupRec;
})(OS.DataTypes.GenericRecord);
Auth_UserManagementModel.ExportGroupRec = ExportGroupRec;

});
define("Auth_UserManagement.model$UserTeamRoleRec", ["exports", "OutSystems/ClientRuntime/Main", "Auth_UserManagement.model"], function (exports, OutSystems, Auth_UserManagementModel) {
var OS = OutSystems.Internal;
var UserTeamRoleRec = (function (_super) {
__extends(UserTeamRoleRec, _super);
function UserTeamRoleRec(defaults) {
_super.apply(this, arguments);
}
UserTeamRoleRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("UserTeamId", "userTeamIdAttr", "UserTeamId", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("RoleId", "roleIdAttr", "RoleId", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
UserTeamRoleRec.init();
return UserTeamRoleRec;
})(OS.DataTypes.GenericRecord);
Auth_UserManagementModel.UserTeamRoleRec = UserTeamRoleRec;

});
define("Auth_UserManagement.model$UserGroupRoleExportRec", ["exports", "OutSystems/ClientRuntime/Main", "Auth_UserManagement.model"], function (exports, OutSystems, Auth_UserManagementModel) {
var OS = OutSystems.Internal;
var UserGroupRoleExportRec = (function (_super) {
__extends(UserGroupRoleExportRec, _super);
function UserGroupRoleExportRec(defaults) {
_super.apply(this, arguments);
}
UserGroupRoleExportRec.attributesToDeclare = function () {
return [
this.attr("ReviewedUserName", "reviewedUserNameAttr", "ReviewedUserName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ReviewedName", "reviewedNameAttr", "ReviewedName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("RoleName", "roleNameAttr", "RoleName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("GroupId", "groupIdAttr", "GroupId", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("GroupName", "groupNameAttr", "GroupName", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("LastReviewDate", "lastReviewDateAttr", "LastReviewDate", true, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("ReviewerUsername", "reviewerUsernameAttr", "ReviewerUsername", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("ReviewerName", "reviewerNameAttr", "ReviewerName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
UserGroupRoleExportRec.init();
return UserGroupRoleExportRec;
})(OS.DataTypes.GenericRecord);
Auth_UserManagementModel.UserGroupRoleExportRec = UserGroupRoleExportRec;

});
define("Auth_UserManagement.model$ApplicationGroupRec", ["exports", "OutSystems/ClientRuntime/Main", "Auth_UserManagement.model"], function (exports, OutSystems, Auth_UserManagementModel) {
var OS = OutSystems.Internal;
var ApplicationGroupRec = (function (_super) {
__extends(ApplicationGroupRec, _super);
function ApplicationGroupRec(defaults) {
_super.apply(this, arguments);
}
ApplicationGroupRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("GroupId", "groupIdAttr", "GroupId", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("ApplicationId", "applicationIdAttr", "ApplicationId", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
ApplicationGroupRec.init();
return ApplicationGroupRec;
})(OS.DataTypes.GenericRecord);
Auth_UserManagementModel.ApplicationGroupRec = ApplicationGroupRec;

});
define("Auth_UserManagement.model$SOTRoleNamesRec", ["exports", "OutSystems/ClientRuntime/Main", "Auth_UserManagement.model"], function (exports, OutSystems, Auth_UserManagementModel) {
var OS = OutSystems.Internal;
var SOTRoleNamesRec = (function (_super) {
__extends(SOTRoleNamesRec, _super);
function SOTRoleNamesRec(defaults) {
_super.apply(this, arguments);
}
SOTRoleNamesRec.attributesToDeclare = function () {
return [
this.attr("Role_SOT_FinanceApprover", "role_SOT_FinanceApproverAttr", "Role_SOT_FinanceApprover", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Role_SOT_FinanceReviewer", "role_SOT_FinanceReviewerAttr", "Role_SOT_FinanceReviewer", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Role_SOT_GCRReviewer", "role_SOT_GCRReviewerAttr", "Role_SOT_GCRReviewer", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Role_SOT_LocalApprover", "role_SOT_LocalApproverAttr", "Role_SOT_LocalApprover", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Role_SOT_LocalRequester", "role_SOT_LocalRequesterAttr", "Role_SOT_LocalRequester", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Role_SOT_Viewer", "role_SOT_ViewerAttr", "Role_SOT_Viewer", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
SOTRoleNamesRec.init();
return SOTRoleNamesRec;
})(OS.DataTypes.GenericRecord);
Auth_UserManagementModel.SOTRoleNamesRec = SOTRoleNamesRec;

});
define("Auth_UserManagement.model$GroupExtRec", ["exports", "OutSystems/ClientRuntime/Main", "Auth_UserManagement.model"], function (exports, OutSystems, Auth_UserManagementModel) {
var OS = OutSystems.Internal;
var GroupExtRec = (function (_super) {
__extends(GroupExtRec, _super);
function GroupExtRec(defaults) {
_super.apply(this, arguments);
}
GroupExtRec.attributesToDeclare = function () {
return [
this.attr("GroupId", "groupIdAttr", "GroupId", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("ReadOnly", "readOnlyAttr", "ReadOnly", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("CreatedBy", "createdByAttr", "CreatedBy", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("CreatedDate", "createdDateAttr", "CreatedDate", true, false, OS.DataTypes.DataTypes.Date, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
GroupExtRec.init();
return GroupExtRec;
})(OS.DataTypes.GenericRecord);
Auth_UserManagementModel.GroupExtRec = GroupExtRec;

});
define("Auth_UserManagement.model$tmpUserGroupRoleRec", ["exports", "OutSystems/ClientRuntime/Main", "Auth_UserManagement.model"], function (exports, OutSystems, Auth_UserManagementModel) {
var OS = OutSystems.Internal;
var tmpUserGroupRoleRec = (function (_super) {
__extends(tmpUserGroupRoleRec, _super);
function tmpUserGroupRoleRec(defaults) {
_super.apply(this, arguments);
}
tmpUserGroupRoleRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("GroupId", "groupIdAttr", "GroupId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("UserId", "userIdAttr", "UserId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("RoleId", "roleIdAttr", "RoleId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
tmpUserGroupRoleRec.init();
return tmpUserGroupRoleRec;
})(OS.DataTypes.GenericRecord);
Auth_UserManagementModel.tmpUserGroupRoleRec = tmpUserGroupRoleRec;

});
define("Auth_UserManagement.model$DualControlStatusRec", ["exports", "OutSystems/ClientRuntime/Main", "Auth_UserManagement.model"], function (exports, OutSystems, Auth_UserManagementModel) {
var OS = OutSystems.Internal;
var DualControlStatusRec = (function (_super) {
__extends(DualControlStatusRec, _super);
function DualControlStatusRec(defaults) {
_super.apply(this, arguments);
}
DualControlStatusRec.attributesToDeclare = function () {
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
DualControlStatusRec.init();
return DualControlStatusRec;
})(OS.DataTypes.GenericRecord);
Auth_UserManagementModel.DualControlStatusRec = DualControlStatusRec;

});
define("Auth_UserManagement.model$GroupRec", ["exports", "OutSystems/ClientRuntime/Main", "Auth_UserManagement.model"], function (exports, OutSystems, Auth_UserManagementModel) {
var OS = OutSystems.Internal;
var GroupRec = (function (_super) {
__extends(GroupRec, _super);
function GroupRec(defaults) {
_super.apply(this, arguments);
}
GroupRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("EntityId", "entityIdAttr", "EntityId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Name", "nameAttr", "Name", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Description", "descriptionAttr", "Description", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsActive", "isActiveAttr", "IsActive", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, true), 
this.attr("GroupTypeId", "groupTypeIdAttr", "GroupTypeId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("LLP_BaseEntityBancairId", "lLP_BaseEntityBancairIdAttr", "LLP_BaseEntityBancairId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
GroupRec.init();
return GroupRec;
})(OS.DataTypes.GenericRecord);
Auth_UserManagementModel.GroupRec = GroupRec;

});
define("Auth_UserManagement.model$UserPendingHRDeptReviewSTRec", ["exports", "OutSystems/ClientRuntime/Main", "Auth_UserManagement.model"], function (exports, OutSystems, Auth_UserManagementModel) {
var OS = OutSystems.Internal;
var UserPendingHRDeptReviewSTRec = (function (_super) {
__extends(UserPendingHRDeptReviewSTRec, _super);
function UserPendingHRDeptReviewSTRec(defaults) {
_super.apply(this, arguments);
}
UserPendingHRDeptReviewSTRec.attributesToDeclare = function () {
return [
this.attr("GroupId", "groupIdAttr", "GroupId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("GroupName", "groupNameAttr", "GroupName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("UserEmail", "userEmailAttr", "UserEmail", false, false, OS.DataTypes.DataTypes.Email, function () {
return "";
}, true), 
this.attr("Roles", "rolesAttr", "Roles", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("DepartmentChangeDate", "departmentChangeDateAttr", "DepartmentChangeDate", false, false, OS.DataTypes.DataTypes.Date, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("OldHRDepartment", "oldHRDepartmentAttr", "OldHRDepartment", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("NewHRDepartment", "newHRDepartmentAttr", "NewHRDepartment", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
UserPendingHRDeptReviewSTRec.init();
return UserPendingHRDeptReviewSTRec;
})(OS.DataTypes.GenericRecord);
Auth_UserManagementModel.UserPendingHRDeptReviewSTRec = UserPendingHRDeptReviewSTRec;

});
define("Auth_UserManagement.model$GroupTypeRec", ["exports", "OutSystems/ClientRuntime/Main", "Auth_UserManagement.model"], function (exports, OutSystems, Auth_UserManagementModel) {
var OS = OutSystems.Internal;
var GroupTypeRec = (function (_super) {
__extends(GroupTypeRec, _super);
function GroupTypeRec(defaults) {
_super.apply(this, arguments);
}
GroupTypeRec.attributesToDeclare = function () {
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
this.attr("ApplicationTypeId", "applicationTypeIdAttr", "ApplicationTypeId", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
GroupTypeRec.init();
return GroupTypeRec;
})(OS.DataTypes.GenericRecord);
Auth_UserManagementModel.GroupTypeRec = GroupTypeRec;

});
define("Auth_UserManagement.model$UserGroupManagerRec", ["exports", "OutSystems/ClientRuntime/Main", "Auth_UserManagement.model"], function (exports, OutSystems, Auth_UserManagementModel) {
var OS = OutSystems.Internal;
var UserGroupManagerRec = (function (_super) {
__extends(UserGroupManagerRec, _super);
function UserGroupManagerRec(defaults) {
_super.apply(this, arguments);
}
UserGroupManagerRec.attributesToDeclare = function () {
return [
this.attr("UserId", "userIdAttr", "UserId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("GroupId", "groupIdAttr", "GroupId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("GroupName", "groupNameAttr", "GroupName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsGroupManager", "isGroupManagerAttr", "IsGroupManager", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("OldGroupId", "oldGroupIdAttr", "OldGroupId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("IsSaved", "isSavedAttr", "IsSaved", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
UserGroupManagerRec.init();
return UserGroupManagerRec;
})(OS.DataTypes.GenericRecord);
Auth_UserManagementModel.UserGroupManagerRec = UserGroupManagerRec;

});
define("Auth_UserManagement.model$UserTeamAndGroupRec", ["exports", "OutSystems/ClientRuntime/Main", "Auth_UserManagement.model"], function (exports, OutSystems, Auth_UserManagementModel) {
var OS = OutSystems.Internal;
var UserTeamAndGroupRec = (function (_super) {
__extends(UserTeamAndGroupRec, _super);
function UserTeamAndGroupRec(defaults) {
_super.apply(this, arguments);
}
UserTeamAndGroupRec.attributesToDeclare = function () {
return [
this.attr("UserId", "userIdAttr", "UserId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("GroupId", "groupIdAttr", "GroupId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("GroupName", "groupNameAttr", "GroupName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("TeamId", "teamIdAttr", "TeamId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("TeamName", "teamNameAttr", "TeamName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsTeamLeader", "isTeamLeaderAttr", "IsTeamLeader", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("IsSaved", "isSavedAttr", "IsSaved", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, true), 
this.attr("OldGroupId", "oldGroupIdAttr", "OldGroupId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return OS.BuiltinFunctions.nullIdentifier();
}, true), 
this.attr("OldTeamId", "oldTeamIdAttr", "OldTeamId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return OS.BuiltinFunctions.nullIdentifier();
}, true)
].concat(_super.attributesToDeclare.call(this));
};
UserTeamAndGroupRec.init();
return UserTeamAndGroupRec;
})(OS.DataTypes.GenericRecord);
Auth_UserManagementModel.UserTeamAndGroupRec = UserTeamAndGroupRec;

});
define("Auth_UserManagement.model$UserGroupRoleRec", ["exports", "OutSystems/ClientRuntime/Main", "Auth_UserManagement.model"], function (exports, OutSystems, Auth_UserManagementModel) {
var OS = OutSystems.Internal;
var UserGroupRoleRec = (function (_super) {
__extends(UserGroupRoleRec, _super);
function UserGroupRoleRec(defaults) {
_super.apply(this, arguments);
}
UserGroupRoleRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("RoleId", "roleIdAttr", "RoleId", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("UserGroupId", "userGroupIdAttr", "UserGroupId", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("LastReviewDate", "lastReviewDateAttr", "LastReviewDate", true, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("ReviewerId", "reviewerIdAttr", "ReviewerId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
UserGroupRoleRec.init();
return UserGroupRoleRec;
})(OS.DataTypes.GenericRecord);
Auth_UserManagementModel.UserGroupRoleRec = UserGroupRoleRec;

});
define("Auth_UserManagement.model$UserExtRec", ["exports", "OutSystems/ClientRuntime/Main", "Auth_UserManagement.model"], function (exports, OutSystems, Auth_UserManagementModel) {
var OS = OutSystems.Internal;
var UserExtRec = (function (_super) {
__extends(UserExtRec, _super);
function UserExtRec(defaults) {
_super.apply(this, arguments);
}
UserExtRec.attributesToDeclare = function () {
return [
this.attr("UserId", "userIdAttr", "UserId", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("DeactivateAt", "deactivateAtAttr", "DeactivateAt", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("NotInLDAPCounter", "notInLDAPCounterAttr", "NotInLDAPCounter", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("isTestUser", "isTestUserAttr", "isTestUser", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("CreatedDate", "createdDateAttr", "CreatedDate", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("UpdatedDate", "updatedDateAttr", "UpdatedDate", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("OldHRDepartmentName", "oldHRDepartmentNameAttr", "OldHRDepartmentName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("NewHRDepartmentName", "newHRDepartmentNameAttr", "NewHRDepartmentName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("HRDepartmentChanged", "hRDepartmentChangedAttr", "HRDepartmentChanged", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("IntialLoadDone", "intialLoadDoneAttr", "IntialLoadDone", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return false;
}, true), 
this.attr("DepartmentChangedDate", "departmentChangedDateAttr", "DepartmentChangedDate", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
UserExtRec.init();
return UserExtRec;
})(OS.DataTypes.GenericRecord);
Auth_UserManagementModel.UserExtRec = UserExtRec;

});
define("Auth_UserManagement.model$DualControlGroupManagerRec", ["exports", "OutSystems/ClientRuntime/Main", "Auth_UserManagement.model"], function (exports, OutSystems, Auth_UserManagementModel) {
var OS = OutSystems.Internal;
var DualControlGroupManagerRec = (function (_super) {
__extends(DualControlGroupManagerRec, _super);
function DualControlGroupManagerRec(defaults) {
_super.apply(this, arguments);
}
DualControlGroupManagerRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("DualControlRequest", "dualControlRequestAttr", "DualControlRequest", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("UserId", "userIdAttr", "UserId", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("UserName", "userNameAttr", "UserName", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Name", "nameAttr", "Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("UserEmail", "userEmailAttr", "UserEmail", false, false, OS.DataTypes.DataTypes.Email, function () {
return "";
}, true), 
this.attr("ChangeType", "changeTypeAttr", "ChangeType", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("ChangeTypeGM", "changeTypeGMAttr", "ChangeTypeGM", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
DualControlGroupManagerRec.init();
return DualControlGroupManagerRec;
})(OS.DataTypes.GenericRecord);
Auth_UserManagementModel.DualControlGroupManagerRec = DualControlGroupManagerRec;

});
define("Auth_UserManagement.model$AuditHRDepartmentChangeRec", ["exports", "OutSystems/ClientRuntime/Main", "Auth_UserManagement.model"], function (exports, OutSystems, Auth_UserManagementModel) {
var OS = OutSystems.Internal;
var AuditHRDepartmentChangeRec = (function (_super) {
__extends(AuditHRDepartmentChangeRec, _super);
function AuditHRDepartmentChangeRec(defaults) {
_super.apply(this, arguments);
}
AuditHRDepartmentChangeRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("Username", "usernameAttr", "Username", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("OldHRDepartmentName", "oldHRDepartmentNameAttr", "OldHRDepartmentName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("NewHRDepartmentName", "newHRDepartmentNameAttr", "NewHRDepartmentName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("TS_HRDepartmentChanged", "tS_HRDepartmentChangedAttr", "TS_HRDepartmentChanged", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
AuditHRDepartmentChangeRec.init();
return AuditHRDepartmentChangeRec;
})(OS.DataTypes.GenericRecord);
Auth_UserManagementModel.AuditHRDepartmentChangeRec = AuditHRDepartmentChangeRec;

});
define("Auth_UserManagement.model$AllSOTRolesRec", ["exports", "OutSystems/ClientRuntime/Main", "Auth_UserManagement.model"], function (exports, OutSystems, Auth_UserManagementModel) {
var OS = OutSystems.Internal;
var AllSOTRolesRec = (function (_super) {
__extends(AllSOTRolesRec, _super);
function AllSOTRolesRec(defaults) {
_super.apply(this, arguments);
}
AllSOTRolesRec.attributesToDeclare = function () {
return [
this.attr("RoleId", "roleIdAttr", "RoleId", false, false, OS.DataTypes.DataTypes.LongInteger, function () {
return OS.DataTypes.LongInteger.defaultValue;
}, true), 
this.attr("RoleName", "roleNameAttr", "RoleName", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
AllSOTRolesRec.init();
return AllSOTRolesRec;
})(OS.DataTypes.GenericRecord);
Auth_UserManagementModel.AllSOTRolesRec = AllSOTRolesRec;

});
define("Auth_UserManagement.model$WLcandidatesRec", ["exports", "OutSystems/ClientRuntime/Main", "Auth_UserManagement.model"], function (exports, OutSystems, Auth_UserManagementModel) {
var OS = OutSystems.Internal;
var WLcandidatesRec = (function (_super) {
__extends(WLcandidatesRec, _super);
function WLcandidatesRec(defaults) {
_super.apply(this, arguments);
}
WLcandidatesRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Name", "nameAttr", "Name", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Username", "usernameAttr", "Username", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Password", "passwordAttr", "Password", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Email", "emailAttr", "Email", false, false, OS.DataTypes.DataTypes.Email, function () {
return "";
}, true), 
this.attr("MobilePhone", "mobilePhoneAttr", "MobilePhone", false, false, OS.DataTypes.DataTypes.PhoneNumber, function () {
return "";
}, true), 
this.attr("External_Id", "external_IdAttr", "External_Id", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Creation_Date", "creation_DateAttr", "Creation_Date", true, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("Last_Login", "last_LoginAttr", "Last_Login", false, false, OS.DataTypes.DataTypes.DateTime, function () {
return OS.DataTypes.DateTime.defaultValue;
}, true), 
this.attr("Is_Active", "is_ActiveAttr", "Is_Active", true, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, true), 
this.attr("Group", "groupAttr", "Group", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Team", "teamAttr", "Team", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Role", "roleAttr", "Role", false, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("GroupName", "groupNameAttr", "GroupName", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
WLcandidatesRec.init();
return WLcandidatesRec;
})(OS.DataTypes.GenericRecord);
Auth_UserManagementModel.WLcandidatesRec = WLcandidatesRec;

});
define("Auth_UserManagement.model$MenuItemRec", ["exports", "OutSystems/ClientRuntime/Main", "Auth_UserManagement.model"], function (exports, OutSystems, Auth_UserManagementModel) {
var OS = OutSystems.Internal;
var MenuItemRec = (function (_super) {
__extends(MenuItemRec, _super);
function MenuItemRec(defaults) {
_super.apply(this, arguments);
}
MenuItemRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Order", "orderAttr", "Order", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Caption", "captionAttr", "Caption", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true)
].concat(_super.attributesToDeclare.call(this));
};
MenuItemRec.init();
return MenuItemRec;
})(OS.DataTypes.GenericRecord);
Auth_UserManagementModel.MenuItemRec = MenuItemRec;

});
define("Auth_UserManagement.model$UserTeamRec", ["exports", "OutSystems/ClientRuntime/Main", "Auth_UserManagement.model"], function (exports, OutSystems, Auth_UserManagementModel) {
var OS = OutSystems.Internal;
var UserTeamRec = (function (_super) {
__extends(UserTeamRec, _super);
function UserTeamRec(defaults) {
_super.apply(this, arguments);
}
UserTeamRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("UserId", "userIdAttr", "UserId", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("TeamId", "teamIdAttr", "TeamId", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
UserTeamRec.init();
return UserTeamRec;
})(OS.DataTypes.GenericRecord);
Auth_UserManagementModel.UserTeamRec = UserTeamRec;

});
define("Auth_UserManagement.model$TeamRec", ["exports", "OutSystems/ClientRuntime/Main", "Auth_UserManagement.model"], function (exports, OutSystems, Auth_UserManagementModel) {
var OS = OutSystems.Internal;
var TeamRec = (function (_super) {
__extends(TeamRec, _super);
function TeamRec(defaults) {
_super.apply(this, arguments);
}
TeamRec.attributesToDeclare = function () {
return [
this.attr("Id", "idAttr", "Id", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("GroupId", "groupIdAttr", "GroupId", true, false, OS.DataTypes.DataTypes.Integer, function () {
return 0;
}, true), 
this.attr("Name", "nameAttr", "Name", true, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("Description", "descriptionAttr", "Description", false, false, OS.DataTypes.DataTypes.Text, function () {
return "";
}, true), 
this.attr("IsActive", "isActiveAttr", "IsActive", false, false, OS.DataTypes.DataTypes.Boolean, function () {
return true;
}, true)
].concat(_super.attributesToDeclare.call(this));
};
TeamRec.init();
return TeamRec;
})(OS.DataTypes.GenericRecord);
Auth_UserManagementModel.TeamRec = TeamRec;

});
define("Auth_UserManagement.model", ["exports", "OutSystems/ClientRuntime/Main"], function (exports, OutSystems) {
var OS = OutSystems.Internal;
var Auth_UserManagementModel = exports;
});
