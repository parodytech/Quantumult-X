var body = $response.body;
var obj = JSON.parse(body);

obj['hsjc'] = false;
body = JSON.stringify(obj);

console.log(body);

$done(body);
