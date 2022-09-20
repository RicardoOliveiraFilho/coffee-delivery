import { TitleText } from '../../../../components/Typography'
import { CoffeeList, ListOfCafesContainer } from './styles'

import { CoffeeCard } from '../CoffeeCard'

import { coffees } from '../../../../data/coffees'

export function ListOfCafes() {
  return (
    <ListOfCafesContainer className="container">
      <TitleText size="l" color="subtitle">
        Nossos cafés
      </TitleText>

      <CoffeeList>
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee.id} coffee={coffee} />
        ))}
      </CoffeeList>
    </ListOfCafesContainer>
  )
}
