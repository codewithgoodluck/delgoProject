import React, { useState } from "react";

function Navbar() {
  let Links = [{ name: "input" }];
  let [Open, setOpen] = useState(false);
  return (
    <>
      <section>
        <div className=" flex justify-end mt-6 md:mr-8">
          {/* <div className="md:flex bg-white py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins]">
          <span className="text-3xl text-indigo-600 mr-1 pt-2">icon</span>
          Designer
        </div>
        <ul></ul>

      </div> */}

          <div className="flex  fixed mr-[19vw] -z-0 md:mr-[50vw] ">
            <div class="flex  h-80  w-[60vw] border-2 rounded md:w-full">
              <button class="flex  bg-inputColor items-center justify-center px-4  ">
                <svg
                  width="24"
                  viewBox="0 0 24 24"
                  fill="bg-inputColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.4996 10.875C16.4996 11.9875 16.1697 13.0751 15.5516 14.0001C14.9335 14.9251 14.055 15.6461 13.0272 16.0718C11.9994 16.4976 10.8684 16.609 9.77723 16.3919C8.68608 16.1749 7.6838 15.6391 6.89713 14.8525C6.11046 14.0658 5.57473 13.0635 5.35769 11.9724C5.14065 10.8812 5.25204 9.75024 5.67779 8.72241C6.10353 7.69457 6.8245 6.81607 7.74953 6.19798C8.67455 5.5799 9.76209 5.25 10.8746 5.25C12.3659 5.25169 13.7957 5.84487 14.8502 6.89939C15.9047 7.95392 16.4979 9.38368 16.4996 10.875ZM21.5294 21.5304C21.3888 21.6711 21.198 21.7501 20.9991 21.7501C20.8001 21.7501 20.6094 21.6711 20.4687 21.5304L16.4165 17.4783C14.7122 18.9092 12.5213 19.6269 10.3006 19.4817C8.08 19.3366 6.00111 18.3398 4.49749 16.6993C2.99387 15.0587 2.18161 12.9011 2.23008 10.6762C2.27855 8.45139 3.18402 6.33114 4.75766 4.75763C6.3313 3.18413 8.45163 2.27884 10.6765 2.23057C12.9013 2.18229 15.0589 2.99474 16.6993 4.4985C18.3398 6.00226 19.3363 8.08123 19.4813 10.3019C19.6262 12.5225 18.9083 14.7134 17.4773 16.4176L21.5294 20.4698C21.6701 20.6104 21.7491 20.8012 21.7491 21.0001C21.7491 21.199 21.6701 21.3898 21.5294 21.5304ZM10.8746 18C12.2838 18 13.6613 17.5821 14.833 16.7992C16.0047 16.0163 16.918 14.9035 17.4573 13.6016C17.9965 12.2997 18.1376 10.8671 17.8627 9.48498C17.5878 8.10287 16.9092 6.83331 15.9127 5.83686C14.9163 4.84042 13.6467 4.16182 12.2646 3.8869C10.8825 3.61199 9.44991 3.75308 8.14799 4.29236C6.84607 4.83163 5.73329 5.74486 4.95039 6.91656C4.16748 8.08826 3.74961 9.46581 3.74961 10.875C3.75175 12.764 4.5031 14.575 5.83883 15.9108C7.17457 17.2465 8.9856 17.9979 10.8746 18Z"
                    fill="#45444B"
                  />
                </svg>
              </button>
              <input
                class="px-4 bg-inputColor  py-2 h-[10] w-100"
                placeholder="Search...me"
              />
            </div>
          </div>
          
          {/* 
          DESKTOP */}

          <div className=" hidden md:flex justify-between content-center  w-50 ">
            <div className="py-2 ">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.262 9.77494C22.2393 9.67069 22.1947 9.57248 22.1311 9.48684C22.0674 9.40121 21.9863 9.33014 21.893 9.27836L19.664 8.04098C19.5407 7.80184 19.4058 7.56788 19.2609 7.34152L19.3038 4.79035C19.3056 4.68365 19.2847 4.57779 19.2423 4.47985C19.1999 4.38191 19.1371 4.29414 19.0581 4.22241C17.9483 3.21306 16.6337 2.45525 15.2041 2.00079C15.1025 1.96828 14.9951 1.95781 14.8891 1.97008C14.7832 1.98236 14.681 2.01709 14.5896 2.07197L12.4035 3.38369C12.1345 3.37087 11.8644 3.37065 11.5962 3.38305L9.40824 2.07023C9.31672 2.01533 9.21454 1.98059 9.10852 1.96832C9.00251 1.95605 8.8951 1.96655 8.79346 1.99909C7.36448 2.45555 6.05089 3.21515 4.94248 4.22598C4.86351 4.29771 4.80076 4.38547 4.75841 4.48338C4.71606 4.5813 4.69509 4.68712 4.69688 4.79379L4.73978 7.34284C4.59439 7.56921 4.45912 7.80303 4.33557 8.04167L2.10471 9.2801C2.0114 9.3319 1.93023 9.40301 1.8666 9.48868C1.80298 9.57436 1.75836 9.67262 1.73575 9.77691C1.4165 11.2427 1.41753 12.7601 1.73877 14.2254C1.76142 14.3297 1.80605 14.4279 1.86967 14.5135C1.9333 14.5991 2.01445 14.6702 2.10773 14.722L4.33672 15.9594C4.46008 16.1985 4.59489 16.4325 4.73982 16.6588L4.69689 19.21C4.69509 19.3167 4.71609 19.4226 4.75847 19.5205C4.80085 19.6184 4.86365 19.7062 4.94266 19.7779C6.05242 20.7873 7.36704 21.5451 8.79666 21.9996C8.89826 22.0321 9.00562 22.0425 9.11159 22.0303C9.21756 22.018 9.31968 21.9833 9.41116 21.9284L11.5973 20.6167C11.8661 20.6294 12.1362 20.6297 12.4046 20.6173L14.5925 21.9301C14.684 21.985 14.7862 22.0198 14.8922 22.032C14.9982 22.0443 15.1056 22.0338 15.2073 22.0013C16.6363 21.5448 17.9498 20.7852 19.0583 19.7744C19.1372 19.7026 19.2 19.6149 19.2423 19.517C19.2847 19.4191 19.3056 19.3132 19.3038 19.2066L19.261 16.6575C19.4063 16.4311 19.5416 16.1973 19.6652 15.9587L21.896 14.7203C21.9893 14.6685 22.0705 14.5973 22.1341 14.5117C22.1978 14.426 22.2424 14.3277 22.265 14.2234C22.5842 12.7577 22.5832 11.2403 22.262 9.77494ZM16.1254 12.0002C16.1254 12.816 15.8834 13.6136 15.4302 14.2919C14.9769 14.9703 14.3327 15.499 13.5789 15.8112C12.8252 16.1234 11.9958 16.2051 11.1956 16.0459C10.3955 15.8868 9.66045 15.4939 9.08355 14.917C8.50666 14.3401 8.11379 13.6051 7.95463 12.8049C7.79547 12.0048 7.87715 11.1754 8.18937 10.4216C8.50158 9.66787 9.03029 9.02363 9.70864 8.57037C10.387 8.11711 11.1845 7.87518 12.0004 7.87518C13.094 7.87642 14.1425 8.31141 14.9158 9.08473C15.6891 9.85805 16.1241 10.9065 16.1254 12.0002Z"
                  fill="#45444B"
                />
              </svg>
            </div>
            

            <div className="py-2 ">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.7014 16.4944C20.145 15.5366 19.4817 13.7192 19.4817 10.5V9.83472C19.4817 5.68299 16.1511 2.28061 12.0571 2.25022C12.038 2.25012 12.019 2.25003 11.9999 2.25003C10.0133 2.25261 8.10913 3.04423 6.70622 4.45075C5.30331 5.85726 4.51658 7.76347 4.5191 9.75003V10.5C4.5191 13.719 3.85543 15.5363 3.29879 16.494C3.16583 16.7218 3.09528 16.9806 3.09425 17.2443C3.09322 17.508 3.16175 17.7674 3.29293 17.9962C3.4241 18.225 3.61329 18.4151 3.84141 18.5475C4.06953 18.6798 4.32851 18.7497 4.59225 18.75H8.25005C8.25005 19.7446 8.64514 20.6984 9.3484 21.4017C10.0517 22.1049 11.0055 22.5 12.0001 22.5C12.9946 22.5 13.9484 22.1049 14.6517 21.4017C15.355 20.6984 15.7501 19.7446 15.7501 18.75H19.4079C19.6716 18.7497 19.9305 18.6799 20.1586 18.5475C20.3867 18.4152 20.5759 18.2251 20.707 17.9963C20.8382 17.7676 20.9068 17.5083 20.9058 17.2446C20.9048 16.9809 20.8343 16.7221 20.7014 16.4944V16.4944ZM12.0001 21C11.4035 20.9994 10.8316 20.7621 10.4098 20.3403C9.98801 19.9185 9.75074 19.3466 9.75005 18.75H14.2501C14.2494 19.3466 14.0121 19.9185 13.5903 20.3403C13.1685 20.7621 12.5966 20.9994 12.0001 21Z"
                  fill="#45444B"
                />
              </svg>
            </div>

           

            <div className="py-2  flex">
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 15.375C14.2782 15.375 16.125 13.5282 16.125 11.25C16.125 8.97183 14.2782 7.125 12 7.125C9.72183 7.125 7.875 8.97183 7.875 11.25C7.875 13.5282 9.72183 15.375 12 15.375Z"
                  fill="#476EF8"
                />
                ''
                <path
                  d="M12 2.25C10.0716 2.25 8.18657 2.82183 6.58319 3.89317C4.97982 4.96451 3.73013 6.48726 2.99218 8.26884C2.25422 10.0504 2.06114 12.0108 2.43735 13.9021C2.81355 15.7934 3.74215 17.5307 5.10571 18.8943C6.46928 20.2579 8.20656 21.1865 10.0979 21.5627C11.9892 21.9389 13.9496 21.7458 15.7312 21.0078C17.5127 20.2699 19.0355 19.0202 20.1068 17.4168C21.1782 15.8134 21.75 13.9284 21.75 12C21.7471 9.41504 20.7189 6.93679 18.8911 5.10894C17.0632 3.28109 14.585 2.25293 12 2.25ZM18.1648 17.476C17.5628 16.6037 16.782 15.8695 15.8744 15.3221C14.8308 16.3188 13.4432 16.875 12 16.875C10.5569 16.875 9.16923 16.3188 8.12558 15.3221C7.218 15.8695 6.43724 16.6037 5.83516 17.476C4.77814 16.2874 4.08725 14.8186 3.84568 13.2464C3.60411 11.6743 3.82217 10.0658 4.4736 8.6147C5.12502 7.16361 6.18204 5.93177 7.51737 5.06752C8.85269 4.20327 10.4094 3.74346 12 3.74346C13.5906 3.74346 15.1473 4.20327 16.4826 5.06752C17.8179 5.93177 18.875 7.16361 19.5264 8.6147C20.1778 10.0658 20.3959 11.6743 20.1543 13.2464C19.9127 14.8186 19.2218 16.2874 18.1648 17.476Z"
                  fill="#476EF8"
                />
              </svg>

              <p className="px-2">John Doe</p>
            </div>
          
            <button className="bg-buttonColor font-[Poppins] py-2 mt-1 px-2 rounded   text-white text-xs pl-4 w-40 h-90">
              GO BACK TO MODULES LIST
            </button>
          </div>

          {/* MOBILE */}

          {!Open ? (
            <svg
              onClick={() => setOpen(!Open)}
              className="fixed md:hidden z-0 flex items-center right-4 cursor-pointer  top-6"
              fill="#2563EB"
              viewBox="0 0 100 80"
              width="40"
              height="40"
            >
              <rect width="100" height="10"></rect>
              <rect y="30" width="100" height="10"></rect>
              <rect y="60" width="100" height="10"></rect>
            </svg>
          ) : (
            <div className="flex flex-col flex-col-reverse bg-inputColor z-40 justify-end">
              <button className="bg-buttonColor font-[Poppins] py-2 mt-1 px-2 rounded md:ml-8  text-white text-xs">
                MODULES LIST
              </button>

              <div className="py-1">
                <svg
                  width="24"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.262 9.77494C22.2393 9.67069 22.1947 9.57248 22.1311 9.48684C22.0674 9.40121 21.9863 9.33014 21.893 9.27836L19.664 8.04098C19.5407 7.80184 19.4058 7.56788 19.2609 7.34152L19.3038 4.79035C19.3056 4.68365 19.2847 4.57779 19.2423 4.47985C19.1999 4.38191 19.1371 4.29414 19.0581 4.22241C17.9483 3.21306 16.6337 2.45525 15.2041 2.00079C15.1025 1.96828 14.9951 1.95781 14.8891 1.97008C14.7832 1.98236 14.681 2.01709 14.5896 2.07197L12.4035 3.38369C12.1345 3.37087 11.8644 3.37065 11.5962 3.38305L9.40824 2.07023C9.31672 2.01533 9.21454 1.98059 9.10852 1.96832C9.00251 1.95605 8.8951 1.96655 8.79346 1.99909C7.36448 2.45555 6.05089 3.21515 4.94248 4.22598C4.86351 4.29771 4.80076 4.38547 4.75841 4.48338C4.71606 4.5813 4.69509 4.68712 4.69688 4.79379L4.73978 7.34284C4.59439 7.56921 4.45912 7.80303 4.33557 8.04167L2.10471 9.2801C2.0114 9.3319 1.93023 9.40301 1.8666 9.48868C1.80298 9.57436 1.75836 9.67262 1.73575 9.77691C1.4165 11.2427 1.41753 12.7601 1.73877 14.2254C1.76142 14.3297 1.80605 14.4279 1.86967 14.5135C1.9333 14.5991 2.01445 14.6702 2.10773 14.722L4.33672 15.9594C4.46008 16.1985 4.59489 16.4325 4.73982 16.6588L4.69689 19.21C4.69509 19.3167 4.71609 19.4226 4.75847 19.5205C4.80085 19.6184 4.86365 19.7062 4.94266 19.7779C6.05242 20.7873 7.36704 21.5451 8.79666 21.9996C8.89826 22.0321 9.00562 22.0425 9.11159 22.0303C9.21756 22.018 9.31968 21.9833 9.41116 21.9284L11.5973 20.6167C11.8661 20.6294 12.1362 20.6297 12.4046 20.6173L14.5925 21.9301C14.684 21.985 14.7862 22.0198 14.8922 22.032C14.9982 22.0443 15.1056 22.0338 15.2073 22.0013C16.6363 21.5448 17.9498 20.7852 19.0583 19.7744C19.1372 19.7026 19.2 19.6149 19.2423 19.517C19.2847 19.4191 19.3056 19.3132 19.3038 19.2066L19.261 16.6575C19.4063 16.4311 19.5416 16.1973 19.6652 15.9587L21.896 14.7203C21.9893 14.6685 22.0705 14.5973 22.1341 14.5117C22.1978 14.426 22.2424 14.3277 22.265 14.2234C22.5842 12.7577 22.5832 11.2403 22.262 9.77494ZM16.1254 12.0002C16.1254 12.816 15.8834 13.6136 15.4302 14.2919C14.9769 14.9703 14.3327 15.499 13.5789 15.8112C12.8252 16.1234 11.9958 16.2051 11.1956 16.0459C10.3955 15.8868 9.66045 15.4939 9.08355 14.917C8.50666 14.3401 8.11379 13.6051 7.95463 12.8049C7.79547 12.0048 7.87715 11.1754 8.18937 10.4216C8.50158 9.66787 9.03029 9.02363 9.70864 8.57037C10.387 8.11711 11.1845 7.87518 12.0004 7.87518C13.094 7.87642 14.1425 8.31141 14.9158 9.08473C15.6891 9.85805 16.1241 10.9065 16.1254 12.0002Z"
                    fill="#45444B"
                  />
                </svg>
              </div>
              <div className="py-1 ">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.7014 16.4944C20.145 15.5366 19.4817 13.7192 19.4817 10.5V9.83472C19.4817 5.68299 16.1511 2.28061 12.0571 2.25022C12.038 2.25012 12.019 2.25003 11.9999 2.25003C10.0133 2.25261 8.10913 3.04423 6.70622 4.45075C5.30331 5.85726 4.51658 7.76347 4.5191 9.75003V10.5C4.5191 13.719 3.85543 15.5363 3.29879 16.494C3.16583 16.7218 3.09528 16.9806 3.09425 17.2443C3.09322 17.508 3.16175 17.7674 3.29293 17.9962C3.4241 18.225 3.61329 18.4151 3.84141 18.5475C4.06953 18.6798 4.32851 18.7497 4.59225 18.75H8.25005C8.25005 19.7446 8.64514 20.6984 9.3484 21.4017C10.0517 22.1049 11.0055 22.5 12.0001 22.5C12.9946 22.5 13.9484 22.1049 14.6517 21.4017C15.355 20.6984 15.7501 19.7446 15.7501 18.75H19.4079C19.6716 18.7497 19.9305 18.6799 20.1586 18.5475C20.3867 18.4152 20.5759 18.2251 20.707 17.9963C20.8382 17.7676 20.9068 17.5083 20.9058 17.2446C20.9048 16.9809 20.8343 16.7221 20.7014 16.4944V16.4944ZM12.0001 21C11.4035 20.9994 10.8316 20.7621 10.4098 20.3403C9.98801 19.9185 9.75074 19.3466 9.75005 18.75H14.2501C14.2494 19.3466 14.0121 19.9185 13.5903 20.3403C13.1685 20.7621 12.5966 20.9994 12.0001 21Z"
                    fill="#45444B"
                  />
                </svg>
              </div>

              <div className="">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 15.375C14.2782 15.375 16.125 13.5282 16.125 11.25C16.125 8.97183 14.2782 7.125 12 7.125C9.72183 7.125 7.875 8.97183 7.875 11.25C7.875 13.5282 9.72183 15.375 12 15.375Z"
                    fill="#476EF8"
                  />
                  ''
                  <path
                    d="M12 2.25C10.0716 2.25 8.18657 2.82183 6.58319 3.89317C4.97982 4.96451 3.73013 6.48726 2.99218 8.26884C2.25422 10.0504 2.06114 12.0108 2.43735 13.9021C2.81355 15.7934 3.74215 17.5307 5.10571 18.8943C6.46928 20.2579 8.20656 21.1865 10.0979 21.5627C11.9892 21.9389 13.9496 21.7458 15.7312 21.0078C17.5127 20.2699 19.0355 19.0202 20.1068 17.4168C21.1782 15.8134 21.75 13.9284 21.75 12C21.7471 9.41504 20.7189 6.93679 18.8911 5.10894C17.0632 3.28109 14.585 2.25293 12 2.25ZM18.1648 17.476C17.5628 16.6037 16.782 15.8695 15.8744 15.3221C14.8308 16.3188 13.4432 16.875 12 16.875C10.5569 16.875 9.16923 16.3188 8.12558 15.3221C7.218 15.8695 6.43724 16.6037 5.83516 17.476C4.77814 16.2874 4.08725 14.8186 3.84568 13.2464C3.60411 11.6743 3.82217 10.0658 4.4736 8.6147C5.12502 7.16361 6.18204 5.93177 7.51737 5.06752C8.85269 4.20327 10.4094 3.74346 12 3.74346C13.5906 3.74346 15.1473 4.20327 16.4826 5.06752C17.8179 5.93177 18.875 7.16361 19.5264 8.6147C20.1778 10.0658 20.3959 11.6743 20.1543 13.2464C19.9127 14.8186 19.2218 16.2874 18.1648 17.476Z"
                    fill="#476EF8"
                  />
                </svg>
              </div>
              <p className="">John Doe</p>
              <button
                className="text-xl text-black fixed top-5 ml-20"
                onClick={() => setOpen(!Open)}
              >
                x
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default Navbar;
