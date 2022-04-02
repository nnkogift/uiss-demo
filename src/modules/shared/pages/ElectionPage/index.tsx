import {Container, Divider, Grid} from "@mantine/core";
import VotingCard from "./components/VotingCard";

export default function ElectionPage() {

    const election = {
        id: "1",
        name: "Election 1",
        candidates: [
            {
                name: "Candidate 1",
                id: "1",
                votes: 0,
                motto: "Motto 1"
            },
            {
                name: "Candidate 2",
                id: "2",
                votes: 0,
                motto: "Motto 2"
            },
        ]
    }

    const onVote = (id: string) => () => {
        //TODO: Implement on vote
    }

    return (
        <Container>
            <h1>Election Page</h1>
            <Divider/>
            <div style={{display: "flex" ,gap: 8, alignItems: "center"}}>
                <h2>Election:</h2><p style={{fontSize: 18}}>{election.name}</p>
            </div>
            <Grid justify='center'>
                {election.candidates.map(candidate => (
                    <Grid.Col md={6} sm={12} key={candidate.id}>
                        <VotingCard onVote={onVote(candidate.id)} candidate={candidate}/>
                    </Grid.Col>
                ))}
            </Grid>
        </Container>
    )
}
