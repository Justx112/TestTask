import React from 'react'
import ICard from '../types/Card_interface'
import Card from './Card'
import styled from 'styled-components'

interface ICards {
    cards: ICard[]
}

const Container = styled.div`
    display: flex;
    margin-left: auto;
    margin-right: auto;
    width: 80vw;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 25px;
`

const CenterAdaptive = styled.div`
  margin-left: auto;
  margin-right: auto;
`


const CardList: React.FC<ICards> = ({ cards }) => {
    return (
        <Container>
            {cards.map(item =>
                <CenterAdaptive key={item.id}>
                    <Card
                        id={item.id}
                        oldPrice={item.oldPrice}
                        price={item.price}
                        title={item.title}
                        seen={item.seen}
                        locality={item.locality}
                        date={item.date}
                    />
                </CenterAdaptive>)}

        </Container>
    )
}

export default CardList
