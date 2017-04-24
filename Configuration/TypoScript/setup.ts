# Template

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
config.tx_frontend_editing = 0

#
# Styles & Scripts

page.includeCSS {
    main = EXT:befra_template/Resources/Public/Css/main.css
}

page.includeJS.modernizr = EXT:befra_template/Resources/Public/JavaScripts/vendor/modernizr.js
page.includeJS.vendor = EXT:befra_template/Resources/Public/JavaScripts/vendor.js

page.includeJSFooter {
    plugins = EXT:befra_template/Resources/Public/JavaScripts/plugins.js
    main = EXT:befra_template/Resources/Public/JavaScripts/main.js
}

#
# Fix missing lib.content.get
lib.content_get =< styles.content.get
lib.content_get {
    select {
        languageField = sys_language_uid
        where = {#colPos}=0
    }
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

    hasStage = TEXT
    hasStage.value = 1


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
}

/**
* Content Blocks
*/

lib {

    contentStage < lib.content_get
    contentStage {
        select.where = {#colPos}=11
    }

    contentMain < lib.content_get
    contentMain {
        select.where = {#colPos}=21
    }

    contentFooterLeft < lib.content_get
    contentFooterLeft {
        select.where = {#colPos}=51
        slide = -1
    }

    contentFooterMiddle < lib.content_get
    contentFooterMiddle {
        select.where = {#colPos}=52
        slide = -1
    }

    contentFooterRight < lib.content_get
    contentFooterRight {
        select.where = {#colPos}=53
        slide = -1
    }


    superFooter < lib.content_get
    superFooter {
        select.where = {#colPos}=41
        slide = -1
    }
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
