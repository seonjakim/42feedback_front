import styled from 'styled-components'
import Thermometer from './Thermometer'

const CadetCard = ({ member }) => {
  const { login, img } = member
  return (
    <CardContainer>
      <Avatar url={img} />
      <CardContent>
        <h3>{login}</h3>
        <div>level 4</div>
        <Thermometer />
      </CardContent>
      <div>피드백 완성 표시</div>
    </CardContainer>
  )
}

export default CadetCard

const CardContainer = styled.div`
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 8px;
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-gap: 1.5em;
  align-items: center;
  padding: 1em 1.5em;
  background-color: #fff;
`
const Avatar = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: ${({ url }) => `url(${url})`};
`
const CardContent = styled.div`
  line-height: 1.4em;
  div {
    color: ${({ theme }) => theme.font.grey};
  }
`
