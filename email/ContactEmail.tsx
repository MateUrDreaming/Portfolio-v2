import React from 'react'

import { 
    Html, 
    Body, 
    Heading,
    Hr,
    Container,
    Preview, 
    Section,
    Text,
} from '@react-email/components'

import { Tailwind } from '@react-email/tailwind'

type ContactEmailProps = {
    message: string,
    username: string,
    email: string,
}

const ContactEmail = ({message, username, email} : ContactEmailProps) => {
  return (
    <Html lang="en">
      <Preview>Parin, {username} has sent a new message from your Portfolio!</Preview>
      <Tailwind> 
        <Body>
          <Container>
            <Section>
              <Heading>You recieved a message from {username} using your contact form</Heading>
              <Hr />
              <Text>{message}</Text>
              <Text>Reply to {username} at {email}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
      
    </Html>
  )
}

export default ContactEmail