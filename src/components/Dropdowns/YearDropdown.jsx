

export default function YearDropdown({value,onChange}) {
  const currentYear = new Date().getFullYear();

  const years = [];
  for (let year = currentYear - 5; year <= currentYear + 1; year++) {
    years.push(year);
  }

  return (
    <div className="flex flex-row-reverse items-center gap-2">
      {/* Champ select à gauche */}
      <select
        value={value}
        onChange={(e)=>onChange(e.target.value)}
        className="border rounded px-2 py-1 w-40 text-blueGray-500"
      >
        <option value="">-- إختيار السنة --</option>
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>

      {/* Libellé à droite du champ */}
      <label className="font-bold text-base text-blueGray-800 text-center underline whitespace-nowrap">
        :السنة
      </label>

      {/* Affichage du résultat */}
      
    </div>
  );
}

