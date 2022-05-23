/* [rewrite_local]
 * ^https://xcx-static.yqgz.beijing.gov.cn/json/jkb/hsjc/dailyAppointment.json url script-response-body https://raw.githubusercontent.com/parodytech/Quantumult-X/master/workdir/rewrite-body.js
 */
var body = $response.body;
var obj = JSON.parse(body);

obj['data']['code'] = "0";
body = JSON.stringify(obj);

console.log(body);

$done(body);
