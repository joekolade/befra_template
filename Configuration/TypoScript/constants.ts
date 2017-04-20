/**
* TS Includes
*/

// FSC
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:fluid_styled_content/Configuration/TypoScript/Static/constants.txt">
// Gridelements
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:gridelements/Configuration/TypoScript/constants.ts">
// powermail
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:powermail/Configuration/TypoScript/Main/constants.txt">
// powermail bootstrap
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:powermail/Configuration/TypoScript/BootstrapClassesAndLayout/constants.txt">
// cs_seo
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:cs_seo/Configuration/TypoScript/constants.txt">
// jh_magnifiq
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:jh_magnificpopup/Configuration/TypoScript/Default/constants.txt">
// scriptmerger
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:scriptmerger/Configuration/constants.txt">
// sourceopt
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:sourceopt/Configuration/TypoScript/constants.txt">
// go_maps_ext
<INCLUDE_TYPOSCRIPT: source="FILE:EXT:go_maps_ext/Configuration/TypoScript/constants.txt">
// frontend_editing
#<INCLUDE_TYPOSCRIPT: source="FILE:EXT:frontend_editing/Configuration/TypoScript/constants.ts">

befra_template {
    site {
        domain = dev.befra-energietechnik.de

        #logoFile = <svg xmlns="http://www.w3.org/2000/svg" viewBox="-42.4 271.6 296.4 28.3" enable-background="new -42.4 271.6 296.4 28.3"><style type="text/css">.st0{fill:#FF7D00;} .st1{fill:#4D4D4D;} .st2{fill:#FFFFFF;}</style><path class="st0" d="M-42.4 271.6h175.2v28.3h-175.2z"/><path class="st1" d="M137.9 271.6h116.1v28.3h-116.1z"/><path class="st2" d="M-7.1 282.8h4.3v-1.5c0-.7-.5-1.6-1.2-2.1-.8-.5-1.6-.7-2.4-.7h-8.6s-2 0-3 .5-1.8 1.2-1.8 2.3v3.2c0 .7.5 1.4 1.3 1.9.4.2 1.4.6 2.1.6h8.7s1.1.1 1.1.9v.6c0 .4-.1 1-1.2.9h-7s-.4-.1-.6-.4c-.2-.3-.1-1-.1-1h-4.2v1.9s-.2 1 1.2 2c1 .7 2.5.7 2.5.7h9.1s2.6.2 3.8-1c.9-.9.9-1.8.9-2.1v-2.5s.1-1-.6-1.9c-.6-.7-1.5-1.3-2.4-1.3h-9.3s-.9-.1-.9-.8v-1s0-.6.8-.6h6.8s.7 0 .8.5v.9h-.1zM-.8 278.4v14.1h15.7v-3.5h-11.2l-.1-2.3h10.4v-2.8h-10.4v-2.3h11v-3.2zM15 278.4l7.9 9.1v5h4.2v-5l7.7-9.1h-5l-4.8 5.6-4.8-5.6zM52.2 285.7c-.3-.2-.8-.5-1.5-.5v-.1c.6 0 1.9-1 1.9-2.3v-1.6s.1-1-.9-1.9c-.7-.7-1.1-.9-2.4-1h-13.2c-.6 0-1 .5-1 1v12.1c0 .6.5 1 1 1h13.1c.3 0 2.1-.3 3-1.2.9-1 .8-1.6.8-2.7.2-1.6.1-2.1-.8-2.8zm-11.7-3.9h6.8c.8 0 1.1.3 1.1 1 0 .8-.4 1.1-1.1 1.1h-6.9c-.6 0-1-.5-1-1.1.1-.6.5-1 1.1-1zm7.2 7h-7.2c-.6 0-1-.5-1-1 0-.6.5-1 1-1h7.2c.8 0 1.1.3 1.1 1s-.4 1-1.1 1zM72.8 280c-.5-.6-1.2-1.6-2.9-1.6h-11.8c-.8 0-1.9.4-2.7 1.1-.7.7-1 1.3-1.1 2.3v6.3c0 .9.5 2.4 1.3 3s1.4 1.2 3 1.4h10.5s1.5 0 3.2-1.4c.9-.8 1.3-1.9 1.3-2.9v-6.4s-.2-1.3-.8-1.8zm-4 8.1c-.4.5-.6.5-1.1.6h-7.6c-.6 0-.7-.1-1.1-.6-.4-.4-.3-1.4-.3-1.4v-3c0-.4 0-1 .4-1.5.6-.7 1.2-.6 1.2-.6h7c.7 0 1.1.2 1.4.6.5.7.4 1.4.4 1.4v3c.1.5.1 1.1-.3 1.5zM75 278.4v14.1h14v-3.9h-9.7v-10.2zM107.4 279.6c-1-1-2.2-1.2-3-1.2h-14.7v14.1h14.4c1.1 0 2.2-.5 3.2-1.4.9-.9 1.2-1.5 1.2-2.4v-6.9c.1 0-.1-1.2-1.1-2.2zm-3.2 7.6s0 .2-.4.8c-.4.6-1.1.6-1.1.6h-8.7v-6.8h8.7c.3 0 .6.1 1 .4.5.3.5.7.5.7v4.3zM163.3 278.6v13.9h4.7v-13.9zM168.7 278.6v14h3.1c.9 0 3.4-.9 3.4-4 0-2.4-2-3.3-2-3.3-.1-.1 1.8-.3 1.8-3.3s-2.5-3.4-3.2-3.4h-3.1zM175.7 281.5v6.6s.6 4.4 5.3 4.4c4.6 0 5.2-3.2 5.2-4.4v-6.6h-4.9v7.7s-.1.3-.4.3l-.4-.3v-7.7h-4.8zM187 281.5v11h4.6v-8.1s.1-.3.5-.3c.3 0 .4.3.4.3v2.1h4.5v-2.8c0-1.1-.7-2.3-2.7-2.3-1.9.1-7.3.1-7.3.1zM197.6 278.6v13.9h4.6v-3.6l1.8 3.6h5l-2.9-5.8 2.5-5.2h-5l-1.4 3v-5.9zM213.1 281.5c-2.6 0-5.5 1.5-5.5 5.5 0 3.7 2.8 5.6 5.5 5.6v-11.1zM213.8 281.5v11h4.6v-11zM132.8 271.6h5.1v11.5h11.8v4.9h-11.8v11.9h-5.1v-11.9h-12.1v-4.9h12.1z"/></svg>
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

    basics {
        claimWrap = <i>|</i>
    }
}

/**
* scriptmerger_constants.ts
*
*/

plugin.tx_scriptmerger.css.compress.enable = 0
plugin.tx_scriptmerger.javascript.compress.enable = 0
plugin.tx_scriptmerger.css.enable = 0

/**
* Activate lightbox
*
*/
styles.content.textmedia.linkWrap.lightboxEnabled = 1

/**
* Fluid Styled Content
*
*/
styles.templates.layoutRootPath = EXT:befra_template/Resources/Extensions/fsc/Layouts
styles.templates.templateRootPath = EXT:befra_template/Resources/Extensions/fsc/Templates
styles.templates.partialRootPath = EXT:befra_template/Resources/Extensions/fsc/Partials

<INCLUDE_TYPOSCRIPT: source="DIR:EXT:befra_template/Configuration/TypoScript/Constants/" extension="ts">
<INCLUDE_TYPOSCRIPT: source="DIR:EXT:befra_template/Configuration/TypoScript/Extensions/" extension="tsconst">
