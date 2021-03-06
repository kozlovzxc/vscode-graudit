export const common = [
    /Request.QueryString/g,
    /Request.Cookies/g,
    /Request.Certificate/g,
    /Request.ServerVariables/g,
    /Request.IsSecureConnection/g,
    /Request.Form/g,
    /Replace/g,
    /Request.Write/g,
    /Response.Write/g,
    /Response.Write\s*\(Request.QueryString\s*\(/g,
    /FileSystemObject/g,
    /Scripting.FileSystemObject/g,
    /System.FileSystemInfo/g,
    /My.Computer.Registry/g,
    /System.IO/g,
    /StreamReader/g,
    /FileInputStream/g,
    /GetTempFileName/g,
    /System.Security.AccessControl /g,
    /Microsoft.Win32.RegistryKey /g,
    /AddFileSecurity/g,
    /AddDirectorySecurity/g,
    /DiscretionaryAcl/g,
    /SetAccessControl/g,
    /SqlError/g,
    /SqlException/g,
    /Server.Execute/g,
    /Server.Transfer/g,
    /Eval/g,
    /Execute/g,
    /Executeglobal/g,
    /Wscript.Shell/g,
    /Response.Write/g,
    /Response.AddHeader/g,
    /Response.Redirect/g,
    /Scripting.FileSystemObject.OpenTextFile/g,
    /Scripting.FileSystemObject.DeleteFile/g,
    /GetObject/g,
    /LoadPicture/g,
    /Scripting.FileSystemObject.Write/g,
    /Scripting.FileSystemObject.WriteLine/g,
    /Scripting.FileSystemObject.GetFolder/g,
    /Scripting.FileSystemObject.OpenTextFile/g,
    /Scripting.FileSystemObject.Folder.Add/g,
    /Scripting.FileSystemObject.DeleteFolder/g,
    /Server.Createobject/g,
    /CreateObject/g,
    /Scripting.FileSystemObject.BuildPath/g,
    /CDONTS/g,
    /ADODB.Connection/g,
    /ADODB.recordset /g,
    /ADODB.Command/g,
    /ADODB.Recordset/g,
    /access\s*\(/g,
    /creat/g,
    /mknod/g,
    /mkfifo/g,
    /pathconf/g,
    /opendir/g,
    /dirname/g,
    /basename/g,
    /scandir/g,
    /fopen/g,
    /lstat/g,
    /stat\s*\(/g,
    /open\s*\(/g,
    /chmod/g,
    /chown/g,
    /chgrp/g,
    /rename/g,
    /(mkdir|mkdirp)/g,
    /(rmdirp|rmdir)/g,
    /remove/g,
    /unlink/g,
    /link\s*\(/g,
    /lchown/g,
    /(execve|execl|execlp|execle|execv)/g,
    /freopen/g,
    /mktemp/g,
    /drand48/g,
    /erand48/g,
    /initstate/g,
    /(jrand48|lcong48|lrand48|mrand48|nrand48|seed48|srand48)/g,
    /random/g,
    /setstate/g,
    /srand/g,
    /strfry/g,
    /memfrob/g,
    /crypt/g,
    /srandom/g,
    /chroot\s*\(/g,
    /gets/g,
    /system\s*\(/g,
    /popen/g,
    /getenv/g,
    /strcpy/g,
    /strcat/g,
    /(printf|sprintf|wsprintf|wsprintfA|wsprintfW|_snprinft|_snwprinft)\s*\(/g,
    /(lstrcpy|lstrcpyA|lstrcpyW)/g,
    /wcscpy/g,
    /_mbscpy/g,
    /_tcscpy/g,
    /(StrCpy|StrCpyA|StrCpyW)/g,
    /lstrcat/g,
    /wscat/g,
    /_mbscat/g,
    /_tcscat/g,
    /(StrCat|StrCatA|StrCatW)/g,
    /strxfrm/g,
    /wcsxfrm/g,
    /_tcsxfrm/g,
    /lstrcpyn/g,
    /lstrcpynW/g,
    /(StrCpyN|StrCpyNA|StrCpyNW)/g,
    /wcsncpy/g,
    /_mbsncpy/g,
    /_tcsncpy/g,
    /wcsncat/g,
    /_mbsncat/g,
    /_tcsncat/g,
    /MultiByteToWideChar/g,
    /WideCharToMultiByte/g,
    /StrNCat/g,
    /(StrCatBuff|StrCatBuffA|StrCatBuffW)/g,
    /(StrCatN|StrCatNA|StrCatNW)/g,
    /(StrFormatByteSize|StrFormatByteSizeA|StrFormatByteSizeW)/g,
    /(StrFormatByteSize64|StrFormatByteSize64A|StrFormatByteSize64W)/g,
    /(StrFormatKBSize|StrFormatKBSizeA|StrFormatKBSizeW)/g,
    /StrFromTimeInterval/g,
    /StrFromTimeIntervalA/g,
    /StrFromTimeIntervalW/g,
    /wvnsprintf/g,
    /wvnsprintfA/g,
    /wvnsprintfW/g,
    /wnsprintf/g,
    /wnsprintfA/g,
    /wnsprintfW/g,
    /PathAddExtension/g,
    /PathAddExtensionA/g,
    /PathAddExtensionW/g,
    /PathAddBackslash/g,
    /PathAddBackslashA/g,
    /PathAddBackslashW/g,
    /PathAppend/g,
    /PathAppendA/g,
    /PathAppendW/g,
    /PathCanonicalize/g,
    /PathCanonicalizeA/g,
    /PathCanonicalizeW/g,
    /PathCombine/g,
    /PathCombineA/g,
    /PathCombineW/g,
    /LoadLibrary/g,
    /LoadLibraryA/g,
    /LoadLibraryW/g,
    /GetExtensionVersion/g,
    /OemToChar/g,
    /OemToCharA/g,
    /OemToCharW/g,
    /OemToCharBuff/g,
    /OemToCharBuffA/g,
    /OemToCharBuffW/g,
    /OemToAnsi/g,
    /OemToAnsiA/g,
    /OemToAnsiW/g,
    /OemToAnsiBuff/g,
    /OemToAnsiBuffA/g,
    /OemToAnsiBuffW/g,
    /GetTempPath/g,
    /GetTempPathA/g,
    /GetTempPathW/g,
    /GetTempFileName/g,
    /GetTempFileNameA/g,
    /GetTempFileNameW/g,
    /ShellExecute/g,
    /ShellExecuteA/g,
    /ShellExecuteW/g,
    /ShellExecuteEx/g,
    /ShellExecuteExA/g,
    /ShellExecuteExW/g,
    /_wsystem/g,
    /_execl/g,
    /_texecl/g,
    /_wexecl/g,
    /_execle/g,
    /_texecle/g,
    /_wexecle/g,
    /_execlp/g,
    /_texeclp/g,
    /_wexeclp/g,
    /_execlpe/g,
    /_texeclpe/g,
    /_wexeclpe/g,
    /_execv/g,
    /_texecv/g,
    /_wexecv/g,
    /_execve/g,
    /_texecve/g,
    /_wexecve/g,
    /_execvp/g,
    /_texecvp/g,
    /_wexecvp/g,
    /_execvpe/g,
    /_texecvpe/g,
    /_wexecvpe/g,
    /_spawnl/g,
    /_tspawnl/g,
    /_wspawnl/g,
    /_spawnle/g,
    /_tspawnle/g,
    /_wspawnle/g,
    /_spawnlp/g,
    /_tspawnlp/g,
    /_wspawnlp/g,
    /_spawnlpe/g,
    /_tspawnlpe/g,
    /_wspawnlpe/g,
    /_spawnv/g,
    /_tspawnv/g,
    /_wspawnv/g,
    /_spawnve/g,
    /_tspawnve/g,
    /_wspawnve/g,
    /_spawnvp/g,
    /_tspawnvp/g,
    /_wspawnvp/g,
    /_spawnvpe/g,
    /_tspawnvpe/g,
    /_wspawnvpe/g,
    /scanf/g,
    /sscanf/g,
    /fscanf/g,
    /vfscanf/g,
    /vsprintf/g,
    /vscanf/g,
    /vsscanf/g,
    /streadd/g,
    /strecpy/g,
    /strtrns/g,
    /realpath/g,
    /syslog/g,
    /getopt/g,
    /getopt_long/g,
    /getpass/g,
    /getchar/g,
    /fgetc/g,
    /getc/g,
    /read\s*\(/g,
    /bcopy/g,
    /fgets/g,
    /cin/g,
    /memcpy/g,
    /fprintf/g,
    /snprintf/g,
    /strccpy/g,
    /strcadd/g,
    /strncpy/g,
    /_vsnprintf/g,
    /tmpfile/g,
    /tmpnam/g,
    /tempnam/g,
    /getlogin/g,
    /cuserid/g,
    /ttyname/g,
    /fread/g,
    /recv/g,
    /readv/g,
    /recvfrom/g,
    /recvmsg/g,
    /readdir/g,
    /readlink/g,
    /signal/g,
    /gethostbyname/g,
    /gethostbyaddr/g,
    /realloc/g,
    /fork/g,
    /vfork/g,
    /_mbsnbcpy/g,
    /CopyMemory/g,
    /strlen/g,
    /_tcslen/g,
    /_mbslen/g,
    /wcslen/g,
    /CreateProcess/g,
    /CreateProcessAsUser/g,
    /CreateProcessWithLogon/g,
    /WinExec/g,
    /RpcImpersonateClient/g,
    /ImpersonateLoggedOnUser/g,
    /CoImpersonateClient/g,
    /ImpersonateNamedPipeClient/g,
    /ImpersonateDdeClientWindow/g,
    /ImpersonateSecurityContext/g,
    /QuerySecurityContextToken/g,
    /SetThreadToken/g,
    /SetSecurityDescriptorDacl/g,
    /AfxLoadLibrary/g,
    /LoadLibraryEx/g,
    /InitializeCriticalSection/g,
    /EnterCriticalSection/g,
    /_tprintf/g,
    /wprintf/g,
    /_cprintf/g,
    /swprintf/g,
    /_stprintf/g,
    /_ftprintf/g,
    /fwprintf/g,
    /swscanf/g,
    /_stscanf/g,
    /_cscanf/g,
    /_ftscanf/g,
    /fwscanf/g,
    /_tscanf/g,
    /wscanf/g,
    /vprintf/g,
    /vwprintf/g,
    /vfprintf/g,
    /vfwprintf/g,
    /vswprintf/g,
    /_vsnwprintf/g,
    /catgets/g,
    /gettext/g,
    /strncat/g,
    /getwd/g,
    /umask/g,
    /AddAccessAllowedAce/g,
    /flags\s*&&\s*[A-Z_]+/g,
    /\[sizeof\(.*\)\]\s*=\s*'?\\?0'?;$/g,
    /^[\s\t]*printf\(getenv/g,
    /if \(errno = E/g,
    /<= 65553/g,
    /0xfffffff[^0-9a-f]/g,
    /getopt\s*\(argc,\s*argv,\s*\"[^\"]*;# Dotnet cookies/g,
    /System.Net.Cookie/g,
    /HTTPOnly/g,
    /document.cookie/g,
    /RNGCryptoServiceProvider/g,
    /SHA/g,
    /MD5/g,
    /base64/g,
    /xor/g,
    /(\.DES|TripleDES| DES)/g,
    /RC2/g,
    /System.Random/g,
    /Random/g,
    /System.Security.Cryptography/g,
    /catch\s*{/g,
    /Finally/g,
    /trace enabled/g,
    /customErrors mode/g,
    /system.web.ui.htmlcontrols.htmlinputhidden/g,
    /system.web.ui.webcontrols.hiddenfield/g,
    /system.web.ui.webcontrols.hyperlink/g,
    /system.web.ui.webcontrols.textbox/g,
    /system.web.ui.webcontrols.label/g,
    /system.web.ui.webcontrols.linkbutton/g,
    /system.web.ui.webcontrols.listbox/g,
    /system.web.ui.webcontrols.checkboxlist/g,
    /system.web.ui.webcontrols.dropdownlist# Dotnet legacy/g,
    /printf/g,
    /strcpy/g,
    /log4net/g,
    /Console.WriteLine/g,
    /System.Diagnostics.Debug/g,
    /System.Diagnostics.Trace/g,
    /MemoryStream/g,
    /.Write/g,
    /.Read/g,
    /.WriteByte/g,
    /.WriteTo/g,
    /.WriteAsync/g,
    /.Flush/g,
    /.Finalize/g,
    /.CopyTo/g,
    /.RequestMinimum/g,
    /.RequestOptional/g,
    /Assert/g,
    /Debug.Assert/g,
    /CodeAccessPermission/g,
    /ReflectionPermission.MemberAccess/g,
    /SecurityPermission.ControlAppDomain/g,
    /SecurityPermission.UnmanagedCode/g,
    /SecurityPermission.SkipVerification/g,
    /SecurityPermission.ControlEvidence/g,
    /SecurityPermission.SerializationFormatter/g,
    /SecurityPermission.ControlPrincipal/g,
    /SecurityPermission.ControlDomainPolicy/g,
    /SecurityPermission.ControlPolicy/g,
    /Reflection/g,
    /parameter white-list./g,
    /request.accepttypes/g,
    /request.browser/g,
    /request.files/g,
    /request.headers/g,
    /request.httpmethod/g,
    /request.item/g,
    /request.querystring/g,
    /request.form/g,
    /request.cookies/g,
    /request.certificate/g,
    /request.rawurl/g,
    /request.servervariables/g,
    /request.url/g,
    /request.urlreferrer/g,
    /request.useragent/g,
    /request.userlanguages/g,
    /request.IsSecureConnection/g,
    /request.TotalBytes/g,
    /request.BinaryRead/g,
    /InputStream/g,
    /HiddenField.Value/g,
    /TextBox.Text/g,
    /recordSet/g,
    /Serialization/g,
    /SerializationFormatter/g,
    /Serializable/g,
    /SerializeObject/g,
    /SerializationBinder/g,
    /JsonSerializer/g,
    /JsonSerializerSettings/g,
    /DleserializeObject/g,
    /ISerializable/g,
    /exec\s*sp_executesql/g,
    /execute\s*sp_executesql/g,
    /exec\s*sp_/g,
    /execute\s*sp_/g,
    /exec\s*xp_/g,
    /execute\s*sp_/g,
    /exec\s*@/g,
    /execute\s*@/g,
    /executestatement/g,
    /executeSQL/g,
    /setfilter/g,
    /executeQuery/g,
    /GetQueryResultInXML/g,
    /adodb/g,
    /sqloledb/g,
    /sql\s*server/g,
    /driver/g,
    /Server\.CreateObject/g,
    /\.Provider/g,
    /\.Open/g,
    /ADODB.recordset/g,
    /New\s*OleDbConnection/g,
    /ExecuteReader/g,
    /DataSource/g,
    /SqlCommand/g,
    /Microsoft.Jet/g,
    /SqlDataReader/g,
    /ExecuteReader/g,
    /GetString/g,
    /SqlDataAdapter/g,
    /CommandType/g,
    /StoredProcedure/g,
    /System\.Data\.sql/g,
    /response.write/g,
    /<%\s*=/g,
    /HttpUtility/g,
    /HtmlEncode/g,
    /UrlEncode/g,
    /innerText/g,
    /innerHTML/g,
    /exec\s*\(.*\$.*\)/g,
    /passthru\s*\(.*\)/g,
    /popen\s*\(.*\$.*\)/g,
    /shell_exec\s*\(.*\$.*\)/g,
    /system\s*\(.*\$.*\)/g,
    /`[^`]*\$[^`]*`/g,
    /echo.*\$_.*\[.*\]/g,
    /eval\s*\(.*\$.*\)/g,
    /mysql_query\s*\(.*\$.*\)/g,
    /WHERE\s+.*=.*\$[^; ]+/g,
    /(include|include_once|require|require_once)\s*\(.*\$.*\)/g,
    /print.*param\s*\(.*\);/g,
    /AccessControlException/g,
    /BindException/g,
    /ConcurrentModificationException/g,
    /DigestException/g,
    /FileNotFoundException/g,
    /GeneralSecurityException/g,
    /InsufficientResourcesException/g,
    /InvalidAlgorithmParameterException/g,
    /InvalidKeyException/g,
    /InvalidParameterException/g,
    /JarException/g,
    /KeyException/g,
    /KeyManagementException/g,
    /KeyStoreException/g,
    /NoSuchAlgorithmException/g,
    /NoSuchProviderException/g,
    /NotOwnerException/g,
    /NullPointerException/g,
    /OutOfMemoryError/g,
    /PriviledgedActionException/g,
    /ProviderException/g,
    /SignatureException/g,
    /SQLException/g,
    /StackOverflowError/g,
    /UnrecoverableEntryException/g,
    /UnrecoverableKeyException/g,
    /AccessController/g,
    /addHeader/g,
    /CallableStatement/g,
    /Cipher/g,
    /createRequest/g,
    /doPrivileged/g,
    /exec/g,
    /executeQuery/g,
    /executeUpdate/g,
    /getParameter/g,
    /getProperty/g,
    /getQueryString/g,
    /getSession/g,
    /HTTPCookie/g,
    /HttpServletRequest/g,
    /HttpServletResponse/g,
    /HttpsURLConnection/g,
    /invalidate/g,
    /IS_SUPPORTING_EXTERNAL_ENTITIES/g,
    /KeyManagerFactory/g,
    /PreparedStatement/g,
    /random/g,
    /SecureRandom/g,
    /SecurityException/g,
    /SecurityManager/g,
    /sendRedirect/g,
    /setAllowFileAccess/g,
    /setHeader/g,
    /setJavaScriptEnabled/g,
    /setPluginState/g,
    /setStatus/g,
    /setStatus/g,
    /SSLContext/g,
    /SSLSocketFactory/g,
    /Statement/g,
    /SUPPORT_DTD/g,
    /suppressAccessChecks/g,
    /TrustManager/g,
    /XMLReader/g,
    /request.getQueryString/g,
    /exec\s*\(.*\)/g,
    /Runtime\./g,
    /getRuntime\s*\(.*\)(\.|\s*;)/g,
    /getRequest/g,
    /[Rr]equest.getParameter/g,
    /getProperty\s*\(/g,
    /java.security.acl.acl/g,
    /response.sendRedirect\s*\(.*(Request|request).*\)/g,
    /print[Ss]tack[Tt]race/g,
    /out\.print(ln)?.*[Rr]equest\./g,
    /jdbc:.*;/g,
    /createStatement\s*\(.*\)/g,
    /executeQuery\s*\(.*\)/g,
    /Socket\s*\(/g,
    /[Bb][Aa][Cc][Kk][Dd][Oo][Oo][Rr]/g,
    /[Bb][Uu][Gg]/g,
    /[Dd][Ee][Cc][Oo][Yy]/g,
    /[Hh][Aa][Cc][Kk]/g,
    /[Ff][Ii][Xx][Mm][Ee]/g,
    /[Tt][Oo][Dd][Oo]/g,
    /XXX/g,
    /.*select\s+.*\s+from .*/g,
    /.*update\s+.*\s+where/g,
    /.*insert\s+.*\s+into/g,
    /.*delete\s*.*\s+from/g,
    /.*exec.*/g,
    /.*executeQuery.*/g,
    /.*sp_executesql.*/g,
    /.*sqlcommand.*/g,
    /.*executeScalar.*/g,
    /.*executeSql.*/g,
    /.*executeQuery.*/g,
    /.*executeStatement.*/g,
    /.*mysql_query.*/g,
    /.*executeQuery.*/g,
    /.*createStatement.*/g,
    /.*exec\s+(@Query).*/g,
    /.*exec\s+@Query.*/g,
    /.*concat.*/g,
    /.*concatenate.*/g,
    /.*GetQueryResultInXML.*/g,
    /.*setfilter.*/g,
    /.*sqloledb.*/g,
    /.*sql\s+server.*/g,
    /.*driver.*/g,
    /.*sqlconnection.*/g,
    /.*dsn.*/g,
    /.*adodb.*/g,
    /.*jdbc.*/g,
    /.*java.sql.*/g,
    /.*sqlclient.*/g,
    /.*oracleclient.*/g,
    /.*mysql_connect.*/g,
    /.*driver.*/g,
    /.*pass.*/g,
    /.*pwd.*/g,
    /.*usr.*/g,
    /.*user.*/g,
    /.*public.*class.*/g,
    /.*session.*/g,
    /.*(chmod|chown).*/g,
    /.*base64.*/g,
    /.*urlencode.*/g,
    /.*htmlencode.*/g,
    /.*UTF8Encoding.UTF8.GetBytes.*/g,
    /.*UTF8Encoding.UTF8.GetString.*/g,
    /.*ToBase64String.*/g,
    /.*FromBase64String.*/g,
    /.*Math.random.*/g,
    /.*rnd.*/g,
    /.*(rand|srand).*/g,
    /.*Wscript.shell.*/g,
    /.*system.*/g,
    /.*execfile.*/g,
    /.*Input.*Type.*Hidden.*/g,
    /.*(E|e)xception.*/g,
    /exec(\s*\(|\s+).*\$.*\)?/g,
    /fork(\s*\(|\s+).*\)?/g,
    /`.*\$.*`/g,
    /system(\s*\(?|\s+)*\$.*\)?/g,
    /open(\s*\(?|\s+)*\$.*\)?/g,
    /\$ARGV\[.*?\]/g,
    /\$ARGC/g,
    /\$ENV/g,
    /getc/g,
    /readdir(\s+|\s*\().*\$.*/g,
    /read(\s+|\s*\().*\$.*/g,
    /sysread/g,
    /eval.*\$.*/g,
    /fctnl/g,
    /ioctl/g,
    /bind/g,
    /setpgrp/g,
    /syscall/g,
    /connect.*\$.*/g,
    /glob(\s+|\s*\().*\$.*/g,
    /mkdir(\s+|\s*\().*\$.*/g,
    /rmdir(\s+|\s*\().*\$.*/g,
    /link(\s+|\s*\().*\$.*/g,
    /unlink(\s+|\s*\().*\$.*/g,
    /chmod(\s+|\s*\().*\$.*/g,
    /chown(\s+|\s*\().*\$.*/g,
    /chroot/g,
    /symlink/g,
    /truncate(\s+|\s*\().*\$.*/g,
    /kill.*\$.*/g,
    /umask/g,
    /->param\s*\(.*\)/g,
    /print\s*.*\$.*->param\(?.*\)?/g,
    /(WHERE|where)\s+.*=.*\@.*/g,
    /(LIKE|like)\s+.*\@.*/g,
    /(ORDER\s+BY|order\s+by)\s+.*\@.*/g,
    /(LIMIT|limit)\s+.*\@.*/g,
];