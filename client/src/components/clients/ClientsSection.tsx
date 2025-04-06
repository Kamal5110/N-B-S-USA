import { clients, testimonials } from "@/lib/data";
import { motion } from "framer-motion";
import { useState } from 'react';

const ClientsSection = () => {
  return (
    <section id="clients" className="py-20 bg-[var(--lightgray)]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-[var(--primary)] mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Trusted Clients
          </motion.h2>
          <div className="w-20 h-1 bg-[var(--accent)] mx-auto mb-6"></div>
          <motion.p 
            className="text-lg text-[var(--darkgray)]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            Businesses that rely on our expertise for their financial success.
          </motion.p>
        </div>
        
        {/* Client Logos - Enhanced center alignment with proper spacing */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-16">
          {clients.map((client, index) => (
            <motion.div 
              key={client.id}
              className="bg-white p-5 rounded-lg shadow-md flex flex-col items-center justify-center h-44 hover:shadow-xl transition-all duration-300 overflow-hidden w-[180px] transform hover:scale-105"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.05 * (index % 10) }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col items-center justify-center h-full w-full text-center">
                <div className="h-20 flex items-center justify-center mb-3">
                  {client.name === "System Protection" && (
                    <img 
                      src="/images/system_protection.png"
                      alt="System Protection logo" 
                      className="max-h-[80px] w-auto max-w-[150px] object-contain mx-auto" 
                      loading="lazy"
                      width={150}
                      height={80}
                    />
                  )}
                  {client.name === "AavGO" && (
                    <img 
                      src="/images/aavgo_11.png"
                      alt="AavGO logo" 
                      className="max-h-[80px] w-auto max-w-[150px] object-contain mx-auto" 
                      loading="lazy"
                      width={150}
                      height={80}
                    />
                  )}
                  {client.name === "Abilities India Pistons & Rings" && (
                    <img 
                      src="/images/abilities_india_pistons_rings.png"
                      alt="Abilities India Pistons & Rings logo" 
                      className="max-h-[80px] w-auto max-w-[150px] object-contain mx-auto" 
                      loading="lazy"
                      width={150}
                      height={80}
                    />
                  )}
                  {client.name === "Astics Techlabs" && (
                    <img 
                      src="/images/astics_techlabs.jpg"
                      alt="Astics Techlabs logo" 
                      className="max-h-[80px] w-auto max-w-[150px] object-contain mx-auto" 
                      loading="lazy"
                      width={150}
                      height={80}
                    />
                  )}
                  {client.name === "TeroTAM Technolabs" && (
                    <img 
                      src="/images/terotam_technolabs.jpg"
                      alt="TeroTAM Technolabs logo" 
                      className="max-h-[80px] w-auto max-w-[150px] object-contain mx-auto" 
                      loading="lazy"
                      width={150}
                      height={80}
                    />
                  )}
                  {client.name === "Joyam" && (
                    <img 
                      src="/images/joyam.png"
                      alt="Joyam logo" 
                      className="max-h-[80px] w-auto max-w-[150px] object-contain mx-auto" 
                      loading="lazy"
                      width={150}
                      height={80}
                    />
                  )}
                  {client.name === "Oizom" && (
                    <img 
                      src="/images/oizom.jpg"
                      alt="Oizom logo" 
                      className="max-h-[80px] w-auto max-w-[150px] object-contain mx-auto" 
                      loading="lazy"
                      width={150}
                      height={80}
                    />
                  )}
                  {client.name === "Fitcast" && (
                    <img 
                      src="/images/fitcast.jpg"
                      alt="Fitcast logo" 
                      className="max-h-[80px] w-auto max-w-[150px] object-contain mx-auto" 
                      loading="lazy"
                      width={150}
                      height={80}
                    />
                  )}
                  {client.name === "Comptech Equipments" && (
                    <img 
                      src="/images/comptech_equipments.jpg"
                      alt="Comptech Equipments logo" 
                      className="max-h-[80px] w-auto max-w-[150px] object-contain mx-auto" 
                      loading="lazy"
                      width={150}
                      height={80}
                    />
                  )}
                  {client.name === "Shreehari Education" && (
                    <img 
                      src="/images/shreehari_education.jpg"
                      alt="Shreehari Education logo" 
                      className="max-h-[80px] w-auto max-w-[150px] object-contain mx-auto" 
                      loading="lazy"
                      width={150}
                      height={80}
                    />
                  )}
                  {client.name === "Parceldeck" && (
                    <img 
                      src="/images/parceldeck.jpg"
                      alt="Parceldeck logo" 
                      className="max-h-[80px] w-auto max-w-[150px] object-contain mx-auto" 
                      loading="lazy"
                      width={150}
                      height={80}
                    />
                  )}
                  {client.name === "Maintedge Techlabs" && (
                    <img 
                      src="/images/maintedge_techlabs.jpg"
                      alt="Maintedge Techlabs logo" 
                      className="max-h-[80px] w-auto max-w-[150px] object-contain mx-auto" 
                      loading="lazy"
                      width={150}
                      height={80}
                    />
                  )}
                  {client.name === "Radiance Technologies" && (
                    <img 
                      src="/images/radiance_technologies.jpg"
                      alt="Radiance Technologies logo" 
                      className="max-h-[80px] w-auto max-w-[150px] object-contain mx-auto" 
                      loading="lazy"
                      width={150}
                      height={80}
                    />
                  )}
                  {client.name === "QLTech" && (
                    <img 
                      src="/images/qltech.jpg"
                      alt="QLTech logo" 
                      className="max-h-[80px] w-auto max-w-[150px] object-contain mx-auto" 
                      loading="lazy"
                      width={150}
                      height={80}
                    />
                  )}
                  {client.name === "Webosphere" && (
                    <img 
                      src="/images/webosphere.jpg"
                      alt="Webosphere logo" 
                      className="max-h-[80px] w-auto max-w-[150px] object-contain mx-auto" 
                      loading="lazy"
                      width={150}
                      height={80}
                    />
                  )}
                  {client.name === "TDC Contracting" && (
                    <img 
                      src="/images/tdc_contracting.jpg"
                      alt="TDC Contracting logo" 
                      className="max-h-[80px] w-auto max-w-[150px] object-contain mx-auto" 
                      loading="lazy"
                      width={150}
                      height={80}
                    />
                  )}
                  {client.name === "The Leela Corpo" && (
                    <img 
                      src="/images/the_leela_corpo.jpg"
                      alt="The Leela Corpo logo" 
                      className="max-h-[80px] w-auto max-w-[150px] object-contain mx-auto" 
                      loading="lazy"
                      width={150}
                      height={80}
                    />
                  )}
                  {client.name === "Kalintis" && (
                    <img 
                      src="/images/kalintis_logo.jpg"
                      alt="Kalintis logo" 
                      className="max-h-[80px] w-auto max-w-[150px] object-contain mx-auto" 
                      loading="lazy"
                      width={150}
                      height={80}
                    />
                  )}
                </div>
                <span className="text-[var(--primary)] text-base font-medium text-center w-full min-h-[3rem] flex items-center justify-center px-1 leading-tight">
                  {client.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Testimonials */}
        <motion.h3 
          className="text-2xl font-bold text-[var(--primary)] text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          What Our Clients Say
        </motion.h3>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={testimonial.id}
              className="bg-white p-8 rounded-lg shadow-md transition duration-300 hover:shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              viewport={{ once: true }}
            >
              <div className="text-yellow-400 mb-4 flex">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-[var(--darkgray)] italic mb-6">
                "{testimonial.content}"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[var(--primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-[var(--primary)]">{testimonial.author}</h4>
                  <p className="text-sm text-[var(--darkgray)]">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
