export default function Register()
{
    return<>
    <div >
        <h1>Register form</h1>
        <center>
        <div style={{
            padding : "10px", border:"solid #9C4D6B 5px",width:"50%",margin:"25PX"
        }}>
            <form>
                <table >
                    <tr><td>family name: </td><td><input type="text" id="nom"></input></td></tr>
                    <tr><td>your name: </td><td><input type="text" id="prenom"></input></td></tr>
                    <tr><td>mail: </td><td><input type="text" id="mail"></input></td></tr>
                    <tr><td>password</td><td><input type="text" id="mdp"/></td></tr>                    
                    <tr><td colSpan={2} style={{textAlign:"center"}}><input type="submit" value="creer compte" /></td></tr>
                    <tr>
                        <td colSpan={2} style={{textAlign:"center"}}>
                                
                              
                        </td>
                    </tr>
                </table>
                
                
                
                
            </form>
            
        </div>
        </center>
    </div>
    </>
}