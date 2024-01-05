import React, { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { TextField } from "@mui/material";
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { useDispatch, useSelector } from "react-redux";
import { CreateZapis } from "../redux/actions/zapis.action";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AddModal({ open, setOpen, id = null }: any) {
  const dispatch = useDispatch()
  const zapis = useSelector((state: any) => state.zapis.zapis)
  const [date, setDate] = useState('')
  const [area, setArea] = useState('')
  const [sum, setSum] = useState('')
  const [fioClient, setFioClient] = useState('')
  const [phoneClient, setPhoneClient] = useState('')
  const [comment, setComment] = useState('')
  useEffect(() => {
    if (id != null) {
      let zapisNew = zapis.filter((item: any) => item.id === id)
      setDate(zapisNew[0].date)
      setArea(zapisNew[0].area)
      setSum(zapisNew[0].sum)
      setFioClient(zapisNew[0].fioClient)
      setPhoneClient(zapisNew[0].phoneClient)
      setComment(zapisNew[0].comment)
    }
  }, [])



  const handleClose = () => {
    setOpen(false);
  };
  const handleSendData = () => {
    if (id !== null){
      dispatch(CreateZapis(id, date, area, sum, fioClient, phoneClient, comment))
    } else {
      dispatch(CreateZapis(id, date, area, sum, fioClient, phoneClient, comment))
    }
    setDate('')
    setArea('')
    setSum('')
    setFioClient('')
    setPhoneClient('')
    setComment('')
    handleClose()
  }

  return (
    <React.Fragment>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>Новая запись</DialogTitle>
        <DialogContent sx={{ display: "flex", flexFlow: "column" }}>
          <TextField variant="outlined" type="date" sx={{ marginTop: 2 }} value={date} onChange={(e) => setDate(e.target.value)} />
          <TextField label="Зона" variant="outlined" sx={{ marginTop: 2 }} value={area} onChange={(e) => setArea(e.target.value)} />
          <TextField label="Сумма" variant="outlined" type="number" sx={{ marginTop: 2 }} value={sum} onChange={(e) => setSum(e.target.value)} />
          <TextField label="ФИО клиента" variant="outlined" sx={{ marginTop: 2 }} value={fioClient} onChange={(e) => setFioClient(e.target.value)} />
          <TextField label="Телефон клиента" variant="outlined" type="tel" sx={{ marginTop: 2 }} placeholder="7xxxxxxxxxx" value={phoneClient} onChange={(e) => setPhoneClient(e.target.value)} />
          <TextField label="Комментарий" variant="outlined" sx={{ marginTop: 2 }} value={comment} onChange={(e) => setComment(e.target.value)} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Отмена</Button>
          <Button onClick={handleSendData}>{!id ? 'Добавить' : 'Изменить'}</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}