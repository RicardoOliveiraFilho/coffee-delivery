import { HomeContainer } from './styles'

import { Intro } from './components/Intro'
import { ListOfCafes } from './components/ListOfCafes'

export function HomePage() {
  return (
    <HomeContainer>
      <Intro />
      <ListOfCafes />
    </HomeContainer>
  )
}
