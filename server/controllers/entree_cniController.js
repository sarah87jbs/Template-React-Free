/ controllers/statsController.js
const oracledb = require('oracledb');
const { getPreviousMonthAndYear } = require('../utils/dateHelpers');


async function getStats(req, res) {
  try {
    const { mois, annee } = req.query;

    if (!mois || !annee) {
      return res.status(400).json({ error: 'mois et annee sont requis' });
    }

    const { previousMonth, previousYear } = getPreviousMonthAndYear(annee, mois);

    const connection = await oracledb.getConnection(dbConfig);

    // Exemple 1 : stats pour le mois actuel
    const resultNow = await connection.execute(
      `SELECT SUM(montant) AS total FROM entree_cni WHERE annee = :annee AND mois = :mois AND cdepret IN 
      (SELECT cdepret FROM pret WHERE type IN ('P','S'))`,
      { annee, mois }
    );

    // Exemple 2 : stats pour le mois précédent
    const resultPrevious = await connection.execute(
      `SELECT SUM(montant) AS total FROM entree WHERE annee = :annee AND mois = :mois AND code IN
       (SELECT cdepret FROM pret WHERE type IN ('P','S'))`,
      { annee: previousYear, mois: previousMonth }
    );

    await connection.close();

    res.json({
      currentMonth: {
        annee,
        mois,
        total: resultNow.rows[0][0] || 0,
      },
      previousMonth: {
        annee: previousYear,
        mois: previousMonth,
        total: resultPrevious.rows[0][0] || 0,
      },
    });
  } catch (error) {
    console.error('Erreur dans getStats:', error);
    res.status(500).json({ error: 'Erreur serveur' });
  }
}

module.exports = {
  getStats,
};