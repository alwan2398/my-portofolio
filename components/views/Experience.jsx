import React from "react";
import { TimeLine, TimeLineItem } from "../utils/exp-timeline";

const Experience = () => {
  return (
    <div className="w-full relative pt-10 pb-20">
      <TimeLine>
        <TimeLineItem active>
          <TimeLineItem.Title>
            <span className="font-medium transition-all hover:text-white hover:underline hover:underline-offset-2">
              Software Developer (Freelance)
            </span>{" "}
            • <span className="text-neutral-200">Aug 2023 - Sekarang</span>
          </TimeLineItem.Title>
          <TimeLineItem.Description>
            Menggembangkan Website menggunakan React & Next.js dan Tailwind CSS
            dan Teknologi lainnya, pada proses membangun dan penambahan fitur
            baru dalam proyek.
          </TimeLineItem.Description>
        </TimeLineItem>

        <TimeLineItem last>
          <TimeLineItem.Title>
            <span className="font-medium transition-all hover:text-white hover:underline hover:underline-offset-2">
              UI / UX Designer (Internship)
            </span>{" "}
            • <span className="text-neutral-200">March 2022 - Aug 2022</span>
          </TimeLineItem.Title>
          <TimeLineItem.Description>
            Membuat Solusi keseimbangan pada antarmuka pengguna dan desain yang
            fungsional dan membuat protype dengan Figma untuk proyek aplikasi
            seluler E-Open.
          </TimeLineItem.Description>
        </TimeLineItem>
      </TimeLine>
    </div>
  );
};

export default Experience;
