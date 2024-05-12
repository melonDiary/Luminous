/*******************************************************************************

    uBlock Origin Lite - a comprehensive, MV3-compliant content blocker
    Copyright (C) 2019-present Raymond Hill

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

// ruleset: vie-1

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssSpecificImports() {

/******************************************************************************/

const argsList = [".qc","._9xtpcl.c4je67d.c1qs0lzc.c1hrlkpu.cc2icwl.c1i0iccj.cfd18df,\n._9xtpcl.e1e6v8dt,\n.blbew80,\n.llnefd1,\n.lpp0nsn,\n.luq51lg.a13wihj,\n.pointer-events-auto.block,\n.zbgpvb19.zbgpvb16.zbgpvbj.zbgpvbh.zbgpvbg.zbgpvbf.zbgpvbe.zbgpvb1",".parent.special,\n.partner-me",".ads",".banner",".ad-floater,\n.popunder-link,\n.promotion-popup,\n.video-ad-layer",".qx_135","#footer_fixed_ads",".float-ck",".container > .row > center","[id^=\"Balloon_\"]",".cash-fish,\n.cash-fish-pc,\n.preload-pc,\n.top-mobile-banner",".ads-gg-top,\n.container + .col-xs-12.content_wrap,\n.content > .content > .content,\n.wrap-single > .pagination.text-center",".float-ck-center-lt","#custom_html-42","#mp-preload-popup-overlay,\n.separator","#pc-preload-modal,\n#popup,\n.quang-cao","#popup-giua-man-hinh",".ad-container",".banner-sticky-footer-wrapper",".sticky-footer",".ads-wrapper",".code-block-4",".firstmessfloadright.samItem,\n.my_nonresponsive_ads,\n.my_responsive_ads,\n.samBannerUnit,\n.samTextUnit","#popup_banner_beta","#bar_float_r,\n.quangcaomb",".w1e48c4420b7073bc11916c6c1de226bb","#f186fb23a33995d91ce3c2212189178c8","#quang-cao",".toogle-ads",".ads-container","#player + div[id]",".preload","#xs-addd0",".ai-viewport-1",".homePageAds",".offer__btn","#overlay",".adsMobile,\n.col-chat,\n.offer-rating.widget-offers__list",".dcmm-button-player.row",".adLogoPlayer",".banner-top",".float-ck1,\n.module_ahlaejaba","#bottomFixedDiv,\n#js_pup_navigation,\n#wAdList,\ntr[id^=\"word_\"]",".jw-logo",".catfish-ck",".t_logo",".gnarty-offads","#fbox-background","#mobile-ads","a[href^=\"/cgi-bin/to.cgi\"]",".popup-container","#BaoMoi_HalfPage,\n.masthead-wrapper",".bm_B > div,\ndiv.bm_Ii",".monkey-content-duoicanbiet,\n.monkey-section-tinnoibat,\ndiv.monkey-qc","#menu-main-menu > .menu-bongdainfo.menu-item.nav-item.tt-bdif,\n#menu-main-menu > .menu-nha-cai-uy-tin.menu-item.nav-item.style-2 > .nav-link,\n.c-int.d-lg-none.d-block,\n.col-xl-4,\n.container > .row > .col-12,\n.d-lg-none.d-block.p-1.text-center,\n.justify-content-center.d-flex > .btn-primary.btn,\n.matches__item--footer,\n.mt-1.d-lg-flex.d-none.sub-menu,\na.d-lg-none.d-block:nth-of-type(2)","#quangcaopc","#wap_bottombanner",".marquee-container","#match-child-1",".match-detail__offer",".company",".menu-cuoc-8xbet",".list-dat-cuoc","div[id^=\"AdLayer\"],\ndiv[id^=\"ad_\"]",".widget.widget_text",".container.mt-1.d-none.d-lg-block,\n.menu-item-object-custom,\na.rlw-extra-i.py-3.flex-grow-1",".sub-menu.d-none.d-lg-flex",".align-items-center.justify-content-between.d-flex.col-12 > .d-lg-none.d-block",".modal-backdrop.show","div[id^=\"dnn_\"]",".fade.show","a[target=\"_blank\"][rel=\"nofollow\"]","#text-14,\n.hocwp-ads",".bannerBox,\n.footerBanner,\ncenter > [href*=\"tlink.vn\"]",".mb-4 > [style=\"min-height: 350px;\"]",".fixed","a[rel=\"noopener noreferrer\"]",".widget-wrap.widget_text","#shoppe_aff_button","#custom_html-7",".div_box_adv",".alldiv ~ div[class]","div.box-aside",".ad-pin-right-bottom",".adv",".top-right",".line-ads","#home_header",".popup",".banner-ads,\ndiv#recent-content:nth-of-type(1)",".ad-manager-forum-list-bottom,\n.ad-manager-forum-list-top,\n.ad-manager-header,\n.ad-manager-thread-view-bottom,\n.ad-manager-thread-view-top,\ndiv[style=\"margin:6px 0px 6px 0px\"]",".google-auto-placed",".catfish-bottom","#topbanner","#catfish",".btn_small_fix_container",".ads-home-feed",".left-slider",".text-center.adsense",".banner-bot-mobile,\n.banner-top-mobile","[href^=\"https://shope.ee\"]","#latest-censored-videos > .row > div.pb-3.col:nth-of-type(1),\n.v3sb-box",".cat-fish.a-play,\n.overlay",".anhbn-qc",".ezo_ad",".ezoic-ad",".advbox","div[style=\"padding: 0px; margin: 10px 0 0 0 ; width: 100%;text-align: center;min-height: 280px;\"],\ndiv[style=\"width: 100%; min-height: 240px; text-align: center;\"],\ndiv[style=\"width: 100%; min-height: 90px; text-align: center;\"],\ndiv[style=\"width: 100%;text-align: center;min-height: 280px;\"]","#link-view > center:nth-of-type(1)","[id^=\"bdaia-widget-html\"]:has(.widget-inner > [href*=\"premiumvns.com\"])","p[style=\"color: rgb(174, 174, 174); margin-top: 10px; margin-bottom: 20px;\"]","#countdown,\n.bottom_cnt_ad,\n.tp_ads_incontent,\ndiv.ad_separator","#myModal,\ndiv[id^=\"adsphim-\"]",".movie-banner","#js-read-body > .text-center.pb-3,\n#js-read__body + .mt-3,\n.nh-read__alert,\n.tpm-unit,\n[href$=\"/goout/lazada\"],\nsection.nh-section:nth-of-type(5)","div[class*=\"ads\"]",".mp-adz",".ads-embed",".adv_phim,\n.fixed_bottom","[class^=\"box_adv_ele\"]","#tdi_129",".my-banner","#IMAPointernctPlayer,\n.adv_home_300_250,\n.nqc-zone","#itro_opaco","#ads_preload,\n.show.ads-sticky",".i9bet","#mobile_content_bottom,\n.BanerTop100,\n.adv-300-right",".popUpBannerBox","a[target=\"_blank\"][rel=\"nofollow noopener\"]","#mobile_content_top,\n#p-GMH","a[rel=\"nofollow\"]",".box_option",".sda-catfish","#adspm4u","#itro_popup",".ads-pc",".shadow-card + .mt-2",".btno-group.d-none.d-lg-flex,\n.container > .mt-1,\n.container > .mt-3,\n.d-lg-block,\n.justify-content-between.d-lg-none.d-flex.btno-group,\n.menu-item > a[rel=\"nofollow\"],\n.topButton,\n.widget_offer,\nheader > .container",".btn-odds",".footer-banner","#adsposttop","#adrighttop",".adbox",".sk_balloon",".catfix","#scriptDiv",".adsbygoogle",".pc-catfixx",".pc_catfix_adv",".stream-item","#footer-widget-area",".box,\n.pum",".truct-catfish,\n.truct-widget","div#adsChapterTop","#ad_info_top",".footer-info","[class*=\"_banner\"]",".ads-menu-item,\n.dcmm-button-player-item,\n.divdatcuoc",".show-ads-banner,\n.widget","a[target=\"_blank\"][rel=\"dofollow\"]",".item-qc",".Header_topBanner__1xD-2,\n.styles_bannerInArticleWrapper__rPPJH,\n.styles_topBanner__NL_gW","#BigBanner,\n.ads_position",".ads_txt","#download_appnew,\n.box-most-viewed.box-course.box-slide,\ndiv.ads_ads,\nh3.sub-title,\nul.list:nth-of-type(2)","div[class^=\"adbox\"]","a.news__item--action:nth-of-type(2)","#article > .pt-3.text-centers,\n.text-muted","#balloon,\n.affiliate,\n.player-midpoint-progress",".banner-masthead",".button-action-float-banner",".adsphim-mobile-popup",".wtt-ads","#ouibounce-modal","#adstop2,\n.ads-item,\n.col-lg-4.hidden-xs.d-flex.flex-column.address-wrap,\n.float-right",".adv-side-bar,\n.banner-adv-wrapper,\n.banner-adv-wrapper2,\n.item-qc1",".td-container > div.td-pb-row > .td-pb-span12,\n.td-container-wrap.td-logo-wrap-full.td-banner-wrap-full,\n.td-crumb-container,\n.td_block_template_1.tdi_11.td-g-rec-id-sidebar,\n.td_block_template_1.tdi_28.td-g-rec-id-custom_ad_1.td-g-rec,\n.td_block_template_1.tdi_30.td-g-rec-id-sidebar.td-g-rec,\n.td_block_template_1.tdi_4.td-g-rec-id-custom_ad_1.td-g-rec,\n.td_block_template_1.tdi_6.td-g-rec-id-sidebar.td-g-rec,\n.td_block_template_1.tdi_9.td-g-rec-id-custom_ad_1.td-g-rec",".Float_ads,\n.container_top[style=\"line-height:0;\"]",".code-block-8.code-block,\n.ez-video-wrap",".underplayer_btn",".v4j-header > center",".ff-banner","#qc_clgt",".advertisement","a[rel=\"nofollow sponsored\"]","#antiblocker,\n#antiblocker_underplayer",".entry > a[target=\"_blank\"],\n.single-content > a[target=\"_blank\"],\n.wpbcap-laptopvang,\n[href*=\"hnmac.vn\"],\n[href*=\"laptopvang.com\"],\n[href*=\"macbookgiasi.vn\"],\n[href*=\"macone.vn\"],\n[href*=\"minhtuanmobile.com\"],\n[href*=\"vender.vn\"],\ndiv.\\35 fb1ed6025b0b.widget:nth-of-type(3)",".header-fix-ads,\n.lepopup-popup-container,\n.lepopup-popup-overlay",".bbMediaWrapper-inner > .samCodeUnit,\n.js-replyNewMessageContainer.block-body > div.samCodeUnit > .samItem,\n.p-footer,\n.samVideoOverlay","#app-web + .container[style=\"margin-bottom: 30px\"],\n.item.item-betnow,\n.sv-link.btn-bet-top,\n[href^=\"/goto\"]","#m-bet","div[class*=\"size-\"]",".ibs-bet",".sticky",".container-banner,\n.modal-ads,\ndiv[class^=\"slide-bar\"]",".btn-betting,\n.datCuocBTN,\n.modelAds,\n.nhacaiuytin,\n.text-running",".btn-bottom-right-append-player,\n.images-bnr-bellow-append-custom,\n.images-top-pl",".footer-button-sign-in.hide-desk,\n.hide-desk.wrap-content > .wrap-btn-action,\n.menu-right-slide","#layerLogo","#backgroundPopupp,\n#popupContact",".black-layout > div:nth-child(2),\n.popup_u,\ndiv[style^=\"position: absolute;top: 0;\"]","div#bnads","div[id^=\"float\"],\ndiv[id^=\"hide_float\"]","#iklan-atas-wrapper","#ad-floating-right,\n.ad-floating-left","#sponsor-balloon,\n#top-banner-pc",".box_odds",".banners",".banner_list,\n.item-more,\n.nc_sidebar_home,\n.widget-sidebar-block",".body_wrapper1",".no-auto-popup",".detail-odd-title,\n.div-ad-allpage-top,\ndiv[id^=\"div-ad-list-\"]","[href=\"https://8xbe52.com\"]",".a--d-wrapper",".v4j-header.v4j-content","#adx,\n.banner-preload,\n.catfish-top,\ndiv.banner-catfish-bottom",".baloon,\n.col-sm-10.kqcenter,\n.kqbackground.vien ~ a[target=\"_blank\"]","#menubentrai,\n.gnartyx-offads",".btn-bet-top,\n.item-betnow",".box-host","[href*=\"cellphones.com.vn\"]",".textwidget",".container > div[style^=\"height: 228px\"]","#right_float,\n[id$=\"float_banner\"]",".link-gold,\n[id^=\"banner\"]",".ad-botton,\n.topbanner","#ad_global_below_navbar","#mobileCatfishz,\n.code-block",".ads-nlp",".b-player",".info-footer:nth-child(4)",".mobile-catfix",".banner_top","#IMAGE635 > .ladi-transition.ladi-image,\n#IMAGE639 > .ladi-transition.ladi-image,\n#POPUP648,\n.backdrop-popup","#pc-catfix,\n.lightbox-player-pc,\ndiv[id^=\"preload-\"]","#banner-top-mobile,\n#pc-top-banner,\n#quang-cao-2",".pc-catfix,\nmobile-catfix","#container-ads","#pm_quangcao","#catfish-banner,\n.center-screen.backdrop,\n.ibetlogo,\n.topless",".boxzilla-bottom-right-container,\n[href^=\"https://gotrackecom.info\"]",".quangcaomobile",".ads-floatingads,\n.banner-item,\n.top-nha-cai","#ad_balloon",".adpia_banner",".mct_-bet-bot,\n.mmo,\n.mmo-inner",".show.fade",".fixed-bottom,\n.popup-banners",".sbAdv","#adsTopInPageBanner,\n.adsContainer,\n.header__auth > .details__devices-list",".elementor-widget-image",".box-rating","#ab_ctl,\n.bannerads","#ads_large_detail,\n#banner_top,\n#box_qua_tang_vne,\n#raovat,\n#sis_popup,\n#supper_masthead,\n.article_ads,\n.article_ads_300x250,\n.banner_mobile_300x250,\n.section_ads_300x250","div[class*=\"qca\"]",".content_middle_rightbar","#wap_bottombannerr,\n.grid-match[style]","#top_oddd","[href^=\"https://www.toprevenuegate.com/q7rbxxz1v\"]",".hd-tube-desktop,\n.hd-tube-mobile",".v4j-watch-1.v4j-content,\nbody > div[class]","#idAdLink",".BT-Ads,\n.qc-inner,\ndiv.qc_TC_Chap_Middle,\ndiv[id^=\"qc_M_\"]",".PanelScroller.Notices",".expand-static-banner,\n.preload-banner,\n.static-banner","#mp-adx-b32",".banner-link,\n.block-catfish.text-center.d-lg-none.d-block,\n.container > ul,\n.container.mt-1,\n.logo-cnt > .d-lg-none.d-block,\n.menu-cuoc-one88,\n.mt-5.d-lg-none.d-block.pb-2.text-center,\n.offer,\n.pl-lg-0.col-xl-4,\n.row.d-none,\n.widget-offers__list,\na.btn-odds[rel=\"nofollow\"],\ndiv.d-lg-none.d-block:nth-of-type(3)",".menu-top-nha-cai",".v4j-header > a[target=\"_blank\"]",".adspopupgiua,\n.adspopupleft,\n.adspopupright,\n.float-ckgiua",".js-editors-choice-slider.editors-choice-slider > .adsbygoogle",".wppopups-whole","#hide_float_right",".btn-betnow,\n.ft-box,\ndiv.vebo-sp.container:nth-of-type(7)","#ds_top,\n.hidden-md.right.col-3,\nbody > .container > div",".bet-btn-8423,\n.btn_betnow_632132,\n.highlight,\n.images-bnr,\n.images_fixed","#popup_fi",".show.modal",".sticky_bottom",".xx-ads","#divExoLayerWrapper",".banner-catfish-bottom",".a-header,\n.apu,\n.header","div[style^=\"position:fixed;inset:0px;z-index:100000;\"]","#video_player ~ div[id]",".sponsor-balloon",".footer-fixed-br-container","#video_player + div[id]","body > [style*=\"position: fixed;\"]",".bg-black.w-full.items-center > .relative.px-2.flex","#AgeModal",".sdzhead","#hide_catfish",".cp-modal-popup-container,\n.simple-banner",".under-player-pc-banner",".oddsCompany",".btn-od",".d-lg-flex.d-none.p-0.company.flex-1.table","div[data-value=\"1\"]","[data-clm=\"ccccc2\"],\n[data-id=\"ap3poapup\"]",".navbar-ex8-collapse","#bnc1","#bnc0","#sticky",".grid-match__footer,\na.d-lg-none.d-block:nth-of-type(1)","#banner-shopee,\ndiv[style^=\"position: fixed; bottom: 0px;\"]","#invideo_wrapper,\n.Ads,\n.mobile-catfixx","#header-ads,\n.catfish-img","#qc-kpgame","#ad-container,\n.uniad-player + div[style]","#adsbottom,\n.happy-under-player,\n.vailo-sticky,\n.vailo-under-navbar,\n.vailo-under-navbar-mobile","#position_full_top_banner_pc",".gc-header__wrapper + div[style]",".button-dangkyngay",".afw-topbanner","#adm-slot-7234","#banner3double","div[id^=\"adsWeb\"]",".bgadmtoptotal",".bannertop",".top-right-col-ads",".my_responsive_add,\n.titleBar + *,\n[class1=\"my_responsive_add\"]","#background_bg_link,\n#subRightAbove,\n.module3",".admicro",".top-header",".top_page","#subiz_wrapper,\n.ad-embed",".features-r","#bannerMasthead,\n#desktop-home-top-page,\n#mobile-home-middle-1,\n#mobile-home-middle-2,\n#mobile-home-top-page,\n#mobile-top-page","#banner-add-lixi88,\n.banner-home",".top-advertisment","._ning_outer","#Adsv,\n.right-banner > a[title]",".__ads_click","#neo-right-ads","#BannerAdv","#gallery-2,\n.hd-cate-wrap,\n.home-qc-wrap,\n.home-sec-right .widget_media_image,\n.noname-left",".chapter-content .min-h-\\[275px\\]",".Advs_adv-components__1nBNS.Advs_adv-300x250__2eyhC.Advs_no-content__RWwW2,\n.HotTagGlobal_fixed-height__1f50i",".exp_qc_share",".c-banner",".bg-gray,\n.sidebar > div[style]","div[id^=\"adsbg\"]",".banrpstn","#myElementz,\n.bannerinfooter",".LRBanner",".bg_allpopupss,\n.bgal_popndungalal,\n.bn1,\n.bn2,\n.box_quangcao_mobile_320x50,\n.box_text_qc,\ndiv.news-left-related:nth-of-type(2)","#tubia","[id^=\"admzone\"]",".khw-ads-wrapper.clearfix",".banner-bottom-menu,\n.popup-bg,\n.showpop,\n[href*=\"bit.ly\"]",".background-blur,\n.qc-benphai,\n.qc-bentrai","#adrightsecondx,\n#adrightspecial,\n#adrightspeciallinks,\n#adsrighttop,\n#adsuggestion",".advertTop,\n.hsdn > li:has(.adsbygoogle),\n.module_plugins",".ads-sponsor,\n.khw-adk14-wrapper","[id^=\"adv\"]",".quang_cao_pc_right_hoc_tap",".ads_shortcode",".admicro_top","#adop_bfd,\nins[class*=\"adsby\"]",".sponsor-zone","div[id^=\"ads_\"]","#top-adv",".bannerchuyenmuc,\n.show-qc-home,\n.show_qc","#popup_center","div[style=\"text-align:center;margin-top:0px;margin-bottom:0px;\"]",".box-banner","div[class^=\"adv-\"]",".ads-970x280","#pc-top-container,\n.align-items-center.justify-content-between.d-flex.text-center.bg-grey-6.w-100,\n.d-flex.justify-content-between > div > div.d-flex.justify-content-around.mt-4","#myCarousel,\n.banner-boder-zoom",".sam-slot","#adm-slot-7299",".block:has(.block-container > .block-body > a[href]),\n.block:has(.block-container > .block-body > ins)",".asd-headt,\n.detail__foru,\n.mb-40.section__qadd,\n.super-masthead,\n.top-banner,\n[class*=\"box-home\"],\n[data-marked-zoneid=\"tn_detail_danhchoban\"],\n[data-marked-zoneid=\"tn_detail_quantam\"],\n[id^=\"dablewidget_\"],\nzone","div[class$=\"_ads\"]",".zone-top",".c-banner-item","div[id^=\"adsMobile\"]",".fyi",".ads-common-box",".p-body-pageContent > table[style=\"width:100%;display:inline-block;background: #fff;\"]",".jsx-3569995709,\n.micro,\n.middle-comment-promotion,\n.pro-container,\ndiv[style=\"width:300px;height:250px\"],\ndiv[style=\"width:300px;height:600px\"],\ndiv[style=\"width:320px;height:100px\"]",".container .desktopjszone,\n.mobilejszone","#header-ads-full,\n.ads-responsive,\n[id^=\"ads-\"]","#LeaderBoardTop,\n#admbackground,\n#adsMainFooter,\n.Mobile_Masthead_TTO_Wrapper,\n.adm-bot,\n.box-qad,\n.content-amuasam,\n.detail__qc,\n.section__r-vietlot,\n.wrapper-ads-mb",".clearfix.adregion,\n.visible-md.header-banners","[class^=\"sticky-top\"],\n[href*=\"vietcombank.com.vn\"]",".Flagrow-Ads-under-header","#closeAds",".vfs_banner","#vmcad_sponsor_middle_content,\n.box-adv,\n.mb-20.col-right-ads,\n.vmcadszone","section.mar20:nth-of-type(2),\nsection.mar20:nth-of-type(4)","#banner-dai-bottom,\n#banner-dai-top",".banner_site,\n.notify_auto,\n.sidebar_box_gray",".v-element > .v-responsive,\ndiv.message--post",".sys-ads",".bf-3-primary-column-size.bs-vc-sidebar-column.vc_col-sm-3.vc_column_container.bs-vc-column.wpb_column > .wpb_wrapper.bs-vc-wrapper",".wrapper-adv","#banner1ab",".ad_by_yellowpages,\n.banner_add","#Zingnews_SiteHeader,\n.znews-banner","#vbplayer + div[class][style],\n.jw-button-image,\n.jw-media > div[style^=\"max-height:5%;\"]","#ads_location,\n.block.ad",".odds-button,\n.odds-button2",".banner-bottom-append-custom,\n.button-in-player-box,\n.logo-top-right-append-custom","#tut4ktream_idAdLink","#banner_preload,\n.doc-truyen-ads-d1,\n.doc-truyen-ads-d2","li.special.parent"];

const hostnamesMap = new Map([["*",0],["www.buomtv.app",1],["ghienphim.art",[2,3,4,5]],["appvn.com",3],["doctailieu.com",3],["javtopxx.com",[3,103]],["linkerpt.com",[3,110]],["vlxx.moe",[3,93,182,216]],["soikeo365.net",[3,243]],["cungthi.online",[3,147]],["antt.vn",3],["bongda24h.vn",3],["kienthuc.net.vn",[3,361]],["nghenhinvietnam.vn",3],["nhadautu.vn",3],["saostar.vn",3],["v.xemphimviet.xyz",[3,4,5,409]],["truyengihotnay.com",[4,154]],["truyengihotnha.com",[4,154]],["truyengihotqua.com",[4,154]],["tenmientruyengi.net",[4,154]],["thichxemphim1.net",[4,248]],["truyengihotdo.net",[4,154]],["truyengihotnha.net",[4,154]],["truyengihotqua.net",[4,154]],["truyengihotzay.net",[4,154]],["megalink.pro",4],["baoxaydung.com.vn",4],["oj.husc.edu.vn",4],["taichinhdoanhnghiep.net.vn",[4,85]],["tienphong.vn",[4,318,379,380]],["toquoc.vn",4],["hentaivn.bid",6],["bichill.biz",7],["dongchill.co",[7,33]],["dongphim3s.info",[7,37,185]],["phim18abc.net",[7,13,44,236]],["phimmoi.to",[7,18,238,293]],["kenhgamez.biz",8],["sieudamtv.cam",[8,16]],["247phim.cc",[8,17,18]],["checkgaigoi4.cc",8],["sexvn1.cc",[8,22]],["thiendia2.cc",[8,23]],["dailyphimz.com",8],["phimplay24h.com",[8,135]],["movies.vkoolz.com",[8,17,117]],["rphang.la",[8,189]],["gunnylau360.net",8],["gunnymienphi.net",8],["mythethao.net",[8,233]],["phim.vkoolkk.net",[8,37,45,252]],["ww2.vuaphimmoi4.net",[8,17]],["vuonhoalan.net",[8,256]],["phim33.tv",[8,299]],["vungtv.us",[8,17,238]],["phim18vip.xyz",8],["phimno4.xyz",[8,404]],["keonhacai5.biz",[9,10]],["xemtivingon.org",10],["phim18vn.biz",11],["phim18hd.me",11],["phim18hd.top",[11,295]],["tamlinh247.biz",12],["cliphot69.blog",[13,14]],["phevkl.cam",[13,15]],["gvnvh18.com",13],["topviet69.com",13],["xem14.com",[13,174]],["hh3dhay.lol",[13,199]],["xemphim.me",[13,214]],["mobiblog.one",13],["ffmovie.online",[13,259]],["phimvuihd.org",13],["hh3dhay.pro",13],["sayhentai.pro",13],["vutruphim.tv",[13,304]],["cliphotvn.xyz",13],["anivn.club",[17,28]],["boctem.com",17],["tvhayss.com",17],["dragonphim.tv",[17,95]],["hoathinhtq.tv",[17,95]],["hh3d1.xyz",[17,95]],["xemphimchill.xyz",[17,18,95,128]],["ephoto360.com",[18,87]],["thiepmung.com",18],["hotphim.vip",18],["ophimhd.vip",[18,117,310]],["biphims.cc",19],["biphims.co",19],["lxmanga.cc",[20,21]],["phimyeuthichb.com",20],["truyensextv.com",20],["chillhaytv.click",24],["mphim14.com",[24,119]],["protruyen7.fun",[24,37]],["phimtho.net",24],["phimmoinay.vip",[24,133]],["soikeoz.vip",[24,208]],["tuoi69zz.click",25],["hd.viet69.click",[26,27]],["sexvip1z.com",[26,27]],["sex.heovl.io",[26,27]],["sex.heovl.online",[26,27,260]],["sexvietz.co",27],["javhd.tech",[27,291]],["heovktgame.club",29],["ketqua247vn.club",30],["keoso.me",[30,208,209]],["quat2vn.club",31],["abysscdn.com",[31,44]],["freeplayervideo.com",[31,44]],["player-cdn.com",[31,44]],["geoip.redirect-ads.com",[31,44]],["vn1.yeusex.club",32],["huphimtv.com",[32,100]],["vn3.sexviet1.net",32],["subnhanh.cx",[33,37,180]],["subnhanhvl.net",[33,37]],["subnhanh.today",[33,37]],["mephimtv.co",34],["traderviet.co",35],["tructiepdabong5.co",[36,37,38,39,40]],["nusi.org",[36,56,57,58,59,60,61,62,67,70,144,267,268]],["biphim.online",[37,131,180,258]],["xoivo2.online",[39,40,159]],["123nhadatviet.com",41],["123nhadatviet.net",41],["tuoitre.vn",[41,386]],["tuoitrenews.vn",41],["4rkinggame.com",42],["live.7mvn2.com",43],["api.anime3s.com",[44,46]],["tructiep10.xoilac16.org",[44,71,191,192,193,220,274]],["xem.bdhub.xyz",[44,403]],["bitvtom1000.xyz",44],["watch.rkplayer.xyz",[44,406]],["ahaphimz.com",45],["vphims.net",45],["phimvietsub.pro",[46,279]],["subnhanh.xyz",[46,48,117,279]],["animetvn4.com",[47,48,49]],["animet1.net",[47,48,218]],["asianbookie.com",50],["asideway.com",51],["baomoi.com",52],["m.baomoi.com",53],["baonga.com",54],["blackacrebrewing.com",[55,56,57,58,59,60,61,62]],["cc-briance-combade.com",[56,57,58,61,66,67,68,69,70,71]],["planetrammstein.com",[56,57,58,61,68,70,138,139,140]],["phym18.lol",[57,200,201]],["avvietsub.pro",[57,200,275]],["nhentaivn.pro",[57,200,277]],["fora.tv",[57,296]],["xemtv.tvhayhd.tv",[57,301]],["xoilaczzh.tv",[57,60,62,139,268,298,305]],["phimsexsub.xyz",57],["rakhoiz.com",[61,139,140,144]],["bongda12h365.com",63],["thethao12h.me",[63,212]],["www.bongdalu66.com",64],["canhrau.com",65],["topthuthuat.com",65],["tructiep1.90phut12.live",[69,71,190,191,192,193]],["thapcam4.net",[69,139,191,246,247]],["noitu.pro",[69,278]],["blog.abit.vn",[69,157,247,314]],["mitome.tv",[70,139,140,297,298]],["banhkhuc3.net",[71,191,192,193,219,220]],["vebo16.net",[71,191,192,193,219,220]],["vebo4.net",[71,191,192,193,219,220]],["chatboxn.com",72],["chouc.com",73],["www.clbgamesvn.com",74],["congthucvatly.com",[75,76]],["phuongtrinhhoahoc.com",[76,137]],["phimhaytv.info",76],["contuhoc.com",77],["www5.cbox.ws",77],["cryptoviet.com",78],["cunghocvui.com",79],["dexuat.com",80],["diadiem.com",81],["mb.ditnhauvietnam.com",82],["javhdvip.net",82],["doisongphapluat.com",83],["dubaotiente.com",[84,85]],["bongda.com.vn",[85,326]],["giadinhonline.vn",[85,340]],["nongnghiep.vn",[85,340]],["vietnamnet.vn",[85,392]],["ebookbkmt.com",86],["fsharetv.com",88],["fullcliphot.com",[89,90]],["mannhan1.pro",[89,276]],["forum.gocmod.com",[91,92]],["www.tiengnhatdongian.com",92],["ycongnghe.com",[92,177]],["haysex3xs.com",93],["hhtrungquoc3.com",[94,95]],["truyensieuhay.com",[94,156]],["animeweb.vip",[94,95]],["hhtq3.vip",[94,95,207,308]],["motchilltvzz.com",[95,117]],["phimbocn.com",95],["phimhoathinh3d.com",95],["hhchina.me",[95,205,206]],["hhtqnet.me",[95,207]],["hoathinh4k.net",[95,229]],["motchillltw.net",95],["truyenhentaivn.org",[95,272]],["hhtqvietsub.top",[95,206,207]],["hhninja1.tv",95],["hhtm.tv",95],["hoathinh3d.tv",95],["hoahoc247.com",96],["hoidap247.com",97],["homedy.com",98],["hotruyen.com",99],["www.iosviet.com",101],["javtiful.com",102],["lacaigi.com",104],["laptrinhcanban.com",[105,106]],["yhocdata.com",[106,179]],["lichngaytot.com",107],["lichvannien365.com",108],["link1s.com",109],["lmssplus.com",111],["loigiaihay.com",112],["luotphimtv1.com",113],["webphim2.com",[113,172]],["cdnwp.icu",113],["luotphim1.net",113],["luotphim2.net",113],["luotphimtv1.net",113],["luotphimtv.vip",113],["mephimtvi.com",114],["metruyencv.com",115],["metruyencv.info",115],["metruyencv.net",115],["mmo4me.com",116],["baodauthau.vn",[116,318]],["motphimtvv.com",117],["motchilli.org",[117,266]],["motchillw.com",118],["muabanraovat.com",120],["muaxegiatot.com",121],["nettruyenx.com",122],["nhaccuatui.com",123],["phim202.com",124],["phimcuon.com",125],["phimdinhcao.com",[126,127,128]],["phimdinhcao.net",[126,127,128]],["phimlongtieng.net",[126,127,128,130]],["phimhaymoii.com",129],["phimlongtieng.com",130],["phimmoi4s.com",[131,132]],["xem.tructiepnba.com",[131,153]],["xemtivi4k.com",[131,175]],["2ketqua.net",[131,217]],["abtruyen.net",[131,211]],["damconuong.net",[131,148]],["truyenchu.com.vn",[131,338]],["nghean24h.vn",131],["vidian.vn",[131,390]],["vbfast.xyz",131],["phimmoisz.com",[133,134]],["phimss.com",136],["tructiep.caheo8.live",[140,194,195,196]],["tructiep1.cakhia23.live",[140,194,195,196]],["tructiep12.cakhia24.live",[140,194,195,196]],["tructiep9.rakhoi6.live",[140,194,196,198]],["quantrimang.com",[141,142,143]],["hoatieu.vn",[141,166,194,353]],["vndoc.com",[143,166]],["khoahoc.tv",143],["download.com.vn",143],["download.vn",[143,174,343]],["gamevui.vn",143],["sexhay18.com",145],["heo69.moe",145],["sieutamphim.com",146],["tailieungon.com",147],["tailieuvang.com",147],["giavang.net",147],["romgoc.net",147],["thongtintruyen.com",[148,149]],["animevietsub.us",[148,307]],["thuthuatjb.com",150],["thuthuattienich.com",151],["toithuthuat.com",152],["truyenqqvn.com",155],["tvso1.com",157],["bongdaso66.net",[157,224]],["vaoroi365.com",[158,159]],["vatlypt.com",160],["vesotantai.com",161],["vietcetera.com",162],["vietgiaitri.com",163],["vietjack.com",164],["www.vietjack.com",165],["vsc37.com",167],["vtruyen.com",168],["vuighe3.com",[169,170]],["xem1080.com",170],["webhoctienganh.com",171],["webtretho.com",173],["xosodaiphat.com",176],["yeah1.com",178],["javhay.in",181],["phim1080.in",182],["anime47.info",[183,184]],["doctruyen3q.pro",184],["www.toptruyen.pro",184],["hayghe2.info",186],["maclife.io",187],["tapchibitcoin.io",188],["mn.mediastation.live",197],["bongda21h.one",[200,257]],["vn.phym18.lol",202],["chotlo247.me",203],["www.gaingon18.me",204],["3dchill.shop",[205,286]],["bongda365.news",208],["ngaytho.me",210],["tctruyen.me",211],["chat.vebotv.me",213],["mephimnhe1.net",[214,232]],["tuoi69.media",215],["bantincongnghe.net",221],["blogkiienthuc.net",222],["bluphim.net",223],["chodansinh.net",225],["doctruyenchufull.net",226],["gockhuat.net",227],["gocphimmoi.net",228],["vn.javbabe.net",230],["linkneverdie.net",231],["ophimhdvn3.net",[232,235]],["phimgichill.net",[232,235,237]],["vnesports.vn",[233,395]],["www.o-study.net",234],["phimhdc.net",238],["phimmoichillp.net",239],["phimnhua.net",240],["sachmoi.net",241],["sexgai69.net",242],["phim.sexdacbiet.vip",242],["sexhay88.vip",242],["tenovi.net",[244,245]],["truyentuan.xyz",[245,408]],["tracnghiem.net",249],["phimmoi.tuphim.net",250],["vietmoz.net",251],["vlxxhot.net",253],["vailonxx.vip",[253,311]],["vnexpress.net",254],["vtipster.net",255],["javhd.shop",260],["sex.vlxx.studio",260],["sexsub.online",261],["tut4ktream.online",262],["blogtruyenvn.org",263],["btcvn.org",264],["chillphimmoizzz.org",265],["phimsexhay669.org",269],["sieukhungvn.org",270],["truyenaudiocv.org",271],["tuoinung.org",273],["sexdep9x.pro",280],["vlxyz.tube",280],["phim.sexxsub.pro",[281,282]],["vl.phe.to",[281,292]],["truyen18.pro",283],["youtubeporn.pro",[284,285]],["hls.playerfb.xyz",285],["viet69.si",287],["bestx.stream",288],["filemoon.sx",289],["ws-client.gavang.tech",290],["gamenoob.top",294],["phimdacap.tv",300],["vieclam.tv",[302,303]],["xskt.com.vn",303],["animehay.us",306],["khiphach.vip",309],["2banh.vn",312],["2game.vn",313],["afamily.vn",315],["sport5.vn",315],["m.afamily.vn",316],["autodaily.vn",317],["xehay.vn",[317,400]],["cafebiz.vn",319],["cafef.vn",320],["ttvn.toquoc.vn",320],["careerlink.vn",321],["chap.vn",322],["24h.com.vn",323],["autopro.com.vn",324],["baohaugiang.com.vn",325],["congan.com.vn",327],["daklak24h.com.vn",328],["dantri.com.vn",329],["game4v.com.vn",330],["nld.com.vn",331],["tapchikientruc.com.vn",332],["thanhtra.com.vn",333],["thoidai.com.vn",334],["petrotimes.vn",334],["www.thuocbietduoc.com.vn",335],["thuongtruong.com.vn",336],["thuysanvietnam.com.vn",337],["voh.com.vn",339],["congluan.vn",340],["congly.vn",341],["thitruongtaichinhtiente.vn",[341,378]],["danviet.vn",342],["eva.vn",344],["fshare.vn",345],["game24h.vn",346],["game8.vn",347],["gameio.vn",348],["gamek.vn",349],["soha.vn",349],["genk.vn",350],["vnews.gov.vn",351],["gplay.vn",352],["hosocongty.vn",354],["kenh14.vn",355],["kinhtedothi.vn",356],["minhngoc.net.vn",356],["vn-z.vn",356],["lazi.vn",357],["lucloi.vn",358],["muare.vn",359],["myeva.vn",360],["phunumoi.net.vn",362],["nhipcaudautu.vn",362],["nhacdj.vn",363],["nhatrangclub.vn",364],["olug.vn",365],["phapluatplus.vn",366],["qdnd.vn",367],["reatimes.vn",368],["rung.vn",369],["www.saostar.vn",370],["sharecode.vn",371],["softonic.vn",372],["m.soha.vn",373],["techrum.vn",374],["thanhnien.vn",375],["thethao247.vn",376],["thethaovanhoa.vn",377],["tinnhanhchungkhoan.vn",380],["tiin.vn",381],["timdaily.vn",382],["tinhte.vn",383],["tintucvietnam.vn",384],["truyenfull.vn",385],["tuyengiao.vn",387],["tvphapluat.vn",388],["v4u.vn",389],["vietfones.vn",391],["vietq.vn",393],["viettelstore.vn",394],["voz.vn",396],["vtcnews.vn",397],["vungoctuan.vn",398],["webthethao.vn",399],["yellowpages.vn",401],["znews.vn",402],["rk.plcdn.xyz",405],["plvb.xyz",405],["sexvn2024.xyz",407]]);

const entitiesMap = new Map(undefined);

const exceptionsMap = new Map([["livescore.com",[0]],["msn.com",[0]],["dm.de",[0]],["medium.com",[0]]]);

self.specificImports = self.specificImports || [];
self.specificImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
