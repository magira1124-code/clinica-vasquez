const clinicData = {
  "info": {
    "name": "Clínica Nirven",
    "ambulatory_hours": "08:00 AM - 08:00 PM",
    "emergency_hours": "24/7"
  },
  "facilities": [
    "Sala de Operaciones",
    "Sala de Endoscopias",
    "Laboratorio",
    "Emergencia",
    "Tomografía",
    "Rayos X (Rx)"
  ],
  "independent_building": [
    "Fisioterapia",
    "Salud Ocupacional"
  ],
  "specialties": [
    { "id": "med_gen", "name": "Medicina General", "availability": "Todos los días", "icon": "⚕️" },
    { "id": "pediatria", "name": "Pediatría", "availability": "Todos los días", "icon": "👶" },
    { "id": "ginecologia", "name": "Ginecología", "availability": "Todos los días", "icon": "👩‍⚕️" },
    { "id": "emergencias", "name": "Emergencias 24/7", "availability": "24/7", "icon": "🚑" },
    { "id": "traumatologia", "name": "Traumatología", "availability": "Martes, Jueves (Llamado a emergencias)", "icon": "🦴" },
    { "id": "cardiologia", "name": "Cardiología", "availability": "Lunes, Miércoles", "icon": "❤️" },
    { "id": "dermatologia", "name": "Dermatología", "availability": "Viernes", "icon": "🔬" },
    { "id": "neurologia", "name": "Neurología", "availability": "Miércoles", "icon": "🧠" },
    { "id": "gastro", "name": "Gastroenterología", "availability": "Lunes, Jueves", "icon": "🩺" },
    { "id": "oftalmo", "name": "Oftalmología", "availability": "Martes, Viernes", "icon": "👁️" },
    { "id": "otorrino", "name": "Otorrinolaringología", "availability": "Miércoles", "icon": "👂" },
    { "id": "urologia", "name": "Urología", "availability": "Jueves", "icon": "💧" },
    { "id": "endocrino", "name": "Endocrinología", "availability": "Viernes", "icon": "🧬" },
    { "id": "reuma", "name": "Reumatología", "availability": "Lunes", "icon": "🦵" },
    { "id": "neumo", "name": "Neumología", "availability": "Martes", "icon": "🫁" },
    { "id": "odonto", "name": "Odontología", "availability": "Miércoles, Viernes", "icon": "🦷" },
    { "id": "psiquiatria", "name": "Psiquiatría", "availability": "Jueves", "icon": "🛋️" },
    { "id": "nutricion", "name": "Nutrición", "availability": "Lunes, Miércoles", "icon": "🥗" },
    { "id": "psicologia", "name": "Psicología", "availability": "Martes, Jueves", "icon": "🧩" },
    { "id": "fisio", "name": "Fisioterapia", "availability": "Lunes, Viernes", "icon": "🏃" },
    { "id": "cirugia", "name": "Cirugía General", "availability": "Miércoles", "icon": "🔪" }
  ],
  "doctors_schedule": [
    { "name": "Dr. Juan Pérez", "specialty_id": "med_gen", "days": ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"], "hours": "08:00 AM - 02:00 PM" },
    { "name": "Dra. Lucía Mendoza", "specialty_id": "med_gen", "days": ["Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"], "hours": "02:00 PM - 08:00 PM" },
    { "name": "Dra. Ana López", "specialty_id": "pediatria", "days": ["Lunes", "Miércoles", "Viernes", "Sábado", "Domingo"], "hours": "10:00 AM - 04:00 PM" },
    { "name": "Dr. Marcos Silva", "specialty_id": "pediatria", "days": ["Martes", "Jueves", "Sábado"], "hours": "08:00 AM - 01:00 PM" },
    { "name": "Dra. María García", "specialty_id": "ginecologia", "days": ["Lunes", "Martes", "Jueves", "Sábado", "Domingo"], "hours": "09:00 AM - 03:00 PM" },
    { "name": "Dr. Fernando Rojas", "specialty_id": "ginecologia", "days": ["Miércoles", "Viernes"], "hours": "03:00 PM - 08:00 PM" },
    { "name": "Dr. Carlos Ruiz", "specialty_id": "emergencias", "days": ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"], "hours": "24 Horas" },
    { "name": "Dra. Sofía Castro", "specialty_id": "emergencias", "days": ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"], "hours": "24 Horas" },
    { "name": "Dr. Luis Torres", "specialty_id": "traumatologia", "days": ["Martes", "Jueves"], "hours": "04:00 PM - 08:00 PM" },
    { "name": "Dra. Elena Gómez", "specialty_id": "cardiologia", "days": ["Lunes", "Miércoles"], "hours": "09:00 AM - 01:00 PM" },
    { "name": "Dr. Roberto Vargas", "specialty_id": "dermatologia", "days": ["Viernes"], "hours": "10:00 AM - 02:00 PM" },
    { "name": "Dra. Carmen Ríos", "specialty_id": "neurologia", "days": ["Miércoles"], "hours": "08:00 AM - 12:00 PM" },
    { "name": "Dr. Andrés Morales", "specialty_id": "gastro", "days": ["Lunes", "Jueves"], "hours": "03:00 PM - 07:00 PM" },
    { "name": "Dra. Patricia León", "specialty_id": "oftalmo", "days": ["Martes", "Viernes"], "hours": "09:00 AM - 01:00 PM" },
    { "name": "Dr. Diego Herrera", "specialty_id": "otorrino", "days": ["Miércoles"], "hours": "02:00 PM - 06:00 PM" },
    { "name": "Dr. Hugo Ortiz", "specialty_id": "urologia", "days": ["Jueves"], "hours": "04:00 PM - 08:00 PM" },
    { "name": "Dra. Silvia Muñoz", "specialty_id": "endocrino", "days": ["Viernes"], "hours": "08:00 AM - 01:00 PM" },
    { "name": "Dr. Jorge Navarro", "specialty_id": "reuma", "days": ["Lunes"], "hours": "03:00 PM - 07:00 PM" },
    { "name": "Dra. Rosa Paredes", "specialty_id": "neumo", "days": ["Martes"], "hours": "09:00 AM - 02:00 PM" },
    { "name": "Dr. Martín Flores", "specialty_id": "odonto", "days": ["Miércoles", "Viernes"], "hours": "10:00 AM - 05:00 PM" },
    { "name": "Dra. Isabel Castillo", "specialty_id": "psiquiatria", "days": ["Jueves"], "hours": "02:00 PM - 07:00 PM" },
    { "name": "Lic. Valeria Santos", "specialty_id": "nutricion", "days": ["Lunes", "Miércoles"], "hours": "08:00 AM - 01:00 PM" },
    { "name": "Lic. Pedro Aguilar", "specialty_id": "psicologia", "days": ["Martes", "Jueves"], "hours": "03:00 PM - 08:00 PM" },
    { "name": "Lic. Gabriela Cruz", "specialty_id": "fisio", "days": ["Lunes", "Viernes"], "hours": "08:00 AM - 04:00 PM" },
    { "name": "Dr. Héctor Vega", "specialty_id": "cirugia", "days": ["Miércoles"], "hours": "08:00 AM - 02:00 PM" }
  ]
};
