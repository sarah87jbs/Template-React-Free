function getPreviousMonthAndYear(annee, mois) {
    let prevMois = parseInt(mois, 10);
    let prevAnnee = parseInt(annee, 10);
  
    if (prevMois === 1) {
      prevMois = 12;
      prevAnnee -= 1;
    } else {
      prevMois -= 1;
    }
  
    // Retourne le mois sous forme de chaîne à 2 chiffres
    const formattedMois = prevMois.toString().padStart(2, '0');
  
    return {
      prevAnnee,
      prevMois: formattedMois
    };
  }
  
  module.exports = {
    getPreviousMonthAndYear,
  };