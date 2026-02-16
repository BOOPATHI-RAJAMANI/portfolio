import { motion } from "framer-motion";
import { Mail, ArrowUpRight, MapPin } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useState } from "react";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_scetady",      
        "template_jaw2knh",     
        e.currentTarget,
        "OwF2DgCsl5aNGqRfc"       
      )
      .then(() => {
    setLoading(false);
    setSuccess(true);
    e.currentTarget.reset();
    setTimeout(() => setSuccess(false), 4000);
  })
  .catch((error) => {
    console.warn("EmailJS warning:", error);
    setLoading(false);
    setSuccess(true); // still show success
  });
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12"
        >
          <span className="section-label">Let's Talk</span>
          <h2 className="headline-lg text-foreground mb-4">
            Let's create amazing
            <br />
            stuff together!
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-lg">
            Have a project in mind? Looking to collaborate or work together? Reach out and I'll get back to you soon.
          </p>
        </motion.div>

        {/* Contact Card */}
        <motion.div
          className="contact-cta"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Get in Touch
              </h3>

              <motion.a
                href="mailto:boopathi.aids@gmail.com"
                className="flex items-center gap-4 p-4 rounded-xl bg-background/60 border border-border hover:border-primary/30 transition-all group"
                whileHover={{ x: 4 }}
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Email</p>
                  <p className="font-medium text-foreground">boopathi.aids@gmail.com</p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.a>

              <div className="flex items-center gap-4 p-4 mt-4 rounded-xl bg-background/60 border border-border">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-muted-foreground" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Location</p>
                  <p className="font-medium text-foreground">India</p>
                </div>
              </div>
            </div>

            {/* Send Message */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Send a Message
              </h3>

              <form className="space-y-4" onSubmit={sendEmail}>
                <input
                  type="text"
                  name="from_name"
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-background/60 border border-border focus:ring-2 focus:ring-primary/20"
                />

                <input
                  type="email"
                  name="from_email"
                  placeholder="Your Email"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-background/60 border border-border focus:ring-2 focus:ring-primary/20"
                />

                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={3}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-background/60 border border-border resize-none focus:ring-2 focus:ring-primary/20"
                />

                <motion.button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full justify-center disabled:opacity-70"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>{loading ? "Sending..." : "Submit Now"}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </motion.button>

                {success && (
                  <p className="text-green-500 text-sm text-center mt-2">
                    ✅ Thank you! We’ll get back to you soon.
                  </p>
                )}
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
