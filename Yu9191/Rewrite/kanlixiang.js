/* 
看理想 4.0.8 
过期时间2023.12.15
脚本仅供学习和个人使用，不得用于商业目的或其他非法用途
使用脚本可能存在风险，包括但不限于造成账号异常、数据丢失等问题。使用脚本时，请谨慎操作，自行承担风险

[rewrite_local]

#https://api\.vistopia\.com\.cn/api/v\d/(user/profile|reader/section-detail) url script-request-header https://raw.githubusercontent.com/axtyet/Luminous/main/Yu9191/Rewrite/kanlixiang.js

https://api\.vistopia\.com\.cn/api/v\d/(user/profile|reader/section-detail) url script-response-body https://raw.githubusercontent.com/axtyet/Luminous/main/Yu9191/Rewrite/kanlixiangbd.js

^https:\/\/api\.vistopia\.com\.cn\/api\/v\d\/(user\/profile|reader\/section-detail|content\/article_list) url script-request-header https://raw.githubusercontent.com/axtyet/Luminous/main/Yu9191/Rewrite/kanlixiang.js
#看理想 开屏广告
^https:\/\/api\.vistopia\.com\.cn\/api\/v2\/home\/advertisement url reject-dict
[mitm] 
hostname = api.vistopia.com.cn
*/
var _0xodr='jsjiami.com.v7';function _0x1444(_0x21ee0c,_0x271c9f){var _0x499efc=_0x499e();return _0x1444=function(_0x1444f0,_0x28f99c){_0x1444f0=_0x1444f0-0xc2;var _0xb2b074=_0x499efc[_0x1444f0];if(_0x1444['RCgoFu']===undefined){var _0x432992=function(_0x106c5e){var _0xd7fae0='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x3a6cf6='',_0x38b2d8='';for(var _0x4bcd1e=0x0,_0x425750,_0x5ddc58,_0x57b8c0=0x0;_0x5ddc58=_0x106c5e['charAt'](_0x57b8c0++);~_0x5ddc58&&(_0x425750=_0x4bcd1e%0x4?_0x425750*0x40+_0x5ddc58:_0x5ddc58,_0x4bcd1e++%0x4)?_0x3a6cf6+=String['fromCharCode'](0xff&_0x425750>>(-0x2*_0x4bcd1e&0x6)):0x0){_0x5ddc58=_0xd7fae0['indexOf'](_0x5ddc58);}for(var _0x65ebb2=0x0,_0x5a58a7=_0x3a6cf6['length'];_0x65ebb2<_0x5a58a7;_0x65ebb2++){_0x38b2d8+='%'+('00'+_0x3a6cf6['charCodeAt'](_0x65ebb2)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x38b2d8);};var _0x4c375e=function(_0x14c255,_0x20818){var _0x147d4d=[],_0x3e61d3=0x0,_0x1b0108,_0x5754f0='';_0x14c255=_0x432992(_0x14c255);var _0x34b7c8;for(_0x34b7c8=0x0;_0x34b7c8<0x100;_0x34b7c8++){_0x147d4d[_0x34b7c8]=_0x34b7c8;}for(_0x34b7c8=0x0;_0x34b7c8<0x100;_0x34b7c8++){_0x3e61d3=(_0x3e61d3+_0x147d4d[_0x34b7c8]+_0x20818['charCodeAt'](_0x34b7c8%_0x20818['length']))%0x100,_0x1b0108=_0x147d4d[_0x34b7c8],_0x147d4d[_0x34b7c8]=_0x147d4d[_0x3e61d3],_0x147d4d[_0x3e61d3]=_0x1b0108;}_0x34b7c8=0x0,_0x3e61d3=0x0;for(var _0x163e9b=0x0;_0x163e9b<_0x14c255['length'];_0x163e9b++){_0x34b7c8=(_0x34b7c8+0x1)%0x100,_0x3e61d3=(_0x3e61d3+_0x147d4d[_0x34b7c8])%0x100,_0x1b0108=_0x147d4d[_0x34b7c8],_0x147d4d[_0x34b7c8]=_0x147d4d[_0x3e61d3],_0x147d4d[_0x3e61d3]=_0x1b0108,_0x5754f0+=String['fromCharCode'](_0x14c255['charCodeAt'](_0x163e9b)^_0x147d4d[(_0x147d4d[_0x34b7c8]+_0x147d4d[_0x3e61d3])%0x100]);}return _0x5754f0;};_0x1444['kdrNxG']=_0x4c375e,_0x21ee0c=arguments,_0x1444['RCgoFu']=!![];}var _0x46f4d5=_0x499efc[0x0],_0x2061fd=_0x1444f0+_0x46f4d5,_0x3c7649=_0x21ee0c[_0x2061fd];return!_0x3c7649?(_0x1444['JBHgFs']===undefined&&(_0x1444['JBHgFs']=!![]),_0xb2b074=_0x1444['kdrNxG'](_0xb2b074,_0x28f99c),_0x21ee0c[_0x2061fd]=_0xb2b074):_0xb2b074=_0x3c7649,_0xb2b074;},_0x1444(_0x21ee0c,_0x271c9f);}var _0x161682=_0x1444;function _0x499e(){var _0x39abf4=(function(){return[_0xodr,'OppjsBuhjFiMNaDmiI.gcoQBmW.Rv7enqeVSkFDb==','jGFdM33cQSorWOpcI8kdqq','W6eYW4OWjMhdPCkNpMrFyvG','vx7cN2WlW47cJbiDW7yVxHO','W7CnxsFdL8oOjmoMW68dWPmguCoiFmk6W77cJGldT8kJpSkPcSo2hSkKFdtdTSokj8kckNFcOcddJSonz8k2BSk/EmkiwKX6dW7cO8ocW5yupmkizmohd01si8o3WP5OW5anCJPeWRS','E8kpW6pcRCkaWRddKJuJDa','W63dPsuFj8kK','W6pdIghcQxhcJ0xcVG4','W6G0WQX7tZBcKmkW'].concat((function(){return['z2tcOfVdNmomvwhdTmorFW','vdzNW6bMzatdMmkIW7n4FZi','jmkXdZRdG8ozWQqsWOVdHSkNWOO','DmkWWQJdUcVcOdq','WPzxW5zxEYVcR8klc1S','WPxcRtexWPbpWRNcPmkxmu4GW5rB','F8oqu23cLCklW6LQW7pcPmk0WOGm','rMOQlI0YW5ZcJr5SzSoLBW','W5ZcSSoejSoceXnkrvpcJSoI','W6VdMcj+W6acW6iC'].concat((function(){return['jtVcIhmqW7tcQd8','W5uunSkPW7/cG8kw','ygxcPv3dLCkUa1xdG8o1qdKP','WObUiK3dVKKSzXKkWPVcPa','Ch7dRmk0d8k0zmk1g8kYWQLxW7a','aSoMkhxdHmkbdmkBWRT/W4ddGh41W5/cGSkjW7jmW6rpi8kuBSkiW5LjWQDypCkkW6RcQuNdT8o5W53dISoGWRbUW4yvjYVdVSowW7Pis1i2W5ZcPCkvW67cJHD/D3OWfXXXW6zCELNcNJ8ZFe/dMwuuW53dUCoKl8kbWPVdJCk7W7BcVuFcLvyPWPrIW6FdTWCOahfMW5JdIXpdLmoWumkUW5ddObq4W5y5W77dIg0xWRuBjuZdPtxcTqldUXpcR8owuudcH37cQCowW6Smg8kZW7qbWOCxctRdLSkMhr/dMerYW6nHcCkWFCkGWQdcICkPW4fSyfrsDmk6WR3dSJbvEtRcNXaLW6GQBNyUqmo8WQvoEtnUWRtcMCo2WO9EwH/cUr0FFG57pbSJW7NdK8kwWRbZcgKcpCoBySkdWRX0EwVcOSoWDSovWPuzoxuMsCoDuCoyWPrSFCoPxcPtBCkot8oJixyZW696WP/dIMy/WOr/mmoxsSkjWQhdKWlcOSkkWOWCm8ooWO7dGvZcKmoKWRGqW5uABmkvW7hcG34WoSoRdXW8W6BcMxVcMmo1WPRcSCo0aaL8FtOfvSkUW5TfurXTfe0kWOeyWOBdIwVcPCkbjJKtp8kDk8o0p25eW5pcIg3cO0hcG2ldR8oBW7qYmSo2WRBdVmkeWRXNWQ7dIMjNWRr4DwDrr8k7hW1qD8kkWROYW4CXlff3WPtcL27cLSkElCoMWR0ajxeRWP/dSSoMBsDNW5LXWRKLqfNdVhhcHmk5WRiaWR5JBCouW7e6xCkucGmdW7u1WRxcJg7cVvmzumouWRmcWQPSBHKUWRrwyCoBWRf0W4mdCIldTI7cPCovDriJFmk2nGW0x1tdRSoQxSo9j0yiWRzuj8kcWQjIzmoKjSoEzN0eCxZdO8o9W48jiSoClmkEW6JcT3itmwhcRNWyuhiEW4ddL03dRuRdOmkhlmohlc5wWPnxW6BcGGtcHCkxWO41k2/cI8kpiCkmW60MWRnMW5pdLCkDWRhdL0JdRCo+W5G1sSoRkComrCoeW5WhW77cGM5jW6vSWRWFW5dcKmo5WQ4fxCkuWOddGdRdNLDLW6uTW4pdJhTNW5SzaK4ys8k1zGBcUKGFFeNdNSkLW4NcM0mmCCkXgHK','dWVdHmonWPmWWRBcGKFdOSkQwvC','lmo9W5XXpeyZofVdLSkbmqlcNW','rgCTls0YW5JcQc1wxSoXEq'];}()));}()));}());_0x499e=function(){return _0x39abf4;};return _0x499e();};(function(_0x53cd14,_0x4650b8,_0x4df601,_0x1d3926,_0x2fffa0,_0x3701ae,_0x1d9e4e){return _0x53cd14=_0x53cd14>>0x5,_0x3701ae='hs',_0x1d9e4e='hs',function(_0x1d0bfa,_0x59ab72,_0xc5dcb5,_0x5e140d,_0x11a667){var _0x259f49=_0x1444;_0x5e140d='tfi',_0x3701ae=_0x5e140d+_0x3701ae,_0x11a667='up',_0x1d9e4e+=_0x11a667,_0x3701ae=_0xc5dcb5(_0x3701ae),_0x1d9e4e=_0xc5dcb5(_0x1d9e4e),_0xc5dcb5=0x0;var _0xb14169=_0x1d0bfa();while(!![]&&--_0x1d3926+_0x59ab72){try{_0x5e140d=parseInt(_0x259f49(0xcc,'lUV*'))/0x1*(-parseInt(_0x259f49(0xc8,'r^ay'))/0x2)+-parseInt(_0x259f49(0xcb,'b7&p'))/0x3+-parseInt(_0x259f49(0xcd,'lo4s'))/0x4*(-parseInt(_0x259f49(0xca,'[)pU'))/0x5)+parseInt(_0x259f49(0xc6,'d4[%'))/0x6+parseInt(_0x259f49(0xcf,'9j3b'))/0x7+-parseInt(_0x259f49(0xd6,'CzyM'))/0x8*(-parseInt(_0x259f49(0xda,'b7&p'))/0x9)+parseInt(_0x259f49(0xd9,'wInw'))/0xa*(parseInt(_0x259f49(0xd3,'wInw'))/0xb);}catch(_0x171b90){_0x5e140d=_0xc5dcb5;}finally{_0x11a667=_0xb14169[_0x3701ae]();if(_0x53cd14<=_0x1d3926)_0xc5dcb5?_0x2fffa0?_0x5e140d=_0x11a667:_0x2fffa0=_0x11a667:_0xc5dcb5=_0x11a667;else{if(_0xc5dcb5==_0x2fffa0['replace'](/[OSMpkQReuhWNBDIFgVnbq=]/g,'')){if(_0x5e140d===_0x59ab72){_0xb14169['un'+_0x3701ae](_0x11a667);break;}_0xb14169[_0x1d9e4e](_0x11a667);}}}}}(_0x4df601,_0x4650b8,function(_0x569a46,_0x199c03,_0x2f063a,_0x84f049,_0x516a8a,_0x600884,_0x3bfc6f){return _0x199c03='\x73\x70\x6c\x69\x74',_0x569a46=arguments[0x0],_0x569a46=_0x569a46[_0x199c03](''),_0x2f063a='\x72\x65\x76\x65\x72\x73\x65',_0x569a46=_0x569a46[_0x2f063a]('\x76'),_0x84f049='\x6a\x6f\x69\x6e',(0x14ad2f,_0x569a46[_0x84f049](''));});}(0x1920,0xc8031,_0x499e,0xcb),_0x499e)&&(_0xodr=_0x161682(0xc4,'&DIB'));headers=$request['headers'],headers['Cookie']=_0x161682(0xce,'eCpq'),headers[_0x161682(0xc7,'$[l0')]=_0x161682(0xc5,'DPK$'),headers[_0x161682(0xc3,'wInw')]=_0x161682(0xd7,'CL4X'),headers[_0x161682(0xd4,'Q(8E')]=_0x161682(0xd5,'3(CC'),headers[_0x161682(0xd8,'rIG4')]='c5xCVA59kzVo0ZOXbKTEcx75LuR4pXos1TzBAAXDnI51Cm3OseebWBye1GfLu0d6',$done({'headers':headers});var version_ = 'jsjiami.com.v7';
