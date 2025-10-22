import fetch from "node-fetch";

const SHEET_ID = "1QUULT7kZivqYpVi8fzpnB9XVUZegSj9fMNoXBP7UBKE";
const API_KEY = "AIzaSyDf7kz2JIDVfUorrWXZ-hvXR1nLmuTWfMA";
const SHEET_NAME = "Sheet1"; // Nombre de la pestaña

export async function fetchGoogleSheetData() {
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${SHEET_NAME}?key=${API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (response.ok) {
      // La primera fila son encabezados
      const [headers, ...rows] = data.values;
      return rows.map((row) =>
        Object.fromEntries(headers.map((h, i) => [h, row[i]])),
      );
    } else {
      console.error("Error al obtener datos:", data.error);
      return [];
    }
  } catch (error) {
    console.error("Error de red o JSON:", error);
    return [];
  }
}
