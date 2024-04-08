import React from 'react'
import AirHeader from './AirHeader'

const CatalogAir = () => {
  return (
    <div>
        <AirHeader/>
        <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <div class="card">
                                    <img src="https://cloudfront-us-east-2.images.arcpublishing.com/reuters/2P3RPFWS3ZK2BPYHWXQQPNU6XY.jpg" class="card-img-top" alt="..." style={{ height: '900px' }} />
                                    <div class="card-body">
                                        <h5 class="card-title">Indigo</h5>

                                        <a href="https://www.goindigo.in/" class="btn btn-primary">Go</a>
                                    </div>

                                </div>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <div class="card">
                                    <img src="https://content.presspage.com/uploads/2431/ba35aa09-5a9a-4bdd-8232-b8646c9b4da8/1920_dsc07500-retouched-v1.jpg?10000" class="card-img-top" alt="..." style={{ height: '900px' }}/>
                                    <div class="card-body">
                                        <h5 class="card-title">Emirates</h5>

                                        <a href="https://www.emirates.com/in/english/" class="btn btn-primary">Go</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <div class="card">
                                    <img src="https://cdn.britannica.com/61/146261-004-F79F4557/Air-India-A319.jpg" class="card-img-top" alt="..." style={{ height: '900px' }}/>
                                    <div class="card-body">
                                        <h5 class="card-title">Air India</h5>

                                        <a href="https://www.airindia.com/" class="btn btn-primary">Go</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <div class="card">
                                    <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/02/ee/ff/etihad-airways.jpg?w=1100&h=-1&s=1" class="card-img-top" alt="..." style={{ height: '900px' }}/>
                                    <div class="card-body">
                                        <h5 class="card-title">Etihad</h5>

                                        <a href="https://www.etihad.com/en-in/" class="btn btn-primary">Go</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default CatalogAir