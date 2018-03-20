import React, { Component } from "react"
import axios from 'axios'
// import './photos.css'
const CLOUDINARYURL = 'https://api.cloudinary.com/v1_1/gexcloud/image/upload'
, CLOUDINARY_UPLOAD_PRESET = 'yltloitx'
, imgPreview = document.getElementById('img-preview')

// , imgPreview.src = res.data.secure_url




export default class Photos extends Component{
    state = {
        selectedFile : null ,
        url: 'data:image/png;base64,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'
        // imgPreview: img 
        // imgPreview.src: res.data.secure_url
    }
    fileSelectedHandler = event => {
        this.setState({
            selectedFile: event.target.files[0]
        })
        setTimeout(() => {
            const fd = new FormData()
            fd.append('file', this.state.selectedFile)
            fd.append('upload_preset', CLOUDINARY_UPLOAD_PRESET )
            axios({
                url: CLOUDINARYURL,
                method: 'POST',
                headers:{
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                data: fd
            }).then((res)=>{
                console.log(res)
                this.setState({
                    url: res.data.secure_url
                })
              
            })  
        }, .1);
    
    }
    // fileUploadHandler = () => {
    //     const fd = new FormData()
    //     fd.append('file', this.state.selectedFile)
    //     fd.append('upload_preset', CLOUDINARY_UPLOAD_PRESET )
    //     axios({
    //         url: CLOUDINARYURL,
    //         method: 'POST',
    //         headers:{
    //             'Content-Type': 'application/x-www-form-urlencoded'
    //         },
    //         data: fd
    //     }).then((res)=>{
    //         console.log(res)
    //         this.setState({
    //             url: res.data.secure_url
    //         })
          
    //     })
    // }
    render() {
        return (
            <div>
                <img  src={this.state.url} id='img-preview' className='dogPics'/> 
                <label htmlFor='file-upload' className='file-upload-container'>
                +
                    <input type='file'onChange={this.fileSelectedHandler} style={{display:'none'}} id='file-upload'/>
                </label>
                {/* <input type='file'  onChange={this.fileSelectedHandler}/> */}
                
                {/* <button onClick={this.fileUploadHandler}>Upload</button> */}
            </div>
        )
    }
}