import { Oval } from 'react-loader-spinner';

function Loading() {
    return (
           <Oval 
            color="gray"
            secondaryColor="rgb(161 61 61)"
            height={100}
            width={100}
           />
      );
}

export default Loading;