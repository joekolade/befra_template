tx_gridelements {
    excludeLayoutIds = slider,tabsSimple,tabs4,tabs6,accordion,slider
}

// for pages
TCEMAIN.table.pages {
    disablePrependAtCopy = 1
    disableHideAtCopy = 0
}

// for content elements
TCEMAIN.table.tt_content {
    disablePrependAtCopy = 1
    disableHideAtCopy = 1
}

// Not used CEs
TCEFORM.tt_content.CType {
    removeItems = text,textpic,image,login,div
}

TCEFORM.tt_content.header_layout.removeItems = 0,5,6
TCEFORM.tt_content.header_layout.altLabels {
    1 = H1
    2 = H2
    3 = H3
    4 = H4
}

TCEFORM.tt_content.layout.altLabels.1 = runde Bilder
TCEFORM.tt_content.layout.removeItems = 2,3

# Image orientation setup
TCEFORM.tt_content.imageorient {
    removeItems = 1,2,9,10,17,18,25,26
    altLabels.0 = oben
    altLabels.8 = unten
}

# Image columns setup
TCEFORM.tt_content.imagecols {
    removeItems = 5,6,7,8
}

TCAdefaults.tt_content.imagecols = 1

# add pastetoggle button to RTE toolbar
RTE.default.showButtons := addToList(pastetoggle,left,right,center)
RTE.default.buttons.pastetoggle.setActiveOnRteOpen = 1

RTE.default {
    #angepasste CSS Datei in fileadmin speichern
    contentCSS = EXT:befra_template/Resources/Public/Css/rte.css
    showTagFreeClasses = 1
}

## Klassen hinzufuegen
RTE.default.proc.allowedClasses := addToList(button-link)
RTE.default.buttons {
    # blockstyle.tags.div.allowedClasses := addToList(error, small)
    # textstyle.tags.span.allowedClasses := addToList(small)
    link.properties.class.allowedClasses := addToList(button-link)
}

## nicht benoetigte Klassen entfernen
RTE.default.proc.allowedClasses := removeFromList(csc-frame-frame1, csc-frame-frame2, important, name-of-person, detail)
RTE.default.buttons {
    blockstyle.tags.div.allowedClasses := removeFromList(csc-frame-frame1, csc-frame-frame2)
}

RTE.classes := removeFromList(csc-frame-frame1, csc-frame-frame2, important, name-of-person, detail)
## Klassen fuer die RTE Auswahlfelder definieren

RTE.classesAnchor.button-link {
    name = Linkbutton
    #value = background: url(fileadmin/../arrow1.gif) no-repeat 100% 0%;
    class = btn btn-warning
}

##Button Textfarbe einblenden
RTE.default.showButtons := addToList (textcolor)

##Farbpicker ausblenden
#RTE.default.disableColorPicker = 1

RTE.default.colors = color1, color2
RTE.colors {
    color1 {
        name = Inhalte fehlen noch
        value = #FF69B4
    }

    color2 {
        name = Inhalte überprüfen
        value = #FF7D00
    }
}

// Backend layouts
//

mod.web_layout.BackendLayouts {
    1 {
        title = Startseite
        #icon = EXT:example_extension/Resources/Public/Images/BackendLayouts/default.gif
        config {
            backend_layout {
                colCount = 3
                rowCount = 4
                rows {
                    1 {
                        columns {
                            1 {
                                name = Stage
                                colspan = 3
                                colPos = 11
                                allowed = *
                                allowedGridType = *
                            }
                        }
                    }

                    2 {
                        columns {
                            1 {
                                name = Inhalt
                                colspan = 3
                                colPos = 21
                                allowed = *
                                allowedGridType = *
                            }
                        }
                    }

                    3 {
                        columns {
                            1 {
                                name = Footer links
                                colPos = 51
                                allowed = *
                                allowedGridType = *
                            }

                            2 {
                                name = Footer mitte
                                colPos = 52
                                allowed = *
                                allowedGridType = *
                            }

                            3 {
                                name = Footer rechts
                                colPos = 53
                                allowed = *
                                allowedGridType = *
                            }
                        }
                    }

                    4 {
                        columns {
                            1 {
                                name = Footer (unterhalb)
                                colspan = 3
                                colPos = 41
                                allowed = list
                                allowedGridType = *
                            }
                        }
                    }
                }
            }
        }
    }
    3 {
        title = Standard-Seite
        #icon = EXT:example_extension/Resources/Public/Images/BackendLayouts/default.gif
        config {
            backend_layout {
                colCount = 1
                rowCount = 1
                rows {
                    1 {
                        columns {
                            1 {
                                name = Inhalt
                                colPos = 21
                                allowed = *
                                allowedGridType = *
                            }
                        }
                    }
                }
            }
        }
    }
}