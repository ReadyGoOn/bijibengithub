var express = require('express');
var router = express.Router();
var axios = require('axios');
var md5 = require('md5')
var request = require('request');
console.log(123999);
router.get('/aaa', function(req,res,next){
    console.log(199);
    // console.log(axios.get);
    // console.log(request.get);
//    axios.get('./../../static/mock/goods.json').then((response)=>{
// 			console.log(response)
// 		});
    // request.post({
    //     url: './../../static/mock/goods.json'
    // }, function (err, response, result) {
    //     console.log(err,result)
    // })
    var dvt = 2,
		ver = 1.0,
        goodsid = 18799,
        userid = '',
        key = 'sdl#^kfj83*&(247D*()!@KutePaoebw',
        headers = { 'Content-Type': 'application/x-www-form-urlencoded' },
        goodsDetailKey = md5(dvt + '' + goodsid + '' + userid + ''+ ver + '' + key);
    var post_data = {
        'goodsid': goodsid,
        'userid':userid,
        'ver': ver,
        'dvt': dvt,
        'key': goodsDetailKey
    };
     request.post({
        url: 'http://uatapi.wolianw.com/v2/index.php/home/Product/getGoodsDetail',
        headers: headers,
        form: post_data,
        timeout: 30000
    }, function (err, response, result) {
        console.log(err,result)
        res.send(result)
    })
    // res.json({title:'node-express',node:'node-yes'});
});

module.exports = router ;