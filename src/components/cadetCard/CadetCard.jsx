import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Thermometer from './Thermometer'
import { StyledButton } from '../buttons/StyledButton'

const CadetCard = ({ member, url }) => {
  console.log(member)
  const { userId, login, feedback } = member
  return (
    <CardContainer>
      <Avatar url={`https://cdn.intra.42.fr/users/${login}.jpg`} />
      <CardContent>
        <h3>{login}</h3>
        <div>level 4</div>
        <Thermometer />
      </CardContent>
      <div>
        <Link to={url}>
          <StyledButton disabled={feedback}>
            {feedback ? 'Complete' : 'Give feedback'}
          </StyledButton>
        </Link>
      </div>
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
