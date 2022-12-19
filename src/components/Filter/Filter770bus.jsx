import { useState } from "react";
import { Busshadule770 } from "../Busshadule/Busshadule770";
import css from './Filter.module.css';

export const Filter770bus = () => {
    const [day, setDay] = useState('');
    const [startOfWay, setStartOfWay] = useState('');

return (<section className={css.sectionShaduleBus}><label className={css.labelTable}>Обрати день тижня<select name="dayOfWeek" id="dayOfWeek" onChange={(e)=>setDay(e.target.value)}><option value="">--Всі дні тижня--</option><option value="вихідні">вихідні</option><option value="будні дні">будні дні</option></select></label>
<label className={css.labelTable}>Початок маршруту
<select name="startOfMarshrute" id="startOfMarshrute" onChange={(e)=>setStartOfWay(e.target.value)}><option value="">--всі маршрути--</option><option value="Дмитрівка">Дмитрівка</option><option value="М-Рубежівка">М-Рубежівка</option><option value="Ч.Хутір">Ч.Хутір</option><option value="Київ">Київ</option></select></label>
<Busshadule770 startOfWay={startOfWay} day={day}/>
</section>)
}