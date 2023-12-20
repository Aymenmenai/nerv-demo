// import { useStore } from "@/components/logic/global-state";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";

export default function DropDown({ btn }) {
  //   const setLanguage = useStore((state) => state.setLanguage);
  const lang = [
    { name: "العربية", value: "ar" }, // Arabic
    { name: "Français", value: "fr" }, // French
    { name: "English", value: "en" },
    { name: "Magyar", value: "hu" },
    { name: "Deutsch", value: "de" }, // German
    { name: "中文", value: "zh" }, // Chinese
    { name: "Русский", value: "ru" }, // Russian
    { name: "Español", value: "es" }, // Spanish
    { name: "Italiano", value: "it" }, // Italian
    { name: "日本語", value: "ja" }, // Japanese
    // { name: "Polski", value: "pl" }, // Japanese
    { name: "Netherlands", value: "nl" }, // Japanese
    { name: "Türkçe", value: "tr" }, // Japanese
    { name: "한국어", value: "ko" }, // Japanese
    { name: "Português", value: "pt" }, // Japanese
  ];

  return (
    <div className="">
      <Menu as="div" className="relative  inline-block text-left ">
        <div>
          <Menu.Button className="bg-yellow-400 w-5 h-5 relative cursor-pointer z-50">{btn}</Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="z-50 overflow-hidden grid  grid-cols-2 w-96 absolute right-0 mt-2 origin-top-right rounded bg-white shadow ">
            {lang.map((el, index) => {
              return (
                <div key={index} className="">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        onClick={() => {}}
                        // onClick={() => setLanguage(el.value)}
                        className={`${
                          active ? "" : ""
                        } group flex w-full hover:bg-slate-300 items-center justify-center  px-3 py-3 text-sm`}
                      >
                        {el.name}
                      </button>
                    )}
                  </Menu.Item>
                </div>
              );
            })}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
