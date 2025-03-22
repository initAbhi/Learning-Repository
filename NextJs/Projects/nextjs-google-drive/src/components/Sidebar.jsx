import { CldUploadWidget } from 'next-cloudinary'
import React from 'react'

const Sidebar = ({onHandleNewUpload}) => {
  return (
  <article className="side-bar">
    <CldUploadWidget uploadPreset='drive_clone' onSuccess={(result) => {
        console.log(result)
        onHandleNewUpload(result.info)
    }} onQueuesEnd={(result, {widget}) => {
        widget.close()
    }} >{({open}) => {
        function handleOnClick() {
            open()
        }
        return (<button onClick={handleOnClick} className='new-button'>New</button>)
    }}</CldUploadWidget>
    <ul>
        <li>Home</li>
        <li>Activity</li>
        <li>Workspaces</li>
        <br />
        <li>My Drive</li>
        <li>Shared Drives</li>
        <br />
        <li>Shared with me</li>
        <li>Recent</li>
        <li>Starred</li>
        <br />
        <li>Spam</li>        
        <li>Trash</li>        
        <li>Storage</li>        
    </ul>
  </article>
  )
}

export default Sidebar
