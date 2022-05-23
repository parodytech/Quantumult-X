/* [rewrite_local]
 * ^https://xcx-static.yqgz.beijing.gov.cn/json/jkb/hsjc/dailyAppointment.json url script-response-body https://raw.githubusercontent.com/parodytech/Quantumult-X/master/workdir/rewrite-body.js
 */
var body = $request.body;
var obj = JSON.parse(body);

obj["qrcode_content"] = "";

body = JSON.stringify(obj);

console.log(body);

$done(body);
