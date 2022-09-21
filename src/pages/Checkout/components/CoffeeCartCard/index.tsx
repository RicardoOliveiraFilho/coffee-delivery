import { Trash } from 'phosphor-react'

import {
  ActionsContainer,
  CoffeeCartCardContainer,
  RemoveButton,
} from './styles'

import { QuantityInput } from '../../../../components/QuantityInput'
import { RegularText } from '../../../../components/Typography'

export function CoffeeCartCard() {
  return (
    <CoffeeCartCardContainer>
      <div>
        <img
          src="https://s3-alpha-sig.figma.com/img/55b1/f9ee/64600f98b2bae456b96fdc624c4b4f47?Expires=1664755200&Signature=P2t4d95RAVdgPw-C8zR3LiGhWgxpibC~jJZFNj0dxfp9bc1lUcbAC~7zcDMDPhWcYjS0uJnWlFPVoK~PFxx4kFfaHlXDdZ044uollMXmm4aTlRUsepMU6z6MxBjFSld7tQMsxSkf8ICu8I98Ls9~haS7ri1D2uWkOEvAdXhnlGe~KwrXMtI2SBdYf92CARHMSYcshhSSr0OOJJv3tKOl5pUokGHU~KcF8Urjtl1RgdIozvxHt-D8lM57ju2CfPnXEVfja3d4ZY9V-CfzhZlkYTaOy086E0gQEDNuVYxp97TvRRRQscrhfD1WOXxn1EP67BGTkNtIN6xyw3Mc0Bhryg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          alt=""
        />

        <div>
          <RegularText color="subtitle">Expresso Tradicional</RegularText>
          <ActionsContainer>
            <QuantityInput size="small" />
            <RemoveButton>
              <Trash size={16} />
              REMOVER
            </RemoveButton>
          </ActionsContainer>
        </div>
      </div>

      <p>R$ 9,90</p>
    </CoffeeCartCardContainer>
  )
}
