import styled from 'styled-components'

const mojis = ['😠', '😐', '🙂', '😄', '😊', '😇']
const colorRange = [
  '#072038',
  '#0D3A65',
  '#186EC0',
  '#37B24D',
  '#FFAD13',
  '#F76707',
]

const tempRangeIndex = (temp) => {
  if (temp <= 20) return 0
  else if (temp <= 32) return 1
  else if (temp < 40 && temp > 32) return 2
  else if (temp < 50 && temp >= 40) return 3
  else if (temp < 60 && temp >= 50) return 4
  else if (temp >= 60) return 5
  else return 2
}

const Thermometer = ({ temperature }) => {
  temperature = 90
  const tempIndex = tempRangeIndex(temperature)
  return (
    <StyledThermContainer>
      <StyledThermometer temperature={temperature} tempIndex={tempIndex}>
        <div>{temperature}℃</div>
        <div>
          <div />
        </div>
      </StyledThermometer>
      <StyledEmoContainer>{mojis[tempIndex]}</StyledEmoContainer>
    </StyledThermContainer>
  )
}

export default Thermometer

const StyledThermContainer = styled.div`
  display: flex;
  align-items: center;
`

const StyledThermometer = styled.div`
  width: 55px;
  div {
    &:first-child {
      color: ${({ tempIndex }) => colorRange[tempIndex]};
      font-weight: 700;
    }
    &:last-child {
      height: 8px;
      width: 100%;
      background-color: #eee;
      border-radius: 8px;
      div {
        height: 100%;
        background-color: ${({ tempIndex }) => colorRange[tempIndex]};
        width: ${({ temperature }) => `${temperature}%`};
        border-radius: 8px;
      }
    }
  }
`

const StyledEmoContainer = styled.div`
  padding: 0 8px;
  font-size: 160%;
`
