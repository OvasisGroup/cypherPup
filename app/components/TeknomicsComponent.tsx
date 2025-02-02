import React from 'react'
import Image from "next/image";


const TeknomicsComponent = () => {
    return (
        <section className='technomics'>
            <div className='technomicsheader'>
                <div className='imgsection bounce'>
                    <Image
                        src="/images/teknomics.png" // Public folder path
                        alt="Example Image"
                        width={400} // Set width
                        height={400} // Set height
                        priority // Ensures it loads faster
                        layout="intrinsic" // Keeps aspect ratio based on width and height
                    />
                </div>
                <div className='teknom'>
                    <div className='teknomheader'>
                        <h1>Technomics</h1>
                        <h2>Total Supply</h2>
                        <p>Cypherpup will have a fixed total supply of 50 Billion tokens(50,000,000,000), ensuring ample availibility for growth while maintaining scarcity to protect value.</p>
                        <h2>Deflationary Mechanisms</h2>
                    </div>

                    <div className='deflationary'>
                        <h3>Transactions Burn Fee(0.5%)</h3>
                        <p>
                            Reduces the circulating supply with every transactions ensuring long-term scarcity.
                        </p>
                    </div>
                    <div className='deflationary'>
                        <h3>Transactions Burn Fee(0.5%)</h3>
                        <p>
                            Reduces the circulating supply with every transactions ensuring long-term scarcity.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TeknomicsComponent
