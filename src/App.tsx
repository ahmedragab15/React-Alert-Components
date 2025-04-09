import Alert from "./components/Alert/Alert";
import { BellRing, CheckCheck, Ban, Info, AlertTriangle } from "lucide-react";
const App = () => {
  return (
    <div className="app-wrapper">
      <Alert type={"alert-default"} icon={<BellRing size={20} />} title={"Upgrade your plan"}>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. <a href="#">Learn More</a> Aspernatur temporibus doloremque praesentium laboriosam iste totam officiis beatae sint non quas.
        </p>
      </Alert>

      <Alert
        type={"alert-info"}
        icon={<Info size={20} />}
        title={"Note"}
        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur temporibus doloremque praesentium
        laboriosam iste totam officiis beatae sint non quas."
      />

      <Alert
        type={"alert-success"}
        icon={<CheckCheck size={20} />}
        title={"Your order has been processed"}
        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur temporibus doloremque praesentium
        laboriosam iste totam officiis beatae sint non quas."
      />
      <Alert
        type={"alert-error"}
        icon={<Ban size={20} />}
        title={"Something went wrong"}
        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur temporibus doloremque praesentium
        laboriosam iste totam officiis beatae sint non quas."
      />

      <Alert
        type={"alert-warning"}
        icon={<AlertTriangle size={20} />}
        title={"Tips & Tricks"}
        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur temporibus doloremque praesentium
        laboriosam iste totam officiis beatae sint non quas."
      />
    </div>
  );
};

export default App;
