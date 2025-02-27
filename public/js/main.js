/**
 * ZVV Projektmanagement - Hauptskript
 * 
 * Dieses Skript lädt die Projektdaten aus der Redis-Datenbank
 * und stellt sie in der Benutzeroberfläche dar.
 */

import * as redisClient from './redis-client.js';

// Lokale Daten als Fallback, falls Redis nicht verfügbar ist
const localDepartments = [
  {
    id: 'management',
    name: 'Geschäftsleitung',
    description: 'Strategische Führung und Gesamtkoordination des ZVV'
  },
  {
    id: 'marketing',
    name: 'Marketing & Kommunikation',
    description: 'Verantwortlich für Markenführung, Kommunikation und Kundenbindung'
  },
  {
    id: 'it',
    name: 'IT & Digitalisierung',
    description: 'Entwicklung und Betrieb der digitalen Infrastruktur und Anwendungen'
  },
  {
    id: 'finanzen',
    name: 'Finanzen & Controlling',
    description: 'Finanzplanung, Budgetierung und wirtschaftliche Steuerung'
  },
  {
    id: 'betrieb',
    name: 'Betrieb & Verkehr',
    description: 'Planung und Koordination des Verkehrsangebots'
  },
  {
    id: 'infrastruktur',
    name: 'Infrastruktur & Technik',
    description: 'Planung, Bau und Unterhalt der Verkehrsinfrastruktur'
  },
  {
    id: 'kundendienst',
    name: 'Kundendienst & Service',
    description: 'Kundenbetreuung, Verkauf und Dienstleistungen'
  }
];

const localProjects = [
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

// Globale Variablen für Daten
let departments = [];
let projects = [];
let redisConnected = false;

// DOM-Elemente
const departmentsContainer = document.querySelector('.zvv-departments-container');
const departmentFilter = document.getElementById('department-filter');
const projectSearch = document.getElementById('project-search');
const projectDetailsModal = document.getElementById('project-details-modal');
const modalClose = document.querySelector('.zvv-modal-close');
const loadingElement = document.querySelector('.zvv-loading');
const connectionStatus = document.createElement('div');
connectionStatus.className = 'zvv-connection-status';

// Templates
const departmentTemplate = document.getElementById('department-template');
const projectTemplate = document.getElementById('project-template');

// Hilfsfunktionen
function getIconPath(iconName) {
  // In einer realen Anwendung würden hier die tatsächlichen Icons verwendet
  const defaultIcons = {
    'strategie': 'strategie.svg',
    'organisation': 'organisation.svg',
    'web': 'web.svg',
    'nachhaltigkeit': 'nachhaltigkeit.svg',
    'app': 'app.svg',
    'zahlung': 'zahlung.svg',
    'daten': 'daten.svg',
    'tarif': 'tarif.svg',
    'kosten': 'kosten.svg',
    'fahrplan': 'fahrplan.svg',
    'qualitaet': 'qualitaet.svg',
    'elektro': 'elektro.svg',
    'haltestelle': 'haltestelle.svg',
    'service': 'service.svg',
    'schulung': 'schulung.svg'
  };
  
  return `/icons/${defaultIcons[iconName] || 'default.svg'}`;
}

function getStatusLabel(status) {
  const statusLabels = {
    'active': 'Aktiv',
    'planning': 'In Planung',
    'completed': 'Abgeschlossen',
    'delayed': 'Verzögert',
    'critical': 'Kritisch'
  };
  
  return statusLabels[status] || status;
}

// Verbindungsstatus anzeigen
function showConnectionStatus(connected) {
  connectionStatus.textContent = connected 
    ? 'Verbunden mit Redis-Datenbank' 
    : 'Lokale Daten werden verwendet (keine Verbindung zur Datenbank)';
  
  connectionStatus.className = `zvv-connection-status ${connected ? 'connected' : 'disconnected'}`;
  
  // Status zur Seite hinzufügen, falls noch nicht vorhanden
  if (!document.querySelector('.zvv-connection-status')) {
    const filterSection = document.querySelector('.zvv-filter-section');
    filterSection.appendChild(connectionStatus);
  }
}

// Daten aus Redis laden oder lokale Daten verwenden
async function loadData() {
  try {
    // Redis-Verbindung testen
    redisConnected = await redisClient.testConnection();
    showConnectionStatus(redisConnected);
    
    if (redisConnected) {
      // Daten aus Redis laden
      const redisDepartments = await redisClient.getDepartments();
      const redisProjects = await redisClient.getProjects();
      
      // Wenn keine Daten in Redis vorhanden sind, lokale Daten speichern
      if (!redisDepartments) {
        await redisClient.saveDepartments(localDepartments);
        departments = localDepartments;
      } else {
        departments = redisDepartments;
      }
      
      if (!redisProjects) {
        await redisClient.saveProjects(localProjects);
        projects = localProjects;
      } else {
        projects = redisProjects;
      }
    } else {
      // Lokale Daten verwenden
      departments = localDepartments;
      projects = localProjects;
    }
    
    // UI aktualisieren
    populateDepartmentFilter();
    renderProjects();
  } catch (error) {
    console.error('Fehler beim Laden der Daten:', error);
    
    // Fallback zu lokalen Daten
    departments = localDepartments;
    projects = localProjects;
    
    showConnectionStatus(false);
    
    // UI aktualisieren
    populateDepartmentFilter();
    renderProjects();
  }
}

// Abteilungen im Filter anzeigen
function populateDepartmentFilter() {
  // Filter leeren
  departmentFilter.innerHTML = '<option value="all">Alle Abteilungen</option>';
  
  // Abteilungen hinzufügen
  departments.forEach(department => {
    const option = document.createElement('option');
    option.value = department.id;
    option.textContent = department.name;
    departmentFilter.appendChild(option);
  });
}

// Projekte nach Abteilungen anzeigen
function renderProjects(filteredProjects = null) {
  // Lade-Animation entfernen
  if (loadingElement) {
    loadingElement.remove();
  }
  
  // Container leeren
  departmentsContainer.innerHTML = '';
  
  // Projekte nach Abteilungen gruppieren
  const projectsByDepartment = {};
  
  // Wenn gefilterte Projekte übergeben wurden, diese verwenden
  const projectsToRender = filteredProjects || projects;
  
  // Projekte nach Abteilungen gruppieren
  projectsToRender.forEach(project => {
    if (!projectsByDepartment[project.departmentId]) {
      projectsByDepartment[project.departmentId] = [];
    }
    projectsByDepartment[project.departmentId].push(project);
  });
  
  // Für jede Abteilung mit Projekten einen Abschnitt erstellen
  departments.forEach(department => {
    const departmentProjects = projectsByDepartment[department.id];
    
    // Nur Abteilungen mit Projekten anzeigen
    if (departmentProjects && departmentProjects.length > 0) {
      // Abteilungs-Template klonen
      const departmentElement = departmentTemplate.content.cloneNode(true);
      const departmentDiv = departmentElement.querySelector('.zvv-department');
      const departmentTitle = departmentElement.querySelector('.zvv-department-title');
      const projectsGrid = departmentElement.querySelector('.zvv-projects-grid');
      
      // Abteilungsdaten einfügen
      departmentDiv.dataset.departmentId = department.id;
      departmentDiv.dataset.department = department.id;
      departmentTitle.textContent = department.name;
      
      // Projekte für diese Abteilung einfügen
      departmentProjects.forEach(project => {
        const projectElement = projectTemplate.content.cloneNode(true);
        const projectCard = projectElement.querySelector('.zvv-project-card');
        const projectTitle = projectElement.querySelector('.zvv-project-title');
        const projectIcon = projectElement.querySelector('.zvv-project-icon');
        const projectContext = projectElement.querySelector('.zvv-project-context');
        const projectDetailsButton = projectElement.querySelector('.zvv-project-details-button');
        
        // Projektdaten einfügen
        projectCard.dataset.projectId = project.id;
        projectCard.dataset.color = project.color;
        projectTitle.textContent = project.title;
        
        // Status-Badge hinzufügen
        const statusBadge = document.createElement('span');
        statusBadge.className = `zvv-status-badge ${project.status}`;
        statusBadge.textContent = getStatusLabel(project.status);
        projectTitle.appendChild(statusBadge);
        
        // Icon einfügen
        const iconImg = document.createElement('img');
        iconImg.src = getIconPath(project.icon);
        iconImg.alt = project.title;
        projectIcon.appendChild(iconImg);
        
        // Kontext einfügen
        projectContext.textContent = project.context;
        
        // Event-Listener für Details-Button
        projectDetailsButton.addEventListener('click', () => showProjectDetails(project));
        
        // Projekt zur Abteilung hinzufügen
        projectsGrid.appendChild(projectElement);
      });
      
      // Abteilung zum Container hinzufügen
      departmentsContainer.appendChild(departmentElement);
    }
  });
  
  // Wenn keine Projekte gefunden wurden
  if (departmentsContainer.children.length === 0) {
    const emptyState = document.createElement('div');
    emptyState.className = 'zvv-empty-state';
    emptyState.innerHTML = `
      <div class="zvv-empty-state-icon">🔍</div>
      <div class="zvv-empty-state-message">Keine Projekte gefunden</div>
      <button class="zvv-empty-state-action" id="reset-filters">Filter zurücksetzen</button>
    `;
    departmentsContainer.appendChild(emptyState);
    
    // Event-Listener für Reset-Button
    document.getElementById('reset-filters').addEventListener('click', resetFilters);
  }
}

// Projektdetails anzeigen
function showProjectDetails(project) {
  const modalTitle = projectDetailsModal.querySelector('.zvv-modal-title');
  const projectContextFull = projectDetailsModal.querySelector('.zvv-project-context-full');
  const projectDetailsFull = projectDetailsModal.querySelector('.zvv-project-details-full');
  
  // Daten einfügen
  modalTitle.textContent = project.title;
  projectContextFull.textContent = project.context;
  projectDetailsFull.textContent = project.details;
  
  // Modal anzeigen
  projectDetailsModal.classList.add('active');
}

// Filter zurücksetzen
function resetFilters() {
  projectSearch.value = '';
  departmentFilter.value = 'all';
  renderProjects();
}

// Event-Listener für Filter
departmentFilter.addEventListener('change', filterProjects);
projectSearch.addEventListener('input', filterProjects);

// Event-Listener für Modal schließen
modalClose.addEventListener('click', () => {
  projectDetailsModal.classList.remove('active');
});

// Projekte filtern
function filterProjects() {
  const searchTerm = projectSearch.value.toLowerCase();
  const selectedDepartment = departmentFilter.value;
  
  let filteredProjects = projects;
  
  // Nach Abteilung filtern
  if (selectedDepartment !== 'all') {
    filteredProjects = filteredProjects.filter(project => project.departmentId === selectedDepartment);
  }
  
  // Nach Suchbegriff filtern
  if (searchTerm) {
    filteredProjects = filteredProjects.filter(project => 
      project.title.toLowerCase().includes(searchTerm) || 
      project.context.toLowerCase().includes(searchTerm) || 
      project.details.toLowerCase().includes(searchTerm)
    );
  }
  
  // Gefilterte Projekte anzeigen
  renderProjects(filteredProjects);
}

// Initialisierung
async function init() {
  // Daten laden
  await loadData();
  
  // Event-Listener für Klicks außerhalb des Modals
  window.addEventListener('click', (event) => {
    if (event.target === projectDetailsModal) {
      projectDetailsModal.classList.remove('active');
    }
  });
  
  // Event-Listener für Escape-Taste
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && projectDetailsModal.classList.contains('active')) {
      projectDetailsModal.classList.remove('active');
    }
  });
}

// Anwendung starten
document.addEventListener('DOMContentLoaded', init); 