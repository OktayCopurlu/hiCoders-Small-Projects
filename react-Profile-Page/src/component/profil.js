//tüm componentlerin importu
import Children from './components/children';
import Education from './components/education';
import Header from './components/header'
import WorkingHistory from './components/workingHistory';
import Friends from './components/friends';
import Hobies from './components/hobies';

//tüm componentlerin main içine alınması. ve bu mainin app.js e gönderilmesi.
function Main() {
    return ( 
        <main>
            <Header/>
            <Education/>
            <WorkingHistory/>
            <Children/>
            <Friends/>
            <Hobies/>
        </main>
    );
}
export default Main;