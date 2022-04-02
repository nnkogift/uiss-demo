import {Controller} from "react-hook-form";
import {TextInput} from "@mantine/core";


export default function CustomTextInput({name, rules, ...props}: { name: string, rules?: any, [key: string]: any }) {

    return (
        <Controller
            name={name}
            rules={rules}
            render={({field, fieldState}) => (
                <TextInput {...field} error={fieldState?.error?.message} {...props}/>
            )}
        />
    )
}
