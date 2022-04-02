import {Button, Card, Space} from "@mantine/core";


export default function VotingCard({candidate, onVote}: { candidate: any, onVote: () => void }) {


    return (
        <Card style={{border: "1px solid #000000"}}>
            <Card.Section style={{margin: 4}}>
                <h1>{candidate.name}</h1>
                <p><b>Motto: </b>{candidate.motto}</p>
                <p><b>Votes: </b>{candidate.votes}</p>
                <Space h="md"/>
                <Button onClick={onVote}>Vote</Button>
            </Card.Section>
        </Card>
    )
}
