export default function Contact() {
    return (
        <>
            <div>
                <header>
                    <h2>Questions or comments? <strong>Get in touch:</strong></h2>
                </header>
                <div>
                    <table>
                        <tr>
                            <td>
                                <section>
                                    <form action="https://formsubmit.co/mohamed.taieb.gl@gmail.com" method="POST">
                                        {/* Hidden input for spam protection */}
                                        <input type="hidden" name="_subject" value="New contact form submission" />
                                        <input type="hidden" name="_captcha" value="false" />
                                        {/* Redirect to thank you page or URL */}
                                        <input type="hidden" name="_next" value="https://yourdomain.com/thank-you" />
                                        <div>
                                            <div>
                                                <input name="name" placeholder="Name" type="text" required />
                                            </div>
                                            <div>
                                                <input name="email" placeholder="Email" type="email" required />
                                            </div>
                                            <div>
                                                <textarea name="message" placeholder="Message" required></textarea>
                                            </div>
                                            <div>
                                                <button type="submit">Send Message</button>
                                            </div>
                                        </div>
                                    </form>
                                </section>
                            </td>
                            <td>
                                <section>
                                    <p>Contact us by:</p>
                                    <div>
                                        <ul>
                                            <li>Localisation: Ariana</li>
                                            <li>(+216) 00-000-000</li>
                                            <li><a href="https://x.com/">X.com</a></li>
                                        </ul>
                                    </div>
                                </section>
                            </td>
                            <td>
                                <section>
                                    <div>
                                        <br/><br/>
                                        <ul>
                                            <li><a href="#">gmail.com</a></li>
                                            <li><a href="#">instagram.com</a></li>
                                            <li><a href="#">dribbble.com</a></li>
                                            <li><a href="#">facebook.com</a></li>
                                        </ul>
                                    </div>
                                </section>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </>
    );
}
