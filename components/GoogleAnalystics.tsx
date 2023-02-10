import Script from 'next/script';

const GoogleAnalystics = () => {
  return (
    <>
      <Script async src='https://www.googletagmanager.com/gtag/js?id=G-HHFDGT97X1' />
      <Script id='google-analystics'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
    
          gtag('config', 'G-HHFDGT97X1');
        `}
      </Script>
    </>
  );
};

export default GoogleAnalystics;
