import { useState } from "react";
import MonthDropdown from "components/Dropdowns/MonthDropdown";
import YearDropdown from "components/Dropdowns/YearDropdown";
import CardStats from "components/Cards/CardStats";

export default function ChoixMoisAnnee() {
  const [mois, setMois] = useState('');
  const [annee, setAnnee] = useState('');
  const [statData, setStatData] = useState(null); // État pour stocker les données des statistiques

  const handleValidation = async () => {
    if (!mois || !annee) {
      alert("يرجى اختيار كل من الشهر والسنة");
      return;
    }

    try {
      // Appel de l'API pour récupérer les données
      const response = await fetch(`/api/stats?annee=${annee}&mois=${mois}`);
      const data = await response.json();
      setStatData(data[0]); // On suppose que les données retournées par l'API sont un tableau, donc on récupère le premier élément
    } catch (error) {
      console.error("Erreur lors de l'appel de l'API:", error);
    }
  };

  return (
    <div className="p-4 text-center">
      <div className="flex items-center justify-center flex-row">
        <div className="mr-3">
          <button
            onClick={handleValidation}
            className="bg-white text-blue-600 font-bold py-2 px-6 border border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition duration-300"
          >
            تأكيد
          </button>
        </div>

        {/* Mois */}
        <div className="mr-3">
          <MonthDropdown value={mois} onChange={setMois} />
        </div>

        {/* Année */}
        <div>
          <YearDropdown value={annee} onChange={setAnnee} />
        </div>
      </div>

      {/* Passer les données récupérées du backend à CardStats */}
      {statData && <CardStats {...statData} />}
    </div>
  );
}