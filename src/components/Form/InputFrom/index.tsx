import { Input } from '../Input';
import { TextInput, TextInputProps } from 'react-native';
import { Control , Controller} from 'react-hook-form';


import {Container} from './styles';

interface Props extends TextInputProps{
    control: Control;
    name:string;

    
}

export function InputFrom( {control, name , ...rest} : Props){
    return(
        <Container>

            <Controller
                control={control}
                render={({field: {onChange, onBlur , value}})=>(

                    <Input {...rest} />
                )}
                name={name}
            /> 

        </Container>
    )
}