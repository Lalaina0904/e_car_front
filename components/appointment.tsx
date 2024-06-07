import { useEffect, useState } from "react";
import { useDataProvider } from "react-admin";
import { Button } from "./ui/button";
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
};

export const AppointmentList = () => {
  const dataProvider = useDataProvider();
  const [appointments, setAppoinments] = useState<Appointment[]>([]);
  useEffect(() => {
    dataProvider
      .getList("appointments", {
        pagination: { page: 0, perPage: 10 },
        sort: { field: "appointmentDate", order: "ASC" },
        filter: {},
      })
      .then(({ data }) => setAppoinments(data));
  }, []);

  return (
    <div>
      <div className="text-center text-3xl uppercase font-medium py-4">
        appointments
      </div>
      <div>
        {appointments.map((appointment, index) => (
          <Appointment key={index} appointment={appointment} />
        ))}
      </div>
    </div>
  );
};
const Appointment = ({ appointment }: { appointment: Appointment }) => {
  const dataProvider = useDataProvider();
  const handleStatus = (id: string, status: string) => {
    dataProvider
      .update("appointment/update/", {
        id: { id },
        data: { status },
        previousData: {},
      })
      .then(() => {
        console.log("status updated");
      });
  };
  return (
    <div>
      <div className="flex justify-between items-center bg-white p-5 rounded-xl shadow-xl">
        <div className="flex flex-col gap-4 ">
          <div className="flex flex-row gap-1">
            <div className="font-semibold capitalize">name :</div>
            <div>{appointment.firstName}</div>
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
            <div className="font-semibold capitalize">message :</div>
            <div>{appointment.message}</div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Button
            className="bg-[#013248] uppercase"
            onClick={() => handleStatus(appointment.id, "update")}
          >
            validé
          </Button>
          <Button
            className="bg-[#ac1e1e] uppercase"
            onClick={() => handleStatus(appointment.id, "refuse")}
          >
            refusé
          </Button>
        </div>
      </div>
    </div>
  );
};
