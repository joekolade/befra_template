befra_template {
    site {
        domain = www.befra-energietechnik.de

        logoFile = EXT:befra_template/Resources/Public/Images/logo_befra_web.svg
        name = Befra-Energietechnik GmbH
    }

    pageIds {
        root = 1
        metaNaviRoot = 9

        quickform = 22
        contact = 6
    }

    quickformUid = 33
}

/**
* scriptmerger_constants.ts
*
*/
plugin.tx_scriptmerger {
    css {
        enable = 1
        minify.enable = 1
        #minify.ignore = .min.

        compress.enable = 1
        #compress.ignore = .gz.

        merge.enable = 1
        #merge.ignore = empty
    }
    javascript {
        enable = 1
        parseBody = 1

        minify.enable = 1
        #minify.ignore = ?,.min.

        compress.enable = 1
        #compress.ignore = ?,.gz.

        merge.enable = 1
        #merge.ignore
    }
}


plugin.tx_scriptmerger.css.compress.enable = 0
plugin.tx_scriptmerger.javascript.compress.enable = 0
plugin.tx_scriptmerger.css.enable = 0

/**
* cs_seo
*/
plugin.tx_csseo.tracking.googleAnalytics = UA-110462896-1

/**
* Activate lightbox
*
*/
styles.content.textmedia.linkWrap.lightboxEnabled = 1

/**
* Fluid Styled Content
*
*/
styles.templates.layoutRootPath = EXT:befra_template/Resources/Extensions/fsc/Layouts/
styles.templates.templateRootPath = EXT:befra_template/Resources/Extensions/fsc/Templates/
styles.templates.partialRootPath = EXT:befra_template/Resources/Extensions/fsc/Partials/

<INCLUDE_TYPOSCRIPT: source="DIR:EXT:befra_template/Configuration/TypoScript/Constants/" extension="ts">
<INCLUDE_TYPOSCRIPT: source="DIR:EXT:befra_template/Configuration/TypoScript/Extensions/" extension="tsconst">
