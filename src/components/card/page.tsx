import styled from 'styled-components'

interface IProps {
  text: string
  image: string
  color: string
  link: string
  fullImage?: boolean
}

const StyledCard = styled.div<{ color: string }>`
  width: 400px;
  background-color: ${(props) => props.color};
  border-radius: 16px;
`
const StyledImageSection = styled.div<{ fullImage?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${(props) => (props.fullImage ? '0' : '32px')};
`
const StyledImage = styled.img<{ fullImage?: boolean }>`
  width: ${(props) => (props.fullImage ? 'auto' : '60%')};
  height: ${(props) => (props.fullImage ? 'auto' : '100%')};
  max-height: 400px;
  max-width: 100%;
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
  font-weight: 500;
  font-size: 28px;
  background-color: gainsboro;
  border-radius: 0 0 16px 16px;
`

const Card = (props: IProps) => {
  return (
    <StyledCard color={props.color}>
      <a href={`/${props.link}`}>
        <StyledImageSection fullImage={props.fullImage}>
          <StyledImage src={props.image} fullImage={props.fullImage} />
        </StyledImageSection>
        <StyledButton>{props.text}</StyledButton>
      </a>
    </StyledCard>
  )
}

export default Card
