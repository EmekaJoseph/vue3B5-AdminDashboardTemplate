<template>
    <AboutUsTemplate>
        <template #body>
            <div class="row g-3 ">
                <div class="col-md-12">
                    <h1 class="fw-600">
                        PRIVACY POLICY
                    </h1>
                    <p class="fs-6 mt-3">
                        This page contains the information gathering and use policies adopted by THE MORGANS CONSORTIUM
                        Consulting in connection with this website (the “Site”). This privacy statement (“Privacy
                        Statement”) (together with our terms of use) explains how we use any personal information we
                        collect from you, or that you provide to us. Please read the following carefully to understand
                        our views and practices regarding your personal information and how we will treat it. By
                        visiting the Site, you confirm that you accept and consent to the practices described in this
                        Privacy Statement, without limitation or qualification. If you do not accept this Privacy
                        Statement, you are not entitled to access or use the Site. These policies are subject to
                        periodic review and any changes will be included within this section of the site. References to
                        THE MORGANS CONSORTIUM Consulting shall include The Oasis Network Incorporation Limited (MORGANS
                        Consulting) and bodies corporate and partnerships controlled by it (directly or indirectly). For
                        the purposes of the UK Data Protection Act 1998 (the “Data Protection Act”) the data controller
                        is The Morgans Consortium Consulting Limited of 24, International House, Holborn Viaduct London
                        EC1A 2BN.Unless you instruct us otherwise, information (which includes any personal information)
                        you provide to us will be used by and persons, bodies corporate or partnerships controlled
                        (directly or indirectly) by The Oasis Network Incorporation Limited parent company of THE
                        MORGANS CONSORTIUM
                    </p>

                    <section>
                        <div class="fw-bold">What personal information do we collect and how do we use it?</div>

                        <ul class="list-group list-group-flush">
                            <li v-for="(info, key) in information" :key class="list-group-item border-0">
                                <i class="bi bi-check-square"></i> {{ info }}
                            </li>
                        </ul>

                    </section>

                    <section>
                        <ol>
                            <li v-for="({ head, content }, key) in orderedList" :key>
                                <div class="fw-bold">{{ head }}</div>
                                <div v-html="content"></div>
                            </li>
                        </ol>
                    </section>
                </div>
            </div>

        </template>
    </AboutUsTemplate>
</template>

<script setup lang="ts">
import AboutUsTemplate from '@/components/Layouts/public/aboutUsTemplate.vue';

const information: string[] = [
    'Sensitive personal data',
    'Cookies',
    'Use of information and opt-out.',
    'Updating your information',
    'Provision of information to third parties.',
    'Links',
    'Retention of information',
    'Security of information',
    'Changes to privacy statement',

]


const orderedList: { head: string, content: string }[] = [
    {
        head: 'What personal information do we collect and how do we use it?',
        content: `
        <p>
        Personal information (which includes ‘personal data’ as defined in the Data Protection Act) is generally collected so we can deliver requested materials or information.
        We may collect and process the following types of personal information about you: We log your Internet Protocol (IP) address. The IP address indicates the location of your computer on the Internet and is used to connect your computer to the Internet. This information may be aggregated to provide statistical information about the users of our Site. No individual user will be identifiable from such information, which is used to ensure the Site reflects the needs of users. Whilst IP addresses may be categorized as personal information, we do not use this data to track your session. When you register with us[1], use our services, book to attend an event or submit a subscription request (e.g. to receive a newsletter or for marketing information), make an enquiry (either by submitting an online enquiry form or by corresponding with us by phone, e-mail or otherwise), and/or if you apply to work for THE MORGANS Consortium , you may be asked to provide some personal information such as your name and contact details (including telephone number, home address, date of birth and email address) and website registration credentials (username and password). Please note that if you send us your CV, you may be asked to provide us with certain additional sensitive personal data. For more information, please see the paragraph headed “Sensitive Personal Data” below.
        </p>
        <p>
        We may also, from time to time while you are accessing the Site, request you to complete a survey form which may relate either to your use of the Site and/or information posted on the Site.
        </p>
        <p>
        Your personal information is necessary to enable THE MORGANS Consortium and its subsidiaries to deal with your enquiry, but additional information may be requested to help us to provide the most appropriate response. If such additional information is requested, it is highlighted and its provision is voluntary.
        </p>
        `
    },

    {
        head: 'Sensitive personal data',
        content: `
        <p>
        When you apply for one of our jobs, you will need to register with us and submit an application. The Data Protection Act gives special protection to certain types of sensitive information (which includes ‘sensitive personal data’ as defined by the Data Protection Act). Sensitive information can include data about your race or ethnic origin; political opinions; religious or other similar beliefs; trade union membership; physical or mental health; sexual life or criminal record. You should only provide this information if it is required in response to a mandatory question on our registration form, or if you are otherwise content for us to process this information in accordance with the terms of this Privacy Statement. Where you do provide sensitive information, this will be accepted as explicit consent to THE MORGANS Consortium and its subsidiaries to use that information in connection with the purpose for which it has been provided.
        </p>
        `
    },

    {
        head: 'Cookies',
        content: `
        <p>
        Your Site uses cookies, which are small text files that are placed within your computer with your permission. THE MORGANS Consortium and its subsidiaries uses Google Analytics and AddThis. These cookies are used to make the website work more efficiently as well as monitor user activity. We also use Google Maps to retain user’s map viewing preferences. Most browsers allow control of cookies through the browser settings. However, please be aware that this may impact negatively on your use of this and other sites. More information regarding our use of cookies may be found in our cookie statement.
        </p>
        `
    },

    {
        head: 'Use of information and opt-out',
        content: `
        <p>
        Information is used only for the specific purpose for which it was provided except where you explicitly select to receive other information from THE MORGANS Consortium and its subsidiaries. When requesting material or asking someone to contact you, you will have the option to request other information that may be of interest. You can opt out of receiving information from The Oasis Network Incorporation Limited (THE MORGANS CONSORTIUM Consulting) or request that your personal details are deleted from our systems at any time by e-mailing info@themorgansconsulting.com, admin@oasisnetworkinc.co.uk
        </p>
        `
    },
    {
        head: 'Updating your information',
        content: `
        <p>
        You may request that your personal information is corrected, amended or updated at any time by contacting us using the details listed below.
        </p>
        `
    },
    {
        head: 'Provision of information to third parties.',
        content: `
        <p>
        Information is normally only provided to a third party if it is required to deal with your enquiry, but there may be other circumstances where THE MORGANS Consortium and its subsidiaries is required to provide information as a result of legal or regulatory process. THE MORGANS Consortium and its subsidiaries does not undertake marketing activities for third parties, nor does it provide information to third parties for their own marketing purposes.
        </p>
        `
    },
    {
        head: 'Links',
        content: `
        <p>
        The Site contains links to other websites. THE MORGANS Consortium and its subsidiaries is not responsible for the privacy policies of third-party web sites to which links are provided. You should check the privacy policies on these sites before providing any personal information. This privacy statement relates only to information contained on, or gathered via, the Site.
        </p>
        `
    },
    {
        head: 'Retention of information',
        content: `
        <p>
        In accordance with the Act, your personal information is only kept for as long as is necessary to fulfil your request or deal with your job application. Where you have consented to additional information being provided by THE MORGANS Consortium and its subsidiaries , your details will be retained for a reasonable period of time.
        </p>
        `
    },
    {
        head: 'Protecting your information',
        content: `
        <p>
        We take your online security seriously and have implemented generally accepted standards of technology and operational security to protect your personal information from loss, misuse, alteration or destruction. Once we have received your information, we will ensure that the collection and use of your information is in accordance with the Data Protection Act. All personnel of THE MORGANS Consortium and its subsidiaries are required to keep personal information confidential and only authorized persons have access to such information.
        </p>
         <p>
         Please note, however, that the transmission of information via the Internet is not completely secure. Criminals have and are using techniques aimed to defraud and exploit website users.
        </p>
        <p>
        <span class="fw-bold">Typical types of criminal activities include:</span> 
        Email and website scams (including fraudulent emails and phishing); Website spoofing (i.e. where a criminal will steal a website’s code and create a fake website. This website will appear to be legitimate, but may in fact be a spoof) Lottery and sweepstakes letter scams. Although we will do our best to protect your personal data, we cannot guarantee the security of your data transmitted to our Site; any transmission is at your own risk. How you can protect yourself: Passwords: make sure that you choose a password which can be easily remembered but cannot be guessed. Also remember to change your password regularly and never share your password with another person. Passwords should not be written down or stored on your computer. Security questions: always choose a mix of questions that you think will be difficult for another person to guess the answers to. Logging out: once you have finished a session, always remember to log out of any accounts which you have signed in for and ensure that any share computer is not left unattended at any time. Stay vigilant: check that your anti-virus software and firewall settings are kept up to date. We will never ask you for your password or send you emails asking or this type of information. If you have any concerns or questions about the security of our Site or any personal information, we collect from you, please do not hesitate to contact our marketing department on enquiries@morgansconsortium.com.
        </p>
        `
    },
    {
        head: 'Changes to Privacy Statement',
        content: `
        <p>
        Any changes to our Privacy Statement will be posted on this page of the Site. We would encourage users to check the Privacy Statement each time they use the Site. If our privacy policy changes in any way, we will place an updated version on this page. Regularly reviewing this page ensures that you are always aware of what information we collect, how we use it and under what circumstances, if any, we will share it with other parties. Contact us If you have any questions about this Privacy Statement please click here to email us. THE MORGANS Consortium and its subsidiaries does not require registration for access to the Site in general but you may be asked to register to access certain areas.
        </p>
        `
    }
]
</script>

<style scoped>
section {
    margin-block: 40px;
}
</style>
