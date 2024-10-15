function App() {

  return (
    <>
    <div className="flex flex-col overflow-hidden bg-white">
      <div className="flex flex-wrap gap-5 justify-between items-start w-full max-w-[1659px] max-md:max-w-full">
        <div className="flex flex-wrap gap-2 text-xl font-semibold text-stone-900 max-md:max-w-full">
          {/* <div className="px-8 py-3 border border-black border-solid cursor-pointer hover:bg-red-400 max-md:px-5 active:bg-red-300">
            Rajasthan University
          </div> */}
          <button className="px-8 py-3 border border-black border-solid cursor-pointer rounded-xl hover:bg-yellow-300 max-md:px-5 active:bg-yellow-100"> Ajay Kumar Garg Engineering College</button>
          {/* <div className="px-3.5 py-3 whitespace-nowrap bg-white border border-black border-solid max-md:pr-5 hover:bg-yellow-300 cursor-pointer ">
            +91-12X-90451xxx
          </div> */}
          <button className="px-3.5 py-3 whitespace-nowrap bg-white border border-black border-solid rounded-xl max-md:pr-5 hover:bg-yellow-300 cursor-pointer active:bg-yellow-100">+91-90451xxxxx</button>
          {/* <div className="px-5 pt-1.5 pb-4 whitespace-nowrap bg-white border border-black border-solid max-md:px-5 hover:bg-yellow-300 cursor-pointer ">
            admission@raj.ac.in
          </div> */}
          <button className="px-5 pt-1.5 pb-4 whitespace-nowrap bg-white border border-black border-solid rounded-xl max-md:px-5 hover:bg-yellow-300 cursor-pointer active:bg-yellow-100">info@akgec.ac.in</button>
        </div>
        <div className="flex gap-6 mt-4">
          <img 
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d72f926c0b2350e008e5aa0739e159379e0306489d2e201976170a32297c545a?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500"
            className="object-contain rounded-none cursor-pointer shrink-0 w-9 aspect-square"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e583e1641a37d3bda82222e9e6d2bf38eeec6ad8a53f1ce95b78cd45383e9bdf?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500"
            className="object-contain rounded-none cursor-pointer shrink-0 w-9 aspect-square"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf2a8aff4b3129ba95142bd50fb4531e64b6f94df14e4baa779519d4bfb7adaa?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500"
            className="object-contain rounded-none cursor-pointer shrink-0 w-9 aspect-square"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b9386485c8566c102260e03a38f1ca778c42598bab0fb6c6aa45008206aa642a?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500"
            className="object-contain rounded-none cursor-pointer shrink-0 w-9 aspect-square"
          />
        </div>
      </div>
      <div className="flex flex-col self-end mt-4 w-full max-w-[1590px] max-md:mr-2.5 max-md:max-w-full">
        <div className="self-start text-5xl font-extrabold text-gray-900 leading-[54px] max-md:max-w-full">
          AJAY KUMAR GARG ENGINEERING COLLEGE <br />
        </div>
        <div className="flex flex-wrap justify-between w-full gap-5 mt-2 max-md:max-w-full">
          <div className="text-2xl font-extrabold text-black leading-[54px] max-md:max-w-full">
            <span className="text-3xl">Affiliated to Dr.APJ Abdul Kalam Technical University</span>
            <br />
            Lucknow, UP, College Code (027){" "}
          </div>
          <div className="flex flex-wrap gap-6 text-sm tracking-normal text-gray-400 whitespace-nowrap">
            <div className="relative">
              <div className="flex border-2 border-none rounded-lg">
                <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/dcf80e7bd71a06545fdd5b247bf128f4d4320c6233fd0d4d7698566c66002ba9?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500"
                className="object-contain shrink-0 w-8 aspect-[1.21]"/>
                <input
                  type="text"
                  className="px-3.5 py-2.5 text-sm text-black cursor-pointer rounded-lg"
                  placeholder="Search"
                />
              </div>
    
    
                <img
                loading="lazy"
                srcSet="Silver-Jubilee-Logo.png" //"https://cdn.builder.io/api/v1/image/assets/TEMP/03fadbd764d6a8cfd87f4f930dd3fc5baf5dd49e0b9cb41032cddc7ad1283344?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/03fadbd764d6a8cfd87f4f930dd3fc5baf5dd49e0b9cb41032cddc7ad1283344?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/03fadbd764d6a8cfd87f4f930dd3fc5baf5dd49e0b9cb41032cddc7ad1283344?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/03fadbd764d6a8cfd87f4f930dd3fc5baf5dd49e0b9cb41032cddc7ad1283344?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/03fadbd764d6a8cfd87f4f930dd3fc5baf5dd49e0b9cb41032cddc7ad1283344?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/03fadbd764d6a8cfd87f4f930dd3fc5baf5dd49e0b9cb41032cddc7ad1283344?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/03fadbd764d6a8cfd87f4f930dd3fc5baf5dd49e0b9cb41032cddc7ad1283344?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/03fadbd764d6a8cfd87f4f930dd3fc5baf5dd49e0b9cb41032cddc7ad1283344?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500"
                className="object-contain shrink-0 max-w-full aspect-[1.05] w-[200px]"
                />
            </div>
          </div>

        </div>
      </div>
      {/* <div className="px-14 pt-3.5 pb-6 mt-24 w-full text-xl font-semibold text-black bg-red-400 max-md:px-5 max-md:mt-10 max-md:max-w-full ">
        <ul className="flex justify-around">
          <li>Home</li>
          <li>About Us</li>
          <li>Admissions Information</li>
          <li>Institutes Directory</li>
          <li>Features</li>
          <li>Alumni</li>
          <li>Resource</li>
          <li>Approvals</li>
          <li>Innovation Hub</li>
          <li>FAQs</li>
          <li>Contact Us</li>
        </ul>
      </div> */}
      <div className="px-14 pt-3.5 pb-6 mt-24 w-full text-xl font-semibold text-black bg-gray-950 max-md:px-5 max-md:mt-10 max-md:max-w-full">
  <div className="flex flex-col md:flex-row">
    {/* Logo or branding */}
    <div className="flex items-center justify-between mb-4 md:justify-start md:mb-0">
      {/* <h1 className="text-2xl font-bold text-white">Logo</h1> */}
      {/* Mobile menu button */}
      <button className="text-white md:hidden">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>
    </div>
    <ul className="flex flex-col space-y-4 text-white md:flex-row md:justify-evenly md:flex-1 md:space-y-0 md:space-x-8">
      <li><a className='active:bg-red-600' href="#home">Home</a></li>
      <li><a className='active:bg-red-600' href="#about-us">About</a></li>
      <li><a className='active:bg-red-600' href="#admissions">Departments</a></li>
      <li><a className='active:bg-red-600' href="#directory">Academics</a></li>
      <li><a className='active:bg-red-600' href="#features">Admissions</a></li>
      <li><a className='active:bg-red-600' href="#alumni">Alumni</a></li>
      <li><a className='active:bg-red-600' href="#resource">Achievements</a></li>
      <li><a className='active:bg-red-600' href="#approvals">Placements</a></li>
      <li><a className='active:bg-red-600' href="#innovation">Life@AKGEC</a></li>
      <li><a className='active:bg-red-600' href="#faqs">FAQs</a></li>
      <li><a className='active:bg-red-600' href="#contact">Contact Us</a></li>
    </ul>
  </div>
</div>

      <div className="flex relative flex-col items-center px-16 pb-12 mt-3 w-full min-h-[588px] pt-[512px] max-md:px-5 max-md:pt-24 max-md:max-w-full">
        <img
          loading="lazy"
          srcSet="heroimg.png"  //"https://cdn.builder.io/api/v1/image/assets/TEMP/aa89ae1264a5e66494a3db159e442bedae7c7ffb68b1a7363ff20548a0fd901c?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/aa89ae1264a5e66494a3db159e442bedae7c7ffb68b1a7363ff20548a0fd901c?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/aa89ae1264a5e66494a3db159e442bedae7c7ffb68b1a7363ff20548a0fd901c?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/aa89ae1264a5e66494a3db159e442bedae7c7ffb68b1a7363ff20548a0fd901c?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/aa89ae1264a5e66494a3db159e442bedae7c7ffb68b1a7363ff20548a0fd901c?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/aa89ae1264a5e66494a3db159e442bedae7c7ffb68b1a7363ff20548a0fd901c?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/aa89ae1264a5e66494a3db159e442bedae7c7ffb68b1a7363ff20548a0fd901c?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/aa89ae1264a5e66494a3db159e442bedae7c7ffb68b1a7363ff20548a0fd901c?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500"
          className="absolute inset-0 object-cover size-full"
        />
        <div className="flex relative gap-4 items-start ml-3 max-w-full min-h-[25px] w-[101px]">
          <div className="flex shrink-0 w-2.5 h-2.5 bg-white rounded-full" />
          <div className="flex shrink-0 w-2.5 h-2.5 bg-white rounded-full" />
          <div className="flex shrink-0 w-2.5 h-2.5 bg-white rounded-full" />
        </div>
      </div>



      <div className="z-10 flex flex-col w-full pl-16 pr-6 -mt-4 max-md:px-5 max-md:max-w-full">
        <div className="px-0.5 pb-16 w-full bg-yellow-500 bg-opacity-70 max-w-[1578px] max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex  w-[28%] max-md:ml-0 max-md:w-full">
              <div className="flex items-start gap-4 font-bold grow max-md:mt-8">
                <div className="tracking-wider text-white text-7xl max-md:text-4xl">
                  01
                </div>
                <div className="flex-auto mt-4 text-3xl tracking-wide text-stone-900 w-[345px]">
                  <span className="text-3xl">EXCELLENT PLACEMENTS</span>
                  <br />
                  <span className="text-sm">
                    More than 2000 students placed in 2023-24
                  </span>
                </div>

                <div className="tracking-wider text-white text-7xl max-md:text-4xl">
                  02
                </div>
                <div className="flex-auto mt-4 text-3xl tracking-wide text-stone-900 w-[345px]">
                  <span className="text-3xl">ALUMINI NETWORK</span>
                  <br />
                  <span className="text-sm">
                    Strong network of multiple AKGECians
                  </span>
                </div>

                <div className="tracking-wider text-white text-7xl max-md:text-4xl">
                  03
                </div>
                <div className="flex-auto mt-4 text-3xl tracking-wide text-stone-900 w-[345px]">
                  <span className="text-3xl">ACHIEVEMENTS</span>
                  <br />
                  <span className="text-sm">
                    AKGECians in Merit List and Chancellors's Award
                  </span>
                </div>

              </div>
            </div>
            
          </div>
        </div>
        <div className="self-end px-14 py-10 mt-8 max-w-full text-2xl leading-9 text-white bg-cyan-900 rounded-[30px] w-[406px] max-md:px-5">
          👋 Hi! I’m a virtual assistant. <br /> How can I help today?
        </div>
      </div>



      <div className="mt-3.5 w-full border-solid border-[5px] border-yellow-600 border-opacity-20 min-h-[6px] max-md:max-w-full" />
      <div className="self-center mt-8 w-full max-w-[1661px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col px-6 py-6 mx-auto w-full bg-yellow-50 border border-black border-solid rounded-[30px] max-md:pl-5 max-md:mt-6">
              <div className="flex items-start text-3xl font-semibold text-zinc-800">
                <div className="flex-auto mt-3 w-[302px]">
                  ANNOUNCEMENTS
                  <br />
                </div>
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9c719a74af41e30866eeb6644c2f11058c5a85fe9d7494d1a79527b6120177ac?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9c719a74af41e30866eeb6644c2f11058c5a85fe9d7494d1a79527b6120177ac?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9c719a74af41e30866eeb6644c2f11058c5a85fe9d7494d1a79527b6120177ac?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9c719a74af41e30866eeb6644c2f11058c5a85fe9d7494d1a79527b6120177ac?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9c719a74af41e30866eeb6644c2f11058c5a85fe9d7494d1a79527b6120177ac?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9c719a74af41e30866eeb6644c2f11058c5a85fe9d7494d1a79527b6120177ac?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9c719a74af41e30866eeb6644c2f11058c5a85fe9d7494d1a79527b6120177ac?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9c719a74af41e30866eeb6644c2f11058c5a85fe9d7494d1a79527b6120177ac?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500"
                  className="object-contain shrink-0 aspect-square w-[50px]"
                />
              </div>
              <div className="flex gap-3 mt-3.5 max-w-full w-[321px]">
                <div className="flex-auto text-base font-medium tracking-normal leading-5 text-black w-[299px]">
                  New Admission (Odd Sem 2024) - Instructions, Forms, Induction
                  & Time Table <br />
                  <br />
                  End Sem Notice - odd 2024
                  <br />
                  <br />
                  Admission through GATE/CAT
                  <br />
                  <br />
                  Time Table (2024-24) <br />
                  <br />
                  Notifications from AICTE/UGC
                  <br />
                  <br />
                  Performance and Academic Outcomes <br />
                  <br />
                  NDA Registration <br />
                  <br />
                  NIRF Ranking / NAAC Accredition / NBA
                  <br />
                  <br />
                  Speech of Honble Founder Chairman <br />
                  <br />
                  <span className="font-extrabold">
                  MOOCs Registration & Subject List
                  </span>
                  <br />
                </div>
                <div className="flex flex-col items-start self-end mt-8">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/eb1ad925c32a90de0aaebc9357bacbd1aad601f10b56dadc859df091b6487cc9?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500"
                    className="object-contain aspect-[0.5] w-[5px]"
                  />
                  <div className="flex relative flex-col mt-9 aspect-[0.5] w-[5px]">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/eb1ad925c32a90de0aaebc9357bacbd1aad601f10b56dadc859df091b6487cc9?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500"
                      className="absolute inset-0 object-cover size-full"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/eb1ad925c32a90de0aaebc9357bacbd1aad601f10b56dadc859df091b6487cc9?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500"
                      className="object-contain w-full aspect-[0.5]"
                    />
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/eb1ad925c32a90de0aaebc9357bacbd1aad601f10b56dadc859df091b6487cc9?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500"
                    className="object-contain mt-7 aspect-[0.5] w-[5px]"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/eb1ad925c32a90de0aaebc9357bacbd1aad601f10b56dadc859df091b6487cc9?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500"
                    className="object-contain mt-5 aspect-[0.5] w-[5px]"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/eb1ad925c32a90de0aaebc9357bacbd1aad601f10b56dadc859df091b6487cc9?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500"
                    className="object-contain mt-7 aspect-[0.5] w-[5px]"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/eb1ad925c32a90de0aaebc9357bacbd1aad601f10b56dadc859df091b6487cc9?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500"
                    className="object-contain mt-12 aspect-[0.5] w-[5px] max-md:mt-10"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/eb1ad925c32a90de0aaebc9357bacbd1aad601f10b56dadc859df091b6487cc9?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500"
                    className="object-contain mt-12 aspect-[0.5] w-[5px] max-md:mt-10"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/eb1ad925c32a90de0aaebc9357bacbd1aad601f10b56dadc859df091b6487cc9?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500"
                    className="object-contain mt-12 aspect-[0.5] w-[5px] max-md:mt-10"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/eb1ad925c32a90de0aaebc9357bacbd1aad601f10b56dadc859df091b6487cc9?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500"
                    className="object-contain mt-10 aspect-[0.5] w-[5px]"
                  />
                  
                </div>
              </div>
              {/* <div className="gap-2 self-stretch px-9 py-6 mt-32 text-lg font-extrabold leading-none text-center text-red-400 bg-white border-red-400 border-solid shadow-sm border-[1.333px] min-h-[72px] rounded-[40px] max-md:px-5 max-md:mt-10 max-md:mr-2.5"> */}
                <button className="gap-2 self-stretch px-9 py-6 mt-32 text-lg font-extrabold leading-none text-center text-gray-950 bg-white border-yellow-700 border-solid shadow-sm border-[1.333px] min-h-[72px] rounded-[40px] max-md:px-5 max-md:mt-10 max-md:mr-2.5 hover:bg-yellow-200 active:bg-yellow-100">VIEW ALL</button>
              {/* </div> */}
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[27%] max-md:ml-0 max-md:w-full ">
            <div className="flex flex-col items-start px-3 py-8 mx-auto w-full bg-yellow-50 border border-black border-solid rounded-[30px] max-md:mt-6 max-md:max-w-full">
              <div className="flex gap-5 text-3xl font-semibold text-zinc-800">
                <div className="flex-auto">
                  UPCOMING EVENTS
                  <br />
                </div>
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/32157ba0d4313377ec52f92ea94cd0b342e4d4e4ecccaf1ad1aa048b5689d0e5?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/32157ba0d4313377ec52f92ea94cd0b342e4d4e4ecccaf1ad1aa048b5689d0e5?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/32157ba0d4313377ec52f92ea94cd0b342e4d4e4ecccaf1ad1aa048b5689d0e5?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/32157ba0d4313377ec52f92ea94cd0b342e4d4e4ecccaf1ad1aa048b5689d0e5?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/32157ba0d4313377ec52f92ea94cd0b342e4d4e4ecccaf1ad1aa048b5689d0e5?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/32157ba0d4313377ec52f92ea94cd0b342e4d4e4ecccaf1ad1aa048b5689d0e5?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/32157ba0d4313377ec52f92ea94cd0b342e4d4e4ecccaf1ad1aa048b5689d0e5?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/32157ba0d4313377ec52f92ea94cd0b342e4d4e4ecccaf1ad1aa048b5689d0e5?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500"
                  className="object-contain shrink-0 self-start aspect-square w-[50px]"
                />
                
              </div>
              <br />
              <div className="flex gap-3 ml-3.5 leading-6 max-md:ml-2.5">
                <div className="self-start px-4 pt-5 text-lg font-extrabold text-center pb-9 whitespace-nowrap text-blue-950">
                  15
                  <br />
                  Oct,24
                </div>
                <div className="text-xs font-medium text-black">
                  Dept. of Physics and Materials Science & Engineering is
                  organizing International Young Quantum Scientists Meet 2024
                  from 16 - 20 September 2024
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/eb1ad925c32a90de0aaebc9357bacbd1aad601f10b56dadc859df091b6487cc9?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500"
                  className="object-contain shrink-0 self-end mt-20 aspect-[0.5] w-[5px] max-md:mt-10"
                />
              </div>
              <div className="flex gap-6 mt-11 ml-3.5 leading-6 max-md:mt-10 max-md:ml-2.5">
                <div className="flex flex-auto gap-3">
                  <div className="px-4 pt-5 text-lg font-extrabold text-center pb-9 whitespace-nowrap text-blue-950">
                    12
                    <br />
                    Dec,24
                  </div>
                  <div className="text-xs font-medium text-black">
                    Dept. of Mathematics is organizing a 3 day International
                    Conference on Recent Advances in Mathematical Sciences
                    during Dec 2024
                  </div>
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/eb1ad925c32a90de0aaebc9357bacbd1aad601f10b56dadc859df091b6487cc9?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500"
                  className="object-contain shrink-0 self-end mt-20 aspect-[0.5] w-[5px] max-md:mt-10"
                />
              </div>
              <div className="flex gap-3 mt-16 ml-3.5 leading-6 max-md:mt-10 max-md:ml-2.5">
                <div className="px-4 pt-5 text-lg font-extrabold text-center pb-9 whitespace-nowrap text-blue-950">
                  13
                  <br />
                  Jan,25
                </div>
                <div className="text-xs font-medium text-black">
                  Dept. of Biotechnology is organizing a 3 day Internalional
                  Coferernce on Advances in Biosciences and Biotechnology in Jan
                  2025
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/eb1ad925c32a90de0aaebc9357bacbd1aad601f10b56dadc859df091b6487cc9?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500"
                  className="object-contain shrink-0 self-end mt-20 aspect-[0.5] w-[5px] max-md:mt-10"
                />
              </div>
              <div className="flex gap-9 mt-11 ml-3.5 leading-6 max-md:mt-10 max-md:ml-2.5">
                <div className="flex flex-auto gap-3">
                  <div className="px-4 pt-3.5 pb-10 text-lg font-extrabold text-center whitespace-nowrap text-blue-950">
                    31
                    <br />
                    Jan,25
                  </div>
                  <div className="text-xs font-medium text-black">
                    Dept. of ECE is organizing 10th International Conference for 3 days in month of January
                  </div>
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/eb1ad925c32a90de0aaebc9357bacbd1aad601f10b56dadc859df091b6487cc9?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500"
                  className="object-contain shrink-0 my-auto aspect-[0.5] w-[5px]"
                />
              </div>
              {/* <div className="gap-2 self-stretch px-9 py-6  text-lg font-extrabold leading-none text-center text-red-400 bg-white border-red-400 border-solid shadow-sm border-[1.333px] min-h-[72px] rounded-[40px] max-md:px-5 max-md:mt-10 max-md:mr-2.5">
                VIEW ALL
              </div> */}
              <button className="gap-2 self-stretch px-9 py-6 text-lg font-extrabold leading-none text-center text-gray-950 bg-white border-yellow-700 border-solid shadow-sm border-[1.333px] min-h-[72px] rounded-[40px] max-md:px-5 max-md:mt-10 max-md:mr-2.5 hover:bg-yellow-200 active:bg-yellow-100">VIEW ALL</button>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[48%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col py-7 mx-auto w-full bg-yellow-50 border border-black border-solid rounded-[30px] max-md:mt-6 max-md:max-w-full">
              {/* <div className="flex justify-start text-3xl font-semibold text-zinc-800 max-md:pr-5">
                <div className="z-10 flex flex-auto mr-0 max-md:max-w-full">
                  <div className="z-10 self-end flex-auto h-1 mr-0 border-2 border-red-400 border-solid mt-14 max-md:mt-10 max-md:max-w-full" />
                  <div className="flex-auto max-md:max-w-full">
                    TRAINING & PLACEMENT
                    <br />
                  </div>
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/276ed53f425b921494d51bf6735e033a85d87d3086e8be93ee6e48211a8b71fa?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500"
                  className="object-contain shrink-0 self-start rounded-none aspect-[1.37] w-[59px]"
                />
              </div> */}
              <div className="flex items-center justify-between text-3xl font-semibold text-zinc-800 max-md:pr-5">
                <div className="flex items-center space-x-4 max-md:flex-col max-md:space-x-0 max-md:space-y-4">
                  <div className="flex flex-col max-md:w-full">
                  
                    <div className="ml-5 max-md:text-center">
                      TRAINING & PLACEMENT
                    </div>
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/276ed53f425b921494d51bf6735e033a85d87d3086e8be93ee6e48211a8b71fa?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500"
                    className="object-contain w-16 h-16 rounded-full"
                  />
                </div>
              </div>
<div className="h-1 mt-3 border-2 border-yellow-800 border-solid shrink-0 max-md:max-w-full" />

              <div className="flex flex-col items-start w-full pl-4 pr-20 mt-2 max-md:pr-5 max-md:max-w-full">
                <div className="ml-2.5 text-base font-light text-black max-md:max-w-full">
                  Few of our regular key recruiters for B.Tech, M.Tech, Dual
                  Degree and MBA are…
                </div>
                <div className="mt-3.5 max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col">
                    <div className="flex flex-col w-[38%] max-md:ml-0 max-md:w-full">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/646b179409ebbe18b021ef3fd26468ec17c66395cf5498fc0b027a82bd011ff0?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/646b179409ebbe18b021ef3fd26468ec17c66395cf5498fc0b027a82bd011ff0?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/646b179409ebbe18b021ef3fd26468ec17c66395cf5498fc0b027a82bd011ff0?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/646b179409ebbe18b021ef3fd26468ec17c66395cf5498fc0b027a82bd011ff0?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/646b179409ebbe18b021ef3fd26468ec17c66395cf5498fc0b027a82bd011ff0?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/646b179409ebbe18b021ef3fd26468ec17c66395cf5498fc0b027a82bd011ff0?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/646b179409ebbe18b021ef3fd26468ec17c66395cf5498fc0b027a82bd011ff0?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/646b179409ebbe18b021ef3fd26468ec17c66395cf5498fc0b027a82bd011ff0?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500"
                        className="object-contain grow shrink-0 mt-6 max-w-full aspect-[2.58] w-[217px] max-md:mt-10"
                      />
                    </div>
                    <div className="flex flex-col ml-5 w-[45%] max-md:ml-0 max-md:w-full">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/2870514f9d9b5b4e7aa6c28699edaf3a13a3b9e3fcfe33c69e696cfb4fb1fc25?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2870514f9d9b5b4e7aa6c28699edaf3a13a3b9e3fcfe33c69e696cfb4fb1fc25?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2870514f9d9b5b4e7aa6c28699edaf3a13a3b9e3fcfe33c69e696cfb4fb1fc25?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2870514f9d9b5b4e7aa6c28699edaf3a13a3b9e3fcfe33c69e696cfb4fb1fc25?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2870514f9d9b5b4e7aa6c28699edaf3a13a3b9e3fcfe33c69e696cfb4fb1fc25?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2870514f9d9b5b4e7aa6c28699edaf3a13a3b9e3fcfe33c69e696cfb4fb1fc25?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2870514f9d9b5b4e7aa6c28699edaf3a13a3b9e3fcfe33c69e696cfb4fb1fc25?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/2870514f9d9b5b4e7aa6c28699edaf3a13a3b9e3fcfe33c69e696cfb4fb1fc25?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500"
                        className="object-contain grow mt-3.5 aspect-[2.67] w-[254px] max-md:mt-10"
                      />
                    </div>
                    <div className="flex flex-col ml-5 w-[17%] max-md:ml-0 max-md:w-full">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/30c0cf17b769323f002e832222f9df22a5bfaafba64dc16703d69cfa55f7dfea?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/30c0cf17b769323f002e832222f9df22a5bfaafba64dc16703d69cfa55f7dfea?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/30c0cf17b769323f002e832222f9df22a5bfaafba64dc16703d69cfa55f7dfea?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/30c0cf17b769323f002e832222f9df22a5bfaafba64dc16703d69cfa55f7dfea?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/30c0cf17b769323f002e832222f9df22a5bfaafba64dc16703d69cfa55f7dfea?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/30c0cf17b769323f002e832222f9df22a5bfaafba64dc16703d69cfa55f7dfea?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/30c0cf17b769323f002e832222f9df22a5bfaafba64dc16703d69cfa55f7dfea?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/30c0cf17b769323f002e832222f9df22a5bfaafba64dc16703d69cfa55f7dfea?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500"
                        className="object-contain grow shrink-0 aspect-[0.92] w-[98px] max-md:mt-10"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="self-end px-6 pt-2 pb-3.5 mt-2 mr-10 text-base font-semibold text-black bg-red-400 bg-opacity-40 max-md:px-5 max-md:mr-2.5">
                View More
              </div> */}

              <button className="self-end px-6 pt-2 pb-3.5 mt-2 mr-10 text-base font-semibold text-black bg-yellow-400 bg-opacity-40 max-md:px-5 max-md:mr-2.5 hover:bg-yellow-200 rounded-xl active:bg-yellow-100">View More</button>


              <div className="h-1 mt-2 border-2 border-red-400 border-solid shrink-0 max-md:max-w-full" />
              <div className="flex flex-wrap gap-5 justify-between items-start self-center max-w-full text-3xl font-semibold text-zinc-800 w-[691px]">
                <div className="mt-3">
                  ANNOUNCEMENTS
                  <br />
                </div>
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9c719a74af41e30866eeb6644c2f11058c5a85fe9d7494d1a79527b6120177ac?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9c719a74af41e30866eeb6644c2f11058c5a85fe9d7494d1a79527b6120177ac?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9c719a74af41e30866eeb6644c2f11058c5a85fe9d7494d1a79527b6120177ac?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9c719a74af41e30866eeb6644c2f11058c5a85fe9d7494d1a79527b6120177ac?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9c719a74af41e30866eeb6644c2f11058c5a85fe9d7494d1a79527b6120177ac?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9c719a74af41e30866eeb6644c2f11058c5a85fe9d7494d1a79527b6120177ac?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9c719a74af41e30866eeb6644c2f11058c5a85fe9d7494d1a79527b6120177ac?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9c719a74af41e30866eeb6644c2f11058c5a85fe9d7494d1a79527b6120177ac?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500"
                  className="object-contain shrink-0 aspect-square w-[50px]"
                />
              </div>
              <div className="flex flex-wrap text-base font-semibold max-md:max-w-full">
                <div className="px-16 pt-3 pb-5 text-black bg-opacity-50 bg-slate-400 w-fit max-md:px-5">
                  2024 BATCH
                </div>
                <div className="px-16 pt-3 pb-4 text-white border border-black border-solid grow bg-blue-950 w-fit max-md:px-5 max-md:max-w-full">
                  2025 BATCH (AS ON 05 AUGUST'24)
                </div>
              </div>
              <div className="flex flex-col mt-2 ml-6 max-w-full text-base text-black w-[441px]">
                <div className="font-light max-md:max-w-full">
                  252 quality companies recruited so far
                  <br />
                  Highest Package Rs 60.71 Lacs by LinkedIn (2 Offers)
                  <br />
                  2nd Highest Package Rs 52.00 Lacs by Microsoft India (2
                  Offers)
                  <br />
                  3rd Highest Package Rs 37.37 Lacs CISCO (1 Offer)
                  <br />
                  24 Cos - Package From Rs 13.00 Lacs to Rs 37.36 Lacs (100
                  Offers)
                  <br />
                  104 Cos - Package From Rs 6.00  to Rs 12.99 Lacs  (387 Offers)
                  <br />
                  66 Cos - Package Less Than Rs 6.00 Lacs (274 Offers)
                  <br />
                  <br />
                  Average Package - Rs 8.71 Lacs
                  <br />
                  Median Package -  Rs 6.50 Lacs
                </div>
                {/* <div className="px-5 pt-1.5 pb-4 mt-6 ml-5 max-w-full font-semibold bg-red-400 bg-opacity-40 w-[126px] max-md:pr-5 max-md:ml-2.5">
                  View More
                </div> */}
                <button className="px-5 pt-1.5 pb-4 mt-6 ml-5 max-w-full font-semibold bg-yellow-400 bg-opacity-40 w-[126px] max-md:pr-5 max-md:ml-2.5 hover:bg-yellow-200 rounded-xl active:bg-yellow-100">View More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 w-full border-solid border-[5px] border-yellow-800 border-opacity-20 min-h-[6px] max-md:mt-10 max-md:max-w-full" />
      <div className="self-center text-5xl font-extrabold leading-none text-gray-950 mt-14 max-md:mt-10 max-md:max-w-full max-md:text-4xl">
        Our Featured Courses Offered
      </div>
      <div className="flex relative flex-col self-center px-0.5 mt-16 w-full max-w-[1700px] min-h-[386px] max-md:mt-10 max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/20f5f80a19bc01b8c292ab5eb352d5350a166664d76682265b42e4ca9f4e1e1a?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500"
          className="absolute inset-0 object-cover size-full"
        />
        <div className="flex relative z-10 flex-col px-9 pt-11 pb-4 w-full min-h-[388px] max-md:px-5 max-md:max-w-full">
          {/* <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/aede3ccd552f35dc3ff727120641db01203f19e5ccd78a60e29ef1a2282fe18c?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500"
            className="absolute inset-0 object-cover size-full"
          /> */}
          <div className="relative z-10 max-md:max-w-full">
            <div className="flex justify-center gap-5 max-md:flex-col">
              <div className="flex w-3/12 max-md:ml-0 max-md:w-full">
                <div className="relative flex flex-col mt-1 font-extrabold grow max-md:mt-10">
                  <div className="flex relative flex-col pt-52 w-full text-2xl leading-loose text-black rounded-2xl aspect-[1.385] max-md:pt-24">
                    <img
                      loading="lazy"
                      srcSet="b.tech.png"  //"https://cdn.builder.io/api/v1/image/assets/TEMP/cc224e4f736f2e94d94a121f3b1122f04a625ede1efb056beb05854f22efd69e?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/cc224e4f736f2e94d94a121f3b1122f04a625ede1efb056beb05854f22efd69e?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cc224e4f736f2e94d94a121f3b1122f04a625ede1efb056beb05854f22efd69e?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/cc224e4f736f2e94d94a121f3b1122f04a625ede1efb056beb05854f22efd69e?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/cc224e4f736f2e94d94a121f3b1122f04a625ede1efb056beb05854f22efd69e?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cc224e4f736f2e94d94a121f3b1122f04a625ede1efb056beb05854f22efd69e?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/cc224e4f736f2e94d94a121f3b1122f04a625ede1efb056beb05854f22efd69e?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/cc224e4f736f2e94d94a121f3b1122f04a625ede1efb056beb05854f22efd69e?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500"
                      className="absolute inset-0 object-cover size-full"
                    />
                    
                  </div>
                  <div className="flex relative z-10 flex-col px-8 pt-2 pb-10 mb-0 aspect-[5.362] max-md:px-5 max-md:-mr-1">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/5eaa1bed83036d063996b8fc1d457455c7fdf218c3490e74ef325c76ace66e95?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500"
                        className="absolute inset-0 object-cover size-full"
                      />
                      Bachelor in Technology (CSE, CS, IT/CSIT, ECE, EN/ME, CIVIL)
                    </div>
                    <button className='hover:bg-yellow-100 active:bg-yellow-500'>READ MORE</button>
                  
                  {/* <div className="self-center mt-5 text-base leading-4 text-white">
                    READ MORE
                  </div> */}
                </div>
              </div>
              <div className="flex flex-col w-3/12 ml-5 max-md:ml-0 max-md:w-full">
                <div className="relative flex flex-col mt-1 font-extrabold grow max-md:mt-10">
                <div className="flex relative flex-col pt-52 w-full text-2xl leading-loose text-black rounded-2xl aspect-[1.385] max-md:pt-24">
                    <img
                      loading="lazy"
                      srcSet="MCA.png"  //"https://cdn.builder.io/api/v1/image/assets/TEMP/6bd7ec9f07f05f1bea362a12bfbb27d9954e4c00b7a5345a1f41f1d3cec39027?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6bd7ec9f07f05f1bea362a12bfbb27d9954e4c00b7a5345a1f41f1d3cec39027?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6bd7ec9f07f05f1bea362a12bfbb27d9954e4c00b7a5345a1f41f1d3cec39027?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6bd7ec9f07f05f1bea362a12bfbb27d9954e4c00b7a5345a1f41f1d3cec39027?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6bd7ec9f07f05f1bea362a12bfbb27d9954e4c00b7a5345a1f41f1d3cec39027?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6bd7ec9f07f05f1bea362a12bfbb27d9954e4c00b7a5345a1f41f1d3cec39027?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6bd7ec9f07f05f1bea362a12bfbb27d9954e4c00b7a5345a1f41f1d3cec39027?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6bd7ec9f07f05f1bea362a12bfbb27d9954e4c00b7a5345a1f41f1d3cec39027?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500"
                      className="absolute inset-0 object-cover size-full"
                    />
                   
                  </div>
                  <div className="flex relative z-10 flex-col px-8 pt-2 pb-10 mb-0 aspect-[5.362] max-md:px-5 max-md:-mr-1">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/5eaa1bed83036d063996b8fc1d457455c7fdf218c3490e74ef325c76ace66e95?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500"
                        className="absolute inset-0 object-cover size-full"
                      />
                      Master of Computer Application (MCA)
                    </div>
                    <button className='hover:bg-yellow-100 active:bg-yellow-500'>READ MORE</button>
                </div>
              </div>
              <div className="flex flex-col w-3/12 ml-5 max-md:ml-0 max-md:w-full">
                <div className="relative flex flex-col mt-1 font-extrabold grow max-md:mt-10">
                <div className="flex relative flex-col pt-52 w-full text-2xl leading-loose text-black rounded-2xl aspect-[1.385] max-md:pt-24">
                    <img
                      loading="lazy"
                      srcSet="mtech.png"  //"https://cdn.builder.io/api/v1/image/assets/TEMP/fe38dd08f65e1a693a58daeae632feaa832c497a26567e9519be35b591e33f9d?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/fe38dd08f65e1a693a58daeae632feaa832c497a26567e9519be35b591e33f9d?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fe38dd08f65e1a693a58daeae632feaa832c497a26567e9519be35b591e33f9d?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/fe38dd08f65e1a693a58daeae632feaa832c497a26567e9519be35b591e33f9d?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/fe38dd08f65e1a693a58daeae632feaa832c497a26567e9519be35b591e33f9d?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/fe38dd08f65e1a693a58daeae632feaa832c497a26567e9519be35b591e33f9d?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/fe38dd08f65e1a693a58daeae632feaa832c497a26567e9519be35b591e33f9d?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/fe38dd08f65e1a693a58daeae632feaa832c497a26567e9519be35b591e33f9d?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500"
                      className="absolute inset-0 object-cover size-full"
                    />
                    
                  </div>
                  <div className="flex relative z-10 flex-col px-8 pt-2 pb-10 mb-0 aspect-[5.362] max-md:px-5 max-md:-mr-1">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/5eaa1bed83036d063996b8fc1d457455c7fdf218c3490e74ef325c76ace66e95?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500"
                        className="absolute inset-0 object-cover size-full"
                      />
                      Master of Technology (CSE, ECE, EN, ME)
                    </div>
                    <button className='hover:bg-yellow-100 active:bg-yellow-500'>READ MORE</button>
                </div>
              </div>
              {/* <div className="flex flex-col w-3/12 ml-5 max-md:ml-0 max-md:w-full">
                <div className="relative flex flex-col font-extrabold grow max-md:mt-10">
                <div className="flex relative flex-col pt-52 w-full text-2xl leading-loose text-black rounded-2xl aspect-[1.385] max-md:pt-24">
                    <img
                      loading="lazy"
                      //srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/3d865f511e2325a06659c707daf1d65c55d527a7bf326d12872a8b0807b62282?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3d865f511e2325a06659c707daf1d65c55d527a7bf326d12872a8b0807b62282?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3d865f511e2325a06659c707daf1d65c55d527a7bf326d12872a8b0807b62282?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3d865f511e2325a06659c707daf1d65c55d527a7bf326d12872a8b0807b62282?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3d865f511e2325a06659c707daf1d65c55d527a7bf326d12872a8b0807b62282?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3d865f511e2325a06659c707daf1d65c55d527a7bf326d12872a8b0807b62282?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3d865f511e2325a06659c707daf1d65c55d527a7bf326d12872a8b0807b62282?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3d865f511e2325a06659c707daf1d65c55d527a7bf326d12872a8b0807b62282?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500"
                      className="absolute inset-0 object-cover size-full"
                    />
                    
                  </div>
                  <div className="flex relative z-10 flex-col px-8 pt-2 pb-10 mb-0 aspect-[5.362] max-md:px-5 max-md:-mr-1">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/5eaa1bed83036d063996b8fc1d457455c7fdf218c3490e74ef325c76ace66e95?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500"
                        className="absolute inset-0 object-cover size-full"
                      />
                      Agarwal PG College
                    </div>
                    <button className='hover:bg-red-100 active:bg-red-500'>READ MORE</button>
                </div>
              </div> */}
            </div>
          </div>
          {/* <div className="flex relative flex-wrap gap-5 justify-between self-center w-full max-w-[1393px] max-md:max-w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3f9e1e04d7d44725a04c61110dbe0c580cc4c7f3f88ff64510ecf5c30e4098ff?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500"
              className="object-contain shrink-0 max-w-full aspect-[3.85] w-[150px]"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/96e32643d959fb6b8f333251db685b6dc39835908870e24fdbebaafabeb12f02?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500"
              className="object-contain aspect-[25] w-[983px] max-md:max-w-full"
            />
          </div> */}
        </div>
      </div>
      <img
        loading="lazy"
        //srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/82e010146e707f5152ed1a8a9fa901db23f23a9c8c7704a76b278b5b1da59696?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/82e010146e707f5152ed1a8a9fa901db23f23a9c8c7704a76b278b5b1da59696?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/82e010146e707f5152ed1a8a9fa901db23f23a9c8c7704a76b278b5b1da59696?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/82e010146e707f5152ed1a8a9fa901db23f23a9c8c7704a76b278b5b1da59696?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/82e010146e707f5152ed1a8a9fa901db23f23a9c8c7704a76b278b5b1da59696?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/82e010146e707f5152ed1a8a9fa901db23f23a9c8c7704a76b278b5b1da59696?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/82e010146e707f5152ed1a8a9fa901db23f23a9c8c7704a76b278b5b1da59696?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/82e010146e707f5152ed1a8a9fa901db23f23a9c8c7704a76b278b5b1da59696?placeholderIfAbsent=true&apiKey=af0f1438ef8a4472b1f9302efca0e500"
        className="object-contain mt-14 w-full aspect-[4.1] max-md:mt-10 max-md:max-w-full"
      />
      <div className="flex mt-80 w-full bg-gray-800 min-h-[443px] max-md:mt-10 max-md:max-w-full" />
    </div>
    </>
  )
}

export default App
