# ZVV Projektmanagement

Eine moderne Webanwendung zur Verwaltung und Übersicht aller Projekte des Zürcher Verkehrsverbunds (ZVV).

## Features

- Übersichtliche Darstellung aller Projekte nach Abteilungen
- Filterung nach Abteilungen und Suchfunktion
- Detailansicht für jedes Projekt
- Responsive Design für alle Geräte
- PWA-Unterstützung für Offline-Nutzung

## Technologie-Stack

- HTML5, CSS3, JavaScript (Vanilla)
- Responsive Design mit CSS Grid und Flexbox
- Progressive Web App (PWA) Funktionalität

## Installation

1. Repository klonen:
   ```
   git clone https://github.com/yourusername/zvv-pm.git
   cd zvv-pm
   ```

2. Abhängigkeiten installieren:
   ```
   npm install
   ```

3. Anwendung starten:
   ```
   npm start
   ```

## Projektstruktur

```
zvv-pm/
├── public/               # Öffentliche Dateien
│   ├── css/              # Stylesheets
│   │   ├── main.css      # Hauptstile
│   │   └── components.css # Komponenten-Stile
│   ├── js/               # JavaScript-Dateien
│   │   └── main.js       # Hauptskript
│   ├── icons/            # Icons und Bilder
│   ├── index.html        # Hauptseite
│   └── manifest.json     # PWA-Manifest
├── package.json          # Projekt-Metadaten und Abhängigkeiten
└── README.md             # Projektdokumentation
```

## Entwicklung

- `npm start`: Startet den Entwicklungsserver
- `npm run build`: Erstellt eine optimierte Produktionsversion

## Datenstruktur

Die Anwendung verwendet lokale JavaScript-Objekte für die Daten:

### Abteilungen

```javascript
{
  id: 'abteilungs-id',
  name: 'Abteilungsname',
  description: 'Beschreibung der Abteilung'
}
```

### Projekte

```javascript
{
  id: 'projekt-id',
  title: 'Projekttitel',
  departmentId: 'abteilungs-id',
  context: 'Kurzbeschreibung des Projekts',
  details: 'Ausführliche Beschreibung des Projekts',
  status: 'active|planning|completed|delayed|critical',
  color: 'blue|green|red|orange|purple|turquoise|yellow|pink',
  icon: 'icon-name'
}
```

## Lizenz

© 2023 Zürcher Verkehrsverbund (ZVV). Alle Rechte vorbehalten. 