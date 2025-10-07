function GraphHome() {
  return (
    <div className="flex flex-col w-full h-full p-8 pt-20 items-center gap-12">
      <h2 className="font-bold text-3xl md:text-4xl lg:text-4xl text-center">Iglesia Adventista Norte</h2>
      <div className="flex flex-wrap gap-6 justify-center">

        {/* Miembros Activos */}
        <div className="w-[45%] sm:w-[35%] md:w-[23%] lg:w-[22%] min-w-[160px] max-w-[260px] rounded-[25px] bg-white p-6 aspect-square flex flex-col items-center justify-center">
          <div className="h-12">
            <svg className="h-full fill-white stroke-black" xmlns="http://www.w3.org/2000/svg" fill="none"
              viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
            </svg>
          </div>
          <div className="my-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold"><span>300</span> +</h2>
          </div>
          <div>
            <p className="mt-1 sm:mt-2 font-sans text-sm md:text-base font-medium text-gray-500 text-center">Miembros Activos</p>
          </div>
        </div>

        {/* Grupos Pequeños */}
        <div className="w-[45%] sm:w-[35%] md:w-[23%] lg:w-[22%] min-w-[160px] max-w-[260px] rounded-[25px] bg-white p-6 aspect-square flex flex-col items-center justify-center">
          <div className="h-12">
            <svg className="h-full fill-white stroke-black" xmlns="http://www.w3.org/2000/svg" fill="none"
              viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M8 7a4 4 0 100 8 4 4 0 000-8zm8 0a4 4 0 100 8 4 4 0 000-8zM2 21v-2a4 4 0 014-4h12a4 4 0 014 4v2H2z" />
            </svg>
          </div>
          <div className="my-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold"><span>20</span> +</h2>
          </div>
          <div>
            <p className="mt-1 sm:mt-2 font-sans text-sm md:text-base font-medium text-gray-500 text-center">Grupos Pequeños</p>
          </div>
        </div>

        {/* Departamentos */}
        <div className="w-[45%] sm:w-[35%] md:w-[23%] lg:w-[22%] min-w-[160px] max-w-[260px] rounded-[25px] bg-white p-6 aspect-square flex flex-col items-center justify-center">
          <div className="h-12">
            <img
              className="h-12 object-contain"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHl9avPSDpTzstUbwDCOXCIQHcav6j9h6Qnw&s"
              alt="Mayordomía Cristiana"
            />
          </div>
          <div className="my-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold"><span>10</span> +</h2>
          </div>
          <div>
            <p className="mt-1 sm:mt-2 font-sans text-sm md:text-base font-medium text-gray-500 text-center">Departamentos</p>
          </div>
        </div>

        {/* Eventos */}
        <div className="w-[45%] sm:w-[35%] md:w-[23%] lg:w-[22%] min-w-[160px] max-w-[260px] rounded-[25px] bg-white p-6 aspect-square flex flex-col items-center justify-center">
          <div className="h-12">
            <svg className="h-full fill-white stroke-black" xmlns="http://www.w3.org/2000/svg" fill="none"
              viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <div className="my-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold"><span>5</span> +</h2>
          </div>
          <div>
            <p className="mt-1 sm:mt-2 font-sans text-sm md:text-base font-medium text-gray-500 text-center">Eventos</p>
          </div>
        </div>

        {/* Niños y Jóvenes */}
        <div className="w-[45%] sm:w-[35%] md:w-[23%] lg:w-[22%] min-w-[160px] max-w-[260px] rounded-[25px] bg-white p-6 aspect-square flex flex-col items-center justify-center">
          <div className="h-12">
            <img
              className="h-12 object-contain"
              src="https://www.guiasmayores.com/uploads/1/1/3/1/1131412/cq_dna_-_blanco_y_negro.png"
              alt="Niños y Jóvenes"
            />
          </div>
          <div className="my-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold"><span>50</span> +</h2>
          </div>
          <div>
            <p className="mt-1 sm:mt-2 font-sans text-sm md:text-base font-medium text-gray-500 text-center">Niños y Jóvenes</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default GraphHome;
