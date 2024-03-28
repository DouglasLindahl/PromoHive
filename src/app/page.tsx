'use client'
import Card from '@/components/card/page'
import styles from './page.module.css'
import styled from 'styled-components'

const CardDisplay = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default function Home() {
  return (
    <main className={styles.main}>
      <CardDisplay>
        <Card
          color="hotpink"
          image="category.png"
          link="./categories"
          text="Categories"
        />
      </CardDisplay>
    </main>
  )
}
