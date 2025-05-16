const express = require('express');
const router = express.Router();
const oracledb = require('oracledb');
const { getPreviousMonthAndYear } = require('../utils/dateHelpers');

// Exemple de route dynamique
router.get('/stats', async (req, res) => {
  const { annee, mois } = req.query;

  if (!annee || !mois) {
    return res.status(400).json({ error: 'annee et mois sont requis' });
  }

  const { prevAnnee, prevMois } = getPreviousMonthAndYear(annee, mois);

  try {
    const connection = await oracledb.getConnection({
      user: "TON_UTILISATEUR",
      password: "TON_MDP",
      connectString: "TON_TNS"
    });

    const result = await connection.execute(
      `SELECT SUM(montant) as total FROM entree 
       WHERE annee = :annee AND mois = :mois AND code IN (SELECT cdepret FROM pret WHERE type IN ('P','S'))`,
      [annee, mois]
    );

    const resultPrev = await connection.execute(
      `SELECT SUM(montant) as total FROM entree 
       WHERE annee = :annee AND mois = :mois AND code IN (SELECT cdepret FROM pret WHERE type  IN ('P','S'))`,
      [prevAnnee, prevMois]
    );

    await connection.close();

    const current = result.rows[0][0] || 0;
    const previous = resultPrev.rows[0][0] || 0;
    const percent = previous !== 0 ? (((current - previous) / previous) * 100).toFixed(2) : 0;

    res.json([
      {
        statSubtitle: "المداخيل",
        statTitle: current.toLocaleString(),
        statArrow: percent >= 0 ? "up" : "down",
        statPercent: Math.abs(percent),
        statPercentColor: percent >= 0 ? "text-emerald-500" : "text-red-500",
        statDescripiron: "مقارنة بالشهر الماضي",
        statIconName: "far fa-chart-bar",
        statIconColor: "bg-red-500"
      }
    ]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erreur lors de la récupération des données." });
  }
});

module.exports = router;