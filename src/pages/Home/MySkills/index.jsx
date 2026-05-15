import React from "react";
import {
  bootstrapIcon,
  cssIcon,
  gitIcon,
  htmlIcon,
  jsIcon,
  mongoIcon,
  nextIcon,
  nodeJsIcon,
  postmanIcon,
  reactIcon,
  reduxIcon,
  routerIcon,
  sassIcon,
  tailwindIcon,
  tsIcon,
} from "./TechnologyIcons";

const technologyIcons = [
  { id: 1, image: cssIcon ,title:"Css"},
  { id: 2, image: htmlIcon ,title:"Html"},
  { id: 3, image: jsIcon ,title:"JavaScript"},
  { id: 4, image: sassIcon ,title:"Scss"},
  { id: 5, image: bootstrapIcon ,title:"Bootstrap"},
  { id: 6, image: tailwindIcon ,title:"Tailwind"},
  { id: 7, image: reactIcon ,title:"React"},
  { id: 8, image: gitIcon ,title:"Git"},
  { id: 9, image: nextIcon ,title:"Next.js"},
  { id: 10, image: mongoIcon ,title:"MongoDB"},
  { id: 11, image: postmanIcon ,title:"Postman"},
  { id: 13, image: reduxIcon ,title:"Redux"},
  { id: 14, image: routerIcon ,title:"Router"},
  { id: 15, image: tsIcon ,title:"TypeScript"}
];

export default function MySkills() {
  return (
    <div className="flex flex-col gap-10 items-center">
      <h2 className="font-vazir text-4xl text-gray-200 font-bold">مهارت های من</h2>
      <div className="w-full grid xl:grid-cols-7 lg:grid-cols-6  md:grid-cols-5 sm:grid-cols-4 grid-cols-2  gap-5 xl:px-30 lg:px-17 md:px-10 sm:px-8 px-10">
        {technologyIcons.map((item) => {
          return (
            <div key={item.id} className="py-5 flex flex-col items-center justify-center gap-4 bg-[#0b0f23bc] hover:bg-purple-950/10 backdrop-blur-xl border border-purple-400/30 shadow-[0_0_3px_rgba(168,85,247,0.35)] rounded-lg">
              <img src={item.image} className="md:w-15 md:h-15 w-12 h-12"></img>
              <span className="font-vazir text-sm text-white">{item.title}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
