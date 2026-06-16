using System;
using System.Data;
using System.Runtime.Serialization;
using System.Reflection;
using System.Xml;
using OutSystems.ObjectKeys;
using OutSystems.RuntimeCommon;
using OutSystems.HubEdition.RuntimePlatform;
using OutSystems.HubEdition.RuntimePlatform.Db;
using OutSystems.Internal.Db;
using System.Xml.Serialization;
using System.Collections;
using OutSystems.HubEdition.RuntimePlatform.NewRuntime;

namespace ssLLPSignOff_BL {
/// <summary>
/// Structure <code>STCreate_EmailAsyncQueueRequestStructure</code> that represents the Service Studio
///  structure <code>Create_EmailAsyncQueueRequest</code> <p> Description: </p>
/// </summary>
[Serializable()]
public partial struct STCreate_EmailAsyncQueueRequestStructure : ISerializable, ITypedRecord<STCreate_EmailAsyncQueueRequestStructure>, ISimpleRecord {
// Key K6kTINy6_vUuzFY7dDUfa_A
internal static readonly GlobalObjectKey IdSignOffRequestGuid = GlobalObjectKey.Parse("qPO0NpCN6EW2hhZTZoFg0g*_+zqLO1LOE+ttnWkQNFWtw");
internal static readonly GlobalObjectKey IdWorkflowTransitionId = GlobalObjectKey.Parse("qPO0NpCN6EW2hhZTZoFg0g*rApruj+Hvkedp7OOogcN9w");
internal static readonly GlobalObjectKey IdAsyncProcess = GlobalObjectKey.Parse("qPO0NpCN6EW2hhZTZoFg0g*u+foVB72x0iZ7U3J3mZe6A");
internal static readonly GlobalObjectKey IdWorkflowTypeId = GlobalObjectKey.Parse("qPO0NpCN6EW2hhZTZoFg0g*yElxUhrgjUmzJeyva042sg");
internal static readonly GlobalObjectKey IdCreateBy = GlobalObjectKey.Parse("qPO0NpCN6EW2hhZTZoFg0g*yf1lmjI3eUaIcTe_QkCzQQ");

public static void EnsureInitialized(){}
[System.Xml.Serialization.XmlElement("SignOffRequestGuid")]
public string ssSignOffRequestGuid;

[System.Xml.Serialization.XmlElement("WorkflowTransitionId")]
public long ssWorkflowTransitionId;

[System.Xml.Serialization.XmlElement("AsyncProcess")]
public string ssAsyncProcess;

[System.Xml.Serialization.XmlElement("WorkflowTypeId")]
public int ssWorkflowTypeId;

[System.Xml.Serialization.XmlElement("CreateBy")]
public string ssCreateBy;


public BitArray OptimizedAttributes;

public STCreate_EmailAsyncQueueRequestStructure(params string[] dummy) {
OptimizedAttributes = null;
ssSignOffRequestGuid = "";
ssWorkflowTransitionId = 0L;
ssAsyncProcess = "";
ssWorkflowTypeId = 0;
ssCreateBy = "";
}

public BitArray[] GetDefaultOptimizedValues(){
    BitArray[] all = new BitArray[0];
    return all;
}

public BitArray[] AllOptimizedAttributes{
set{
    if(value == null){
    }else{
    }
}
get{
    BitArray[] all = new BitArray[0];
    return all;
}
}

/// <summary>
/// Read a record from database
/// </summary>
/// <param name="r"> Data base reader</param>
/// <param name="index"> index</param>
public void Read( IDataReader r, ref int index) {
ssSignOffRequestGuid = r.ReadText(index++, "Create_EmailAsyncQueueRequest.SignOffRequestGuid", "");
ssWorkflowTransitionId = r.ReadLongInteger(index++, "Create_EmailAsyncQueueRequest.WorkflowTransitionId", 0L);
ssAsyncProcess = r.ReadText(index++, "Create_EmailAsyncQueueRequest.AsyncProcess", "");
ssWorkflowTypeId = r.ReadInteger(index++, "Create_EmailAsyncQueueRequest.WorkflowTypeId", 0);
ssCreateBy = r.ReadText(index++, "Create_EmailAsyncQueueRequest.CreateBy", "");
}
/// <summary>
/// Read from database
/// </summary>
/// <param name="r"> Data reader</param>
public void ReadDB( IDataReader r) {
int index = 0;
Read(r, ref index);
}

/// <summary>
/// Read from record
/// </summary>
/// <param name="r"> Record</param>
public void ReadIM(STCreate_EmailAsyncQueueRequestStructure r) {
this = r;
}


public static bool operator == (STCreate_EmailAsyncQueueRequestStructure a, STCreate_EmailAsyncQueueRequestStructure b) {
if (a.ssSignOffRequestGuid != b.ssSignOffRequestGuid) return false;
if (a.ssWorkflowTransitionId != b.ssWorkflowTransitionId) return false;
if (a.ssAsyncProcess != b.ssAsyncProcess) return false;
if (a.ssWorkflowTypeId != b.ssWorkflowTypeId) return false;
if (a.ssCreateBy != b.ssCreateBy) return false;
return true;
}

public static bool operator != (STCreate_EmailAsyncQueueRequestStructure a, STCreate_EmailAsyncQueueRequestStructure b) {
return !(a==b);
}

public override bool Equals(object o) {
if (o.GetType() != typeof (STCreate_EmailAsyncQueueRequestStructure)) return false;
return (this == (STCreate_EmailAsyncQueueRequestStructure)o);
}

public override int GetHashCode() {
try {
return base.GetHashCode()
 ^ ssSignOffRequestGuid.GetHashCode()
 ^ ssWorkflowTransitionId.GetHashCode()
 ^ ssAsyncProcess.GetHashCode()
 ^ ssWorkflowTypeId.GetHashCode()
 ^ ssCreateBy.GetHashCode()
;
} catch {
return base.GetHashCode();
}
}

public void GetObjectData( SerializationInfo info, StreamingContext context) {
Type objInfo = this.GetType();
FieldInfo[] fields;
fields = objInfo.GetFields( BindingFlags.NonPublic | BindingFlags.Instance | BindingFlags.Public);
for (int i = 0; i < fields.Length; i++)
if (fields[i].FieldType.IsSerializable)
info.AddValue (fields[i].Name, fields[i].GetValue(this));
}

public STCreate_EmailAsyncQueueRequestStructure (SerializationInfo info, StreamingContext context) {
OptimizedAttributes = null;
ssSignOffRequestGuid = "";
ssWorkflowTransitionId = 0L;
ssAsyncProcess = "";
ssWorkflowTypeId = 0;
ssCreateBy = "";
Type objInfo = this.GetType();
FieldInfo fieldInfo = null;
fieldInfo = objInfo.GetField("ssSignOffRequestGuid", BindingFlags.NonPublic | BindingFlags.Instance | BindingFlags.Public);
if (fieldInfo == null) {
throw new Exception("The field named 'ssSignOffRequestGuid' was not found.");
}
if (fieldInfo.FieldType.IsSerializable) {
ssSignOffRequestGuid = (string) info.GetValue(fieldInfo.Name, fieldInfo.FieldType);
}
fieldInfo = objInfo.GetField("ssWorkflowTransitionId", BindingFlags.NonPublic | BindingFlags.Instance | BindingFlags.Public);
if (fieldInfo == null) {
throw new Exception("The field named 'ssWorkflowTransitionId' was not found.");
}
if (fieldInfo.FieldType.IsSerializable) {
ssWorkflowTransitionId = (long) info.GetValue(fieldInfo.Name, fieldInfo.FieldType);
}
fieldInfo = objInfo.GetField("ssAsyncProcess", BindingFlags.NonPublic | BindingFlags.Instance | BindingFlags.Public);
if (fieldInfo == null) {
throw new Exception("The field named 'ssAsyncProcess' was not found.");
}
if (fieldInfo.FieldType.IsSerializable) {
ssAsyncProcess = (string) info.GetValue(fieldInfo.Name, fieldInfo.FieldType);
}
fieldInfo = objInfo.GetField("ssWorkflowTypeId", BindingFlags.NonPublic | BindingFlags.Instance | BindingFlags.Public);
if (fieldInfo == null) {
throw new Exception("The field named 'ssWorkflowTypeId' was not found.");
}
if (fieldInfo.FieldType.IsSerializable) {
ssWorkflowTypeId = (int) info.GetValue(fieldInfo.Name, fieldInfo.FieldType);
}
fieldInfo = objInfo.GetField("ssCreateBy", BindingFlags.NonPublic | BindingFlags.Instance | BindingFlags.Public);
if (fieldInfo == null) {
throw new Exception("The field named 'ssCreateBy' was not found.");
}
if (fieldInfo.FieldType.IsSerializable) {
ssCreateBy = (string) info.GetValue(fieldInfo.Name, fieldInfo.FieldType);
}
}

public void RecursiveReset() {
}

public void InternalRecursiveSave() {
}


public STCreate_EmailAsyncQueueRequestStructure Duplicate() {
STCreate_EmailAsyncQueueRequestStructure t;
t.ssSignOffRequestGuid = this.ssSignOffRequestGuid;
t.ssWorkflowTransitionId = this.ssWorkflowTransitionId;
t.ssAsyncProcess = this.ssAsyncProcess;
t.ssWorkflowTypeId = this.ssWorkflowTypeId;
t.ssCreateBy = this.ssCreateBy;
t.OptimizedAttributes = null;
return t;
}

IRecord IRecord.Duplicate() {
return Duplicate();
}

public void ToXml(Object parent, System.Xml.XmlElement baseElem, String fieldName, int detailLevel) {
System.Xml.XmlElement recordElem = VarValue.AppendChild(baseElem, "Structure");
if (fieldName != null) {
    VarValue.AppendAttribute(recordElem, "debug.field", fieldName);
    fieldName = fieldName.ToLowerInvariant();
}
if (detailLevel > 0) {
if (!VarValue.FieldIsOptimized(parent, fieldName + ".SignOffRequestGuid")) VarValue.AppendAttribute(recordElem, "SignOffRequestGuid", ssSignOffRequestGuid, detailLevel, TypeKind.Text); else VarValue.AppendOptimizedAttribute(recordElem, "SignOffRequestGuid");
if (!VarValue.FieldIsOptimized(parent, fieldName + ".WorkflowTransitionId")) VarValue.AppendAttribute(recordElem, "WorkflowTransitionId", ssWorkflowTransitionId, detailLevel, TypeKind.LongInteger); else VarValue.AppendOptimizedAttribute(recordElem, "WorkflowTransitionId");
if (!VarValue.FieldIsOptimized(parent, fieldName + ".AsyncProcess")) VarValue.AppendAttribute(recordElem, "AsyncProcess", ssAsyncProcess, detailLevel, TypeKind.Text); else VarValue.AppendOptimizedAttribute(recordElem, "AsyncProcess");
if (!VarValue.FieldIsOptimized(parent, fieldName + ".WorkflowTypeId")) VarValue.AppendAttribute(recordElem, "WorkflowTypeId", ssWorkflowTypeId, detailLevel, TypeKind.Integer); else VarValue.AppendOptimizedAttribute(recordElem, "WorkflowTypeId");
if (!VarValue.FieldIsOptimized(parent, fieldName + ".CreateBy")) VarValue.AppendAttribute(recordElem, "CreateBy", ssCreateBy, detailLevel, TypeKind.Text); else VarValue.AppendOptimizedAttribute(recordElem, "CreateBy");
} else {
VarValue.AppendDeferredEvaluationElement(recordElem);
}
}

public void EvaluateFields(VarValue variable, Object parent, String baseName, String fields) {
String head = VarValue.GetHead(fields);
String tail = VarValue.GetTail(fields);
variable.Found = false;
if (head == "signoffrequestguid") {
if (!VarValue.FieldIsOptimized(parent, baseName + ".SignOffRequestGuid")) variable.Value = ssSignOffRequestGuid; else variable.Optimized = true;
} else if (head == "workflowtransitionid") {
if (!VarValue.FieldIsOptimized(parent, baseName + ".WorkflowTransitionId")) variable.Value = ssWorkflowTransitionId; else variable.Optimized = true;
} else if (head == "asyncprocess") {
if (!VarValue.FieldIsOptimized(parent, baseName + ".AsyncProcess")) variable.Value = ssAsyncProcess; else variable.Optimized = true;
} else if (head == "workflowtypeid") {
if (!VarValue.FieldIsOptimized(parent, baseName + ".WorkflowTypeId")) variable.Value = ssWorkflowTypeId; else variable.Optimized = true;
} else if (head == "createby") {
if (!VarValue.FieldIsOptimized(parent, baseName + ".CreateBy")) variable.Value = ssCreateBy; else variable.Optimized = true;
}
if (variable.Found && tail != null) variable.EvaluateFields(this, head, tail);
}

public bool ChangedAttributeGet(GlobalObjectKey key) {
throw new Exception("Method not Supported");
}

public bool OptimizedAttributeGet(GlobalObjectKey key) {
throw new Exception("Method not Supported");
}

public object AttributeGet(GlobalObjectKey key) {
if (key == IdSignOffRequestGuid) {
return ssSignOffRequestGuid;
} else if (key == IdWorkflowTransitionId) {
return ssWorkflowTransitionId;
} else if (key == IdAsyncProcess) {
return ssAsyncProcess;
} else if (key == IdWorkflowTypeId) {
return ssWorkflowTypeId;
} else if (key == IdCreateBy) {
return ssCreateBy;
} else {
throw new Exception("Invalid key");
}
}
public void FillFromOther(IRecord other) {
if (other == null) return;
ssSignOffRequestGuid = (string) other.AttributeGet(IdSignOffRequestGuid);
ssWorkflowTransitionId = (long) other.AttributeGet(IdWorkflowTransitionId);
ssAsyncProcess = (string) other.AttributeGet(IdAsyncProcess);
ssWorkflowTypeId = (int) other.AttributeGet(IdWorkflowTypeId);
ssCreateBy = (string) other.AttributeGet(IdCreateBy);
}
} // STCreate_EmailAsyncQueueRequestStructure
/// <summary>
/// Structure <code>RCCreate_EmailAsyncQueueRequestRecord</code>
/// </summary>
[Serializable()]
public partial struct RCCreate_EmailAsyncQueueRequestRecord : ISerializable, ITypedRecord<RCCreate_EmailAsyncQueueRequestRecord> {
// Key KAprV4mCeaUe08_JzyzXhNA
internal static readonly GlobalObjectKey IdCreate_EmailAsyncQueueRequest = GlobalObjectKey.Parse("2UmDmepsh0WSfJ_D1JexCA*APe_InZSvHi8puXtwBNTTA");

public static void EnsureInitialized(){}
[System.Xml.Serialization.XmlElement("Create_EmailAsyncQueueRequest")]
public STCreate_EmailAsyncQueueRequestStructure ssSTCreate_EmailAsyncQueueRequest;


public static implicit operator STCreate_EmailAsyncQueueRequestStructure( RCCreate_EmailAsyncQueueRequestRecord r) {
return r.ssSTCreate_EmailAsyncQueueRequest;
}

public static implicit operator RCCreate_EmailAsyncQueueRequestRecord (STCreate_EmailAsyncQueueRequestStructure r) {
RCCreate_EmailAsyncQueueRequestRecord res = new RCCreate_EmailAsyncQueueRequestRecord (null);
res.ssSTCreate_EmailAsyncQueueRequest = r;
return res;
}

public BitArray OptimizedAttributes;

public RCCreate_EmailAsyncQueueRequestRecord(params string[] dummy) {
OptimizedAttributes = null;
ssSTCreate_EmailAsyncQueueRequest = new STCreate_EmailAsyncQueueRequestStructure(null);
}

public BitArray[] GetDefaultOptimizedValues(){
    BitArray[] all = new BitArray[1];
    all[0] = null;
    return all;
}

public BitArray[] AllOptimizedAttributes{
set{
    if(value == null){
    }else{
    ssSTCreate_EmailAsyncQueueRequest.OptimizedAttributes = value[0];
    }
}
get{
    BitArray[] all = new BitArray[1];
    all[0] = null;
    return all;
}
}

/// <summary>
/// Read a record from database
/// </summary>
/// <param name="r"> Data base reader</param>
/// <param name="index"> index</param>
public void Read( IDataReader r, ref int index) {
ssSTCreate_EmailAsyncQueueRequest.Read( r, ref index);
}
/// <summary>
/// Read from database
/// </summary>
/// <param name="r"> Data reader</param>
public void ReadDB( IDataReader r) {
int index = 0;
Read(r, ref index);
}

/// <summary>
/// Read from record
/// </summary>
/// <param name="r"> Record</param>
public void ReadIM(RCCreate_EmailAsyncQueueRequestRecord r) {
this = r;
}


public static bool operator == (RCCreate_EmailAsyncQueueRequestRecord a, RCCreate_EmailAsyncQueueRequestRecord b) {
if (a.ssSTCreate_EmailAsyncQueueRequest != b.ssSTCreate_EmailAsyncQueueRequest) return false;
return true;
}

public static bool operator != (RCCreate_EmailAsyncQueueRequestRecord a, RCCreate_EmailAsyncQueueRequestRecord b) {
return !(a==b);
}

public override bool Equals(object o) {
if (o.GetType() != typeof (RCCreate_EmailAsyncQueueRequestRecord)) return false;
return (this == (RCCreate_EmailAsyncQueueRequestRecord)o);
}

public override int GetHashCode() {
try {
return base.GetHashCode()
 ^ ssSTCreate_EmailAsyncQueueRequest.GetHashCode()
;
} catch {
return base.GetHashCode();
}
}

public void GetObjectData( SerializationInfo info, StreamingContext context) {
Type objInfo = this.GetType();
FieldInfo[] fields;
fields = objInfo.GetFields( BindingFlags.NonPublic | BindingFlags.Instance | BindingFlags.Public);
for (int i = 0; i < fields.Length; i++)
if (fields[i].FieldType.IsSerializable)
info.AddValue (fields[i].Name, fields[i].GetValue(this));
}

public RCCreate_EmailAsyncQueueRequestRecord (SerializationInfo info, StreamingContext context) {
OptimizedAttributes = null;
ssSTCreate_EmailAsyncQueueRequest = new STCreate_EmailAsyncQueueRequestStructure(null);
Type objInfo = this.GetType();
FieldInfo fieldInfo = null;
fieldInfo = objInfo.GetField("ssSTCreate_EmailAsyncQueueRequest", BindingFlags.NonPublic | BindingFlags.Instance | BindingFlags.Public);
if (fieldInfo == null) {
throw new Exception("The field named 'ssSTCreate_EmailAsyncQueueRequest' was not found.");
}
if (fieldInfo.FieldType.IsSerializable) {
ssSTCreate_EmailAsyncQueueRequest = (STCreate_EmailAsyncQueueRequestStructure) info.GetValue(fieldInfo.Name, fieldInfo.FieldType);
}
}

public void RecursiveReset() {
ssSTCreate_EmailAsyncQueueRequest.RecursiveReset();
}

public void InternalRecursiveSave() {
ssSTCreate_EmailAsyncQueueRequest.InternalRecursiveSave();
}


public RCCreate_EmailAsyncQueueRequestRecord Duplicate() {
RCCreate_EmailAsyncQueueRequestRecord t;
t.ssSTCreate_EmailAsyncQueueRequest = (STCreate_EmailAsyncQueueRequestStructure)this.ssSTCreate_EmailAsyncQueueRequest.Duplicate();
t.OptimizedAttributes = null;
return t;
}

IRecord IRecord.Duplicate() {
return Duplicate();
}

public void ToXml(Object parent, System.Xml.XmlElement baseElem, String fieldName, int detailLevel) {
System.Xml.XmlElement recordElem = VarValue.AppendChild(baseElem, "Record");
if (fieldName != null) {
    VarValue.AppendAttribute(recordElem, "debug.field", fieldName);
}
if (detailLevel > 0) {
ssSTCreate_EmailAsyncQueueRequest.ToXml(this, recordElem, "Create_EmailAsyncQueueRequest", detailLevel - 1);
} else {
VarValue.AppendDeferredEvaluationElement(recordElem);
}
}

public void EvaluateFields(VarValue variable, Object parent, String baseName, String fields) {
String head = VarValue.GetHead(fields);
String tail = VarValue.GetTail(fields);
variable.Found = false;
if (head == "create_emailasyncqueuerequest") {
if (!VarValue.FieldIsOptimized(parent, baseName + ".Create_EmailAsyncQueueRequest")) variable.Value = ssSTCreate_EmailAsyncQueueRequest; else variable.Optimized = true;
variable.SetFieldName("create_emailasyncqueuerequest");
}
if (variable.Found && tail != null) variable.EvaluateFields(this, head, tail);
}

public bool ChangedAttributeGet(GlobalObjectKey key) {
throw new Exception("Method not Supported");
}

public bool OptimizedAttributeGet(GlobalObjectKey key) {
throw new Exception("Method not Supported");
}

public object AttributeGet(GlobalObjectKey key) {
if (key == IdCreate_EmailAsyncQueueRequest) {
return ssSTCreate_EmailAsyncQueueRequest;
} else {
throw new Exception("Invalid key");
}
}
public void FillFromOther(IRecord other) {
if (other == null) return;
ssSTCreate_EmailAsyncQueueRequest.FillFromOther((IRecord) other.AttributeGet(IdCreate_EmailAsyncQueueRequest));
}
} // RCCreate_EmailAsyncQueueRequestRecord
/// <summary>
/// RecordList type <code>RLCreate_EmailAsyncQueueRequestRecordList</code> that represents a record
///  list of <code>Create_EmailAsyncQueueRequest</code>
/// </summary>
// Sequence Create_EmailAsyncQueueRequest
[Serializable()]
public partial class RLCreate_EmailAsyncQueueRequestRecordList : GenericRecordList<RCCreate_EmailAsyncQueueRequestRecord>, IEnumerable, IEnumerator, ISerializable {
public static void EnsureInitialized(){}

protected override RCCreate_EmailAsyncQueueRequestRecord GetElementDefaultValue() {
return new RCCreate_EmailAsyncQueueRequestRecord("");
}

public T[] ToArray<T>(Func<RCCreate_EmailAsyncQueueRequestRecord, T> converter) {
  return ToArray(this, converter);
}

public static T[] ToArray<T>(RLCreate_EmailAsyncQueueRequestRecordList recordlist, Func<RCCreate_EmailAsyncQueueRequestRecord, T> converter) {
  return InnerToArray(recordlist, converter);
}
public static implicit operator RLCreate_EmailAsyncQueueRequestRecordList(RCCreate_EmailAsyncQueueRequestRecord[] array) {
  RLCreate_EmailAsyncQueueRequestRecordList result = new RLCreate_EmailAsyncQueueRequestRecordList();
result.InnerFromArray(array);
    return result;
}

public static RLCreate_EmailAsyncQueueRequestRecordList ToList<T>(T[] array, Func <T, RCCreate_EmailAsyncQueueRequestRecord> converter) {
  RLCreate_EmailAsyncQueueRequestRecordList result = new RLCreate_EmailAsyncQueueRequestRecordList();
  result.InnerFromArray(array, converter);
  return result;
}

public static RLCreate_EmailAsyncQueueRequestRecordList FromRestList<T>(RestList<T> restList, Func <T, RCCreate_EmailAsyncQueueRequestRecord> converter) {
  RLCreate_EmailAsyncQueueRequestRecordList result = new RLCreate_EmailAsyncQueueRequestRecordList();
  result.InnerFromRestList(restList, converter);
  return result;
}
/// <summary>
/// Default Constructor
/// </summary>
public RLCreate_EmailAsyncQueueRequestRecordList() : base() {
}

/// <summary>
/// Constructor with transaction parameter
/// </summary>
/// <param name="trans"> IDbTransaction Parameter</param>
[Obsolete("Use the Default Constructor and set the Transaction afterwards.")]
public RLCreate_EmailAsyncQueueRequestRecordList(IDbTransaction trans) : base (trans) {
}

/// <summary>
/// Constructor with transaction parameter and alternate read method
/// </summary>
/// <param name="trans"> IDbTransaction Parameter</param>
/// <param name="alternateReadDBMethod"> Alternate Read Method</param>
[Obsolete("Use the Default Constructor and set the Transaction afterwards.")]
public RLCreate_EmailAsyncQueueRequestRecordList(IDbTransaction trans, ReadDBMethodDelegate alternateReadDBMethod): this(trans) {
this.alternateReadDBMethod = alternateReadDBMethod;
}

/// <summary>
/// Constructor declaration for serialization
/// </summary>
/// <param name="info"> SerializationInfo</param>
/// <param name="context"> StreamingContext</param>
public RLCreate_EmailAsyncQueueRequestRecordList(SerializationInfo info, StreamingContext context) : base (info, context) {
}

public override BitArray[] GetDefaultOptimizedValues(){
BitArray[] def = new BitArray[1];
def[0] = null;
return def;
}
/// <summary>
/// Create as new list
/// </summary>
/// <returns>The new record list</returns>
protected override OSList<RCCreate_EmailAsyncQueueRequestRecord> NewList() {
return new RLCreate_EmailAsyncQueueRequestRecordList();
}


} // RLCreate_EmailAsyncQueueRequestRecordList
/// <summary>
/// RecordList type <code>RLCreate_EmailAsyncQueueRequestList</code> that represents a record list of
///  <code>Create_EmailAsyncQueueRequest</code>
/// </summary>
// Sequence Create_EmailAsyncQueueRequest
[Serializable()]
public partial class RLCreate_EmailAsyncQueueRequestList : GenericRecordList<STCreate_EmailAsyncQueueRequestStructure>, IEnumerable, IEnumerator, ISerializable {
public static void EnsureInitialized(){}

protected override STCreate_EmailAsyncQueueRequestStructure GetElementDefaultValue() {
return new STCreate_EmailAsyncQueueRequestStructure("");
}

public T[] ToArray<T>(Func<STCreate_EmailAsyncQueueRequestStructure, T> converter) {
  return ToArray(this, converter);
}

public static T[] ToArray<T>(RLCreate_EmailAsyncQueueRequestList recordlist, Func<STCreate_EmailAsyncQueueRequestStructure, T> converter) {
  return InnerToArray(recordlist, converter);
}
public static implicit operator RLCreate_EmailAsyncQueueRequestList(STCreate_EmailAsyncQueueRequestStructure[] array) {
  RLCreate_EmailAsyncQueueRequestList result = new RLCreate_EmailAsyncQueueRequestList();
result.InnerFromArray(array);
    return result;
}

public static RLCreate_EmailAsyncQueueRequestList ToList<T>(T[] array, Func <T, STCreate_EmailAsyncQueueRequestStructure> converter) {
  RLCreate_EmailAsyncQueueRequestList result = new RLCreate_EmailAsyncQueueRequestList();
  result.InnerFromArray(array, converter);
  return result;
}

public static RLCreate_EmailAsyncQueueRequestList FromRestList<T>(RestList<T> restList, Func <T, STCreate_EmailAsyncQueueRequestStructure> converter) {
  RLCreate_EmailAsyncQueueRequestList result = new RLCreate_EmailAsyncQueueRequestList();
  result.InnerFromRestList(restList, converter);
  return result;
}
/// <summary>
/// Default Constructor
/// </summary>
public RLCreate_EmailAsyncQueueRequestList() : base() {
}

/// <summary>
/// Constructor with transaction parameter
/// </summary>
/// <param name="trans"> IDbTransaction Parameter</param>
[Obsolete("Use the Default Constructor and set the Transaction afterwards.")]
public RLCreate_EmailAsyncQueueRequestList(IDbTransaction trans) : base (trans) {
}

/// <summary>
/// Constructor with transaction parameter and alternate read method
/// </summary>
/// <param name="trans"> IDbTransaction Parameter</param>
/// <param name="alternateReadDBMethod"> Alternate Read Method</param>
[Obsolete("Use the Default Constructor and set the Transaction afterwards.")]
public RLCreate_EmailAsyncQueueRequestList(IDbTransaction trans, ReadDBMethodDelegate alternateReadDBMethod): this(trans) {
this.alternateReadDBMethod = alternateReadDBMethod;
}

/// <summary>
/// Constructor declaration for serialization
/// </summary>
/// <param name="info"> SerializationInfo</param>
/// <param name="context"> StreamingContext</param>
public RLCreate_EmailAsyncQueueRequestList(SerializationInfo info, StreamingContext context) : base (info, context) {
}

public override BitArray[] GetDefaultOptimizedValues(){
BitArray[] def = new BitArray[0];
return def;
}
/// <summary>
/// Create as new list
/// </summary>
/// <returns>The new record list</returns>
protected override OSList<STCreate_EmailAsyncQueueRequestStructure> NewList() {
return new RLCreate_EmailAsyncQueueRequestList();
}


} // RLCreate_EmailAsyncQueueRequestList
}

namespace ssLLPSignOff_BL {
[XmlType("Create_EmailAsyncQueueRequest")]
public class WORCCreate_EmailAsyncQueueRequestRecord {
[System.Xml.Serialization.XmlElement("SignOffRequestGuid")]
public string varWSSignOffRequestGuid;

[System.Xml.Serialization.XmlElement("WorkflowTransitionId")]
public long varWSWorkflowTransitionId;

[System.Xml.Serialization.XmlElement("AsyncProcess")]
public string varWSAsyncProcess;

[System.Xml.Serialization.XmlElement("WorkflowTypeId")]
public int varWSWorkflowTypeId;

[System.Xml.Serialization.XmlElement("CreateBy")]
public string varWSCreateBy;

public WORCCreate_EmailAsyncQueueRequestRecord() {
varWSSignOffRequestGuid = (string) "";
varWSWorkflowTransitionId = (long) 0L;
varWSAsyncProcess = (string) "";
varWSWorkflowTypeId = (int) 0;
varWSCreateBy = (string) "";
}

public WORCCreate_EmailAsyncQueueRequestRecord(STCreate_EmailAsyncQueueRequestStructure r) {
varWSSignOffRequestGuid = BaseAppUtils.RemoveControlChars(r.ssSignOffRequestGuid);
varWSWorkflowTransitionId = (long)r.ssWorkflowTransitionId;
varWSAsyncProcess = BaseAppUtils.RemoveControlChars(r.ssAsyncProcess);
varWSWorkflowTypeId = (int)r.ssWorkflowTypeId;
varWSCreateBy = BaseAppUtils.RemoveControlChars(r.ssCreateBy);
}

public static RLCreate_EmailAsyncQueueRequestList ToRecordList(WORCCreate_EmailAsyncQueueRequestRecord[] array) {
RLCreate_EmailAsyncQueueRequestList rl = new RLCreate_EmailAsyncQueueRequestList();
if (array != null) {
foreach (WORCCreate_EmailAsyncQueueRequestRecord val in array) {
rl.Append(val);
}
}
return rl;
}

public static WORCCreate_EmailAsyncQueueRequestRecord[] FromRecordList(RLCreate_EmailAsyncQueueRequestList rl) {
WORCCreate_EmailAsyncQueueRequestRecord[] array = new WORCCreate_EmailAsyncQueueRequestRecord[rl == null ? 0 : rl.Length];
for (int i = 0; i < array.Length; i++) {
array[i] = rl.Data[i];
}
return array;
}
}
}

namespace ssLLPSignOff_BL {
partial struct RCCreate_EmailAsyncQueueRequestRecord {
public static implicit operator WORCCreate_EmailAsyncQueueRequestRecord(RCCreate_EmailAsyncQueueRequestRecord r) {
return new WORCCreate_EmailAsyncQueueRequestRecord(r.ssSTCreate_EmailAsyncQueueRequest);
}

public static implicit operator RCCreate_EmailAsyncQueueRequestRecord(WORCCreate_EmailAsyncQueueRequestRecord w) {
RCCreate_EmailAsyncQueueRequestRecord r = new RCCreate_EmailAsyncQueueRequestRecord("");
if (w != null) {
r.ssSTCreate_EmailAsyncQueueRequest = w;
}
return r;
}

}

partial struct STCreate_EmailAsyncQueueRequestStructure {
public static implicit operator WORCCreate_EmailAsyncQueueRequestRecord(STCreate_EmailAsyncQueueRequestStructure r) {
return new WORCCreate_EmailAsyncQueueRequestRecord(r);
}

public static implicit operator STCreate_EmailAsyncQueueRequestStructure(WORCCreate_EmailAsyncQueueRequestRecord w) {
STCreate_EmailAsyncQueueRequestStructure r = new STCreate_EmailAsyncQueueRequestStructure("");
if (w != null) {
r.ssSignOffRequestGuid = ((string) w.varWSSignOffRequestGuid ?? "");
r.ssWorkflowTransitionId = (long) w.varWSWorkflowTransitionId;
r.ssAsyncProcess = ((string) w.varWSAsyncProcess ?? "");
r.ssWorkflowTypeId = (int) w.varWSWorkflowTypeId;
r.ssCreateBy = ((string) w.varWSCreateBy ?? "");
}
return r;
}

}
}


namespace ssLLPSignOff_BL {
[Serializable()]
public partial class WORLCreate_EmailAsyncQueueRequestRecordList {
public WORCCreate_EmailAsyncQueueRequestRecord[] Array;


public WORLCreate_EmailAsyncQueueRequestRecordList(WORCCreate_EmailAsyncQueueRequestRecord[] r) {
if (r == null)
Array = new WORCCreate_EmailAsyncQueueRequestRecord[0];
else
Array = r;
}
public WORLCreate_EmailAsyncQueueRequestRecordList() {
Array = new WORCCreate_EmailAsyncQueueRequestRecord[0];
}

public WORLCreate_EmailAsyncQueueRequestRecordList(RLCreate_EmailAsyncQueueRequestRecordList rl) {
rl= (RLCreate_EmailAsyncQueueRequestRecordList) rl.Duplicate();
Array = new WORCCreate_EmailAsyncQueueRequestRecord[rl.Length];
while (!rl.Eof) {
Array[rl.CurrentRowNumber] = new WORCCreate_EmailAsyncQueueRequestRecord(rl.CurrentRec);
rl.Advance();
}
}

}
}

namespace ssLLPSignOff_BL {
partial class RLCreate_EmailAsyncQueueRequestRecordList {
public static implicit operator RLCreate_EmailAsyncQueueRequestRecordList(WORCCreate_EmailAsyncQueueRequestRecord[] array) {
RLCreate_EmailAsyncQueueRequestRecordList rl = new RLCreate_EmailAsyncQueueRequestRecordList();
if (array != null) {
foreach (WORCCreate_EmailAsyncQueueRequestRecord val in array) {
rl.Append((RCCreate_EmailAsyncQueueRequestRecord) val);
}
}
return rl;
}
public static implicit operator WORCCreate_EmailAsyncQueueRequestRecord[](RLCreate_EmailAsyncQueueRequestRecordList rl) {
WORCCreate_EmailAsyncQueueRequestRecord[] array = new WORCCreate_EmailAsyncQueueRequestRecord[rl == null ? 0 : rl.Length];
for(int i = 0; i < array.Length; i++) {
array[i] = (RCCreate_EmailAsyncQueueRequestRecord) rl.Data[i];
}
return array;
}
}
}

namespace ssLLPSignOff_BL {
partial class WORLCreate_EmailAsyncQueueRequestRecordList {
public static implicit operator RLCreate_EmailAsyncQueueRequestRecordList(WORLCreate_EmailAsyncQueueRequestRecordList w) {
return w.Array;
}
public static implicit operator WORLCreate_EmailAsyncQueueRequestRecordList(RLCreate_EmailAsyncQueueRequestRecordList rl) {
return new WORLCreate_EmailAsyncQueueRequestRecordList(rl);
}
public static implicit operator WORCCreate_EmailAsyncQueueRequestRecord[](WORLCreate_EmailAsyncQueueRequestRecordList w) {
if(w != null) {
return w.Array;
}
return null;
}
public static implicit operator WORLCreate_EmailAsyncQueueRequestRecordList(WORCCreate_EmailAsyncQueueRequestRecord[] array) {
return new WORLCreate_EmailAsyncQueueRequestRecordList(array);
}
}
}

namespace ssLLPSignOff_BL {
[Serializable()]
public partial class WORLCreate_EmailAsyncQueueRequestList {
public WORCCreate_EmailAsyncQueueRequestRecord[] Array;


public WORLCreate_EmailAsyncQueueRequestList(WORCCreate_EmailAsyncQueueRequestRecord[] r) {
if (r == null)
Array = new WORCCreate_EmailAsyncQueueRequestRecord[0];
else
Array = r;
}
public WORLCreate_EmailAsyncQueueRequestList() {
Array = new WORCCreate_EmailAsyncQueueRequestRecord[0];
}

public WORLCreate_EmailAsyncQueueRequestList(RLCreate_EmailAsyncQueueRequestList rl) {
rl= (RLCreate_EmailAsyncQueueRequestList) rl.Duplicate();
Array = new WORCCreate_EmailAsyncQueueRequestRecord[rl.Length];
while (!rl.Eof) {
Array[rl.CurrentRowNumber] = rl.CurrentRec.Duplicate();
rl.Advance();
}
}

}
}

namespace ssLLPSignOff_BL {
partial class RLCreate_EmailAsyncQueueRequestList {
public static implicit operator RLCreate_EmailAsyncQueueRequestList(WORCCreate_EmailAsyncQueueRequestRecord[] array) {
RLCreate_EmailAsyncQueueRequestList rl = new RLCreate_EmailAsyncQueueRequestList();
if (array != null) {
foreach (WORCCreate_EmailAsyncQueueRequestRecord val in array) {
rl.Append((STCreate_EmailAsyncQueueRequestStructure) val);
}
}
return rl;
}
public static implicit operator WORCCreate_EmailAsyncQueueRequestRecord[](RLCreate_EmailAsyncQueueRequestList rl) {
WORCCreate_EmailAsyncQueueRequestRecord[] array = new WORCCreate_EmailAsyncQueueRequestRecord[rl == null ? 0 : rl.Length];
for(int i = 0; i < array.Length; i++) {
array[i] = (STCreate_EmailAsyncQueueRequestStructure) rl.Data[i];
}
return array;
}
}
}

namespace ssLLPSignOff_BL {
partial class WORLCreate_EmailAsyncQueueRequestList {
public static implicit operator RLCreate_EmailAsyncQueueRequestList(WORLCreate_EmailAsyncQueueRequestList w) {
return w.Array;
}
public static implicit operator WORLCreate_EmailAsyncQueueRequestList(RLCreate_EmailAsyncQueueRequestList rl) {
return new WORLCreate_EmailAsyncQueueRequestList(rl);
}
public static implicit operator WORCCreate_EmailAsyncQueueRequestRecord[](WORLCreate_EmailAsyncQueueRequestList w) {
if(w != null) {
return w.Array;
}
return null;
}
public static implicit operator WORLCreate_EmailAsyncQueueRequestList(WORCCreate_EmailAsyncQueueRequestRecord[] array) {
return new WORLCreate_EmailAsyncQueueRequestList(array);
}
}
}


namespace ssLLPSignOff_BL {
using System.IO;
using System.Net;
using System.Text;
using System.Data;
using System.Collections.Generic;
using OutSystems.RESTService;
using OutSystems.RESTService.Runtime.Abstractions;
using Newtonsoft.Json;
  public static partial class CcSignOffAPI{
public class RESTCreate_EmailAsyncQueueRequest {
[JsonProperty("SignOffRequestGuid")]
public string restSignOffRequestGuid;

[JsonProperty("WorkflowTransitionId")]
public long? restWorkflowTransitionId;

[JsonProperty("AsyncProcess")]
public string restAsyncProcess;

[JsonProperty("WorkflowTypeId")]
public int? restWorkflowTypeId;

[JsonProperty("CreateBy")]
public string restCreateBy;

public RESTCreate_EmailAsyncQueueRequest() { }

public RESTCreate_EmailAsyncQueueRequest(STCreate_EmailAsyncQueueRequestStructure s) {
restSignOffRequestGuid = s.ssSignOffRequestGuid == "" ? null : s.ssSignOffRequestGuid;
restWorkflowTransitionId = s.ssWorkflowTransitionId == 0L ? null : (long?) s.ssWorkflowTransitionId;
restAsyncProcess = s.ssAsyncProcess == "" ? null : s.ssAsyncProcess;
restWorkflowTypeId = s.ssWorkflowTypeId == 0 ? null : (int?) s.ssWorkflowTypeId;
restCreateBy = s.ssCreateBy == "" ? null : s.ssCreateBy;
}

public static STCreate_EmailAsyncQueueRequestStructure ToStructure(RESTCreate_EmailAsyncQueueRequest obj) { 
  STCreate_EmailAsyncQueueRequestStructure s = new STCreate_EmailAsyncQueueRequestStructure(null);
  if(obj != null) {
  s.ssSignOffRequestGuid = obj.restSignOffRequestGuid == null ? "" : obj.restSignOffRequestGuid;
  s.ssWorkflowTransitionId = obj.restWorkflowTransitionId == null ? 0L : obj.restWorkflowTransitionId.Value;
  s.ssAsyncProcess = obj.restAsyncProcess == null ? "" : obj.restAsyncProcess;
  s.ssWorkflowTypeId = obj.restWorkflowTypeId == null ? 0 : obj.restWorkflowTypeId.Value;
  s.ssCreateBy = obj.restCreateBy == null ? "" : obj.restCreateBy;
  }
  return s;
}

public static RESTCreate_EmailAsyncQueueRequest FromStructure(STCreate_EmailAsyncQueueRequestStructure s) { 
  return new RESTCreate_EmailAsyncQueueRequest(s);
}

}
  }
}
