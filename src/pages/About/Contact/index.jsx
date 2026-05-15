import { contactInfo, socialLinks } from "../../../data/contact";

export default function ContactCard() {


  return (
    <div className="w-full flex justify-center px-4 py-10 font-vazir">
      <div className="max-w-xl w-full bg-linear-to-b from-[#1b1034] to-[#120a24] p-6 rounded-3xl shadow-xl border border-white/10">
        
        <h2 className="text-center text-white font-bold text-xl mb-6">
          اطلاعات تماس
        </h2>

        <div className="space-y-4 mb-6">
          {contactInfo.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target={item.link ? "_blank" : "_self"}
              rel="noopener noreferrer"
              className={` flex flex-row-reverse items-center justify-between p-3 rounded-xl shadow-sm border border-white/10 transition  bg-[#2a1f4d]/60 hover:bg-[#3a2b6d]/70`}
            >
              <div className="text-purple-300 mr-3 text-xl">
                <item.icon />
              </div>
              <div className="ftext-right">
                <span className="block text-xs text-gray-400">{item.label}</span>
                <span className="block text-white font-medium">{item.value}</span>
              </div>
            </a>
          ))}
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-4 pt-4 border-t border-white/10">
          {socialLinks.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-300 hover:text-purple-400 transition text-3xl"
            >
              <item.icon />
            </a>
          ))}
        </div>

      </div>
    </div>
  );
}
