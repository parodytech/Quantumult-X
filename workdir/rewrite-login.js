/* [rewrite_local]
 * ^https://xcx-static.yqgz.beijing.gov.cn/json/jkb/hsjc/dailyAppointment.json url script-response-body https://raw.githubusercontent.com/parodytech/Quantumult-X/master/workdir/rewrite-body.js
 */
var body = $response.body;
var obj = JSON.parse(body);

// obj['data']['realName'] = "韩铁梁";

obj = {
  "errcode": "BIS:10200",
  "errmsg": null,
  "data": {
    "bjtNo": null,
    "realLevel": 2,
    "realName": "韩铁梁",
    "faceExpires": null,
    "mobile": null,
    "isReplace": false,
    "realIdCard": "110102195807251916",
    "sid": "d14600ca9019409e8f58fbc4f393ffa2",
    "idCard": "11**************16",
    "openId": "o2aCv4o1T7gh2GaxFmpNegLKjY6k",
    "userFaceKey": null,
    "isShengpizi": false,
    "name": "韩**",
    "userIdKey": null,
  },
};

body = JSON.stringify(obj);

console.log(body);

$done(body);
