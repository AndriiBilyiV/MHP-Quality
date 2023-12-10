import Image from './MHP_logo.png';

export const LogoMHPMain = () => {
  return (
    <img
      src={Image}
      alt="Logo MHP"
      width={120}
      style={{ display: 'block', margin: 'auto' }}
    />
  );
};

export const LogoMHPHeader = () => {
  return <img src={Image} alt="Logo MHP" width={24} style={{}} />;
};
