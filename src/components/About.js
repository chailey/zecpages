import React from "react";
import mike from "../mike.jpg"
export default function About() {
    return (
        <div className="about-page">
            <div className="about-content">
                <h1>About the site</h1>
                
                <p>ZECpages is a public directory of zcash users. "Take it easy" is the ZECpages motto. A good reason to swing by is if you want to chat and make new friends.</p>
            </div>
            <div className="about-content">
                <h2>What is Zcash?</h2>
                <p>Zcash is a decentralized means of exchange that employs Zero Knowledge Proofs to prevent printing transaction details onto its public ledger.</p>
                <p>When transacting between z-addresses, the sender, receiver, amount, and memo are not shared with anyone else along the way!</p>
                <p>Want a lil Zcash to take this ole blockchain for a spin? <a target="_new" href="https://twitter.com/zcashvr">Tweet at ZcashVR!</a></p>
                <a target="_new" href="https://www.zecwallet.co/"><button className="cta">Get started in under a minute!</button></a>
            </div>
            <div className="about-content">
                <h2>About the Creator</h2>
                <img alt="silly picture of Mike" src={mike} />
                <p>Hi! I'm Mike! I'm a friendly web developer interested in human autonomy, the impending Golden Age, privacy, robots, carnivory, and piano. You can contact me on <a href="https://twitter.com/michaelharms70">Twitter</a> or via shielded ZEC memo:</p>
                <p className="zaddr">zs1q4jdaenhv5pdn4uqn86qekt7j2dch66uuszyp05ywne8z7yh56dhqjekpqle72skfl8ycd86ew4</p>
                <p>I'd love to hear about your experience using this app and any features or improvements you'd like to see!</p>
            </div>
         </div>
    )
}