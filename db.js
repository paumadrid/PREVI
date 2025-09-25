import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('previ.db');

// Crear tablas si no existen
export function setupDatabase() {
  db.transaction(tx => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        email TEXT UNIQUE,
        password TEXT,
        group_id INTEGER
      );`
    );
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS groups (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        password TEXT
      );`
    );
  });
}

export default db;
