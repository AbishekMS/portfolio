import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import React, { Suspense, useRef, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { OrbitControls } from "@react-three/drei";
import { Fox } from "../../assets/3D/Fox";
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaGitlab, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState("idle");

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleFocus = () => setCurrentAnimation("walk");
  const handleBlur = () => setCurrentAnimation("run");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setCurrentAnimation("hit");

    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID, 
      {
        from_name: form.name,
        to_name: "Abishek M S",
        from_email: form.email,
        to_email: 'msabishek333@gmail.com',
        subject: form.subject,
        message: form.message
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
    ).then(() => {
      return emailjs.send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_AUTOREPLY_TEMPLATE_ID,
        {
          to_name: form.name,
          reply_email: form.email,
          
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
      );
    }).then(() => {
      setLoading(false);
      setTimeout(() => {
        setCurrentAnimation("idle");
        setForm({ name: '', email: '', subject: '', message: '' });
        toast.success("Message sent successfully");
      }, 3000);
    }).catch((error) => {
      setLoading(false);
      console.log(error);
      setCurrentAnimation("walk.left");
      setForm({ name: '', email: '', subject: '', message: '' });
      toast.error("Failed to send message");
      setTimeout(() => {
        setCurrentAnimation("idle");
      }, 5000);
    });
};
    
  return (
    <section className="flex flex-wrap lg:flex-nowrap items-start justify-center gap-8 p-8">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="relative flex w-full flex-col lg:flex-row items-start justify-center gap-8">

        <div className="bg-orange-400 rounded-xl p-6 shadow-2xl z-10 
                        w-72 mx-auto lg:absolute lg:top-40 lg:left-10">
          <h2 className="text-white text-2xl font-semibold mb-6">Contact Info</h2>
          <ul className="space-y-4">
            <li className="flex items-center gap-4">
              <FaMapMarkerAlt className="w-6 h-6 text-white opacity-60" />
              <p className="text-white opacity-80">
                Coimbatore, Tamil Nadu<br />641668
              </p>
            </li>
            <li className="flex items-center gap-4">
              <FaEnvelope className="w-6 h-6 text-white opacity-60" />
              <p className="text-white opacity-80">msabishek333@gmail.com</p>
            </li>
            <li className="flex items-center gap-4">
              <FaPhone className="w-6 h-6 text-white opacity-60" />
              <p className="text-white opacity-80">+91 8681826677</p>
            </li>
          </ul>

          <div className="flex mt-6 space-x-4 pl-10">
            <a href="https://x.com/AbishekMS868166"><FaTwitter className="w-6 h-6 text-white opacity-60 hover:opacity-100" /></a>
            <a href="https://gitlab.com/msabishek333"><FaGitlab className="w-6 h-6 text-white opacity-60 hover:opacity-100" /></a>
            <a href="https://www.linkedin.com/in/abishek-ms-8n88/"><FaLinkedinIn className="w-6 h-6 text-white opacity-60 hover:opacity-100" /></a>
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-8 shadow-lg w-full lg:ml-72">
          <h1 className="text-2xl font-bold mb-6">Get in Touch</h1>
          <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-5 pl-7">
            <label className="flex flex-col gap-2">
              <span className="font-semibold">Name*</span>
              <input
                type="text"
                name="name"
                placeholder="abc"
                value={form.name}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                required
                className="border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-orange-300"
              />
            </label>

            <label className="flex flex-col gap-2">
              <span className="font-semibold">Email*</span>
              <input
                type="email"
                name="email"
                placeholder="xyz@gmail.com"
                value={form.email}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                required
                className="border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-orange-300"
              />
            </label>
            <label className="flex flex-col gap-2">
                <span className="font-semibold">Subject*</span>
                <input
                type="text"
                name="subject"
                placeholder="Regarding..."
                value={form.subject}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                required
                className="border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-orange-300"
                />
              </label>

            <label className="flex flex-col gap-2">
              <span className="font-semibold">Your Message*</span>
              <textarea
                name="message"
                rows="4"
                placeholder="Write your thoughts here..."
                value={form.message}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                className="border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-orange-300"
              />
            </label>

            <button
              type="submit"
              disabled={loading}
              className="bg-black text-white py-3 rounded-lg font-semibold hover:bg-orange-500 transition"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
      <div className="w-full lg:w-1/2 h-[500px]">
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000,
          }}
        >
          <directionalLight position={[0, 0, 1]} intensity={2.5} />
          <ambientLight intensity={1} />
          <pointLight position={[5, 10, 0]} intensity={2} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} />
          <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
          <Suspense fallback={null}>
            <group
              onPointerOver={() => (document.body.style.cursor = "grab")}
              onPointerOut={() => (document.body.style.cursor = "auto")}
            >
              <Fox
                currentAnimation={currentAnimation}
                position={[0.5, 0.35, 0]}
                rotation={[12.629, -0.6, 0]}
                scale={[0.5, 0.5, 0.5]}
              />
            </group>
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Contact;
