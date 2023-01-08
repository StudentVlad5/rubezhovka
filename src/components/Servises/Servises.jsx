import { useState } from 'react';
import { PhoneTwoTone } from '@ant-design/icons';
import servises from 'json/servises.json';
import css from './Servises.module.css';
import iconViber from '../../img/viber.png';
import iconWhatsUp from '../../img/whatsapp-png-image.png';

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
        <section style={{width:'100%'}}>
                <section className={css.section__servises}>
                    <div className={css.select__container__servises}>
                        <label className={css.labelTable__servises}>Обрати послугу
                            <select name="servises_name" id="servises_name" onChange={(e)=>setSearchServises(e.target.value)}>
                            <option value="">-Вeсь перелік-</option>
                            {listOfServisesUniq.map(item => <option value={item} key={item}>{item}</option>)}
                            </select>
                        </label>
                        <label className={css.labelTable__servises}>Назва сервісу
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
            <section className={css.select__container}>
            <table className={css.table_servises}>
                <caption className={css.title_servises}>Перелік послуг</caption>
                <thead className={css.thead_servises}>
                    <tr className={css.tr_servises}>
                        <th>Опис</th>
                        <th>Контактна особа</th>
                        <th>Контакти</th>
                        <th>ЧАТ</th>
                    </tr>
                </thead>
                <tbody>
                    {copyServises.map(item => 
                        <tr className={css.tr_servises} key={item.id}>
                            <td>{item.tools_detail}</td>
                            <td>{item.name}</td>
                            <td><a href={`tel:${item.phone}`}>{item.phone}<PhoneTwoTone style={{paddingLeft:'4px'}}/></a></td>
                            <td>
                                <a href={`viber://chat?number=%2B${item.phone}`}><img className={css.chatIcon} src={iconViber} alt="viber"/></a>
                                <a href={`https://wa.me/${item.phone}`}><img className={css.chatIcon} src={iconWhatsUp} alt="whatsUp"/></a>
                            </td>
                        </tr>)}
                </tbody>
                </table>
            </section>
        </section>)
}