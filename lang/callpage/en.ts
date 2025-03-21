export default {
  visitorCallPage: {
    tabs: {
      callMe: 'Call',
      info: 'Infos',
      message: 'Message',
      link: 'Link',
    },
    bottomTabs: {
      callMe: 'Call Now',
      message: 'Message',
      info: 'Information',
    },
    status: {
      available: 'Available',
      unavailable: 'Unavailable',
    },
    footer: {
      poweredBy: 'Powered by',
    },
    error: 'Error: ',
    loading: 'Loading...',
    noAvailability: 'Unavailable',
  },
  visitorInfos: {
    titles: {
      description: 'Description',
      openingHours: 'Opening Hours',
    },
    status: {
      open: 'Open',
      closed: 'Closed',
      notAvailable: 'Unavailable',
    },
    error: 'Error: ',
    loading: 'Loading...',
    noHours: 'Opening hours not available.',
  },
  visitorCallNow: {
    titles: {
      callNow: 'Call us now!',
      thankYou: 'Thank you for your call!',
    },
    placeholders: {
      fullName: 'Full name',
      email: 'Email',
      phone: 'Phone',
    },
    validation: {
      email: 'Please enter a valid email.',
      fullName: 'Full name must not exceed 100 characters.',
      phone: 'Please enter a valid phone number.',
    },
    buttons: {
      submitting: 'Initiating the call...',
      returnHome: 'Return to home',
    },
    messages: {
      warning:
        'The administrator of the data you enter here will be us, that is: Snap.tel. The data will be processed for direct marketing purposes of our products and services. The legal basis for data processing is a legitimate interest of the administrator.',
      thankYou:
        'We hope your experience was satisfactory. If you have any questions or comments, please feel free to contact us.',
    },
  },
  visitorMessage: {
    titles: {
      message: 'Leave us a message',
      thankYou: 'Thank you!',
    },
    placeholders: {
      message: 'Enter your message here...',
      fullName: 'Full Name',
      email: 'Email Address',
      phone: 'Phone Number',
      subject: 'Message subject',
    },
    validation: {
      message: {
        min: 'Your message must contain at least 10 characters.',
        max: 'Your message cannot exceed 600 characters.',
      },
      fullName: 'Please enter a valid full name.',
      email: 'Please enter a valid email address.',
      phone: 'Please enter a valid phone number.',
      'subject.min': 'Subject must contain at least 3 characters',
    },
    buttons: {
      submitting: 'Sending...',
      returnHome: 'Return to Home',
      sendLabel: 'Send us a message',
    },
    messages: {
      warning:
        'The administrator of the data you enter here will be us, that is: Snap.tel. The data will be processed for direct marketing purposes of our products and services. The legal basis for data processing is a legitimate interest of the administrator.',
      thankYou: 'Your message has been sent successfully.',
      serverError:
        'An error occurred while sending your message. Please try again later.',
    },
  },
};
