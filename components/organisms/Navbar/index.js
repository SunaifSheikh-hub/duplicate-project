import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logoImg from '../../../assets/images/logo.png'
import { Body, Content, Menu } from "./Navbar.styles"


function Navbar() {
  return (
    <Body>
      <Content>
        <Image
          src={logoImg}
          alt="Logo"
          width={150}
        />
        <Menu>
          <li>
            <Link href="#">Football Tips</Link>
          </li>
          <li>
            <Link href="#">Predictions</Link>
          </li>
          <li>
            <Link href="#">Analysis</Link>
          </li>
          <li>
            <Link href="#">Sport Tips</Link>
          </li>
        </Menu>
      </Content>
    </Body>
  )
}

export default Navbar