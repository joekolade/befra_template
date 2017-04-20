/**
* TS Includes
*/

// FSC
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:fluid_styled_content/Configuration/TypoScript/Static/setup.txt">
// FSC LAyout wrap
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:fluid_styled_content/Configuration/TypoScript/Styling/setup.txt">
// Gridelements
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:gridelements/Configuration/TypoScript/setup.ts">
// bootstrap_grids
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:bootstrap_grids/Configuration/TypoScript/setup.txt">
// powermail
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:powermail/Configuration/TypoScript/Main/setup.txt">
// powermail bootstrap
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:powermail/Configuration/TypoScript/BootstrapClassesAndLayout/setup.txt">
// cs_seo
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:cs_seo/Configuration/TypoScript/setup.txt">
// jh_magnifiq
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:jh_magnificpopup/Configuration/TypoScript/Default/setup.txt">
// mask
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:mask/Configuration/TypoScript/setup.txt">
// scriptmerger
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:scriptmerger/Configuration/setup.txt">
// sourceopt
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:sourceopt/Configuration/TypoScript/setup.txt">
// go_maps_ext
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:go_maps_ext/Configuration/TypoScript/setup.txt">
// frontend_editing
#<INCLUDE_TYPOSCRIPT: source="FILE:EXT:frontend_editing/Configuration/TypoScript/setup.ts">

/**
* Template
*
*/

page = PAGE
page.10 = FLUIDTEMPLATE
page.10 {
    templateName = Page
    layoutRootPaths {
        10 = EXT:befra_template/Resources/Private/Layouts
    }

    templateRootPaths {
        10 = EXT:befra_template/Resources/Private/Templates
    }

    partialRootPaths {
        10 = EXT:befra_template/Resources/Private/Partials
    }
}

config.baseURL = http://{$befra_template.site.domain}/
config.tx_realurl_enable = 1
config.tx_frontend_editing = 1

/**
* Sytles & Scripts
*
*/
page.includeCSS {
    main = EXT:befra_template/Resources/Public/Css/main.css
}

page.includeJS.modernizr = EXT:befra_template/Resources/Public/JavaScripts/vendor/modernizr.js
page.includeJS {
    vendor = EXT:befra_template/Resources/Public/JavaScripts/vendor.js
}

page.includeJSFooter {
    plugins = EXT:befra_template/Resources/Public/JavaScripts/plugins.js
    main = EXT:befra_template/Resources/Public/JavaScripts/main.js
}

/**
* Content Elements
* & Variables
*
*/
page.10.variables {

    layout = TEXT
    layout.data = levelfield:-2,backend_layout_next_level,slide
    layout.override.field = backend_layout

    logoFile = FILE
    logoFile.file = {$befra_template.site.logoFile}

    sitename = TEXT
    sitename.value = {$befra_template.site.name}

    pageIds_root = TEXT
    pageIds_root.value = {$befra_template.pageIds.root}

    mainNavi = HMENU
    mainNavi {
        1 = TMENU
        1 {
            expAll = 1

            NO = 1
            NO.wrapItemAndSub = <li>|</li>

            ACT < .NO
            ACT.wrapItemAndSub = <li class="active">|</li>

            CUR < .ACT
        }

        2 < .1
        2.wrap = <ul class="subnav">|</ul>

        3 < .2
    }

    metaNavi = COA
    metaNavi {
        20 = HMENU
        20 {
            special = directory
            special.value = {$befra_template.pageIds.metaNaviRoot}
            special.value = 9

            wrap = <ul class="list-inline">|</ul>

            1 = TMENU
            1.NO = 1
            #1.NO.ATagParams = class="btn"
            1.wrap = <li>|</li>

            1.ACT < .1.NO
            1.ACT.wrap = <li class="active">|</li>

            1.CUR < .1.ACT
        }
    }

    metaNaviFooter < .metaNavi
    metaNaviFooter {
        20.1.NO.ATagParams = class="btn" rel="nofollow"
    }

    contentStage = COA
    contentStage {
        10 < styles.content.get
        10 {
            select.where = colPos = 11
            select.languageField = sys_language_uid
        }
    }

    contentMain =< styles.content.get
    contentMain {
        select.where = colPos = 21
        select.languageField = sys_language_uid
    }

    contentFooter = COA
    contentFooter {
        10 < styles.content.get
        10 {
            select.where = colPos = 31
            select.languageField = sys_language_uid
            wrap = <div class="col-sm-3">|</div>
            slide = -1
        }

        20 < .10
        20.select.where = colPos = 32

        30 < .10
        30.select.where = colPos = 33

    }
}

lib.superFooter < content.styles.get
lib.superFooter {
    select.where = colPos = 21
    select.languageField = sys_language_uid
    slide = -1
}

/**
* Lightbox und Title
*
*/
lib.fluidContent.settings.media.popup.linkParams.ATagParams.dataWrap = class="{$styles.content.textmedia.linkWrap.lightboxCssClass}" rel="{$styles.content.textmedia.linkWrap.lightboxRelAttribute}" title="{file:current:title}"

/**
* Includes
*
*/
<INCLUDE_TYPOSCRIPT: source="DIR:EXT:befra_template/Configuration/TypoScript/Setup/" extension="ts">
<INCLUDE_TYPOSCRIPT: source="DIR:EXT:befra_template/Configuration/TypoScript/Extensions/" extension="tssetup">
