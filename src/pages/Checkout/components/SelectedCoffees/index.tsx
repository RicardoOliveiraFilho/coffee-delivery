import { TitleText } from '../../../../components/Typography'
import { DetailsContainer, SelectedCoffeesContainer } from './styles'

import { CoffeeCartCard } from '../CoffeeCartCard'
import { ConfirmationSection } from '../ConfirmationSection'

export function SelectedCoffees() {
  return (
    <SelectedCoffeesContainer>
      <TitleText size="xs" color="subtitle">
        Cafés selecionados
      </TitleText>

      <DetailsContainer>
        <CoffeeCartCard />
        <CoffeeCartCard />
        <CoffeeCartCard />

        <ConfirmationSection />
      </DetailsContainer>
    </SelectedCoffeesContainer>
  )
}
