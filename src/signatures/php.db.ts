export const php = [
    /ob_start/g,
    /array_diff_uassoc/g,
    /array_diff_ukey/g,
    /array_filter/g,
    /array_intersect_uassoc/g,
    /array_intersect_ukey/g,
    /array_map/g,
    /array_reduce/g,
    /array_udiff_assoc/g,
    /array_udiff_uassoc/g,
    /array_udiff/g,
    /array_uintersect_assoc/g,
    /array_uintersect_uassoc/g,
    /array_uintersect/g,
    /array_walk_recursive/g,
    /array_walk/g,
    /assert_options/g,
    /uasort/g,
    /uksort/g,
    /usort/g,
    /preg_replace_callback/g,
    /spl_autoload_register/g,
    /iterator_apply/g,
    /call_user_func/g,
    /call_user_func_array/g,
    /register_shutdown_function/g,
    /register_tick_function/g,
    /set_error_handler/g,
    /set_exception_handler/g,
    /session_set_save_handler/g,
    /sqlite_create_aggregate/g,
    /sqlite_create_function/g,
    /assert(\s*\(|\s+).*\)?/g,
    /exec(\s*\(|\s+).*\)?/g,
    /`.*`/g,
    /passthru(\s*\(|\s+).*\)?/g,
    /popen(\s*\(|\s+).*\)?/g,
    /proc_close(\s*\(|\s+).*\)?/g,
    /proc_open(\s*\(|\s+).*\)?/g,
    /proc_get_status(\s*\(|\s+).*\)?/g,
    /proc_nice(\s*\(|\s+).*\)?/g,
    /proc_terminate(\s*\(|\s+).*\)?/g,
    /shell_exec(\s*\(|\s+).*\)?/g,
    /system(\s*\(|\s+).*\)?/g,
    /expect_/g,
    /pcntl_/g,
    /posix_/g,
    /ftok/g,
    /msg_get_queue/g,
    /msg_queue_exists/g,
    /msg_receive/g,
    /msg_remove_queue/g,
    /msg_send/g,
    /msg_set_queue/g,
    /msg_stat_queue/g,
    /sem_/g,
    /shm_/g,
    /shmop_/g,
    /registerPhpFunctions/g,
    /phpinfo\s*\(.*\)/g,
    /phpcredits\s*\(.*\)/g,
    /php_logo_guid\s*\(.*\)/g,
    /php_uname\s*\(.*\)/g,
    /phpversion\s*\(.*\)/g,
    /zend_logo_guid\s*\(.*\)/g,
    /zend_version\s*\(.*\)/g,
    /get_loaded_extensions\s*\(.*\)/g,
    /mysql_connect\s*\(.*\$.*\)/g,
    /mysql_pconnect\s*\(.*\$.*\)/g,
    /mysql_change_user\s*\(.*\$.*\)/g,
    /mysql_query\s*\(.*\$.*\)/g,
    /mysql_error\s*\(.*\$.*\)/g,
    /mysql_set_charset\s*\(.*\$.*\)/g,
    /mysql_unbuffered_query\s*\(.*\$.*\)/g,
    /mysqli_.*\s*\(.*\$.*\)/g,
    /pg_connect\s*\(.*\$.*\)/g,
    /pg_pconnect\s*\(.*\$.*\)/g,
    /pg_execute\s*\(.*\$.*\)/g,
    /pg_insert\s*\(.*\$.*\)/g,
    /pg_put_line\s*\(.*\$.*\)/g,
    /pg_query\s*\(.*\$.*\)/g,
    /pg_select\s*\(.*\$.*\)/g,
    /pg_send_query\s*\(.*\$.*\)/g,
    /pg_set_client_encoding\s*\(.*\$.*\)/g,
    /pg_update\s*\(.*\$.*\)/g,
    /sqlite_open\s*\(.*\$.*\)/g,
    /sqlite_poen\s*\(.*\$.*\)/g,
    /sqlite_query\s*\(.*\$.*\)/g,
    /sqlite_array_query\s*\(.*\$.*\)/g,
    /sqlite_create_function\s*\(.*\$.*\)/g,
    /sqlite_create_aggregate\s*\(.*\$.*\)/g,
    /sqlite_exec\s*\(.*\$.*\)/g,
    /sqlite_fetch_.*\s*\(.*\$.*\)/g,
    /msql_.*\s*\(.*\$.*\)/g,
    /mssql_.*\s*\(.*\$.*\)/g,
    /odbc_.*\s*\(.*\$.*\)/g,
    /fbsql_.*\s*\(.*\$.*\)/g,
    /sybase_.*\s*\(.*\$.*\)/g,
    /ibase_.*\s*\(.*\$.*\)/g,
    /dbx_.*\s*\(.*\$.*\)/g,
    /ingres_.*\s*\(.*\$.*\)/g,
    /ifx_.*\s*\(.*\$.*\)/g,
    /oci_.*\s*\(.*\$.*\)/g,
    /sqlsrv_.*\s*\(.*\$.*\)/g,
    /px_.*\s*\(.*\$.*\)/g,
    /ovrimos_.*\s*\(.*\$.*\)/g,
    /maxdb_.*\s*\(.*\$.*\)/g,
    /db2_.*\s*\(.*\$.*\)/g,
    /CURLOPT_SSL_VERIFY(HOST|PEER), *([Ff][Aa][Ll][Ss][Ee]|0)/g,
    /php:\/\/stdin/g,
    /php:\/\/stdout/g,
    /php:\/\/stderr/g,
    /php:\/\/output/g,
    /php:\/\/input/g,
    /php:\/\/filter/g,
    /php:\/\/memory/g,
    /php:\/\/temp/g,
    /getenv\s*\(.*\)/g,
    /apache_getenv\s*\(.*\)/g,
    /putenv\s*\(.*\)/g,
    /apache_setenv\s*\(.*\)/g,
    /getallheaders\s*\(.*\)/g,
    /apache_request_headers\s*\(.*\)/g,
    /apache_response_headers\s*\(.*\)/g,
    /\$_ENV\[.*\]/g,
    /\$_GET\[.*\]/g,
    /\$_POST\[.*\]/g,
    /\$_COOKIE\[.*\]/g,
    /\$_REQUEST\[.*\]/g,
    /\$_FILES\[.*\]/g,
    /\$_SERVER\[.*\]/g,
    /\$PHPSELF/g,
    /\$HTTP_GET_VARS/g,
    /\$http_get_vars/g,
    /\$HTTP_POST_VARS/g,
    /\$http_post_vars/g,
    /\$HTTP_ENV_VARS/g,
    /\$http_env_vars/g,
    /\$HTTP_RAW_POST_DATA/g,
    /\$http_raw_post_data/g,
    /\$HTTP_POST_FILES/g,
    /\$http_post_files/g,
    /\$\$.*/g,
    /header\s*\(.*\$_(GET|POST|REQUEST|COOKIE).*\)/g,
    /eval\s*\(\s*.\$.*\s*\)/g,
    /file\s*\(.\$.*\)/g,
    /file_get_contents\s*\(.\$.*\)/g,
    /fopen\s*\(.*\$.*\)/g,
    /p?fsockopen\s*\(.*\)/g,
    /stream_context_create\s*\(.*\)/g,
    /fwrite/g,
    /move_uploaded_file\s*\(.*\)/g,
    /stream_/g,
    /create_function\s*\(.*\)/g,
    /mail\s*\(.\$.*\)/g,
    /include\s*\(.*\$.*\)/g,
    /include_once\s*\(.*\$.*\)/g,
    /preg_replace\s*\(.\$*\)/g,
    /readfile\s*\(.\$.*\)/g,
    /require\s*\(.*\$.*\)/g,
    /require_once\s*\(.*\$.*\)/g,
    /unserialize\s*\(.*\)/g,
    /unserialize_callback_func/g,
    /echo\s+.*\$(_ENV|_GET|_POST|_COOKIE|_REQUEST|_SERVER|HTTP|http).*/g,
    /print\s+.*\$(_ENV|_GET|_POST|_COOKIE|_REQUEST|_SERVER|HTTP|http).*/g,
    /print_r(\s*\(|\s+).*\)?\$(_ENV|_GET|_POST|_COOKIE|_REQUEST|_SERVER|HTTP|http).*/g,
    /\<\?\=\$(_ENV|_GET|_POST|_COOKIE|_REQUEST|_SERVER|HTTP|http)/g,
    /\<\%\=\$(_ENV|_GET|_POST|_COOKIE|_REQUEST|_SERVER|HTTP|http)/g,
    /mysql_connect\s*\(.*\$.*\)/g,
    /mysql_pconnect\s*\(.*\$.*\)/g,
    /mysql_change_user\s*\(.*\$.*\)/g,
    /mysql_query\s*\(.*\$.*\)/g,
    /mysql_error\s*\(.*\$.*\)/g,
    /mysql_set_charset\s*\(.*\$.*\)/g,
    /mysql_unbuffered_query\s*\(.*\$.*\)/g,
    /mysqli_.*\s*\(.*\$.*\)/g,
    /pg_connect\s*\(.*\$.*\)/g,
    /pg_pconnect\s*\(.*\$.*\)/g,
    /pg_execute\s*\(.*\$.*\)/g,
    /pg_insert\s*\(.*\$.*\)/g,
    /pg_put_line\s*\(.*\$.*\)/g,
    /pg_query\s*\(.*\$.*\)/g,
    /pg_select\s*\(.*\$.*\)/g,
    /pg_send_query\s*\(.*\$.*\)/g,
    /pg_set_client_encoding\s*\(.*\$.*\)/g,
    /pg_update\s*\(.*\$.*\)/g,
    /sqlite_open\s*\(.*\$.*\)/g,
    /sqlite_poen\s*\(.*\$.*\)/g,
    /sqlite_query\s*\(.*\$.*\)/g,
    /sqlite_array_query\s*\(.*\$.*\)/g,
    /sqlite_create_function\s*\(.*\$.*\)/g,
    /sqlite_create_aggregate\s*\(.*\$.*\)/g,
    /sqlite_exec\s*\(.*\$.*\)/g,
    /sqlite_fetch_.*\s*\(.*\$.*\)/g,
    /msql_.*\s*\(.*\$.*\)/g,
    /mssql_.*\s*\(.*\$.*\)/g,
    /odbc_.*\s*\(.*\$.*\)/g,
    /fbsql_.*\s*\(.*\$.*\)/g,
    /sybase_.*\s*\(.*\$.*\)/g,
    /ibase_.*\s*\(.*\$.*\)/g,
    /dbx_.*\s*\(.*\$.*\)/g,
    /ingres_.*\s*\(.*\$.*\)/g,
    /ifx_.*\s*\(.*\$.*\)/g,
    /oci_.*\s*\(.*\$.*\)/g,
    /sqlsrv_.*\s*\(.*\$.*\)/g,
    /px_.*\s*\(.*\$.*\)/g,
    /ovrimos_.*\s*\(.*\$.*\)/g,
    /maxdb_.*\s*\(.*\$.*\)/g,
    /db2_.*\s*\(.*\$.*\)/g,
    /echo\s+.*\$(_ENV|_GET|_POST|_COOKIE|_REQUEST|_SERVER|HTTP|http).*/g,
    /print\s+.*\$(_ENV|_GET|_POST|_COOKIE|_REQUEST|_SERVER|HTTP|http).*/g,
    /print_r(\s+|\s*\().*\$(_ENV|_GET|_POST|_COOKIE|_REQUEST|_SERVER|HTTP|http).*/g,
    /\<\?\=\$(_ENV|_GET|_POST|_COOKIE|_REQUEST|_SERVER|HTTP|http)/g,
    /\<\%\=\$(_ENV|_GET|_POST|_COOKIE|_REQUEST|_SERVER|HTTP|http)/g,
    /exec\s*\(.*\$(_ENV|_GET|_POST|_COOKIE|_REQUEST|_SERVER|HTTP|http).*\)/g,
    /system\s*\(.*\$(_ENV|_GET|_POST|_COOKIE|_REQUEST|_SERVER|HTTP|http).*\)/g,
    /popen\s*\(.*\$(_ENV|_GET|_POST|_COOKIE|_REQUEST|_SERVER|HTTP|http).*\)/g,
    /proc_open\s*\(.*\$(_ENV|_GET|_POST|_COOKIE|_REQUEST|_SERVER|HTTP|http).*\)/g,
    /pcntl_exec\s*\(.*\$(_ENV|_GET|_POST|_COOKIE|_REQUEST|_SERVER|HTTP|http).*\)/g,
    /shell_exec\s*\(.*\$(_ENV|_GET|_POST|_COOKIE|_REQUEST|_SERVER|HTTP|http).*\)/g,
    /passthru\s*\(.*\$(_ENV|_GET|_POST|_COOKIE|_REQUEST|_SERVER|HTTP|http).*\)/g,
    /`[^`]*\$(_ENV|_GET|_POST|_COOKIE|_REQUEST|_SERVER|HTTP|http)[^`]*`/g,
    /eval\s*\(.*\$(_ENV|_GET|_POST|_COOKIE|_REQUEST|_SERVER|HTTP|http).*\)/g,
    /header\s*\(.*\$(_ENV|_GET|_POST|_COOKIE|_REQUEST|_SERVER|HTTP|http).*\)/g,
    /include\s*\(.*\$(_ENV|_GET|_POST|_COOKIE|_REQUEST|_SERVER|HTTP|http).*\)/g,
    /include_once\s*\(.*\$(_ENV|_GET|_POST|_COOKIE|_REQUEST|_SERVER|HTTP|http).*\)/g,
    /require\s*\(.*\$(_ENV|_GET|_POST|_COOKIE|_REQUEST|_SERVER|HTTP|http).*\)/g,
    /require_once\s*\(.*\$(_ENV|_GET|_POST|_COOKIE|_REQUEST|_SERVER|HTTP|http).*\)/g,
    /fopen\s*\(.*\$(_ENV|_GET|_POST|_COOKIE|_REQUEST|_SERVER|HTTP|http).*\)/g,
    /readfile\s*\(.*\$(_ENV|_GET|_POST|_COOKIE|_REQUEST|_SERVER|HTTP|http).*\)/g,
    /file_get_contents\s*\(.*\$(_ENV|_GET|_POST|_COOKIE|_REQUEST|_SERVER|HTTP|http).*\)/g,
    /show_source\s*\(.*\$(_ENV|_GET|_POST|_COOKIE|_REQUEST|_SERVER|HTTP|http).*\)/g,
    /preg_replace\s*\([\'"](.).*\1[igsu]*e/g,
    /highlight_file\s*\(.*\$(_ENV|_GET|_POST|_COOKIE|_REQUEST|_SERVER|HTTP|http).*\)/g,
    /file\s*\(.*\$(_ENV|_GET|_POST|_COOKIE|_REQUEST|_SERVER|HTTP|http).*\)/g,
    /unserialize\s*\(.*\$(_ENV|_GET|_POST|_COOKIE|_REQUEST|_SERVER|HTTP|http).*\)/g,
    /mysql_query\s*\(.*\$(_ENV|_GET|_POST|_COOKIE|_REQUEST|_SERVER|HTTP|http).*\)/g,
    /mysqli_query\s*\(.*\$(_ENV|_GET|_POST|_COOKIE|_REQUEST|_SERVER|HTTP|http).*\)/g,
    /mssql_query\s*\(.*\$(_ENV|_GET|_POST|_COOKIE|_REQUEST|_SERVER|HTTP|http).*\)/g,
    /oci_parse\s*\(.*\$(_ENV|_GET|_POST|_COOKIE|_REQUEST|_SERVER|HTTP|http).*\)/g,
    /pg_query\s*\(.*\$(_ENV|_GET|_POST|_COOKIE|_REQUEST|_SERVER|HTTP|http).*\)/g,
    /(WHERE|where)\s+.*=.*\$(_ENV|_GET|_POST|_COOKIE|_REQUEST|_SERVER|HTTP|http)[^; ]+/g,
    /(LIKE|like)\s+.*\$(_ENV|_GET|_POST|_COOKIE|_REQUEST|_SERVER|HTTP|http)/g,
    /(ORDER\s+BY|order\s+by)\s+.*\$(_ENV|_GET|_POST|_COOKIE|_REQUEST|_SERVER|HTTP|http)/g,
    /(LIMIT|limit)\s+.*\$(_ENV|_GET|_POST|_COOKIE|_REQUEST|_SERVER|HTTP|http)/g,
];