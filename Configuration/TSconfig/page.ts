tx_gridelements {
  excludeLayoutIds = slider,tabsSimple,tabs4,tabs6,accordion,slider
}

##id storagepage of gridlayout
TCEFORM.pages.backend_layout.PAGE_TSCONFIG_ID = 20
TCEFORM.pages.backend_layout_next_level.PAGE_TSCONFIG_ID = 20

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
RTE.default.showButtons := addToList (pastetoggle,left,right,center)
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
  class= btn btn-warning
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
