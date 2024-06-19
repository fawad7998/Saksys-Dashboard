import React from 'react'

function Map() {
    return (
        <>
            <div className="rounded-lg shadow-md bg-white mt-10 w-full">
                <div className='pt-10 pl-9'>

                    <h2 className="text-xl font-bold mb-4">Google Map</h2>
                    <p className="text-gray-600 mb-6">
                        Airtport Hotels The Right Way To Start A Short Break Holiday
                    </p>
                </div>
                <div className='flex items-center justify-center pb-8' >
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3402.1608700834695!2d74.4465689733624!3d31.4922617256508!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190f2c01a8dd91%3A0x30ddb29c62d9aed2!2sPlot%20163%2C%20Sector%20T%20DHA%20Phase%208%2C%20Lahore%2C%20Punjab!5e0!3m2!1sen!2s!4v1718820548229!5m2!1sen!2s"
                        width="95%"
                        height="600px"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"

                    ></iframe>
                </div>

            </div>
        </>
    )
}

export default Map
