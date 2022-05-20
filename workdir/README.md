## Modify HTTP response body using JavaScript
The Content-Length will be automatically modified based on the body and encoding.

- **Absolute URL of HTTP Request to match.**
``` text
https://example.com/resource5
```

- **Rewrite**
``` text
http://example\.com/resource5/ url script-response-body https://raw.githubusercontent.com/crossutility/Quantumult-X/master/sample-rewrite-with-script.js
```

- **Before**
``` text
HTTP/1.1 200 OK
Content-Type: application/json; charset=UTF-8
Cache-Control: no-cache, must-revalidate
Strict-Transport-Security: max-age=0
Connection: keep-alive
Content-Encoding: gzip
Content-Length: 41
```
``` text
{"basic":{"token":123},"info":[{"domain":"example.com"}],"result":1}
```

- **After**
``` text
HTTP/1.1 200 OK
Content-Type: application/json; charset=UTF-8
Cache-Control: no-cache, must-revalidate
Strict-Transport-Security: max-age=0
Connection: keep-alive
Content-Encoding: gzip
Content-Length: 41
```
``` text
{"basic":{"token":123},"info":[{"domain":"example.com"}],"result":0}
```
