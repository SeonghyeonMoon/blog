import Script from 'next/script';

const JenniferFront = () => {
  return (
    <>
      <Script id='jennifer-frontend'>
        {`
          (function(j,ennifer) {
            j['dmndata']=[];j['jenniferFront']=function(args){window.dmndata.push(args)};
            j['dmnaid']=ennifer;j['dmnatime']=new Date();j['dmnanocookie']=false;j['dmnajennifer']='JENNIFER_FRONT@INTG';
          }(window, 'af6beadb'));
        `}
      </Script>
      <Script async src='https://d-collect.jennifersoft.com/af6beadb/demian.js' />
    </>
  );
};

export default JenniferFront;
