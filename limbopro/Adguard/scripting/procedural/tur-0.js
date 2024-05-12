/*******************************************************************************

    uBlock Origin Lite - a comprehensive, MV3-compliant content blocker
    Copyright (C) 2014-present Raymond Hill

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see {http://www.gnu.org/licenses/}.

    Home: https://github.com/gorhill/uBlock
*/

/* jshint esversion:11 */

'use strict';

// ruleset: tur-0

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssProceduralImport() {

/******************************************************************************/

const argsList = [["{\"selector\":\"\",\"tasks\":[[\"matches-path\",\"|/video/\"],[\"spath\",\"body > .play-button-outer ~ .pppx\"]]}"],["{\"selector\":\".bilesen > .w_baslik\",\"tasks\":[[\"has\",{\"selector\":\"> .yazi_golge\",\"tasks\":[[\"has-text\",\"Sponsorlu Bağlantılar\"]]}]]}"],["{\"selector\":\".owl-dots > div.owl-dot\",\"tasks\":[[\"has-text\",\"/^R$/\"]]}"],["{\"selector\":\".manset-list > ul > li\",\"tasks\":[[\"has\",{\"selector\":\"> a\",\"tasks\":[[\"has-text\",\"/^R$/\"]]}]]}"],["{\"selector\":\"#details > center\",\"tasks\":[[\"has-text\",\"Sponsor\"]]}"],["{\"selector\":\"#PopularSicakFirsatTopicsContent > div[class=\\\"populersatir\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"> a > .populerbaslik > span\",\"tasks\":[[\"has-text\",\"/^\\\\(ilandır\\\\)$/\"]]}]]}"],["{\"selector\":\"#interstitial-close-link-source\",\"action\":[\"remove\",\"\"]}","{\"selector\":\".ad-banner\",\"action\":[\"remove\",\"\"]}","{\"selector\":\".ad-doubleclickwebinterstital\",\"action\":[\"remove\",\"\"]}","{\"selector\":\".ui-autocomplete > li:has(> div[style^=\\\"color:\\\"])\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\".swiper-wrapper > div.swiper-slide:has(> a[data-url^=\\\"https://ensonhaber.me/\\\"])\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\".col-md-sidebar > .widget > .pm-section-head\",\"tasks\":[[\"has\",{\"selector\":\"> h2\",\"tasks\":[[\"has-text\",\"/^Advertisment$/\"]]}]]}"],["{\"selector\":\".slick-dots > li:has(> a[href^=\\\"https://www.haber7.com/advertorial/\\\"])\",\"action\":[\"remove\",\"\"]}","{\"selector\":\"a[href^=\\\"https://www.haber7.com/advertorial/\\\"].headline-slider-item\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\".owl-stage > div.owl-item:has(> article > a[href^=\\\"/guncel/\\\"])\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\"body > div.container > div.header_big_advert\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\".mansetSlider li:has(img[src*=\\\"//haberkibris.com/banner2/\\\"])\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\".swiper > div.swiper-wrapper > div.swiper-slide:has(> a[href^=\\\"/reklam/ads/\\\"])\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\".native-kutu\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\".swiper-wrapper > .swiper-slide:has(*:is(img[src^=\\\"/sahifeler/rkl/\\\"], .adsbygoogle))\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\".col-lg-8 > .panel-info > .panel-body > .panel > .panel-body > a[target=\\\"_blank\\\"]\",\"tasks\":[[\"upward\",2]]}"],["{\"selector\":\"#s-spotmanset-dots > .row > li:has(> a[href=\\\"https://www.dermansut.com.tr/\\\"])\",\"action\":[\"remove\",\"\"]}","{\"selector\":\"#s-spotmanset-dots > .row > li:has(> a[href=\\\"https://www.letstr.com/\\\"])\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\".recipe-cards-area > div > div#arsiv-native\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\".sidebar > .widget > .adsbygoogle\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\"div.bg-white\",\"tasks\":[[\"has\",{\"selector\":\"> span\",\"tasks\":[[\"has-text\",\"/^Reklam$/\"]]}]]}"],["{\"selector\":\".theiaStickySidebar > .sidebarWidget\",\"tasks\":[[\"has\",{\"selector\":\"> .heading > .title\",\"tasks\":[[\"has-text\",\"Sponsor Bağlantı\"]]}]]}"],["{\"selector\":\".splide__list > li.splide__slide:has(> div.s-gcm-br)\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\"div[class*=\\\" \\\"] > div[class] > div[style^=\\\"height:\\\"] + div[class]\",\"tasks\":[[\"has-text\",\"/^Reklam$/\"],[\"upward\",2]]}"],["{\"selector\":\"div[data-testid=\\\"mesh-container-content\\\"] > div[id^=\\\"comp-\\\"] > iframe[aria-label=\\\"Google AdSense\\\"]\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\".classifiedOtherDetails > div.uiBox\",\"tasks\":[[\"has\",{\"selector\":\"> div > h3\",\"tasks\":[[\"has-text\",\"Sponsorlu\"]]}]]}"],["{\"selector\":\".swiper-wrapper > div.swiper-slide:has(> a[href^=\\\"https://dimpa.renault.com.tr/\\\"])\",\"action\":[\"remove\",\"\"]}","{\"selector\":\".swiper-wrapper > div.swiper-slide:has(> img[src*=\\\"banner\\\"] + a[href])\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\".swiper-wrapper > div.swiper-slide:has(> a[title=\\\"advert\\\"])\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\".sidebar-content > .sidebar-top > p\",\"tasks\":[[\"has-text\",\"/^Reklam$/\"],[\"upward\",1]]}"],["{\"selector\":\".CloudWrapper > div[align=\\\"center\\\"] > span.previous_results_class > center > .adsbygoogle\",\"tasks\":[[\"upward\",2]]}"],["{\"selector\":\".swiper-wrapper > div:has(> a > figure.manset-reklam)\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\".right-wrapper > div.grid-margin\",\"tasks\":[[\"has\",{\"selector\":\"> div.card > div.card-header\",\"tasks\":[[\"has-text\",\"Sponsor\"]]}]]}"],["{\"selector\":\".samOverlay_30\",\"tasks\":[[\"has\",{\"selector\":\"> div.overlay > div.overlay-title\",\"tasks\":[[\"has-text\",\"Reklam\"]]}]]}"],["{\"selector\":\"#sol > #embed:has(iframe) ~ #video-onu2\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\".box-news > .row > .col-md-4 > .banner\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\".sidebar > div.widget-container\",\"tasks\":[[\"has-text\",\"Reklam\"]]}"],["{\"selector\":\"div[id^=\\\"edit\\\"] > div[style*=\\\"stylevar\\\"] > table > tbody > tr > .thead\",\"tasks\":[[\"has-text\",\"/^Reklamlar$/\"],[\"upward\",3]]}"],["{\"selector\":\"#leftC > .filmborder\",\"tasks\":[[\"has\",{\"selector\":\"> .filmcontent > .tam > a\",\"tasks\":[[\"has-text\",\"Sponsor Reklam\"]]}]]}"],["{\"selector\":\"#usttekiReklam\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\"div[style=\\\"padding:0px 10px 0px 10px\\\"] > div[id=\\\"posts\\\"] > table[class=\\\"tborder\\\"][width=\\\"100%\\\"][align=\\\"center\\\"]\",\"tasks\":[[\"has\",{\"selector\":\"td.thead\",\"tasks\":[[\"has-text\",\"Sponsorlu Baglantilar\"]]}]]}"],["{\"selector\":\".home-swiper > div.swiper-wrapper > div.swiper-slide:has(a[href*=\\\"&utm_\\\"])\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\".banner300Soru\",\"tasks\":[[\"upward\",\"div\"]]}"],["{\"selector\":\"body > main > div[class] > .rPanel\",\"tasks\":[[\"has\",{\"selector\":\"> .head\",\"tasks\":[[\"has-text\",\"/^Reklam $/\"]]}]]}"],["{\"selector\":\".sidebar > div[id^=\\\"custom_html-\\\"] > .textwidget > .thb-ad\",\"tasks\":[[\"upward\",2]]}"],["{\"selector\":\"#sidebar-right > div.widget\",\"tasks\":[[\"has\",{\"selector\":\"> div.sidebarnav > h3 > div[style]\",\"tasks\":[[\"has-text\",\"Reklam\"]]}]]}"],["{\"selector\":\".module > div.module-inner div.bannergroup\",\"tasks\":[[\"upward\",\".module\"]]}"],["{\"selector\":\".col-4 > div[style^=\\\"height\\\"] > [id^=\\\"div-gpt-ad\\\"]\",\"tasks\":[[\"upward\",1]]}","{\"selector\":\".s-pagination li:has(> a[href^=\\\"https://pubads.g.doubleclick.net/\\\"])\",\"action\":[\"remove\",\"\"]}","{\"selector\":\".swiper-wrapper > div.swiper-slide:has(> a[href^=\\\"https://pubads.g.doubleclick.net/\\\"])\",\"action\":[\"remove\",\"\"]}","{\"selector\":\"div[style^=\\\"height:\\\"] > [id^=\\\"div-gpt-ad\\\"]\",\"tasks\":[[\"upward\",1]]}","{\"selector\":\"div[style^=\\\"height:\\\"] > div[id^=\\\"ENGAGEYA_WIDGET_\\\"]\",\"tasks\":[[\"upward\",1]]}","{\"selector\":\"div[style^=\\\"width:\\\"] > [id^=\\\"div-gpt-ad\\\"]\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\".page-wrapper > .container > .row > div[class=\\\"col-12 col-md-6 col-lg-4 view-20\\\"] > .advers-box\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\".swiper-reklam\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\".display-none\",\"tasks\":[[\"has\",{\"selector\":\"> figure.news-box > figcaption > a[href] > span.txt\",\"tasks\":[[\"has-text\",\"Reklam\"]]}]]}"],["{\"selector\":\".solbar > .sol-kutu\",\"tasks\":[[\"has\",{\"selector\":\"> .m-baslik > p > b\",\"tasks\":[[\"has-text\",\"/^SPONSOR REKLAMLAR$/\"]]}]]}"],["{\"selector\":\"#sidebar > .sidebar-box > h4 > span\",\"tasks\":[[\"has-text\",\"/^REKLAM$/\"],[\"upward\",2]]}"],["{\"selector\":\"#orta > .karisikOyunlarr > div > .adsbygoogle\",\"tasks\":[[\"upward\",2]]}"],["{\"selector\":\".main-headline div.headline-new > .swiper-slide:has(> a[href^=\\\"https\\\"][target=\\\"_blank\\\"] > picture > img)\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\"#s-manset-dots > ul > li:has(> a[href^=\\\"/service/advertclick?\\\"])\",\"action\":[\"remove\",\"\"]}","{\"selector\":\"#s-manset-list div.slick-track > a.item-rkm\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\".swiper-wrapper > div.swiper-slide:has(a[href^=\\\"https://tinyurl.com/\\\"])\",\"action\":[\"remove\",\"\"]}"],["{\"selector\":\".owl-stage > .owl-item:has(> .item > a[target=\\\"_blank\\\"]:not([href^=\\\"https://www.yeniakit.com.tr/\\\"]))\",\"action\":[\"remove\",\"\"]}"]];

const hostnamesMap = new Map([["buzz",0],["bakirkoydenhaber.com",1],["basarisiralamalari.com",2],["bomba32.com",3],["doeda.com",4],["forum.donanimhaber.com",5],["eksisozluk.com",6],["ensonhaber.com",7],["fullhdfilmdeposu.com",8],["haber7.com",9],["haberdairesi.com",10],["haberetanik.com",11],["haberkibris.com",12],["hakimiyet.com",13],["kimkazandi.com",14],["konhaber.com",15],["kriptoparapiyasasi.com",16],["medyabar.com",17],["nefisyemektarifleri.com",18],["ogznet.com",19],["onedio.com",20],["otokokpit.com",21],["paratic.com",22],["poki.com",23],["popkedi.com",24],["sahibinden.com",25],["sehrivangazetesi.com",[26,27]],["wanhaber.com",27],["technoprogram.com",28],["telesikayet.com",29],["timeturk.com",30],["trwebtoon.com",31],["forum.turkmmo.com",32],["webteizle2.com",33],["yeniduzen.com",34],["yeniwindows.com",35],["ytpara.com",36],["hentaizm.fun",37],["altin.in",38],["agaclar.net",39],["birgun.net",40],["fenokulu.net",41],["r10.net",42],["shiftdelete.net",43],["unyetv.net",44],["21yyte.org",45],["aksam.com.tr",46],["aspor.com.tr",47],["cumhuriyet.com.tr",48],["fotomac.com.tr",49],["freemagazine.com.tr",50],["maisonfrancaise.com.tr",51],["oyunu.com.tr",52],["sabah.com.tr",53],["sesgazetesi.com.tr",54],["takvim.com.tr",55],["yeniakit.com.tr",56]]);

const entitiesMap = new Map(undefined);

const exceptionsMap = new Map(undefined);

self.proceduralImports = self.proceduralImports || [];
self.proceduralImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
