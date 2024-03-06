export class AppointmentsResponse {
  id: number;
  customer_id: number;
  animal_id: number;
  employee_service_id: number;
  ong_id: number;
  schedule_id: number;
  customer?: {
    id: number,
    name: string,
  };
  animal: {
    id: number,
    name: string,
    breed: string,
    birthday: string,
    weight: number,
    customer_id: number,
  };
  employee_service_provided: {
    employee: {
      id: number,
      name: string,
    },
    service_provided: {
      id: number,
      name: string
    }
  };
  ong: any;
  schedule: {
    id: number,
    date: string,
    start: string,
    end: string,
    duration: string,
  };
}

export class OngResponse {
  id: number;
  name: string;
  address: string;
  whatsapp: string;
  email: string;
  user_id: string;
  created_at: string;
  updated_at: string;
  services_provided: [];
}
