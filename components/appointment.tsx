import { useEffect, useState } from "react"
import { useDataProvider } from "react-admin"
import { Button } from "./ui/button"
type Appointment={
    name: string,
    firstName: string,
    email: string,
    message: string,
    contact:string,
    appointmentDate: string,
    idCar: string,
    idAppointment: string,
    status: string
}
export const AppointmentList=()=>{
    const dataProvider=useDataProvider()
    const [appointments,setAppoinments]=useState<Appointment[]>([])
    useEffect(()=>{
        dataProvider.getList("appointments",{
            pagination: { page: 0, perPage: 10 },
            sort: { field: 'appointmentDate', order: 'ASC' },
            filter: {},
        }).then(({data})=>setAppoinments(data))
    },[])


return (
    <div >
        <div className="text-center text-3xl">appointments</div>
        <div className="flex justify-between items-center bg-white p-5 rounded-xl">
            <div className="flex flex-col gap-2 ">
                <div className="flex flex-row gap-1">
                    <div>name:</div>
                    <div>name</div>
                </div>
                <div  className="flex flex-row gap-1">
                     <div>email</div>
                     <div>email@gmail.com</div>
                </div>
                <div  className="flex flex-row gap-1">
                    <div>date</div>
                    <div>2023-0393773</div>
                </div>
                <div  className="flex flex-row gap-1">
                    <div>message:</div>
                    <div>message</div>
                </div>
            </div>
            <div className="flex flex-col gap-1">
                <Button>validé</Button>
                <Button>refusé</Button>
            </div>
        </div>
    </div>
)
}