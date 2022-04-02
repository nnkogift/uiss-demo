import {Button, Center, Container, Grid, Space, TextInput} from "@mantine/core";
import {useForm, FormProvider} from "react-hook-form";
import CustomTextInput from "../../shared/forms/CustomTextInput";
import CustomPasswordInput from "../../shared/forms/CustomPasswordInput";

export default function LoginForm() {
    const form = useForm();


    const onSubmit = (data: any) => {
        console.log(data);
    };

    return (
        <FormProvider {...form}>
            <Container fluid style={{height: "100vh"}}>
                <Center style={{height: "100%"}}>
                    <Grid grow gutter="md">
                        <Grid.Col span={12}>
                            <Center><h2>Login</h2></Center>
                            <CustomTextInput name={"username"} type="text" label="Username"
                                             rules={{required: "Username is required"}}/>
                            <CustomPasswordInput name={"password"} type="password" label="Password"
                                             rules={{required: "Password is required"}}/>
                            <Space h="md"/>
                            <Center>
                                <Button onClick={form.handleSubmit(onSubmit)}>
                                    Login
                                </Button>
                            </Center>
                        </Grid.Col>
                    </Grid>
                </Center>
            </Container>
        </FormProvider>
    )
}
