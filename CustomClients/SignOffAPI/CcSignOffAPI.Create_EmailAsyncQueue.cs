using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Reflection;
using System.Text.RegularExpressions;
using OutSystems.HubEdition.RuntimePlatform;
using OutSystems.HubEdition.RuntimePlatform.Log;
using OutSystems.HubEdition.RuntimePlatform.Db;
using OutSystems.HubEdition.RuntimePlatform.NewRuntime;
using OutSystems.Internal.Db;
using OutSystems.HubEdition.RuntimePlatform.Email;
using OutSystems.RuntimeCommon;
using OutSystems.RuntimeCommon.Caching;
using OutSystems.ObjectKeys;
using System.Resources;
using System.IO;
using System.Net;
using System.Text;
using System.Data;
using System.Globalization;
using OutSystems.RESTService;
using OutSystems.RESTService.Runtime.Abstractions;
using OutSystems.RESTService.Runtime.Abstractions.Behaviors;
using OutSystems.REST;
using OutSystems.Internal.REST;
using Newtonsoft.Json;
using System.Web;
using System.Net.Http;
using System.Net.Http.Headers;

namespace ssLLPSignOff_BL {
public static partial class CcSignOffAPI{
/// <summary>
/// Action: Create_EmailAsyncQueue
/// </summary>

public static void ActionCreate_EmailAsyncQueue(HeContext heContext, ICcSignOffAPICallbacks _callbacks, STCreate_EmailAsyncQueueRequestStructure inParamRequest) {
String __url = "";
String __errorLogId = "";
String __endpoint = null;
String __message = null;
String __detail = null;
String __detailLabel = null;
DateTime __startExecution = DateTime.Now;
try {
OutSystems.REST.Configuration config = OutSystems.REST.Configuration.GetClientConfiguration("4e61a2cd-2f4f-401a-acce-e3d9c05f3642", 242, "36b4f3a8-8d90-45e8-b686-1653668160d2", defaultUrl:"https://dev-icare.ing.net");
StringBuilder httpTrace = new StringBuilder();
HttpWebResponse response = null;
bool failedRequest = false;
try {
string baseURL = config.Url.TrimEnd('/');
string relativeUrl = "" + HttpHelper.UrlEncode("") + "/" + HttpHelper.UrlEncode("LLPsignoff_EmailNotification") + "/" + HttpHelper.UrlEncode("rest") + "/" + HttpHelper.UrlEncode("EmailNotificationAPI") + "/" + HttpHelper.UrlEncode("Create_EmailAsyncQueue") + "";
string relativeUrlLogs = "" + HttpHelper.UrlEncode("") + "/" + HttpHelper.UrlEncode("LLPsignoff_EmailNotification") + "/" + HttpHelper.UrlEncode("rest") + "/" + HttpHelper.UrlEncode("EmailNotificationAPI") + "/" + HttpHelper.UrlEncode("Create_EmailAsyncQueue") + "";
string httpMethod = "POST";
var headers = new Dictionary<string, RestPluginRuntimeUtils.NameValue>();
headers.Add("User-Agent", new RestPluginRuntimeUtils.NameValue("User-Agent", "OutSystemsPlatform"));
headers.Add("Content-Type", new RestPluginRuntimeUtils.NameValue("Content-Type", "application/json"));
string username = config.Username;
string password = config.Password;
if (username != "" || password != "") {
  headers.Add("Authorization", new RestPluginRuntimeUtils.NameValue("Authorization", "Basic " + Convert.ToBase64String(Encoding.ASCII.GetBytes(username + ":" + password))));
}
RestPluginRuntimeUtils.NameValue contentTypeHeaderNameValue;
if (headers.TryGetValue("Content-Type", out contentTypeHeaderNameValue) && !contentTypeHeaderNameValue.Value.ToLowerInvariant().Contains("charset=")) {
    contentTypeHeaderNameValue.Value = contentTypeHeaderNameValue.Value + "; charset=UTF-8";
}
var queryParams = new List<RestPluginRuntimeUtils.NameValue>();
string requestText = "";
byte[] requestArray = new byte[0];
var requestHolder = RESTCreate_EmailAsyncQueueRequest.FromStructure(inParamRequest);
requestText = JsonConvert.SerializeObject(requestHolder, new JsonSerializerSettings { DefaultValueHandling = DefaultValueHandling.Ignore, DateTimeZoneHandling = DateTimeZoneHandling.Utc , Converters = { new OutSystems.REST.JsonConverters.DecimalConverter() } });
requestArray = Encoding.UTF8.GetBytes(requestText);

String relativeUrlBeforeCallback = relativeUrl;
bool isAuthorizationOverridden = false;
if (relativeUrlBeforeCallback.ToLowerInvariant() != relativeUrl.ToLowerInvariant()) { 
  relativeUrlLogs = relativeUrl;
}
String url = baseURL + relativeUrl;
for (int i = 0; i < queryParams.Count; i++) {
  url += (i == 0) ? "?" : "&";
  url += HttpHelper.UrlQueryEncode(queryParams[i].Name) + "=" + HttpHelper.UrlQueryEncode(queryParams[i].Value);
}
__endpoint = baseURL + relativeUrlLogs;
var request = (HttpWebRequest)HttpWebRequest.Create(url);
request.Method = httpMethod;
request.Timeout = 100000;
foreach(var header in headers.Values) {
HttpHelper.SetRequestHeader(request, header.Name, header.Value);
}
  if (request.CookieContainer == null && request.Headers[HttpRequestHeader.Cookie] == null) {
      request.CookieContainer = new CookieContainer();
  }
  using(Stream requestStream = request.GetRequestStream()) {
      requestStream.Write(requestArray, 0, requestArray.Length);
  }
if (config.Trace) {
  var sensitiveHeadersSettingValue = RuntimePlatformSettings.Logging.RedactedSensitiveHeaders.GetValue();
  var urlSensitiveSet = new HashSet<String>();

  var headersSensitiveSet = sensitiveHeadersSettingValue.Split(',').Select(header => header.ToLowerInvariant().Trim()).ToHashSet();

  var queryString = HttpUtility.ParseQueryString(request.RequestUri.Query);
  foreach (var urlName in urlSensitiveSet){
      // validation made because we only want to consider the URL parameters sent in the query. without the validation, we would add more inputs to the query
      if (queryString.Get(urlName) != null) {
           queryString[urlName] = "<redacted>";
      }
  }

  var uriBuilder = new UriBuilder(baseURL + relativeUrlLogs);
  uriBuilder.Query = queryString.ToString();
  var uriRedacted = uriBuilder.Uri;

  httpTrace.AppendLine(request.Method + " " + uriRedacted.ToString() + " HTTP/" + request.ProtocolVersion.ToString());
  foreach (var header in request.Headers.AllKeys) {
      var headerValue = headersSensitiveSet.Contains(header.ToLowerInvariant()) ? "[redacted]" : request.Headers[header];
      httpTrace.AppendLine(header + ": " + headerValue);
  }
  if (request.ContentLength != -1) {
     httpTrace.AppendLine("Content-Length: " + request.ContentLength);
  }
  httpTrace.AppendLine();
   httpTrace.AppendLine(UTF8Encoding.UTF8.GetString(requestArray));
  httpTrace.AppendLine();
}

String responseText = String.Empty;
byte[] responseArray = new byte[0];
int statusCode = 0;
String statusLine =  String.Empty;

try {
    response = (HttpWebResponse) request.GetResponse();
} catch(WebException we) {
    response = (HttpWebResponse) we.Response;
    if(response == null) {
        throw;
    }
}

var headersAux = response.Headers;
statusCode = (int) response.StatusCode;
statusLine = statusCode + " " + response.StatusDescription;
using (var responseContext = new OutSystems.Internal.REST.ResponseContext("Create_EmailAsyncQueue", response)) {
    responseText = responseContext.GetText();
    responseArray = responseContext.GetBinary();
    if (config.Trace) {
        httpTrace.AppendLine("HTTP/" + response.ProtocolVersion + " " +((int) response.StatusCode) + " " + response.StatusDescription);
        var responseHeadersSensitiveSet = new HashSet<string>();
        foreach (var headerName in response.Headers.AllKeys) {
             var headerValue = responseHeadersSensitiveSet.Contains(headerName.ToLowerInvariant()) ? "[redacted]" : response.Headers[headerName];
             httpTrace.AppendLine(headerName + ": " + headerValue);
        }
        httpTrace.AppendLine();
    }
}

var responseHeaders = new List<RestPluginRuntimeUtils.NameValue>();
foreach (var headerName in headersAux.AllKeys) {
    responseHeaders.Add(new RestPluginRuntimeUtils.NameValue(headerName, headersAux[headerName]));
}

if (statusCode < 200 || statusCode >= 400) {
    throw new Exception(statusLine);
}

var deserializationMessages = new List<String>();

if (deserializationMessages.Any()) {
    var detail = new StringBuilder();
    detail.Append("Failed to parse response of the method 'Create_EmailAsyncQueue' of the 'SignOffAPI' REST API:\n");
    for (int maxErrorMessagesToShow = 3, currentPosition = 0; maxErrorMessagesToShow > 0 && currentPosition < deserializationMessages.Count; --maxErrorMessagesToShow, ++currentPosition) {
        detail.Append(deserializationMessages[currentPosition]);
        detail.Append("\n");
    }

    throw new Exception(detail.ToString());
}
} catch {
      failedRequest = true;
      throw;
} finally {
      if (config.TraceAll || (config.TraceErrors && failedRequest)) {
__message = "";
__detail = httpTrace.ToString();
__detailLabel = "HTTP Trace";
      }

      if (response != null) {
          response.Dispose();
      }
}
} catch (Exception __ex) {
__errorLogId = ErrorLog.LogApplicationError(__ex, heContext, "REST (Consume)");
throw __ex;
} finally {
DateTime __instant = DateTime.Now;
TimeSpan __duration = __instant.Subtract(__startExecution);
if(heContext.RequestTracer != null) { 
heContext.RequestTracer.RegisterConsumedIntegrationExecuted("SignOffAPI_Create_EmailAsyncQueue", "2a47f5c5-6d67-4cc9-b524-2903204aee57", 
"36b4f3a8-8d90-45e8-b686-1653668160d2", "LLPSignOff_BL", 
"REST (Consume)" , (int) __duration.TotalMilliseconds, __instant, 
__endpoint); }
if (!String.IsNullOrEmpty(__errorLogId) ||
(heContext.AppInfo != null && (!heContext.AppInfo.SelectiveLoggingEnabled || heContext.AppInfo.Properties.AllowLogging))) {
bool hasDetail = !String.IsNullOrEmpty(__detail) || !String.IsNullOrEmpty(__message);
String __integrationLogId = IntegrationLog.StaticWrite(
heContext.AppInfo,
__instant,
(int) __duration.TotalMilliseconds,
null,
__endpoint,
"SignOffAPI.Create_EmailAsyncQueue",
"REST (Consume)",
__errorLogId,
false,
hasDetail: hasDetail);
if(hasDetail) {
    IntDetailLog.StaticWrite(__integrationLogId,
        __instant,
        (heContext.AppInfo != null && heContext.AppInfo.Tenant != null ? heContext.AppInfo.Tenant.Id : 0),
        __message,
        __detail,
        __detailLabel);
}
}
}
}
}
}
