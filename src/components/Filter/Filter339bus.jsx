import { useState } from "react";
import { Busshadule339 } from "../Busshadule/Busshadule339";
import css from './Filter.module.css';

export const Filter339bus = () => {
    const [day, setDay] = useState('');
    const [startOfWay, setStartOfWay] = useState('');

return (<section className={css.sectionShaduleBus}><label className={css.labelTable}>Обрати день тижня<select name="dayOfWeek" id="dayOfWeek" onChange={(e)=>setDay(e.target.value)}><option value="">--Всі дні тижня--</option><option value="субота">субота</option><option value="неділя">неділя</option><option value="будні дні">будні дні</option></select></label>
<label className={css.labelTable}>Початок маршруту
<select name="startOfMarshrute" id="startOfMarshrute" onChange={(e)=>setStartOfWay(e.target.value)}><option value="">--всі маршрути--</option><option value="Ірпінь">Ірпінь</option><option value="Забуччя">Забуччя</option><option value="М-Рубежівка">М-Рубежівка</option></select></label>
<Busshadule339 startOfWay={startOfWay} day={day}/>
</section>)
}