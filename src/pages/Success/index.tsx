import { useTheme } from 'styled-components'
import { MapPin, Clock, CurrencyDollar } from 'phosphor-react'

import { RegularText, TitleText } from '../../components/Typography'
import { SuccessContainer, SuccessDetailsContainer } from './styles'

import successImg from '../../assets/success-img.png'

import { InfoWithIcon } from '../../components/InfoWithIcon'

export function SuccessPage() {
  const { colors } = useTheme()

  return (
    <SuccessContainer className="container">
      <div>
        <TitleText size="l">Uhu! Pedido confirmado</TitleText>
        <RegularText size="l" color="subtitle">
          Agora é só aguardar que logo o café chegará até você
        </RegularText>
      </div>

      <section>
        <SuccessDetailsContainer>
          <InfoWithIcon
            icon={<MapPin weight="fill" />}
            iconColor={colors['brand-purple']}
            text={
              <RegularText color="text">
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
                <br />
                Farrapos - Porto Alegre, RS
              </RegularText>
            }
          />

          <InfoWithIcon
            icon={<Clock weight="fill" />}
            iconColor={colors['brand-yellow']}
            text={
              <RegularText color="text">
                Previsão de entrega
                <br />
                <strong>20 min - 30 min</strong>
              </RegularText>
            }
          />

          <InfoWithIcon
            icon={<CurrencyDollar weight="fill" />}
            iconColor={colors['brand-yellow-dark']}
            text={
              <RegularText color="text">
                Pagamento na entrega
                <br />
                <strong>Cartão de Crédito</strong>
              </RegularText>
            }
          />
        </SuccessDetailsContainer>
        <img src={successImg} alt="" />
      </section>
    </SuccessContainer>
  )
}
