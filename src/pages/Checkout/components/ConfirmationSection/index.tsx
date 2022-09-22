import { useCart } from '../../../../hooks/useCart'
import { formatMoney } from '../../../../utils/formatMoney'

import { RegularText } from '../../../../components/Typography'
import { ConfirmationSectionContainer } from './styles'

import { Button } from '../../../../components/Button'

const DELIVERY_PRICE = 3.5

export function ConfirmationSection() {
  const { cartItemsTotal, cartQuantity } = useCart()

  const cartTotal = DELIVERY_PRICE + cartItemsTotal

  const formattedItemTotal = formatMoney(cartItemsTotal)
  const formattedCartTotal = formatMoney(cartTotal)
  const formattedDeliveryPrice = formatMoney(DELIVERY_PRICE)

  return (
    <ConfirmationSectionContainer>
      <div>
        <RegularText color="text" size="s">
          Total de itens
        </RegularText>
        <RegularText color="text">R$ {formattedItemTotal}</RegularText>
      </div>

      <div>
        <RegularText color="text" size="s">
          Entrega
        </RegularText>
        <RegularText color="text">R$ {formattedDeliveryPrice}</RegularText>
      </div>

      <div>
        <RegularText weight="700" color="subtitle" size="l">
          Total
        </RegularText>
        <RegularText weight="700" color="subtitle" size="l">
          R$ {formattedCartTotal}
        </RegularText>
      </div>

      <Button text="Confirmar Pedido" disabled={cartQuantity <= 0} />
    </ConfirmationSectionContainer>
  )
}
