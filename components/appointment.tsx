import { useEffect, useState } from "react";
import { email, useDataProvider } from "react-admin";
import { Button } from "./ui/button";
import { urlBase } from "@/utils/urlBase";
import { useToast } from "./ui/use-toast";
import { title } from "process";
import { Filter } from "lucide-react";
type Appointment = {
  name: string;
  firstName: string;
  email: string;
  message: string;
  contact: string;
  appointmentDate: string;
  idCar: string;
  id: string;
  status: string;
  carName:string;
};

export const AppointmentList = () => {
  const dataProvider = useDataProvider();
  const [appointments, setAppoinments] = useState<Appointment[]>([]);
  const [statusFilter, setStatusFilter] = useState<string>("");
  useEffect(() => {
    const filter = statusFilter.length>0 ? {status: statusFilter } : {};
    dataProvider
      .getList("appointments", {
        pagination: { page: 0, perPage: 10 },
        sort: { field: "appointmentDate", order: "ASC" },
        filter:{}
        
      })
      .then(({ data }) => setAppoinments(data));
      
  });
  const filteredAppointments = statusFilter.length>0
    ? appointments.filter((appointment) => appointment.status === statusFilter)
    : appointments;


  return (
    <div>
      <div className="text-center text-3xl uppercase font-medium py-4">
        appointments
      </div>
      <div className="flex flex-col gap-6">
         <select
          className="border p-2 rounded w-28"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="">All</option>
          <option value="pending">Pending</option>
          <option value="valide">Valide</option>
          <option value="refuse">Refuse</option>
        </select>
        {filteredAppointments.map((appointment, index) => (
          <Appointment key={index} appointment={appointment} />
        ))}
      </div>
    </div>
  );
};
const Appointment = ({ appointment }: { appointment: Appointment }) => {
  const dataProvider = useDataProvider();
    const { toast } = useToast();
    const [isLoading,setIsloading]=useState("")

  const handleStatus = (id: string, status: string) => {
      setIsloading(status)

      fetch(urlBase+"/appointment/update/"+id,{
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: status,
      }).then((response) => {
       setIsloading("")
       toast({
        title:"appointment validated",
        description:"you just sent mail to"+appointment.email,
       })
       appointment.status=status;

      }).catch((error) => {
       
      } );
  };
  return (
    <div>
      <div className="flex justify-between items-center bg-white p-5 rounded-xl shadow-xl">
        <div className="flex flex-col gap-4 ">
          <div className="flex flex-row gap-1">
            <div className="font-semibold capitalize">name :</div>
            <div>{appointment.name}</div>
          </div>
          <div className="flex flex-row gap-1">
            <div className="font-semibold capitalize">email : </div>
            <div>{appointment.email}</div>
          </div>
          <div className="flex flex-row gap-1">
            <div className="font-semibold capitalize">date : </div>
            <div>{appointment.appointmentDate}</div>
          </div>
          <div className="flex flex-row gap-1">
            <div className="font-semibold capitalize">car : </div>
            <div>{appointment.carName}</div>
          </div>
          <div className="flex flex-row gap-1">
            <div className="font-semibold capitalize">message :</div>
            <div>{appointment.message}</div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
         {
          appointment.status==="pending"?
          <div className="flex flex-col gap-3">
             <Button
            className="bg-[#013248] uppercase"
            onClick={() => handleStatus(appointment.id, "valide")}
          >
            {
              isLoading=="valide"?<div className="w-6 h-6 border-t-2 border-b-black rounded-full animate-spin"></div>:"valide"
            }
          </Button>
          <Button
            className="bg-[#ac1e1e] uppercase"
            onClick={() => handleStatus(appointment.id, "refuse")}
          >
             {
              isLoading=="refuse"?<div className="w-6 h-6 border-t-2 border-b-black rounded-full animate-spin"></div>:"valide"
            }
          </Button>
          </div>
          :<div className="capitalize">{appointment.status}</div>
         }
        </div>
      </div>
    </div>
  );
};
