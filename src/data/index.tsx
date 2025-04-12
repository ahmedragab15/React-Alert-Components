import { AlertTriangle, Ban, BellRing, CheckCheck, Info } from "lucide-react";
import { AlertTypes } from "../types";

interface IAlert {
  type: AlertTypes;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const Alerts: IAlert[] = [
  {
    type: "alert-default",
    icon: <BellRing size={20} />,
    title: "Upgrade your plan",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur temporibus doloremque praesentium laboriosam iste totam officiis beatae sint non quas.",
  },
  {
    type: "alert-info",
    icon: <Info size={20} />,
    title: "Note",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur temporibus doloremque praesentium laboriosam iste totam officiis beatae sint non quas.",
  },
  {
    type: "alert-success",
    icon: <CheckCheck size={20} />,
    title: "Your order has been processed",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur temporibus doloremque praesentium laboriosam iste totam officiis beatae sint non quas.",
  },
  {
    type: "alert-error",
    icon: <Ban size={20} />,
    title: "Something went wrong",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur temporibus doloremque praesentium laboriosam iste totam officiis beatae sint non quas.",
  },
  {
    type: "alert-warning",
    icon: <AlertTriangle size={20} />,
    title: "Tips & Tricks",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur temporibus doloremque praesentium laboriosam iste totam officiis beatae sint non quas.",
  },
];
