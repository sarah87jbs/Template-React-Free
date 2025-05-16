// src/components/MonthDropdown.jsx



export default function MonthDropdown({value,onChange}){
  return(
    <div className="flex flex-row-reverse items-center gap-2" dir="rtl">
      {/* Libellé à droite */}
      <label className="font-bold text-base text-blueGray-800 underline">
        الشهر:
      </label>
     
    <select value={value}   onChange={(e)=> onChange(e.target.value)} 
     className="border border-gray-300 rounded px-2 py-1 text-left text-blueGray-500"
     style={{ width: '250px' }}>
      <option value="">--إختيار الشهر--</option>
      <option value="01">جانفي</option>
      <option value="02">فيفري</option>
      <option value="03">مارس</option>
      <option value="04">أفريل</option>
      <option value="05">ماي</option>
      <option value="06">جوان</option>
      <option value="07">جويلية</option>
      <option value="08">أوت</option>
      <option value="09">سبتمبر</option>
      <option value="10">أكتوبر</option>
      <option value="11">نوفمبر</option>
      <option value="12">ديسمبر</option>
    </select>
    
    </div>
  );
}