import Project1Img from "../assets/PROJECT1.jpeg";
import Project2Img from "../assets/PROJECT2.jpeg";
import Project3Img from "../assets/PROJECT3.jpeg";
import Project4Img from "../assets/PROJECT4.jpeg";

export default function Project() {
  return (
    <>
      <div className="bg-indigo-800 m-20 max-w-full">
        <div className="grid justify-items-center m-10">
          <h1 className="text-3xl text-white mt-10">Projects</h1>
        </div>
        <div>
          <div className="grid grid-cols-2 gap-4 p-5">
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse">
              <div className="md:flex">
                <div className="p-8">
                  <div className="uppercase tracking-wide text-sm to-indigo-500 font-semibold">
                    Hospital Management System
                  </div>
                  <a href="#">Subheading</a>
                  <p className="mt-2 text-slate-500">
                    is a computer system that helps manage the information
                    related to healthcare and aids in job completion of
                    healthcare providers effectively.
                  </p>
                </div>
                <div className="md:shrink-0 p-8">
                    <img className="rounded-full" src={Project1Img} alt="Project1" width={200} height={100} />
                </div>
              </div>
            </div>
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse">
              <div className="md:flex">
                <div className="md:shrink-0 p-8">
                    <img className="rounded-full" src={Project2Img} alt="Project2" width={200} height={100} />
                </div>
                <div className="p-8">
                  <div className="uppercase tracking-wide text-sm to-indigo-500 font-semibold">
                    School Management System
                  </div>
                  <a href="#">Subheading</a>
                  <p className="mt-2 text-slate-500">
                    is a computer system that helps manage the information
                    related to healthcare and aids in job completion of
                    healthcare providers effectively.
                  </p>
                </div>

              </div>
            </div>
          </div>
          <hr />
          <div className="grid grid-cols-2 gap-4 p-5">
          <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse">
              <div className="md:flex">
                <div className="p-8">
                  <div className="uppercase tracking-wide text-sm to-indigo-500 font-semibold">
                    Inventory Management System
                  </div>
                  <a href="#">Subheading</a>
                  <p className="mt-2 text-slate-500">
                    is a computer system that helps manage the information
                    related to healthcare and aids in job completion of
                    healthcare providers effectively.
                  </p>
                </div>
                <div className="md:shrink-0 p-8">
                    <img className="rounded-full" src={Project3Img} alt="Project3" width={200} height={100} />
                </div>
              </div>
            </div>
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse">
              <div className="md:flex">                
                <div className="md:shrink-0 p-8">
                    <img className="rounded-full" src={Project4Img} alt="Project4" width={200} height={100} />
                </div>
                <div className="p-8">
                  <div className="uppercase tracking-wide text-sm to-indigo-500 font-semibold">
                    POS Management System
                  </div>
                  <a href="#">Subheading</a>
                  <p className="mt-2 text-slate-500">
                    is a computer system that helps manage the information
                    related to healthcare and aids in job completion of
                    healthcare providers effectively.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
