# ZVV Schriftarten

Dieses Verzeichnis enthält die offiziellen ZVV-Schriftarten für die Verwendung in ZVV-Anwendungen.

## Schriftfamilien

Es gibt zwei Hauptschriftfamilien:

1. **ZVV Brown Narrow S Web** - Die schmale Variante, optimiert für Benutzeroberflächen
2. **ZVV Brown Narrow Web** - Die Standardvariante

## Dateiformate

Die Schriftarten sind in folgenden Formaten verfügbar:

- **WOFF2** (.woff2) - Modernes, komprimiertes Format für alle aktuellen Browser
- **WOFF** (.woff) - Älteres Format für Kompatibilität mit älteren Browsern
- **TTF** (.ttf) - TrueType-Format für Desktop-Anwendungen
- **OTF** (.otf) - OpenType-Format für Desktop-Anwendungen

## Schriftschnitte

Jede Schriftfamilie enthält folgende Schnitte:

- Regular (normal)
- Italic (kursiv)
- Bold (fett)
- Bold Italic (fett kursiv)
- Black (extra fett)
- Black Italic (extra fett kursiv)

## Verwendung

### Web

Für die Verwendung im Web sollte das `stylesheet.css` eingebunden werden:

```html
<link rel="stylesheet" href="path/to/assets/zvv/font/stylesheet.css">
```

Dann kann die Schrift in CSS verwendet werden:

```css
body {
    font-family: 'ZVV Brown Narrow S Web', Arial, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

h1, h2, h3 {
    font-weight: bold;
}
```

### Performance-Optimierung

Für eine optimale Ladezeit sollten die wichtigsten Schriftschnitte vorgeladen werden:

```html
<link rel="preload" href="path/to/assets/zvv/font/ZVVBrownNarrowSWeb-Regular.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="path/to/assets/zvv/font/ZVVBrownNarrowSWeb-Bold.woff2" as="font" type="font/woff2" crossorigin>
```

## Lizenz

Diese Schriftarten sind Eigentum des ZVV und dürfen nur für autorisierte ZVV-Anwendungen verwendet werden. Für die Verwendung ist eine Lizenz erforderlich. Bitte kontaktieren Sie grafik@zvv.ch für weitere Informationen. 