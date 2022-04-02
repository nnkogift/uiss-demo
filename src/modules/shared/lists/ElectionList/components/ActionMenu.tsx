import {Menu} from "@mantine/core";
import {Edit, Trash} from "tabler-icons-react";

export default function ActionMenu({
                                       onEdit,
                                       onDelete
                                   }: { onEdit: (event: any) => void, onDelete: (event: any) => void }) {

    return (
        <Menu>
            <Menu.Item onClick={onEdit} icon={<Edit/>}>
                Edit
            </Menu.Item>
            <Menu.Item onClick={onDelete} color="red" icon={<Trash/>}>
                Delete
            </Menu.Item>
        </Menu>
    )
}
