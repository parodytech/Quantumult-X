/* [rewrite_local]
 * ^https://xcx-static.yqgz.beijing.gov.cn/json/jkb/hsjc/dailyAppointment.json url script-response-body https://raw.githubusercontent.com/parodytech/Quantumult-X/master/workdir/rewrite-body.js
 */

console.log("session log", $request.path)

var body = $response.body;
var obj = JSON.parse(body);

realName = "邹"
realName += "航"
realName += "标"

obj = {
  "errcode": "BIS:10200",
  "errmsg": null,
  "data": {
    "bjtNo": null,
    "realLevel": 2,
    "realName": realName,
    "faceExpires": -1,
    "mobile": "13691432880",
    "isReplace": false,
    "realIdCard": "110102195807251916",
    "sid": "d14600ca9019409e8f58fbc4f393ffa2",
    "idCard": "11**************16",
    "openId": "o2aCv4o1T7gh2GaxFmpNegLKjY6k",
    "userFaceKey": null,
    "isShengpizi": false,
    "name": "邹**",
    "userIdKey": null,
  },
};

body = JSON.stringify(obj);

console.log(body);

$done(body);
