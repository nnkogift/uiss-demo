import {Button, Container, Divider, Grid, Space, Title} from "@mantine/core";
import CustomTextInput from "../../../shared/forms/CustomTextInput";
import {useForm, FormProvider} from "react-hook-form";
import CandidateInput from "./components/CandidateInput";


export default function CreateElection() {
    const form = useForm();

    const onCreate = (data: any) => {
        console.table(data);
        //TODO: Implement create election backend logic
    }


    return (
        <FormProvider {...form}>
            <Container>
                <h2>Create new Election</h2>
                <Grid grow gutter="md">
                    <Grid.Col md={6} sm={12}>
                        <CustomTextInput name="name" label="Election name"/>
                    </Grid.Col>
                    <Grid.Col md={6} sm={12}>
                        <CustomTextInput name="position" label="Position"/>
                    </Grid.Col>
                    <Grid.Col sm={12}>
                        <h4 style={{margin: 2}}>Candidates</h4>
                    </Grid.Col>
                    <Grid.Col sm={12}>
                        <Divider/>
                    </Grid.Col>
                    <Grid.Col>
                        <CandidateInput candidateNo={1}/>
                        <Space h="lg"/>
                        <CandidateInput candidateNo={2}/>
                    </Grid.Col>
                    <Grid.Col>
                        <Button onClick={form.handleSubmit(onCreate)}>
                            Create
                        </Button>
                    </Grid.Col>
                </Grid>
            </Container>
        </FormProvider>
    )
}
