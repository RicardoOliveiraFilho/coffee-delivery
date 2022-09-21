import { RegularText } from '../../../../components/Typography'
import { ConfirmationSectionContainer } from './styles'

import { Button } from '../../../../components/Button'

export function ConfirmationSection() {
  return (
    <ConfirmationSectionContainer>
      <div>
        <RegularText color="text" size="s">
          Total de itens
        </RegularText>
        <RegularText color="text">R$ 9,90</RegularText>
      </div>

      <div>
        <RegularText color="text" size="s">
          Entrega
        </RegularText>
        <RegularText color="text">R$ 3,50</RegularText>
      </div>

      <div>
        <RegularText weight="700" color="subtitle" size="l">
          Total
        </RegularText>
        <RegularText weight="700" color="subtitle" size="l">
          R$ 29,90
        </RegularText>
      </div>

      <Button text="Confirmar Pedido" />
    </ConfirmationSectionContainer>
  )
}
