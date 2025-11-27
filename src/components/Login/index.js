import { Component } from "react";
import Context from '../../context/contextProvider';
// Assuming these are correct import paths for your styled components
import { HomeContainer, FormTitle, ItemContainer, Button, Select, Label, InputDiv, FormContainer, Image, Input, Logo } from './styledcomponents';

const topicsList = [
  { id: 'ARTS_AND_CULTURE', displayText: 'Arts and Culture' },
  { id: 'CAREER_AND_BUSINESS', displayText: 'Career and Business' },
  { id: 'EDUCATION_AND_LEARNING', displayText: 'Education and Learning' },
  { id: 'FASHION_AND_BEAUTY', displayText: 'Fashion and Beauty' }, // Corrected spelling here
  { id: 'GAMES', displayText: 'Games' },
];

class Login extends Component {
  state = {
    userNameInput: '', // Changed name to avoid conflict/confusion
    topicInput: topicsList[0].id, // Changed name to avoid conflict/confusion
    errorMsg: false,
  };

  // Update local state when user types
  handleUserNameChange = (event) => {
    this.setState({ userNameInput: event.target.value });
  };

  // Update local state when user selects a topic
  handleTopicChange = (event) => {
    this.setState({ topicInput: event.target.value });
  };

  // The main form submission logic lives here
  onSubmitForm = (event) => {
    event.preventDefault();
    const { userNameInput, topicInput } = this.state;

    if (userNameInput.trim() === '' || topicInput === '') {
      this.setState({ errorMsg: true });
    } else {
      this.setState({ errorMsg: false });
      const { history } = this.props;
      // Navigate to home page AFTER successful registration
      history.replace('/'); 
      // Note: The context value should handle the state update within the render prop.
    }
  };

  render() {
    const { userNameInput, topicInput, errorMsg } = this.state;

    return (
      <Context.Consumer>
        {value => {
          const { userNameChange, topicChange, registerFunction } = value;

          // Helper function to handle registration in both local state and context
          const handleRegisterAndSubmit = () => {
            const { userNameInput, topicInput } = this.state;
            if (userNameInput.trim() !== '') {
              userNameChange(userNameInput)
              topicChange(topicInput)
              registerFunction()
            }
          }

          return (
            <HomeContainer>
              <Logo src='https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png' alt='website logo'/>
              <ItemContainer>
                  <Image src='https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png' alt='login'/>
                  {/* Bind the form submit to the class method */}
                  <FormContainer onSubmit={this.onSubmitForm}>
                      <FormTitle>Let Us Join</FormTitle>
                      <InputDiv>
                        <Label htmlFor="username">USERNAME</Label>
                        {/* Use local state for controlled input value and local handler for onChange */}
                        <Input 
                            type="text" 
                            id="username" 
                            placeholder="Enter your username" 
                            value={userNameInput} 
                            onChange={this.handleUserNameChange} 
                        />
                      </InputDiv>
                      <InputDiv>
                        {/* Corrected htmlFor to match the select ID */}
                        <Label htmlFor="topicSelect">TOPIC</Label> 
                        {/* Use local state for controlled select value and local handler for onChange */}
                        <Select 
                            id="topicSelect" 
                            value={topicInput}
                            onChange={this.handleTopicChange} 
                        >
                          {topicsList.map(each => (
                            <option key={each.id} value={each.displayText}>{each.displayText}</option>
                          ))}
                        </Select>
                      </InputDiv>
                      {/* Only display error message if true */}
                      {errorMsg && <p style={{color : 'red'}}>Please enter both username and topic</p>}
                     
                     {/* The button is type="submit" so it triggers FormContainer onSubmit. 
                         We attach the context update logic to the button's onClick or within the onSubmitForm. 
                         We'll put it here to integrate with context actions *before* navigation happens in onSubmitForm. */}
                     <Button type="submit" onClick={handleRegisterAndSubmit}>Register</Button>
                  </FormContainer>
              </ItemContainer>
            </HomeContainer>  
          )
        }}
      </Context.Consumer>
    );
  }
}
export default Login;
