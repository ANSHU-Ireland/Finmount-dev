// Core integration functions for Finmount
// This file contains functions for external integrations

export const SendEmail = async ({ to, subject, body, from_name = 'Finmount Website' }) => {
  try {
    // In a real implementation, this would integrate with an email service
    // For now, we'll simulate the email sending
    console.log('Sending email:', { to, subject, body, from_name });
    
    // Simulate API call
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to,
        subject,
        body,
        from_name,
      }),
    });

    if (!response.ok) {
      throw new Error(`Email sending failed: ${response.statusText}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};

// Additional integration functions can be added here
export const SubscribeToNewsletter = async (email) => {
  try {
    const response = await fetch('/api/newsletter-subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    if (!response.ok) {
      throw new Error(`Newsletter subscription failed: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error subscribing to newsletter:', error);
    throw error;
  }
};

export const GetQuote = async (serviceType, contactInfo) => {
  try {
    const response = await fetch('/api/get-quote', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        serviceType,
        contactInfo,
        timestamp: new Date().toISOString(),
      }),
    });

    if (!response.ok) {
      throw new Error(`Quote request failed: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error requesting quote:', error);
    throw error;
  }
};
