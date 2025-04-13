import * as React from 'react';
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text
} from '@react-email/components';

interface ContactEmailProps {
  name: string;
  email: string;
  company?: string;
  message: string;
}

export const ContactEmail = ({
  name,
  email,
  company,
  message,
}: ContactEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>Neue Kontaktanfrage von {name}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>Neue Kontaktanfrage</Heading>
          <Section style={section}>
            <Text style={text}><strong>Name:</strong> {name}</Text>
            <Text style={text}><strong>E-Mail:</strong> {email}</Text>
            {company && (
              <Text style={text}><strong>Unternehmen:</strong> {company}</Text>
            )}
            <Hr style={hr} />
            <Text style={text}><strong>Nachricht:</strong></Text>
            <Text style={text}>{message}</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

const main = {
  backgroundColor: '#ffffff',
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: '0 auto',
  padding: '20px 0 48px',
  maxWidth: '580px',
};

const section = {
  padding: '24px',
  backgroundColor: '#f6f9fc',
  borderRadius: '8px',
};

const h1 = {
  color: '#333',
  fontSize: '24px',
  fontWeight: '600',
  lineHeight: '1.4',
  margin: '16px 0',
};

const text = {
  color: '#333',
  fontSize: '14px',
  lineHeight: '24px',
  margin: '8px 0',
};

const hr = {
  borderColor: '#e6ebf1',
  margin: '20px 0',
};

export default ContactEmail; 