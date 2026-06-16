using System;
using System.Linq;
using OutSystems.HubEdition.RuntimePlatform;
using OutSystems.HubEdition.RuntimePlatform.Db;
using OutSystems.Internal.Db;
using OutSystems.RuntimeCommon;
using OutSystems.RuntimeCommon.Caching;

using System.IO;
using System.Net;
using System.Text;
using System.Data;
using System.Threading;
using System.Collections.Generic;
using Newtonsoft.Json;
using System.Net.Http;
using OutSystems.Internal.REST;
using System.Net.Http.Headers;
using System.Text.RegularExpressions;
using OutSystems.REST;
using OutSystems.HubEdition.RuntimePlatform.Log;


namespace ssLLPSignOff_BL {
  
public class RestPluginRuntimeUtils{
public class NameValue {

                public String Name;
                public String Value;

                public NameValue() {}

                public NameValue(String name, String value) {
                    this.Name = name;
                    this.Value = value;
                }
}

                public static class LoggingUtils {
                    public static void LogRequest(HeContext heContext, string errorLogId, string endpoint, string ownerPlugin, string actionName, string detail, string message, string detailLabel, DateTime requestStartExecution) {
                        var instant = DateTime.Now;
                        var duration = instant.Subtract(requestStartExecution);
                        if (!String.IsNullOrEmpty(errorLogId) ||
                         (heContext.AppInfo != null && (!heContext.AppInfo.SelectiveLoggingEnabled || heContext.AppInfo.Properties.AllowLogging))) {
                            bool hasDetail = !String.IsNullOrEmpty(detail) || !String.IsNullOrEmpty(message);
                            String integrationLogId = IntegrationLog.StaticWrite(
                            heContext.AppInfo,
                            instant,
                            (int)duration.TotalMilliseconds,
                            null,
                            endpoint,
                            actionName,
                            ownerPlugin,
                            errorLogId,
                            false);
                            if (hasDetail) {
                                IntDetailLog.StaticWrite(integrationLogId,
                                instant,
                                (heContext.AppInfo != null && heContext.AppInfo.Tenant != null ? heContext.AppInfo.Tenant.Id : 0),
                                message,
                                detail,
                                detailLabel);
                            }
                        }
                    }
                }
}
public interface ICcSignOffAPICallbacks{
string EvaluateExtendedProperty(HeContext heContext, string name);
}


}