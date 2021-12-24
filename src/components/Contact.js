import React from 'react';
import { email } from '../data';

import Fade from 'react-reveal/Fade';

export default function Articles() {
    return (
        <div className="contact container-fluid section" name="contact">
            <Fade bottom>
                <h2 className="section-header">CONTACT</h2>
            </Fade>
            <Fade bottom>
                <p>質問・要望は<a href={"mailto:" + email} className="card-link">{email}</a>まで連絡お願いします/Use the email address to reach out</p>
            </Fade>
        </div>
    )
}
