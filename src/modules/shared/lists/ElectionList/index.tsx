import {Container, Divider, Table} from "@mantine/core";
import ActionMenu from "./components/ActionMenu";
import {useNavigate} from "react-router-dom";


export default function ElectionList() {
    const navigate = useNavigate();

    const elections = [
        {
            id: "some-id",
            name: "Election 1",
            date: "2020-01-01",
            status: "Active",
            votes: 20
        },
        {
            id: "some-id-2",
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
        navigate(`/elections/${id}`)
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
                            <td onClick={onView(election.id)}>{election.name}</td>
                            <td onClick={onView(election.id)}>{election.date}</td>
                            <td onClick={onView(election.id)}>{election.status}</td>
                            <td onClick={onView(election.id)}>{election.votes}</td>
                            <td>
                                <ActionMenu onDelete={onDelete(election.id)} onEdit={onEdit(election.id)}/>
                            </td>
                        </tr>
                    )
                })}
                </tbody>
            </Table>
        </Container>
    )
}
