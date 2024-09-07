import React, { useState } from 'react'
import { FaFileWord } from "react-icons/fa6";
import axios from 'axios'

function Home() {
    const [selectedFile, setSelectedFile] = useState(null)
    const [convert, setConvert] = useState("")
    const [downloadError, setDownloadError] = useState("")

    const handleFileChange = (e) => {
        // console.log(e.target.files[0])
        setSelectedFile(e.target.files[0])
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        if(!selectedFile) {
            setConvert("Please select a file !")
            return
        }
        const formData = new FormData()
        formData.append("file", selectedFile)
        setConvert("Processing...")
        try {
            const response = await axios.post("http://localhost:3000/convertFile", formData, {
                responseType: "blob"
            })
            const url = window.URL.createObjectURL(new Blob([response.data]))
            const link = document.createElement("a")
            link.href=url
            link.setAttribute("download", selectedFile.name.replace(/\.[^/.]+$/,"")+".pdf")
            document.body.appendChild(link)
            link.click()
            link.parentNode.removeChild(link)
            setSelectedFile(null)
            setDownloadError("")
            setConvert("File Converted successfully")
           setTimeout(() => {
            window.location.reload()
           }, 3000)
        } catch (error) {
            console.log(error)
            if(error.response && error.response.status == 400) {
                setDownloadError("Error : ", error.response.data.message)
            }
            else {
                setConvert("")
            }
        }
    }
  return (
    <>
        <div className='max-w-screen-2xl container mx-auto px-6 md:px-40 font-poppins bg-lime-400'>
            <div className='flex h-screen items-center justify-center'>
                <div className='border-4 border-dashed px-4 py-3 md:px-8 md:py-6 border-pink-500 rounded-md shadow-lg bg-pink-100'>
                    <h1 className='text-3xl text-center font-bold mb-4 font-Pixelify_sans '>Convert your Word Document to PDF Online</h1>
                    <p className='text-sm text-center mb-5 '>Welcome to our Word to PDF converter, your one-stop solution for fast and easy document conversion! 
                        <br></br> 
                        No sign-ups, no downloads—just upload your file, and let us do the rest.
                    </p>
                
                <div className='flex flex-col items-center space-y-4'>
                    <input type='file' accept='.doc, .docx' className='hidden' id='FileInput' onChange={handleFileChange}></input>
                    <label htmlFor="FileInput" className='w-full flex items-center justify-center px-4 py-6 bg-gray-300 text-gray-800 rounded-lg shadow-2xl cursor-pointer border-blue-300 hover:bg-pink-500 duration-300 hover:text-white'>
                    <FaFileWord />
                    <span className='text-xl mr-2 '>{selectedFile? selectedFile.name : "CHOOSE FILE"}</span>
                    </label>
                    <button onClick={handleSubmit} disabled={!selectedFile} className='bg-pink-500 text-white rounded-lg hover:bg-pink-800 font-bold duration-200 px-4 py-2 disabled:bg-lime-300 disabled:pointer-events-none disabled:text-gray-700'>Convert File
                    </button>
                    {convert && (<div className='text-lime-500 text-center text-bold'> {convert} </div>)}

                    {downloadError && (<div className='text-red-500 text-center'> {downloadError} </div>)}
                </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Home
