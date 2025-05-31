import plugin from "tailwindcss/plugin";

export const responsivePlugin = plugin(({ addComponents }) => {
  addComponents({
    '@media (max-width: 767px)': {
      '.profile-container': {
        maxWidth: '240px',
        margin: '0 auto',
        height: 'auto',
      },
      '.profile-image': {
        maxHeight: '280px',
        objectFit: 'contain',
      },
      '.animate-fade-in-slow': {
        animationDuration: '0.6s !important',
      },
      '.animate-fade-in-up': {
        animationDuration: '0.5s !important',
      },
      '.touchable-area': {
        minHeight: '44px',
        minWidth: '44px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      '.menu-button': {
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.18)',
      },
      'body.overflow-hidden': {
        overflow: 'hidden',
        position: 'fixed',
        width: '100%',
        height: '100%',
      },      'body.menu-open': {
        backgroundColor: '#FFFFFF',
      },
      '.bg-gray-50': {
        backgroundColor: '#FAFAFA',
      },
      '.scroll-indicator': {
        bottom: '1.5rem',
        right: '1.5rem',
        transform: 'translateY(0)',
      },
      '.mobile-menu-link': {
        fontSize: '1.875rem',
        paddingTop: '0.5rem',
        paddingBottom: '0.5rem',
      },
      '.fixed.bottom-8': {
        bottom: '1.25rem',
      },
      '.rounded-full': {
        borderRadius: '50%', /* Garantir círculos perfeitos */
      },
      '.profile-x': {
        maxHeight: '65vh',
        maxWidth: '100%',
        margin: '0 auto',
      },
    },

    '@media (max-width: 375px)': {
      '.font-body': {
        fontSize: '0.875rem',
      },
    }
  });
});
