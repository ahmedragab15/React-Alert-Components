import Alert from "./components/Alert/Alert";
import { Alerts } from "./data";
const App = () => {

const renderAlerts = Alerts.map((alert) => (
  <Alert
    type={alert.type}
    icon={alert.icon}
    title={alert.title}
    description={alert.description}
  />
));  
  return (
    <div className="app-wrapper">
      {renderAlerts}
      
    </div>
  );
};

export default App;
