import React from 'react'
import './ImageLinkForm.css'

const ImageLinkForm = ({onInputChange,onSubmit}) => {
    return (
        <div>
            <p className='f3'>
                {`This incredible app wiil recognize faces in your image. Give it a try.`}
            </p>
            <div className='form pa4 br3 shadow-5 center'>
                <input className='f4 pa2 w-70 center' onChange={onInputChange} type='text'/>
                <button className='w-30 grow f4 link ph3 pv2 dib white' onClick={onSubmit}>Detect</button>
            </div>

        </div>


    )
}

export default ImageLinkForm;