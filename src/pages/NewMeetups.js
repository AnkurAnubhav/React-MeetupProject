import { useNavigate } from "react-router-dom";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupsPage() {
    const navigate = useNavigate();

    function addMeetupHandler(meetupData){
        fetch
        (
            'https://react-getting-started-ab82d-default-rtdb.firebaseio.com/meetups.json',
            {
            method: 'POST',
            body: JSON.stringify(meetupData),
            headers: {
                'Content-Type' : 'application/json'
             }
            }
        ).then( () => {
            navigate("/",{replace:true});
        })
        ;
    }
    return <section>
        <h1>Add New Places</h1>
        <NewMeetupForm onAddMeetup={addMeetupHandler}></NewMeetupForm>
    </section>
    }
    
    export default NewMeetupsPage;