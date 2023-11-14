let consolasPrimerInicio = [
	{
		id: "5f49fab9-3135-4676-a160-5c3fdbb1ae92",
		descripcion:
			"Es un programa integral de Becas Educativas que acompaña al alumno en todos los niveles de formación durante su trayectoria académica, a través de un incentivo económico y un importante estímulo personal, que le permitirá poder avanzar en sus estudios hasta completarlos.",
		nombre: "Progresar",
		monto: 20000,
		tipo: "Nacional",
		imagen: "https://www.cronista.com/files/image/416/416773/61b8d6da00fac.png",
		requisito: `Ser argentina/o nativa/o; naturalizada/o o extranjera/o, con residencia legal de dos (2) años en el país y contar con DNI.
		Ser alumna/o regular de una institución educativa.
		Tener entre 16 y 24 años cumplidos.
		Se extiende hasta 35 años de edad a las personas con hijas/os menores de 18 años pertenecientes a hogares monoparentales.
		Sin límite de edad para personas pertenecientes a pueblos originarios, trans, con discapacidad, refugiadas o afrodescendientes/afroargentinas.
		Los ingresos de la/el joven y los de su grupo familiar no deberán ser superiores a tres (3) Salarios Mínimos, Vitales y Móviles (SMVM).`,
		link: "https://becasprogresar.educacion.gob.ar/",
		fechaDeCreacion: "2020-11-12",
	},
	{
		id: "2e897bad-d4e4-413d-a515-ed95df9ad917",
		descripcion:
			"El Programa de Becas Estratégicas Manuel Belgrano es un sistema de becas para promover el acceso, la permanencia y la finalización de estudios de grado y pregrado en nueve áreas de política pública consideradas claves para el desarrollo económico del país y la igualdad social.",
		nombre: "Manuel Belgrano",
		monto: 90000,
		tipo: "Nacional",
		imagen:
			"https://fotos.perfil.com/2021/02/22/trim/1280/720/20210222-becas-manuel-belgrano-1130817.jpg",
		requisito: `¿Quiénes pueden postularse?
		Argentinos/as nativos/as o naturalizados/as con DNI.
		Estudiantes regulares de universidades nacionales y provinciales de gestión pública que ingresen en el primer semestre del año vigente o que estén cursando al momento de la inscripción alguna de las carreras universitarias de grado o pregrado definidas por el PROGRAMA.
		Estudiantes ingresantes entre 18 y 30 años de edad y estudiantes cursantes hasta 35 años de edad.
		Postulantes con alguna discapacidad o de pueblos originarios sin límites de edad.
		Condición socioeconómica
		Al momento de la adjudicación, los/las postulantes deben tener ingresos del hogar menores a 3 salarios mínimos, vitales y móviles (SMVM). Si viven con sus familias, las mismas condiciones se aplican al grupo familiar (padre, madre o pareja conviviente). Se reconoce como grupo familiar autónomo a los/as jóvenes con hijos/as.
		Las becas son incompatibles con otros beneficios de carácter similar otorgados por el Estado Nacional.`,
		link: "https://www.argentina.gob.ar/educacion/becas/becas-manuel-belgrano",
		fechaDeCreacion: "2020-11-12",
	},
	{
		id: "fc3025ec-f314-4b63-9765-1e8df3ee358a",
		descripcion:
			"El Programa consiste en un beneficio económico que se propone como mecanismo de contención para facilitar el acceso, la permanencia y/o la finalización en los estudios de grado a sectores estudiantiles de bajos recursos y alto desempeño académico.",
		nombre: "Beca Santander",
		monto: 100000,
		tipo: "Nacional",
		imagen:
			"https://www.unc.edu.ar/sites/default/files/Becas%20Santanderweb_Mesa%20de%20trabajo%201%20copia.jpg",
		requisito: `Podrán participar aquellos alumnos que cumplan con los siguientes requisitos:
		a) Tener más de 18 años de edad.
		b) Ser alumno regular en carreras de grado de universidades públicas y/o privadas de la República Argentina (válido solo para aquellas Universidades homologadas por el Ministerio de Educación)
		c) Tener al 31 de marzo del año siguiente al vigente un mínimo de 10 materias aprobadas de las cuales al menos 2 deben haber sido cursadas y aprobadas durante el año vigente, con un promedio universitario superior o igual a 7 (siete).
		En caso de ser seleccionados para avanzar a la fase 2, deberán adjuntar, en dicha instancia, la siguiente documentación:
		Copia del Documento Identidad.
		Certificado de alumno regular vigente.
		Analítico, donde figure la cantidad de materias aprobadas, la nota y fecha en que fueron aprobadas las mismas.
		Los Postulantes Ganadores deberán tener abierta al 17/10 del año vigete una cuenta corriente y/o caja de ahorro en Banco Santander Argentina S.A a fin de que el Banco le acredite posteriormente la Beca.`,
		link: "https://www.becas-santander.com/es/index.html",
		fechaDeCreacion: "2020-11-12",
	},
];

let becas = JSON.parse(localStorage.getItem("becas")) || consolasPrimerInicio;

if (JSON.parse(localStorage.getItem("becas")) === null) {
	localStorage.setItem("becas", JSON.stringify(becas));
}

const userInicio = [
	{
		id: "eadab119-a884-4e9e-a264-d3215c98107d",
		fullname: "Rodrigo Menchaca",
		email: "admin@admin.com",
		password: "admin",
		role: "ROLE_ADMIN",
	},
	{
		id: "82eeed45-e750-43e0-9d3a-93b4a0118a56",
		fullname: "Angel Sumbay",
		email: "sumbay@example.com",
		password: "alfabeta",
		role: "ROLE_CLIENT",
	},
	{
		id: "a2d7cd61-e65f-4870-a1d1-dd08766b9767",
		fullname: "Alvaro Vargas",
		email: "vargas@example.com",
		password: "alfabeta",
		role: "ROLE_CLIENT",
	},
	{
		id: "98154852-da07-45ee-8ed5-a9966b112b99",
		fullname: "Lucas Cabezas",
		email: "cabezas@example.com",
		password: "alfabeta",
		role: "ROLE_CLIENT",
	},
];

if (localStorage.getItem("users") === null) {
	localStorage.setItem("users", JSON.stringify(userInicio));
}
