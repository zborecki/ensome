enum FontWeight {
  'Regular' = 400,
  'Medium' = 500,
  'Semibold' = 600,
  'Bold' = 700,
  'ExtraBold' = 800
}

export default {
  headline: {
    h1: {
      fontWeight: FontWeight.ExtraBold,
      fontSize: '46px',
      lineHeight: '60px',
      letterSpacing: '-0.015em'
    },
    h2: {
      fontWeight: FontWeight.ExtraBold,
      fontSize: '38px',
      lineHeight: '56px',
      letterSpacing: '-0.015em'
    },
    h3: {
      fontWeight: FontWeight.ExtraBold,
      fontSize: '30px',
      lineHeight: '40px',
      letterSpacing: '-0.015em'
    },
    h4: {
      fontWeight: FontWeight.Bold,
      fontSize: '22px',
      lineHeight: '33px',
      letterSpacing: '-0.015em'
    },
    h5: {
      fontWeight: FontWeight.Bold,
      fontSize: '20px',
      lineHeight: '30px',
      letterSpacing: '-0.015em'
    },
    h6: {
      fontWeight: FontWeight.Bold,
      fontSize: '16px',
      lineHeight: '24px',
      letterSpacing: '-0.015em'
    },
    h7: {
      fontWeight: {
        semibold: FontWeight.Semibold,
        medium: FontWeight.Medium
      },
      fontSize: '14px',
      lineHeight: '24px',
      letterSpacing: '-0.01em'
    }
  },
  paragraph: {
    p1: {
      fontWeight: FontWeight.Regular,
      fontSize: '20px',
      lineHeight: '33px',
      letterSpacing: '-0.015em'
    },
    p2: {
      fontWeight: {
        regular: FontWeight.Regular,
        bold: FontWeight.Bold
      },
      fontSize: '16px',
      lineHeight: '28px',
      letterSpacing: '-0.015em'
    },
    p3: {
      fontWeight: {
        regular: FontWeight.Regular,
        semibold: FontWeight.Semibold
      },
      fontSize: '14px',
      lineHeight: '24px',
      letterSpacing: '-0.015em'
    }
  }
};
