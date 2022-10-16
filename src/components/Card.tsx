import React from 'react'
import ICard from '../types/Card_interface'
import styled, { keyframes } from 'styled-components'
import carImage from '../resurce/car.svg'
import shieldImange from '../resurce/shield.svg'
import LikeImage from '../resurce/like.svg'
import statisticImage from '../resurce/statistic.svg'
import PlaceHolder from '../resurce/expample.png'

interface ISeen {
  seen: boolean;
}


const CardBox = styled.div<ISeen>`
  display: flex;
  width: 224px;
  height: 386px;
  flex-direction: column;
  border-radius: 8px;
  margin-top: 24px;
  margin-bottom: 24px;

  background-color: ${props => props.seen ? '#FFF6A5' : 'white'};
  &:hover {
    background-color: lightgreen;
  }
  position: relative;
  `
const TextInfo = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
  `

const CostInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  `
const IconField = styled.div`
    display: flex;
    justify-content: flex-end;
  `
const ImageCar = styled.img<ISeen>`
    width: 21px;
    height: 15px;
    margin: 7px 12px 0 0;
    border-radius: 8px 8px;
    filter: ${props => props.seen ? 'invert(41%) sepia(71%) saturate(3048%) hue-rotate(156deg) brightness(96%) contrast(101%)' : ''};
  `
const ImageShield = styled.img<ISeen>`
    width: 14px;
    height: 19px;
    margin: 4px 5px 0 0;
    filter: ${props => props.seen ? 'invert(41%) sepia(71%) saturate(3048%) hue-rotate(156deg) brightness(96%) contrast(101%)' : ''};
  `
const OldPrice = styled.div`
    color: #5A5A5A;
    text-decoration-color: #5A5A5A;
    font-style: normal;
    line-height: 16px;
    font-size: 14px;
    margin-top: 1px;
  `
const NewPrice = styled.h1`
    font-style: bold;
    font-size: 22px;
    margin-top: 1px;
    margin-bottom: 0px;
  `

const Title = styled.h3`
  font-style: medium;
  font-size: 14px;
  margin-top: 8px;
  `

const Info = styled.div`
    margin: 0 12px 12px 12px;
  `

const LocationTime = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    font-size: 12px;
    color: #8F8F8F;
    margin-top: 14px;
  `
const MainImage = styled.img`
    border-radius: 8px 8px 0 0;
    width: 224px;
    height: 260px;
  `

const animation = keyframes`
  from{
    width: 24px;
    height: 24px;
  }
  50%{
    width: 32px;
    height: 32px;
  }
  to{
    width: 24px;
    height: 24px;
  }
  `
const Like = styled.img`
  position: absolute;
  top: 205px;
  left: 191px;
  width: 24px;
  height: 24px;
  &:hover{
    animation: ${animation} .5s ease-in 1;
  }
  `
// filter: invert(42 %) sepia(68 %) saturate(1248 %) hue - rotate(161deg) brightness(97 %) contrast(101 %);

const Statick = styled.img`
    position: absolute;
    top: 166px;
    left: 191px;
    width: 24px;
    height: 24px;
    
    &:hover{
    animation: ${animation} .5s ease-in 1;
  }
  `
const SeensLabel = styled.div<ISeen>`
  position: absolute;
  width: 78px;
  top: 17px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  color: #FFFFFF;
  border: 0 solid;
  border-radius: 8px;
  background-color: rgba(44, 44, 44, 0.74);
  padding: 5px 8px;
  font-size: 12px;
  text-align: center;
  line-height: 14px;
  display: ${props => props.seen ? 'block' : 'none'};
  -moz-user-select: none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
`

const Card: React.FC<ICard> = ({
  oldPrice,
  price,
  title,
  seen,
  locality,
  date,
}) => {

  locality = locality.length > 14 ? locality.slice(0, 14) + "." : locality;

  let localDate: Date = new Date(date);

  let options: Intl.DateTimeFormatOptions = { year: 'numeric', month: '2-digit', day: 'numeric', hour: '2-digit', minute: '2-digit' };

  let dataString: string = localDate.toLocaleDateString('ru-RU', options)

  let formatedOldPrice = Math.round(oldPrice)

  let formatedPrice = Math.round(price)

  return (
    <CardBox seen={seen}>
      <SeensLabel seen={seen}>Просмотрено</SeensLabel>
      <Statick src={statisticImage} />
      <Like src={LikeImage} />
      <MainImage src={'https://source.unsplash.com/random'} />
      <Info>
        <TextInfo>
          <>
            <CostInfo>
              <OldPrice><del>{formatedOldPrice}₽</del></OldPrice>
              <NewPrice>{formatedPrice}₽</NewPrice>
            </CostInfo>
            <IconField>
              <ImageCar seen={seen} src={carImage} />
              <ImageShield seen={seen} src={shieldImange} />
            </IconField>
          </>
        </TextInfo>
        <Title>{title}</Title>
        <LocationTime>
          <div>{locality}</div>
          <div>{dataString}</div>
        </LocationTime>
      </Info>
    </CardBox>
  )
}

export default Card
