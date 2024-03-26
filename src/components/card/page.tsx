import styled from 'styled-components'

interface IProps {
  text: string
  image: string
  color: string
  link: string
}

const StyledCard = styled.div<{ color: string }>`
  width: 400px;
  background-color: ${(props) => props.color};
  border-radius: 16px;
`
const StyledImageSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
`
const StyledImage = styled.img`
  height: 80%;
  opacity: 60%;
`
const StyledButton = styled.button`
  background: none;
  border: none;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  padding: 4px 8px;
  color: black;
  width: 100%;
  height: 60px;
  font-size: 28px;
  background-color: gainsboro;
  border-radius: 0 0 16px 16px;
`

const Card = (props: IProps) => {
  return (
    <StyledCard color={props.color}>
      <a href={`/${props.link}`}>
        <StyledImageSection>
          <StyledImage src={`/${props.image}`} />
        </StyledImageSection>
        <StyledButton>{props.text}</StyledButton>
      </a>
    </StyledCard>
  )
}

export default Card
