import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu"
import { IoClose } from "react-icons/io5"
import { motion } from "framer-motion"
function Card({ data, reference}) {
    return (
        <motion.div drag dragConstraints={reference} whileDrag={{scale:1.1}}className='flex-shrink-0 relative w-60 h-72 rounded-[35px] bg-zinc-900 py-10 px-8 text-white overflow-hidden'>
            <FaRegFileAlt />
            <p className='text-sm mt-5 font-semibold' >{data.desc}</p>
            <div className='footer absolute bottom-0  w-full  left-0'>
                <div className='flex items-center justify-between py-1 px-8 mb-3'>
                    <h5>{data.filesize}</h5>
                    <span className={`w-7 h-7 ${data.close ? "bg-blue-900" : "bg-green-900"} rounded-full flex items-center justify-center`}>
                        {data.close ? <IoClose /> : <LuDownload size=".7em" color="#fff" />}

                    </span>
                </div>
                {
                    data.tag.isOpen ? (
                        <div className={`tag w-full p-4  ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center font-semibold`}>
                            <h3 className='text-md'>{data.tag.tagTitle}</h3>
                        </div>
                    ) : null

                }

            </div>
        </motion.div>
    )
}

export default Card