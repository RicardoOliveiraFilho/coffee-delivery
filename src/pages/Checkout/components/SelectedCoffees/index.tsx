import { useCart } from '../../../../hooks/useCart'

import { TitleText } from '../../../../components/Typography'
import { DetailsContainer, SelectedCoffeesContainer } from './styles'

import { CoffeeCartCard } from '../CoffeeCartCard'
import { ConfirmationSection } from '../ConfirmationSection'

export function SelectedCoffees() {
  const { cartItems } = useCart()

  return (
    <SelectedCoffeesContainer>
      <TitleText size="xs" color="subtitle">
        Cafés selecionados
      </TitleText>

      <DetailsContainer>
        {cartItems.map((item) => (
          <CoffeeCartCard key={item.id} coffee={item} />
        ))}

        <ConfirmationSection />
      </DetailsContainer>
    </SelectedCoffeesContainer>
  )
}
