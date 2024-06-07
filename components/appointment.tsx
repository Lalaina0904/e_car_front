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
    idAppointment: string;
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

            <div className="flex justify-between items-center bg-white p-5 rounded-xl shadow-xl">
                <div className="flex flex-col gap-4 ">
                    <div className="flex flex-row gap-1">
                        <div className="font-semibold capitalize">name :</div>
                        <div>name</div>
                    </div>
                    <div className="flex flex-row gap-1">
                        <div className="font-semibold capitalize">email : </div>
                        <div>email@gmail.com</div>
                    </div>
                    <div className="flex flex-row gap-1">
                        <div className="font-semibold capitalize">date : </div>
                        <div>2023-0393773</div>
                    </div>
                    <div className="flex flex-row gap-1">
                        <div className="font-semibold capitalize">
                            message :
                        </div>
                        <div>message</div>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <Button className="bg-[#013248] uppercase">validé</Button>
                    <Button className="bg-[#ac1e1e] uppercase">refusé</Button>
                </div>
            </div>
        </div>
    );
};
