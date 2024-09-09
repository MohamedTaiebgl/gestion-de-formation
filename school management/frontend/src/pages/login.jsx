import StudentLogin from "../components/student/studentLogin";

export default function Login()
{
    return<>
    <center>
        <div style={{
                padding : "10px", border:"solid #9C4D6B 5px",width:"50%",margin:"25PX"
            }}>
            <h1>Login form</h1>
            <StudentLogin/>
        </div>
    </center>
    </>
}