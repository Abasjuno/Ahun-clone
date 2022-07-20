import { BsCalendar2Event } from "react-icons/bs";
import { FaMoneyBillAlt } from "react-icons/fa";
import styled from "styled-components"
interface propstype {
  imgsrc: string;
  title: string;
  date: string;
  amount: string;
}
export default function Ticket(props:propstype) {
  return (
    <Wrap>
      
      <img src={props.imgsrc} alt="" />
      <h2>{props.title}</h2>
      <small>{<BsCalendar2Event />}{props.date }</small>
      <small>{<FaMoneyBillAlt />}{ props.amount}</small>
    </Wrap>
  )
}
const Wrap = styled.div`
  height:280px;
width:260px;
margin:30px;
margin-bottom:70px;
border-top-right-radius: 10px;
border-top-left-radius: 10px;



img{
  height:250px;
  width:250px;
  border-radius:10px;
  margin-bottom:10px;
  transition:.4s ease-out;
  &:hover{
    transform:scale(1.2)
  }
}
h2{
  font-size:20px;
}
small{
  display:block;
}
svg{
  margin:4px 10px;
  font-size:18px;
}
`