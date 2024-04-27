import {About} from "../components/about/About";
import {Title} from "../components/title/Title";

function MainPage(){
    return (
        <>
            <About info={{title: "Some Title", body:"Some body"}}/>
            <Title text="Hello world"/>
        </>
    )
}

export default MainPage;