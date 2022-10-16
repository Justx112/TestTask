import React from "react";
import CardList from "./components/CardList";
import ICard from "./types/Card_interface";
import { useState, useEffect } from "react";
import axios from "axios";
import styled, { keyframes } from "styled-components";
import arrow from './resurce/arrow.svg'
import spiner from './resurce/load.svg'


const Container = styled.div`
  width: 80vw;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`

const Offers = styled.div`
  align-self: flex-start;
  margin-left: 32px;
  margin-top: 25px;
  font-weight: 700;
  font-size: 22px;
  line-height: 25px;
`
const Button = styled.div`
  padding: 0;
  border: none;
  font: inherit;
  color: inherit;
  background-color: transparent;
  cursor: pointer;
  color: #00A0AB;
  align-self: flex-end;
  height: 24px;
  margin-bottom:33px;

`
const Arrow = styled.img`
  vertical-align: top;
`
const NoMoreOffer = styled.div`
color: #00A0AB;
align-self: center;
margin-bottom: 33px;
`

function App() {
  const startCard: number = 16
  const stepAddCard:number = 15
  const [card, setCard] = useState<ICard[]>([])
  const [countCard, setCountCard] = useState(startCard)
  const [dataCard, setDataCard] = useState<ICard[]>([])

  useEffect(
    () => {
      getCards();
    }
    , [])


  function showCard(cardList: ICard[]) {
    setCard(cardList.filter((item, index) => {
      if (index <= countCard) return item
    }))
    setCountCard(prev => prev + stepAddCard)
  }

  async function getCards() {
    try {
      const response = await axios.get<ICard[]>('https://6075786f0baf7c0017fa64ce.mockapi.io/products')
      await showCard(response.data)
      await setDataCard(response.data)
    }
    catch (e) {
      console.log(e)
    }
  }


  return (
    <Container>
      <Offers>Похожие объявления</Offers>
      <CardList cards={card} />
      <Button onClick={() => showCard(dataCard)} hidden={card.length === dataCard.length}>Показать еще<Arrow src={arrow} alt="" /></Button>
      <NoMoreOffer hidden={card.length !== dataCard.length} >Больше не предложений(</NoMoreOffer>
    </Container>
  );

}

export default App;
