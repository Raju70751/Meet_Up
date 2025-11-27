import { Component } from "react";  
import {Link, withRouter} from 'react-router-dom'
import Context from '../../context/contextProvider'
import {HomeContainer,Logo ,Button ,Description ,HomeImage , Title} from './styledcomponents'


class Home extends Component {
  backToRegister = () => {
    const { history } = this.props
    history.replace('/login')
  }

  render() {
    return (
      <Context.Consumer>
        {value => {
          const { userName, isRegistered, registerFunction, topic } = value

          const onLogoClick = () => {
            registerFunction()
            this.props.history.push('/')
          }

          return isRegistered ? (
            <HomeContainer>
              <Logo
                src='https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png'
                alt='website logo'
                onClick={onLogoClick}
              />
              <Title style={{ color: '#a6b8fbff', fontSize: '2.5em' }}>
                Hello {userName}
              </Title>
              <Title style={{ margin: '0px' }}>Welcome to {topic}</Title>
              <HomeImage
                src='https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png'
                alt='meetup'
              />
            </HomeContainer>
          ) : (
            <HomeContainer>
              <Logo
                src='https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png'
                alt='website logo'
                onClick={onLogoClick}
              />
              <Title>Welcome to Meet Up</Title>
              <Description>Please register for a topic</Description>
              <Link to='/login'>
                <Button type='button'>Register</Button>
              </Link>
              <HomeImage
                src='https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png'
                alt='meetup'
              />
            </HomeContainer>
          )
        }}
      </Context.Consumer>
    )
  }
}

export default withRouter(Home)
