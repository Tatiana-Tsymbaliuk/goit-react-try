import { PageTitle } from 'components/PageTitle/PageTitle';
import { EventBoard } from 'components/EventBoard/EventBoard';
import upcomingEvents from '../upcoming-events.json';


const App = () => {
  return (
    <div>
      
      <PageTitle text="24th Core World Coalition Conference" />
      <EventBoard events={upcomingEvents} />
      
    </div>
  );
}
export default App;