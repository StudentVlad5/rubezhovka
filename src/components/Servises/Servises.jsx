import { useState } from 'react';
import servises from '../../json/servises.json';
import css from './Servises.module.css';

export const Servises = () => {
    const[searchServises,setSearchServises] = useState('');
    const[searchServisesDetails,setSearchServisesDetails] = useState('');
    const[searchPlace,setSearchPlace] = useState('');
  

    let listOfServises = [];
    let listOfServisesDetail = [];
    let listOfPlace = [];
    let copyServises = Object.assign(servises);

    const resetMenu = () => {
    copyServises.map((item) => listOfServises.push(item.tools));
    copyServises.map((item) => listOfServisesDetail.push(item.tools_detail));
    copyServises.map((item) => listOfPlace.push(item.place))
    }

    if(searchServises !== '') {copyServises = copyServises.filter(item=>item.tools === searchServises)} 
    if(searchServisesDetails !== '') {copyServises = copyServises.filter(item=>item.tools_detail === searchServisesDetails)}
    if(searchPlace !== '') {copyServises = copyServises.filter(item=>item.place === searchPlace);
    }

    resetMenu()

    const  listOfServisesUniq = listOfServises.filter((item,index) => listOfServises.indexOf(item) === index);
    const  listOfServisesDetailsUniq = listOfServisesDetail.filter((item,index) => listOfServisesDetail.indexOf(item) === index);
    const  listOfPlaceUniq = listOfPlace.filter((item,index) => listOfPlace.indexOf(item) === index);


    return (
        <section>
                <section className={css.section__servises}>
                    <div className={css.select__container__servises}>
                        <label className={css.labelTable__servises}>Обрати послугу,товар
                            <select name="servises_name" id="servises_name" onChange={(e)=>setSearchServises(e.target.value)}>
                            <option value="">-Вeсь перелік-</option>
                            {listOfServisesUniq.map(item => <option value={item} key={item}>{item}</option>)}
                            </select>
                        </label>
                        <label className={css.labelTable__servises}>Назва продукту
                            <select name="servises_name" id="servises_name" onChange={(e)=>setSearchServisesDetails(e.target.value)}>
                            <option value="">-Вeсь перелік-</option>
                            {listOfServisesDetailsUniq.map(item => <option value={item} key={item}>{item}</option>)}
                            </select>
                        </label>
                        <label className={css.labelTable__servises}>Локація
                            <select name="servises_name" id="servises_name" onChange={(e)=>setSearchPlace(e.target.value)}>
                            <option value="">-Вeсь перелік-</option>
                            {listOfPlaceUniq.map(item => <option value={item} key={item}>{item}</option>)}
                            </select>
                        </label>
                    </div>
                </section>
            <section className={css.select__container__servises}>
            <table className={css.table_servises}>
                <caption className={css.title_servises}>Перелік місцевих послуг/товарів </caption>
                <thead className={css.thead_servises}>
                    <tr className={css.tr_servises}>
                        <th>Послуга</th>
                        <th>Опис</th>
                        <th>Контакти</th>
                        <th>Контактна особа</th>
                        <th>Місце знаходження</th>
                    </tr>
                </thead>
                <tbody>
                    {copyServises.map(item => 
                        <tr className={css.tr_servises} key={item.id}>
                            <td>{item.tools}</td>
                            <td>{item.tools_detail}</td>
                            <td>{item.name}</td>
                            <td><a href="tel:{item.phone}">{item.phone}</a></td>
                            <td>{item.place}</td>
                        </tr>)}
                </tbody>
                </table>
            </section>
        </section>)
}