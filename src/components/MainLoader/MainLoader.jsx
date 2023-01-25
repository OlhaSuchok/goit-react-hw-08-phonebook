import { Blocks } from 'react-loader-spinner';

export default function Loader() {
  return (
    <Blocks
      visible={true}
      height="80"
      width="80"
      ariaLabel="blocks-loading"
      wrapperClass="blocks-wrapper"
      wrapperStyle={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '280px',
        marginLeft: 'auto',
        marginRight: 'auto',
        alingItems: 'center',
      }}
    />
  );
}
