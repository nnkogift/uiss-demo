import {BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";
import LoginForm from "../auth/components/LoginForm";
import ElectionList from "../shared/lists/ElectionList";
import ElectionPage from "../shared/pages/ElectionPage";
import CreateElection from "../admin/components/CreateElection";


export default function MainRouter() {

    return (
        <Router>
            <Routes>
                <Route element={<LoginForm/>} path="/login"/>
                <Route element={<ElectionList/>} path="/elections"/>
                <Route element={<ElectionPage/>} path="/elections/:id"/>
                <Route element={<CreateElection/>} path="/elections/new"/>
                <Route element={<Navigate to="/login"/>} path="/"/>
            </Routes>
        </Router>
    )
}
