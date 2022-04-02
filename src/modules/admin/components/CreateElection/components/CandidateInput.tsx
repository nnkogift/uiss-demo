import {Grid} from "@mantine/core"
import CustomTextInput from "../../../../shared/forms/CustomTextInput";

export default function CandidateInput({candidateNo}: { candidateNo: number }) {


    return (
        <Grid>
            <Grid.Col sm={12}>
                {`Candidate ${candidateNo}`}
            </Grid.Col>
            <Grid.Col sm={12} md={6}>
                <CustomTextInput name={`candidates.${candidateNo - 1}.name`} label="Name"/>
            </Grid.Col>
            <Grid.Col sm={12} md={6}>
                <CustomTextInput name={`candidates.${candidateNo - 1}.motto`} label="Motto"/>
            </Grid.Col>
        </Grid>
    )
}
