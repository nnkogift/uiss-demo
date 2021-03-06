import {Container, Divider, Table} from "@mantine/core";
import ActionMenu from "./components/ActionMenu";


export default function ElectionList() {


    const elections = [
        {
            name: "Election 1",
            date: "2020-01-01",
            status: "Active",
            votes: 20
        },
        {
            name: "Election 2",
            date: "2020-01-01",
            status: "Active",
            votes: 45
        },
    ]

    const onEdit = (id: string) => (event: any) => {
        event.stopPropagation();
        console.log(id)
    }

    const onDelete = (id: string) => (event: any) => {
        event.stopPropagation();
        console.log(id)
    }

    const onView = (id: string) => (event: any) => {
        event.stopPropagation();
        console.log("view", id)
    }


    return (
        <Container>
            <h1>Election List</h1>
            <Divider/>
            <Table striped highlightOnHover>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Votes</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {elections?.map((election, index) => {
                    return (
                        <tr key={index}>
                            <td onClick={onView(election.name)}>{election.name}</td>
                            <td onClick={onView(election.name)}>{election.date}</td>
                            <td onClick={onView(election.name)}>{election.status}</td>
                            <td onClick={onView(election.name)}>{election.votes}</td>
                            <td>
                                <ActionMenu onDelete={onDelete(election.name)} onEdit={onEdit(election.name)}/>
                            </td>
                        </tr>
                    )
                })}
                </tbody>
            </Table>
        </Container>
    )
}
