/**
 * Redis-Client für ZVV Projektmanagement
 * 
 * Dieses Modul stellt die Verbindung zur Redis-Datenbank her und bietet
 * Funktionen zum Speichern und Abrufen von Daten.
 */

import { Redis } from 'https://cdn.jsdelivr.net/npm/@upstash/redis@1.22.0/+esm';

// Redis-Client initialisieren
const redis = new Redis({
  url: 'https://content-bluejay-26810.upstash.io',
  token: 'AWi6AAIjcDFmOTU5OTVmMzU4N2M0YTFiYTk0NTQ5Njk5OTAyMDdlYXAxMA',
});

// Testverbindung
async function testConnection() {
  try {
    await redis.set('test-connection', 'connected');
    const result = await redis.get('test-connection');
    console.log('Redis-Verbindung erfolgreich:', result);
    return true;
  } catch (error) {
    console.error('Redis-Verbindungsfehler:', error);
    return false;
  }
}

// Abteilungen speichern
async function saveDepartments(departments) {
  try {
    await redis.set('zvv:departments', JSON.stringify(departments));
    console.log('Abteilungen erfolgreich gespeichert');
    return true;
  } catch (error) {
    console.error('Fehler beim Speichern der Abteilungen:', error);
    return false;
  }
}

// Abteilungen abrufen
async function getDepartments() {
  try {
    const data = await redis.get('zvv:departments');
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error('Fehler beim Abrufen der Abteilungen:', error);
    return null;
  }
}

// Projekte speichern
async function saveProjects(projects) {
  try {
    await redis.set('zvv:projects', JSON.stringify(projects));
    console.log('Projekte erfolgreich gespeichert');
    return true;
  } catch (error) {
    console.error('Fehler beim Speichern der Projekte:', error);
    return false;
  }
}

// Projekte abrufen
async function getProjects() {
  try {
    const data = await redis.get('zvv:projects');
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error('Fehler beim Abrufen der Projekte:', error);
    return null;
  }
}

// Projekt nach ID abrufen
async function getProjectById(id) {
  try {
    const projects = await getProjects();
    return projects ? projects.find(project => project.id === id) : null;
  } catch (error) {
    console.error('Fehler beim Abrufen des Projekts:', error);
    return null;
  }
}

// Projekte nach Abteilung abrufen
async function getProjectsByDepartment(departmentId) {
  try {
    const projects = await getProjects();
    return projects ? projects.filter(project => project.departmentId === departmentId) : [];
  } catch (error) {
    console.error('Fehler beim Abrufen der Projekte nach Abteilung:', error);
    return [];
  }
}

// Projekt aktualisieren
async function updateProject(project) {
  try {
    const projects = await getProjects();
    if (!projects) return false;
    
    const index = projects.findIndex(p => p.id === project.id);
    if (index === -1) return false;
    
    projects[index] = project;
    await saveProjects(projects);
    return true;
  } catch (error) {
    console.error('Fehler beim Aktualisieren des Projekts:', error);
    return false;
  }
}

// Projekt hinzufügen
async function addProject(project) {
  try {
    const projects = await getProjects();
    if (!projects) return false;
    
    projects.push(project);
    await saveProjects(projects);
    return true;
  } catch (error) {
    console.error('Fehler beim Hinzufügen des Projekts:', error);
    return false;
  }
}

// Projekt löschen
async function deleteProject(id) {
  try {
    const projects = await getProjects();
    if (!projects) return false;
    
    const filteredProjects = projects.filter(project => project.id !== id);
    await saveProjects(filteredProjects);
    return true;
  } catch (error) {
    console.error('Fehler beim Löschen des Projekts:', error);
    return false;
  }
}

// Exportiere die Funktionen
export {
  testConnection,
  saveDepartments,
  getDepartments,
  saveProjects,
  getProjects,
  getProjectById,
  getProjectsByDepartment,
  updateProject,
  addProject,
  deleteProject
}; 