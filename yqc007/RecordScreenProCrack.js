/*
 *
 *
脚本功能：录屏大师解锁会员
软件版本：2.0.8
软件下载：http://t.cn/A6bwldmq
脚本作者：Hausd0rff
更新时间：2021.11.3
电报频道：https://t.me/yqc_123
问题反馈：https://t.me/yqc_007
使用声明：⚠️此脚本仅供学习与交流，
        请勿转载与贩卖！⚠️⚠️⚠️

******************************

[rewrite_local]

# 录屏大师解锁会员
^http?:\/\/luping\.cushuikeji\.cn\/api\/v1\.user\/info url script-response-body https://raw.githubusercontent.com/axtyet/Luminous/main/yqc007/RecordScreenProCrack.js

[mitm] 

hostname = luping.cushuikeji.cn
*
*
*/


;var encode_version = 'jsjiami.com.v5', qzqra = '__0xd11bc',  __0xd11bc=['QcOxQQ==','wpjDuDLCom3CkxNGwow=','w6UIJmNqwqrDiHcDTxRKKig=','54iS5p2M5Y2V77yDJkHkv7vlrormnrDlvLznqZrvvpTovrrorbXmlbfmjq/mi6HkuoDnmpXltKPkvoY=','5Yi+6ZmE54iJ5p+a5Y+T77yZCcOn5L+N5a+u5p+i5b6w56mH','OTBhNcKu','w4XDtcOMw7HDvQ==','NAfDrkoz','wqsDwqFMwqU=','w5TCvMKuCMK8','PhPDtBPCmA==','w7Y6wpvCgsKs','w5TChmPCqcOY','HwzCpyTCkQ==','Dj/DhXw=','HQjCpiLCmFA=','w6/CicKvwoA5wo8=','w4lHw7zCkcKTNA==','DVhWwo1Qw6XCvVLCv8K/wpoiw5k=','wpFdQ23CoD0=','cQxewrcNwqPCmcOw','5re16Lyr5bOq8YujtfGIs4rwtqOs8Y6CmfGJkJ0=','wqoqw5UsbcKg','w6MkwoDCssKtwrHDvMOJw5s='];(function(_0x3756da,_0x58ea94){var _0x31a9fd=function(_0x2d5cbb){while(--_0x2d5cbb){_0x3756da['push'](_0x3756da['shift']());}};_0x31a9fd(++_0x58ea94);}(__0xd11bc,0xe5));var _0x4335=function(_0x119d79,_0x243a13){_0x119d79=_0x119d79-0x0;var _0x15b57a=__0xd11bc[_0x119d79];if(_0x4335['initialized']===undefined){(function(){var _0x39c024=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x8072='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x39c024['atob']||(_0x39c024['atob']=function(_0x2bf2d3){var _0x518d6a=String(_0x2bf2d3)['replace'](/=+$/,'');for(var _0x3adce9=0x0,_0x36e87d,_0x33bc57,_0xd582f6=0x0,_0x23d3cc='';_0x33bc57=_0x518d6a['charAt'](_0xd582f6++);~_0x33bc57&&(_0x36e87d=_0x3adce9%0x4?_0x36e87d*0x40+_0x33bc57:_0x33bc57,_0x3adce9++%0x4)?_0x23d3cc+=String['fromCharCode'](0xff&_0x36e87d>>(-0x2*_0x3adce9&0x6)):0x0){_0x33bc57=_0x8072['indexOf'](_0x33bc57);}return _0x23d3cc;});}());var _0x461c3a=function(_0x5abd65,_0xd612c6){var _0x4d349b=[],_0x51a13b=0x0,_0x5bc6a2,_0x5cdee5='',_0xbb4620='';_0x5abd65=atob(_0x5abd65);for(var _0x4b8dc6=0x0,_0x30a28d=_0x5abd65['length'];_0x4b8dc6<_0x30a28d;_0x4b8dc6++){_0xbb4620+='%'+('00'+_0x5abd65['charCodeAt'](_0x4b8dc6)['toString'](0x10))['slice'](-0x2);}_0x5abd65=decodeURIComponent(_0xbb4620);for(var _0x381ed1=0x0;_0x381ed1<0x100;_0x381ed1++){_0x4d349b[_0x381ed1]=_0x381ed1;}for(_0x381ed1=0x0;_0x381ed1<0x100;_0x381ed1++){_0x51a13b=(_0x51a13b+_0x4d349b[_0x381ed1]+_0xd612c6['charCodeAt'](_0x381ed1%_0xd612c6['length']))%0x100;_0x5bc6a2=_0x4d349b[_0x381ed1];_0x4d349b[_0x381ed1]=_0x4d349b[_0x51a13b];_0x4d349b[_0x51a13b]=_0x5bc6a2;}_0x381ed1=0x0;_0x51a13b=0x0;for(var _0x18f33b=0x0;_0x18f33b<_0x5abd65['length'];_0x18f33b++){_0x381ed1=(_0x381ed1+0x1)%0x100;_0x51a13b=(_0x51a13b+_0x4d349b[_0x381ed1])%0x100;_0x5bc6a2=_0x4d349b[_0x381ed1];_0x4d349b[_0x381ed1]=_0x4d349b[_0x51a13b];_0x4d349b[_0x51a13b]=_0x5bc6a2;_0x5cdee5+=String['fromCharCode'](_0x5abd65['charCodeAt'](_0x18f33b)^_0x4d349b[(_0x4d349b[_0x381ed1]+_0x4d349b[_0x51a13b])%0x100]);}return _0x5cdee5;};_0x4335['rc4']=_0x461c3a;_0x4335['data']={};_0x4335['initialized']=!![];}var _0x2f8b72=_0x4335['data'][_0x119d79];if(_0x2f8b72===undefined){if(_0x4335['once']===undefined){_0x4335['once']=!![];}_0x15b57a=_0x4335['rc4'](_0x15b57a,_0x243a13);_0x4335['data'][_0x119d79]=_0x15b57a;}else{_0x15b57a=_0x2f8b72;}return _0x15b57a;};var obj=JSON[_0x4335('0x0','5#OP')]($response[_0x4335('0x1','RJXb')]);obj[_0x4335('0x2','5#OP')][_0x4335('0x3','U!vY')]=0x1;obj[_0x4335('0x4','SVK(')][_0x4335('0x5','gf#y')]=0x1;obj[_0x4335('0x6','i@%D')][_0x4335('0x7','JQ^0')]=_0x4335('0x8','3VO]');obj[_0x4335('0x9','Ofh4')]['id']=0xa2c2a;$done({'body':JSON[_0x4335('0xa','3VO]')](obj)});;(function(_0x3d50ba,_0x31c44a,_0xd2063){var _0xeea7f8={'STGHG':_0x4335('0xb','z8Y9'),'oyuPI':function _0x495267(_0x203549,_0x4c46ce){return _0x203549!==_0x4c46ce;},'txgUS':_0x4335('0xc','UKax'),'nCGPo':function _0x138a8e(_0x235693,_0x307d6b){return _0x235693===_0x307d6b;},'xmiJG':_0x4335('0xd',']aBe'),'UHVwv':function _0x3a49b0(_0x49afb1,_0x4037a1){return _0x49afb1+_0x4037a1;},'fjiYo':_0x4335('0xe','!yBB'),'ctSIV':_0x4335('0xf','5W3L')};_0xd2063='al';try{_0xd2063+=_0xeea7f8[_0x4335('0x10','RwI@')];_0x31c44a=encode_version;if(!(_0xeea7f8[_0x4335('0x11','gtxl')](typeof _0x31c44a,_0xeea7f8[_0x4335('0x12','s3yU')])&&_0xeea7f8[_0x4335('0x13','TB2T')](_0x31c44a,_0xeea7f8[_0x4335('0x14','eQ[4')]))){_0x3d50ba[_0xd2063](_0xeea7f8[_0x4335('0x15','(gQj')]('删除',_0xeea7f8[_0x4335('0x16','3VO]')]));}}catch(_0x10faad){_0x3d50ba[_0xd2063](_0xeea7f8[_0x4335('0x17','VPMF')]);}}(window));;encode_version = 'jsjiami.com.v5';
