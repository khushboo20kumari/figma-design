// import React from 'react';
// import "./style.css";
// function Home() {
//     return (
//         <>

//             <div class="bg-image">
//                 <div class="container-fluid">
//                     <div class="row">
//                         <div class="col-lg-4 col-md-12 col-sm-8 col-xs-8">
//                             <div class="card" style={{padding:"16px 38px 16px 38px"}}>
//                                 <div class="card-body">
//                                     <h2 class="responsive-font-example card-title">Brighten up your space with rugs that are built to last</h2>
//                                     <span class="card-text">CARPETS AND RUGS</span><br></br>
//                                     <button type="button" class="btn btn-secondary button">SHOP NOW</button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default Home;
import React from 'react';
import "./style.css";
import BgImg from "./assets/img.png";

function Home() {
    return (
        <>
            <div className="bg-image" style={{
                width: '100%',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundImage: `url(${BgImg})`
            }}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-5 col-md-12 col-sm-8 col-xs-8">
                            <div className="card">
                                <div className="card-body">
                                    <h1 className="card-title">Brighten up your space with rugs that are built to last</h1>
                                    <span className="card-text">CARPETS AND RUGS</span><br />
                                    <button type="button" className="btn btn-secondary button">SHOP NOW</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
