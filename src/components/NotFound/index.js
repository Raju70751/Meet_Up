import {MainContainer, NotFoundImage, NotFoundHeading, NotFoundDescription} from './stylecomponent'

const NotFound = () => (
  <MainContainer>
    <NotFoundImage
      src="https://assets.ccbp.in/frontend/react-js/meetup/not-found-img.png"
      alt="not found"
    />
    <NotFoundHeading>Page Not Found</NotFoundHeading>
    <NotFoundDescription>
      We are sorry, the page you requested could not be found.
    </NotFoundDescription>
  </MainContainer>
)

export default NotFound;