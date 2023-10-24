import React from 'react'
import { styled } from 'styled-components'


const Navbar = () => {
      return (
            <Container>
                  <Wrapper>
                        <Left>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio blanditiis officiis accusantium, minima quos accusamus sint dolor, est facilis inventore reprehenderit repudiandae praesentium debitis repellat placeat quibusdam nobis hic fugiat! </Left>
                        <Center>Center</Center>
                        <Right>Right</Right>
                  </Wrapper>
            </Container>
      )
}

export default Navbar

const Container = styled.div`
 height: 60px;
`
const Wrapper = styled.div`
 padding: 10px 20px;
 display: flex;
 justify-content: space-between;
`
const Left = styled.div`
 flex:1;
`
const Center = styled.div`
flex:1;

`
const Right = styled.div`
flex:1;

`