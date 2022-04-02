import {Controller} from "react-hook-form";
import {PasswordInput, TextInput} from "@mantine/core";


export default function CustomPasswordInput({
                                                name,
                                                rules,
                                                ...props
                                            }: { name: string, rules?: any, [key: string]: any }) {

    return (
        <Controller
            name={name}
            rules={rules}
            render={({field, fieldState}) => (
                <PasswordInput {...field} error={fieldState?.error?.message} {...props}/>
            )}
        />
    )
}
