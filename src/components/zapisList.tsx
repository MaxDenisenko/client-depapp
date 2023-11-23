import { FC, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { GetZapis } from "../redux/actions/zapis.action"

const ZapisList:FC = () => {
    const dispatch = useDispatch()
    const zapis = useSelector ((state: any) => state.zapis.zapis)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(()=>{
        dispatch(GetZapis())
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    return <>
        <input placeholder="Выберите дату" type="date"></input>
        <input placeholder="Выберите зону" type="text"></input>
        <input placeholder="Введите сумму" type="number"></input>
        <input placeholder="Введите ФИО" type="text"></input>
        <input placeholder="Введите телефон" type="text"></input>
        <input placeholder="Комментарий" type="text"></input>
        <button>Ввести</button>
        <hr/>
        <table>
            <tr>
                <td>Индекс</td>
                <td>Дата</td>
                <td>Зона</td>
                <td>Сумма</td>
                <td>ФИО клиента</td>
                <td>Телефон клиента</td>
                <td>Комментарий</td>
            </tr>
            <tbody>
            {zapis && zapis.map(((zapis: any) => {
                return (
                    <tr key={zapis.id}>
                    <td>{zapis.id}</td>
                    <td>{zapis.date}</td>
                    <td>{zapis.area}</td>
                    <td>{zapis.sum}</td>
                    <td>{zapis.fioClient}</td>
                    <td>{zapis.phoneClient}</td>
                    <td>{zapis.comment}</td>
                </tr>
                )
                
            }))}
            </tbody>
        </table>
    </>
}

export default ZapisList