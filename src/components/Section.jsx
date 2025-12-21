import React from "react";

const Section = () => {
  return (
    <>
      <section className="flex flex-col md:flex-row justify-center gap-2 md:h-[60vh] items-stretch w-[98%] mx-auto mt-10">
        <div className="img h-full md:w-1/2 w-full overflow-hidden rounded-md  ">
          <img
            className="object-cover w-full h-full"
            src="/shadowgirl.jpg"
            alt=""
          />
        </div>
        <div className="content h-full md:w-1/2 w-full flex flex-col items-center justify-center gap-2">
          <box className="bg-[#1e1e1e] md:h-1/2 p-6 flex flex-col justify-center items-center gap-4 rounded-md">
            <h4>INDEPENDENT DESIGNERS</h4>
            <p className="text-[#8d8d8d] text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At
              accusamus dignissimos quia esse deserunt est quos adipisci quaerat
              tempore aperiam! Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Repellendus veritatis quia adipisci harum
              aliquid esse debitis accusantium, alias cupiditate nostrum.
            </p>
          </box>
          <box className="bg-[#1e1e1e] md:h-1/2 p-6 flex flex-col justify-center items-center gap-4 rounded-md">
            <h4>EXCLUSIVE & UNIQUITY</h4>
            <p className="text-[#8d8d8d] text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At
              accusamus dignissimos quia esse deserunt est quos adipisci quaerat
              tempore aperiam! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Excepturi aut harum ea dicta recusandae esse
              porro optio quasi quod molestiae.
            </p>
          </box>
        </div>
      </section>
      <section className="flex flex-col md:flex-row justify-center  gap-2 md:h-[60vh] items-stretch w-[98%] mx-auto my-10">
        <div className="content h-full md:w-1/2 w-full flex flex-col items-center justify-center gap-2">
          <box className="bg-[#1e1e1e] md:h-1/2 p-6 flex flex-col justify-center items-center gap-4 rounded-md">
            <h4>HIGH QUALITY</h4>
            <p className="text-[#8d8d8d] text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At
              accusamus dignissimos quia esse deserunt est quos adipisci quaerat
              tempore aperiam! Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Repellendus veritatis quia adipisci harum
              aliquid esse debitis accusantium, alias cupiditate nostrum.
            </p>
          </box>
          <box className="bg-[#1e1e1e] md:h-1/2 p-6 flex flex-col justify-center items-center gap-4 rounded-md">
            <h4>ECO-FRIENDLY</h4>
            <p className="text-[#8d8d8d] text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At
              accusamus dignissimos quia esse deserunt est quos adipisci quaerat
              tempore aperiam! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Excepturi aut harum ea dicta recusandae esse
              porro optio quasi quod molestiae.
            </p>
          </box>
        </div>
        <div className="img h-full md:w-1/2 w-full overflow-hidden rounded-md  ">
          <img
            className="object-cover w-full h-full"
            src="/skeleton.jpg"
            alt=""
          />
        </div>
      </section>
    </>
  );
};

export default Section;
