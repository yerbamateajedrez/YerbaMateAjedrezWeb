import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Dropdown() {
  const router = useRouter();
  const {
    query: { category, product },
  } = router;

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button>
          <a
            className={`${
              router.asPath === `/${category}`
                ? "text-white bg-lime-500 font-semibold"
                : router.asPath === `/${category}/${product}` &&
                  "text-white bg-lime-500 font-semibold"
            }  py-8 px-12 text-lg transform font-medium hover:scale-110 transition-all duration-300 ease-in-out`}
          >
            Productos
          </a>
        </Menu.Button>
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
        <Menu.Items className="absolute right-0 w-56 mt-8 origin-top-right bg-stone-200 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none overflow-hidden">
          <Menu.Item>
            <button className="w-full">
              <Link href="/yerba-mate-ajedrez">
                <a
                  className={`${
                    router.asPath === "/yerba-mate-ajedrez"
                      ? "bg-lime-500 text-white"
                      : ""
                  } group flex items-center w-full py-3 px-4 hover:bg-lime-500 hover:text-white`}
                >
                  Yerba Mate Ajedrez
                </a>
              </Link>
            </button>
          </Menu.Item>
          <Menu.Item>
            <button className="w-full">
              <Link href="/yerba-mate-taihang">
                <a
                  className={`${
                    router.asPath === "/yerba-mate-taihang"
                      ? "bg-lime-500 text-white"
                      : ""
                  } group flex items-center w-full py-3 px-4 hover:bg-lime-500 hover:text-white`}
                >
                  Yerba Mate Taihang
                </a>
              </Link>
            </button>
          </Menu.Item>

          <Menu.Item>
            <button className="w-full">
              <Link href="/azucar-mascabo">
                <a
                  className={`${
                    router.asPath === "/azucar-mascabo"
                      ? "bg-lime-500 text-white"
                      : ""
                  } group flex items-center w-full py-3 px-4 hover:bg-lime-500 hover:text-white`}
                >
                  Az&uacute;car Mascabo
                </a>
              </Link>
            </button>
          </Menu.Item>
          <Menu.Item>
            <button className="w-full">
              <Link href="/mate-cocido">
                <a
                  className={`${
                    router.asPath === "/mate-cocido"
                      ? "bg-lime-500 text-white"
                      : ""
                  } group flex items-center w-full py-3 px-4 hover:bg-lime-500 hover:text-white`}
                >
                  Mate Cocido
                </a>
              </Link>
            </button>
          </Menu.Item>
          <Menu.Item>
            <button className="w-full">
              <Link href="/fecula-de-mandioca">
                <a
                  className={`${
                    router.asPath === "/fecula-de-mandioca"
                      ? "bg-lime-500 text-white"
                      : ""
                  } group flex items-center w-full py-3 px-4 hover:bg-lime-500 hover:text-white`}
                >
                  F&eacute;cula de Mandioca
                </a>
              </Link>
            </button>
          </Menu.Item>
          <Menu.Item>
            <button className="w-full">
              <Link href="/farina-de-mandioca">
                <a
                  className={`${
                    router.asPath === "/farina-de-mandioca"
                      ? "bg-lime-500 text-white"
                      : ""
                  } group flex items-center w-full py-3 px-4 hover:bg-lime-500 hover:text-white`}
                >
                  Fari??a de Mandioca
                </a>
              </Link>
            </button>
          </Menu.Item>
          <Menu.Item>
            <button className="w-full">
              <Link href="/tinturas">
                <a
                  className={`${
                    router.asPath === "/tinturas"
                      ? "bg-lime-500 text-white"
                      : ""
                  } group flex items-center w-full py-3 px-4 hover:bg-lime-500 hover:text-white`}
                >
                  Tinturas
                </a>
              </Link>
            </button>
          </Menu.Item>
          <Menu.Item>
            <button className="w-full">
              <Link href="/te-en-hebras">
                <a
                  className={`${
                    router.asPath === "/te-en-hebras"
                      ? "bg-lime-500 text-white"
                      : ""
                  } group flex items-center w-full py-3 px-4 hover:bg-lime-500 hover:text-white`}
                >
                  T&eacute; en Hebras
                </a>
              </Link>
            </button>
          </Menu.Item>

          <Menu.Item>
            <button className="w-full">
              <Link href="/productos">
                <a
                  className={`${
                    router.asPath === "/otros-productos"
                      ? "bg-lime-500 text-white"
                      : ""
                  } group flex items-center w-full py-3 px-4 hover:bg-lime-500 hover:text-white`}
                >
                  Otros Productos
                </a>
              </Link>
            </button>
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
