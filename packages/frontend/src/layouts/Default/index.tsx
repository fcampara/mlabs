import React from 'react'
import { Button } from '@mlabs/ui'
import UserSVG from 'src/assets/user.svg'
import LogoSVG from 'src/assets/logo.svg'
import BarSVG from 'src/assets/bar.svg'
import 'src/layouts/Default/styles.css'

const LayoutDefault: React.FC = ({ children }) => {
  return (
    <>
      <nav className="header header__container">
        <img className="header__logo" src={LogoSVG} />
        <Button
          className="header__menu"
          variant="contained"
        >
          <img src={BarSVG} />
        </Button>
        <div className="header__user">
          <img src={UserSVG} />
          <span className="header__user--name">
            Anselmo Carlos
          </span>
        </div>
      </nav>
      <main className="main">{children}</main>
    </>
  )
}

export default LayoutDefault
