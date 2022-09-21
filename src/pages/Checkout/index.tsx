import { CheckoutContainer } from './styles'

import { CheckoutForm } from './components/CheckoutForm'
import { SelectedCoffees } from './components/SelectedCoffees'

export function CheckoutPage() {
  return (
    <CheckoutContainer className="container">
      <CheckoutForm />
      <SelectedCoffees />
    </CheckoutContainer>
  )
}
