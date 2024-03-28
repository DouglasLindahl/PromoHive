'use client'
import { useState } from 'react'
import { styled } from 'styled-components'
import Card from '@/components/card/page'
import Input from '@/components/input/input'
import { StyledButton } from '../login/page'

const StyledAdminPage = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: orange;
  display: flex;
  flex-direction: row;
`

const StyledHeader = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
`

const StyledCreatePage = styled.div`
  height: 100%;
  background-color: blue;
  width: 50%;
`

const StyledDisplayPage = styled.div`
  width: 50%;
  height: 100%;
  background-color: purple;
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledCreateForm = styled.div`
  width: 100%;
  height: 90%;
  background-color: hotpink;
  padding: 32px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 16px;
`

const StyledColorInput = styled.input``

const StyledImageInput = styled.select``

const AdminPage = () => {
  const [page, setPage] = useState('products')
  const [displayColor, setDisplayColor] = useState('white')
  const [displayImage, setDisplayImage] = useState('cpu.png')
  const [displayText, setDisplayText] = useState('Text')

  const handleImageChange = (e: any) => {
    const selectedImage = e.target.value
    const imageUrl = `${selectedImage}.png`
    setDisplayImage(`${imageUrl}`)
  }

  const createCategory = () => {}

  return (
    <StyledAdminPage>
      <StyledDisplayPage>
        <Card
          link=""
          color={displayColor}
          image={displayImage}
          text={displayText}
        />
      </StyledDisplayPage>
      <StyledCreatePage>
        <StyledHeader>
          <button
            onClick={() => {
              setPage('products')
            }}
          >
            Products
          </button>
          <button
            onClick={() => {
              setPage('categories')
            }}
          >
            Categories
          </button>
        </StyledHeader>
        <StyledCreateForm>
          <Input
            label="Name"
            placeholder="Name"
            setValue={setDisplayText}
            value={displayText}
            type="text"
          />
          <StyledColorInput
            type="color"
            onChange={(e) => {
              setDisplayColor(e.target.value)
            }}
          />
          <StyledImageInput onChange={handleImageChange}>
            <option value="close">Close</option>
            <option value="cpu">CPU</option>
            <option value="gym">Gym</option>
            <option value="paw">Paw</option>
            <option value="puzzle">Puzzle</option>
            <option value="project-management">Project Management</option>
          </StyledImageInput>
          <StyledButton onClick={createCategory}>Create Category</StyledButton>
        </StyledCreateForm>
      </StyledCreatePage>
    </StyledAdminPage>
  )
}

export default AdminPage
