import { motion } from "framer-motion";
import React, { useState } from "react";

const formatPhoneNumber = (value) => {
  if (!value) return "";

  const digits = value.replace(/[^\d]/g, "");

  let phoneNumber = digits.startsWith("1") ? digits.slice(1) : digits;

  phoneNumber = phoneNumber.slice(0, 10); 

  const length = phoneNumber.length;

  if (length === 0) return "+1 ";
  if (length < 4) return `+1 (${phoneNumber}`;
  if (length < 7) return `+1 (${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
  return `+1 (${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6)}`;
};


const Contact = () => {
    const [phone, setPhone] = useState("");
    const [result, setResult] = useState("");

    const handleChange = (e) => {
        let input = e.target.value;
        const digits = input.replace(/[^\d]/g, "");

        if (digits === "" || digits === "1") {
        setPhone("");
        return;
        }

        const formatted = formatPhoneNumber(input);

        if (formatted === "+1 ") {
        setPhone("");
        } else {
        setPhone(formatted);
        }
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending...");
        const formData = new FormData(event.target);
        formData.append("access_key", "c409d554-8306-4c6c-b477-4073f5c434d5");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData,
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
            setPhone(""); // reset phone after successful submission
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <div>
            <motion.div initial={{opacity: 0, x:-200}} transition={{duration: 1.2}} whileInView={{opacity: 1, x:0}} viewport={{once:true}} id="Contact" className="scroll-mt-24 flex min-h-screen w-full flex-col items-center justify-center p-8 md:scroll-mt-0">
                <h1 className="bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-6xl font-semibold text-transparent h-18 md:text-7xl md:h-20 lg-text-7xl">Let's Connect</h1>
                <p className="max-w-[500px] text-sm text-gray-500 text-center pb-5">Send me a message using the form below — your inquiry will be delivered directly to my inbox and I’ll personally get back to you.</p>

                <form onSubmit={onSubmit} className="flex w-full max-w-md flex-col gap-8 rounded-lg p-6 md:max-w-lg lg:max-w-xl">
                    <div className="flex flex-col gap-7 ">
                        <input type="text" name="name" placeholder="Your Name" required className="rounded-lg border-2 border-teal-400 px-4 py-3 text-lg outline-none transition-all duration-200 hover:bg-teal-50 focus:ring-2 focus:ring-teal-500"/>
                        <input type="text" name="company" placeholder="Company Name (optional)" className="rounded-lg border-2 border-teal-400 px-4 py-3 text-lg outline-none transition-all duration-200 hover:bg-teal-50 focus:ring-2 focus:ring-teal-500"/>
                        <input type="text" name="email" placeholder="Your Email" required  className="rounded-lg border-2 border-teal-400 px-4 py-3 text-lg outline-none transition-all duration-200 hover:bg-teal-50 focus:ring-2 focus:ring-teal-500"/>
                        <input type="tel"  name="phone" value={phone} onChange={handleChange} maxLength={17} placeholder="Phone Number (optional)" className="rounded-lg border-2 border-teal-400 px-4 py-3 text-lg outline-none transition-all duration-200 hover:bg-teal-50 focus:ring-2 focus:ring-teal-500"/>
                        <textarea name="message" id="" placeholder="Your Message" required  className="rounded-lg border-2 border-teal-400 px-4 py-3 text-lg outline-none transition-all duration-200 hover:bg-teal-50 focus:ring-2 focus:ring-teal-500 h-30 md:h-40"></textarea>
                        <button className="rounded-lg border-2 border-teal-400 bg-teal-500 px-6 py-3 font-semibold text-white transition-all duration-200 hover:bg-teal-600">{result ? result : "Send Message"}</button>
                    </div>
                </form>
            </motion.div>
        </div>
    )
}

export default Contact;