/**
 * Beispielprojekte des ZVV
 */
const projects = [
  // Geschäftsleitung
  {
    id: 'p001',
    title: 'ZVV 2030 - Strategische Ausrichtung',
    departmentId: 'management',
    context: 'Entwicklung der langfristigen Strategie für den ZVV bis 2030',
    details: 'Das Projekt "ZVV 2030" definiert die strategische Ausrichtung des Zürcher Verkehrsverbunds für die kommenden Jahre. Es umfasst die Analyse aktueller Trends im öffentlichen Verkehr, die Entwicklung von Zukunftsszenarien und die Ableitung konkreter Handlungsfelder. Schwerpunkte sind die Digitalisierung des Angebots, Nachhaltigkeit und die Integration neuer Mobilitätsformen.',
    status: 'active',
    color: 'blue',
    icon: 'strategie'
  },
  {
    id: 'p002',
    title: 'Organisationsentwicklung ZVV',
    departmentId: 'management',
    context: 'Anpassung der Organisationsstruktur an neue Herausforderungen',
    details: 'Die Organisationsstruktur des ZVV wird an die neuen Herausforderungen im öffentlichen Verkehr angepasst. Ziel ist eine agilere und effizientere Organisation, die schneller auf Veränderungen reagieren kann. Das Projekt umfasst die Analyse der bestehenden Strukturen, die Definition neuer Rollen und Verantwortlichkeiten sowie die Implementierung der neuen Organisation.',
    status: 'planning',
    color: 'green',
    icon: 'organisation'
  },
  
  // Marketing & Kommunikation
  {
    id: 'p003',
    title: 'Relaunch ZVV-Website',
    departmentId: 'marketing',
    context: 'Komplette Überarbeitung des Webauftritts mit Fokus auf Benutzerfreundlichkeit',
    details: 'Die ZVV-Website wird vollständig überarbeitet, um die Benutzerfreundlichkeit zu verbessern und ein modernes Design zu implementieren. Das Projekt umfasst die Konzeption, das Design und die technische Umsetzung der neuen Website. Besonderer Fokus liegt auf der mobilen Nutzung und der Integration der verschiedenen digitalen Angebote des ZVV.',
    status: 'active',
    color: 'blue',
    icon: 'web'
  },
  {
    id: 'p004',
    title: 'Kampagne "Nachhaltig unterwegs"',
    departmentId: 'marketing',
    context: 'Marketingkampagne zur Förderung des öffentlichen Verkehrs als nachhaltige Alternative',
    details: 'Die Kampagne "Nachhaltig unterwegs" soll den öffentlichen Verkehr als umweltfreundliche Alternative zum Individualverkehr positionieren. Sie umfasst verschiedene Kommunikationsmaßnahmen wie Plakate, Social Media, Events und Kooperationen mit Umweltorganisationen. Ziel ist es, neue Kundengruppen zu erschließen und das Image des ZVV als nachhaltiges Unternehmen zu stärken.',
    status: 'planning',
    color: 'green',
    icon: 'nachhaltigkeit'
  },
  
  // IT & Digitalisierung
  {
    id: 'p005',
    title: 'ZVV Mobile App 2.0',
    departmentId: 'it',
    context: 'Weiterentwicklung der mobilen Anwendung mit neuen Funktionen',
    details: 'Die ZVV Mobile App wird grundlegend überarbeitet und mit neuen Funktionen ausgestattet. Dazu gehören eine verbesserte Fahrplanauskunft, personalisierte Reisevorschläge, ein neues Ticketing-System und die Integration von Sharing-Angeboten. Das Projekt umfasst die Konzeption, Entwicklung und den Test der neuen App-Version sowie die Migration bestehender Nutzer.',
    status: 'active',
    color: 'red',
    icon: 'app'
  },
  {
    id: 'p006',
    title: 'Digitale Zahlungssysteme',
    departmentId: 'it',
    context: 'Integration moderner Zahlungsmethoden in alle ZVV-Systeme',
    details: 'Das Projekt "Digitale Zahlungssysteme" hat zum Ziel, moderne Zahlungsmethoden in alle ZVV-Systeme zu integrieren. Dazu gehören kontaktloses Bezahlen, Mobile Payment, automatische Abrechnung und die Integration von Drittanbieter-Zahlungsdiensten. Das Projekt umfasst die technische Implementierung, Sicherheitsaspekte und die Anpassung der bestehenden Prozesse.',
    status: 'planning',
    color: 'purple',
    icon: 'zahlung'
  },
  {
    id: 'p007',
    title: 'Datenplattform für Verkehrsanalyse',
    departmentId: 'it',
    context: 'Aufbau einer zentralen Plattform zur Analyse von Verkehrsdaten',
    details: 'Die Datenplattform für Verkehrsanalyse soll alle relevanten Daten zum Verkehrsgeschehen im ZVV-Gebiet sammeln, aufbereiten und analysieren. Ziel ist es, bessere Entscheidungsgrundlagen für die Verkehrsplanung zu schaffen und Echtzeitinformationen für Kunden bereitzustellen. Das Projekt umfasst den Aufbau der technischen Infrastruktur, die Entwicklung von Analysewerkzeugen und die Integration verschiedener Datenquellen.',
    status: 'active',
    color: 'turquoise',
    icon: 'daten'
  },
  
  // Finanzen & Controlling
  {
    id: 'p008',
    title: 'Neues Tarifsystem 2025',
    departmentId: 'finanzen',
    context: 'Entwicklung eines flexibleren und kundenfreundlicheren Tarifsystems',
    details: 'Das Projekt "Neues Tarifsystem 2025" entwickelt ein flexibleres und kundenfreundlicheres Tarifsystem für den ZVV. Es soll die Nutzung des öffentlichen Verkehrs attraktiver machen und gleichzeitig die Wirtschaftlichkeit sicherstellen. Das Projekt umfasst die Analyse des bestehenden Systems, die Entwicklung neuer Tarifmodelle, die rechtliche Prüfung und die Implementierung in allen Verkaufssystemen.',
    status: 'planning',
    color: 'yellow',
    icon: 'tarif'
  },
  {
    id: 'p009',
    title: 'Kostenoptimierung Betrieb',
    departmentId: 'finanzen',
    context: 'Analyse und Optimierung der Betriebskosten im gesamten Verbund',
    details: 'Das Projekt zur Kostenoptimierung im Betrieb analysiert alle Betriebsprozesse im ZVV und identifiziert Potenziale zur Effizienzsteigerung. Ziel ist es, die Betriebskosten zu senken, ohne die Qualität des Angebots zu beeinträchtigen. Das Projekt umfasst die Analyse der Kostenstruktur, die Identifikation von Optimierungspotenzialen und die Umsetzung konkreter Maßnahmen in Zusammenarbeit mit den Verkehrsunternehmen.',
    status: 'active',
    color: 'orange',
    icon: 'kosten'
  },
  
  // Betrieb & Verkehr
  {
    id: 'p010',
    title: 'Fahrplankonzept 2026',
    departmentId: 'betrieb',
    context: 'Entwicklung des neuen Fahrplankonzepts mit optimierten Anschlüssen',
    details: 'Das Fahrplankonzept 2026 entwickelt ein optimiertes Angebot für den öffentlichen Verkehr im ZVV-Gebiet. Es berücksichtigt aktuelle Pendlerströme, neue Siedlungsgebiete und veränderte Mobilitätsbedürfnisse. Ziel ist ein attraktives Angebot mit guten Anschlüssen und angemessenen Taktfrequenzen. Das Projekt umfasst die Analyse der Nachfrage, die Entwicklung des Fahrplankonzepts und die Abstimmung mit allen beteiligten Verkehrsunternehmen.',
    status: 'planning',
    color: 'purple',
    icon: 'fahrplan'
  },
  {
    id: 'p011',
    title: 'Qualitätsmanagement Verkehrsbetriebe',
    departmentId: 'betrieb',
    context: 'Weiterentwicklung des Qualitätsmanagementsystems für alle Verkehrsbetriebe',
    details: 'Das Projekt "Qualitätsmanagement Verkehrsbetriebe" entwickelt ein umfassendes System zur Sicherstellung und Verbesserung der Qualität im öffentlichen Verkehr. Es umfasst die Definition von Qualitätsstandards, die Entwicklung von Messmethoden und die Implementierung eines kontinuierlichen Verbesserungsprozesses. Ziel ist es, die Kundenzufriedenheit zu erhöhen und die Effizienz der Verkehrsbetriebe zu steigern.',
    status: 'active',
    color: 'blue',
    icon: 'qualitaet'
  },
  
  // Infrastruktur & Technik
  {
    id: 'p012',
    title: 'Ausbau Ladeinfrastruktur E-Busse',
    departmentId: 'infrastruktur',
    context: 'Planung und Umsetzung der Ladeinfrastruktur für die E-Bus-Flotte',
    details: 'Das Projekt "Ausbau Ladeinfrastruktur E-Busse" plant und realisiert die notwendige Infrastruktur für den Betrieb von Elektrobussen im ZVV-Gebiet. Es umfasst die Standortanalyse, die technische Planung, die Beschaffung der Ladestationen und die Integration in das Stromnetz. Ziel ist es, die Voraussetzungen für einen zuverlässigen und wirtschaftlichen Betrieb von Elektrobussen zu schaffen.',
    status: 'active',
    color: 'green',
    icon: 'elektro'
  },
  {
    id: 'p013',
    title: 'Modernisierung Haltestellen',
    departmentId: 'infrastruktur',
    context: 'Umfassendes Programm zur Modernisierung und barrierefreien Gestaltung aller Haltestellen',
    details: 'Das Projekt "Modernisierung Haltestellen" hat zum Ziel, alle Haltestellen im ZVV-Gebiet zu modernisieren und barrierefrei zu gestalten. Es umfasst die Analyse des Ist-Zustands, die Priorisierung der Maßnahmen, die Planung und Umsetzung der baulichen Veränderungen sowie die Installation moderner Fahrgastinformationssysteme. Das Projekt wird in enger Abstimmung mit den Gemeinden und Behindertenverbänden durchgeführt.',
    status: 'active',
    color: 'turquoise',
    icon: 'haltestelle'
  },
  
  // Kundendienst & Service
  {
    id: 'p014',
    title: 'Digitaler Kundenservice',
    departmentId: 'kundendienst',
    context: 'Ausbau der digitalen Kundenservice-Kanäle und -Angebote',
    details: 'Das Projekt "Digitaler Kundenservice" erweitert die digitalen Serviceangebote des ZVV für seine Kunden. Es umfasst die Entwicklung eines Chatbots für häufige Anfragen, die Optimierung der Online-Hilfe, die Integration von Social-Media-Kanälen in den Kundenservice und die Entwicklung einer Self-Service-Plattform für Kunden. Ziel ist es, den Kundenservice effizienter zu gestalten und gleichzeitig die Kundenzufriedenheit zu erhöhen.',
    status: 'planning',
    color: 'orange',
    icon: 'service'
  },
  {
    id: 'p015',
    title: 'Schulungsprogramm Kundenbetreuer',
    departmentId: 'kundendienst',
    context: 'Entwicklung und Umsetzung eines umfassenden Schulungsprogramms für Kundenbetreuer',
    details: 'Das Schulungsprogramm für Kundenbetreuer entwickelt und implementiert ein umfassendes Trainingskonzept für alle Mitarbeitenden mit Kundenkontakt im ZVV. Es umfasst Module zu Kommunikation, Konfliktmanagement, Produktkenntnissen und digitalen Tools. Ziel ist es, die Qualität des Kundenservice zu verbessern und die Mitarbeitenden optimal auf ihre Aufgaben vorzubereiten.',
    status: 'active',
    color: 'pink',
    icon: 'schulung'
  }
];

module.exports = projects; 