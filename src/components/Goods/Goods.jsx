import { useState } from 'react';
import goods from '../../json/goods.json';
import css from './Goodsa.module.css';

export const Goods = () => {
    const[searchGoods,setSearchGoods] = useState('');
    const[searchGoodsDetails,setSearchGoodsDetails] = useState('');
    const[searchPlace,setSearchPlace] = useState('');
 

    let listOfGoods = [];
    let listOfGoodsDetail = [];
    let listOfPlace = [];
    let copyGoods = Object.assign(goods);

    const resetMenu = () => {
    copyGoods.map((item) => listOfGoods.push(item.tools));
    copyGoods.map((item) => listOfGoodsDetail.push(item.tools_detail));
    copyGoods.map((item) => listOfPlace.push(item.place))
    }

    if(searchGoods !== '') {copyGoods = copyGoods.filter(item=>item.tools === searchGoods)} 
    if(searchGoodsDetails !== '') {copyGoods = copyGoods.filter(item=>item.tools_detail === searchGoodsDetails)}
    if(searchPlace !== '') {copyGoods = copyGoods.filter(item=>item.place === searchPlace);
    }

    resetMenu()

    const  listOfGoodsUniq = listOfGoods.filter((item,index) => listOfGoods.indexOf(item) === index);
    const  listOfGoodsDetailsUniq = listOfGoodsDetail.filter((item,index) => listOfGoodsDetail.indexOf(item) === index);
    const  listOfPlaceUniq = listOfPlace.filter((item,index) => listOfPlace.indexOf(item) === index);


    return (
        <section>
                <section className={css.section__goods}>
                    <div className={css.select__container__goods}>
                        <label className={css.labelTable_goods}>Обрати послугу,товар
                            <select name="goods_name" id="goods_name" onChange={(e)=>setSearchGoods(e.target.value)}>
                            <option value="">-Вeсь перелік-</option>
                            {listOfGoodsUniq.map(item => <option value={item} key={item}>{item}</option>)}
                            </select>
                        </label>
                        <label className={css.labelTable_goods}>Назва продукту
                            <select name="goods_name" id="goods_name" onChange={(e)=>setSearchGoodsDetails(e.target.value)}>
                            <option value="">-Вeсь перелік-</option>
                            {listOfGoodsDetailsUniq.map(item => <option value={item} key={item}>{item}</option>)}
                            </select>
                        </label>
                        <label className={css.labelTable_goods}>Локація
                            <select name="goods_name" id="goods_name" onChange={(e)=>setSearchPlace(e.target.value)}>
                            <option value="">-Вeсь перелік-</option>
                            {listOfPlaceUniq.map(item => <option value={item} key={item}>{item}</option>)}
                            </select>
                        </label>
                    </div>
                </section>
            <section className={css.select__container__goods}>
            <table className={css.table_goods}>
                <caption className={css.title_goods}>Перелік місцевих послуг/товарів </caption>
                <thead className={css.thead_goods}>
                    <tr className={css.tr_goods}>
                        <th>Товар</th>
                        <th>Опис</th>
                        <th>Контакти</th>
                        <th>Контактна особа</th>
                        <th>Місце знаходження</th>
                    </tr>
                </thead>
                <tbody>
                    {copyGoods.map(item => 
                        <tr className={css.tr_goods} key={item.id}>
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