import React from 'react'
import { Button, Menu } from 'semantic-ui-react'

const SignOutMenu = (props) => {
  return (
    <div>
        <Menu.Item position="right">
            <Button basic inverted content="Register"/>
            <Button basic inverted content="Login" style={{marginLeft: '0.5em'}} onClick={props.signIn}/>
        </Menu.Item>
    </div>
  )
}

export default SignOutMenu
