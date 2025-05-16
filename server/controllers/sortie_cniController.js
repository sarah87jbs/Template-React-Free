const oracledb = require("oracledb");
const dbConfig = require("../config/dbConfig");

async function getSortieCni(req, res) {
  const { annee, mois } = req.query;

  if (!annee || !mois) {
    return res.status(400).json({ error: "Les paramètres annee et mois sont requis." });
  }

  let connection;

  try {
    connection = await oracledb.getConnection(dbConfig);

    const result = await connection.execute(
      `SELECT cdepret, SUM(montant) AS total_montant, type, code
       FROM sortie
       WHERE annee = :annee AND mois = :mois
       GROUP BY cdepret, type, code`,
      [annee, mois]
    );

    const formattedData = result.rows.map(row => ({
      cdepret: row[0],
      montant_total: row[1],
      type: row[2],
      code: row[3],
    }));

    res.json(formattedData);
  } catch (err) {
    console.error("Erreur Oracle :", err);
    res.status(500).json({ error: "Erreur serveur" });
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error("Erreur lors de la fermeture de la connexion :", err);
      }
    }
  }
}

module.exports = getSortieCni;