import React, { useState } from 'react'

export default function About(props) {

  //    const [mystyle, setMyStyle] = useState ({
  //     color: '#2b1b17 ',
  //     backgroundColor: ' white',

  //    })
  let mystyle = {
    color: props.mode === 'dark' ? 'white' : `#1b1b17`,
    backgroundColor: props.mode === 'dark' ? `#1b1b17` : 'white',

  }
  //    const [btntext,setBtnText] = useState("Enable Dark Mode")

  //    const toggleStyle = ()=> {
  //     if (mystyle.color ==='#2b1b17'){
  //       setMyStyle({
  //         color: 'white',
  //         backgroundColor: '#2b1b17',
  //         border: '1px solid white'
  //       })
  //       setBtnText("Enable Light Mode")
  //     }
  //     else{
  //         setMyStyle({

  //             color: '#2b1b17',
  //             backgroundColor: 'white'
  //       })
  //       setBtnText("Enable Dark Mode")

  //      }
  //     }

  return (
    <div className='container my-2' style={{ color: props.mode === 'dark' ? 'white' : `#1b1b17` }}>
      <h2 className='my-2'>About Us</h2>
      <div className="accordion" id="accordionExample" style={mystyle}>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              <b>Analyze Your Text</b>
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={mystyle}>
              <strong>This is the first statement.</strong>Analyzing your text involves breaking down and examining the content to understand its structure, meaning, and purpose. This process includes evaluating language use, tone, and style, as well as identifying key themes and ideas. It helps to clarify the message, improve readability, and ensure the text effectively communicates its intended purpose to the audience. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              <b> Free To Use</b>
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={mystyle}>
              <strong>This is the second Statement.</strong> "Free to use" means that a product, service, or content is available without any cost or financial commitment. Users can access, utilize, or enjoy the resource without restrictions, though some terms or limitations may still apply. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              <b>Browser Compatible</b>
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={mystyle}>
              <strong>This is the third Statement.</strong> "Browser compatible" means that a website or application functions correctly across different web browsers, such as Chrome, Firefox, Safari, and Edge. This ensures a consistent user experience regardless of the browser used to access the content. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container my-3">
        <button onClick={toggleStyle} type="button" className="btn btn-info">{btntext}</button>
        </div> */}
    </div>
  )
}
