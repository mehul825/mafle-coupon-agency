import { Helmet } from 'react-helmet-async';

const TermsOfService = () => {
    return (
        <div className="pt-24 pb-16 bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-300">
            <Helmet>
                <title>Terms of Service - Mafle</title>
                <meta name="description" content="Terms of Service for Mafle services." />
            </Helmet>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700 transition-colors duration-300">
                    <div className="bg-primary/5 dark:bg-primary/10 px-8 py-10 border-b border-gray-100 dark:border-gray-700">
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">Terms of Service</h1>
                        <p className="text-gray-600 dark:text-gray-400">Last Updated on 5th May 2024</p>
                    </div>

                    <div className="p-8 md:p-12">
                        <div className="prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
                            <p className="mb-6 leading-relaxed">
                                This is an agreement (“Agreement”) between Smiling Bulbs Technologies Private Limited ("Mafle", "We", "Us" and "Our"), a company incorporated under the Companies Act, 2013 and You ("You" or "User" or “Your” or “Yourself”), a customer or buyer or consumer or merchant or seller or biller, or any other person who accesses or uses Our Services or Platforms.
                            </p>

                            <p className="mb-6 leading-relaxed">
                                Mafle owns and operates the website www.mafle.co, and other Mafle’s services (collectively, Our "Services" or “Platforms”).
                            </p>

                            <p className="mb-8 leading-relaxed">
                                Please carefully read the terms and conditions set forth below. By accessing or using Our Services or Platforms, You are agreeing to these Terms and Conditions, concluding a legally binding contract with Us. You may not access or use Our Services if You don’t agree to any provision of this Agreement.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-6 flex items-center">
                                <span className="bg-primary/10 text-primary p-2 rounded-lg mr-3 shadow-sm">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                                </span>
                                OUR SERVICES
                            </h2>
                            <p className="mb-4 leading-relaxed">
                                Mafle helps brands in Distribution and Generation of their Coupon and Voucher Codes. Mafle provides digital marketing services to brand.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-6 flex items-center">
                                <span className="bg-primary/10 text-primary p-2 rounded-lg mr-3 shadow-sm">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                </span>
                                PRICING
                            </h2>
                            <p className="mb-6 leading-relaxed">
                                Mafle charges the brand for providing them with different Services. Mafle reserves the right to change its pricing policy from time to time. In particular, Mafle, may at its sole discretion, introduce new Services or modify some or all of the existing Services. In such an event, Mafle reserves the right to introduce fees for the new Services offered or amend or introduce fees for existing Services, as the case may be.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-6">CONSENT TO ELECTRONIC COMMUNICATIONS</h2>
                            <p className="mb-6 leading-relaxed">
                                By registering with Us, You permit Us to send electronic communications, notices, advertisements and other information through emails, SMS or other electronic means. Electronic communications shall be deemed to have been received by You when We send the electronic communication to Your email address or mobile number registered with Us, or when We post the electronic communication on Our Platforms. In order to receive and view such communications, You must have proper access to Internet, Your email address etc. You can withdraw Your consent at any time by contacting Us, but We reserve the right to terminate Your account upon such withdrawal. Withdrawal of Your consent will not affect the legal validity and enforceability of any notice, statement or disclosure previously received electronically.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-6">ADVERTISEMENT</h2>
                            <p className="mb-6 leading-relaxed">
                                Some of Our Services may be supported by advertising revenue and may display advertisements and promotions. The manner, mode and extent of Our advertisements are subject to change without specific notice to You. In consideration of Mafle granting You access to and use of the Services, You agree that Mafle may place such advertisements and promotions.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-6 flex items-center">
                                <span className="bg-primary/10 text-primary p-2 rounded-lg mr-3 shadow-sm">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                                </span>
                                DISCLAIMER OF WARRANTIES
                            </h2>
                            <p className="mb-6 leading-relaxed">
                                We do not guarantee, represent or warrant that Your use or access of Our Services will be uninterrupted, timely, secure or error-free. We do not warrant that the results that may be obtained from the use of Our Service will be accurate or reliable. You agree that from time to time We may remove the Service for indefinite periods of time or cancel the service at any time, without sending any notice to You. You expressly agree that Your use of, or inability to use, the Service is at Your sole risk. The Services provided to You on 'as is' basis, without any representation, warranties or conditions of any kind, either expressed or implied, including all implied warranties or conditions of merchantability, merchantable quality, fitness for a particular purpose, durability, title, and non-infringement.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-6">LIMITATION OF LIABILITY</h2>
                            <p className="mb-6 leading-relaxed">
                                In no case shall We, Our directors, officers, employees, affiliates, agents, contractors, interns, suppliers, service providers or licensors be liable for any injury, loss, claim, or any direct, indirect, incidental, punitive, special, or consequential damages of any kind, including, without limitation lost profits, lost revenue, lost savings, loss of data, replacement costs, or any similar damages, whether based in contract, tort (including negligence), strict liability or otherwise, arising from Your use of Our Services, or for any other claim related in any way to Your use of Our Service including, but not limited to, any errors or omissions in any content, or any loss or damage of any kind incurred as a result of Your use of Our Service.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-6 flex items-center">
                                <span className="bg-primary/10 text-primary p-2 rounded-lg mr-3 shadow-sm">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" /></svg>
                                </span>
                                PROHIBITED USE
                            </h2>
                            <p className="mb-6 leading-relaxed">
                                In addition to other prohibitions as set forth in this Agreement, You are prohibited from using or accessing Our Services or Platforms: (a) for any purpose that is illegal, offensive or prohibited as per the applicable Government, State, Federal, local or Cyber laws and regulations; (b) to infringe upon or violate Our intellectual property rights or the intellectual property rights of others; (c) to submit false or misleading information; (d) for money laundering, tax evasion or any other illegal activities; (e) to impersonate anyone, falsely claim or access the accounts of others without permission, forge another person’s digital signatures.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-6">PROPRIETARY RIGHTS</h2>
                            <p className="mb-4 leading-relaxed">
                                All materials on Our Platforms, including, without limitation, names, logos, trademarks, images, text, columns, graphics, videos, photographs, illustrations, artwork, software and other elements are protected by copyrights, trademarks or other intellectual property rights. You acknowledge and agree that all materials on Our Platforms is made available for limited, non-commercial, personal use only. No material may be copied, reproduced, republished, sold, downloaded, posted, transmitted, or distributed in any way, or otherwise used for any purpose, by any person or entity, without express written permission of the owner. You may not add, delete, distort, or otherwise modify the materials on Our Platforms. Any unauthorized attempt to modify any material, to breach or circumvent any security features, or to utilize the app or any part of the material for any purpose other than its intended purposes is strictly prohibited.
                            </p>
                            <p className="mb-6 leading-relaxed">
                                Our Platforms shall not be used in relation to any commercial purposes, except as specifically approved by Mafle.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-6">TERMINATION AND EFFECTS</h2>
                            <p className="mb-4 leading-relaxed">
                                You can terminate Your account at any time by sending an email to Our Legal Compliance officer or any such other electronic address of Mafle, and ceasing further access or use of Our Services.
                            </p>
                            <p className="mb-6 leading-relaxed">
                                We may terminate Your use of Our Services and deny You access to the Services in Our sole discretion for any reason or no reason, including Your: (i) violation of any provision of this Agreement; or (ii) lack of use of the Services. You agree that any termination of Your access to the Services may be effected without prior notice, and acknowledge and agree that We may immediately deactivate or delete Your account and all related information and bar any further access to Your account and Our Services.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-6">CONSENT TO USE YOUR INFORMATION</h2>
                            <p className="mb-6 leading-relaxed">
                                Please read Our Privacy Policy to understand the types of information that We may collect from You when You access or use Our Services and practices for collecting, using, maintaining, protecting and disclosing that information.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-6">FORCE MAJEURE</h2>
                            <p className="mb-6 leading-relaxed">
                                Neither party shall be liable to the other for any failure to perform any obligation under any Agreement which is due to an event beyond the control of such party including but not limited to any act of god, terrorism, war, political insurgence, insurrection, riot, civil unrest, act of civil or military authority, uprising, earthquake, flood or any other natural or man-made eventuality outside of Our control, which causes the termination of an agreement or contract entered into, nor which could have been reasonably foreseen. Any party affected by such event shall forthwith inform the other party of the same and shall use all reasonable endeavors to comply with the terms and conditions of any Agreement contained herein.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-6">AMENDMENTS AND CHANGES</h2>
                            <p className="mb-4 leading-relaxed">
                                Mafle reserves the right to modify, alter, suspend, cancel, or discontinue any or all of its products or services at any time without any prior notice.
                            </p>
                            <p className="mb-6 leading-relaxed">
                                We reserve the right to change, modify, add or remove portions of this Agreement, at any time without any prior written notice to You. It’s Your responsibility to review this Agreement periodically for updates or changes. Once posted, those changes are effective immediately, unless stated otherwise. Continued access or use of Our Platforms constitutes Your acceptance of the changes and the amended Agreement. However, if You do not agree with the changes, please do not continue to use or access Our Services.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-6">INDEMNIFICATION</h2>
                            <p className="mb-6 leading-relaxed">
                                You agree to indemnify, defend and hold harmless Us and Our parent, subsidiaries, affiliates, partners, officers, directors, agents, contractors, licensors, service providers, subcontractors, suppliers, interns and employees, harmless from any claim or demand, including reasonable attorneys’ fees, made by any third-party due to or arising out of Your breach of the terms and conditions set forth herein or the documents they incorporate by reference, or Your violation of any law or the rights of a third-party.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-6">SEVERABILITY</h2>
                            <p className="mb-6 leading-relaxed">
                                If any provision of this Agreement is determined to be invalid or unenforceable, it will be deemed to be modified to the minimum extent necessary to be valid and enforceable. If it cannot be so modified, it will be deleted. The modification or deletion shall not affect the validity or enforceability of any other provision.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-6">ASSIGNMENT</h2>
                            <p className="mb-6 leading-relaxed">
                                The terms and any rights and licenses granted hereunder, may not be transferred or assigned by You. We may assign, in whole or in part, the benefits or obligations of this Agreement. We will provide an intimation of such assignment to You, which will be binding on the parties to these Terms and Conditions.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-6">DISPUTE RESOLUTION AND GOVERNING LAW JURISDICTION</h2>
                            <p className="mb-4 leading-relaxed">
                                In case of any dispute or difference between the parties relating to interpretation of any clauses and claims whatsoever arising out of or in any manner related to any provision of this Agreement including any failure of the respective representatives of the parties to reach an amicable understanding under any provision of this Agreement shall be resolved by a Sole Arbitrator appointed by the Parties.
                            </p>
                            <p className="mb-4 leading-relaxed">
                                The Sole Arbitrator shall adopt all the procedures, rules and regulations mentioned in the Arbitration & Conciliation Act, 1996 and the accompanying rules. The costs of the Arbitration shall be borne equally by the parties.
                            </p>
                            <p className="mb-4 leading-relaxed">
                                The parties further agree that the decision of the arbitrator shall be final and binding.
                            </p>
                            <p className="mb-4 leading-relaxed">
                                The arbitration proceedings shall be in English. The venue of the arbitration proceedings shall exclusively be at Bangalore, Karnataka.
                            </p>
                            <p className="mb-6 leading-relaxed">
                                This Agreement shall be interpreted, construed and enforced in all respects in accordance with the laws of the Republic of India.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-6">CONTACTING US</h2>
                            <p className="mb-6 leading-relaxed bg-gray-50 dark:bg-gray-700/50 p-6 rounded-xl border border-gray-100 dark:border-gray-700">
                                For any query, grievance, complaint, suggestions or any other information, You may contact Our legal Compliance Officer at <a href="mailto:contact@mafle.co" className="text-primary font-medium hover:underline">contact@mafle.co</a>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TermsOfService;
